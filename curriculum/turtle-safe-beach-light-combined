# Turtle-safe Beach Lights

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
// Check the light level over and over.
basic.forever(function () {
    // If it is dark, turn the LEDs red. Otherwise, turn them off.
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Welcome! @showdialog

Sea turtle hatchlings find the ocean by crawling toward the brightest horizon. On a natural beach, that's moonlight over the water. Bright lights on buildings and streets can pull them the wrong way.

Today you will code a **turtle-safe beach light**. It only turns on when it's dark, and it uses red light that is hard for turtles to see.

Build your beach light before you start.

![Turtle-safe beach light](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-projectrender.webp)

## Three Parts @showdialog

This tutorial has three parts:

1. **Use:** Your code is ready. Get your beach light working.
2. **Modify:** Change the code to give you more control over the light.
3. **Create:** Invent something new on your own.

You can stop after any part. Your work is saved.

## Get Ready @showdialog

Turn on your Breakout Board. Plug your micro:bit into your computer.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" width="400">

## Pair Your micro:bit @showdialog

Click the three dots beside the `|Download|` button. Click **Connect Device**. Follow the steps to pair your micro:bit.

![Pair your micro:bit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Download

Click `|Download|` to send the starter code to your micro:bit.

## Part 1: Use @showdialog

Your beach light code is already in the workspace. Let's find out how it works.

Click **Tell me more!** for more information, and the lightbulb for help with code.

## Use Step 1

Look at your beach light. Can you name all of its parts?

~hint Tell me more!
- **Building blocks:** one baseplate, three white medium frames, two small frames, one circle, two cube connectors, and two back-to-back connectors.
- **Electronics:** a micro:bit, a Breakout Board with a battery, an LED ring, and a solar sensor.
- **Cables:** one short and one long.
hint~

## Use Step 2

What does each part do? How do the parts work together?

~hint Tell me more!
- The **micro:bit** is the brain. It stores the code that tells the light what to do.
- The **Breakout Board** is the backbone. It carries messages between the micro:bit, the sensor, and the LEDs.
- The **solar sensor** is a sense organ, like your eyes. It measures how bright it is.
- The **LED ring** is like a limb. It acts on the micro:bit's instructions.
- The **building blocks** are the skeleton. They hold everything in place.
- The **battery** is the heart. It powers the light when it isn't plugged into a computer.
hint~

## Use Step 3

Read the code in your workspace.

When do you think the light will turn on? When will it turn off?

## Use Step 4

Test your prediction. Cover the solar sensor with your hand to make it dark, like nighttime. Then take your hand away.

What happens?

~hint Tell me more!
- When the sensor is covered, the LEDs turn red. When it's uncovered, they turn off.
- The light is controlled by a **conditional statement**. A conditional is an "if, then" rule. It tells the micro:bit what to do in different situations.
hint~

## Use Step 5

Find the conditional statement in your code. What rule does the micro:bit use to decide when to turn on the light?

~hint Tell me more!
- The micro:bit turns on the light when the light level is **40% or lower**.
- ``||fwdSensors:solar1 light level (%)||`` ≤ 40 is a **boolean expression**. It is always either true or false.
- If it's true, the code under **if** runs. If it's false, the code under ``||logic:else||`` runs.
hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Use Step 6

What makes this light "turtle-safe"? Think about both the build and the code.

~hint Tell me more!
- The white frames keep the light low to the ground.
- The circle and small frames point the light down, so it doesn't spread.
- Red light is hard for sea turtles to see.
- The conditional makes sure the light is only on when it's dark.
hint~

## Use Step 7

Unplug your light from the computer. Carry it to different places in the room.

How does the light respond? Does it ever turn on when you don't expect it to?

## Checkpoint: You Did It! @showdialog

Your turtle-safe beach light works!

**Think:** Where in your community could a light like this help?

You can stop here. Or click **Next** to go on to **Part 2: Modify**.

## Part 2: Modify @showdialog

Now you will change the code to give you more control over the light.

After each change, click `|Download|` and test your light.

## Modify Step 1

Is your light turning on too easily, or not easily enough?

Change the **40** in ``||fwdSensors:solar1 light level (%)||`` ≤ 40 to a different number. Download your code and test it.

~hint Tell me more!
- ``||logic:≤||`` is a **comparison operator**. It compares two numbers.
- A lower number means the room has to be darker before the light turns on.
- Pick a number that works well in your room. The examples below keep 40.
hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 2

Turtle-safe lights don't have to be red. Any colour with a long wavelength works, like **orange** or **amber**.

Click the red colour in the first ``||fwdLights:set all ledRing1 pixels to||`` block. Pick orange or amber.

~hint Tell me more!
- Leave the second block black. That's what turns the light off.
- The examples below use orange.
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 3

Beach lights should only be as bright as they need to be.

Open ``||fwdLights:Lights||``. Drag ``||fwdLights:set ledRing1 brightness to||`` into ``||basic:on start||``. Try different numbers from 1 to 10.

~hint Tell me more!
- **10** is the brightest. **1** is the dimmest.
- ``||basic:on start||`` runs once, when the program starts. That's enough to set the brightness.
hint~

```blocks
// @highlight
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 4

Right now the light is either fully on or off. Let's add a dimmer setting for dusk, when it's only a little dark.

Click the **+** at the bottom of the ``||logic:if then else||`` block. This adds an **else if** with a new condition.

```blocks
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (false) {

    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 5

Dusk is when the light level is **more than 40%** and **80% or less**. Build that rule in the **else if** slot.

Use an ``||logic:and||`` block from ``||logic:Logic||``. Put a comparison on each side, with a ``||fwdSensors:solar1 light level (%)||`` block in each.

~hint Tell me more!
- This is a **compound conditional**. ``||logic:and||`` means **both** parts must be true.
- Check the lightbulb if you get stuck.
hint~

```blocks
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() > 40 && fwdSensors.solar1.lightLevel() <= 80) {

    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 6

At dusk, only two LEDs should light up.

Drag two ``||fwdLights:set ledRing1 pixel||`` blocks into the **else if**. Set one to pixel **1** and the other to pixel **5**, both orange.

~hint Tell me more!
- ``||fwdLights:set ledRing1 pixel||`` changes **one** LED. The LEDs are numbered 1 to 8 around the ring.
- ``||fwdLights:set all ledRing1 pixels to||`` changes **all** of them at once.
hint~

```blocks
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() > 40 && fwdSensors.solar1.lightLevel() <= 80) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel5, 0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 7

Download and test. Cover the sensor completely, then slowly move your hand away, like the sun coming up.

Do only two LEDs stay on at dusk? Or do all of them stay on?

~hint Tell me more!
- The ``||fwdLights:set ledRing1 pixel||`` blocks only change two LEDs. The other six keep whatever colour they had before.
- So if it was fully dark first, all eight stay on!
- Fix it: add ``||fwdLights:set all ledRing1 pixels to||`` **black** at the top of the **else if**, before the two pixel blocks. This clears the ring first.
hint~

```blocks
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() > 40 && fwdSensors.solar1.lightLevel() <= 80) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel5, 0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Modify Step 8

Read through your conditional from top to bottom. What does the light do at night, at dusk, and during the day?

~hint Tell me more!
- **Night** (40% or less): all LEDs on.
- **Dusk** (more than 40% and up to 80%): two LEDs on.
- **Day** (anything else): all LEDs off.
- The micro:bit checks each rule in order and runs the **first** one that is true.
hint~

## Modify Step 9

**Challenge:** Add a fourth level, so the light gets dimmer in smaller steps.

Click **+** again to add another **else if**. Change the numbers so the four levels cover every light level. Then decide what the new level should do. It should be **very** dim.

~hint Tell me more!
- One way: night is **25% or less**, dusk is **25% to 50%**, and late dusk is **50% to 75%**.
- For a very dim light, you could turn on just one LED.
- There are many ways to do this. Test your idea, then compare it with the lightbulb.
hint~

```blocks
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 25) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() > 25 && fwdSensors.solar1.lightLevel() <= 50) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel5, 0xff8000)
    } else if (fwdSensors.solar1.lightLevel() > 50 && fwdSensors.solar1.lightLevel() <= 75) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Checkpoint: Great Work! @showdialog

Your beach light now responds to four different light levels!

**Think:** Why is it better for turtles to have a light that dims in steps, instead of one that is just on or off?

You can stop here. Or click **Next** to go on to **Part 3: Create**.

## Part 3: Create @showdialog

Now it's your turn to invent!

**Challenge:** Real beach lights are often on even when no one is around. How could you make your light even safer for turtles? Add your own idea to the code.

There are no steps this time. Test your ideas, change them, and test again. Click the lightbulb if you need ideas.

## Create

Add your own idea to the beach light. Download and test it.

~hint Need ideas?
- **Only turn on when people are nearby.** Connect the sonar sensor. Use ``||fwdSensors:sonar1 distance (m)||`` to check if someone is closer than 0.1 m (10 cm). Put your light code **inside** that new conditional. This is called a **nested conditional**.
- Show the light level on the micro:bit screen so you can choose better numbers.
- Press button A to switch the light off completely.
- Make the light fade on slowly instead of turning on all at once.
hint~

## Reflection @showdialog

Think about your project:

- What was one challenge? How did you solve it?
- What is one thing you want to learn more about?

## Finished! @showdialog

Great work! Click `|Done|` to finish the tutorial.
