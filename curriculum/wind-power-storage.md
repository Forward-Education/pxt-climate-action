# Power Storage for Wind Energy

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.0.3
```

## Step 1 @showdialog

Welcome to Power Storage for Wind Energy Coding Tutorial.
![built project](https://forward-education.github.io/pxt-climate-action/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog

In this coding tutorial, we will use the LED lights to indicate the level of 'charge' the wind turbine's battery has based on how fast the wind turbine is spinning. The faster it's spinning, the higher the charge. The wind turbine should move in the same direction as the dial is being turned, and use the button function to stop. When the wind turbine is not moving, and therefore not generating power, the battery is considered 'dead' and should not display any lights.

## Step 3 @showdialog

Turn on the Climate Action Kit board.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/breakout-turn-on.png)

## Step 4

Click three dots besides the `|Download|` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5

Next, click the `|Download|` button to download the blank project to start-up the simulators.

## Step 6 @showdialog

This is how the simulators should look after a successful download. You can see the Dial,
the Touch and the Servo Motors along side the Pump.
![initial-dowload-gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/initial-download.gif)

## Step 7

Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try turning the Dial on your project, the virtual simulator will react to it.
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

Click `||Variables:Variables||` and make a `||Variables:Variable||`
`||Variables:turbinespeed||`.

## Step 13

Click `||Variables:Variables||` drag and drop `||Variables:set turbinespeed to 0||`
block inside `||Basic:on start||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
})
turbinespeed = 0
```

## Step 14

Click `||Variables:Variables||` drag and drop `||Variables:set turbinespeed to 0||`
block inside `||fwdSensors:on dial1 turned difference||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 15

Click `||Variables:Variables||` drag and drop `||Variables:set turbinespeed to 0||`
block inside the other `||fwdSensors:on dial1 turned difference||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 16

Click `||fwdMotors:Motors||` drag and drop
`||fwdMotors:set leftServo to 50 %||` under
`||Variables:set turbinespeed to 0||`
block. Change `||fwdMotors:leftServo||` to `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 17

Right click `||fwdMotors:set middleServo to 50 %||` block and duplicate it.
Drag and drop under the other `||Variables:set turbinespeed to 0||`
block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 18

Click `||fwdMotors:Motors||` drag and drop
`||fwdMotors:set leftServo to 50 %||` under
`||fwdSensors:on touch down||` block.
Change `||fwdMotors:leftServo||` to `||fwdMotors:middleServo||`. Change `||fwdMotors:50%||` to `||fwdMotors:0%||`

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 19

Click `||fwdSensors:Sensors||`.
Drag `||fwdSensors:dial1 absolute position||`
oval block close to `||Variables:set turbinespeed to 0||` to
replace `||Variables:0||` of `||Variables:set turbinespeed to 0||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 20

Click `||fwdSensors:Sensors||`.
Drag `||fwdSensors:dial1 absolute position||`
oval block close to the other `||Variables:set turbinespeed to 0||` to
replace `||Variables:0||` of `||Variables:set turbinespeed to 0||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 21

Click `||Variables:Variables||`.
Drag `||Variables:turbinespeed||`
oval block close to `||fwdMotors:set middleServo to 50 %||` to
replace `||fwdMotors:50||` of `||fwdMotors:set middleServo to 50 %||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 22

Click `||Variables:Variables||`.
Drag `||Variables:turbinespeed||`
oval block close to the other `||fwdMotors:set middleServo to 50 %||` to
replace `||fwdMotors:50||` of `||fwdMotors:set middleServo to 50 %||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 23

Click `||Logic:Logic||` drag and drop `||Logic:if true then else||` block
under `||fwdMotors:set middleServo||` `||Variables:turbinespeed||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
    }
    else{
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 24

Click `||Logic:Logic||` drag and drop `||Logic:if true then else||` block
under the other `||fwdMotors:set middleServo||` `||Variables:turbinespeed||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
    }
    else{
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 25

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:set all ledRing LEDs to||` block
under `||Logic:If true then else||` block. Change the `||fwdSensors:LED||`
colour to `||fwdSensors:Green||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 26

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:set all ledRing LEDs to||` block
under the other `||Logic:If true then else||` block. Change the `||fwdSensors:LED||`
colour to `||fwdSensors:Green||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 27

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:set all ledRing LEDs to||` block
under both `||Logic:else||` condition. Change the `||fwdSensors:LED||`
colour to yellow.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 28

Click `||Logic:Logic||` drag and drop `||Logic:Comparison <||` `||Logic:0 < 0||`
block to replace the `||Logic:true||` condition in
both `||Logic:if true then else||` blocks.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (0<0){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (0<0){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 29

Click `||Variables:Variables||` drag and drop `||Variables:turbinespeed||`
oval block to replace the `||Logic:0||` on the left side in both
`||Logic:Comparison||` blocks.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed<0){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 30

Click `||Logic:<||` change it to `||Logic:>||` on
`||fwdSensors:on dial1 turned by CW||` block. Change the `||Logic:0||` to
`||Logic:80||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 31

Change the `||Logic:0||` to
`||Logic: -80||` on the `||Logic:<||` block under
`||fwdSensors:on dial1 turned by CCW||` block.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (turbinespeed<-80){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 32

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:set all ledRing to||` block
inside `||fwdSensors:on touch down||` block under `||fwdMotors:set middleServo to 0%||` block.
Change the `||fwdSensors:LED||` colour to `||control:Black||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 33

`|Download|` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![dial-servo](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-13-wind.gif)

## Step 34 @showdialog

Congratulations on completing your Power Storage for Wind Energy Project!

## Step 35 @showdialog

After your project is complete, go back to the lesson for more challenges and extensions.
