[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / EnhancedMoveHueRequest

# Interface: EnhancedMoveHueRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).EnhancedMoveHueRequest

Input to the ColorControl enhancedMoveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEnhancedMoveHueRequest`](../modules/cluster_export.ColorControl.md#tlvenhancedmovehuerequest)\>

  ↳ **`EnhancedMoveHueRequest`**

## Table of contents

### Properties

- [moveMode](cluster_export.ColorControl.EnhancedMoveHueRequest.md#movemode)
- [optionsMask](cluster_export.ColorControl.EnhancedMoveHueRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.EnhancedMoveHueRequest.md#optionsoverride)
- [rate](cluster_export.ColorControl.EnhancedMoveHueRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)

This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be ignored.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:592](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L592)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:604](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L604)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:605](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L605)

___

### rate

• **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the extended hue of
a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:602](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L602)
