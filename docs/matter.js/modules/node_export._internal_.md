[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](node_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Namespaces

- [ActionTracer](node_export._internal_.ActionTracer.md)
- [CommissioningBehavior](node_export._internal_.CommissioningBehavior.md)
- [CommissioningOptions](node_export._internal_.CommissioningOptions.md)
- [EndpointLifecycle](node_export._internal_.EndpointLifecycle.md)
- [IndexBehavior](node_export._internal_.IndexBehavior.md)
- [NetworkServer](node_export._internal_.NetworkServer.md)
- [ProductDescriptionServer](node_export._internal_.ProductDescriptionServer.md)
- [SessionsBehavior](node_export._internal_.SessionsBehavior.md)
- [SubscriptionOptions](node_export._internal_.SubscriptionOptions.md)

### Enumerations

- [Change](../enums/node_export._internal_.Change.md)

### Classes

- [ActionTracer](../classes/node_export._internal_.ActionTracer-1.md)
- [Behaviors](../classes/node_export._internal_.Behaviors.md)
- [CommissioningBehavior](../classes/node_export._internal_.CommissioningBehavior-1.md)
- [EndpointLifecycle](../classes/node_export._internal_.EndpointLifecycle-1.md)
- [IndexBehavior](../classes/node_export._internal_.IndexBehavior-1.md)
- [MdnsInstanceBroadcaster](../classes/node_export._internal_.MdnsInstanceBroadcaster.md)
- [NetworkServer](../classes/node_export._internal_.NetworkServer-1.md)
- [Parts](../classes/node_export._internal_.Parts.md)
- [PartsBehavior](../classes/node_export._internal_.PartsBehavior.md)
- [ProductDescriptionServer](../classes/node_export._internal_.ProductDescriptionServer-1.md)
- [ServerNetworkRuntime](../classes/node_export._internal_.ServerNetworkRuntime.md)
- [SessionsBehavior](../classes/node_export._internal_.SessionsBehavior-1.md)
- [TransactionalInteractionServer](../classes/node_export._internal_.TransactionalInteractionServer.md)

### Interfaces

- [CommissioningOptions](../interfaces/node_export._internal_.CommissioningOptions-1.md)
- [SubscriptionOptions](../interfaces/node_export._internal_.SubscriptionOptions-1.md)

### Type Aliases

- [Options](node_export._internal_.md#options)
- [With](node_export._internal_.md#with)

## Type Aliases

### Options

Ƭ **Options**: \{ `activity`: [`NodeActivity`](../classes/behavior_cluster_export._internal_.NodeActivity-1.md) ; `command?`: `boolean` ; `fabricFiltered?`: `boolean` ; `message?`: [`Message`](../interfaces/codec_export.Message.md) ; `timed?`: `boolean` ; `trace?`: [`Action`](../interfaces/behavior_cluster_export._internal_.Action.md)  } & \{ `fabric?`: `undefined` ; `session`: [`Session`](../classes/session_export.Session.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\> ; `subject?`: `undefined`  } \| \{ `fabric`: [`FabricIndex`](datatype_export.md#fabricindex) ; `session?`: `undefined` ; `subject`: [`SubjectId`](datatype_export.md#subjectid)  }

#### Defined in

[packages/matter.js/src/behavior/context/server/OnlineContext.ts:127](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/OnlineContext.ts#L127)

___

### With

Ƭ **With**\<`B`, `SB`\>: `Omit`\<`B`, ``"behaviors"`` \| ``"defaults"`` \| ``"set"`` \| ``"with"``\> & \{ `behaviors`: `B`[``"behaviors"``] & `SB` ; `defaults`: [`StateOf`](behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`SB`\> ; `set`: (`defaults`: [`InputStateOf`](behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<`SB`\>) => [`With`](node_export._internal_.md#with)\<`B`, `SB`\> ; `with`: \<BL\>(...`behaviors`: `BL`) => [`With`](node_export._internal_.md#with)\<`B`, [`With`](behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<`SB`, `BL`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |
| `SB` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:80](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L80)
