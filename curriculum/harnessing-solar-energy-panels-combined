# Solar Panels

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 180)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```

```customts
namespace phantomFix {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
}
```

## Welcome! @showdialog

Solar panels turn sunlight into electricity. They make the most electricity when they face the sun. But the sun moves across the sky all day.

Today you will code a **solar panel** that you can turn toward the sun, and then make it track the light on its own.

Build your solar panel before you start.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-render.webp" alt="Solar panel project" style="display: block; width: 60%; margin:auto;">

## Three Parts @showdialog

This tutorial has three parts:

1. **Use:** Your code is ready. Get your solar panel working.
2. **Modify:** Change the code so the panel follows the light on its own.
3. **Create:** Invent something new on your own.

You can stop after any part. Your work is saved.

## Get Ready @showdialog

Turn on your Breakout Board. Plug your micro:bit into your computer.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Pair Your micro:bit @showdialog

Click the three dots beside the `|Download|` button. Click **Connect Device**. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Pair your micro:bit" style="display: block; width: 60%; margin:auto;">

## Download

Click `|Download|` to send the starter code to your micro:bit.

## Part 1: Use @showdialog

Your solar panel code is already in the workspace. Let's find out how it works.

1. Follow the instructions at the top of the screen.
2. Click **Tell me more!** for more information.
3. Click the lightbulb for help with the code.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1

Let's review solar panels. How do they work?

~hint Tell me more!
- Solar panels take in sunlight and turn it into electricity.
- To work well, they should face the sun so they absorb as much light as possible.
hint~

## Use Step 2

Look at your solar panel. Can you name all of its parts?

~hint Tell me more!
- **Building blocks:** one baseplate, three medium frames, two cube connectors, and three corner connectors.
- **Electronics:** a micro:bit, a Breakout Board, a positional servo motor, and a solar sensor.
- **Cables:** one long cable.
hint~

## Use Step 3

What does each part do? How do the parts work together to make a solar panel?

~hint Tell me more!
- The **micro:bit** is the brain. It stores the code that tells the solar panel what to do.
- The **Breakout Board** is the backbone. It connects the micro:bit to the other parts.
- The **solar sensor** is a sense organ. It measures how much light there is.
- The **positional servo motor** is like a limb. It turns the panel toward the sun.
- The **building blocks** are the skeleton. They angle the panel toward the sky.
hint~

## Use Step 4

Let's test the servo motor first.

Look at the simulators on the left, under the micro:bit. Press the power button, then move the slider under **rightServo** from left to right. What happens?

~hint Tell me more!
- As you move the slider to the right, the number gets bigger and the panel turns counterclockwise.
- Can't find the simulators? Watch [this video](https://youtu.be/gi5Olzmk2zk).
hint~

## Use Step 5

Now let's set the panel's starting position.

Put your project down so it faces you. The solar panel should be closest to you, with the Breakout Board behind it.

## Use Step 6

Set the servo to **0°** in the simulator. At 0°, the solar panel should point to **your left**.

If it doesn't, gently remove the corner connector holding the panel. Reattach it so the panel points left.

## Use Step 7

Now let's test the code. What do you think will happen when you press **A**? Try it.

~hint Tell me more!
- Pressing **A** turns the panel to face left (0°).
- The panel was already at 0°, so nothing changes!
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
```

## Use Step 8

What do you think will happen when you touch the micro:bit **logo**? Try it.

