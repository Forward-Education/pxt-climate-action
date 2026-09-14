# Mission sur la Lune - Suivi de ligne

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue dans Mission sur la Lune - Suivi de ligne
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-electriccar-400.png)

## Étape 2 @showdialog

Branche ton câble USB dans le micro:bit.
![plaque de connexion](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/connect-microbit.gif)

## Étape 3 @showdialog

Insère-le dans la plaque de la trousse Action Climat.
![plaque de connexion](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-resized.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|` et suis les étapes pour coupler ton micro:bit.
![gif de couplage](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Regarde sous le simulateur @boardname@ pour voir la plaque Action Climat et les capteurs connectés. Essaie d'interagir avec ton capteur et le simulateur réagira.
![ligne](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-5-Line.gif)

## Étape 6

Clique sur `||fwdMotors:Motors||`, puis glisse et dépose le bloc `||fwdMotors:Setup Driving||` à l'intérieur de la boucle `||basic:on start||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Étape 7

Change le `||fwdMotors:right motor to rightServo||`.
Garde le `||fwdMotors: left motor to leftServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
```

## Étape 8

Clique sur `||logic:Logic||`, puis glisse et dépose le bloc `||logic:if true then||` à l'intérieur de la boucle `||basic:forever||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (true) {
            	
            }
    })
```

## Étape 9

Clique sur `||logic:Logic||`, puis glisse et dépose le bloc `||logic:if true then||` sous le 1er bloc `||logic:if true then||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (true) {
            	
            }
    if (true) {
            	
            }
})
```

## Étape 10

Clique sur `||logic:Logic||`, puis glisse et dépose le bloc `||logic:if true then||` sous le 2e bloc `||logic:if true then||`. _Remarque : trois blocs `||logic:if true then||` sont utilisés._

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (true) {
            	
            }
    if (true) {
            	
            }
    if (true) {
            	
            }
})
```

## Étape 11

Clique sur `||fwdSensors:Sensors||`, puis glisse et dépose `||fwdSensors: line1 state is •||` pour remplacer la condition `||logic:true||` du 1er bloc `||logic:if true then||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
    if (true) {
        	
        }
    if (true) {
        	
        }
})
```

## Étape 12

Clique sur `||fwdSensors:Sensors||`, puis glisse et dépose `||fwdSensors: line2 state is o||` pour remplacer la condition `||logic:true||` du 2e bloc `||logic:if true then||`. _Remarque : utilise le menu déroulant pour changer le numéro de ligne._

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        	
        }
    if (true) {
        	
        }
})
```

## Étape 13

Clique sur `||fwdSensors:Sensors||`, puis glisse et dépose `||fwdSensors: line3 state is •||` pour remplacer la condition `||logic:true||` du 3e bloc `||logic:if true then||`. _Remarque : utilise le menu déroulant pour changer le numéro de ligne._

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        	
        }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
})
```

## Étape 14

Clique sur `||fwdMotors: Motors||`, puis glisse et dépose le bloc `||fwdMotors: Turn 0 in place||` à l'intérieur du 1er
`||fwdSensors:line1 state is •||` `||logic:then||` du bloc `||logic: if||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        fwdMotors.drive(0, 0, 0)
        }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
            	
            }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
})
```

## Étape 15

Change `||fwdMotors:Turn 0||` en `||fwdMotors:5||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
        }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
            	
            }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
})
```

## Étape 16

Clique sur `||fwdMotors:Motors||`, puis glisse et dépose le bloc `||fwdMotors:Drive forward 50||` à l'intérieur du 2e
`||fwdSensors:line2 state is o||` `||logic:then||` du bloc `||logic:if||`.
Change `||fwdMotors:Drive forward 50||` en `||fwdMotors:20||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
            }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        fwdMotors.drive(20, -20, 1000)
        }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        	
        }
})
```

## Étape 17

Clique sur `||fwdMotors:Motors||`, puis glisse et dépose le bloc `||fwdMotors: Turn 0 in place||` à l'intérieur du 3e
`||fwdSensors:line3 state is •||` `||logic:then||` du bloc `||logic:if||`.
Change `||fwdMotors:Turn 0||` en `||fwdMotors:-5||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
            }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        fwdMotors.drive(20, -20, 1000)
        }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(-5) degrees in place
        fwdMotors.drive(-50, -50, 1000)
        }
})
```

## Étape 18

Clique sur `||basic:Basic||`, puis glisse et dépose le bloc `||basic:pause (ms) 100||` sous le bloc `||fwdMotors:Turn 5 in place||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(100)
    }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        fwdMotors.drive(20, -20, 1000)
        }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(-5) degrees in place
        fwdMotors.drive(-50, -50, 1000)
        }
})
```

## Étape 19

Clique sur `||basic:basic||`, puis glisse et dépose le bloc `||basic:pause (ms) 100||`
sous le bloc `||fwdMotors:Drive Forward at 20||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(100)
    }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        fwdMotors.drive(20, -20, 1000)
        basic.pause(100)
    }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(-5) degrees in place
        fwdMotors.drive(-50, -50, 1000)
    }
})
```

## Étape 20

Clique sur `||basic:basic||`, puis glisse et dépose le bloc `||basic:pause (ms) 100||`
sous le bloc `||fwdMotors:Turn -5 in place||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(100)
    }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        fwdMotors.drive(20, -20, 1000)
        basic.pause(100)
    }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(-5) degrees in place
        fwdMotors.drive(-50, -50, 1000)
        basic.pause(100)
    }
})
```

## Étape 21

Clique sur `||fwdMotors:+||` sur le bloc `||fwdMotors:Setup Driving||`
à l'intérieur du bloc `||basic:on start||`. Règle le biais à `||fwdMotors: 0||`.
Change `||basic:pause (ms) 100||` en `||basic:500||` pour tous
les blocs `||basic:pause||`.

```blocks
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(5) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(500)
    }
    if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
        fwdMotors.drive(20, -20, 1000)
        basic.pause(500)
    }
    if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
        // TODO: calibrate duration -- was turn(-5) degrees in place
        fwdMotors.drive(-50, -50, 1000)
        basic.pause(500)
    }
})
```

## Étape 22 @showhint

`|Télécharge|` et teste ton code. Le simulateur montre comment il devrait fonctionner.
Félicitations pour avoir terminé ton prototype Mission sur la Lune - Suivi de ligne! - Retourne à la leçon pour d'autres activités et extensions.
![line-servos](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-16-ev-line.gif)
