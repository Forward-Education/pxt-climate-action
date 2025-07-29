namespace es_risingfloodalarm_modify {
    if (fwdSensors.moisture1.moistureLevel() >= 66) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        music.play(
            music.tonePlayable(262, music.beat(BeatFraction.Whole)),
            // @highlight
            music.PlaybackMode.UntilDone
        )
        // @highlight
        music.rest(music.beat(BeatFraction.Double))
    }
}
