fwdButtons.dial1.onRotated(
    fwdEnums.ClockwiseCounterclockwise.Clockwise,
    function () {
        basic.showNumber(fwdButtons.dial1.position())
    }
)
fwdSensors.line1.onLineSensorStateChange(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
        basic.showNumber(fwdSensors.line1.lineSensorState())
    }
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (fwdButtons.dialButton1.isPressed()) {
        basic.showNumber(fwdButtons.dialButton1.holdDuration())
    }
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (fwdButtons.touch1.isPressed()) {
        basic.showNumber(fwdButtons.touch1.holdDuration())
    }
})
if (fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.moisture1.moistureLevel())
}
if (fwdSensors.solar1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.solar1.lightLevel())
}
if (fwdSensors.sonar1.fwdDistancePastThreshold(0, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.sonar1.fwdDistance())
}
if (fwdMotors.pump.isOn()) {
    fwdMotors.pump.timedRun(500)
    fwdMotors.pump.setOn(false)
}
if (fwdMotors.conIsEnabled(fwdBase.leftServo)) {
    fwdMotors.setSpeed(fwdBase.leftServo, 0)
    basic.showNumber(fwdMotors.getSpeed(fwdBase.leftServo))
    fwdMotors.conSetEnabled(fwdBase.leftServo, false)
}
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.leftServo)
fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
fwdMotors.turn(0)
fwdMotors.stop()
if (fwdMotors.posIsEnabled(fwdBase.leftServo)) {
    fwdMotors.setAngle(
        fwdBase.leftServo,
        fwdMotors.positionPresets(fwdMotors.ServoClockPositions.Position0)
    )
    fwdMotors.setAngleAndWait(fwdBase.leftServo, 0)
    basic.showNumber(fwdMotors.getAngle(fwdBase.leftServo))
    fwdMotors.posSetEnabled(fwdBase.leftServo, false)
}
fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0000)
fwdLights.ledRing1.setAllPixelsColor(0xff8000)
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.rotate(1)
fwdLights.ledRing1.shift(1)
basic.showNumber(fwdLights.ledRing1.brightness())
