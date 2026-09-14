# Reboiser nos forêts avec des semeuses d'arbres automatisées

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Reboiser nos forêts avec des semeuses d'arbres automatisées
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-treeseeder-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, nous ferons avancer le véhicule semeur d'arbres à l'aide des
servomoteurs continus et laisser tomber 4 « graines simulées » à intervalles réguliers à l'aide du
servomoteur positionnel.

## Étape 3 @showdialog

Allume la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|` et suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge afin de démarrer les simulateurs.

## Étape 6 @showdialog

Voici à quoi les simulateurs devraient ressembler après un téléchargement réussi. Tu peux voir
les servomoteurs à côté de la pompe.
![initial-dowload-gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/board-no-sensors.png)

## Étape 7 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les dispositifs connectés. Essaie d'allumer et d'éteindre les moteurs à l'aide
du simulateur et observe les changements.
![servo-nocode](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-sim-tree.gif)

## Étape 8

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:Setup Driving||` à l'intérieur de la boucle `||basic:on start||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Étape 9

Change `||fwdMotors:left motor to leftServo||`
et `||fwdMotors: right motor to rightServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
```

## Étape 10

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:set leftServo to 0°||`
sous le bloc `||fwdMotors:Setup Driving||`. Change `||fwdMotors:leftServo||` en
`||fwdMotors:middleServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
```

## Étape 11

Clique sur `||input:Input||`, glisse et dépose le bloc `||input:on button A pressed||`
dans l'espace de travail.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    	
    })
```

## Étape 12

Clique sur `||loops:Loops||`, glisse et dépose le bloc `||loops:repeat 4 times||` à l'intérieur
du bloc `||input:on button A pressed||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {}
})
```

## Étape 13

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:drive forward at 50%||`
à l'intérieur de la boucle `||loops:repeat 4 times||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    }
})
```

## Étape 14

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:pause (ms) 100||`
sous le bloc `||fwdMotors:drive forward at 50%||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(100)
    }
})
```

## Étape 15

Change `||basic:pause (ms) 100||` en `||basic: (ms) 2000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(2000)
    }
})
```

## Étape 16

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:set leftServo 0°||`
sous le bloc `||basic:pause (ms) 2000||`. Change `||fwdMotors:leftServo||` en
`||fwdMotors:middleServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, 0)
    }
})
```

## Étape 17

Change `||fwdMotors:set middleServo to 0°||` en `||fwdMotors:45°||`

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, 45)
    }
})
```

## Étape 18

Clique sur `||basic:Basic||`, glisse et dépose `||basic:pause (ms) 100||` sous
le bloc `||fwdMotors:set middleServo to 45°||`. Change `||basic:(ms) 100||` en
`||basic:(ms) 500||`

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, 45)
    basic.pause(500)
    }
})
```

## Étape 19

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:set leftServo to 0°||`
sous le bloc `||basic:pause (ms) 500||`. Change `||fwdMotors:leftServo||` en
`||fwdMotors:middleServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.middleServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, 45)
    basic.pause(500)
    fwdMotors.setAngle(fwdBase.middleServo, 0)
    }
})
```

## Étape 20

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:stop motors||`
sous le bloc `||loops:repeat 4 times||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
fwdMotors.setAngle(fwdBase.leftServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(50, -50, 1000)
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, 45)
    basic.pause(500)
    fwdMotors.setAngle(fwdBase.middleServo, 0)
    }
    fwdMotors.drive(0, 0, 0)
})
```

## Étape 21

Clique sur `||fwdMotors:+||` sur le bloc `||fwdMotors:Setup Driving||`
à l'intérieur du bloc `||basic:on start||`. Règle le biais à `||fwdMotors: 0||`.

```blocks
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
fwdMotors.setAngle(fwdBase.leftServo, 0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(100, -100, 1000)
        basic.pause(2000)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(500)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
    }
    fwdMotors.drive(0, 0, 0)
})
```

## Étape 22 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/final-sim-tree.gif)

## Étape 23 @showdialog

Si après avoir `|téléchargé|` ton projet ne fonctionne pas, réfère-toi à
l'image et assure-toi que tes composants sont assignés correctement.
![correct-assignment](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/correct-assignment-tree.png)

## Étape 24 @showdialog

Besoin d'aide pour assigner les bons composants à leurs simulateurs? Regarde la vidéo.
![final-download](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/servo-assign.gif)

## Étape 25 @showdialog

Félicitations, tu as terminé ton projet Reboiser nos forêts avec des semeuses d'arbres automatisées!

## Étape 26 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
