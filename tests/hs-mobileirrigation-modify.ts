namespace hs_mobileirrigation_modify {
    fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 25)
            basic.pause(3000)
            fwdMotors.stop()
            fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
            fwdMotors.pump.timedRun(1500)
            basic.pause(3000)
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    })
}
