namespace gr8_smartfarming_modify {
    let pumpStop = 0
    let pumpStart = 0
    loops.everyInterval(120000, function () {
        music.play(
            music.tonePlayable(262, music.beat(BeatFraction.Whole)),
            music.PlaybackMode.UntilDone
        )
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        pumpStart = input.runningTime()
        // @collapsed
        while (
            fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)
        ) {
            fwdMotors.pump.timedRun(500)
            basic.pause(1000)
            fwdLights.ledRing1.rotate(1)
        }
        pumpStop = input.runningTime()
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    })
}
