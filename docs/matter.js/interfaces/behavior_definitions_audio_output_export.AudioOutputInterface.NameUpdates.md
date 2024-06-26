[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/audio-output/export](../modules/behavior_definitions_audio_output_export.md) / [AudioOutputInterface](../modules/behavior_definitions_audio_output_export.AudioOutputInterface.md) / NameUpdates

# Interface: NameUpdates

[behavior/definitions/audio-output/export](../modules/behavior_definitions_audio_output_export.md).[AudioOutputInterface](../modules/behavior_definitions_audio_output_export.AudioOutputInterface.md).NameUpdates

## Table of contents

### Methods

- [renameOutput](behavior_definitions_audio_output_export.AudioOutputInterface.NameUpdates.md#renameoutput)

## Methods

### renameOutput

▸ **renameOutput**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt, this shall rename the output at a specific index in the Output List.

Updates to the output name shall appear in the device’s settings menus. Name updates may automatically be
sent to the actual device to which the output connects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L46)
