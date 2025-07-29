namespace ms_sodis_modify {
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    lightThreshold = 100
    // @highlight
    exposureThreshold = 48 * 3600
})
let exposureThreshold = 0
let lightThreshold = 0
exposure_sec = 0
lightThreshold = 200
// @highlight
exposureThreshold = 6 * 3600
basic.forever(function () {
    // @highlight
    basic.showNumber(Math.round(exposure_sec / 3600))
    if (input.lightLevel() > lightThreshold) {
        basic.pause(1000)
        exposure_sec += 1
        if (exposure_sec >= exposureThreshold) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
}