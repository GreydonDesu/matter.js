[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md) / [MediaPlaybackInterface](../modules/behavior_definitions_media_playback_export.MediaPlaybackInterface.md) / AdvancedSeek

# Interface: AdvancedSeek

[behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md).[MediaPlaybackInterface](../modules/behavior_definitions_media_playback_export.MediaPlaybackInterface.md).AdvancedSeek

## Table of contents

### Methods

- [seek](behavior_definitions_media_playback_export.MediaPlaybackInterface.AdvancedSeek.md#seek)

## Methods

### seek

▸ **seek**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall change the playback position in the media to the given position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.11

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:111](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L111)
