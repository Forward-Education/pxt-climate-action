# Forward Education Designing Sustainable Smart Homes - Modify Tutorial

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v1.0.3
```

```template
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        Temperature += 1
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
            fwdMotors.setAngle(fwdBase.leftServo, 100)
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

let Temperature = 0
let openDoor = ""
openDoor = "openDoor"
Temperature = 17
fwdMotors.setAngle(fwdBase.leftServo, 0)
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Smart Home - Modify Tutorial @showdialog

Today, we are building and coding a **smart home**!

As it stands, we have an automated smart home model with a remote thermostat and a door that unlocks. Let’s explore how to optimize our project by **modifying** our code!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-smarthome-render.webp" alt="Full smart home render" style="display: block; width: 80%; margin:auto;">

## Step 1 @showdialog

IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Step 2 @showdialog

Click the three dots beside the `|Download|` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3

Click the `|Download|` button to download the starter code to your project on **both** of the micro:bits in your project.

## Step 4

Place one micro:bit into the **breakout board in the model**, and hold one micro:bit **in your hand** throughout this project.

## Step 5

Think about how smart homes in our lesson worked.

What do you think that the micro:bit in your **model** represents inside of your house?

What do you think that the micro:bit in your hand represents?

~hint Tell Me More!

-   The micro:bit in your **model** represents a smart thermostat in our house.

-   The micro:bit in your **hand** represents a phone or smart app that can control automated functions in our house.

-   These micro:bits communicate using **radio waves**, similar to how most smart apps control lights in a house.

hint~

## Step 6

Think back to our lesson about wireless communication. Which blocks do you think the two micro:bits use to communicate with each other using **radio waves**?

~hint Tell Me More!

The `||Radio:radio set group||` makes sure that both micro:bits are communicating on the same radio channel.

`||Radio:radio send||` number or string blocks **send** a message from the micro:bit you pressed a button on, to the second micro:bit.

The `||Radio:radio received||` number or string blocks **listen** for instructions from the micro:bit you pressed a button on.

hint~

```blocks
// @highlight
radio.setGroup(1)

input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
   // @highlight
    radio.sendNumber(-1)
})

// @highlight
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        basic.showArrow(ArrowNames.South)
        Temperature += -1
    }
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
        Temperature += 1
    }
    basic.showNumber(Temperature)
})
```

## Step 7

Let’s test out our automated smart home model and see how it works!

Look at the difference in the code when we press **A**, versus when we press **B** on either of the micro:bits.

Why do you think there are positive and negative numbers in the `||variables:change Temperature by||` blocks?

~hint Tell Me More!

When you press the **A** button on either micro:bit, the `||variables:Temperature||` variable lowers by 1. The thermostat is now set to **1 degree Celsius cooler.**

When you press the **B** button on either micro:bit, the `||variables:Temperature||` variable raises by 1. The thermostat is now set to **1 degree Celsius warmer.**

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        Temperature += 1
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Step 8

What do you think will happen if we change the number in the `||variables:change Temperature by||` block from 1 to 5?

~hint Tell Me More!

Pressing **A** or **B** now increases and decreases the thermostat by **5 degrees Celsius** each time!

