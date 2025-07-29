namespace gr3_forcewind_modify {
    fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
        fwdBase.middleServo.setSpeed(0)
    })
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Counterclockwise,
        function () {
            fwdBase.middleServo.setSpeed(50)
        }
    )
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Clockwise,
        function () {
            fwdBase.middleServo.setSpeed(-50)
        }
    )
}
