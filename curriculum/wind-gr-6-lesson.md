# How Wind Turbines Capture Kinetic Energy

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.0.3
```

## Step 1 @showdialog

Welcome to How Wind Turbines Capture Kinetic Energy Coding Tutorial.
![built project](https://forward-education.github.io/pxt-climate-action/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog

In this tutorial we will calculate the time for revolutions and then use it to solve the equation to
find the (RPM) of the Wind Turbine.

## Step 3 @showdialog

Turn on the Climate Action Kit board.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint

Click three dots besides `|Download|` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint

Next, click the `|Download|` button to download the blank project to start-up the simulators.

## Step 6 @showhint

Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try turning the Dial on your project, the virtual simulator will react to it.
![wind](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-6-Dial.gif)

## Step 7

Click `||fwdSensors:Sensors||` drag and drop
`||fwdSensors:on dial1 turned difference||` block in workspace.

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    })
```

## Step 8

Right click `||fwdSensors:on dial1 turned difference||` block and duplicate. _Note: New block will be grey._
![greyed out example](https://forward-education.github.io/pxt-climate-action/tutorial-assets/dial-greyed-out-demo.png)

## Step 9

Change the direction arrow of the greyed out `||fwdSensors:on dial1 turned difference||` block. _Note: Greyed out block will turn green._
![dial direction](https://forward-education.github.io/pxt-climate-action/tutorial-assets/dial-direction-switch.gif)

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    })
```

## Step 10

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

## Step 11

Click `||fwdMotors:Motors||` drag and drop
`||fwdMotors:set leftServo to 50 %||` inside
`||fwdSensors:on dial1 turned difference||` block. Change `||fwdMotors:leftServo||`
to `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    })
```

## Step 12

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

## Step 13

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

## Step 14

Repeat the last step, click `||fwdSensors:Sensors||`.
Drag `||fwdSensors:dial1 absolute position||` oval block close to the other
`||fwdMotors:set middleServo 50 %||` replace `||fwdMotors:50 %||` of `||fwdMotors:set middleServo 50 %||` block.

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

## Step 15

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:set leftServo 50 %||` block
inside `||fwdSensors:on touch down||` block. Change `||fwdMotors:leftServo||` to `||fwdMotors:middleServo||`.

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

## Step 16

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

## Step 17

Click on `||Variables:Variables||` and make `||Variables:2||` `||Variables:Variables||`.

-   `||Variables:start_time||`
-   `||Variables:stop_time||`

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
```

## Step 18

Click on `||Variables:Variables||` drag and drop `||Variables:set start_time to 0||`
inside `||Basic:on start||` block. Repeat this for `||Variables:set stop_time to 0||` block.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
```

## Step 19

Click `||Input:Input||` drag and drop `||Input:on button A pressed||` block on the workspace.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
})
```

## Step 20

Click `||Input:Input||` drag and drop another `||Input:on button A pressed||` block on the workspace.
_Note: This block will be greyed out._ Change the `||Input:button A||` to `||Input:button B||`.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 21

Click `||Variables:Variables||` drag and drop `||Variables:set start_time to 0||` inside
`||Input:on button A pressed||`.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 22

Click `||Variables:Variables||` drag and drop `||Variables:set stop_time to 0||` inside
`||Input:on button B pressed||`.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
```

## Step 23

Click `||Basic:Basic||` drag and drop `||Basic:show number||` block under
`||Variables:set stop_time to 0||` inside `||Input:on button B pressed||` block.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber(0)
})
```

## Step 24

Click `||Math:Math||` drag and drop
`||Math:Division operator||` block to replace the `||Basic:0||` of
`||Basic:show number||` block. For `||Math:Division||` change the
right `||Math:0||` to `||Math:1000||`.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber(0/1000)
})
```

## Step 25

Click `||Math:Math||` drag and drop
`||Math:Subtraction operator||` block to replace the left `||Math:0||` of
`||Math:0 / 1000||` block.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber((0-0)/1000)
})
```

## Step 26

Click `||Variables:Variables||` drag and drop `||Variables:stop_time||` to
replace left `||Math:0||`. Drag and drop `||Variables:start_time||` to replace
right `||Math:0||`.

```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber((stop_time - start_time)/1000)
})
```

## Step 27

Click `||Input:Input||` and then `||Input:...more||` drag and drop `||Input:running time||` block to replace
`||0||` in `||Variables:start_time||` and `||Variables:stop_time||`
nested in `||Input:on button A pressed||` and `||Input:on button B pressed||`
respectively.

```blocks
let stop_time = 0
let start_time = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
stop_time = input.runningTime()
basic.showNumber((stop_time - start_time)/1000)
})
```

## Step 28 @showhint

`|Download|` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![dial-servo](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-13-wind.gif)

## Step 29 @showdialog

Congratulations on completing your How Wind Turbines Capture Kinetic Energy Project!

## Step 30 @showdialog

After your project is complete, go back to the lesson for more challenges and extensions.
