[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AccountLogin

# Namespace: AccountLogin

[cluster/export](cluster_export.md).AccountLogin

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.AccountLogin.Cluster.md)
- [GetSetupPinRequest](../interfaces/cluster_export.AccountLogin.GetSetupPinRequest.md)
- [GetSetupPinResponse](../interfaces/cluster_export.AccountLogin.GetSetupPinResponse.md)
- [LoginRequest](../interfaces/cluster_export.AccountLogin.LoginRequest.md)

### Variables

- [Cluster](cluster_export.AccountLogin.md#cluster)
- [ClusterInstance](cluster_export.AccountLogin.md#clusterinstance)
- [Complete](cluster_export.AccountLogin.md#complete)
- [TlvGetSetupPinRequest](cluster_export.AccountLogin.md#tlvgetsetuppinrequest)
- [TlvGetSetupPinResponse](cluster_export.AccountLogin.md#tlvgetsetuppinresponse)
- [TlvLoginRequest](cluster_export.AccountLogin.md#tlvloginrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.AccountLogin.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:227](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L227)

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:229](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L229)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.AccountLogin.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:98](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L98)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.AccountLogin.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:230](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L230)

___

### TlvGetSetupPinRequest

• `Const` **TlvGetSetupPinRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the AccountLogin getSetupPin command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L26)

___

### TlvGetSetupPinResponse

• `Const` **TlvGetSetupPinResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L49)

___

### TlvLoginRequest

• `Const` **TlvLoginRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the AccountLogin login command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:72](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L72)
