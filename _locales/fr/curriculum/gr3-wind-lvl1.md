# L'énergie éolienne, énergie de l'avenir

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Bienvenue dans L'énergie éolienne, énergie de l'avenir, niveau 1. Pour ce projet, nous allons utiliser la molette pour déclencher l'affichage de différents symboles sur les DEL du micro:bit. Voici à quoi cela ressemblera.

![Étape par étape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind-lvl1ProjectRender.webp)

## Étape de construction 1 @showdialog

![Étape par étape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind-lvl1sbs1.png)

## Étape de construction 2 @showdialog

![Étape par étape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind-lvl1sbs2.png)

## Étape de construction 3 @showdialog

![Étape par étape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind-lvl1sbs3.png)

## Étape de construction 4 @showdialog

![Étape par étape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind-lvl1sbs4.png)

## Étape de construction 5 @showdialog

![Étape par étape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind-lvl1sbs5.png)

## Activité 2 Préparation du code @showdialog

## Étape 1

IMPORTANT! Assure-toi que la carte d'extension du kit d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.
![carte d'extension](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl1-pluganim.webp)

## Étape 2 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.
![gif de couplage](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge et démarrer les simulateurs.

## Étape 4 @showdialog

Voici à quoi devraient ressembler les simulateurs après un téléchargement réussi. Tu peux voir la molette et les servomoteurs à côté de la pompe.
![gif-telechargement-initial](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-download.gif)

## Étape 5 @showhint

Regarde sous le simulateur @boardname@ pour voir la carte d'extension du kit d'action climatique et les capteurs connectés.
Essaie de tourner la molette de ton projet; le simulateur virtuel réagira.
![vent](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-6-Dial.gif)

## Étape 6 @showhint

Commence à programmer! Suis les étapes en haut de l'écran pour tes instructions. Clique sur l'icône d'ampoule pour un indice si tu es bloqué.

## Activité 3 Programme ton projet @showdialog

Programmer ton projet

## Étape 1

Regarde notre espace de travail de code ci-dessous. Nous avons trois ensembles de blocs de code ici. Que remarques-tu de différent entre chacun des blocs `||fwdSensors:on dial1 turned difference||`?

~hint Qu'est-ce que ça veut dire?

-   Un bloc est pour la direction horaire
-   Un bloc est pour la direction antihoraire
-   Un est pour appuyer sur la molette
    hint~

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.No)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    basic.showIcon(IconNames.SmallSquare)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    basic.showIcon(IconNames.Diamond)
})
```

## Étape 2

Que remarques-tu à propos de chacun des blocs `||show icon||` dans notre code?

~hint Qu'est-ce que ça veut dire?

-   Chaque bloc affichera une icône différente sur les DEL du micro:bit
-   Une icône pour chaque direction
    hint~

## Étape 3

Essaie de changer les icônes dans les blocs `||basic:show icon||` toi-même! Clique sur la flèche déroulante et choisis n'importe quel motif.

~hint Qu'est-ce que ça veut dire?

-   Assure-toi de choisir une icône différente pour chacun.
    hint~

## Étape 4

Clique sur le bouton `|Télécharger|` pour télécharger le code de ton projet.

## Étape 5

Essaie de tester ton projet en vrai! Voici à quoi cela devrait ressembler. Que se passe-t-il avec le nombre quand tu tournes à gauche? À droite?

## Étape 6 @showdialog

Félicitations d'avoir terminé ton projet de programmation!
À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.
