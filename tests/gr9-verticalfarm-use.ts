namespace gr9_verticalfarm_use {
    // @hide
    function lightPlant(location: number, colour: number) {
        fwdBase.leftServo.setAngleAndWait(location)
        basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
        fwdLights.ledRing1.setAllPixelsColor(colour)
        basic.pause(5000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.clearScreen()
        fwdBase.leftServo.setAngleAndWait(0)
        basic.pause(5000)
    }

    input.onLogoEvent(TouchButtonEvent.Pressed, function () {
        lightPlant(10, 16711680)
    })
}
