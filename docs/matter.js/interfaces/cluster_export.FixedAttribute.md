[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FixedAttribute

# Interface: FixedAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).FixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Attribute`](cluster_export.Attribute.md)\<`T`, `F`\>

  ↳ **`FixedAttribute`**

## Table of contents

### Properties

- [default](cluster_export.FixedAttribute.md#default)
- [fabricScoped](cluster_export.FixedAttribute.md#fabricscoped)
- [fixed](cluster_export.FixedAttribute.md#fixed)
- [id](cluster_export.FixedAttribute.md#id)
- [isConditional](cluster_export.FixedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.FixedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.FixedAttribute.md#omitchanges)
- [optional](cluster_export.FixedAttribute.md#optional)
- [optionalIf](cluster_export.FixedAttribute.md#optionalif)
- [persistent](cluster_export.FixedAttribute.md#persistent)
- [readAcl](cluster_export.FixedAttribute.md#readacl)
- [scene](cluster_export.FixedAttribute.md#scene)
- [schema](cluster_export.FixedAttribute.md#schema)
- [timed](cluster_export.FixedAttribute.md#timed)
- [unknown](cluster_export.FixedAttribute.md#unknown)
- [writable](cluster_export.FixedAttribute.md#writable)
- [writeAcl](cluster_export.FixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[default](cluster_export.Attribute.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[fabricScoped](cluster_export.Attribute.md#fabricscoped)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### fixed

• **fixed**: ``true``

#### Overrides

[Attribute](cluster_export.Attribute.md).[fixed](cluster_export.Attribute.md#fixed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L93)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[Attribute](cluster_export.Attribute.md).[id](cluster_export.Attribute.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[isConditional](cluster_export.Attribute.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Attribute](cluster_export.Attribute.md).[mandatoryIf](cluster_export.Attribute.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[omitChanges](cluster_export.Attribute.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### optional

• **optional**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[optional](cluster_export.Attribute.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Attribute](cluster_export.Attribute.md).[optionalIf](cluster_export.Attribute.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[persistent](cluster_export.Attribute.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[Attribute](cluster_export.Attribute.md).[readAcl](cluster_export.Attribute.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L39)

___

### scene

• **scene**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[scene](cluster_export.Attribute.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[Attribute](cluster_export.Attribute.md).[schema](cluster_export.Attribute.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### timed

• **timed**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[timed](cluster_export.Attribute.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[unknown](cluster_export.Attribute.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### writable

• **writable**: `boolean`

#### Inherited from

[Attribute](cluster_export.Attribute.md).[writable](cluster_export.Attribute.md#writable)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[Attribute](cluster_export.Attribute.md).[writeAcl](cluster_export.Attribute.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/Cluster.ts#L47)
