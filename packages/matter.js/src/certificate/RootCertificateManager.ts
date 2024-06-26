/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../crypto/Crypto.js";
import { BinaryKeyPair, PrivateKey } from "../crypto/Key.js";
import { CaseAuthenticatedTag } from "../datatype/CaseAuthenticatedTag.js";
import { FabricId } from "../datatype/FabricId.js";
import { NodeId } from "../datatype/NodeId.js";
import { StorageContext } from "../storage/StorageContext.js";
import { Time } from "../time/Time.js";
import { AsyncConstruction, asyncNew } from "../util/AsyncConstruction.js";
import { ByteArray } from "../util/ByteArray.js";
import {
    CertificateManager,
    TlvOperationalCertificate,
    TlvRootCertificate,
    jsToMatterDate,
} from "./CertificateManager.js";

export class RootCertificateManager {
    private rootCertId = BigInt(0);
    private rootKeyPair = Crypto.createKeyPair();
    private rootKeyIdentifier = Crypto.hash(this.rootKeyPair.publicKey).slice(0, 20);
    private rootCertBytes = this.generateRootCert();
    private nextCertificateId = 1;
    #construction: AsyncConstruction<RootCertificateManager>;

    get construction() {
        return this.#construction;
    }

    static async create(storage: StorageContext) {
        return asyncNew(RootCertificateManager, storage);
    }

    constructor(storage: StorageContext) {
        this.#construction = AsyncConstruction(this, async () => {
            // Read from storage if we have them stored, else store the just generated data
            const certValues = await storage.values();
            if (
                certValues.rootCertId !== undefined &&
                certValues.rootKeyPair !== undefined &&
                certValues.rootKeyIdentifier !== undefined &&
                certValues.rootCertBytes !== undefined &&
                certValues.nextCertificateId !== undefined
            ) {
                this.rootCertId = certValues.rootCertId as bigint;
                this.rootKeyPair = PrivateKey(certValues.rootKeyPair as BinaryKeyPair);
                this.rootKeyIdentifier = certValues.rootKeyIdentifier as ByteArray;
                this.rootCertBytes = certValues.rootCertBytes as ByteArray;
                this.nextCertificateId = certValues.nextCertificateId as number;
                return;
            }
            await storage.set({
                rootCertId: this.rootCertId,
                rootKeyPair: this.rootKeyPair.keyPair,
                rootKeyIdentifier: this.rootKeyIdentifier,
                rootCertBytes: this.rootCertBytes,
                nextCertificateId: this.nextCertificateId,
            });
        });
    }

    getRootCert() {
        return this.rootCertBytes;
    }

    private generateRootCert() {
        const now = Time.get().now();
        const unsignedCertificate = {
            serialNumber: ByteArray.of(Number(this.rootCertId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { issuerRcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { rcacId: this.rootCertId },
            ellipticCurvePublicKey: this.rootKeyPair.publicKey,
            extensions: {
                basicConstraints: { isCa: true },
                keyUsage: 96,
                subjectKeyIdentifier: this.rootKeyIdentifier,
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.sign(this.rootKeyPair, CertificateManager.rootCertToAsn1(unsignedCertificate));
        return TlvRootCertificate.encode({ ...unsignedCertificate, signature });
    }

    generateNoc(
        publicKey: ByteArray,
        fabricId: FabricId,
        nodeId: NodeId,
        caseAuthenticatedTags?: CaseAuthenticatedTag[],
    ) {
        const now = Time.get().now();
        const certId = this.nextCertificateId++;
        const unsignedCertificate = {
            serialNumber: ByteArray.of(certId), // TODO: figure out what should happen if certId > 255
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { issuerRcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { fabricId, nodeId, caseAuthenticatedTags },
            ellipticCurvePublicKey: publicKey,
            extensions: {
                basicConstraints: { isCa: false },
                keyUsage: 1,
                extendedKeyUsage: [2, 1],
                subjectKeyIdentifier: Crypto.hash(publicKey).slice(0, 20),
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.sign(this.rootKeyPair, CertificateManager.nocCertToAsn1(unsignedCertificate));
        return TlvOperationalCertificate.encode({ ...unsignedCertificate, signature });
    }
}
