[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/low-power/export

# Module: behavior/definitions/low-power/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_low_power_export._internal_.md)

### Namespaces

- [LowPowerBehavior](behavior_definitions_low_power_export.LowPowerBehavior.md)
- [LowPowerInterface](behavior_definitions_low_power_export.LowPowerInterface.md)

### Classes

- [LowPowerServer](../classes/behavior_definitions_low_power_export.LowPowerServer.md)

### Interfaces

- [LowPowerBehavior](../interfaces/behavior_definitions_low_power_export.LowPowerBehavior-1.md)

### Type Aliases

- [LowPowerInterface](behavior_definitions_low_power_export.md#lowpowerinterface)

### Variables

- [LowPowerBehavior](behavior_definitions_low_power_export.md#lowpowerbehavior)

## Type Aliases

### LowPowerInterface

Ƭ **LowPowerInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_low_power_export.LowPowerInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/low-power/LowPowerInterface.ts:12](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/low-power/LowPowerInterface.ts#L12)

[packages/matter.js/src/behavior/definitions/low-power/LowPowerInterface.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/low-power/LowPowerInterface.ts#L23)

## Variables

### LowPowerBehavior

• `Const` **LowPowerBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LowPower.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\>, [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\>

LowPowerBehavior is the base class for objects that support interaction with [LowPower.Cluster](cluster_export.LowPower.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/low-power/LowPowerBehavior.ts:16](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/low-power/LowPowerBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/low-power/LowPowerBehavior.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/low-power/LowPowerBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/low-power/LowPowerBehavior.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/low-power/LowPowerBehavior.ts#L23)
