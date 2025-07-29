namespace ms_solarpanel_use {
    basic.forever(function () {
        // @highlight
        if (fwdSensors.solar1.lightLevel() > 90) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
        }
    })
}
