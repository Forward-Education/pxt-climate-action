namespace glaciers {
    fwdMotors.setAngle(fwdBase.middleServo, 0)
    basic.forever(function () {
        fwdMotors.setAngle(fwdBase.middleServo, 90)
        basic.pause(2000)
        RightDistance = fwdSensors.sonar1.fwdDistance()
        basic.pause(2000)
        fwdMotors.setAngle(fwdBase.middleServo, -90)
        basic.pause(2000)
        LeftDistance = fwdSensors.sonar1.fwdDistance()
        basic.pause(2000)
        if (RightDistance < LeftDistance) {
            basic.showString("Go Left")
            basic.clearScreen()
        } else {
            basic.showString("Go Right")
            basic.clearScreen()
        }
        basic.pause(1000)
    })
}
