# Surveillance des glaciers

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue dans Surveillance des glaciers
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/glacier-comb-resized.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, l'appareil mesure continuellement les distances à sa gauche et à sa droite, puis décide de la direction à prendre selon le chemin le moins obstrué.

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

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:set leftServo to 0'||`
à l'intérieur du bloc `||Basic:on start||`. Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    	
    })
```

## Étape 9

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:set leftServo to 0'||`
à l'intérieur du bloc `||Basic:forever||`. Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`.
Change aussi `||fwdMotors:0'||` en `||fwdMotors:90'||`

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
})
```

## Étape 10

Clique sur `||Variables:Variables||`, puis clique sur |Créer une variable| pour créer
ces `||Variables:Variables||`

-   `||Variables:RightDistance||`
-   `||Variables:LeftDistance||`

## Étape 11

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||`
à l'intérieur du bloc `||Basic:forever||`, sous le bloc `||fwdMotors:set middleServo to 90'||`.
Change `||Basic:100||` en `||Basic:2000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    })
```

## Étape 12

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:set RightDistance to 0||`
à l'intérieur du bloc `||Basic:forever||`, sous le bloc `||Basic:pause (ms) 2000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = 0
    })
```

## Étape 13

Clique sur `||fwdSensors:Sensors||`, fais glisser et dépose le bloc `||fwdSensors:sonar1 distance (m)||`
pour remplacer le `||Variables:0||` du bloc `||Variables:set RightDistance to 0||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    })
```

## Étape 14

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||`
sous `||Variables:set RightDistance to||` `||fwdSensors:sonar1 distance (m)||`.
Change `||Basic:100||` en `||Basic:2000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
   })
```

## Étape 15

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:set leftServo to 0'||`
sous le bloc `||Basic:pause (ms) 2000||`. Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||` et
change `||fwdMotors:0'||` en `||fwdMotors:-90'||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    })
```

## Étape 16

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||`
sous le bloc `||fwdMotors:set middleServo to -90'||`. Change `||Basic:100||`
en `||Basic:2000||`

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
   })
```

## Étape 17

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:set LeftDistance to 0||`
sous le bloc `||Basic:pause (ms) 2000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = 0
    })
```

## Étape 18

Clique sur `||fwdSensors:Sensors||`, fais glisser et dépose le bloc `||fwdSensors:sonar1 distance (m)||`
pour remplacer le `||Variables:0||` du bloc `||Variables:set LeftDistance to 0||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    })
```

## Étape 19

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||`
sous `||Variables:set LeftDistance to||` `||fwdSensors:sonar1 distance (m)||`
. Change `||Basic:100||` en `||Basic:2000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
  })
```

## Étape 20

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic:if true then else||`
sous le bloc `||Basic:pause (ms) 2000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (true) {
      	
      } else {
        	
        }
    })
```

## Étape 21

Clique sur `||Logic:Logic||`, fais glisser et dépose le bloc `||Logic:0 < 0||` pour remplacer la condition `||Logic:true||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (0 < 0) {
        	
        } else {
        	
        }
    })
```

## Étape 22

Clique sur `||Variables:Variables||`, fais glisser et dépose le bloc `||Variables:RightDistance||` pour
remplacer le `||Logic:0||` de gauche du bloc `||Logic:Comparison||`. Clique sur `||Variables:Variables||` à nouveau,
fais glisser et dépose le bloc `||Variables:LeftDistance||` pour
remplacer le `||Logic:0||` de droite du bloc `||Logic:Comparison||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        	
        } else {
        	
        }
    })
```

## Étape 23

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:show string " "||`
à l'intérieur de la condition `||Logic:if then||`. Tape `||Basic:Go Left||` dans le bloc `||Basic:show string " "||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        } else {
        	
        }
    })
```

## Étape 24

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:clear screen||` sous
le bloc `||Basic:show string "Go Left"||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
    	
    }
})
```

## Étape 25

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:show string " "||`
à l'intérieur de la condition `||Logic:if then||`. Tape `||Basic:Go Right||` dans le bloc `||Basic:show string " "||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
    }
    })
```

## Étape 26

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:clear screen||` sous
le bloc `||Basic:show string "Go Right"||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
})
```

## Étape 27

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||`
sous le bloc `||Logic:if then else ||`. Change `||Basic:100||` en `||Basic:1000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
    basic.pause(1000)
})
```

## Étape 28

Clique sur `||Basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||` sous
la condition `||Logic:else||`. Change `||Basic:100||` en `||Basic:1000||`.

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 0)
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.middleServo, 90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    fwdMotors.setAngle(fwdBase.middleServo, -90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.distance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
    basic.pause(1000)
})
```

## Étape 29 @showhint

`|Télécharge|` et teste ton code. Clique sur l'icône d'ampoule pour voir comment
le simulateur affiche le fonctionnement des composants.
![sonar-servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-17-ev-obstacle.gif)

## Étape 30 @showhint

`|Télécharge|` et teste ton code. Clique sur l'icône d'ampoule pour voir comment
le simulateur affiche le fonctionnement des composants.
![servos](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/final-sim-tree.gif)

## Étape 31 @showdialog

Si, après avoir `|téléchargé|`, ton projet ne fonctionne pas, réfère-toi à
l'image et assure-toi que tes composants sont assignés correctement.
![assignation-correcte](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/correct-assignment-tree.png)

## Étape 32 @showdialog

Besoin d'aide pour assigner les bons composants à leurs simulateurs? Regarde la vidéo.
![telechargement-final](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/servo-assign.gif)

## Étape 33 @showdialog

Félicitations d'avoir terminé ton projet Surveillance des glaciers!

## Étape 34 @showdialog

Une fois ton projet terminé, retourne à la leçon pour d'autres défis et extensions.
