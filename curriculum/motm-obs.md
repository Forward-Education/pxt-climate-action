# Mission on the Moon - Sonar Avoidance

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.0.3
```

## Step 1 @showdialog

Welcome to Mission on the Moon - Sonar Avoidance
![built project](https://forward-education.github.io/pxt-climate-action/tutorial-assets/project-electriccar-400.png)

## Step 2 @showdialog

Plug your USB cable into the micro:bit.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/connect-microbit.gif)

## Step 3 @showdialog

Insert it into the Climate Action Kit board.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/breakout-resized.png)

## Step 4 @showhint

Click three dots besides `|Download|` button and follow the steps to pair your micro:bit.
![pair gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:Setup Driving||` block inside `||basic:on start||` loop.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Step 6

Change the `||fwdMotors:right motor to rightServo||`.
Keep the `||fwdMotors: left motor to leftServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
```

## Step 7

Click `||logic:Logic||` drag and drop `||logic:if else||` block inside `||basic:forever||` loop.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (true) {}
    else{}
        })
```

## Step 8

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:sonar1 distance is over 0 m||`
block to replace the `||logic:true||` condition.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0, fwdEnums.OverUnder.Over)) {

    } else {

    }
})
```

## Step 9

Change `||fwdSensors:sonar1 distance is over to under||`.
Change `||fwdSensors:0||` to `||fwdSensors:0.2||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        }
    else {
        }
})
```

## Step 10

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:stop motors||`
inside `||logic:true||` condition of `||logic:if else||` block.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
            }
        else {
        }
})
```

## Step 11

Click `||basic:Basic||` drag and drop `||basic:pause (ms) 100||` under
`||fwdMotors:stop motors||` block. Change `||basic:100||` to `||basic:1000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        }
    else {
        }
})
```

## Step 12

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:drive forward at 50||`
block under `||basic:pause (ms) 1000||` block. Change `||fwdMotors:forward||`
to `||fwdMotors:reverse||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
        }
    else {
        }
})
```

## Step 13

Click `||basic:Basic||` drag and drop `||basic:pause (ms) 100||` under
`||fwdMotors:stop motors||` block. Change `||basic:100||` to `||basic:1000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
        basic.pause(1000)
    }
    else {
            }
})
```

## Step 14

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors: Turn 0 in place||`
block under `||basic:pause (ms) 1000||`. Change the `||fwdMotors:0||`
to `||fwdMotors:25||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
    }
    else {
    }
})
```

## Step 15

Click `||basic:Basic||` drag and drop `||basic:pause (ms) 100||` under
`||fwdMotors:stop motors||` block. Change `||basic:100||` to `||basic:1000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {
        }
})
```

## Step 16

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:drive forward at 50||`
block inside `||logic:else||` condition.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {
        fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
    }
})
```

## Step 17

Click `||fwdMotors:+||` on `||fwdMotors:Setup Driving||`
block inside `||basic:on start||` block. Set bias to `||fwdMotors: 0||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {
        fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
    }
})
```

## Step 18

`|Download|` and test your code.
Congratulations on completing your Mission on the Moon - Sonar Avoidance Prototype! - Go back to the lesson for more activities and extensions.
