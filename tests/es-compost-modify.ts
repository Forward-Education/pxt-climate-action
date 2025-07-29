namespace es_compost_modify {
    basic.forever(function () {
        while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
            fwdMotors.conSetEnabled(fwdBase.leftServo, true)
            fwdMotors.conSetEnabled(fwdBase.leftServo, false)
        }
    })
}
