[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md) / [OperationalCredentialsInterface](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.md) / Base

# Interface: Base

[behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md).[OperationalCredentialsInterface](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.md).Base

## Table of contents

### Methods

- [addNoc](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#addnoc)
- [addTrustedRootCertificate](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#addtrustedrootcertificate)
- [attestationRequest](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#attestationrequest)
- [certificateChainRequest](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#certificatechainrequest)
- [csrRequest](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#csrrequest)
- [removeFabric](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#removefabric)
- [updateFabricLabel](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#updatefabriclabel)
- [updateNoc](behavior_definitions_operational_credentials_export.OperationalCredentialsInterface.Base.md#updatenoc)

## Methods

### addNoc

▸ **addNoc**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

This command shall add a new NOC chain to the device and commission a new Fabric association upon successful
validation of all arguments and preconditions.

The new value shall immediately be reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and receiving
its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminVendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\> ; `caseAdminSubject`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `icacValue`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `ipkValue`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.8

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:362](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L362)

___

### addTrustedRootCertificate

▸ **addTrustedRootCertificate**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command shall add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding
representation, to the TrustedRootCertificates Attribute list and shall ensure the next AddNOC command
executed uses the provided certificate as its root of trust.

If the certificate from the RootCACertificate field is already installed, based on exact byte-for-byte
equality, then this command shall succeed with no change to the list.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
which would cause the new invocation to add a second root certificate within a given fail- safe timer
period, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
value, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator.

Note that the only method of removing a trusted root is by removing the Fabric that uses it as its root of
trust using the RemoveFabric command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `rootCaCertificate`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.13

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:536](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L536)

___

### attestationRequest

▸ **attestationRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attestationElements`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `attestationSignature`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\>

This command shall be generated to request the Attestation Information, in the form of an
AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a

recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field shall be
used in the computation of the Attestation Information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attestationNonce`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attestationElements`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `attestationSignature`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:309](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L309)

___

### certificateChainRequest

▸ **certificateChainRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `certificate`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\>

If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail with a
Status Code of INVALID_COMMAND.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `certificateType`: [`FieldType`](tlv_export.FieldType.md)\<[`CertificateChainType`](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `certificate`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:317](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L317)

___

### csrRequest

▸ **csrRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attestationSignature`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocsrElements`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\>

This command shall be generated to execute the Node Operational CSR Procedure and subsequently return the
NOCSR Information, in the form of a CSRResponse Command.

The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is malformed,
then this command shall fail with an INVALID_COMMAND status code.

If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE session,
the command shall fail with an INVALID_COMMAND status code, as it would never be possible to use a resulting
subsequent certificate issued from the CSR with the UpdateNOC command, which is forbidden over PASE sessions.

If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated keypair
shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the CSR shall be tagged
as being for a subsequent AddNOC. See Section 11.17.6.8, “AddNOC Command” and Section 11.17.6.9, “UpdateNOC
Command” for details about the processing.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure is found
to collide with an existing key pair already previously generated and installed, and that check had been
executed, then this command shall fail with a FAILURE status code sent back to the initiator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `csrNonce`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `isForUpdateNoc`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attestationSignature`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocsrElements`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:347](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L347)

___

### removeFabric

▸ **removeFabric**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped data.

If the given Fabric being removed is the last one to reference a given Trusted Root CA Certificate stored in
the Trusted Root Certificates list, then that Trusted Root Certificate shall be removed.

WARNING

This command, if referring to an already existing Fabric not under the control of the invoking
Administrator, shall ONLY be invoked after obtaining some form of explicit user consent through some method
executed by the Administrator or Commissioner. This method of obtaining consent SHOULD employ as much data
as possible about the existing Fabric associations within the Fabrics list, so that likelihood is as small
as possible of a user removing a Fabric unwittingly. If a method exists for an Administrator or Commissioner
to convey Fabric Removal to an entity related to that Fabric, whether in-band or out-of-band, then this
method SHOULD be used to notify the other Administrative Domain’s party of the removal. Otherwise, users may
only observe the removal of a Fabric association as persistently failing attempts to reach a Node
operationally.

This field shall contain the Fabric Index reference (see fabric-index) associated with the Fabric which is
to be removed from the device.

Effect on Receipt

If the FabricIndex field does not match the FabricIndex of any entry within the Fabrics list, then an
NOCResponse with a StatusCode of InvalidFabricIndex shall be returned for the command and there shall NOT be
any permanent changes to any device data.

Otherwise, one of the following outcomes shall occur:

  1. If the FabricIndex matches the last remaining entry in the Fabrics list, then the device shall delete
     all Matter related data on the node which was created since it was commissioned. This includes all
     Fabric-Scoped data, including Access Control List, bindings, scenes, group keys,

operational certificates, etc. All Trusted Roots shall also be removed. Any Matter related data including
logs, secure sessions, exchanges and interaction model constructs shall also be removed. Since this
operation involves the removal of the secure session data that may underpin the current set of exchanges,
the Node invoking the command SHOULD NOT expect a response before terminating its secure session with the
target.

2. If the FabricIndex does not equal the accessing fabric index, then the device shall begin the process of
irrevocably deleting all associated Fabric-Scoped data, including Access Control List, bindings, group keys,
operational certificates, etc. Any remaining Trusted Roots no longer referenced by any operational
certificate shall also be removed. All secure sessions, exchanges and interaction model constructs related
to the Operational Identity under the given Fabric shall also be removed. Following the removal, an
NOCResponse with a StatusCode of OK shall be returned.

3. If the FabricIndex equals the accessing fabric index, then the device shall begin the process of
irrevocably deleting all associated Fabric-Scoped data, including Access Control Entries, bindings, group
keys, operational certificates, etc. Any remaining Trusted Roots no longer referenced by any operational
certificate shall also be removed. All secure sessions, exchanges and interaction model constructs related
to the Operational Identity under the given Fabric shall also be removed. Since this operation involves the
removal of the secure session data that may underpin the current set of exchanges, the Node invoking the
command SHOULD NOT expect a response before terminating its secure session with the target.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.12

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:507](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L507)

___

### updateFabricLabel

▸ **updateFabricLabel**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

This command shall be used by an Administrator to set the user-visible Label field for a given Fabric, as
reflected by entries in the Fabrics attribute.

The Label SHOULD be used by Administrators to provide additional per-fabric context when operations such as
RemoveFabric are used.

This field shall contain the label to set for the fabric associated with the current secure session.

Effect on Receipt

If the Label field is identical to a Label already in use by a Fabric within the Fabrics list that is not
the accessing fabric, then an NOCResponse with a StatusCode of LabelConflict shall be returned for the
command and there shall NOT be any permanent changes to any Fabric data.

Otherwise, the Label field for the accesing fabric shall immediately be updated to reflect the

Label argument provided. Following the update, an NOCResponse with a StatusCode of OK shall be returned.

If the command was invoked within a fail-safe context after a successful UpdateNOC command, then the label
update shall apply to the pending update state that will be reverted if fail-safe expires prior to a
CommissioningComplete command. In other words, label updates apply to the state of the Fabrics Attribute as
currently visible, even for an existing fabric currently in process of being updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.11

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:449](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L449)

___

### updateNoc

▸ **updateNoc**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

This command shall replace the NOC and optional associated ICAC (if present) scoped under the accessing
fabric upon successful validation of all arguments and preconditions. The new value shall immediately be
reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest Command and receiving
its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

Effect When Received

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator, since the only
valid following logical operation is invoking the AddNOC command.

If the prior CSRRequest state that preceded UpdateNOC had the IsForUpdateNOC field indicated as false, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If any of the following conditions arise, the Node shall process an error by responding with an NOCResponse
with a StatusCode of InvalidNOC as described in Section 11.17.6.7.2, “Handling Errors”:

  • The NOC provided in the NOCValue does not refer in its subject to the FabricID associated with the
    accessing fabric.

  • The ICAC provided in the ICACValue (if present) has a FabricID in its subject that does not match the
    FabricID associated with the accessing fabric.

Otherwise, the command is considered an update of existing credentials for a given Fabric, and the following
shall apply:

  1. The Operational Certificate under the accessing fabric index in the NOCs list shall be updated to match
     the incoming NOCValue and ICACValue (if present), such that the Node’s Operational Identifier within
     the Fabric immediately changes.

    a. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the
       prior CSRRequest command, shall be committed to permanent storage, for subsequent use during CASE.

    b. The operational discovery service record shall immediately reflect the new Operational Identifier.

    c. All internal data reflecting the prior operational identifier of the Node within the Fabric shall be
       revoked and removed, to an outcome equivalent to the disappearance of the prior Node, except for the
       ongoing CASE session context, which shall temporarily remain valid until the NOCResponse has been
       successfully delivered or until the next transport-layer error, so that the response can be received
       by the Administrator invoking the command.

Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
matching the FabricIndex under which the updated NOC is scoped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `icacValue`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.9

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts:421](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsInterface.ts#L421)
