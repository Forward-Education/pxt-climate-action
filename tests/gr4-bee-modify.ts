namespace gr4_bee_modify {
    let bugVisits = 0
    bugVisits = 0
    basic.showNumber(bugVisits)
    basic.forever(function () {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        if (fwdButtons.touch1.isPressed()) {
            bugVisits += 1
            fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
            basic.showNumber(bugVisits)
        }
    })
}
