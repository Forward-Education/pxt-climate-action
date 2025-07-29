namespace es_streetlight_modify {
basic.forever(function () {
    // @highlight
    basic.showString("Traffic ahead!")
    basic.pause(100)
})

basic.forever(function () {
    // @highlight
    basic.showIcon(IconNames.Umbrella)
    basic.pause(100)
})
}