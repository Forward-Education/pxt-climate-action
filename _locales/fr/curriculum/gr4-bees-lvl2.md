# Suivre les abeilles et la pollinisation avec un compteur de bestioles

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construire ton projet @showdialog

Bienvenue au suivi des abeilles et de la pollinisation avec un compteur de bestioles!
Dans ce tutoriel, nous allons…
Construire notre projet avec la trousse d'action climatique
Connecter notre projet à l'ordinateur
Coder notre projet pour le rendre interactif

## Étape de construction 1

## Étape de construction 2

## Étape de construction 3

## Étape de construction 5

## Étape de construction 6

## Étape de construction 7

## Activité 2 Préparation du code @showdialog

Étape 1 de la préparation du code
IMPORTANT! Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.
![plugin](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp)

## Étape 2 de la préparation du code @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, et clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.
![downloadgif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape 3 de la préparation du code

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge et démarrer les simulateurs.

## Étape 4 de la préparation du code @showdialog

Voici à quoi les simulateurs devraient ressembler après un téléchargement réussi. Tu peux voir le cadran, et les moteurs à servo à côté de la pompe.
![initialdownload](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-download.gif)

## Étape 5 de la préparation du code @showhint

Regarde sous le simulateur @boardname @simulator pour voir la plaque de connexion de la trousse d'action climatique et les capteurs connectés.
Essaie de tourner le cadran sur ton projet, le simulateur virtuel réagira.
![simulator](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-6-Dial.gif)

## Étape 6 de la préparation du code @showhint

Commence à coder! Suis les étapes en haut de l'écran pour tes instructions. Clique sur l'icône de l'ampoule pour un indice si tu es bloqué.

## Activité 3 : Coder ton projet Étape 1

Regardons notre code de départ dans l'espace de travail ci-dessous. Nous avons trois groupes de blocs de code.

```template
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 2

Ces deux blocs de code DEL sont enveloppés dans un autre bloc appelé `||logic:if true then||`

~hint Qu'est-ce que cela veut dire?

-   Ce bloc s'appelle une instruction conditionnelle
-   Le code à l'intérieur se produit seulement quand cette condition est remplie
    hint~

```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 3

La condition de l'instruction `||logic:if true then||` est lorsqu'un `||fwdSensors:on touch down||` se produit.

~hint Qu'est-ce que cela veut dire?

-   Cela signifie que le code à l'intérieur de l'instruction « if/then » se produira seulement si le capteur tactile est appuyé
    hint~

```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 4

Maintenant nous devons créer quelque chose pour garder une trace du nombre de visites d'« abeilles ». Cela s'appelle une « Variable ».

~hint Qu'est-ce que cela veut dire?

-   Une « variable » est un mot de code spécial qui contient une valeur
-   Quand nous appelons le mot de code « variable », il nous dira quel nombre il contient
    hint~

```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 5

Va dans le tiroir `||Variables:Variables||` et clique sur « Créer une variable ». Appelle ta variable `||Variables:bugVisits||`.

~hint Pourquoi avons-nous fait cela

-   Tu verras maintenant que nous avons de nouveaux blocs de code disponibles pour contrôler notre variable
    hint~

```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 6

Clique sur `||Variables:Variables||`, glisse-dépose le bloc `||variables:set bugVisits to 0||` à l'intérieur du bloc `||basic:on start||` au-dessus du bloc `||basic:show number||`.

```blocks
let bugvisits = 0
basic.showNumber(0)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 7

Clique sur `||Variables:Variables||`, glisse-dépose `||variables:set bugVisits to 0||` pour remplacer le 0 à l'intérieur du bloc `||basic:show number||`.

~hint Pourquoi avons-nous fait cela?

-   Maintenant la valeur de la variable « bugVisits » sera affichée sur les DEL du micro:bit
    hint~

```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 8

Nous avons maintenant configuré notre code pour afficher la valeur de `||Variables:bugVisits||` quand notre code démarre. Mais nous voulons que ce nombre se mette à jour et s'affiche à chaque visite. Pour cela, nous devons ajouter ce même bloc `||basic:show number||` et `||Variables:bugVisits||` dans le bloc Forever.

~hint Qu'est-ce que cela veut dire?

-   Au lieu que quelque chose se produise seulement une fois, au démarrage, nous voulons que cela se produise tout le temps
-   Le bloc Forever est une boucle, ce qui signifie qu'il se produira encore et encore, pour toujours, tant que notre code fonctionne
    hint~

```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 9

Clique sur `||basic||`, glisse-dépose le bloc `||basic:show number||` sous le premier bloc `||fwdSensors:set all ledRing LEDs to||` à l'intérieur du bloc `||basic:forever||`.

~hint Pourquoi avons-nous fait cela?

-   Cela nous permettra d'afficher le nombre « bugVisits » sur les DEL du micro:bit chaque fois que le capteur tactile est appuyé
-   hint~
-

```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(0)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 10

Clique sur `||Variables:Variables||`, glisse-dépose `||Variables:bugVisits||` pour remplacer le 0 à l'intérieur du bloc `||basic:show number||`.

~hint Pourquoi avons-nous fait cela?

-   Maintenant la valeur de la variable « bugVisits » sera affichée sur les DEL du micro:bit
    hint~

```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(bugvisits)
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de code 11

Clique sur le bouton `|télécharger|` pour télécharger le code de ton projet.
![downloadbuttongif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Code 12 @showdialog

Essaie de tester ton projet dans la vraie vie! Voici à quoi cela devrait ressembler. (élément manquant)

## Étape de code 13

Félicitations d'avoir terminé ton projet de codage!
À l'étape suivante, tu peux cliquer sur le bouton `|terminé|` pour terminer le tutoriel.
