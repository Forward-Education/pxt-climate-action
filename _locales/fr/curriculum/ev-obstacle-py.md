# Véhicules électriques autonomes du futur

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue dans Véhicules électriques autonomes du futur
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-electric-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, utilise le capteur sonar du véhicule électrique pour éviter les obstacles sur son chemin en suivant un mécanisme préétabli d'évitement de collision.

## Étape 3 @showdialog

Allume la carte du kit d'action climatique.
![carte d'extension](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.
![gif de couplage](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge et démarrer les simulateurs.

## Étape 6 @showdialog

Voici à quoi devraient ressembler les simulateurs après un téléchargement réussi. Tu peux voir
les servomoteurs à côté de la pompe.
![gif-telechargement-initial](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/board-no-sensors.png)

## Étape 7 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte d'action climatique et les appareils connectés. Essaie d'allumer et d'éteindre les moteurs à l'aide
du simulateur et observe les changements.
![servo-sans-code](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-sim-tree.gif)

## Étape 8

-   Clique sur `||fwdMotors:Motors||`
-   Fais glisser et dépose le bloc `||fwdMotors:setup driving left motor right motor||`
    sur l'espace de travail.

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Étape 9

Change le `||fwdMotors:right motor to rightServo||`.
Garde le `||fwdMotors: left motor to leftServo||`.
Règle aussi `||fwdMotors:bias to 0||`.

-   `||fwdMotors:setup_driving(left_servo,right_servo,bias)||`
    ![changement-servo-bias](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/setup-driving-py.gif)

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
```

## Étape 10

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:item = 0||`.
Change `||Variables:item = 0||` en `||Variables:IsDrivingEnabled = false||`.

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
```

## Étape 11

Clique sur `||basic:Basic||`, fais glisser et dépose la boucle `||basic:run code forever||`.

```spy
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Étape 12

Clique sur `||Input:Input||`, fais glisser et dépose le bloc `||Input:run code on button pressed||`.
Répète pour obtenir un autre bloc `||Input:run code on button pressed||`.

-   Change `||Input:A||` en `||Input:B||` dans l'énoncé suivant :
-   `||Input:def on_button_pressed_a():||`

-   Change les deux `||Input:As||` en `||Input:Bs||` dans l'énoncé suivant :
-   `||Input:input.on_button_pressed(Button.A, on_button_pressed_a)||`

```spy
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Étape 13

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:item = 0||` à l'intérieur
du bloc `||Input:on button pressed A()||` et aussi à l'intérieur
du bloc `||Input:on button pressed B()||`. Change `||Variables:item||` en `||Variables:IsDrivingEnabled||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = 0
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})

fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Étape 14

Change `||Variables:IsDrivingEnabled = 0||` en `||Variables:IsDrivingEnabled = true||`
à l'intérieur de `||Input:on button pressed A()||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Étape 15

Change `||Variables:IsDrivingEnabled = 0||` en `||Variables:IsDrivingEnabled = false||`
à l'intérieur de `||Input:on button pressed B()||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Étape 16

Efface le mot `||pass||` à l'intérieur de la boucle `||basic:forever||`.
Clique sur `||logic:Logic||`, fais glisser et dépose le bloc `||logic:if else||`
à l'intérieur du bloc `||basic:run code forever||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
    if (true) {
    }
    else {
    }
})
```

## Étape 17

Clique sur `||logic:Logic||`, fais glisser et dépose le bloc `||logic:if else||`
pour l'imbriquer à l'intérieur du bloc `||Logic:if else|` précédent.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (true) {
        if (true) {
    }
    else {
    }
    }
    else {
    }
})
```

## Étape 18

Efface le mot `||pass||` à l'intérieur de la boucle `||basic:forever||`.
Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:item = 0||`
pour remplacer la condition `||Logic:true||` du bloc `||Logic:if else||`.
Change `||Variables:item = 0||` en `||Variables:IsDrivingEnabled||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (true) {
    }
    else {
    }
    }
    else {
    }
})
```

## Étape 19

Efface le mot `||pass||` à l'intérieur de la boucle `||logic:else :||`.
Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:stop motors||`
à l'intérieur de la `||Logic:else condition||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (true) {
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 20

Efface le mot `||Logic:true||`. Clique sur `||fwdSensors:Sensors||`, fais glisser et dépose le bloc `||fwdSensors:this distance is direction threshold m||`
comme condition pour `||logic:If :||`. Change le seuil de distance à `||fwdSensors:0.2||`.
Change aussi `||fwdSensors:OVER to UNDER||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 21

Efface le mot `||pass||` à l'intérieur de la boucle `||logic:if :||`. Clique sur
`||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:stop motors||`
à l'intérieur de la `||Logic:if condition||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 22

Clique sur `||basic:Basic||`, fais glisser et dépose le bloc `||basic:pause (ms) 100||`
sous `||fwdMotors:stop motors||`.
Change `||basic:100||` en `||basic:1000||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 23

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:drive direction at speed||`.
Change `||fwdMotors:Forward||` en `||fwdMotors:Reverse||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 24

Clique sur `||basic:Basic||`, fais glisser et dépose le bloc `||basic:pause (ms) 100||`
sous `||fwdMotors:drive direction at speed||`.
Change `||basic:100||` en `||basic:1000||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
    } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 25

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:turn angle in place||`
sous le bloc `||basic:pause (ms) 1000||`. Change `||fwdMotors:0||` en `||fwdMotors:25||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
        } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 26

Clique sur `||basic:Basic||`, fais glisser et dépose le bloc `||basic:pause (ms) 100||`
sous `||fwdMotors:turn angle in place||`.
Change `||basic:100||` en `||basic:1000||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
            basic.pause(1000)
        } else {
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 27

Efface le mot `||pass||` à l'intérieur de la boucle `||logic:else :||`.
Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:drive direction at speed||`
à l'intérieur de la `||Logic:else condition||`.

```spy
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            fwdMotors.stop()
            basic.pause(1000)
            fwdMotors.drive(fwdEnums.ForwardReverse.Reverse, 50)
            basic.pause(1000)
            fwdMotors.turn(25)
            basic.pause(1000)
        } else {
            fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Étape 28 @showhint

`|Télécharge|` et teste ton code. Clique sur l'icône d'ampoule pour voir comment
le simulateur affiche le fonctionnement des composants.
![sonar-servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-17-ev-obstacle.gif)

## Étape 29 @showhint

`|Télécharge|` et teste ton code. Clique sur l'icône d'ampoule pour voir comment
le simulateur affiche le fonctionnement des composants.
![servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/final-sim-tree.gif)

## Étape 30 @showdialog

Si, après avoir `|téléchargé|`, ton projet ne fonctionne pas, réfère-toi à
l'image et assure-toi que tes composants sont assignés correctement.
![assignation-correcte](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/correct-assignment-tree.png)

## Étape 31 @showdialog

Besoin d'aide pour assigner les bons composants à leurs simulateurs? Regarde la vidéo.
![telechargement-final](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/servo-assign.gif)

## Étape 32 @showdialog

Félicitations d'avoir terminé ton projet Véhicules électriques autonomes du futur!

## Étape 33 @showdialog

Une fois ton projet terminé, retourne à la leçon pour d'autres défis et extensions.
