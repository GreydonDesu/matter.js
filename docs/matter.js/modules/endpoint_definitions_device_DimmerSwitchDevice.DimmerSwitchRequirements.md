[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/DimmerSwitchDevice](endpoint_definitions_device_DimmerSwitchDevice.md) / DimmerSwitchRequirements

# Namespace: DimmerSwitchRequirements

[endpoint/definitions/device/DimmerSwitchDevice](endpoint_definitions_device_DimmerSwitchDevice.md).DimmerSwitchRequirements

## Table of contents

### Variables

- [GroupsBehavior](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#groupsbehavior)
- [IdentifyBehavior](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#identifybehavior)
- [IdentifyServer](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#identifyserver)
- [LevelControlBehavior](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#levelcontrolbehavior)
- [OnOffBehavior](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#onoffbehavior)
- [ScenesBehavior](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#scenesbehavior)
- [client](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#client)
- [server](endpoint_definitions_device_DimmerSwitchDevice.DimmerSwitchRequirements.md#server)

## Variables

### GroupsBehavior

• `Const` **GroupsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:64](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L64)

___

### IdentifyBehavior

• `Const` **IdentifyBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = `BaseIdentifyBehavior`

The Identify cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:43](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L43)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L36)

___

### LevelControlBehavior

• `Const` **LevelControlBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = `BaseLevelControlBehavior`

The LevelControl cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L57)

___

### OnOffBehavior

• `Const` **OnOffBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = `BaseOnOffBehavior`

The OnOff cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L50)

___

### ScenesBehavior

• `Const` **ScenesBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = `BaseScenesBehavior`

The Scenes cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:71](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L71)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = IdentifyBehavior; `LevelControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = LevelControlBehavior; `OnOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = OnOffBehavior } |
| `mandatory.Identify` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> |
| `mandatory.LevelControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> |
| `mandatory.OnOff` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> |
| `optional` | \{ `Groups`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = GroupsBehavior; `Scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = ScenesBehavior } |
| `optional.Groups` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> |
| `optional.Scenes` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L81)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L76)
