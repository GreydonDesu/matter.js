[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / GetCredentialStatusRequest

# Interface: GetCredentialStatusRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).GetCredentialStatusRequest

Input to the DoorLock getCredentialStatus command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetCredentialStatusRequest`](../modules/cluster_export.DoorLock.md#tlvgetcredentialstatusrequest)\>

  ↳ **`GetCredentialStatusRequest`**

## Table of contents

### Properties

- [credential](cluster_export.DoorLock.GetCredentialStatusRequest.md#credential)

## Properties

### credential

• **credential**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

#### Inherited from

TypeFromSchema.credential

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:407](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L407)
