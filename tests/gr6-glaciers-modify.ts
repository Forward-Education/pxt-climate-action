namespace gr6_glaciers_modify {
    basic.forever(function () {
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            datalogger.log(
                datalogger.createCV(
                    "Light Level (%)",
                    fwdSensors.solar1.lightLevel()
                )
            )
        } else {
            basic.showIcon(IconNames.No)
        }
        // @highlight
        if (input.buttonIsPressed(Button.B)) {
        }
    })
}
