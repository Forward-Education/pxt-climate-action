# Protéger les pollinisateurs avec un compteur d'abeilles

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Protéger les pollinisateurs avec un compteur d'abeilles.
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-beetouch-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, nous allons compter le nombre de pollinisateurs qui visitent ta station de surveillance. Chaque fois qu'un pollinisateur se pose sur le capteur tactile, les pixels de l'anneau lumineux DEL s'allument, et nous augmentons le compte de visiteurs sur les DEL du micro:bit de un.

## Étape 3 @showdialog

Allume la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_. Ensuite, suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge afin de démarrer les simulateurs.

## Étape 6 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les capteurs connectés. Essaie de toucher le capteur tactile de ton projet. Les simulateurs virtuels réagiront.
![touch](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-7-Touch.gif)

## Étape 7

Clique sur `||Variables:Variables||`. Clique sur |Créer une variable| pour créer une nouvelle `||Variables:Variable||`.
Nomme-la `||Variables:bugVisits||`.

## Étape 8

À l'intérieur de `||Variables:Variables||` il y a `||Variables:bugVisits||`
et d'autres blocs.

## Étape 9

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:set bugVisits to 0||`
à l'intérieur du bloc `||basic:on start||`.

```blocks
let bugVisits = 0
basic.forever(function (){})
```

## Étape 10

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:show number 0||`
sous le bloc `||Variables:set bugVisits to 0||`.

```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function (){})
```

## Étape 11

Clique sur `||logic:Logic||`, glisse et dépose le bloc conditionnel `||logic:if true then||`
à l'intérieur de la boucle `||basic:forever||`.

```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function (){
 if (true){
 	
 }
})
```

## Étape 12

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:touch pressed||` pour remplacer la condition `||logic:true||` du bloc `||logic:if true then||`.

```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
            	
            }
})
```

## Étape 13

Clique sur `||Variables:Variables||`, glisse et dépose le bloc
`||Variables:change bugVisits by 1||` à l'intérieur du bloc
`||logic:if||` `||fwdSensors:touch pressed||` `||logic: then||`.

```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        }
})
```

## Étape 14

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:set all ledRing LEDs to||` sous le bloc `||Variables:change bugVisits by 1||`.

```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
})
```

## Étape 15

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:show number||` sous le bloc `||fwdSensors:set all ledRing LEDs to||`.

```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(0)
    }
})
```

## Étape 16

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:set all ledRing LEDs to||`
sous le bloc `||basic:show number 0||`.

```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(0)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Étape 17

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:bugVisits||`
pour remplacer le `||0||` dans les deux blocs `||basic:show number 0||`.
Change la couleur du deuxième bloc `||fwdSensors:LED Ring||` à `||control:black||`.

```blocks
let bugVisits = 1
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(bugVisits )
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape 18 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![touch-led](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-10-LED-bee.gif)

## Étape 19 @showdialog

Félicitations, tu as terminé ton projet Protéger les pollinisateurs avec un compteur d'abeilles!

## Étape 20 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
