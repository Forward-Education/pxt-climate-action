# Agriculture avancée

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de codage Agriculture avancée
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-advagri-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de codage, tu vas construire un indicateur de niveau d'humidité à l'aide des pixels de l'anneau de DEL.

## Étape 3 @showdialog

Allume la carte de la trousse d'action climatique.
![carte de connexion](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.
![gif de couplage](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vide et démarrer les simulateurs.

## Étape 6 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte d'action climatique et les capteurs connectés. Essaie de tenir le capteur d'humidité ou de le tremper dans un verre d'eau. Observe comment les simulateurs virtuels réagissent.
![humidité](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-4-moisture.gif)

## Étape 7

Clique sur `||logic: Logic||`, puis fais glisser et dépose `||logic:If then Else||`
à l'intérieur du bloc `||Basic:forever||`.

```blocks
basic.forever(function () {
    if (true) {
          	
          }
    else {
        	
        }
        })
```

## Étape 8

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose `||fwdSensors:is soilMoisture1 moisture level over 5%||`
pour remplacer la condition `||logic:true||` du bloc `||logic:if then else||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
          	
          }
    else {
        	
        }
        })
```

## Étape 9

Clique sur `||basic:basic||`, puis fais glisser et dépose le bloc `||basic:show icon||` à l'intérieur de la condition `||logic:if then||`.
Sélectionne l'icône `||basic: :)||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        	
        }
        })
```

## Étape 10

Clique sur `||basic:basic||`, puis fais glisser et dépose le bloc `||basic:show icon||` à l'intérieur de la condition `||logic:else||`.
Sélectionne l'icône `||basic: :(||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        basic.showIcon(IconNames.Sad)}
        })
```

## Étape 11

Clique sur `||fwdMotors:Motors||`, puis fais glisser et dépose `||fwdMotors:run pump for 500||` sous
l'icône `||basic: :(||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(100)
        }
})
```

## Étape 12

Clique sur `||basic:basic||`, puis fais glisser et dépose le bloc `||basic:pause (ms) 100||` sous le bloc `||fwdMotors:run pump for 500||`.
Change le `||basic:100||` à `||basic:500||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```

## Étape 13

Clique sur `||basic:basic||`, puis fais glisser et dépose `||basic:clear screen||`
sous le bloc `||basic:pause (ms) 500||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```

## Étape 14

Clique sur `||Logic:Logic||`, puis fais glisser et dépose `||Logic:If true then||` sous
le bloc `||Logic: If then else||`. Répète cette étape `||Logic:4||` fois. _Remarque : tu devrais avoir 4 blocs `||Logic:If then||`._

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(true){
    	
    }
    if(true){
    	
    }
    if (true){
    	
    }
    if (true){
    	
    }
})
```

## Étape 15

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:soilMoisture1 level is over||`
pour remplacer la condition `||Logic:true||` des `||Logic:4 if true then||` blocs.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
})
```

## Étape 16

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous le bloc `||fwdSensors:soilMoisture1 level is over||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
     fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    	
    }
})
```

## Étape 17

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set ledRing 0 to||`
sous les `||fwdSensors:3 soilMoisture1 level is over||` blocs restants.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
})
```

## Étape 18

Fais un clic droit sur le bloc `||fwdSensors:set ledRing 0||` et duplique-le. Chaque
bloc `||Logic:If||` `||fwdSensors:soilMoisture1 is over||` `||Logic:then||`
devrait avoir `||fwdSensors:2 set ledRing 0||` blocs à l'intérieur du bloc `||Logic:If condition||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
    if(fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)){
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
})
```

## Étape 19

Change les valeurs de seuil du bloc `||fwdSensors:soilMoisture1 level over||`

-   `||fwdSensors:soilMositure1 level over 80||`
-   `||fwdSensors:soilMositure1 level over 60||`
-   `||fwdSensors:soilMositure1 level over 40||`
-   `||fwdSensors:soilMositure1 level over 20||`

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if (fwdSensors.moisture1.isPastThreshold(80, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(60, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(40, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
})
```

## Étape 20

Change les `||fwdSensors:LED Ring pixel values||` par paires.

-   Paire 1
-   `||fwdSensors:set ledRing 0 to 5||`
-   `||fwdSensors:set ledRing 0 to 4||`
-   Paire 2
-   `||fwdSensors:set ledRing 0 to 3||`
-   `||fwdSensors:set ledRing 0 to 2||`
-   Paire 3
-   `||fwdSensors:set ledRing 0 to 1||`
-   `||fwdSensors:set ledRing 0 to 0||`

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if (fwdSensors.moisture1.isPastThreshold(80, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(60, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(5, 0xff0000)
        fwdLights.ledRing1.setPixelColor(4, 0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(40, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(3, 0xff0000)
        fwdLights.ledRing1.setPixelColor(2, 0xff0000)
    }
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setPixelColor(1, 0xff0000)
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    }
})
```

## Étape 21 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![humidité-pompe](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-11-Moisture-pump.gif)

## Étape 22 @showdialog

Félicitations, tu as terminé ton projet d'Agriculture avancée!

## Étape 23 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
