namespace ms_sodis_use {
// @highlight
basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
})
}