[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/audio-output/export](../modules/behavior_definitions_audio_output_export.md) / [AudioOutputBehavior](../modules/behavior_definitions_audio_output_export.AudioOutputBehavior.md) / State

# Interface: State

[behavior/definitions/audio-output/export](../modules/behavior_definitions_audio_output_export.md).[AudioOutputBehavior](../modules/behavior_definitions_audio_output_export.AudioOutputBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_audio_output_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentOutput](behavior_definitions_audio_output_export.AudioOutputBehavior.State.md#currentoutput)
- [outputList](behavior_definitions_audio_output_export.AudioOutputBehavior.State.md#outputlist)

## Properties

### currentOutput

• **currentOutput**: `number`

This field contains the value of the index field of the currently selected OutputInfoStruct.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.3.2

#### Inherited from

StateType.currentOutput

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:165](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L165)

___

### outputList

• **outputList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](tlv_export.FieldType.md)\<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[]

This list provides the outputs supported by the device.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.3.1

#### Inherited from

StateType.outputList

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:158](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L158)