Remember to `|download|` your code to **both** of your micro:bits when you're ready to test your code.

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    Temperature += -5
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.B, function () {
    // @highlight
    Temperature += 5
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        // @highlight
        Temperature += -5
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        // @highlight
        Temperature += 5
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
```

## Step 9

Now that you understand how to adjust the **thermostat** using both micro:bits, which code blocks do you think **unlock the door** and **turns on the lights**?

~hint Tell Me More!

Pressing **A+B** on the **micro:bit in your hand** unlocks the door and turns on the lights remotely, like waking up in the morning, or getting home for the day!

If the door is locked, the `||fwdMotors:leftServo||` turns to 100 degrees, so we can slide open the door.

At the same time, the `||fwdSensors:LED ring||` turns on so we can see inside our house!

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
            fwdMotors.setAngle(fwdBase.leftServo, 100)
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Step 10

Now that we have **modified** our code to understand how the automated smart home model works, we will complete a small challenge!

## Step 11

To make our home more sustainable, we can **sense** how much sunlight is coming through the windows to help us adjust the **lights** inside our house automatically!

What type of sensor would we need to add to our project?

~hint Tell Me More!

The `||fwdSensors:solar||` sensor can detect light in a room!

hint~

```block
fwdSensors.solar1.isPastThreshold(,fwdEnums.OverUnder.Under)
```

## Step 12

Let's think about the functionality we want to add to our model:

1. When it is **night time** our `||fwdSensors:LED light||` will turn on all the pixels in the ring.

2. When it is **cloudy**, `||fwdSensors:LED light||` will turn on half of the pixels.

3. When it is **sunny**, `||fwdSensors:LED light||` will turn off all of the pixels.

What type of block could you add to your code to satisfy these **conditions**?

~hint Tell Me More!

A `||logic:conditional statement||`! Look in the logic drawer for the "if/else" block and drag it below the `||basic:showNumber||` block in the `||basic:forever||` loop.

Click the + button below your `||logic:if/else||` block to add another condition to your code.

hint~

```blocks
basic.forever(function () {
    basic.showNumber(Temperature)
    // @highlight
    if (true) {
    } else if (true){}
    else {
    }
})
```

## Step 13

If it's dark outside, we'll need to turn on all of the lights in our room so we can see!

Which blocks do you need to add to your code to create the following condition?

If the sunlight is **under 25%**, turn **all of the pixels on**.

~hint Tell Me More!

You'll need a `||fwdSensors:solar||` block to detect if the sunlight is **under 25%**.

You'll need a `||fwdSensors:set all ledRing LEDs||` block to turn all the LEDs on simultaneously.

Pick any LED colour; we've picked white for this project.

hint~

```blocks
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
    else if(true) {}
    else {
    }
```

## Step 14

If it's cloudy outside, we have some sunlight, but we may need to turn our lights on dimly.

Which blocks do you need to add to your code to create the following condition?

If the sunlight is **under 50%**, turn **half of the pixels on**.

~hint Tell Me More!

You'll need a `||fwdSensors:solar||` block to detect if the sunlight is **under 50%**.

You'll need four `||fwdSensors:set ledRing to||` blocks to turn four of the eight LED pixels on.

Remember, the LED pixels count from 0-7!

hint~

```blocks
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
    else if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(1, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(3, 0xffffff)
    } else {
    }
```

## Step 15

If it's sunny outside, we don't need to turn the lights on in our house at all!

Which block will you need to add to your code to create the following condition?

Otherwise, turn **all of the pixels off**

~hint Tell Me More!

You'll need a `||fwdSensors:set all ledRing LEDs||` block to turn all the LEDs off simultaneously.

Pick the colour black to turn off the LEDs on your project.

`|Download|` your code to **both** of your micro:bits when you're ready to test your automated lighting system!

hint~

```blocks
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        fwdLights.ledRing1.setPixelColor(1, 0xffffff)
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        fwdLights.ledRing1.setPixelColor(3, 0xffffff)
    }
    else {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Step 16

What do you notice happens to the `||fwdSensors:LED ring||` when you cover the `||fwdSensors:solar||` sensor with your hand?

What happens to the `||fwdSensors:LED ring||` when you move your project to another room?

~hint Tell Me More!

When you cover the `||fwdSensors:solar||` sensor with your hand, there's less light detected by the sensor, and the `||fwdSensors:LED ring||` will turn on!

When you move your project to another room, the `||fwdSensors:LED ring||` may turn on or off depending on the difference in lighting.

hint~

## Reflection

Before we wrap up:

-   Do you think a `||variables:change Temperature by||` 1, or 5 degrees Celsius is more eco-friendly? Share your reasoning.
-   How might you incorporate a touch sensor into your smart home model to open a door manually?
-   What other features might you adapt to help make your automated smart home more sustainable?

## Finished

Click `|Done|` to finish the tutorial.
