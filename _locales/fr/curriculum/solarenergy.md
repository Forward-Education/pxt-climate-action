# Exploiter l'énergie du soleil avec des panneaux solaires

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Exploiter l'énergie du soleil avec des panneaux solaires
![built project](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/project-solar-200.png)

## Étape 2 @showdialog

Dans ce tutoriel de programmation, nous allons déplacer le panneau solaire à l'aide du servomoteur positionnel, d'est en ouest, par petits incréments, afin de rechercher la lumière du soleil. Lorsque le capteur solaire détecte suffisamment de lumière, le panneau solaire s'arrête à cette position tant que la lumière du soleil optimale est présente.

## Étape 3 @showdialog

Allume la carte de la trousse Action climatique.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/breakout-turn-on.png)

## Étape 4 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobit-280x203.gif)

## Étape 5 @showhint

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge afin de démarrer les simulateurs.

## Étape 6 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte Action climatique et les capteurs connectés. Essaie d'interagir avec le capteur solaire de ton projet. Couvre et découvre le capteur pour voir le pourcentage de lumière changer sur ton simulateur virtuel.
![solar](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-8-Solar.gif)

## Étape 7

Clique sur `||Variables:Variables||`. Clique sur |Créer une variable| pour
créer une nouvelle `||Variables:Variable||`.
Nomme-la `||Variables:position||`.

## Étape 8

À l'intérieur de `||Variables:Variables||` il y a `||Variables:position||`
et d'autres blocs.

## Étape 9

Clique sur `||Variables:Variables||`. Glisse et dépose
`||Variables:set position to 0||` à l'intérieur du bloc `||basic:on start||`.
Change `||Variables:0||` en `||Variables:-90||`.

```blocks
let position = -90
basic.forever(function(){
	
})
```

## Étape 10

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:If true then else||`
à l'intérieur de la boucle `||basic:forever||`.

```blocks
let position = -90
basic.forever(function(){
    if(true){
    	
    }
    else{
    	
    }
})
```

## Étape 11

Clique sur `||logic:Logic||`, glisse et dépose le bloc de comparaison
`||logic: 0 < 0||` pour
remplacer la condition `||logic:true||` de la boucle `||logic: if then else||`.
Change `||Logic:<||` en `||Logic:>||`.

```blocks
let position = -90
basic.forever(function(){
    if(0>0){
    	
    }
    else{
    	
    }
})
```

## Étape 12

Clique sur `||fwdSensors:Sensors||`, glisse et dépose le bloc `||fwdSensors:solar1 light level %||`
pour remplacer le `||0||` à gauche du bloc `||logic:comparison||`.

```blocks
let position = -90
basic.forever(function(){
    if(fwdSensors.solar1.lightLevel() > 0){
    	
    }
    else{
    	
    }
})
```

## Étape 13

Clique à droite du bloc `||logic:comparison||`.
Change `||0||` en `||75||`.

```blocks
let position = -90
basic.forever(function(){
    if(fwdSensors.solar1.lightLevel() > 75){
    	
    }
    else{
    	
    }
})
```

## Étape 14

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:show icon||`
à l'intérieur de la condition `||logic:if true then||`.
Sélectionne l'icône `||basic:target||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
    basic.showIcon(IconNames.Target)
    }
    else {}
})
```

## Étape 15

Clique sur `||fwdMotors:Motors||`, glisse et dépose
le bloc `||fwdMotors:set leftServo off||` sous
le bloc `||basic:show icon target||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
    basic.showIcon(IconNames.Target)
    fwdBase.leftServo.setEnabled(false)
    }
    else {}
})
```

## Étape 16

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:show icon||`
à l'intérieur de la condition `||logic:else||`.
Sélectionne l'icône `||basic: small diamond icon||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        }
})
```

## Étape 17

Clique sur `||Variables:Variables||`, glisse et dépose
le bloc `||Variables:change position by 1||`
sous le bloc `||basic:show icon small diamond||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 1
        }
})
```

## Étape 18

Change la valeur de `||variables:change position by 1||` à `||10||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        }
})
```

## Étape 19

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:if true then||`
sous le bloc `||Variables:change position by 10||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (true) {
            	
            }
        }
})
```

## Étape 20

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:comparison||` `||logic: 0 < 0||`
pour remplacer la condition `||logic:true||` du bloc `||logic: if true then||`.
Change `||logic:< to >||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (0 > 0) {
                	
                }

    }
})
```

## Étape 21

Clique sur `||Variables:Variables||`, glisse et dépose
le bloc `||Variables:position||` à gauche du
bloc `||logic:comparison||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 0) {
        	
        }

    }
})
```

## Étape 22

Change `||0||` en `||90||` à droite du bloc `||logic:comparison||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
        	
        }

    }
})
```

## Étape 23

Clique sur `||Variables:Variables||`, glisse et dépose `||Variables:set position to 0||`
à l'intérieur du bloc `||logic:if||` `||variables:position||` `||logic: > 90 then||`. Change le 0 dans `||Variables:set position to 0||` en -90.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
        position = -90
        }

    }
})
```

## Étape 24

Clique sur `||fwdMotors:Motors||`, glisse et dépose le bloc `||fwdMotors:set leftServo to 0'||`
sous la condition `||logic:if then||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.setAngle(fwdBase.leftServo, 0)
    }
})
```

## Étape 25

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:position||`
pour remplacer le `||0||` dans le bloc `||fwdMotors:set leftServo to 0'||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.setAngle(fwdBase.leftServo, position)
        }
})
```

## Étape 26

Clique sur `||basic:Basic||`, glisse et dépose le bloc `||basic:pause||` sous
le bloc `||fwdMotors:set leftServo to||` `||Variables:position||`. Change
`||basic:(ms) 100||` en `||basic:(ms) 200||`.

```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdBase.leftServo.setEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.setAngle(fwdBase.leftServo, position)
        basic.pause(200)
    }
})
```

## Étape 27 @showhint

`|Télécharger|` et teste ton code. Clique sur l'icône de l'ampoule pour voir comment
le simulateur montre les composants en action.
![solar-servo](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-14-solar-array.gif)

## Étape 28 @showdialog

Félicitations, tu as terminé ton projet Exploiter l'énergie du soleil avec des panneaux solaires!

## Étape 29 @showdialog

Une fois ton projet terminé, retourne à la leçon pour découvrir d'autres défis et prolongements.
