# Suivi des feux de forêt avec véhicules autonomes

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue dans Suivi des feux de forêt avec véhicules autonomes
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/wildfire-iso-resized.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, le véhicule se déplacera le long d'un périmètre en
surveillant la lumière et la température. Appuie sur les boutons A et B pour démarrer et arrêter le véhicule.

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

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:setup driving||`
à l'intérieur du bloc `||Basic:on start||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Étape 9

Change le `||fwdMotors:right motor to rightServo||`.
Garde le `||fwdMotors: left motor to leftServo||`.

```blocks
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
```

## Étape 10

Clique sur `||Variables:Variables||`, puis clique sur |Créer une variable| pour créer
ces `||Variables:Variables||`

-   `||Variables:IsDrivingEnabled||`
-   `||Variables:lightThreshold||`
-   `||Variables:temperatureThreshold||`

## Étape 11

Clique sur `||Input:Input||`, fais glisser et dépose le bloc `||Input:on button A pressed||`.
Clique-droit et duplique-le pour obtenir un autre bloc `||Input:on button A pressed||`.
Change `||Input:A||` en `||Input:B||` pour le bloc grisé `||Input:on button A pressed||`.

```blocks
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
	
})
```

## Étape 12

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:set IsDrivingEnabled to 0||`
à l'intérieur du bloc `||Input:on button A pressed||` et aussi à l'intérieur
du bloc `||Input:on button B pressed||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = 0
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})

fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
	
})
```

## Étape 13

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic:true||` pour remplacer
le `||Variables:0||` du bloc `||Variables:set IsDrivingEnabled to 0||`
à l'intérieur du bloc `||Input:on button A pressed||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
	
})
```

## Étape 14

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic:false||` pour remplacer
le `||Variables:0||` du bloc `||Variables:set IsDrivingEnabled to 0||`
à l'intérieur du bloc `||Input:on button B pressed||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
IsDrivingEnabled = false
basic.forever(function () {
	
})
```

## Étape 15

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic:if true then else||`
à l'intérieur du bloc `||basic:forever||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (true) {
    	
    }
    else {
    	
    }
})
```

## Étape 16

Clique sur `||Loops:Loops||`, fais glisser et dépose le bloc `||Loops:repeat 4 times||`
pour l'imbriquer à l'intérieur du bloc `||Logic:if true then||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (true) {
        for (let index = 0; index < 4; index++) {
    	
    }
    } else {
    	
    }
})
```

## Étape 17

Clique sur `||logic:Logic||`, fais glisser et dépose le bloc `||logic:if true then else||`
pour l'imbriquer à l'intérieur du bloc `||Loops:repeat 4 times||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (true) {
    for (let index = 0; index < 4; index++){
        if (true) {
    	
    }
    else {
    	
    }
    } }
    else {
    	
    }
})
```

## Étape 18

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:IsDrivingEnabled||`
pour remplacer la condition `||Logic:true||` du bloc `||Logic:if true then||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
    for (let index = 0; index < 4; index++){
        if (true) {
    	
    }
    else {
    	
    }
    }
    }else {
    	
    }
})
```

