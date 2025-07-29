namespace ms_windbattery_use {
    // @highlight
    batteryLevel = 0
    basic.forever(function () {
        if (fwdBase.middleServo.isEnabled() == true) {
            basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
            // @highlight
            batteryLevel += 1
            // @highlight
            basic.pause(2000)
        } else {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        }
    })
}
