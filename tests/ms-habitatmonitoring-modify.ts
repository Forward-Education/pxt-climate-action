namespace ms_habitatmonitoring_modify {
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(input.temperature()))
    basic.clearScreen()
    //@highlight 
    basic.showString("C")
    //@highlight
    basic.pause(1000)
})
}