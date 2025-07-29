namespace gr11_electriccar_use {
    basic.forever(function () {
        if (IsDrivingEnabled) {
            if (
                fwdSensors.sonar1.fwdDistancePastThreshold(
                    0.5,
                    fwdEnums.OverUnder.Under
                )
            ) {
                basic.pause(1000)
                fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
                fwdMotors.turn(10)
            } else {
                fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
            }
        } else {
            fwdMotors.stop()
        }
    })
}
