[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / HardwareFaultChangeEvent

# Interface: HardwareFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).HardwareFaultChangeEvent

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvHardwareFaultChangeEvent`](../modules/cluster_export.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)\>

  ↳ **`HardwareFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.GeneralDiagnostics.HardwareFaultChangeEvent.md#current)
- [previous](cluster_export.GeneralDiagnostics.HardwareFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.1,
“HardwareFaultEnum”.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.1.1

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:381](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L381)

___

### previous

• **previous**: [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section

11.11.4.1, “HardwareFaultEnum”.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.1.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:390](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L390)
