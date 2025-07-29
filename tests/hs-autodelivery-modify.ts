namespace hs_autodelivery_modify {
    basic.forever(function () {
        if (IsDrivingEnabled == true) {
            //@highlight
            if (
                fwdSensors.sonar1.fwdDistancePastThreshold(
                    0.3,
                    fwdEnums.OverUnder.Over
                )
            ) {
                if (
                    fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) &&
                    fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off)
                ) {
                    basic.showArrow(ArrowNames.North)
                    fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 20)
                }
            } else {
                basic.showIcon(IconNames.Sad)
                fwdMotors.stop()
            }
        }
    })
}