~hint Tell me more!
- Touching the logo turns the panel to face out (90°).
hint~

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
```

## Use Step 9

What do you think will happen when you press **B**? Try it.

~hint Tell me more!
- Pressing **B** turns the panel to face right (180°).
- Pressing a button or touching the logo is called an **event**. Each event runs its own code.
hint~

```blocks
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 180)
})
```

## Use Step 10

Why is it useful to control which way the solar panel faces?

~hint Tell me more!
- The sun moves across the sky during the day. It rises in one part of the sky and sets in another.
- Turning the panel lets it keep facing the sun.
hint~

## Use Step 11

Imagine you are installing this solar panel on the roof of your school.

1. Which direction would you point the device? Use what you know about how the sun moves across the sky.
2. Which buttons would you press in the morning, afternoon, and evening to keep the panel facing the sun? Explain your thinking.

~hint Tell me more!
- The Earth spins on its axis, so the sun **appears** to rise in the east and set in the west.
- How could you figure out which way is east?
hint~

## Use Step 12

Let's test it. Hold a flashlight where the sun would be at sunrise. Press a button to turn the panel toward the light.

Did anything change on the micro:bit when the panel faced the light?

~hint Tell me more!
- When the panel faces a bright light, the diamond on the micro:bit gets bigger. That tells you the panel is in a good position.
hint~

## Use Step 13

Which part of the code makes the diamond change size?

~hint Tell me more!
- A **conditional statement** checks the solar sensor.
- If the light level is **more than 90%**, the micro:bit shows a large diamond. Otherwise, it shows a small diamond.
hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```

## Use Step 14

What are the benefits and limits of turning the solar panel **by hand** during the day?

## Checkpoint: You Did It! @showdialog

Your solar panel works!

**Think:** Who would need to press the buttons if this panel were on your school's roof? Is that realistic?

You can stop here. Or click **Next** to go on to **Part 2: Modify**.

## Part 2: Modify @showdialog

Now you will change the code so the solar panel can follow the light on its own.

After each change, click `|Download|` and test your solar panel.

## Modify Step 1

Change the **90** in the conditional. Try a lower number, then a higher one. What happens?

~hint Tell me more!
- A **higher** number means the panel needs **more** light to show the large diamond. At 100, you may never see it!
- A **lower** number makes the large diamond easier to get. If it's low enough, the large diamond may show all the time.
hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.lightLevel() > 70) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```

## Modify Step 2

Choose the number that works best for the room you're in. Why did you choose it?

## Modify Step 3

Three fixed positions is pretty limited. What if the solar panel could face **more** spots in the sky?

## Modify Step 4

First, let's see how far the servo motor can turn. It can go from **0°** to **270°**.

Change the number in ``||fwdMotors:set rightServo to||`` under ``||input:on button B pressed||`` to **270**. Download and press **B**. What happens?

~hint Tell me more!
- The panel now turns to face the back of the project.
hint~

```blocks
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 270)
})
```

## Modify Step 5

We still only have three positions.

How could you replace the single number in ``||fwdMotors:set rightServo to||`` with a block that stands for many numbers?

## Modify Step 6

One idea is ``||math:pick random||``. It picks a random number in a range.

Put ``||math:pick random 0 to 270||`` in the **B** block. Download and press **B** a few times.

~hint Tell me more!
- ``||math:pick random||`` uses the servo's full range, but it isn't practical.
- You might need to press **B** many times to find a sunny spot!
hint~

```blocks
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, randint(0, 270))
})
```

## Modify Step 7

The sun doesn't move randomly. It moves slowly across the sky in one direction.

Open ``||math:Math||``. Which block would be better for following the sun? Why?

~hint Tell me more!
- ``||math:+||`` or ``||math:-||`` can slowly increase or decrease the angle over time.
- That's a lot more like the sun's movement across the sky.
- Which one you choose depends on whether you start at 0° or 180°.
hint~

## Modify Step 8

Let's start at 0°. The servo can't go below 0°, so we'll **add** to the angle.

Replace ``||math:pick random||`` with a ``||math:+||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 0 + 0)
})
```

## Modify Step 9

Each time we press **B**, we want the panel to move 20° from **where it is now**.

Open ``||fwdMotors:Motors||``. Which block tells you the servo's current position?

~hint Tell me more!
- ``||fwdMotors:rightServo angle (°)||`` gives you the servo's current angle.
- It works like a **variable**: a value that can change.
hint~

## Modify Step 10

