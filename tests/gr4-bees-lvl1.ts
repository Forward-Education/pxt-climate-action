namespace gr4_bees_lvl1 {
    basic.forever(function () {
        if (fwdButtons.touch1.isPressed()) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            basic.pause(500)
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    })
}
