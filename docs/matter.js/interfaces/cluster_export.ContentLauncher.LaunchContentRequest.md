[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / LaunchContentRequest

# Interface: LaunchContentRequest

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).LaunchContentRequest

Input to the ContentLauncher launchContent command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLaunchContentRequest`](../modules/cluster_export.ContentLauncher.md#tlvlaunchcontentrequest)\>

  ↳ **`LaunchContentRequest`**

## Table of contents

### Properties

- [autoPlay](cluster_export.ContentLauncher.LaunchContentRequest.md#autoplay)
- [data](cluster_export.ContentLauncher.LaunchContentRequest.md#data)
- [search](cluster_export.ContentLauncher.LaunchContentRequest.md#search)

## Properties

### autoPlay

• **autoPlay**: `boolean`

This shall indicate whether to automatically start playing content, where: * TRUE means best match should
start playing automatically. * FALSE means matches should be displayed on screen for user selection.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1.2

#### Inherited from

TypeFromSchema.autoPlay

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:488](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L488)

___

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1.3

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:495](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L495)

___

### search

• **search**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>[]\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>

This shall indicate the content to launch.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1.1

#### Inherited from

TypeFromSchema.search

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:480](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L480)