Put ``||fwdMotors:rightServo angle (°)||`` into the ``||math:+||`` block, and make the other side **20**.

Download your code and press **B** a few times. Wait a few seconds between presses.

~hint Tell me more!
- Now each press adds 20° to the panel's current position.
- This is much better for following the sun. You could press **B** once an hour as the sun moves.
hint~

```blocks
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 20)
})
```

## Challenge Time! @showdialog

Our design still has two limits:

1. Someone has to press **B** all day. What if no one is home?
2. Past 180°, the panel starts to face the ground. That's no good for catching sunlight!

Let's make the solar panel:

1. move **automatically** when it isn't getting enough light, and
2. stay within safe limits.

## Challenge Step 1

You don't need new blocks to make the panel move on its own. You just need to move one you already have.

Where could you put the ``||fwdMotors:set rightServo to||`` block (with **rightServo angle + 20**) so the panel turns by itself **when it isn't getting enough light**?

Try a few spots, then check the lightbulb.

~hint Tell me more!
- You already have a conditional that checks the light level.
- If the light is **above** the threshold, the large diamond shows. Otherwise, the small diamond shows.
- Put the servo block in the **else**, under ``||basic:show icon||``.
- Press **A** any time to reset the panel to 0°.
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 20)
    }
})
```

## Challenge Step 2

Change the **20** in the ``||math:+||`` block. What happens with a bigger or smaller number?

~hint Tell me more!
- A smaller number means the panel checks the light more often as it turns.
- What are the pros and cons of a very small number? A very large one?
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 10)
    }
})
```

## Challenge Step 3

Now let's add a limit, so the panel never goes past 180°.

Drag these blocks into the workspace:

- ``||logic:if then||``
- ``||logic:0 < 0||``
- ``||fwdMotors:rightServo angle (°)||``
- ``||fwdMotors:set rightServo to||``

They will look faded for now. That's OK.

## Challenge Step 4

How could you put these blocks together into a conditional that resets the servo to **0°** whenever it goes past **180°**?

Check the lightbulb for one answer.

```blocks
basic.forever(function () {
    if (fwdMotors.getAngle(fwdBase.rightServo) > 180) {
        fwdMotors.setAngle(fwdBase.rightServo, 0)
    }
})
```

## Challenge Step 5

Where should this new conditional go in your code?

Try a few spots, then check the lightbulb.

~hint Tell me more!
- Put it right after the block that adds to the angle.
- That way, the micro:bit checks the new position every time. If it's past 180°, the panel resets to 0°.
- This is called a **nested conditional**: a conditional inside another conditional.
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 10)
        // @highlight
        if (fwdMotors.getAngle(fwdBase.rightServo) > 180) {
            fwdMotors.setAngle(fwdBase.rightServo, 0)
        }
    }
})
```

## Challenge Step 6

Test it! Move a flashlight slowly around your project, like the sun moving across the sky.

How does the solar panel respond?

## Checkpoint: Great Work! @showdialog

Your solar panel now follows the light on its own!

**Think:** What would happen to your solar panel on a cloudy day?

You can stop here. Or click **Next** to go on to **Part 3: Create**.

## Part 3: Create @showdialog

Now it's your turn to invent!

**Challenge:** How could your solar panel collect even more energy, or work better in the real world? Add your own idea to the code.

There are no steps this time. Test your ideas, change them, and test again. Click the lightbulb if you need ideas.

## Create

Add your own idea to the solar panel. Download and test it.

~hint Need ideas?
- Make the panel wait a little between each move, so it moves slowly like the sun.
- Instead of jumping back to 0°, make the panel sweep back the other way.
- Show the light level on the micro:bit screen while the panel moves.
- Make the panel return to 0° at "night", when the light level is very low.
hint~

## Reflection @showdialog

Think about your project:

- What was one challenge? How did you solve it?
- What is one thing you want to learn more about?

## Finished! @showdialog

Great work! Click `|Done|` to finish the tutorial.
