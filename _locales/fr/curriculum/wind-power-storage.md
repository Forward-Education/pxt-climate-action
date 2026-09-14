# Stockage d'énergie éolienne

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Stockage d'énergie éolienne.
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-windturbine-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, nous utiliserons les DEL pour indiquer le niveau de « charge » de la batterie de l'éolienne selon la vitesse de rotation de l'éolienne. Plus elle tourne vite, plus la charge est élevée. L'éolienne devrait bouger dans la même direction que le cadran est tourné, et utiliser la fonction du bouton pour s'arrêter. Lorsque l'éolienne ne bouge pas, et donc ne génère pas d'énergie, la batterie est considérée comme « morte » et ne devrait afficher aucune lumière.

## Étape 3 @showdialog

Allume la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge afin de démarrer les simulateurs.

## Étape 6 @showdialog

Voici à quoi les simulateurs devraient ressembler après un téléchargement réussi. Tu peux voir le cadran,
le capteur tactile et les servomoteurs à côté de la pompe.
![initial-dowload-gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-download.gif)

## Étape 7

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les capteurs connectés. Essaie de tourner le cadran de ton projet, le simulateur virtuel réagira.
![wind](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-6-Dial.gif)

## Étape 8

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc
`||fwdSensors:on dial1 turned difference||` dans l'espace de travail.

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
```

## Étape 9

Fais un clic droit sur le bloc `||fwdSensors:on dial1 turned difference||` et duplique-le. _Remarque : le nouveau bloc sera gris._
![greyed out example](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-greyed-out-demo.png)

## Étape 10

Change la flèche de direction du bloc grisé `||fwdSensors:on dial1 turned difference||`. _Remarque : le bloc grisé deviendra vert._
![dial direction](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/dial-direction-switch.gif)

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 11

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc
`||fwdSensors:on touch down||` dans l'espace de travail.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    	
    })
```

## Étape 12

Clique sur `||Variables:Variables||` et crée une `||Variables:Variable||`
`||Variables:turbinespeed||`.

## Étape 13

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:set turbinespeed to 0||`
à l'intérieur du bloc `||Basic:on start||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
	
})
turbinespeed = 0
```

## Étape 14

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:set turbinespeed to 0||`
à l'intérieur du bloc `||fwdSensors:on dial1 turned difference||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
	
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 15

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:set turbinespeed to 0||`
à l'intérieur de l'autre bloc `||fwdSensors:on dial1 turned difference||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 16

Clique sur `||fwdMotors:Motors||`, glisse et dépose
`||fwdMotors:set leftServo to 50 %||` sous le bloc
`||Variables:set turbinespeed to 0||`. Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    	
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 17

Fais un clic droit sur le bloc `||fwdMotors:set middleServo to 50 %||` et duplique-le.
Glisse-le et dépose-le sous l'autre bloc `||Variables:set turbinespeed to 0||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 18

Clique sur `||fwdMotors:Motors||`, glisse et dépose
`||fwdMotors:set leftServo to 50 %||` sous le bloc
`||fwdSensors:on touch down||`.
Change `||fwdMotors:leftServo||` en `||fwdMotors:middleServo||`. Change `||fwdMotors:50%||` en `||fwdMotors:0%||`

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
    })
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 19

Clique sur `||fwdSensors:Sensors||`.
Glisse le bloc ovale `||fwdSensors:dial1 absolute position||`
près de `||Variables:set turbinespeed to 0||` pour
remplacer le `||Variables:0||` du bloc `||Variables:set turbinespeed to 0||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = 0
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 20

Clique sur `||fwdSensors:Sensors||`.
Glisse le bloc ovale `||fwdSensors:dial1 absolute position||`
près de l'autre `||Variables:set turbinespeed to 0||` pour
remplacer le `||Variables:0||` du bloc `||Variables:set turbinespeed to 0||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 21

Clique sur `||Variables:Variables||`.
Glisse le bloc ovale `||Variables:turbinespeed||`
près de `||fwdMotors:set middleServo to 50 %||` pour
remplacer le `||fwdMotors:50||` du bloc `||fwdMotors:set middleServo to 50 %||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 22

Clique sur `||Variables:Variables||`.
Glisse le bloc ovale `||Variables:turbinespeed||`
près de l'autre `||fwdMotors:set middleServo to 50 %||` pour
remplacer le `||fwdMotors:50||` du bloc `||fwdMotors:set middleServo to 50 %||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 23

Clique sur `||Logic:Logic||`, glisse et dépose le bloc `||Logic:if true then else||`
sous le bloc `||fwdMotors:set middleServo||` `||Variables:turbinespeed||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
    	
    }
    else{
    	
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 24

Clique sur `||Logic:Logic||`, glisse et dépose le bloc `||Logic:if true then else||`
sous l'autre bloc `||fwdMotors:set middleServo||` `||Variables:turbinespeed||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
    	
    }
    else{
    	
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
    	
    }
    else{
    	
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 25

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous le bloc `||Logic:If true then else||`. Change la couleur des `||fwdSensors:LED||`
en `||fwdSensors:Green||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    	
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
    	
    }
    else{
    	
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 26

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous l'autre bloc `||Logic:If true then else||`. Change la couleur des `||fwdSensors:LED||`
en `||fwdSensors:Green||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    	
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    	
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 27

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous les deux conditions `||Logic:else||`. Change la couleur des `||fwdSensors:LED||`
en jaune.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (true){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (true){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 28

Clique sur `||Logic:Logic||`, glisse et dépose le bloc de comparaison `||Logic:Comparison <||` `||Logic:0 < 0||`
pour remplacer la condition `||Logic:true||` dans
les deux blocs `||Logic:if true then else||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (0<0){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (0<0){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 29

Clique sur `||Variables:Variables||`, glisse et dépose le bloc ovale `||Variables:turbinespeed||`
pour remplacer le `||Logic:0||` de gauche dans les deux
blocs `||Logic:Comparison||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed<0){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 30

Clique sur `||Logic:<||` et change-le en `||Logic:>||` sur
le bloc `||fwdSensors:on dial1 turned by CW||`. Change le `||Logic:0||` en
`||Logic:80||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 31

Change le `||Logic:0||` en
`||Logic: -80||` sur le bloc `||Logic:<||` sous
le bloc `||fwdSensors:on dial1 turned by CCW||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
     if (turbinespeed<-80){
     fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    else{
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 32

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:set all ledRing to||`
à l'intérieur du bloc `||fwdSensors:on touch down||` sous le bloc `||fwdMotors:set middleServo to 0%||`.
Change la couleur des `||fwdSensors:LED||` en `||control:Black||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    turbinespeed = fwdButtons.dial1.position()
    fwdBase.middleServo.setSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Étape 33

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![dial-servo](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-13-wind.gif)

## Étape 34 @showdialog

Félicitations, tu as terminé ton projet Stockage d'énergie éolienne!

## Étape 35 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
