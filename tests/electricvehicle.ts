namespace electricvehicle {
    fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.middleServo, 0)
    basic.forever(function () {
        if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            fwdMotors.turn(5)
            basic.pause(500)
        }
        if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 20)
            basic.pause(500)
        }
        if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
            fwdMotors.turn(-5)
            basic.pause(500)
        }
    })
}
