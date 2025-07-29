namespace hs_fishways_modify {
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Clockwise,
        function () {
            fwdMotors.setAngle(fwdBase.rightServo, 100)
            // @highlight
            FishCount += 1
        }
    )
}
