namespace ms_turbiditymeter_use {
    fwdLights.ledRing1.setBrightness(10)
    fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    input.onButtonPressed(Button.A, function () {
        basic.showNumber(fwdSensors.solar1.lightLevel())
    })
}
