[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServer

# Class: CommissioningServer

[export](../modules/export.md).CommissioningServer

A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
host

## Hierarchy

- [`MatterNode`](export.MatterNode.md)

  ↳ **`CommissioningServer`**

## Table of contents

### Constructors

- [constructor](export.CommissioningServer.md#constructor)

### Properties

- [certification](export.CommissioningServer.md#certification)
- [commandHandler](export.CommissioningServer.md#commandhandler)
- [delayedAnnouncement](export.CommissioningServer.md#delayedannouncement)
- [deviceInstance](export.CommissioningServer.md#deviceinstance)
- [discriminator](export.CommissioningServer.md#discriminator)
- [endpointStructure](export.CommissioningServer.md#endpointstructure)
- [endpointStructureStorage](export.CommissioningServer.md#endpointstructurestorage)
- [eventHandler](export.CommissioningServer.md#eventhandler)
- [flowType](export.CommissioningServer.md#flowtype)
- [interactionServer](export.CommissioningServer.md#interactionserver)
- [ipv4Disabled](export.CommissioningServer.md#ipv4disabled)
- [mdnsBroadcaster](export.CommissioningServer.md#mdnsbroadcaster)
- [mdnsInstanceBroadcaster](export.CommissioningServer.md#mdnsinstancebroadcaster)
- [mdnsScanner](export.CommissioningServer.md#mdnsscanner)
- [nextEndpointId](export.CommissioningServer.md#nextendpointid)
- [options](export.CommissioningServer.md#options)
- [passcode](export.CommissioningServer.md#passcode)
- [port](export.CommissioningServer.md#port)
- [productDescription](export.CommissioningServer.md#productdescription)
- [rootEndpoint](export.CommissioningServer.md#rootendpoint)
- [storage](export.CommissioningServer.md#storage)

### Methods

- [addCommandHandler](export.CommissioningServer.md#addcommandhandler)
- [addDevice](export.CommissioningServer.md#adddevice)
- [addEndpoint](export.CommissioningServer.md#addendpoint)
- [addRootClusterClient](export.CommissioningServer.md#addrootclusterclient)
- [addRootClusterServer](export.CommissioningServer.md#addrootclusterserver)
- [advertise](export.CommissioningServer.md#advertise)
- [assignEndpointIds](export.CommissioningServer.md#assignendpointids)
- [close](export.CommissioningServer.md#close)
- [factoryReset](export.CommissioningServer.md#factoryreset)
- [fillAndStoreEndpointIds](export.CommissioningServer.md#fillandstoreendpointids)
- [getActiveSessionInformation](export.CommissioningServer.md#getactivesessioninformation)
- [getChildEndpoint](export.CommissioningServer.md#getchildendpoint)
- [getCommissionedFabricInformation](export.CommissioningServer.md#getcommissionedfabricinformation)
- [getNextEndpointId](export.CommissioningServer.md#getnextendpointid)
- [getPairingCode](export.CommissioningServer.md#getpairingcode)
- [getPort](export.CommissioningServer.md#getport)
- [getRootClusterClient](export.CommissioningServer.md#getrootclusterclient)
- [getRootClusterServer](export.CommissioningServer.md#getrootclusterserver)
- [getRootEndpoint](export.CommissioningServer.md#getrootendpoint)
- [initialize](export.CommissioningServer.md#initialize)
- [initializeEndpointIdsFromStorage](export.CommissioningServer.md#initializeendpointidsfromstorage)
- [isCommissioned](export.CommissioningServer.md#iscommissioned)
- [removeCommandHandler](export.CommissioningServer.md#removecommandhandler)
- [setMdnsBroadcaster](export.CommissioningServer.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningServer.md#setmdnsscanner)
- [setPort](export.CommissioningServer.md#setport)
- [setReachability](export.CommissioningServer.md#setreachability)
- [setStorage](export.CommissioningServer.md#setstorage)
- [start](export.CommissioningServer.md#start)
- [updateStructure](export.CommissioningServer.md#updatestructure)

## Constructors

### constructor

• **new CommissioningServer**(`options`): [`CommissioningServer`](export.CommissioningServer.md)

Creates a new CommissioningServer node and add all needed Root clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md) | The options for the CommissioningServer node |

#### Returns

[`CommissioningServer`](export.CommissioningServer.md)

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:252](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L252)

## Properties

### certification

• `Private` `Readonly` **certification**: [`DeviceCertification`](export._internal_.DeviceCertification-1.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:226](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L226)

___

### commandHandler

• `Private` `Readonly` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<[`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:245](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L245)

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L243)

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:234](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L234)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:223](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L223)

___

### endpointStructure

• `Private` **endpointStructure**: [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:236](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L236)

___

### endpointStructureStorage

• `Private` `Optional` **endpointStructureStorage**: [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:229](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L229)

___

### eventHandler

• `Private` `Optional` **eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:235](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L235)

___

### flowType

• `Private` `Readonly` **flowType**: [`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:224](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L224)

___

### interactionServer

• `Private` `Optional` **interactionServer**: [`InteractionServer`](protocol_interaction_export.InteractionServer-1.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:237](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L237)

___

### ipv4Disabled

• `Private` `Optional` **ipv4Disabled**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:220](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L220)

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:231](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L231)

___

### mdnsInstanceBroadcaster

• `Private` `Optional` **mdnsInstanceBroadcaster**: [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:232](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L232)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:230](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L230)

___

### nextEndpointId

• `Private` **nextEndpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:241](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L241)

___

### options

• `Private` `Readonly` **options**: [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md)

The options for the CommissioningServer node

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:252](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L252)

___

### passcode

• `Private` `Readonly` **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:222](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L222)

___

### port

• `Private` `Optional` **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:221](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L221)

___

### productDescription

• `Private` `Readonly` **productDescription**: [`ProductDescription`](../interfaces/behavior_cluster_export._internal_.ProductDescription.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L225)

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:239](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L239)

___

### storage

• `Private` `Optional` **storage**: [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:228](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L228)

## Methods

### addCommandHandler

▸ **addCommandHandler**\<`K`\>(`command`, `handler`): `void`

Add a new command handler for the given command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"testEventTrigger"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to add the handler for |
| `handler` | [`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)[`K`] | Handler function to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:946](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L946)

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device_export.Device.md) \| [`Aggregator`](device_export.Aggregator.md) | Device or Aggregator instance to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:884](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L884)

___

### addEndpoint

▸ **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:532](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L532)

___

### addRootClusterClient

▸ **addRootClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:498](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L498)

___

### addRootClusterServer

▸ **addRootClusterServer**\<`A`, `E`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:553](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L553)

___

### advertise

▸ **advertise**(`limitTo?`): `Promise`\<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limitTo?` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet and BLE if configured |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:573](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L573)

___

### assignEndpointIds

▸ **assignEndpointIds**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:724](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L724)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close network connections of the device and stop responding to requests

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:907](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L907)

___

### factoryReset

▸ **factoryReset**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:918](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L918)

___

### fillAndStoreEndpointIds

▸ **fillAndStoreEndpointIds**(`endpoint`, `parentUniquePrefix?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:766](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L766)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(`fabricIndex?`): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

Get some basic details of all currently active sessions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) | Optional fabric index to filter for. If not set all sessions are returned. |

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:1019](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L1019)

___

### getChildEndpoint

▸ **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:542](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L542)

___

### getCommissionedFabricInformation

▸ **getCommissionedFabricInformation**(`fabricIndex?`): [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)[]

Get some basic details of all Fabrics the server is commissioned to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) | Optional fabric index to filter for. If not set all fabrics are returned. |

#### Returns

[`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:1007](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L1007)

___

### getNextEndpointId

▸ **getNextEndpointId**(`increase?`): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `increase` | `boolean` | `true` |

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:717](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L717)

___

### getPairingCode

▸ **getPairingCode**(`discoveryCapabilities?`): [`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:802](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L802)

___

### getPort

▸ **getPort**(): `undefined` \| `number`

Return the port the device is listening on

#### Returns

`undefined` \| `number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:891](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L891)

___

### getRootClusterClient

▸ **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:509](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L509)

___

### getRootClusterServer

▸ **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:483](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L483)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:522](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L522)

___

### initialize

▸ **initialize**(`ipv4Disabled`): `void`

used internally by MatterServer to initialize the state of the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[initialize](export.MatterNode.md#initialize)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:983](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L983)

___

### initializeEndpointIdsFromStorage

▸ **initializeEndpointIdsFromStorage**(`endpoint`, `parentUniquePrefix?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:731](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L731)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:795](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L795)

___

### removeCommandHandler

▸ **removeCommandHandler**\<`K`\>(`command`, `handler`): `void`

Remove a command handler for the given command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"testEventTrigger"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to remove the handler for |
| `handler` | [`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)[`K`] | Handler function to remove |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:959](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L959)

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:862](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L862)

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsScanner](export.MatterNode.md#setmdnsscanner)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:853](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L853)

___

### setPort

▸ **setPort**(`port`): `void`

Set the port the device is listening on. Can only be called before the device is initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:896](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L896)

___

### setReachability

▸ **setReachability**(`reachable`): `void`

Set the reachability of the commissioning server aka "the main matter device". This call only has effect when
the reachability flag was set in the BasicInformationCluster or in the BasicInformation data in the constructor!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:972](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L972)

___

### setStorage

▸ **setStorage**(`storage`): `Promise`\<`void`\>

Set the StorageManager instance. Should be only used internally

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:873](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L873)

___

### start

▸ **start**(): `Promise`\<`void`\>

Starts the Matter device and advertises it.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:993](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L993)

___

### updateStructure

▸ **updateStructure**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:710](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/CommissioningServer.ts#L710)
