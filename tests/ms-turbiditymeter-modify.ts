namespace ms_turbiditymeter_modify {
    input.onButtonPressed(Button.A, function () {
        basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
        // @highlight
        if (fwdSensors.solar1.lightLevel() <= 70) {
            basic.showString("CLEAR")
        }
    })
}
