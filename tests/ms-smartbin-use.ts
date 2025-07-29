namespace ms_smartbin_use {
    input.onButtonPressed(Button.A, function () {
        // @highlight
        fwdMotors.setAngle(fwdBase.rightServo, 0)
    })
}
