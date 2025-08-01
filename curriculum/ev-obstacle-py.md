# Autonomous Electric Vehicles of the Future

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.0.3
```

## Step 1 @showdialog

Welcome to Autonomous Electric Vehicles of the Future
![built project](https://forward-education.github.io/pxt-climate-action/tutorial-assets/project-electric-200.png)

## Step 2 @showdialog

In this coding tutorial Use the EVs Sonar Sensor to avoid obstacles in its path by following a preset collision avoidance mechanism.

## Step 3 @showdialog

Turn on the Climate Action Kit board.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint

Click three dots besides `|Download|` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint

Next, click the `|Download|` button to download the blank project to start-up the simulators.

## Step 6 @showdialog

This is how the simulators should look after a successful download. You can see
the Servo Motors along side the Pump.
![initial-dowload-gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/board-no-sensors.png)

## Step 7 @showhint

Look below the @boardname@ simulator to see the Climate Action Board and the connected devices. Try to turn the motors on and off using
the simulator and observe the changes.
![servo-nocode](https://forward-education.github.io/pxt-climate-action/tutorial-assets/initial-sim-tree.gif)

## Step 8

-   Click `||fwdMotors:Motors||`
-   Drag and drop `||fwdMotors:setup driving left motor right motor||` block
    on the workspace.

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Step 9

Change the `||fwdMotors:right motor to rightServo||`.
Keep the `||fwdMotors: left motor to leftServo||`.
Also set `||fwdMotors:bias to 0||`.

-   `||fwdMotors:setup_driving(left_servo,right_servo,bias)||`
    ![changing-servo-bias](https://forward-education.github.io/pxt-climate-action/tutorial-assets/setup-driving-py.gif)

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
```

## Step 10

Click `||Variables:Variables||` drag and drop `||Variables:item = 0||` block.
Change `||Variables:item = 0||` to `||Variables:IsDrivingEnabled = false||`.

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
```

## Step 11

Click `||basic:Basic||` drag and drop `||basic:run code forever||` loop.

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Step 12

Click `||Input:Input||` drag and drop `||Input:run code on button pressed||` block.
Repeat to get another `||Input:run code on button pressed||` block.

-   Change `||Input:A||` to `||Input:B||` in the following statement:
-   `||Input:def on_button_pressed_a():||`

-   Change both `||Input:As||` to `||Input:Bs||` in the following statement:
-   `||Input:input.on_button_pressed(Button.A, on_button_pressed_a)||`

```spy
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Step 13

Click `||Variables:Variables||` drag and drop `||Variables:item = 0||` block inside
`||Input:on button pressed A()||` block and also inside
`||Input:on button pressed B()||` block. Change `||Variables:item||` to `||Variables:IsDrivingEnabled||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = 0
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})

fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Step 14

Change `||Variables:IsDrivingEnabled = 0||` to `||Variables:IsDrivingEnabled = true||`
inside `||Input:on button pressed A()||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Step 15

Change `||Variables:IsDrivingEnabled = 0||` to `||Variables:IsDrivingEnabled = false||`
inside `||Input:on button pressed B()||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Step 16

Erase the word `||pass||` inside `||basic:forever||` loop.
Click `||logic:Logic||` drag and drop `||logic:if else||` block
inside `||basic:run code forever||` block.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
    if (true) {
    }
    else {
    }
})
```

## Step 17

Click `||logic:Logic||` drag and drop `||logic:if else||` block
to nest inside the previous `||Logic:if else|` block.

```spy
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
0
)
basic.forever(function () {
    if (true) {
        if (true) {
    }
    else {
    }
    }
    else {
    }
})
```

## Step 18

Erase the word `||pass||` inside `||basic:forever||` loop.
Click `||Variables:Variables||` drag and drop `||Variables:item = 0||` block
to replace `||Logic:true||` condition of `||Logic:if else||` block.
Change `||Variables:item = 0||` to `||Variables:IsDrivingEnabled||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (true) {
    }
    else {
    }
    }
    else {
    }
})
```

## Step 19

Erase the word `||pass||` inside `||logic:else :||` loop.
Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:stop motors||`
block inside `||Logic:else condition||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (true) {
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 20

Erase the word `||Logic:true||`. Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:this distance is direction threshold m||`
block for `||logic:If :||` condition. Change threshold distance to `||fwdSensors:0.2||`.
Also change `||fwdSensors:OVER to UNDER||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 21

Erase the word `||pass||` inside `||logic:if :||` loop. Click
`||fwdMotors:Motors||` drag and drop `||fwdMotors:stop motors||` block
inside `||Logic:if condition||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 22

Click `||basic:Basic||` drag and drop `||basic:pause (ms) 100||`
block under `||fwdMotors:stop motors||`.
Change `||basic:100||` to `||basic:1000||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 23

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:drive direction at speed||`block.
Change `||fwdMotors:Forward||` to `||fwdMotors:Reverse||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 24

Click `||basic:Basic||` drag and drop `||basic:pause (ms) 100||`
block under `||fwdMotors:drive direction at speed||`.
Change `||basic:100||` to `||basic:1000||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 25

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:turn angle in place||` block
under `||basic:pause (ms) 1000||` block. Change `||fwdMotors:0||` to `||fwdMotors:25||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
        } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 26

Click `||basic:Basic||` drag and drop `||basic:pause (ms) 100||`
block under `||fwdMotors:turn angle in place||`.
Change `||basic:100||` to `||basic:1000||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
            basic.pause(1000)
        } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 27

Erase the word `||pass||` inside `||logic:else :||` loop.
Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:drive direction at speed||`
block inside `||Logic:else condition||`.

```spy
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
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
            basic.pause(1000)
        } else {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 28 @showhint

`|Download|` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![sonar-servos](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-17-ev-obstacle.gif)

## Step 29 @showhint

`|Download|` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![servos](https://forward-education.github.io/pxt-climate-action/tutorial-assets/final-sim-tree.gif)

## Step 30 @showdialog

If after `|Downloading|` your project does not work please refer to the
image and make sure your components are assigned correctly.
![correct-assignment](https://forward-education.github.io/pxt-climate-action/tutorial-assets/correct-assignment-tree.png)

## Step 31 @showdialog

Need help in assigning the right components to their simulators. Watch the video.
![final-download](https://forward-education.github.io/pxt-climate-action/tutorial-assets/servo-assign.gif)

## Step 32 @showdialog

Congratulations on completing your Autonomous Electric Vehicles of the Future Project!

## Step 33 @showdialog

After your project is complete go back to the lesson for more challenges and extensions.
