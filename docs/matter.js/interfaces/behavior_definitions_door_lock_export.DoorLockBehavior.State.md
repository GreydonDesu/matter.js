[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockBehavior](../modules/behavior_definitions_door_lock_export.DoorLockBehavior.md) / State

# Interface: State

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockBehavior](../modules/behavior_definitions_door_lock_export.DoorLockBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_door_lock_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [actuatorEnabled](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#actuatorenabled)
- [alarmMask](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#alarmmask)
- [autoRelockTime](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#autorelocktime)
- [defaultConfigurationRegister](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#defaultconfigurationregister)
- [enableInsideStatusLed](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#enableinsidestatusled)
- [enableLocalProgramming](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#enablelocalprogramming)
- [enableOneTouchLocking](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#enableonetouchlocking)
- [enablePrivacyModeButton](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#enableprivacymodebutton)
- [language](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#language)
- [ledSettings](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#ledsettings)
- [localProgrammingFeatures](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#localprogrammingfeatures)
- [lockState](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#lockstate)
- [lockType](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#locktype)
- [operatingMode](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#operatingmode)
- [soundVolume](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#soundvolume)
- [supportedOperatingModes](behavior_definitions_door_lock_export.DoorLockBehavior.State.md#supportedoperatingmodes)

## Properties

### actuatorEnabled

• **actuatorEnabled**: `boolean`

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.3

#### Inherited from

StateType.actuatorEnabled

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2393](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2393)

___

### alarmMask

• `Optional` **alarmMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.39

#### Inherited from

StateType.alarmMask

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2559](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2559)

___

### autoRelockTime

• `Optional` **autoRelockTime**: `number`

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.26

#### Inherited from

StateType.autoRelockTime

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2425](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2425)

___

### defaultConfigurationRegister

• `Optional` **defaultConfigurationRegister**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute represents the default configurations as they are physically set on the device (example:
hardware dip switch setting, etc…) and represents the default setting for some of the attributes within
this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes).

This is a read-only attribute and is intended to allow clients to determine what changes may need to be
made without having to query all the included attributes. It may be beneficial for the clients to know
what the device’s original settings were in the event that the device needs to be restored to factory
default settings.

If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD
send read and write attribute requests to the specific attributes.

For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the
current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound
Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.28

#### Inherited from

StateType.defaultConfigurationRegister

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2481](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2481)

___

### enableInsideStatusLed

• `Optional` **enableInsideStatusLed**: `boolean`

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.31

#### Inherited from

StateType.enableInsideStatusLed

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2514](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2514)

___

### enableLocalProgramming

• `Optional` **enableLocalProgramming**: `boolean`

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.29

#### Inherited from

StateType.enableLocalProgramming

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2492](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2492)

___

### enableOneTouchLocking

• `Optional` **enableOneTouchLocking**: `boolean`

Enable/disable the ability to lock the door lock with a single touch on the door lock.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.30

#### Inherited from

StateType.enableOneTouchLocking

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2503](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2503)

___

### enablePrivacyModeButton

• `Optional` **enablePrivacyModeButton**: `boolean`

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.32

#### Inherited from

StateType.enablePrivacyModeButton

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2526](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2526)

___

### language

• `Optional` **language**: `string`

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.22

#### Inherited from

StateType.language

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2401](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2401)

___

### ledSettings

• `Optional` **ledSettings**: `number`

The settings for the LED support three different modes

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.25

#### Inherited from

StateType.ledSettings

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2412](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2412)

___

### localProgrammingFeatures

• `Optional` **localProgrammingFeatures**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.33

#### Inherited from

StateType.localProgrammingFeatures

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2543](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2543)

___

### lockState

• **lockState**: ``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md)

The LockState Attribute may be NULL if the lock hardware does not currently know the status of the
locking mechanism. For example, a lock may not know the LockState status after a power cycle until the
first lock actuation is completed.

The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between
Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended
and not in a dead latched state.

If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be
added to the Scene Table:

  • LockState

When the LockState attribute is part of a Scene table, the attribute is treated as a writable command;
that is, setting the LockState to lock will command the lock to lock, and setting the LockState to
unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not
supported. The Transition Time field in the Scene table will be treated as a delay before setting the
LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds
later.

Locks that do not have an actuation mechanism SHOULD not support the Scene table extension.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.1

#### Inherited from

StateType.lockState

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2380](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2380)

___

### lockType

• **lockType**: [`LockType`](../enums/cluster_export.DoorLock.LockType.md)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.2

#### Inherited from

StateType.lockType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2385](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2385)

___

### operatingMode

• **operatingMode**: [`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)

The current operating mode of the lock (see OperatingModeEnum).

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.23

#### Inherited from

StateType.operatingMode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2443](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2443)

___

### soundVolume

• `Optional` **soundVolume**: `number`

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.27

#### Inherited from

StateType.soundVolume

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2432](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2432)

___

### supportedOperatingModes

• **supportedOperatingModes**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `normal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `passage`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `privacy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `vacation`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.24

#### Inherited from

StateType.supportedOperatingModes

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2456](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2456)
