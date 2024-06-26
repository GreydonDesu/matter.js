[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DiagnosticLogs](../modules/cluster_export.DiagnosticLogs.md) / RetrieveLogsResponse

# Interface: RetrieveLogsResponse

[cluster/export](../modules/cluster_export.md).[DiagnosticLogs](../modules/cluster_export.DiagnosticLogs.md).RetrieveLogsResponse

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRetrieveLogsResponse`](../modules/cluster_export.DiagnosticLogs.md#tlvretrievelogsresponse)\>

  ↳ **`RetrieveLogsResponse`**

## Table of contents

### Properties

- [logContent](cluster_export.DiagnosticLogs.RetrieveLogsResponse.md#logcontent)
- [status](cluster_export.DiagnosticLogs.RetrieveLogsResponse.md#status)
- [timeSinceBoot](cluster_export.DiagnosticLogs.RetrieveLogsResponse.md#timesinceboot)
- [utcTimeStamp](cluster_export.DiagnosticLogs.RetrieveLogsResponse.md#utctimestamp)

## Properties

### logContent

• **logContent**: `Uint8Array`

This field shall be included in the command if the Status field has a value of Success or Exhausted. A Node
SHOULD utilize this field to transfer the newest diagnostic log entries. This field shall be empty if BDX is
requested and the Status field has a value of Success.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.2.2

#### Inherited from

TypeFromSchema.logContent

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:223](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L223)

___

### status

• **status**: [`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)

This field shall indicate the result of an attempt to retrieve diagnostic logs.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:214](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L214)

___

### timeSinceBoot

• `Optional` **timeSinceBoot**: `number` \| `bigint`

This field SHOULD be included in the command if the Status field has a value of Success. When included, the
TimeSinceBoot field shall contain the time of the oldest log entry in the diagnostic logs that are being
transferred represented by the number of microseconds since the last time the Node went through a reboot.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.2.4

#### Inherited from

TypeFromSchema.timeSinceBoot

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:241](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L241)

___

### utcTimeStamp

• `Optional` **utcTimeStamp**: `number` \| `bigint`

This field SHOULD be included in the command if the Status field has a value of Success and the Node
maintains a wall clock. When included, the UTCTimeStamp field shall contain the value of the oldest log
entry in the diagnostic logs that are being transferred.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.2.3

#### Inherited from

TypeFromSchema.utcTimeStamp

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:232](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L232)
