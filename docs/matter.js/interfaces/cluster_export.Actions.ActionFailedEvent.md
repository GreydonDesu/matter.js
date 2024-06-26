[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ActionFailedEvent

# Interface: ActionFailedEvent

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ActionFailedEvent

Body of the Actions actionFailed event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvActionFailedEvent`](../modules/cluster_export.Actions.md#tlvactionfailedevent)\>

  ↳ **`ActionFailedEvent`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.ActionFailedEvent.md#actionid)
- [error](cluster_export.Actions.ActionFailedEvent.md#error)
- [invokeId](cluster_export.Actions.ActionFailedEvent.md#invokeid)
- [newState](cluster_export.Actions.ActionFailedEvent.md#newstate)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:634](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L634)

___

### error

• **error**: [`ActionError`](../enums/cluster_export.Actions.ActionError.md)

This field shall be set to indicate the reason for non-successful progress of the action.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.2.1

#### Inherited from

TypeFromSchema.error

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:643](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L643)

___

### invokeId

• **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:635](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L635)

___

### newState

• **newState**: [`ActionState`](../enums/cluster_export.Actions.ActionState.md)

#### Inherited from

TypeFromSchema.newState

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:636](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L636)
