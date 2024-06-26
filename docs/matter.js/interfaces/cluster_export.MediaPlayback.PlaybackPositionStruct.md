[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / PlaybackPositionStruct

# Interface: PlaybackPositionStruct

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).PlaybackPositionStruct

This structure defines a playback position within a media stream being played.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvPlaybackPositionStruct`](../modules/cluster_export.MediaPlayback.md#tlvplaybackpositionstruct)\>

  ↳ **`PlaybackPositionStruct`**

## Table of contents

### Properties

- [position](cluster_export.MediaPlayback.PlaybackPositionStruct.md#position)
- [updatedAt](cluster_export.MediaPlayback.PlaybackPositionStruct.md#updatedat)

## Properties

### position

• **position**: ``null`` \| `number` \| `bigint`

This shall indicate the associated discrete position within the media stream, in milliseconds from the
beginning of the stream, being associated with the time indicated by the UpdatedAt field. The Position shall
not be greater than the duration of the media if duration is specified. The Position shall not be greater
than the time difference between current time and start time of the media when start time is specified.

A value of null shall indicate that playback position is not applicable for the current state of the media
playback (For example : Live media with no known duration and where seek is not supported).

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.3.2

#### Inherited from

TypeFromSchema.position

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L47)

___

### updatedAt

• **updatedAt**: `number` \| `bigint`

This shall indicate the time when the position was last updated.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.3.1

#### Inherited from

TypeFromSchema.updatedAt

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L34)
