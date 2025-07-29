namespace es_seaweedfarm_use {
// @highlight
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
}