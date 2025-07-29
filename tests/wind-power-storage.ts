namespace wind_power_storage {
    fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
        fwdBase.middleServo.setSpeed(0)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    })
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Counterclockwise,
        function () {
            turbinespeed = fwdButtons.dial1.position()
            fwdBase.middleServo.setSpeed(turbinespeed)
            if (turbinespeed <= -80) {
                fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
            } else {
                fwdLights.ledRing1.setAllPixelsColor(0xffff00)
            }
        }
    )
    fwdButtons.dial1.onRotated(
        fwdEnums.ClockwiseCounterclockwise.Clockwise,
        function () {
            turbinespeed = fwdButtons.dial1.position()
            fwdBase.middleServo.setSpeed(turbinespeed)
            if (turbinespeed >= 80) {
                fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
            } else {
                fwdLights.ledRing1.setAllPixelsColor(0xffff00)
            }
        }
    )
    let turbinespeed = 0
    turbinespeed = 0
}
