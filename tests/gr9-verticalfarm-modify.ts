namespace gr9_verticalfarm_modify {
    fwdBase.leftServo.setAngleAndWait(0)
    location = [10, 60, 120]
    colour = [16711680, 255, 16777215]
    duration = [5000, 10000, 7000]
    // @highlight
    brightness = [10, 1, 5]

    function lightPlant(index: number) {
        fwdBase.leftServo.setAngleAndWait(location[index])
        basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
        // @highlight
        fwdLights.ledRing1.setBrightness(brightness[index])
        fwdLights.ledRing1.setAllPixelsColor(colour[index])
        basic.pause(duration[index])
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.clearScreen()
        fwdBase.leftServo.setAngleAndWait(0)
        basic.pause(5000)
    }
}
