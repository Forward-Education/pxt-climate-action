namespace ms_solarpanel_modify {
    basic.forever(function () {
        if (fwdSensors.solar1.lightLevel() > 90) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
            fwdMotors.setAngle(
                fwdBase.rightServo,
                fwdMotors.getAngle(fwdBase.rightServo) + 10
            )
            // @highlight
            if (fwdMotors.getAngle(fwdBase.rightServo) > 180) {
                fwdMotors.setAngle(fwdBase.rightServo, 0)
            }
        }
    })
}
