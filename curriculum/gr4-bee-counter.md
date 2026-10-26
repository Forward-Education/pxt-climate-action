# Tracking Pollinators with a Bee Counter

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
let bugVisits = 0
// When a bee lands on the touch sensor, add 1 to the count and show it.
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    bugVisits += 1
    basic.showNumber(bugVisits)
})
// When the program starts, set the count to 0 and show it.
bugVisits = 0
basic.showNumber(bugVisits)
```

## Welcome! @showdialog

Bees carry pollen from flower to flower. This helps plants make fruit and seeds. Scientists count bee visits to find out which flowers bees like best.

Today you will use a **bee counter**. Each time a bee lands, the counter adds 1.

Build your bee counter before you start.

![Bee counter project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-projectrender.webp)

## Three Parts @showdialog

This tutorial has three parts:

1. **Use:** Your code is ready. Get your bee counter working.
2. **Modify:** Change the code to see what each part does.
3. **Create:** Invent something new on your own.

You can stop after any part. Your work is saved.

## Get Ready @showdialog

Turn on your Breakout Board. Plug your micro:bit into your computer.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" width="400">

## Pair Your micro:bit @showdialog

Click the three dots beside the `|Download|` button. Click **Connect Device**. Follow the steps to pair your micro:bit.

![Pair your micro:bit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Download

Click `|Download|` to send the code to your micro:bit.

## Part 1: Use @showdialog

Your bee counter code is already in the workspace. Let's see what it does!

## Use Step 1

Look at your micro:bit. It shows **0**.

Now touch the touch sensor, like a bee landing on a flower. Touch it a few more times. What happens?

~hint Tell me more!
- Each touch adds 1 to the number on the micro:bit.
- The number is the count of bee visits.
hint~

## Use Step 2

What are the parts of your bee counter? What does each part do?

~hint Tell me more!
- The **micro:bit** is the brain. It makes decisions and tells the other parts what to do.
- The **Breakout Board** is the backbone. It connects the micro:bit to the other parts.
- The **touch sensor** is like a sense organ. It feels when a bee lands.
- The **building blocks** are the skeleton. They hold everything in place.
hint~

## Use Step 3

Read the code in your workspace. Find the ``||fwdButtons:on touch1 down||`` block.

The code inside this block runs **every time** the sensor is touched. Something that happens, like a bee landing, is called an **event**.

~hint Tell me more!
- ``||variables:change bugVisits by 1||`` adds 1 to the count.
- ``||basic:show number||`` shows the new count on the micro:bit.
hint~

```blocks
let bugVisits = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    bugVisits += 1
    basic.showNumber(bugVisits)
})
```

## Use Step 4

Click `|Download|` again. What happens to the number?

Which block do you think resets the count?

~hint Tell me more!
- The count goes back to **0**.
- ``||variables:set bugVisits to 0||`` is inside ``||basic:on start||``. It runs once, when the program starts.
- This is how scientists start a new count each day.
hint~

```blocks
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
```

## Checkpoint: You Did It! @showdialog

Your bee counter works!

**Think:** Why would scientists want to count bee visits?

You can stop here. Or click **Next** to go on to **Part 2: Modify**.

## Part 2: Modify @showdialog

Now you will change the code to learn how it works.

After each change, click `|Download|` to send your new code to the micro:bit.

## Modify Step 1

Your code uses a **variable** called **bugVisits** to keep track of the count.

~hint Tell me more!
- A variable stores information in your code.
- A variable is like a piggy bank. Money can go in and out. To see how much you have, you look inside.
hint~

```blocks
let bugVisits = 0
bugVisits = 0
```

## Modify Step 2

Change the number in ``||variables:set bugVisits to 0||`` to any number from 1 to 5. Download your code.

What number do you see on the micro:bit now?

~hint Tell me more!
- The micro:bit now starts counting from your new number.
- The example below uses 3. Your number may be different.
- Don't see a change? Remember to download your code.
hint~

```blocks
let bugVisits = 0
// @highlight
bugVisits = 3
basic.showNumber(bugVisits)
```

## Modify Step 3

Now change the number in ``||variables:change bugVisits by 1||`` to **3**. Download your code and touch the sensor.

What happens?

~hint Tell me more!
- Each touch now adds 3 to the count.
- It's like putting 3 coins in your piggy bank at once.
hint~

```blocks
let bugVisits = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    // @highlight
    bugVisits += 3
    basic.showNumber(bugVisits)
})
```

## Modify Step 4

Each bee should count as one visit. Change the numbers back:

- ``||variables:set bugVisits to||`` back to **0**
- ``||variables:change bugVisits by||`` back to **1**

~hint Tell me more!
- If each touch adds 3, every bee counts as 3 bees. That would mix up our count!
hint~

```blocks
let bugVisits = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    bugVisits += 1
    basic.showNumber(bugVisits)
})
bugVisits = 0
basic.showNumber(bugVisits)
```

## Modify Step 5

**Challenge:** Make the LED lights turn on when a bee lands.

Open ``||fwdLights:Lights||``. Drag ``||fwdLights:set all ledRing1 pixels to||`` into ``||fwdButtons:on touch1 down||``. Put it under ``||variables:change bugVisits by 1||``.

~hint Tell me more!
- The code inside ``||fwdButtons:on touch1 down||`` runs when a bee lands.
- So the lights turn on right after we count the visit.
hint~

```blocks
let bugVisits = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    bugVisits += 1
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    basic.showNumber(bugVisits)
})
```

## Modify Step 6

Green means go! Click the colour bubble and make the lights **green** when a bee lands.

Download your code and test it.

```blocks
let bugVisits = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    bugVisits += 1
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    basic.showNumber(bugVisits)
})
```

## Modify Step 7

Now make the lights turn **red** when the bee flies away.

Open ``||fwdButtons:Buttons||``. Drag out another ``||fwdButtons:on touch1 down||`` block. Change **down** to **up**. Then add a ``||fwdLights:set all ledRing1 pixels to||`` block inside it, set to red.

~hint Tell me more!
- **Down** is when a bee lands. **Up** is when the bee leaves.
- Download your code and test it.
hint~

```blocks
let bugVisits = 0
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    bugVisits += 1
    fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    basic.showNumber(bugVisits)
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Up, function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
bugVisits = 0
basic.showNumber(bugVisits)
```

## Checkpoint: Great Work! @showdialog

You changed your code to make your bee counter even better!

**Think:** How do the lights help someone watching the flower?

You can stop here. Or click **Next** to go on to **Part 3: Create**.

## Part 3: Create @showdialog

Now it's your turn to invent!

**Challenge:** How could your bee counter help scientists even more? Add something new to your code.

There are no steps this time. Test your ideas, change them, and test again. Click the lightbulb if you need ideas.

## Create

Add your own idea to the bee counter. Download and test it.

~hint Need ideas?
- Show a happy face when 10 bees have visited.
- Press button A to reset the count without downloading.
- Change the light colour as more bees visit.
- Play a sound when a bee lands.
hint~

## Reflection @showdialog

Think about your project:

- What was one challenge? How did you solve it?
- What is one thing you want to learn more about?

## Finished! @showdialog

Great work, scientist! Click `|Done|` to finish the tutorial.
