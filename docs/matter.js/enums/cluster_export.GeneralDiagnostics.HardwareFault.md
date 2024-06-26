[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / HardwareFault

# Enumeration: HardwareFault

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).HardwareFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.4.1

## Table of contents

### Enumeration Members

- [AudioOutputFault](cluster_export.GeneralDiagnostics.HardwareFault.md#audiooutputfault)
- [NonResettableOverTemp](cluster_export.GeneralDiagnostics.HardwareFault.md#nonresettableovertemp)
- [NonVolatileMemoryError](cluster_export.GeneralDiagnostics.HardwareFault.md#nonvolatilememoryerror)
- [PowerSource](cluster_export.GeneralDiagnostics.HardwareFault.md#powersource)
- [Radio](cluster_export.GeneralDiagnostics.HardwareFault.md#radio)
- [ResettableOverTemp](cluster_export.GeneralDiagnostics.HardwareFault.md#resettableovertemp)
- [Sensor](cluster_export.GeneralDiagnostics.HardwareFault.md#sensor)
- [TamperDetected](cluster_export.GeneralDiagnostics.HardwareFault.md#tamperdetected)
- [Unspecified](cluster_export.GeneralDiagnostics.HardwareFault.md#unspecified)
- [UserInterfaceFault](cluster_export.GeneralDiagnostics.HardwareFault.md#userinterfacefault)
- [VisualDisplayFault](cluster_export.GeneralDiagnostics.HardwareFault.md#visualdisplayfault)

## Enumeration Members

### AudioOutputFault

• **AudioOutputFault** = ``7``

The Node has encountered a fault with at least one of its audio outputs.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:226](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L226)

___

### NonResettableOverTemp

• **NonResettableOverTemp** = ``4``

The Node has encountered an over-temperature fault that is not resettable.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L211)

___

### NonVolatileMemoryError

• **NonVolatileMemoryError** = ``9``

The Node has encountered a fault with its non-volatile memory.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:236](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L236)

___

### PowerSource

• **PowerSource** = ``5``

The Node has encountered a fault with at least one of its power sources.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:216](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L216)

___

### Radio

• **Radio** = ``1``

The Node has encountered a fault with at least one of its radios.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:196](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L196)

___

### ResettableOverTemp

• **ResettableOverTemp** = ``3``

The Node has encountered an over-temperature fault that is resettable.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:206](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L206)

___

### Sensor

• **Sensor** = ``2``

The Node has encountered a fault with at least one of its sensors.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:201](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L201)

___

### TamperDetected

• **TamperDetected** = ``10``

The Node has encountered disallowed physical tampering.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:241](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L241)

___

### Unspecified

• **Unspecified** = ``0``

The Node has encountered an unspecified fault.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:191](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L191)

___

### UserInterfaceFault

• **UserInterfaceFault** = ``8``

The Node has encountered a fault with at least one of its user interfaces.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:231](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L231)

___

### VisualDisplayFault

• **VisualDisplayFault** = ``6``

The Node has encountered a fault with at least one of its visual displays.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:221](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L221)
