[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [BooleanState](../modules/cluster_export.BooleanState.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[BooleanState](../modules/cluster_export.BooleanState.md).Cluster

Boolean State

This cluster provides an interface to a boolean state called StateValue.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.BooleanState.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.BooleanState.Cluster.md#attributes)
- [base](cluster_export.BooleanState.Cluster.md#base)
- [commands](cluster_export.BooleanState.Cluster.md#commands)
- [events](cluster_export.BooleanState.Cluster.md#events)
- [extensions](cluster_export.BooleanState.Cluster.md#extensions)
- [features](cluster_export.BooleanState.Cluster.md#features)
- [id](cluster_export.BooleanState.Cluster.md#id)
- [name](cluster_export.BooleanState.Cluster.md#name)
- [revision](cluster_export.BooleanState.Cluster.md#revision)
- [supportedFeatures](cluster_export.BooleanState.Cluster.md#supportedfeatures)
- [unknown](cluster_export.BooleanState.Cluster.md#unknown)

### Methods

- [alter](cluster_export.BooleanState.Cluster.md#alter)
- [enable](cluster_export.BooleanState.Cluster.md#enable)
- [set](cluster_export.BooleanState.Cluster.md#set)
- [with](cluster_export.BooleanState.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `stateChange` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> | This event shall be generated when the StateValue attribute changes. The StateValue field shall indicate the new value of the StateValue attribute. **`See`** [MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.7.5.1 |

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``69``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"BooleanState"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
