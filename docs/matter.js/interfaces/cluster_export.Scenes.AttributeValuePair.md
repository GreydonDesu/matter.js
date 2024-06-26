[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / AttributeValuePair

# Interface: AttributeValuePair

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).AttributeValuePair

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAttributeValuePair`](../modules/cluster_export.Scenes.md#tlvattributevaluepair)\>

  ↳ **`AttributeValuePair`**

## Table of contents

### Properties

- [attributeId](cluster_export.Scenes.AttributeValuePair.md#attributeid)
- [attributeValue](cluster_export.Scenes.AttributeValuePair.md#attributevalue)

## Properties

### attributeId

• `Optional` **attributeId**: [`AttributeId`](../modules/datatype_export.md#attributeid)

This field shall be present or not present, for all instances in the Scenes cluster. If this field is not
present, then the data type of AttributeValue shall be determined by the order and data type defined in the
cluster specification. Otherwise the data type of AttributeValue shall be the data type of the attribute
indicated by AttributeID.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.6.1.1

#### Inherited from

TypeFromSchema.attributeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:63](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L63)

___

### attributeValue

• **attributeValue**: [`TlvStream`](../modules/tlv_export.md#tlvstream)

This is the attribute value as part of an extension field set. See AttributeID to determine the data type
for this field.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.6.1.2

#### Inherited from

TypeFromSchema.attributeValue

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:71](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L71)
