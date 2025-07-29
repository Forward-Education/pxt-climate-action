namespace solarenergy {
    let position = -90
    basic.forever(function () {
        if (fwdSensors.solar1.lightLevel() > 75) {
            basic.showIcon(IconNames.Target)
            fwdMotors.conSetEnabled(fwdBase.leftServo, false)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
            position += 10
            if (position > 90) {
                position = -90
            }
            fwdMotors.setAngle(fwdBase.leftServo, position)
            basic.pause(200)
        }
    })
}
