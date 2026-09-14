# Protéger les pollinisateurs avec un compteur d'abeilles

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 Construire ton projet @showdialog

Bienvenue au suivi des abeilles et de la pollinisation avec un compteur de bestioles.
Pour ce projet, nous utiliserons le capteur tactile pour détecter quand une « abeille » s'est posée sur notre projet. La lumière DEL s'allumera quand une « abeille » visite le projet.

## Étape de construction 1 @showdialog

![beelvl1sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-lvl1-sbs1.png)

## Étape de construction 2 @showdialog

![beelvl1sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-lvl1-sbs2.png)

## Étape de construction 3 @showdialog

![beeslvl1sbs3[]()](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-lvl1-sbs3.png)

## Étape de construction 4 @showdialog

![beeslvl1sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-lvl1-sbs4.png)

## Étape de construction 5 @showdialog

![beeslvl1sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-lvl1-sbs5.png)

## Étape de construction 6 @showdialog

![beeslvl1sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-lvl1-sbs6.png)

## Activité 2 : Préparation du code @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp)

## Étape 1 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, et clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape 2 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, et clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

## Étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge et démarrer les simulateurs.

## Étape 4 @showdialog

Voici à quoi les simulateurs devraient ressembler après un téléchargement réussi. Tu peux voir le cadran, et les moteurs à servo à côté de la pompe.
![download](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-download.gif)

## Étape 5 @showhint

Regarde sous le simulateur @boardname @simulator pour voir la plaque de connexion de la trousse d'action climatique et les capteurs connectés.
Essaie de cliquer sur les lumières du simulateur virtuel pour la lumière DEL. Que se passe-t-il? Peux-tu la faire changer de couleur?

## Étape 6 @showhint

Commence à coder! Suis les étapes en haut de l'écran pour tes instructions. Clique sur l'icône de l'ampoule pour un indice si tu es bloqué.

```package
basic.forever(function () {
    if (true) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Activité 3 Commence à coder

Commence à coder! Suis les étapes en haut de l'écran pour tes instructions. Clique sur l'icône de l'ampoule pour un indice si tu es bloqué.

```blocks
basic.forever(function () {
    if (true) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 1

Regardons notre code de départ dans l'espace de travail ci-dessous. Nous avons deux `||fwdSensors:set all ledRing LEDs to||` avec une pause entre les deux.

```blocks
basic.forever(function () {
    if (true) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 2

Ces deux blocs de code DEL sont enveloppés dans un autre bloc appelé `||logic:if true then||`.

~hint Qu'est-ce que cela veut dire?

-   Ce bloc s'appelle une instruction conditionnelle
-   Le code à l'intérieur se produit seulement si cette condition est remplie

```blocks
basic.forever(function () {
    if (true) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 3

Clique sur `||fwdSensors:Sensors||`, trouve la section Touch. Glisse `||fwdSensors:on touch down||` et utilise-le pour remplacer la condition « true » dans l'instruction `||logic:if true then||`.

~ hint Pourquoi avons-nous fait cela?

-   Maintenant notre instruction conditionnelle vérifie que le capteur tactile est appuyé
    hint~

```blocks
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 4

Maintenant, changeons la couleur de la lumière DEL. Va au premier bloc `||fwdSensors:set all ledRing LEDs to||` et clique sur la bulle de couleur. Choisis n'importe quelle couleur que tu aimerais. Assure-toi de laisser la dernière en noir.

~hint Pourquoi avons-nous fait cela?

-   C'est ainsi que nous personnalisons la couleur de notre lumière DEL
-   Nous avons laissé le dernier bloc de code de lumière DEL en noir parce que nous voulons que la lumière DEL s'éteigne après que le capteur tactile soit appuyé
    hint~

```blocks
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 5

Clique sur le bouton `|Télécharger|` pour télécharger le code de ton projet.

## Étape de code 6 @showdialog

Essaie de tester ton projet dans la vraie vie! Voici à quoi cela devrait ressembler.

## Étape de code 7 @showdialog

Félicitations d'avoir terminé ton projet de codage!
À l'étape suivante, tu peux cliquer sur le bouton `|terminé|` pour terminer le tutoriel.
