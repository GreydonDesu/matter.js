[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / LaunchUrlRequest

# Interface: LaunchUrlRequest

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).LaunchUrlRequest

Input to the ContentLauncher launchUrl command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLaunchUrlRequest`](../modules/cluster_export.ContentLauncher.md#tlvlaunchurlrequest)\>

  ↳ **`LaunchUrlRequest`**

## Table of contents

### Properties

- [brandingInformation](cluster_export.ContentLauncher.LaunchUrlRequest.md#brandinginformation)
- [contentUrl](cluster_export.ContentLauncher.LaunchUrlRequest.md#contenturl)
- [displayString](cluster_export.ContentLauncher.LaunchUrlRequest.md#displaystring)

## Properties

### brandingInformation

• `Optional` **brandingInformation**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>

This field, if present, shall indicate the branding information that may be displayed when playing back the
given content.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.2.3

#### Inherited from

TypeFromSchema.brandingInformation

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:237](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L237)

___

### contentUrl

• **contentUrl**: `string`

This shall indicate the URL of content to launch.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.2.1

#### Inherited from

TypeFromSchema.contentUrl

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:221](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L221)

___

### displayString

• `Optional` **displayString**: `string`

This field, if present, shall provide a string that may be used to describe the content being accessed at
the given URL.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.2.2

#### Inherited from

TypeFromSchema.displayString

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:229](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L229)
