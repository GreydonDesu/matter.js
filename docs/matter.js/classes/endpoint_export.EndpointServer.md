[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/export](../modules/endpoint_export.md) / EndpointServer

# Class: EndpointServer

[endpoint/export](../modules/endpoint_export.md).EndpointServer

EndpointServer makes a [Endpoint](endpoint_export.Endpoint-1.md) available for remote access as an Endpoint on a Matter network.

## Implements

- [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

## Table of contents

### Constructors

- [constructor](endpoint_export.EndpointServer.md#constructor)

### Properties

- [#clusterServers](endpoint_export.EndpointServer.md##clusterservers)
- [#endpoint](endpoint_export.EndpointServer.md##endpoint)
- [#name](endpoint_export.EndpointServer.md##name)

### Accessors

- [[value]](endpoint_export.EndpointServer.md#[value])
- [endpoint](endpoint_export.EndpointServer.md#endpoint)
- [name](endpoint_export.EndpointServer.md#name)
- [number](endpoint_export.EndpointServer.md#number)

### Methods

- [[asyncDispose]](endpoint_export.EndpointServer.md#[asyncdispose])
- [addChildEndpoint](endpoint_export.EndpointServer.md#addchildendpoint)
- [addClusterClient](endpoint_export.EndpointServer.md#addclusterclient)
- [addClusterServer](endpoint_export.EndpointServer.md#addclusterserver)
- [close](endpoint_export.EndpointServer.md#close)
- [createBacking](endpoint_export.EndpointServer.md#createbacking)
- [determineUniqueID](endpoint_export.EndpointServer.md#determineuniqueid)
- [getAllClusterClients](endpoint_export.EndpointServer.md#getallclusterclients)
- [getAllClusterServers](endpoint_export.EndpointServer.md#getallclusterservers)
- [getChildEndpoint](endpoint_export.EndpointServer.md#getchildendpoint)
- [getChildEndpoints](endpoint_export.EndpointServer.md#getchildendpoints)
- [getClusterClient](endpoint_export.EndpointServer.md#getclusterclient)
- [getClusterServer](endpoint_export.EndpointServer.md#getclusterserver)
- [getClusterServerById](endpoint_export.EndpointServer.md#getclusterserverbyid)
- [getNumber](endpoint_export.EndpointServer.md#getnumber)
- [hasClusterServer](endpoint_export.EndpointServer.md#hasclusterserver)
- [removeFromStructure](endpoint_export.EndpointServer.md#removefromstructure)
- [setStructureChangedCallback](endpoint_export.EndpointServer.md#setstructurechangedcallback)
- [updatePartsList](endpoint_export.EndpointServer.md#updatepartslist)
- [verifyRequiredClusters](endpoint_export.EndpointServer.md#verifyrequiredclusters)
- [forEndpoint](endpoint_export.EndpointServer.md#forendpoint)

## Constructors

### constructor

• **new EndpointServer**(`endpoint`): [`EndpointServer`](endpoint_export.EndpointServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`EndpointServer`](endpoint_export.EndpointServer.md)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:40](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L40)

## Properties

### #clusterServers

• `Private` `Readonly` **#clusterServers**: `Map`\<[`ClusterId`](../modules/datatype_export.md#clusterid), [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L34)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:32](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L32)

___

### #name

• `Private` **#name**: `string` = `""`

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:33](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L33)

## Accessors

### [value]

• `get` **[value]**(): `unknown`

Hierarchical diagnostics of endpoint and children.

#### Returns

`unknown`

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:196](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L196)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L36)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[name](../interfaces/endpoint_export.EndpointInterface.md#name)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:69](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L69)

___

### number

• `get` **number**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[number](../interfaces/endpoint_export.EndpointInterface.md#number)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L65)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:109](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L109)

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[addChildEndpoint](../interfaces/endpoint_export.EndpointInterface.md#addchildendpoint)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:163](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L163)

___

### addClusterClient

▸ **addClusterClient**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[addClusterClient](../interfaces/endpoint_export.EndpointInterface.md#addclusterclient)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:155](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L155)

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`server`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[addClusterServer](../interfaces/endpoint_export.EndpointInterface.md#addclusterserver)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:125](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L125)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[close](../interfaces/endpoint_export.EndpointInterface.md#close)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:105](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L105)

___

### createBacking

▸ **createBacking**(`type`): [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L46)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[determineUniqueID](../interfaces/endpoint_export.EndpointInterface.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:97](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L97)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getAllClusterClients](../interfaces/endpoint_export.EndpointInterface.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:150](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L150)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getAllClusterServers](../interfaces/endpoint_export.EndpointInterface.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:146](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L146)

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getChildEndpoint](../interfaces/endpoint_export.EndpointInterface.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:171](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L171)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)[]

#### Returns

[`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getChildEndpoints](../interfaces/endpoint_export.EndpointInterface.md#getchildendpoints)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:89](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L89)

___

### getClusterClient

▸ **getClusterClient**(): `any`

#### Returns

`any`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getClusterClient](../interfaces/endpoint_export.EndpointInterface.md#getclusterclient)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:159](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L159)

___

### getClusterServer

▸ **getClusterServer**\<`T`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`T`[``"attributes"``], `T`[``"events"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`T`[``"attributes"``], `T`[``"events"``]\>

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getClusterServer](../interfaces/endpoint_export.EndpointInterface.md#getclusterserver)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:133](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L133)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getClusterServerById](../interfaces/endpoint_export.EndpointInterface.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:142](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L142)

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getNumber](../interfaces/endpoint_export.EndpointInterface.md#getnumber)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:73](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L73)

___

### hasClusterServer

▸ **hasClusterServer**(`cluster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Returns

`boolean`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[hasClusterServer](../interfaces/endpoint_export.EndpointInterface.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:129](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L129)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[removeFromStructure](../interfaces/endpoint_export.EndpointInterface.md#removefromstructure)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:80](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L80)

___

### setStructureChangedCallback

▸ **setStructureChangedCallback**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[setStructureChangedCallback](../interfaces/endpoint_export.EndpointInterface.md#setstructurechangedcallback)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:121](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L121)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[updatePartsList](../interfaces/endpoint_export.EndpointInterface.md#updatepartslist)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:84](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L84)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[verifyRequiredClusters](../interfaces/endpoint_export.EndpointInterface.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:101](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L101)

___

### forEndpoint

▸ **forEndpoint**(`endpoint`): [`EndpointServer`](endpoint_export.EndpointServer.md)

Retrieve the server for an endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`EndpointServer`](endpoint_export.EndpointServer.md)

#### Defined in

[packages/matter.js/src/endpoint/EndpointServer.ts:185](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/EndpointServer.ts#L185)
