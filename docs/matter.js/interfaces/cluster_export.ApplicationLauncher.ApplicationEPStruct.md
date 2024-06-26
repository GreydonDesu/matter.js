[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / ApplicationEPStruct

# Interface: ApplicationEPStruct

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).ApplicationEPStruct

This specifies an app along with its corresponding endpoint.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvApplicationEPStruct`](../modules/cluster_export.ApplicationLauncher.md#tlvapplicationepstruct)\>

  ↳ **`ApplicationEPStruct`**

## Table of contents

### Properties

- [application](cluster_export.ApplicationLauncher.ApplicationEPStruct.md#application)
- [endpoint](cluster_export.ApplicationLauncher.ApplicationEPStruct.md#endpoint)

## Properties

### application

• **application**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

#### Inherited from

TypeFromSchema.application

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:64](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L64)

___

### endpoint

• `Optional` **endpoint**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L65)
