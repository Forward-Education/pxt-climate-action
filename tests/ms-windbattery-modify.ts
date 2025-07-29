namespace ms_windbattery_modify {
    input.onButtonPressed(Button.A, function () {
        // @highlight
        basic.showNumber(batteryLevel)
    })
    // @highlight
    batteryLevel = 0
    basic.forever(function () {
        if (fwdBase.middleServo.isEnabled() == true) {
            // @highlight
            batteryLevel += 1
            // @highlight
            if (batteryLevel > 100) {
                batteryLevel = 100
            }
            // @highlight
            basic.pause(2000)
        }
    })
}
