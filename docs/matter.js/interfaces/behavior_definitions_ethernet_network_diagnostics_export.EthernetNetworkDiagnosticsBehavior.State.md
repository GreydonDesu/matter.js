[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ethernet-network-diagnostics/export](../modules/behavior_definitions_ethernet_network_diagnostics_export.md) / [EthernetNetworkDiagnosticsBehavior](../modules/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.md) / State

# Interface: State

[behavior/definitions/ethernet-network-diagnostics/export](../modules/behavior_definitions_ethernet_network_diagnostics_export.md).[EthernetNetworkDiagnosticsBehavior](../modules/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_ethernet_network_diagnostics_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [carrierDetect](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.State.md#carrierdetect)
- [fullDuplex](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.State.md#fullduplex)
- [phyRate](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.State.md#phyrate)
- [timeSinceReset](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.State.md#timesincereset)

## Properties

### carrierDetect

• `Optional` **carrierDetect**: ``null`` \| `boolean`

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.15.6.8

#### Inherited from

StateType.carrierDetect

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:232](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L232)

___

### fullDuplex

• `Optional` **fullDuplex**: ``null`` \| `boolean`

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.15.6.2

#### Inherited from

StateType.fullDuplex

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:223](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L223)

___

### phyRate

• `Optional` **phyRate**: ``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md)

The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer
of the Node. A value of null shall indicate that the interface is not currently configured or
operational.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.15.6.1

#### Inherited from

StateType.phyRate

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:215](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L215)

___

### timeSinceReset

• `Optional` **timeSinceReset**: `number` \| `bigint`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.15.6

#### Inherited from

StateType.timeSinceReset

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:237](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L237)
