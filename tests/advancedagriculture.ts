namespace advancedagriculture {
    basic.forever(function () {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
            fwdMotors.pump.timedRun(500)
            basic.pause(500)
            basic.clearScreen()
        }
    })
}
