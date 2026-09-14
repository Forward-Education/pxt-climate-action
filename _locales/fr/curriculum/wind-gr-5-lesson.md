# Produire de l'énergie pour l'avenir grâce à l'énergie éolienne

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Produire de l'énergie pour l'avenir grâce à l'énergie éolienne.
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-windturbine-200.png)

## Étape 2 @showdialog

Dans ce tutoriel, nous allons programmer le composant cadran pour faire tourner l'éolienne dans la même direction que le cadran est tourné.
Utilise la fonction du bouton du cadran pour arrêter l'éolienne.

## Étape 3 @showdialog

Allume la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge afin de démarrer les simulateurs.

## Étape 6 @showdialog

Voici à quoi les simulateurs devraient ressembler après un téléchargement réussi. Tu peux voir le cadran,
le capteur tactile et les servomoteurs à côté de la pompe.
![initial-dowload-gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-download.gif)

## Étape 7 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les capteurs connectés.
Essaie de tourner le cadran de ton projet, le simulateur virtuel réagira.
![wind](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-6-Dial.gif)

## Étape 8

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc
`||fwdSensors:on dial1 turned difference||` dans l'espace de travail.

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
```

## Étape 9

Fais un clic droit sur le bloc `||fwdSensors:on dial1 turned difference||` et duplique-le. _Remarque : le nouveau bloc sera gris._
![greyed out example](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-greyed-out-demo.png)

## Étape 10

Change la flèche de direction du bloc grisé `||fwdSensors:on dial1 turned difference||`. _Remarque : le bloc grisé deviendra vert._
![dial direction](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-direction-switch.gif)

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 11

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

## Étape 12

Clique sur `||fwdMotors:Motors||`, glisse et dépose
`||fwdMotors:set leftServo to 50 %||` à l'intérieur du bloc
`||fwdSensors:on dial1 turned difference||`.
Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 13

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

## Étape 14

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

## Étape 15

Clique sur `||fwdSensors:Sensors||`.
Glisse le bloc ovale `||fwdSensors:dial1 absolute position||` près du
second bloc `||fwdMotors:set middleServo 50 %||` pour remplacer `||fwdMotors:50 %||` du bloc `||fwdMotors:set middleServo 50 %||`.

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

## Étape 16

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:set leftServo 50 %||` à l'intérieur du bloc `||fwdSensors:on touch down||`. Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`.

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

## Étape 17

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

## Étape 18 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![dial-middleServo](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-middleServo.gif)

## Étape 19 @showdialog

Si après avoir `|téléchargé|` ton projet ne fonctionne pas, réfère-toi à
l'image et assure-toi que tes composants sont assignés correctement.
![correct-assignment](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/correct-assignment.png)

## Étape 20 @showdialog

Besoin d'aide pour assigner les bons composants à leurs simulateurs? Regarde la vidéo.
![final-download](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/final-download.gif)

## Étape 21 @showdialog

Félicitations, tu as terminé ton projet Produire de l'énergie pour l'avenir grâce à l'énergie éolienne!

## Étape 22 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
