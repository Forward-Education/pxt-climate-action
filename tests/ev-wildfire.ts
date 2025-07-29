namespace ev_wildfire {
    input.onButtonPressed(Button.A, function () {
        IsDrivingEnabled = true
    })
    input.onButtonPressed(Button.B, function () {
        IsDrivingEnabled = false
    })
    let IsDrivingEnabled = false
    fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
    let lightThreshold = 100
    let temperatureThreshold = 25
    basic.forever(function () {
        if (IsDrivingEnabled) {
            for (let index = 0; index < 4; index++) {
                fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
                basic.pause(5000)
                fwdMotors.turn(25)
                if (
                    input.lightLevel() > lightThreshold ||
                    input.temperature() > temperatureThreshold
                ) {
                    for (let index = 0; index < 4; index++) {
                        music.playTone(262, music.beat(BeatFraction.Whole))
                        music.playTone(262, music.beat(BeatFraction.Whole))
                    }
                } else {
                    music.stopAllSounds()
                }
                basic.pause(1000)
            }
        } else {
            fwdMotors.stop()
        }
    })
}
