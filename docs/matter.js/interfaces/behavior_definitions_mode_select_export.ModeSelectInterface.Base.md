[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/mode-select/export](../modules/behavior_definitions_mode_select_export.md) / [ModeSelectInterface](../modules/behavior_definitions_mode_select_export.ModeSelectInterface.md) / Base

# Interface: Base

[behavior/definitions/mode-select/export](../modules/behavior_definitions_mode_select_export.md).[ModeSelectInterface](../modules/behavior_definitions_mode_select_export.ModeSelectInterface.md).Base

## Table of contents

### Methods

- [changeToMode](behavior_definitions_mode_select_export.ModeSelectInterface.Base.md#changetomode)

## Methods

### changeToMode

▸ **changeToMode**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.8.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L34)
