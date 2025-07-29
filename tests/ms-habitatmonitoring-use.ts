namespace ms_habitatmonitoring_use {
    // @highlight
    input.onButtonPressed(Button.A, function () {
        basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
        basic.clearScreen()
        basic.showNumber(Math.round(fwdSensors.moisture1.moistureLevel()))
        basic.clearScreen()
        basic.showString("%")
        basic.pause(1000)
    })
}
