namespace gr3_wind_lvl2 {
    fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
        fwdBase.leftServo.setSpeed(0)
    })
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Counterclockwise,
        function () {
            fwdBase.leftServo.setSpeed(50)
        }
    )
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Clockwise,
        function () {
            fwdBase.leftServo.setSpeed(-50)
        }
    )
}
