namespace es_compost_use {
    // @highlight
    basic.forever(function () {
        // @highlight
        while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
            fwdMotors.conSetEnabled(fwdBase.leftServo, true)
            basic.pause(2000)
            fwdMotors.conSetEnabled(fwdBase.leftServo, false)
            basic.pause(5000)
        }
    })
}
