# Mission sur la Lune - Évitement par sonar

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue dans Mission sur la Lune - Évitement par sonar
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-electriccar-400.png)

## Étape 2 @showdialog

Branche ton câble USB au micro:bit.
![plaque de connexion](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/connect-microbit.gif)

## Étape 3 @showdialog

Insère-le dans la carte de la trousse Action climatique.
![plaque de connexion](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-resized.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|` et suis les étapes pour coupler ton micro:bit.
![gif de couplage](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5

Clique sur `||fwdMotors:Motors||`, puis fais glisser le bloc `||fwdMotors:Setup Driving||` à l'intérieur de la boucle `||basic:on start||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.leftServo,
)
```

## Étape 6

Change `||fwdMotors:right motor to rightServo||`.
Garde `||fwdMotors: left motor to leftServo||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
```

## Étape 7

Clique sur `||logic:Logic||`, puis fais glisser le bloc `||logic:if else||` à l'intérieur de la boucle `||basic:forever||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (true) {}
    else{}
        })
```

## Étape 8

Clique sur `||fwdSensors:Sensors||`, puis fais glisser le bloc `||fwdSensors:sonar1 distance is over 0 m||`
pour remplacer la condition `||logic:true||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0, fwdEnums.OverUnder.Over)) {
    	
    } else {
    	
    }
})
```

## Étape 9

Change `||fwdSensors:sonar1 distance is over to under||`.
Change `||fwdSensors:0||` à `||fwdSensors:0.2||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        	
        }
    else {
        	
        }
})
```

## Étape 10

Clique sur `||fwdMotors:Motors||`, puis fais glisser le bloc `||fwdMotors:stop motors||`
à l'intérieur de la condition `||logic:true||` du bloc `||logic:if else||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
            }
        else {
        	
        }
})
```

## Étape 11

Clique sur `||basic:Basic||`, puis fais glisser le bloc `||basic:pause (ms) 100||` sous
le bloc `||fwdMotors:stop motors||`. Change `||basic:100||` à `||basic:1000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        }
    else {
        	
        }
})
```

## Étape 12

Clique sur `||fwdMotors:Motors||`, puis fais glisser le bloc `||fwdMotors:drive forward at 50||`
sous le bloc `||basic:pause (ms) 1000||`. Change `||fwdMotors:forward||`
à `||fwdMotors:reverse||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        fwdMotors.drive(-50, 50, 1000)
        }
    else {
        	
        }
})
```

## Étape 13

Clique sur `||basic:Basic||`, puis fais glisser le bloc `||basic:pause (ms) 100||` sous
le bloc `||fwdMotors:stop motors||`. Change `||basic:100||` à `||basic:1000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        fwdMotors.drive(-50, 50, 1000)
        basic.pause(1000)
    }
    else {
            	
            }
})
```

## Étape 14

Clique sur `||fwdMotors:Motors||`, puis fais glisser le bloc `||fwdMotors: Turn 0 in place||`
sous le bloc `||basic:pause (ms) 1000||`. Change `||fwdMotors:0||`
à `||fwdMotors:25||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        fwdMotors.drive(-50, 50, 1000)
        basic.pause(1000)
        // TODO: calibrate duration -- was turn(25) degrees in place
        fwdMotors.drive(50, 50, 1000)
    }
    else {
    	
    }
})
```

## Étape 15

Clique sur `||basic:Basic||`, puis fais glisser le bloc `||basic:pause (ms) 100||` sous
le bloc `||fwdMotors:stop motors||`. Change `||basic:100||` à `||basic:1000||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        fwdMotors.drive(-50, 50, 1000)
        basic.pause(1000)
        // TODO: calibrate duration -- was turn(25) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(1000)
    } else {
        	
        }
})
```

## Étape 16

Clique sur `||fwdMotors:Motors||`, puis fais glisser le bloc `||fwdMotors:drive forward at 50||`
à l'intérieur de la condition `||logic:else||`.

```blocks
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo,
)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        fwdMotors.drive(-50, 50, 1000)
        basic.pause(1000)
        // TODO: calibrate duration -- was turn(25) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(1000)
    } else {
        fwdMotors.drive(50, -50, 1000)
    }
})
```

## Étape 17

Clique sur `||fwdMotors:+||` sur le bloc `||fwdMotors:Setup Driving||`
à l'intérieur du bloc `||basic:on start||`. Règle le biais à `||fwdMotors: 0||`.

```blocks
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdMotors.drive(0, 0, 0)
        basic.pause(1000)
        fwdMotors.drive(-50, 50, 1000)
        basic.pause(1000)
        // TODO: calibrate duration -- was turn(25) degrees in place
        fwdMotors.drive(50, 50, 1000)
        basic.pause(1000)
    } else {
        fwdMotors.drive(50, -50, 1000)
    }
})
```

## Étape 18

`|Télécharger|` et teste ton code.
Félicitations pour avoir terminé ton prototype de Mission sur la Lune - Évitement par sonar! Retourne à la leçon pour plus d'activités et d'extensions.
