[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/pulse-width-modulation/export](../modules/behavior_definitions_pulse_width_modulation_export.md) / PulseWidthModulationServer

# Class: PulseWidthModulationServer

[behavior/definitions/pulse-width-modulation/export](../modules/behavior_definitions_pulse_width_modulation_export.md).PulseWidthModulationServer

This is the default server implementation of [PulseWidthModulationBehavior](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationbehavior).

## Hierarchy

- [`PulseWidthModulationBehavior`](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md)

  ↳ **`PulseWidthModulationServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#constructor)

### Properties

- [#agent](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md##agent)
- [[reference]](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#[reference])
- [agent](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#agent)
- [cluster](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#cluster)
- [context](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#context)
- [endpoint](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#endpoint)
- [events](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#events)
- [features](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#features)
- [session](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#session)
- [state](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#state)
- [Events](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#events-1)
- [Interface](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#interface)
- [Internal](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#internal)
- [State](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#state-1)
- [cluster](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#cluster-1)
- [defaults](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#defaults)
- [dependencies](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#dependencies)
- [early](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#early)
- [id](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#id)
- [name](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#name)
- [schema](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#schema)
- [supervisor](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#supervisor)
- [supports](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#asadmin)
- [callback](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#callback)
- [initialize](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#initialize)
- [move](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#move)
- [moveToLevel](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#movetolevel)
- [moveToLevelWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#movetolevelwithonoff)
- [moveWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#movewithonoff)
- [reactTo](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#reactto)
- [step](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#step)
- [stepWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#stepwithonoff)
- [stop](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#stop)
- [stopWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#stopwithonoff)
- [toString](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#tostring)
- [alter](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#alter)
- [enable](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#enable)
- [for](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#for)
- [set](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#set)
- [with](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md#with)

## Constructors

### constructor

• **new PulseWidthModulationServer**(`agent`, `backing`): [`PulseWidthModulationServer`](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`PulseWidthModulationServer`](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md)

#### Inherited from

PulseWidthModulationBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[#agent](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L50)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[[reference]](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[agent](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[cluster](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[context](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[endpoint](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `currentLevel$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `onLevel$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `defaultMoveRate$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxLevel$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `minLevel$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `offTransitionTime$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOffTransitionTime$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `onTransitionTime$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[events](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:144](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L144)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onOff` | ``true`` |

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[features](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#features)

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

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[session](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `currentLevel`: ``null`` \| `number` ; `onLevel`: ``null`` \| `number` ; `options`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `defaultMoveRate?`: ``null`` \| `number` ; `maxLevel?`: `number` ; `minLevel?`: `number` ; `offTransitionTime?`: ``null`` \| `number` ; `onOffTransitionTime?`: `number` ; `onTransitionTime?`: ``null`` \| `number`  } & {} & {}

Access the behavior's state.

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[state](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:139](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L139)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`PulseWidthModulationInterface`](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>\>

#### Inherited from

PulseWidthModulationBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`PulseWidthModulationInterface`](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)

#### Inherited from

PulseWidthModulationBehavior.Interface

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

PulseWidthModulationBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`PulseWidthModulationInterface`](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`PulseWidthModulationInterface`](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`PulseWidthModulationInterface`](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>\>

#### Inherited from

PulseWidthModulationBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

PulseWidthModulationBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`PulseWidthModulationInterface`](../modules/behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>\>

#### Inherited from

PulseWidthModulationBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

PulseWidthModulationBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

PulseWidthModulationBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"pulseWidthModulation"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

PulseWidthModulationBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

PulseWidthModulationBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

PulseWidthModulationBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

PulseWidthModulationBehavior.supervisor

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

PulseWidthModulationBehavior.supports

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

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L197)

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

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#asadmin)

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

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[callback](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L225)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[initialize](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:191](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L191)

___

### move

▸ **move**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[move](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#move)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L57)

___

### moveToLevel

▸ **moveToLevel**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.1

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[moveToLevel](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#movetolevel)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L52)

___

### moveToLevelWithOnOff

▸ **moveToLevelWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[moveToLevelWithOnOff](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#movetolevelwithonoff)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L81)

___

### moveWithOnOff

▸ **moveWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[moveWithOnOff](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#movewithonoff)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L86)

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

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[reactTo](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L211)

___

### step

▸ **step**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second.
A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this
as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is
able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.3

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[step](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#step)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:71](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L71)

___

### stepWithOnOff

▸ **stepWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[stepWithOnOff](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#stepwithonoff)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L91)

___

### stop

▸ **stop**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.4

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[stop](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#stop)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L76)

___

### stopWithOnOff

▸ **stopWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[stopWithOnOff](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#stopwithonoff)

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:96](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L96)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md).[toString](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md#tostring)

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

PulseWidthModulationBehavior.alter

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

PulseWidthModulationBehavior.enable

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

PulseWidthModulationBehavior.for

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

PulseWidthModulationBehavior.set

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

PulseWidthModulationBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