## Étape 19

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:stop motors||`
à l'intérieur de la `||Logic:else condition||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
    for (let index = 0; index < 4; index++){
        if (true) {
    	
    }
    else {
    	
    }
    }
    }else {
    fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 20

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:drive forward at 50||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
           if (true) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 21

Clique sur `||basic:Basic||`, fais glisser et dépose le bloc `||basic:pause (ms) 100||`
sous `||fwdMotors:drive forward at 50||`.
Change `||basic:100||` en `||basic:5000||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
           if (true) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 22

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:turn 0' in place||`
sous le bloc `||basic:pause (ms) 5000||`. Change `||fwdMotors:0||` en `||fwdMotors:25||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (true) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 23

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic: or ||`
pour remplacer la condition `||Logic:true||` sous
du bloc `||Logic:if true then||`, sous le bloc `||fwdMotors:turn 25' in place||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (0 || 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 24

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic: or ||`
pour remplacer le côté gauche de la condition du bloc `||Logic: or ||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (0 || 0 || 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 25

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic: 0 < 0||`
pour remplacer le côté gauche de la condition du bloc `||Logic: or ||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (0 < 0  || 0 || 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 26

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic: 0 < 0||`
pour remplacer la condition du bloc `||Logic: or ||` du milieu.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (0 < 0  || 0 < 0 || 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 27

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic: 0 < 0||`
pour remplacer la condition du bloc `||Logic: or ||` de droite.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (0 < 0  || 0 < 0 || 0 < 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 28

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:lightThreshold||`
pour remplacer le `||Logic:0||` de gauche de la condition `||Logic:Comparison||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (lightThreshold < 0  || 0 < 0 || 0 < 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 29

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:temperatureThreshold||`
pour remplacer le `||Logic:0||` de gauche de la condition `||Logic:Comparison||` du milieu.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (lightThreshold < 0  || temperatureThreshold < 0 || 0 < 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 30

Clique sur `||Input:Input||`, fais glisser et dépose le bloc `||Input:light level||`
pour remplacer le `||Logic:0||` de droite de la condition `||Logic:Comparison||` avec
le bloc `||Variables:lightThreshold||` à gauche.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (lightThreshold < input.lightLevel()  || temperatureThreshold < 0) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 31

Clique sur `||Input:Input||`, fais glisser et dépose le bloc `||Input:temperature ('C)||`
pour remplacer le `||Logic:0||` de droite de la condition `||Logic:Comparison||` avec
le bloc `||Variables:temperatureThreshold||` au milieu.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (lightThreshold < input.lightLevel()  || temperatureThreshold < input.temperature()) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 32

Clique sur `||Variables:Variables||`, fais glisser et dépose les blocs `||Variables:set temperatureThreshold to 0||` et
`||Variables:set lightThreshold to 0||` à l'intérieur
du bloc `||Basic:on start||`, sous le bloc `||fwdMotors:setup driving||`.
Valeurs de seuil recommandées :

-   Température = 25
-   Lumière = 100
-   _Remarque : Ajuste les valeurs de seuil selon ton environnement._

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
let lightThreshold = 100
let temperatureThreshold = 25
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
           if (lightThreshold < input.lightLevel()  || temperatureThreshold < input.temperature()) {
            	
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 33

Clique sur `||Loops:Loops||`, fais glisser et dépose le bloc `||Loops:repeat 4 times||`
pour l'imbriquer à l'intérieur du bloc `||Logic:if true then||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    	
                    }
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 34

Clique sur `||Music:Music||`, fais glisser et dépose deux blocs `||Music:play tone Middle C for 1 beat||`
pour les imbriquer à l'intérieur du bloc `||Loops:repeat 4 times||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
            	
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 35

Clique sur `||Music:Music||`, fais glisser et dépose le bloc `||Music:stop all sounds||`
pour l'imbriquer à l'intérieur de la condition `||Logic:else||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
                music.stopAllSounds()
            }
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 36

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||` sous
la condition `||Logic:else||`. Change `||Basic:100||` en `||Basic:1000||`.

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(50, -50, 1000)
            basic.pause(5000)
            // TODO: calibrate duration -- was turn(25) degrees in place
            fwdMotors.drive(50, 50, 1000)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
                music.stopAllSounds()
            }
            basic.pause(1000)
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape 37 @showhint

`|Télécharge|` et teste ton code. Clique sur l'icône d'ampoule pour voir comment
le simulateur affiche le fonctionnement des composants.
![sonar-servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-17-ev-obstacle.gif)

## Étape 38 @showhint

`|Télécharge|` et teste ton code. Clique sur l'icône d'ampoule pour voir comment
le simulateur affiche le fonctionnement des composants.
![servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/final-sim-tree.gif)

## Étape 39 @showdialog

Si, après avoir `|téléchargé|`, ton projet ne fonctionne pas, réfère-toi à
l'image et assure-toi que tes composants sont assignés correctement.
![assignation-correcte](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/correct-assignment-tree.png)

## Étape 40 @showdialog

Besoin d'aide pour assigner les bons composants à leurs simulateurs? Regarde la vidéo.
![telechargement-final](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/servo-assign.gif)

## Étape 41 @showdialog

Félicitations d'avoir terminé ton projet Suivi des feux de forêt avec véhicules autonomes!

## Étape 42 @showdialog

Une fois ton projet terminé, retourne à la leçon pour d'autres défis et extensions.
