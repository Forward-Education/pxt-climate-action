namespace robo_delivery_11_12 {
    input.onButtonPressed(Button.A, function () {
        IsDrivingEnabled = false
        fwdMotors.stop()
    })
    input.onButtonPressed(Button.B, function () {
        IsDrivingEnabled = true
    })
    let IsDrivingEnabled = false
    fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo, 0)
    basic.forever(function () {
        if (IsDrivingEnabled) {
            if (
                fwdSensors.sonar1.fwdDistancePastThreshold(
                    0.5,
                    fwdEnums.OverUnder.Under
                )
            ) {
                music.ringTone(262)
                basic.pause(500)
                music.stopAllSounds()
            } else {
                if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                    fwdMotors.turn(5)
                    basic.pause(500)
                }
                if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                    fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 20)
                    basic.pause(500)
                }
                if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                    fwdMotors.turn(-5)
                    basic.pause(500)
                }
            }
        }
    })
}
