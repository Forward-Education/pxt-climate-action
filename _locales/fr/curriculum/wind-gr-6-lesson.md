# Comment les éoliennes captent l'énergie cinétique

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Comment les éoliennes captent l'énergie cinétique.
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-windturbine-200.png)

## Étape 2 @showdialog

Dans ce tutoriel, nous allons calculer le temps des révolutions, puis l'utiliser pour résoudre l'équation afin de
trouver le régime (RPM) de l'éolienne.

## Étape 3 @showdialog

Allume la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge afin de démarrer les simulateurs.

## Étape 6 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les capteurs connectés. Essaie de tourner le cadran de ton projet, le simulateur virtuel réagira.
![wind](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-6-Dial.gif)

## Étape 7

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc
`||fwdSensors:on dial1 turned difference||` dans l'espace de travail.

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
```

## Étape 8

Fais un clic droit sur le bloc `||fwdSensors:on dial1 turned difference||` et duplique-le. _Remarque : le nouveau bloc sera gris._
![greyed out example](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-greyed-out-demo.png)

## Étape 9

Change la flèche de direction du bloc grisé `||fwdSensors:on dial1 turned difference||`. _Remarque : le bloc grisé deviendra vert._
![dial direction](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-direction-switch.gif)

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 10

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc
`||fwdSensors:on touch down||` dans l'espace de travail.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 11

Clique sur `||fwdMotors:Motors||`, glisse et dépose
`||fwdMotors:set leftServo to 50 %||` à l'intérieur du bloc
`||fwdSensors:on dial1 turned difference||`. Change `||fwdMotors:leftServo||`
en `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 12

Fais un clic droit sur le bloc `||fwdMotors:set middleServo to 50 %||` et duplique-le.
Glisse-le et dépose-le à l'intérieur du second bloc `||fwdSensors:on dial1 turned difference||`.

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

## Étape 13

Clique sur `||fwdSensors:Sensors||`. Glisse le bloc ovale `||fwdSensors:dial1 absolute position||` près de `||fwdMotors:set middleServo 50 %||` pour remplacer `||fwdMotors:50 %||` du bloc `||fwdMotors:set middleServo 50 %||`.

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

## Étape 14

Répète la dernière étape, clique sur `||fwdSensors:Sensors||`.
Glisse le bloc ovale `||fwdSensors:dial1 absolute position||` près de l'autre
bloc `||fwdMotors:set middleServo 50 %||` pour remplacer `||fwdMotors:50 %||` du bloc `||fwdMotors:set middleServo 50 %||`.

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

## Étape 15

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:set leftServo 50 %||`
à l'intérieur du bloc `||fwdSensors:on touch down||`. Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`.

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

## Étape 16

Change la vitesse du bloc `||fwdMotors:set middleServo 50 %||` à l'intérieur de `||fwdSensors:on touch down||`
à `||0||`.

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

## Étape 17

Clique sur `||Variables:Variables||` et crée `||Variables:2||` `||Variables:Variables||`.

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

## Étape 18

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:set start_time to 0||`
à l'intérieur du bloc `||Basic:on start||`. Répète cette étape pour le bloc `||Variables:set stop_time to 0||`.

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

## Étape 19

Clique sur `||Input:Input||`, glisse et dépose le bloc `||Input:on button A pressed||` dans l'espace de travail.

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

## Étape 20

Clique sur `||Input:Input||`, glisse et dépose un autre bloc `||Input:on button A pressed||` dans l'espace de travail.
_Remarque : ce bloc sera grisé._ Change `||Input:button A||` en `||Input:button B||`.

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

## Étape 21

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:set start_time to 0||` à l'intérieur de
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

## Étape 22

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:set stop_time to 0||` à l'intérieur de
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

## Étape 23

Clique sur `||Basic:Basic||`, glisse et dépose le bloc `||Basic:show number||` sous
`||Variables:set stop_time to 0||` à l'intérieur du bloc `||Input:on button B pressed||`.

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

## Étape 24

Clique sur `||Math:Math||`, glisse et dépose
le bloc `||Math:Division operator||` pour remplacer le `||Basic:0||` du
bloc `||Basic:show number||`. Pour `||Math:Division||`, change le
`||Math:0||` de droite en `||Math:1000||`.

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

## Étape 25

Clique sur `||Math:Math||`, glisse et dépose
le bloc `||Math:Subtraction operator||` pour remplacer le `||Math:0||` de gauche du
bloc `||Math:0 / 1000||`.

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

## Étape 26

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:stop_time||` pour
remplacer le `||Math:0||` de gauche. Glisse et dépose `||Variables:start_time||` pour remplacer
le `||Math:0||` de droite.

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

## Étape 27

Clique sur `||Input:Input||` puis `||Input:...more||`, glisse et dépose le bloc `||Input:running time||` pour remplacer
le `||0||` dans `||Variables:start_time||` et `||Variables:stop_time||`
imbriqués respectivement dans `||Input:on button A pressed||` et `||Input:on button B pressed||`.

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

## Étape 28 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![dial-servo](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-13-wind.gif)

## Étape 29 @showdialog

Félicitations, tu as terminé ton projet Comment les éoliennes captent l'énergie cinétique!

## Étape 30 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
