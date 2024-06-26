[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md) / HolidaySchedules

# Interface: HolidaySchedules

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md).HolidaySchedules

## Table of contents

### Methods

- [clearHolidaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.HolidaySchedules.md#clearholidayschedule)
- [getHolidaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.HolidaySchedules.md#getholidayschedule)
- [setHolidaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.HolidaySchedules.md#setholidayschedule)

## Methods

### clearHolidaySchedule

▸ **clearHolidaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:239](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L239)

___

### getHolidaySchedule

▸ **getHolidaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:234](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L234)

___

### setHolidaySchedule

▸ **setHolidaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:229](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L229)
