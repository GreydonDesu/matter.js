[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-commissioning/export](../modules/behavior_definitions_general_commissioning_export.md) / GeneralCommissioningServer

# Class: GeneralCommissioningServer

[behavior/definitions/general-commissioning/export](../modules/behavior_definitions_general_commissioning_export.md).GeneralCommissioningServer

This is the default server implementation of GeneralCommissioningBehavior.

## Hierarchy

- [`GeneralCommissioningBehavior`](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md)

  ↳ **`GeneralCommissioningServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md##agent)
- [[reference]](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#[reference])
- [agent](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#agent)
- [cluster](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#cluster)
- [context](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#context)
- [endpoint](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#endpoint)
- [events](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#events)
- [features](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#features)
- [session](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#session)
- [state](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#state)
- [Events](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#events-1)
- [Interface](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#interface)
- [Internal](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#internal)
- [cluster](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#cluster-1)
- [defaults](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#defaults)
- [dependencies](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#dependencies)
- [early](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#early)
- [id](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#id)
- [name](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#name)
- [schema](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#schema)
- [supervisor](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#supervisor)
- [supports](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#[asyncdispose])
- [armFailSafe](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#armfailsafe)
- [asAdmin](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#asadmin)
- [callback](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#callback)
- [commissioningComplete](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#commissioningcomplete)
- [initialize](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#initialize)
- [reactTo](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#reactto)
- [setRegulatoryConfig](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#setregulatoryconfig)
- [toString](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#tostring)
- [alter](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#alter)
- [enable](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#enable)
- [for](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#for)
- [set](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#set)
- [with](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md#with)

## Constructors

### constructor

• **new GeneralCommissioningServer**(`agent`, `backing`): [`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md)

#### Inherited from

GeneralCommissioningBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[#agent](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L50)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[[reference]](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[agent](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[cluster](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[context](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[endpoint](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `basicCommissioningInfo$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `breadcrumb$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number` \| `bigint`, `any`\>\> ; `locationCapability$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\>\> ; `regulatoryConfig$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\>\> ; `supportsConcurrentConnection$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[events](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:144](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L144)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[features](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[session](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

___

### state

• **state**: [`State`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.State.md)

Access the behavior's state.

#### Overrides

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[state](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L26)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.GeneralCommissioning.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GeneralCommissioningInterface`](../modules/behavior_definitions_general_commissioning_export.md#generalcommissioninginterface)\>\>

#### Inherited from

GeneralCommissioningBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`GeneralCommissioningInterface`](../modules/behavior_definitions_general_commissioning_export.md#generalcommissioninginterface)

#### Inherited from

GeneralCommissioningBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:198](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L198)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

GeneralCommissioningBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.GeneralCommissioning.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

GeneralCommissioningBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.GeneralCommissioning.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GeneralCommissioningInterface`](../modules/behavior_definitions_general_commissioning_export.md#generalcommissioninginterface)\>\>

#### Inherited from

GeneralCommissioningBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

GeneralCommissioningBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

GeneralCommissioningBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"generalCommissioning"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

GeneralCommissioningBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

GeneralCommissioningBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

GeneralCommissioningBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

GeneralCommissioningBehavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### supports

▪ `Static` **supports**: (`other`: [`Type`](../interfaces/behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Inherited from

GeneralCommissioningBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:205](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L205)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L197)

___

### armFailSafe

▸ **armFailSafe**(`«destructured»`): `Promise`\<\{ `debugText`: `string` = ""; `errorCode`: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md) = GeneralCommissioning.CommissioningError.Ok }\>

Success or failure of this command shall be communicated by the ArmFailSafeResponse command, unless some
data model validations caused a failure status code to be issued during the processing of the command.

If the fail-safe timer is not currently armed, the commissioning window is open, and the command was
received over a CASE session, the command shall leave the current fail-safe state unchanged and immediately
respond with an ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin. This is done to
allow commissioners, which use PASE connections, the opportunity to use the failsafe during the relatively
short commissioning window.

Otherwise, the command shall arm or re-arm the "fail-safe timer" with an expiry time set for a duration of
ExpiryLengthSeconds, or disarm it, depending on the situation:

  • If ExpiryLengthSeconds is 0 and the fail-safe timer was already armed and the accessing fabric matches
    the Fabric currently associated with the fail-safe context, then the fail-safe timer shall be
    immediately expired (see further below for side-effects of expiration).

  • If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation shall
    lead to a success response with no side-effects against the fail-safe context.

  • If ExpiryLengthSeconds is non-zero and the fail-safe timer was not currently armed, then the fail-safe
    timer shall be armed for that duration.

  • If ExpiryLengthSeconds is non-zero and the fail-safe timer was currently armed, and the accessing Fabric
    matches the fail-safe context’s associated Fabric, then the fail-safe timer shall be re- armed to expire
    in ExpiryLengthSeconds.

  • Otherwise, the command shall leave the current fail-safe state unchanged and immediately respond with
    ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin, indicating a likely conflict
    between commissioners.

The value of the Breadcrumb field shall be written to the Breadcrumb Attribute on successful execution of
the command.

