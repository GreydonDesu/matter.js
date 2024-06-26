[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ContentAppDevice](endpoint_definitions_device_ContentAppDevice.md) / ContentAppRequirements

# Namespace: ContentAppRequirements

[endpoint/definitions/device/ContentAppDevice](endpoint_definitions_device_ContentAppDevice.md).ContentAppRequirements

## Table of contents

### Variables

- [AccountLoginServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#accountloginserver)
- [ApplicationBasicServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#applicationbasicserver)
- [ApplicationLauncherServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#applicationlauncherserver)
- [ChannelServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#channelserver)
- [ContentLauncherServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#contentlauncherserver)
- [KeypadInputServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#keypadinputserver)
- [MediaPlaybackServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#mediaplaybackserver)
- [TargetNavigatorServer](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#targetnavigatorserver)
- [server](endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md#server)

## Variables

### AccountLoginServer

• `Const` **AccountLoginServer**: typeof [`AccountLoginServer`](../classes/behavior_definitions_account_login_export.AccountLoginServer.md) = `BaseAccountLoginServer`

The AccountLogin cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:101](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L101)

___

### ApplicationBasicServer

• `Const` **ApplicationBasicServer**: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md) = `BaseApplicationBasicServer`

The ApplicationBasic cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:66](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L66)

___

### ApplicationLauncherServer

• `Const` **ApplicationLauncherServer**: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md) = `BaseApplicationLauncherServer`

The ApplicationLauncher cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:59](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L59)

___

### ChannelServer

• `Const` **ChannelServer**: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:73](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L73)

___

### ContentLauncherServer

• `Const` **ContentLauncherServer**: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) = `BaseContentLauncherServer`

The ContentLauncher cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:94](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L94)

___

### KeypadInputServer

• `Const` **KeypadInputServer**: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L52)

___

### MediaPlaybackServer

• `Const` **MediaPlaybackServer**: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:87](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L87)

___

### TargetNavigatorServer

• `Const` **TargetNavigatorServer**: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:80](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L80)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `ApplicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md) = ApplicationBasicServer; `ApplicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md) = ApplicationLauncherServer; `KeypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = KeypadInputServer } |
| `mandatory.ApplicationBasic` | typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md) |
| `mandatory.ApplicationLauncher` | typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md) |
| `mandatory.KeypadInput` | typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) |
| `optional` | \{ `AccountLogin`: typeof [`AccountLoginServer`](../classes/behavior_definitions_account_login_export.AccountLoginServer.md) = AccountLoginServer; `Channel`: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = ChannelServer; `ContentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) = ContentLauncherServer; `MediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = MediaPlaybackServer; `TargetNavigator`: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = TargetNavigatorServer } |
| `optional.AccountLogin` | typeof [`AccountLoginServer`](../classes/behavior_definitions_account_login_export.AccountLoginServer.md) |
| `optional.Channel` | typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) |
| `optional.ContentLauncher` | typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) |
| `optional.MediaPlayback` | typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) |
| `optional.TargetNavigator` | typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L106)
