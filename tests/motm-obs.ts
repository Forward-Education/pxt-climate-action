namespace motm_obs {
    fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo, 0)
    basic.forever(function () {
        if (
            fwdSensors.sonar1.fwdDistancePastThreshold(
                0.2,
                fwdEnums.OverUnder.Under
            )
        ) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
            basic.pause(1000)
        } else {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
        }
    })
}
