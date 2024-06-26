[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveToSaturationRequest

# Interface: MoveToSaturationRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveToSaturationRequest

Input to the ColorControl moveToSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveToSaturationRequest`](../modules/cluster_export.ColorControl.md#tlvmovetosaturationrequest)\>

  ↳ **`MoveToSaturationRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.MoveToSaturationRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveToSaturationRequest.md#optionsoverride)
- [saturation](cluster_export.ColorControl.MoveToSaturationRequest.md#saturation)
- [transitionTime](cluster_export.ColorControl.MoveToSaturationRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:192](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L192)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:193](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L193)

___

### saturation

• **saturation**: `number`

#### Inherited from

TypeFromSchema.saturation

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:190](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L190)

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:191](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L191)
