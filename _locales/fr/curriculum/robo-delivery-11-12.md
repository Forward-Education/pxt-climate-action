# Efficacité en entrepôt grâce aux robots de livraison autonomes et à l'IA

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue à Automatiser la livraison : intégrer l'IA aux véhicules électriques
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-electriccar-400.png)

## Étape 2 @showdialog

Branche ton câble USB au micro:bit.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/connect-microbit.gif)

## Étape 3 @showdialog

Insère-le dans la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-resized.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|` et suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les capteurs connectés. Essaie d'interagir avec ton capteur, le simulateur réagira.
![line](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-5-Line.gif)

## Étape 6

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:Setup Driving||` à l'intérieur de la boucle `||basic:on start||`.

~hint Qu'est-ce que ça a fait?

-   Attribuer des rôles précis aux moteurs gauche et droit pour qu'ils puissent avancer et tourner correctement.
-   Nous enseignons à notre robot quelle roue est la gauche et quelle roue est la droite
    hint~

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Étape 7

Change `||fwdMotors:right motor to rightServo||`.
Garde `||fwdMotors: left motor to leftServo||`.

~hint Qu'est-ce que ça a fait?

-   On ne peut pas envoyer de code au même servomoteur
-   C'est pourquoi nous faisons correspondre la droite et la gauche
    hint~

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
```

## Étape 8

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:if true then||` à l'intérieur de la boucle `||basic:forever||`.

~hint Qu'est-ce que ça a fait?

-   Utiliser le bloc Si/alors signifie que nous donnons un choix au code
-   En le plaçant dans forever, le code ne cessera jamais de vérifier si la condition est remplie
    hint~

````blocks
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
Clique sur ``||Variables:Variables||``. Clique sur ``||Make a Variable||`` pour créer une nouvelle ``||Variables:Variable||``.
Nomme-la ``||Variables:IsDrivingEnabled||``.

~hint Qu'est-ce que ça a fait?
- Nous disons à notre ordinateur de garder une information en mémoire
- Celle-ci demande à l'ordinateur de savoir si nous sommes en train de conduire ou non
hint~

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

## Étape 10

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:IsDrivingEnabled||`
pour remplacer la condition `||logic:true||` du bloc `||logic:if true then||` à l'intérieur de la boucle `||basic:forever||`.

~hint Qu'est-ce que ça a fait?

-   Nous remplaçons une partie de la condition vraie du Si alors par notre variable
-   Ainsi, la condition vérifiera si tu conduis ou non
    hint~

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (IsDrivingEnabled) {
            	
            }
    })
```

## Étape 11

Clique sur `||Input:Input||`, glisse et dépose le bloc `||Input:on button A pressed||`
dans l'espace de travail.

~hint Qu'est-ce que ça a fait?

-   Ce bouton signifie qu'une action sera déclenchée lorsque nous appuierons sur le bouton A
-   Le bouton A se trouve sur le micro:bit
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
	
})

fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (IsDrivingEnabled) {
            	
            }
    })
```

## Étape 12

Fais un clic droit sur le bloc `||Input:on button A pressed||` et duplique-le.
Change `||Input:A||` en `||Input:B||`.

~hint Qu'est-ce que ça a fait?

-   Ce bouton signifie qu'une action sera déclenchée lorsque nous appuierons sur le bouton B
-   Le bouton B se trouve sur le micro:bit
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (IsDrivingEnabled) {
            	
            }
    })
```

## Étape 13

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:IsDrivingEnabled = 0||` à l'intérieur de `||Input:on button A pressed||`

~hint Qu'est-ce que ça a fait?

-   Nous disons au code quand arrêter de conduire
-   Nous voulons que le code arrête de conduire seulement lorsque nous appuyons sur A
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = 0
})
input.onButtonPressed(Button.B, function () {
	
})
let IsDrivingEnabled = 0
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
    	
    }
})
```

## Étape 14

Clique sur `||Logic:Logic||`, glisse et dépose `||logic:false|` pour remplacer 0 dans `||Variables:IsDrivingEnabled = 0||` à l'intérieur de `||Input:on button A pressed||`

