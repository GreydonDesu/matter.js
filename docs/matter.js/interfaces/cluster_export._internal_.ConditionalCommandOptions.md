[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [\<internal\>](../modules/cluster_export._internal_.md) / ConditionalCommandOptions

# Interface: ConditionalCommandOptions\<F\>

[cluster/export](../modules/cluster_export.md).[\<internal\>](../modules/cluster_export._internal_.md).ConditionalCommandOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`CommandOptions`](cluster_export._internal_.CommandOptions.md)

  ↳ **`ConditionalCommandOptions`**

## Table of contents

### Properties

- [invokeAcl](cluster_export._internal_.ConditionalCommandOptions.md#invokeacl)
- [mandatoryIf](cluster_export._internal_.ConditionalCommandOptions.md#mandatoryif)
- [optionalIf](cluster_export._internal_.ConditionalCommandOptions.md#optionalif)
- [timed](cluster_export._internal_.ConditionalCommandOptions.md#timed)

## Properties

### invokeAcl

• `Optional` **invokeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[CommandOptions](cluster_export._internal_.CommandOptions.md).[invokeAcl](cluster_export._internal_.CommandOptions.md#invokeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:634](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L634)

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:640](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L640)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:639](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L639)

___

### timed

• `Optional` **timed**: `boolean`

#### Inherited from

[CommandOptions](cluster_export._internal_.CommandOptions.md).[timed](cluster_export._internal_.CommandOptions.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:635](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L635)
