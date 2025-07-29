namespace ms_heatislands_modify {
let minTemp = 0
let maxTemp = 0
datalogger.setColumnTitles("Temperature")
maxTemp = input.temperature()
minTemp = input.temperature()
// @highlight
let tempThreshold = 30

loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
    if (input.temperature() > maxTemp) {
        maxTemp = input.temperature()
    }
    if (input.temperature() < minTemp) {
        minTemp = input.temperature()
    }
    // @highlight
    if (input.temperature() > tempThreshold) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
}