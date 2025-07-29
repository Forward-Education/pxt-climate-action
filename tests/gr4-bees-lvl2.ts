namespace gr4_bees_lvl2 {
    let bugvisits = 0
    basic.showNumber(bugvisits)
    basic.forever(function () {
        if (fwdButtons.touch1.isPressed()) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            basic.showNumber(bugvisits)
            basic.pause(500)
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    })
}