~hint Pourquoi avons-nous fait cela

-   Nous disons au code quand arrêter de conduire
-   Nous voulons que le code arrête de conduire seulement lorsque nous appuyons sur A, c'est comme dire non à la conduite
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
})
input.onButtonPressed(Button.B, function () {
	
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
    	
    }
})
```

## Étape 15

Clique sur `||Logic:Logic||`, glisse et dépose `||logic:true|` pour remplacer 0 dans `||Variables:IsDrivingEnabled = 0||` à l'intérieur de `||Input:on button B pressed||`

~hint Pourquoi avons-nous fait cela

-   Nous disons au code de vérifier s'il faut conduire
-   Cela se produira lorsque nous appuyons sur le bouton B
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        	
        } else {
        	
        }
    }
})
```

## Étape 16

Clique sur `||fwdMotors:Motors||`, glisse et dépose `||fwdMotors:Stop||` sous `||Variables:IsDrivingEnabled = false||` à l'intérieur de `||Input:on button B pressed||`

~hint Qu'est-ce que ça a fait?

-   Nous disons au code quand commencer à conduire
-   Nous voulons que le code commence à conduire seulement lorsque nous appuyons sur B
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
    	
    }
})
```

## Étape 17

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:if true then else||` à l'intérieur du premier bloc `||logic:if true then||` à l'intérieur de la boucle `||basic:forever||`.

~hint Qu'est-ce que ça a fait?

-   Nous ajoutons une autre condition
-   Cela donne au code un choix entre deux actions différentes
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})


let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (true) {
        	
        } else {
        	
        }
    }
})
```

## Étape 18

Clique sur `||fwdSensors:Sensors||`, glisse et dépose `||fwdSensors:sonar1 distance is under 0 m||` pour remplacer la condition `||logic:true||` de `||logic:true||` à l'intérieur du bloc `||logic:if true then||`

~hint Qu'est-ce que ça a fait?

-   Nous utilisons le capteur sonar pour vérifier la distance par rapport aux autres objets
-   Nous demandons à l'ordinateur de vérifier la distance sonar et de faire un choix selon l'information
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        	
        } else {
        	
        }
    }
})
```

## Étape 19

Clique sur `||music:Music||`, glisse et dépose le bloc `||Music:music.ringTone||` à l'intérieur de la condition `||logic:if||` `||fwdSensors:sonar1 distance is under 0 m||`
`||logic:then||`.

~hint Qu'est-ce que ça a fait?

-   Nous avons ajouté un son à l'intérieur de la condition else.
-   Si quelque chose est plus près qu'un mètre, un son jouera
    hint~

```block
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})

let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(494)
        } else {
        	
        }
    }
})
```

## Étape 20

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:pause (ms) 100||` sous le bloc `||Music:music.ringTone||` à l'intérieur de la condition `||logic:if||` `||fwdSensors:sonar1 distance is under 0 m||` `||logic:then||`.

~hint Qu'est-ce que ça a fait?

-   Nous ajoutons un bouton de pause
-   Cela signifie que le code attendra après la musique
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
        } else {
        	
        }
    }
})
```

## Étape 21

Clique sur `||music:Music||`, glisse et dépose le bloc `||Music:stopall||` sous le bloc `||basic:pause (ms) 100||` à l'intérieur de la condition `||logic:if||` `||fwdSensors:sonar1 distance is under 0 m||` `||logic:then||`.

~hint Qu'est-ce que ça a fait?

-   Nous avons dit à la musique de s'arrêter
-   Avec ce bloc, le son jouera, fera une pause, puis s'arrêtera
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
        	
        }
    }
})
```

## Étape 22

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:if true then||` à l'intérieur du bloc dans `||logic:if||` `||fwdSensors:sonar1 distance is under 0 m||`
`||logic:else||`

~hint Qu'est-ce que ça a fait?

-   Nous créons un autre choix que le code doit vérifier
-   Si quelque chose n'est pas trop proche, un autre choix est fait
-   En le plaçant dans le bloc forever, on s'assure que cela ne cesse jamais de se produire
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})

