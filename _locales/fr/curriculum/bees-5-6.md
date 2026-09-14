# Abeilles

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de codage Abeilles.
![projet construit](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-beetouch-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de codage, nous allons compter le nombre de pollinisateurs qui visitent le moniteur de ton jardin. Chaque fois qu'un pollinisateur se pose sur le capteur tactile, tous les pixels de l'anneau de DEL s'allument. Un graphique à barres est aussi affiché sur la matrice de DEL du micro:bit. Le bouton A efface l'écran et affiche le nombre total de pollinisateurs.

## Étape 3 @showdialog

Allume la carte de la trousse d'action climatique.
![carte de connexion](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.
![gif de couplage](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vide et démarrer les simulateurs.

## Étape 6 @showhint

Regarde sous le simulateur @boardname@ pour voir le simulateur de la carte d'action climatique et des composants connectés. Essaie de toucher le capteur tactile de ton projet. Les simulateurs virtuels réagiront.
![tactile](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-7-Touch.gif)

## Étape 7

Clique sur `||Variables:Variables||`. Clique sur |Créer une variable| pour créer une nouvelle `||Variables:Variable||`.
Nomme-la `||Variables:bugVisits||`.

## Étape 8

À l'intérieur de `||Variables:Variables||`, il y a `||Variables:bugVisits||`
et d'autres blocs.

## Étape 9

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:set bugVisits to 0||`
à l'intérieur du bloc `||basic:on start||`.

```blocks
let bugVisits = 0
basic.forever(function (){
	
})
```

## Étape 10

Clique sur `||logic:Logic||`, puis fais glisser et dépose le bloc conditionnel `||logic:if true then||`
à l'intérieur de la boucle `||basic:forever||`.

```blocks
let bugVisits = 0
basic.forever(function (){
 if (true){
 	
 }
})
```

## Étape 11

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:touch pressed||` pour remplacer la condition `||logic:true||` du bloc `||logic:if true then||`.

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
            	
            }
})
```

## Étape 12

Clique sur `||Variables:Variables||`, puis fais glisser et dépose
le bloc `||Variables:change bugVisits by 1||` à l'intérieur
du bloc `||logic:if||` `||fwdSensors:touch pressed||` `||logic: then||`.

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        }
})
```

## Étape 13

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set all ledRing LEDs to||` sous le bloc `||Variables:change bugVisits by 1||`.

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
})
```

## Étape 14

Clique sur `||basic:Basic||`, puis fais glisser et dépose le bloc `||basic:show number||` sous le bloc `||fwdSensors:set all ledRing LEDs to||`.

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
})
```

## Étape 15

Clique sur `||fwdSensors:Sensors||`, puis fais glisser et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous le bloc `||basic:show number||`.

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape 16

Clique sur `||Variables:Variables||`, puis fais glisser et dépose `||Variables:bugVisits||`
pour remplacer le `||0||` dans les deux blocs `||basic:show number||`.
Change la couleur du deuxième bloc `||fwdSensors:LED Ring||` à `||control:Black||`.

```blocks
let bugVisits = 1
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape 17

Clique sur `||LED:LED||`, puis fais glisser et dépose le bloc `||LED: plot bar graph of 0 upto 0||`
sous le bloc `||fwdSensors:set all pixels colour||`

```blocks
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        led.plotBarGraph(0,0)
    }
})
```

## Étape 18

Clique sur `||Variables:Variables||`, puis fais glisser et dépose le bloc `||Variables:bugVisits||`
pour remplacer `||0||` dans le bloc `||LED:plot bar grap of 0||`. Change `||LED:upto 0||`
à `||25||`

```blocks
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Étape 19

Clique sur `||Input:Input||`, puis fais glisser et dépose le bloc `||Input:on button A pressed||`
sur l'espace de travail.

```blocks
input.onButtonPressed(Button.A, function () {
	
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Étape 20

Clique sur `||Basic:Basic||`, puis fais glisser et dépose le bloc `||Basic:clear screen||` à l'intérieur
du bloc `||Input:on button A pressed||`.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Étape 21

Clique sur `||Basic:Basic||`, puis fais glisser et dépose le bloc `||Basic:show number||` sous
le bloc `||Basic:clear screen||`. Clique sur `||Variables:Variables||`, puis fais glisser et dépose
le bloc `||Variables:bugVisits||` pour remplacer `||0||` dans le bloc `||Basic:show number||`.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(bugVisits)
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Étape 22

Clique sur `||Basic:Basic||`, puis fais glisser et dépose le bloc `||Basic:pause (ms) 100||` sous
le bloc `||Basic:show number||` `||Variables:bugVisits||`. Clique sur `||Basic:Basic||`, puis fais glisser et dépose le bloc `||Basic:pause (ms) 100||` sous
le bloc `||Basic:clear screen||` sous le bloc `||Basic:pause (ms) 100||`. Change `||100||`
du bloc `||Basic:pause (ms) 100||` à `||Basic:5000||`.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(bugVisits)
    basic.pause(5000)
    basic.clearScreen()
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Étape 23 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment le simulateur montre les composants en action.
![tactile-led](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-10-LED-bee.gif)

## Étape 24 @showdialog

Félicitations, tu as terminé ton projet Abeilles!

## Étape 25 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
