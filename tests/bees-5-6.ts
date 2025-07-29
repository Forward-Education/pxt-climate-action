namespace bees_5_6 {
    input.onButtonPressed(Button.A, function () {
        basic.clearScreen()
        basic.showNumber(bugVisits)
        basic.pause(5000)
        basic.clearScreen()
    })
    let bugVisits = 0
    bugVisits = 0
    basic.forever(function () {
        if (fwdButtons.touch1.isPressed()) {
            bugVisits += 1
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            led.plotBarGraph(bugVisits, 25)
        }
    })
}
