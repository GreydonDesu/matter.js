[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / SessionsBehavior

# Class: SessionsBehavior

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).SessionsBehavior

Active [ServerNode](node_export.ServerNode-1.md) client sessions.

## Hierarchy

- [`Behavior`](behavior_export.Behavior-1.md)

  ↳ **`SessionsBehavior`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.SessionsBehavior-1.md#constructor)

### Properties

- [#agent](node_export._internal_.SessionsBehavior-1.md##agent)
- [events](node_export._internal_.SessionsBehavior-1.md#events)
- [state](node_export._internal_.SessionsBehavior-1.md#state)
- [Internal](node_export._internal_.SessionsBehavior-1.md#internal)
- [dependencies](node_export._internal_.SessionsBehavior-1.md#dependencies)
- [early](node_export._internal_.SessionsBehavior-1.md#early)
- [id](node_export._internal_.SessionsBehavior-1.md#id)
- [schema](node_export._internal_.SessionsBehavior-1.md#schema)

### Accessors

- [[reference]](node_export._internal_.SessionsBehavior-1.md#[reference])
- [agent](node_export._internal_.SessionsBehavior-1.md#agent)
- [context](node_export._internal_.SessionsBehavior-1.md#context)
- [endpoint](node_export._internal_.SessionsBehavior-1.md#endpoint)
- [session](node_export._internal_.SessionsBehavior-1.md#session)
- [defaults](node_export._internal_.SessionsBehavior-1.md#defaults)
- [supervisor](node_export._internal_.SessionsBehavior-1.md#supervisor)

### Methods

- [#convertToExposedSession](node_export._internal_.SessionsBehavior-1.md##converttoexposedsession)
- [#enterOfflineMode](node_export._internal_.SessionsBehavior-1.md##enterofflinemode)
- [#enterOnlineMode](node_export._internal_.SessionsBehavior-1.md##enteronlinemode)
- [#sessionClosed](node_export._internal_.SessionsBehavior-1.md##sessionclosed)
- [#sessionOpened](node_export._internal_.SessionsBehavior-1.md##sessionopened)
- [#subscriptionsChanged](node_export._internal_.SessionsBehavior-1.md##subscriptionschanged)
- [[asyncDispose]](node_export._internal_.SessionsBehavior-1.md#[asyncdispose])
- [asAdmin](node_export._internal_.SessionsBehavior-1.md#asadmin)
- [callback](node_export._internal_.SessionsBehavior-1.md#callback)
- [initialize](node_export._internal_.SessionsBehavior-1.md#initialize)
- [reactTo](node_export._internal_.SessionsBehavior-1.md#reactto)
- [toString](node_export._internal_.SessionsBehavior-1.md#tostring)
- [set](node_export._internal_.SessionsBehavior-1.md#set)
- [supports](node_export._internal_.SessionsBehavior-1.md#supports)

## Constructors

### constructor

• **new SessionsBehavior**(`agent`, `backing`): [`SessionsBehavior`](node_export._internal_.SessionsBehavior-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`SessionsBehavior`](node_export._internal_.SessionsBehavior-1.md)

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[constructor](behavior_export.Behavior-1.md#constructor)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:146](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L146)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[#agent](behavior_export.Behavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L50)

___

### events

• **events**: [`Events`](node_export._internal_.SessionsBehavior.Events.md)

Access the behavior's events.

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[events](behavior_export.Behavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:22](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L22)

___

### state

• **state**: [`State`](node_export._internal_.SessionsBehavior.State.md)

Access the behavior's state.

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[state](behavior_export.Behavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L21)

___

### Internal

▪ `Static` **Internal**: () => {} = `EmptyState`

Implementation of internal state.  Subclasses may override to extend.

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[Internal](behavior_export.Behavior-1.md#internal)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:177](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L177)

___

### dependencies

▪ `Static` `Optional` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

Explicitly reference other [Behavior](behavior_export.Behavior-1.md)s as dependencies, ensuring this behavior is destroyed first.

This probably won't be commonly necessary.  If it is we can instrument Agent to collect dependencies
automatically.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[dependencies](behavior_export.Behavior-1.md#dependencies)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:271](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L271)

___

### early

▪ `Static` `Readonly` **early**: `boolean` = `false`

By default behaviors load lazily as they are accessed.  You can set this flag to true to force behaviors to load
immediately when the endpoint initializes.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[early](behavior_export.Behavior-1.md#early)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:74](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L74)

___

### id

▪ `Static` `Readonly` **id**: ``"sessions"``

Each behavior implementation has an ID that uniquely identifies the type of behavior.  An Endpoint may only have
one behavior with the specified ID.

Endpoint instances store each behavior in a property with the same name as the behavior's ID.

EndpointBuilder also uses the ID when replacing behaviors using the with() builder method.

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[id](behavior_export.Behavior-1.md#id)

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:19](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L19)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[schema](behavior_export.Behavior-1.md#schema)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:68](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L68)

## Accessors

### [reference]

• `get` **[reference]**(): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

Behavior.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

___

### agent

• `get` **agent**(): [`Agent`](endpoint_export.Agent-1.md)

The agent that owns the behavior.

#### Returns

[`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

Behavior.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

___

### context

• `get` **context**(): [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

The context in which the behavior operates.

#### Returns

[`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

Behavior.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The endpoint that owns behavior's agent.

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

Behavior.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

___

### session

• `get` **session**(): [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

The session in which the behavior has been invoked.

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

Behavior.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

___

### defaults

• `get` **defaults**(): `Record`\<`string`, `any`\>

Default state values.

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

Behavior.defaults

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L243)

___

### supervisor

• `get` **supervisor**(): [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

The data supervisor for the behavior.  The supervisor controls validation and access to behavior data.

#### Returns

[`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

Behavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:160](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L160)

## Methods

### #convertToExposedSession

▸ **#convertToExposedSession**(`session`): [`Session`](../interfaces/node_export._internal_.SessionsBehavior.Session.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

[`Session`](../interfaces/node_export._internal_.SessionsBehavior.Session.md)

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:35](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L35)

___

### #enterOfflineMode

▸ **#enterOfflineMode**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:84](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L84)

___

### #enterOnlineMode

▸ **#enterOnlineMode**(`sessions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessions` | [`SessionManager`](session_export.SessionManager.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:48](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L48)

___

### #sessionClosed

▸ **#sessionClosed**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L65)

___

### #sessionOpened

▸ **#sessionOpened**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:56](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L56)

___

### #subscriptionsChanged

▸ **#subscriptionsChanged**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:70](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L70)

___

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[[asyncDispose]](behavior_export.Behavior-1.md#[asyncdispose])

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

[Behavior](behavior_export.Behavior-1.md).[asAdmin](behavior_export.Behavior-1.md#asadmin)

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

[Behavior](behavior_export.Behavior-1.md).[callback](behavior_export.Behavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L225)

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

[Behavior](behavior_export.Behavior-1.md).[initialize](behavior_export.Behavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:24](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L24)

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

[Behavior](behavior_export.Behavior-1.md).[reactTo](behavior_export.Behavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L211)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[toString](behavior_export.Behavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:202](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L202)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

Create a new behavior with different default state values.

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

[Behavior](behavior_export.Behavior-1.md).[set](behavior_export.Behavior-1.md#set)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:250](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L250)

___

### supports

▸ **supports**(`other`): `boolean`

Does this behavior support functionality of a specific implementation?

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`boolean`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[supports](behavior_export.Behavior-1.md#supports)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:236](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L236)
