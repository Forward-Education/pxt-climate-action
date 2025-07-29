namespace ms_smarthome_use {
    input.onButtonPressed(Button.AB, function () {
        basic.showIcon(IconNames.House)
        // @highlight
        radio.sendString(openDoor)
    })

    radio.onReceivedString(function (receivedString) {
        if (receivedString == openDoor) {
            if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
                fwdMotors.setAngle(fwdBase.leftServo, 100)
                fwdLights.ledRing1.setAllPixelsColor(0xffffff)
            } else {
                // @highlight
                fwdMotors.setAngle(fwdBase.leftServo, 0)
                // @highlight
                fwdLights.ledRing1.setAllPixelsColor(0x000000)
            }
        }
    })
}
