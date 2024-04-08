/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DoorLockBehavior } from "./DoorLockBehavior.js";
import {DoorLock} from "../../../cluster/definitions/index.js";
import LockState = DoorLock.LockState;

/**
 * This is the default server implementation of {@link DoorLockBehavior}.
 */
export class DoorLockServer extends DoorLockBehavior {
    override lockDoor() {
        this.state.lockState = LockState.Locked;
    }

    override unlockDoor() {
        this.state.lockState = LockState.Unlocked;
    }
}