let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(494)
            fwdMotors.drive(-20, 20, 1000)
        } else {
            if (true) {
            	
            }
        }
    }
})
```

## Étape 23

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:if true then||` sous le 1er bloc `||logic:if true then||`

~hint Pourquoi avons-nous fait cela?

-   Utiliser le bloc Si/alors signifie que nous donnons un choix au code
-   Nous ajoutons simplement un autre choix
-   En le plaçant dans forever, cela ne cessera jamais de se produire
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (true) {
            	
            }
        }
    }
})
```

## Étape 24

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:if true then||` sous le 2e bloc `||logic:if true then||`. Remarque : trois blocs `||logic:if true then||` sont utilisés.

~hint Qu'est-ce que ça a fait?

-   Utiliser le bloc Si/alors signifie que nous donnons un choix au code
-   Nous ajoutons simplement un autre choix
-   En le plaçant dans forever, cela ne cessera jamais de se produire
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (true) {
            	
            }
            if (true) {
            	
            }
            if (true) {
            	
            }
        }
    }
})
```

## Étape 25

Clique sur `||fwdSensors:Sensors||`, glisse et dépose `||fwdSensors: line1 state is •||` pour remplacer la condition `||logic:true||` du 1er bloc `||logic:if true then||`.

~hint Qu'est-ce que ça a fait?

-   Nous devons mettre à jour l'énoncé logique avec de l'information réelle
-   Maintenant, nous disons à notre code d'utiliser le capteur de ligne pour se déplacer
-   En le plaçant dans forever, cela ne cessera jamais de vérifier
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
            if (true) {
            	
            }
            if (true) {
            	
            }
        }
    }
})
```

## Étape 26

Clique sur `||fwdSensors:Sensors||`, glisse et dépose `||fwdSensors: line2 state is o||` pour remplacer la condition `||logic:true||` du 2e bloc `||logic:if true then||`. _Remarque : utilise le menu déroulant pour changer le numéro de ligne._

~hint Pourquoi avons-nous fait cela?

-   Nous devons mettre à jour l'énoncé logique avec de l'information réelle
-   Maintenant, nous demandons au code de vérifier s'il suit la ligne
-   En le plaçant dans forever, cela ne cessera jamais de vérifier
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
            	
            }
            if (true) {
            	
            }
        }
    }
})
```

## Étape 27

Clique sur `||fwdSensors:Sensors||`, glisse et dépose `||fwdSensors: line3 state is •||` pour remplacer la condition `||logic:true||` du 3e bloc `||logic:if true then||`. _Remarque : utilise le menu déroulant pour changer le numéro de ligne._

~hint Pourquoi avons-nous fait cela?

-   Nous devons mettre à jour l'énoncé logique avec de l'information réelle
-   Maintenant, nous demandons au code de vérifier s'il ne suit pas la ligne
-   En le plaçant dans forever, cela ne cessera jamais de vérifier
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
            	
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
        }
    }
})
```

## Étape 28

Clique sur `||fwdMotors: Motors||`, glisse et dépose le bloc `||fwdMotors: Turn 0 in place||` à l'intérieur de la condition du 1er `||logic: if||`
`||fwdSensors:line1 state is •||` `||logic:then||`.

~hint Pourquoi avons-nous fait cela?

-   Nous disons maintenant au code quoi faire lorsqu'il est sur la ligne
-   Nous disons au code de tourner sur place pour rester sur la ligne
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})

let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(494)
            fwdMotors.drive(-20, 20, 1000)
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                fwdMotors.drive(0, 0, 0)
            }
            if (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.Off)) {
            	
            }
            if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
        }
    }
})
```

## Étape 29

Change `||fwdMotors:Turn 0||` en `||fwdMotors:5||`

~hint Pourquoi avons-nous fait cela?

-   Nous disons maintenant au code de combien tourner
-   À l'intérieur du bloc forever, le code vérifiera toujours si la condition est remplie
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
            	
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
        }
    }
})
```

