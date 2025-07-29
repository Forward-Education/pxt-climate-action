namespace adv_agri_7_8_a {
    basic.forever(function () {
        if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
            timer_stop = input.runningTime()
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
            fwdMotors.pump.timedRun(500)
            timer_start = input.runningTime()
            basic.pause(500)
            run_pump_count += 1
            basic.clearScreen()
        }
    })
    let plant_B = 2000
    let plant_A = 5000
    let run_pump_count = 0
    input.onButtonPressed(Button.A, function () {
        fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
        basic.pause(plant_A)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    })
    input.onButtonPressed(Button.B, function () {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        basic.pause(plant_B)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    })
    input.onButtonPressed(Button.AB, function () {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    })
    input.onLogoEvent(TouchButtonEvent.Pressed, function () {
        basic.showNumber(timer_stop - timer_start / 60000)
    })
}
