[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / AccessControlTargetStruct

# Interface: AccessControlTargetStruct

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).AccessControlTargetStruct

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAccessControlTargetStruct`](../modules/cluster_export.AccessControl.md#tlvaccesscontroltargetstruct)\>

  ↳ **`AccessControlTargetStruct`**

## Table of contents

### Properties

- [cluster](cluster_export.AccessControl.AccessControlTargetStruct.md#cluster)
- [deviceType](cluster_export.AccessControl.AccessControlTargetStruct.md#devicetype)
- [endpoint](cluster_export.AccessControl.AccessControlTargetStruct.md#endpoint)

## Properties

### cluster

• **cluster**: ``null`` \| [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>

#### Inherited from

TypeFromSchema.cluster

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:105](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L105)

___

### deviceType

• **deviceType**: ``null`` \| [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>

#### Inherited from

TypeFromSchema.deviceType

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:107](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L107)

___

### endpoint

• **endpoint**: ``null`` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L106)
