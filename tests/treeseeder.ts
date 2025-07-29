namespace treeseeder {
    fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo, 0)
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    input.onButtonPressed(Button.A, function () {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 100)
            basic.pause(2000)
            fwdMotors.setAngle(fwdBase.middleServo, 45)
            basic.pause(500)
            fwdMotors.setAngle(fwdBase.middleServo, 0)
        }
        fwdMotors.stop()
    })
}
