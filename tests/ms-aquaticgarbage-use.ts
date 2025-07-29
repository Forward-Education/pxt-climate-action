namespace ms_aquaticgarbage_use {
    input.onButtonPressed(Button.AB, function () {
        // @highlight
        fwdBase.leftServo.setSpeed(25)
        // @highlight
        fwdBase.rightServo.setSpeed(-25)
        basic.showIcon(IconNames.Yes)
    })
}
