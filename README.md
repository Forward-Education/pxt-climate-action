# fwd-climate-action

Climate Action Kit, by Forward Education.

Find us at [forwardedu.com](https://forwardedu.com/) and [learn.forwardedu.com](https://learn.forwardedu.com/). Learn more about the Climate Action Kit on the [product page](https://forwardedu.com/pages/climate-action-kit).

### ~ reminder

![works with micro:bit V2 only image](/static/v2/v2-only.png)

These blocks require the [micro:bit V2](/device/v2). If you use them with a V1 micro:bit you will see the 927 error code on the screen.

### ~

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels.
Our Climate Action Kit can be used on its own or joined with other kits to access our wider library of sensors, motors, lights, and buttons.
Check out our libraries of [lessons](https://learn.forwardedu.com/lesson-library), [projects](https://learn.forwardedu.com/projects/), and [tutorials](https://learn.forwardedu.com/tutorials/). Samples of coding with the Climate Action Kit are found below.

In this code we are using a light sensor and LED ring to power a beach light that is more environnmentally friendly, particularly in the context of it's effects on sea turtle reproduction. The LED ring uses red light instead of white light because turtles aren't impacted by red light. To reduce power use, it automatically turns on and off according to the brightness of the environment. The brightness threshold used in the code may need to be adjusted to suit your environment.

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

This code operates an autonomous vehicle. Continuous servos power the wheels and move the car forwards. The left/right bias allow adjustments to be made to straighten the driving path, since there are usually differences in speed from one servo to another. The sonar sensor detects if there is an obstacle within 0.5 meters from the vehicle. In that event, the vehicle stops, adjusts it's direction, and starts backing up. As soon as the sonar sensor detects there are no obstacles present after turning or backing up enough, the vehicle resumes driving forward.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
-35
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.turn(15)
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 100)
        } else {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Supported Targets

-   for PXT/microbit

## License

MIT
