# Agriculture intelligente avec hydroponie et lampes de croissance

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de codage Agriculture intelligente avec hydroponie et lampes de croissance
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-advagri-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de codage, nous allons contrôler la couleur et le moment des DEL, compter le nombre de cycles d'arrosage et le temps entre les arrosages.

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
à l'intérieur de la boucle `||basic:forever||`.

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

Clique sur `||Variables:Variables||` et crée `||Variables:5 Variables||`

-   `||Variables:timer_start||`
-   `||Variables:timer_stop||`
-   `||Variables:plant_B||`
-   `||Variables:plant_A||`
-   `||Variables:run_pump_count||`

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

## Étape 15

Clique sur `||Variables:Variables||`, puis fais glisser et dépose `||Variables:set plant_A to 0||` à l'intérieur
du bloc `||Basic:on start||`.

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
let plant_A = 0
```

## Étape 16

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:set plant_A to 0||` à l'intérieur
du bloc `||Basic:on start||`. Change `||Variables:set plant_A to 0||` en
`||Variables:set plant_B to 0||`.

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
let plant_B = 0
let plant_A = 0
```

## Étape 17

Clique sur `||Variables:Variables||`, puis fais glisser et dépose des blocs `||Variables:set plant_A to 0||` à l'intérieur
du bloc `||Basic:on start||`. Change `||Variables:set plant_A to 0||` en `||Variables:set run_pump_count to 0||`

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
let plant_B = 0
let plant_A = 0
let run_pump_count = 0
```

## Étape 18

Change la valeur de `||Variables:plant_A||` à `||Variables:5000||` et
la valeur de `||Variables:plant_B||` à `||Variables:2000||`.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
```

## Étape 19

Clique sur `||Input:Input||`, puis fais glisser et dépose le bloc `||Input:on button A pressed||`
sur l'espace de travail.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function () {
	
})
```

## Étape 20

Fais un clic droit sur le bloc `||Input:on button A pressed||` et duplique-le.
Change `||Input:A||` en `||Input:B||`. Fais un clic droit et duplique `||Input:on button A pressed||` encore une fois. Change `||Input:A||` en
`||Input:A+B||`. _Remarque : le nouveau bloc sera grisé. Tu devrais avoir trois blocs d'entrée de bouton._

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
```

## Étape 21

Clique sur `||Input:Input||`, puis fais glisser et dépose le bloc `||Input:on logo pressed||`
sur l'espace de travail.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
```

## Étape 22

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
à l'intérieur de :

-   `||input:on button A pressed||`
-   `||input:on button B pressed||`
-   `||input:on button A+B pressed||`

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 23

Clique sur `||Basic:Basic||`, puis fais glisser et dépose `||Basic:pause (ms) 100||`
sous :

-   `||fwdSensors:set all ledRing LEDs to||` à l'intérieur du bloc `||input:on button A pressed||`
-   `||fwdSensors:set all ledRing LEDs to||` à l'intérieur du bloc `||input:on button B pressed||`

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
basic.pause(100)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
basic.pause(100)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 24

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous :

-   `||basic:pause (ms) 100||` à l'intérieur de `||input:on button A pressed||`
-   `||basic:pause (ms) 100||` à l'intérieur de `||input:on button B pressed||`

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 25

Change `||fwdSensors:set all ledRing LEDs to||` sous le bloc `||input:on button A pressed||`
à `|purple|`. Change `||fwdSensors:set all ledRing LEDs to||` sous le bloc `||input:on button B pressed||`
à blanc. Change `||fwdSensors:set all ledRing LEDs to||` sous le bloc `||input:on button A+B pressed||`
à `||control:black||`.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 26

Change les deux couleurs de DEL de `||Input:on button A pressed||` et `||input:on button B pressed||`
du bloc `||fwdSensors:set all ledRing LEDs to||` sous le bloc `||Basic:pause (100) ms||`
à `||control:black||`.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 27

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:plant_A||` pour remplacer
`||basic:100||` dans le bloc `||basic:pause (ms) 100||` à l'intérieur du bloc `||Input:on button A pressed||`.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(100)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 28

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:plant_B||` pour remplacer
`||basic:100||` dans le bloc `||basic:pause (ms) 100||` sous le bloc `||input:on button B pressed||`.

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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 29

Clique sur `||Variables:Variables||` pour créer deux nouvelles `||Variables:Variables||`.

-   `||Variables:timer start||`
-   `||Variables:timer stop||`

## Étape 30

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:set timer stop to 0||`
sous `||Logic:if||` `||fwdSensors:soilMoisture1 level is over 50 %||` `||Logic:then||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = 0
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 31

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:set timer start to 0||`
sous le bloc `||fwdMotors:run pump for 500||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = 0
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = 0
        basic.pause(500)
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 32

Clique sur `||Input:Input||`, puis `||Input:more||`, et fais glisser et dépose le bloc `||input:running time (ms)||`
pour remplacer `||0||` dans les deux :

-   bloc `||Variables:timer start||`
-   bloc `||Variables:timer stop||`

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 33

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:change run_pump_count by 1||`
à l'intérieur de la condition `||Logic:else||` sous le bloc `||Basic:pause (ms) 500||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
	
})
```

## Étape 34

Clique sur `||Basic:Basic||`, puis fais glisser et dépose le bloc `||Basic:show number||` à l'intérieur
du bloc `||Input:on logo pressed||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
basic.showNumber(0)
})
```

## Étape 35

Clique sur `||Math:Math||`, puis fais glisser et dépose le bloc `||Math:Division||` pour remplacer
`||Basic:0||` dans le bloc `||basic:show number||` sous le bloc `||input:on logo pressed||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
basic.showNumber(0/0)
})
```

## Étape 36

Clique sur `||Math:Math||`, puis fais glisser et dépose le bloc `||Math:Substraction||` pour remplacer
`||Math:0||` du côté gauche du bloc `||Math:Division||` sous le bloc `||input:on logo pressed||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
basic.showNumber(0-0/0)
})
```

## Étape 37

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:timer_start||`
et le bloc `||Variables:timer_stop||` pour remplacer
`||Math:0 - 0||` du côté gauche du bloc `||Math:Division||` sous
le bloc `||input:on logo pressed||`. Change la valeur du `||Math:Divisor||` à
`||Math:60000||`.

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.timedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdLights.ledRing1.setAllPixelsColor(0x7f00ff)
basic.pause(plant_A)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.pause(plant_B)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function(){
basic.showNumber(timer_stop-timer_start/60000)
})
```

## Étape 38 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![humidité-pompe](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-11-Moisture-pump.gif)

## Étape 39 @showdialog

Félicitations, tu as terminé ton projet d'Agriculture intelligente avec hydroponie et lampes de croissance!

## Étape 40 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
