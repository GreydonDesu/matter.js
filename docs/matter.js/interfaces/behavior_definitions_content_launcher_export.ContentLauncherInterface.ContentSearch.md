[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/content-launcher/export](../modules/behavior_definitions_content_launcher_export.md) / [ContentLauncherInterface](../modules/behavior_definitions_content_launcher_export.ContentLauncherInterface.md) / ContentSearch

# Interface: ContentSearch

[behavior/definitions/content-launcher/export](../modules/behavior_definitions_content_launcher_export.md).[ContentLauncherInterface](../modules/behavior_definitions_content_launcher_export.ContentLauncherInterface.md).ContentSearch

## Table of contents

### Methods

- [launchContent](behavior_definitions_content_launcher_export.ContentLauncherInterface.ContentSearch.md#launchcontent)

## Methods

### launchContent

▸ **launchContent**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>\>

Upon receipt, this shall launch the specified content with optional search criteria. This command returns a
Launch Response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...[]\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:64](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L64)
