namespace gr68_turtles_modify {
    basic.forever(function () {
        if (fwdSensors.sonar1.fwdDistance() < 0.1) {
            // @highlight
            if (fwdSensors.solar1.lightLevel() < 25) {
                fwdLights.ledRing1.setAllPixelsColor(0xff8000)
            } else if (
                fwdSensors.solar1.lightLevel() >= 25 &&
                fwdSensors.solar1.lightLevel() < 50
            ) {
                fwdLights.ledRing1.setPixelColor(1, 0xff8000)
                fwdLights.ledRing1.setPixelColor(7, 0xff8000)
            } else if (
                fwdSensors.solar1.lightLevel() >= 50 &&
                fwdSensors.solar1.lightLevel() < 75
            ) {
                fwdLights.ledRing1.setPixelColor(1, 0xff8000)
            } else {
                fwdLights.ledRing1.setAllPixelsColor(0x000000)
            }
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    })
}
