namespace ms_aquaticgarbage_modify {
    // @highlight
    basic.forever(function () {
        if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
            fwdBase.leftServo.setSpeed(25)
            fwdBase.rightServo.setSpeed(-25)
            basic.showIcon(IconNames.Yes)
        } else {
            fwdBase.leftServo.setSpeed(0)
            fwdBase.rightServo.setSpeed(0)
            basic.showIcon(IconNames.No)
        }
    })
}
