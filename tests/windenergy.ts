namespace windenergy {
    fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
        fwdBase.middleServo.setSpeed(0)
    })
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Clockwise,
        function () {
            fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
        }
    )
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Counterclockwise,
        function () {
            fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
        }
    )
}
