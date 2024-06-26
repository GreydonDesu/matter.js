[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PulseWidthModulation](../modules/cluster_export.PulseWidthModulation.md) / MoveRequest

# Interface: MoveRequest

[cluster/export](../modules/cluster_export.md).[PulseWidthModulation](../modules/cluster_export.PulseWidthModulation.md).MoveRequest

Input to the PulseWidthModulation move command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveRequest`](../modules/cluster_export.PulseWidthModulation.md#tlvmoverequest)\>

  ↳ **`MoveRequest`**

## Table of contents

### Properties

- [moveMode](cluster_export.PulseWidthModulation.MoveRequest.md#movemode)
- [optionsMask](cluster_export.PulseWidthModulation.MoveRequest.md#optionsmask)
- [optionsOverride](cluster_export.PulseWidthModulation.MoveRequest.md#optionsoverride)
- [rate](cluster_export.PulseWidthModulation.MoveRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L91)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:105](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L105)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L106)

___

### rate

• **rate**: ``null`` \| `number`

The Rate field specifies the rate of movement in units per second. The actual rate of movement SHOULD be as
close to this rate as the device is able. If the Rate field is equal to null, then the value in
DefaultMoveRate attribute shall be used. However, if the Rate field is equal to null and the DefaultMoveRate
attribute is not supported, or if the Rate field is equal to null and the value of the DefaultMoveRate
attribute is equal to null, then the device SHOULD move as fast as it is able. If the device is not able to
move at a variable rate, this field may be disregarded.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:103](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L103)
