namespace ms_smarthome_modify {
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (
        fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Under)
    ) {
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        fwdLights.ledRing1.setPixelColor(1, 0xffffff)
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        fwdLights.ledRing1.setPixelColor(3, 0xffffff)
    } else {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
}
