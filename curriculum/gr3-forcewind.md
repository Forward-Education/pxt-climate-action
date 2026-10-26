# The Powerful Force of Wind

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.1.0
```

```template
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, 0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, 50)
})
```

## Welcome! @showdialog

Wind is a **force**. It pushes on things. When wind pushes on the blades of a wind turbine, the blades turn.

Today you will use a **wind turbine** that you control with a dial.

Build your wind turbine before you start.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-render.webp" alt="Wind turbine project" style="display: block; width: 60%; margin:auto;">

## Three Parts @showdialog

This tutorial has three parts:

1. **Use:** Your code is ready. Make your wind turbine spin.
2. **Modify:** Change the code to see what each part does.
3. **Create:** Try your own idea.

You can stop after any part. Your work is saved.

## Get Ready @showdialog

Turn on your Breakout Board. Plug your micro:bit into your computer.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 45%; margin:auto;">

## Pair Your micro:bit @showdialog

Click the three dots beside the `|Download|` button. Click **Connect Device**. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Pair your micro:bit" style="display: block; width: 60%; margin:auto;">

## Download

Click `|Download|` to send the code to your micro:bit.

## Part 1: Use @showdialog

Your wind turbine code is ready. Let's see what it does!

Click **Tell me more!** for help.

## Use Step 1

Look at your wind turbine. Which part stands for:

- the **wind**?
- the turbine **blades**?

~hint Tell me more!
- The **dial** stands for the wind.
- The green **circle** stands for the blades.
hint~

## Use Step 2

Turn the dial to the **right**. What happens to the green circle?

~hint Tell me more!
- The green circle starts to spin!
- Turning the dial is the **input**. The spinning is the **output**.
hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, 50)
})
```

## Use Step 3

Now turn the dial to the **left**. What happens?

~hint Tell me more!
- Nothing happens!
- There is no code that tells the micro:bit what to do when the dial turns left.
hint~

## Use Step 4

How can you **stop** the turbine? Look at the code for a clue, then try it.

~hint Tell me more!
- Press **down** on the dial. The turbine stops.
hint~

```blocks
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, 0)
})
```

## Use Step 5

Real wind turbines have long blades.

Add the green small frames to your turbine as blades. Add one at a time. Can it still spin?

## Checkpoint: You Did It! @showdialog

Your wind turbine spins!

**Think:** What would happen to a real wind turbine on a day with no wind?

You can stop here. Or click **Next** to go on to **Part 2: Modify**.

## Part 2: Modify @showdialog

Now you will change the code to see what each part does.

After each change, click `|Download|` and test your turbine.

## Modify Step 1

Change the **50** in ``||fwdMotors:set middleServo to 50 %||`` to **100**. Download and turn the dial right.

What happens?

~hint Tell me more!
- The turbine spins **faster**!
- The blue block is the **output**. A bigger number means more speed.
- No change? Press the dial to stop the turbine, then turn the dial again.
hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdMotors.setSpeed(fwdBase.middleServo, 100)
})
```

## Modify Step 2

Now change the number to **20**. What happens?

~hint Tell me more!
- The turbine spins more **slowly**.
hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdMotors.setSpeed(fwdBase.middleServo, 20)
})
```

## Modify Step 3

Put a minus sign in front of the number, so it says **-20**. What happens?

~hint Tell me more!
- The turbine spins the **other way**!
hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdMotors.setSpeed(fwdBase.middleServo, -20)
})
```

## Modify Step 4

Click the arrow in ``||fwdButtons:on dial1 rotated||`` and pick the other direction. Download and test.

Which way do you turn the dial now?

~hint Tell me more!
- The green block is an **event**. It tells the micro:bit **when** to run the code.
- Now you turn the dial to the **left** to make the turbine spin.
hint~

```blocks
// @highlight
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, -20)
})
```

## Modify Step 5

**Challenge:** Can you make the turbine spin when you turn the dial **either** way?

Open ``||fwdMotors:Motors||``. Drag a ``||fwdMotors:set leftServo to 50 %||`` block into the workspace. Change **leftServo** to **middleServo**.

~hint Tell me more!
- Our servo motor is plugged into the **middle** port.
- The block looks faded for now. That's OK!
hint~

```blocks
fwdMotors.setSpeed(fwdBase.middleServo, 50)
```

## Modify Step 6

The new block is faded because the micro:bit doesn't know **when** to run it. We need an event!

Open ``||fwdButtons:Buttons||``. Drag another ``||fwdButtons:on dial1 rotated||`` block into the workspace.

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {

})
```

## Modify Step 7

Put the ``||fwdMotors:set middleServo to 50 %||`` block inside the new event. Make sure the arrows point different ways in your two events.

Download and test. Does the turbine spin when you turn the dial either way?

## Modify Step 8

Real wind pushes blades in the **same** direction it blows.

Change your numbers so the turbine spins the **same way** you turn the dial. Then check the lightbulb.

```blocks
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, 0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, 50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdMotors.setSpeed(fwdBase.middleServo, -50)
})
```

## Checkpoint: Great Work! @showdialog

Your wind turbine spins both ways!

**Think:** How is the dial like real wind? How is it different?

You can stop here. Or click **Next** to go on to **Part 3: Create**.

## Part 3: Create @showdialog

Now it's your turn!

**Challenge:** What else could your wind turbine do? Add your own idea to the code.

There are no steps this time. Try your idea, test it, and change it. Click the lightbulb if you need ideas.

## Create

Add your own idea to the wind turbine. Download and test it.

~hint Need ideas?
- Show an arrow on the micro:bit that points the way the turbine spins.
- Use button A for a **gentle breeze** (slow) and button B for **strong wind** (fast).
- Play a sound when the turbine starts spinning.
hint~

## Reflection @showdialog

Think about your project:

- What was one challenge? How did you solve it?
- What is one thing you want to learn more about?

## Finished! @showdialog

Great work! Click `|Done|` to finish the tutorial.