If the receiver restarts unexpectedly (e.g., power interruption, software crash, or other reset) the
receiver shall behave as if the fail-safe timer expired and perform the sequence of clean-up steps listed
below.

On successful execution of the command, the ErrorCode field of the ArmFailSafeResponse shall be set to OK.

### Fail Safe Context

When first arming the fail-safe timer, a 'Fail Safe Context' shall be created on the receiver, to track the
following state information while the fail-safe is armed:

  • The fail-safe timer duration.

  • The state of all Network Commissioning Networks attribute configurations, to allow recovery of
    connectivity after Fail-Safe expiry.

  • Whether an AddNOC command or UpdateNOC command has taken place.

  • A Fabric Index for the fabric-scoping of the context, starting at the accessing fabric index for the
    ArmFailSafe command, and updated with the Fabric Index associated with an AddNOC command or an UpdateNOC
    command being invoked successfully during the ongoing Fail-Safe timer period.

  • The operational credentials associated with any Fabric whose configuration is affected by the UpdateNOC
    command.

  • Optionally: the previous state of non-fabric-scoped data that is mutated during the fail-safe period.

Note the following to assist in understanding the above state-keeping, which summarizes other normative
requirements in the respective sections:

  • The AddNOC command can only be invoked once per contiguous non-expiring fail-safe timer period, and only
    if no UpdateNOC command was previously processed within the same fail-safe timer period.

  • The UpdateNOC command can only be invoked once per contiguous non-expiring fail-safe timer

period, can only be invoked over a CASE session, and only if no AddNOC command was previously processed in
the same fail-safe timer period.

On creation of the Fail Safe Context a second timer shall be created to expire at
MaxCumulativeFailsafeSeconds as specified in BasicCommissioningInfo. This Cumulative Fail Safe Context timer
(CFSC timer) serves to limit the lifetime of any particular Fail Safe Context; it shall NOT be extended or
modified on subsequent invocations of ArmFailSafe associated with this Fail Safe Context. Upon expiry of the
CFSC timer, the receiver shall execute cleanup behavior equivalent to that of fail-safe timer expiration as
detailed in Section 11.9.6.2.2, “Behavior on expiry of Fail-Safe timer”. Termination of the session prior to
the expiration of that timer for any reason (including a successful end of commissioning or an expiry of a
fail-safe timer) shall also delete the CFSC timer.

### Behavior on expiry of Fail-Safe timer

If the fail-safe timer expires before the CommissioningComplete command is successfully invoked, the
following sequence of clean-up steps shall be executed, in order, by the receiver:

  1. Terminate any open PASE secure session by clearing any associated Secure Session Context at the Server.

  2. Revoke the temporary administrative privileges granted to any open PASE session (see Section 6.6.2.8,
     “Bootstrapping of the Access Control Cluster”) at the Server.

  3. If an AddNOC or UpdateNOC command has been successfully invoked, terminate all CASE sessions associated
     with the Fabric whose Fabric Index is recorded in the Fail-Safe context (see Section 11.9.6.2,
     “ArmFailSafe Command”) by clearing any associated Secure Session Context at the Server.

  4. Reset the configuration of all Network Commissioning Networks attribute to their state prior to the
     Fail-Safe being armed.

  5. If an UpdateNOC command had been successfully invoked, revert the state of operational key pair, NOC
     and ICAC for that Fabric to the state prior to the Fail-Safe timer being armed, for the Fabric Index
     that was the subject of the UpdateNOC command.

  6. If an AddNOC command had been successfully invoked, achieve the equivalent effect of invoking the
     RemoveFabric command against the Fabric Index stored in the Fail-Safe Context for the Fabric Index that
     was the subject of the AddNOC command. This shall remove all associations to that Fabric including all
     fabric-scoped data, and may possibly factory-reset the device depending on current device state. This
     shall only apply to Fabrics added during the fail-safe period as the result of the AddNOC command.

  7. Remove any RCACs added by the AddTrustedRootCertificate command that are not currently referenced by
     any entry in the Fabrics attribute.

  8. Reset the Breadcrumb attribute to zero.

  9. Optionally: if no factory-reset resulted from the previous steps, it is RECOMMENDED that the Node
     rollback the state of all non fabric-scoped data present in the Fail-Safe context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`Promise`\<\{ `debugText`: `string` = ""; `errorCode`: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md) = GeneralCommissioning.CommissioningError.Ok }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.2

#### Overrides

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[armFailSafe](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#armfailsafe)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L44)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#asadmin)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:124](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L124)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[callback](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L225)

___

### commissioningComplete

▸ **commissioningComplete**(): `Promise`\<\{ `debugText`: `string` = ""; `errorCode`: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md) = GeneralCommissioning.CommissioningError.Ok }\>

This command has no data.

Success or failure of this command shall be communicated by the CommissioningCompleteResponse command,
unless some data model validations caused a failure status code to be issued during the processing of the
command.

