# Smart Farming with Automated Watering

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.1.0
```

## Step 1 @showdialog

Welcome to Smart Farming with Automated Watering Coding Tutorial
![built project](https://forward-education.github.io/pxt-climate-action/tutorial-assets/project-advagri-200.png)

## Step 2 @showdialog

In this coding tutorial we will use the moisture sensor to measure the moisture level of the plants soil. Then, use the water pump to water the plant when the moisture level is low. Use the LED light to act as a grow light for the plant.

## Step 3 @showdialog

Turn on the Climate Action Kit board.
![breakout board](https://forward-education.github.io/pxt-climate-action/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint

Click three dots besides `|Download|` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://forward-education.github.io/pxt-climate-action/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint

Next, click the `|Download|` button to download the blank project to start-up the simulators.

## Step 6 @showhint

Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try holding the Moisture Sensor or dipping it in a glass of water. See how the virtual simulators react.
![moisture](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-4-moisture.gif)

## Step 7

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:set all ledRing LEDs to||` block inside `||basic:forever||` loop.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    )}
```

## Step 8

Click `||logic: Logic||` drag and drop `||logic:If then Else||`
block under `||fwdSensors:set all ledRing LEDs to||` block.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (true) {
          }
    else {
        }
        )}
```

## Step 9

Click `||fwdSensors:Sensors||` drag and drop `||fwdSensors:is soilMoisture1 moisture level over 5%||`
to replace `||logic:true||` condition of `||logic:if then else||` block.
Change `||fwdSensors:5% to 50%||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
          }
    else {
        }
        )}
```

## Step 10

Click `||basic:basic||` drag and drop `||basic:show icon||` block inside `||logic:if then||` condition.
Select `||basic: :)||` icon.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        }
        )}
```

## Step 11

Click `||basic:basic||` drag and drop `||basic:show icon||` block inside `||logic:else||` condition.
Select `||basic: :(||` icon.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        basic.showIcon(IconNames.Sad)}
        )}
```

## Step 12

Click `||fwdMotors:Motors||` drag and drop `||fwdMotors:run pump for 500||` under
`||basic: :(||` icon.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(100)
        }
})
```

## Step 13

Click `||basic:basic||` drag and drop `||basic:pause (ms) 100||` block under `||fwdMotors:run pump for 500||` block.
Change the `||basic:100||` to `||basic:500||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```

## Step 14

Click `||basic:basic||` drag and drop `||basic:clear screen||`
block under `||basic:pause (ms) 500||` block.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```

## Step 15 @showhint

`|Download|` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![moisture-pump](https://forward-education.github.io/pxt-climate-action/tutorial-assets/simulator-11-Moisture-pump.gif)

## Step 16 @showdialog

Congratulations on completing your Smart Farming with Automated Watering Project!

## Step 17 @showdialog

After your project is complete, go back to the lesson for more challenges and extensions.
