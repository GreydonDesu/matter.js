[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Identify](../modules/cluster_export.Identify.md) / IdentifyQueryResponse

# Interface: IdentifyQueryResponse

[cluster/export](../modules/cluster_export.md).[Identify](../modules/cluster_export.Identify.md).IdentifyQueryResponse

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvIdentifyQueryResponse`](../modules/cluster_export.Identify.md#tlvidentifyqueryresponse)\>

  ↳ **`IdentifyQueryResponse`**

## Table of contents

### Properties

- [timeout](cluster_export.Identify.IdentifyQueryResponse.md#timeout)

## Properties

### timeout

• **timeout**: `number`

This field contains the current value of the IdentifyTime attribute, and specifies the length of time, in
seconds, that the device will continue to identify itself.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.4.1

#### Inherited from

TypeFromSchema.timeout

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:41](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L41)
