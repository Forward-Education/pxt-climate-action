# Powering the Future with Wind Energy

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.0.3
```

## Step 1 @showdialog

Welcome to Powering the Future with Wind Energy Coding Tutorial.
![built project](https://forward-education.github.io/pxt-climate-action/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog

In this tutorial we will code the Dial component to turn the wind turbine in the same direction as the Dial is being turned.
Use the Dial's button function to stop the wind turbine.

## Step 3 @showdialog

Turn on the Climate Action Kit board.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint

Click three dots besides `|Download|` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint

Next, click the `|Download|` button to download the blank project to start-up the simulators.

## Step 6 @showdialog

This is how the simulators should look after a successful download. You can see the Dial,
the Touch and the Servo Motors along side the Pump.
![initial-dowload-gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/initial-download.gif)

## Step 7 @showhint

Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors.
Try turning the Dial on your project, the virtual simulator will react to it.
![wind](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-6-Dial.gif)

## Step 8

Click `||fwdSensors:Sensors||` drag and drop
`||fwdSensors:on dial1 turned difference||` block in workspace.

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    })
```

## Step 9

Right click `||fwdSensors:on dial1 turned difference||` block and duplicate. _Note: New block will be grey._
![greyed out example](https://forward-education.github.io/pxt-climate-action/tutorial-assets/dial-greyed-out-demo.png)

## Step 10

Change the direction arrow of the greyed out `||fwdSensors:on dial1 turned difference||` block. _Note: Greyed out block will turn green._
![dial direction](https://forward-education.github.io/pxt-climate-action/tutorial-assets/dial-direction-switch.gif)

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    })
```

## Step 11

Click `||fwdSensors:Sensors||` drag and drop
`||fwdSensors:on touch down||` block in workspace.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    })
```

## Step 12

Click `||fwdMotors:Motors||` drag and drop
`||fwdMotors:set leftServo to 50 %||` inside
`||fwdSensors:on dial1 turned difference||` block.
Change `||fwdMotors:leftServo||` to `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    })
```

## Step 13

Right click `||fwdMotors:set middleServo to 50 %||` block and duplicate.
Drag and drop inside the second `||fwdSensors:on dial1 turned difference||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Step 14

Click `||fwdSensors:Sensors||`. Drag `||fwdSensors:dial1 absolute position||` oval block close to `||fwdMotors:set middleServo 50 %||` replace `||fwdMotors:50 %||` of `||fwdMotors:set middleServo 50 %||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Step 15

Click `||fwdSensors:Sensors||`.
Drag `||fwdSensors:dial1 absolute position||` oval block close to
the second `||fwdMotors:set middleServo 50 %||` replace `||fwdMotors:50 %||` of `||fwdMotors:set middleServo 50 %||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
```

## Step 16

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:set leftServo 50 %||` block inside `||fwdSensors:on touch down||` block. Change `||fwdMotors:leftServo||` to `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
```

## Step 17

Change speed of `||fwdMotors:set middleServo 50 %||` block inside `||fwdSensors:on touch down||`
to `||0||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
```

## Step 18 @showhint

`|Download|` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![dial-middleServo](https://forward-education.github.io/pxt-climate-action/tutorial-assets/dial-middleServo.gif)

## Step 19 @showdialog

If after `|Downloading|` your project does not work please refer to the
image and make sure your components are assigned correctly.
![correct-assignment](https://forward-education.github.io/pxt-climate-action/tutorial-assets/correct-assignment.png)

## Step 20 @showdialog

Need help in assigning the right components to their simulators. Watch the video.
![final-download](https://forward-education.github.io/pxt-climate-action/tutorial-assets/final-download.gif)

## Step 21 @showdialog

Congratulations on completing your Powering the Future with Wind Energy Project!

## Step 22 @showdialog

After your project is complete go back to the lesson for more challenges and extensions.
