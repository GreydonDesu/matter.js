[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / DoorStateChangeEvent

# Interface: DoorStateChangeEvent

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).DoorStateChangeEvent

Body of the DoorLock doorStateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDoorStateChangeEvent`](../modules/cluster_export.DoorLock.md#tlvdoorstatechangeevent)\>

  ↳ **`DoorStateChangeEvent`**

## Table of contents

### Properties

- [doorState](cluster_export.DoorLock.DoorStateChangeEvent.md#doorstate)

## Properties

### doorState

• **doorState**: [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)

The new door state for this door event.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.2.1

#### Inherited from

TypeFromSchema.doorState

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:89](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L89)
