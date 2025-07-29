namespace ms_sumppump_use {
    basic.forever(function () {
        if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
            fwdMotors.pump.timedRun(500)
            // @highlight
            for (let index = 0; index < 2; index++) {
                music.play(
                    music.tonePlayable(262, music.beat(BeatFraction.Whole)),
                    music.PlaybackMode.UntilDone
                )
                music.play(
                    music.tonePlayable(392, music.beat(BeatFraction.Whole)),
                    music.PlaybackMode.UntilDone
                )
            }
        }
    })
}
