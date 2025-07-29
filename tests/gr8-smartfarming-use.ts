namespace gr8_smartfarming_use {
    let pumpStop = 0
    let pumpStart = 0
    input.onButtonPressed(Button.A, function () {
        // @highlight
        pumpStart = input.runningTime()

        while (
            fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)
        ) {
            fwdMotors.pump.timedRun(500)
            basic.pause(1000)
        }
        // @highlight
        pumpStop = input.runningTime()
    })
    input.onButtonPressed(Button.B, function () {
        basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
        basic.clearScreen()
        // @highlight
        basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
        basic.pause(2000)
        basic.clearScreen()
    })
}
