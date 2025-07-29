namespace es_landbridge_modify {
    basic.forever(function () {
        basic.showNumber(animalCount)
        if (
            fwdSensors.sonar1.fwdDistancePastThreshold(
                0.1,
                fwdEnums.OverUnder.Under
            )
        ) {
            animalCount += 1
            // @highlight
            basic.pause(1000)
        }
    })
}
