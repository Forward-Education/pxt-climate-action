namespace gr9_treeSeeder_use {
    // @highlight
    fwdMotors.setAngle(fwdBase.middleServo, 45)
    fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo, 10)
    input.onButtonPressed(Button.A, function () {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
            basic.pause(1000)
            fwdMotors.stop()
            // @highlight
            fwdMotors.setAngle(fwdBase.middleServo, 0)
            basic.pause(250)
            // @highlight
            fwdMotors.setAngle(fwdBase.middleServo, 45)
            basic.pause(250)
        }
        fwdMotors.stop()
    })
}
