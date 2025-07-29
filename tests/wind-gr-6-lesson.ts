namespace wind_gr_6_lesson {
    let stop_time = 0
    let start_time = 0
    fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
        fwdBase.middleServo.setSpeed(0)
    })
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Counterclockwise,
        function () {
            fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
        }
    )
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Clockwise,
        function () {
            fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
        }
    )
    input.onButtonPressed(Button.A, function () {
        start_time = input.runningTime()
    })
    input.onButtonPressed(Button.B, function () {
        stop_time = input.runningTime()
        basic.showNumber((stop_time - start_time) / 1000)
    })
}
