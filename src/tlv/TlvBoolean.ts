/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvSchema } from "./TlvSchema.js";

/**
 * Schema to encode a boolean in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.3
 */
 class BooleanSchema extends TlvSchema<boolean> {
    /** @override */
    encodeTlv(writer: DataWriterLE, value: boolean, tag: TlvTag = {}): void {
        TlvCodec.writeTag(writer, { type: TlvType.Boolean, value },  tag);
    }

    /** @override */
    decodeTlv(reader: DataReaderLE) {
        const { tag, typeLength } = TlvCodec.readTagType(reader);
        return { tag, value: this.decodeTlvValue(reader, typeLength) };
    }

    /** @override */
    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength) {
        if (typeLength.type !== TlvType.Boolean) throw new Error(`Unexpected type ${typeLength.type}.`)
        return typeLength.value;
    }
}

/** Boolean TLV schema. */
export const TlvBoolean = new BooleanSchema();