This command signals the Server that the Commissioner or Administrator has successfully completed all steps
needed during the Fail-Safe period, such as commissioning (see Section 5.5, “Commissioning Flows”) or other
Administrator operations requiring usage of the Fail Safe timer. It ensures that the Server is configured in
a state such that it still has all necessary elements to be fully operable within a Fabric, such as ACL
entries (see Access Control Cluster) and operational credentials (see Section 6.4, “Node Operational
Credentials Specification”), and that the Node is reachable using CASE (see Section 4.13.2, “Certificate
Authenticated Session Establishment (CASE)”) over an operational network.

An ErrorCode of NoFailSafe shall be responded to the invoker if the CommissioningComplete command was
received when no Fail-Safe context exists.

This command is fabric-scoped, so cannot be issued over a session that does not have an associated fabric,
i.e. over PASE session prior to an AddNOC command. In addition, this command is only permitted over CASE and
must be issued by a node associated with the ongoing Fail-Safe context. An ErrorCode of
InvalidAuthentication shall be responded to the invoker if the CommissioningComplete command was received
outside a CASE session (e.g., over Group messaging, or PASE session after AddNOC), or if the accessing
fabric is not the one associated with the ongoing Fail-Safe context.

This command shall only result in success with an ErrorCode value of OK in the CommissioningCompleteResponse
if received over a CASE session and the accessing fabric index matches the Fabric Index associated with the
current Fail-Safe context. In other words:

  • If no AddNOC command had been successfully invoked, the CommissioningComplete command must originate
    from the Fabric that initiated the Fail-Safe context.

  • After an AddNOC command has been successfully invoked, the CommissioningComplete command must originate
    from the Fabric which was joined through the execution of that command, which updated the Fail-Safe
    context’s Fabric Index.

On successful execution of the CommissioningComplete command, where the CommissioningCompleteResponse has an
ErrorCode of OK, the following actions shall be undertaken on the Server:

  1. The Fail-Safe timer associated with the current Fail-Safe context shall be disarmed.

  2. The commissioning window at the Server shall be closed.

  3. Any temporary administrative privileges automatically granted to any open PASE session shall be revoked
     (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).

  4. The Secure Session Context of any PASE session still established at the Server shall be cleared.

  5. The Breadcrumb attribute shall be reset to zero.

After receipt of a CommissioningCompleteResponse with an ErrorCode value of OK, a client cannot expect any
previously established PASE session to still be usable, due to the server having cleared such sessions.

#### Returns

`Promise`\<\{ `debugText`: `string` = ""; `errorCode`: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md) = GeneralCommissioning.CommissioningError.Ok }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.6

#### Overrides

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[commissioningComplete](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#commissioningcomplete)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:173](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L173)

___

### initialize

▸ **initialize**(): `void`

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`void`

#### Overrides

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[initialize](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:28](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L28)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[reactTo](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L211)

___

### setRegulatoryConfig

▸ **setRegulatoryConfig**(`«destructured»`): `Promise`\<\{ `debugText`: `string` = ""; `errorCode`: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md) = GeneralCommissioning.CommissioningError.Ok }\>

This shall add or update the regulatory configuration in the RegulatoryConfig Attribute to the value
provided in the NewRegulatoryConfig field.

Success or failure of this command shall be communicated by the SetRegulatoryConfigResponse command, unless
some data model validations caused a failure status code to be issued during the processing of the command.

The CountryCode field shall conforms to ISO 3166-1 alpha-2 and shall be used to set the Location attribute
reflected by the Basic Information Cluster.

If the server limits some of the values (e.g. locked to a particular country, with no regulatory data for
others), then setting regulatory information outside a valid country or location shall still set the
Location attribute reflected by the Basic Information Cluster configuration, but the
SetRegulatoryConfigResponse replied shall have the ErrorCode field set to ValueOutsideRange error.

If the LocationCapability attribute is not Indoor/Outdoor and the NewRegulatoryConfig value received does
not match either the Indoor or Outdoor fixed value in LocationCapability, then the
SetRegulatoryConfigResponse replied shall have the ErrorCode field set to ValueOutsideRange

error and the RegulatoryConfig attribute and associated internal radio configuration shall remain unchanged.

If the LocationCapability attribute is set to Indoor/Outdoor, then the RegulatoryConfig attribute shall be
set to match the NewRegulatoryConfig field.

On successful execution of the command, the ErrorCode field of the SetRegulatoryConfigResponse shall be set
to OK.

The Breadcrumb field shall be used to atomically set the Breadcrumb attribute on success of this command,
when SetRegulatoryConfigResponse has the ErrorCode field set to OK. If the command fails, the Breadcrumb
attribute shall be left unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `newRegulatoryConfig`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)\>  }\> |

#### Returns

`Promise`\<\{ `debugText`: `string` = ""; `errorCode`: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md) = GeneralCommissioning.CommissioningError.Ok }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.4

#### Overrides

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[setRegulatoryConfig](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#setregulatoryconfig)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L100)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md).[toString](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:202](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L202)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

GeneralCommissioningBehavior.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:233](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L233)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

GeneralCommissioningBehavior.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L243)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

GeneralCommissioningBehavior.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:219](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L219)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

GeneralCommissioningBehavior.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:241](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L241)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

GeneralCommissioningBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
