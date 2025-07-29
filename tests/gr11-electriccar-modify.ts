namespace gr11_electriccar_modify {
    basic.forever(function () {
        let IsDrivingEnabled = 0
        if (IsDrivingEnabled) {
            if (
                fwdSensors.sonar1.fwdDistancePastThreshold(
                    0.5,
                    fwdEnums.OverUnder.Under
                )
            ) {
                // @highlight
                fwdMotors.turn(15)
            } else {
                // @highlight
                fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
            }
        } else {
            // @highlight
            fwdMotors.stop()
        }
    })
}
