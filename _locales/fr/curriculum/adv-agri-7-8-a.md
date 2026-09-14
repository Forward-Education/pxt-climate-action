# Agriculture intelligente avec arrosage automatisé

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de codage Agriculture intelligente avec arrosage automatisé
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-advagri-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de codage, nous allons utiliser le capteur d'humidité pour mesurer le niveau d'humidité du sol des plantes. Ensuite, nous utiliserons la pompe à eau pour arroser la plante quand le niveau d'humidité est bas. Nous utiliserons la lumière DEL comme lampe de croissance pour la plante.

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

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set all ledRing LEDs to||` à l'intérieur de la boucle `||basic:forever||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    })
```

## Étape 8

Clique sur `||logic: Logic||`, puis fais glisser et dépose `||logic:If then Else||`
sous le bloc `||fwdSensors:set all ledRing LEDs to||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (true) {
          	
          }
    else {
        	
        }
        })
```

## Étape 9

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose `||fwdSensors:is soilMoisture1 moisture level over 5%||`
pour remplacer la condition `||logic:true||` du bloc `||logic:if then else||`.
Change `||fwdSensors:5% to 50%||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
          	
          }
    else {
        	
        }
        })
```

## Étape 10

Clique sur `||basic:basic||`, puis fais glisser et dépose le bloc `||basic:show icon||` à l'intérieur de la condition `||logic:if then||`.
Sélectionne l'icône `||basic: :)||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        	
        }
        })
```

## Étape 11

Clique sur `||basic:basic||`, puis fais glisser et dépose le bloc `||basic:show icon||` à l'intérieur de la condition `||logic:else||`.
Sélectionne l'icône `||basic: :(||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        basic.showIcon(IconNames.Sad)}
        })
```

## Étape 12

Clique sur `||fwdMotors:Motors||`, puis fais glisser et dépose `||fwdMotors:run pump for 500||` sous
l'icône `||basic: :(||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(100)
        }
})
```

## Étape 13

Clique sur `||basic:basic||`, puis fais glisser et dépose le bloc `||basic:pause (ms) 100||` sous le bloc `||fwdMotors:run pump for 500||`.
Change le `||basic:100||` à `||basic:500||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
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

Clique sur `||basic:basic||`, puis fais glisser et dépose `||basic:clear screen||`
sous le bloc `||basic:pause (ms) 500||`.

```blocks
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
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

## Étape 15 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![humidité-pompe](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-11-Moisture-pump.gif)

## Étape 16 @showdialog

Félicitations, tu as terminé ton projet d'Agriculture intelligente avec arrosage automatisé!

## Étape 17 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
