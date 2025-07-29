namespace plantsnpollinators {
    let bugVisits = 1
    basic.showNumber(bugVisits)
    basic.forever(function () {
        if (fwdButtons.touch1.isPressed()) {
            bugVisits += 1
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            basic.showNumber(bugVisits)
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    })
}