## Étape 30

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:Drive forward 50||` à l'intérieur de la condition du 2e
`||logic:if||` `||fwdSensors:line2 state is o||` `||logic:then||`.
Change `||fwdMotors:Drive forward 50||` en `||fwdMotors:20||`

~hint Pourquoi avons-nous fait cela?

-   Nous disons maintenant au code d'avancer si sur la ligne
-   Nous avons changé la vitesse de 50 à 20
-   Tu peux la rendre plus rapide ou plus lente
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                fwdMotors.drive(20, -20, 1000)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
            	
            }
        }
    }
})
```

## Étape 31

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors: Turn 0 in place||` à l'intérieur de la condition du 3e
`||logic:if||` `||fwdSensors:line3 state is •||` `||logic:then||`.
Change `||fwdMotors:Turn 0||` en `||fwdMotors:-5||`.

~hint Pourquoi avons-nous fait cela?

-   Nous disons maintenant au code de tourner à nouveau pour rester sur la ligne
-   Nous tournerons dans la direction opposée

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                fwdMotors.drive(20, -20, 1000)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(-5) degrees in place
                fwdMotors.drive(-50, -50, 1000)
            }
        }
    }
})
```

## Étape 32

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:pause (ms) 100||` sous le bloc `||fwdMotors:Turn 5 in place||`.

~hint Pourquoi avons-nous fait cela?

-   Utiliser le bloc de pause dit à notre code d'attendre
-   Cela signifie que le code attendra avant de vérifier les conditions à nouveau
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
                basic.pause(100)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                fwdMotors.drive(20, -20, 1000)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(-5) degrees in place
                fwdMotors.drive(-50, -50, 1000)
            }
        }
    }
})
```

## Étape 33

Clique sur `||basic:basic||`, glisse et dépose le bloc `||basic:pause (ms) 100||`
sous le bloc `||fwdMotors:Drive Forward at 20||`.

~hint Qu'est-ce que ça a fait?

-   Utiliser le bloc de pause dit à notre code d'attendre
-   Cela signifie que le code attendra avant de vérifier les conditions à nouveau
    Hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
                basic.pause(100)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                fwdMotors.drive(20, -20, 1000)
                basic.pause(100)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(-5) degrees in place
                fwdMotors.drive(-50, -50, 1000)
            }
        }
    }
})
```

## Étape 34

Clique sur `||basic:basic||`, glisse et dépose le bloc `||basic:pause (ms) 100||`
sous le bloc `||fwdMotors:Turn -5 in place||`.

~hint Qu'est-ce que ça a fait?

-   Utiliser le bloc de pause dit à notre code d'attendre
-   Cela signifie que le code attendra avant de vérifier les conditions à nouveau
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
                basic.pause(100)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                fwdMotors.drive(20, -20, 1000)
                basic.pause(100)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(-5) degrees in place
                fwdMotors.drive(-50, -50, 1000)
                basic.pause(100)
            }
        }
    }
})
```

## Étape 35

Clique sur `||fwdMotors:+||` sur le bloc `||fwdMotors:Setup Driving||`
à l'intérieur du bloc `||basic:on start||`. Règle le biais à `||fwdMotors: 0||`.
Change `||basic:pause (ms) 100||` en `||basic:500||` pour tous
les blocs `||basic:pause||`.

~hint Qu'est-ce que ça a fait?

-   Nous demandons maintenant au code d'attendre plus longtemps
-   Nous faisons la même chose pour tous les blocs de pause

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.drive(0, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(5) degrees in place
                fwdMotors.drive(50, 50, 1000)
                basic.pause(500)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
                fwdMotors.drive(20, -20, 1000)
                basic.pause(500)
            }
            if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
                // TODO: calibrate duration -- was turn(-5) degrees in place
                fwdMotors.drive(-50, -50, 1000)
                basic.pause(500)
            }
        }
    }
})
```

## Étape 36 @showhint

`|Télécharger|` et teste ton code. Le simulateur montre comment il devrait fonctionner.
Félicitations, tu as terminé ton robot de livraison automatisé! - Retourne à la leçon pour découvrir d'autres activités et prolongements.
![line-servos](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-16-ev-line.gif)
