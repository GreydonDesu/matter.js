[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Descriptor](../modules/cluster_export.Descriptor.md) / DeviceTypeStruct

# Interface: DeviceTypeStruct

[cluster/export](../modules/cluster_export.md).[Descriptor](../modules/cluster_export.Descriptor.md).DeviceTypeStruct

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.5.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDeviceTypeStruct`](../modules/cluster_export.Descriptor.md#tlvdevicetypestruct)\>

  ↳ **`DeviceTypeStruct`**

## Table of contents

### Properties

- [deviceType](cluster_export.Descriptor.DeviceTypeStruct.md#devicetype)
- [revision](cluster_export.Descriptor.DeviceTypeStruct.md#revision)

## Properties

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>

This shall indicate the device type definition. The endpoint shall conform to the device type definition and
cluster specifications required by the device type.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.5.4.1.1

#### Inherited from

TypeFromSchema.deviceType

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L36)

___

### revision

• **revision**: `number`

This is the implemented revision of the device type definition. The endpoint shall conform to this revision
of the device type.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.5.4.1.2

#### Inherited from

TypeFromSchema.revision

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L44)
