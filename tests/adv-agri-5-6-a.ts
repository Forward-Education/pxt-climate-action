namespace adv_agri_5_6_a {
    basic.forever(function () {
        if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
            fwdMotors.pump.timedRun(500)
            basic.pause(500)
            basic.clearScreen()
        }
        if (fwdSensors.moisture1.isPastThreshold(80, fwdEnums.OverUnder.Over)) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
        if (fwdSensors.moisture1.isPastThreshold(60, fwdEnums.OverUnder.Over)) {
            fwdLights.ledRing1.setPixelColor(5, 0xff0000)
            fwdLights.ledRing1.setPixelColor(4, 0xff0000)
        }
        if (fwdSensors.moisture1.isPastThreshold(40, fwdEnums.OverUnder.Over)) {
            fwdLights.ledRing1.setPixelColor(3, 0xff0000)
            fwdLights.ledRing1.setPixelColor(2, 0xff0000)
        }
        if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
            fwdLights.ledRing1.setPixelColor(1, 0xff0000)
            fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        }
    })
}
