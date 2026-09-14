# L'énergie éolienne, énergie de l'avenir

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton prototype @showdialog

Bienvenue dans le projet Éolienne, niveau 2! Dans ce projet, tu vas utiliser la molette pour contrôler le servomoteur!
Dans ce tutoriel, nous allons…
Construire notre projet avec le kit d'action climatique
Connecter notre projet à l'ordinateur
Programmer notre projet pour le rendre interactif

## Étape de construction 1 @showdialog

![vent](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs1.png)

## Étape de construction 2 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs2.png)

## Étape de construction 3 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs3.png).

## Étape de construction 4 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs4.png)

## Étape de construction 5 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs5.png)

## Étape de construction 6 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs6.png)

## Étape de construction 7 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs7.png)

## Étape de construction 8 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs8.png)

## Étape de construction 9 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs9.png)

## Étape de construction 10 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs10.png)

## Étape de construction 11 @showdialog

![étapeparétape](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl2-sbs11.png)

## Activité 2 : Préparation du code @showdialog

Étape 1
IMPORTANT! Assure-toi que la carte d'extension du kit d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

![branchement](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr3-wind1-lvl1-pluganim.webp)

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
		
	})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
		
	})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
		
	})
```

## Étape 2 @showhint

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

## Étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet vierge et démarrer les simulateurs.

## Étape 4 @showdialog

Voici à quoi devraient ressembler les simulateurs après un téléchargement réussi. Tu peux voir la molette et les servomoteurs à côté de la pompe.
![gif-telechargement-initial](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/initial-download.gif)

## Étape 5 @showhint

Regarde sous le simulateur @boardname @pour voir la carte d'extension du kit d'action climatique et les capteurs connectés.
Essaie de tourner la molette de ton projet; le simulateur virtuel réagira.
![vent](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/simulator-6-Dial.gif)

## Étape 6 @showhint

Essaie de cliquer sur le bouton marche/arrêt du simulateur virtuel pour le premier servomoteur (étiqueté Left). Que se passe-t-il? Peux-tu utiliser le curseur pour changer la vitesse?

## Étape 7 @showhint

Commence à programmer! Suis les étapes en haut de l'écran pour tes instructions. Clique sur l'icône d'ampoule pour un indice si tu es bloqué.

## Activité 3 Programme ton projet @showdialog

Programmer ton projet

## Étape de programmation 1

Regarde notre espace de travail de code ci-dessous. Nous avons trois ensembles de blocs de code. Que remarques-tu de différent entre chacun des blocs `||fwdSensors:on dial1 turned difference||`?

~hint Pourquoi avons-nous fait cela?

-   Un bloc est pour la direction horaire
-   Un bloc est pour la direction antihoraire
-   Un est pour appuyer sur la molette
    hint~

## Étape de programmation 2

Ces blocs `||fwdSensors:on dial1 turned difference||` s'appellent des entrées. Ils attendent une action précise, dans notre cas, une rotation de la molette. Une fois déclenché, le code à l'intérieur s'exécutera.

## Étape de programmation 3

Ajoutons une action à l'intérieur de nos blocs d'entrée. Clique sur les tiroirs `||fwdMotors:Motors||` et trouve la section « Servo (continu) ». Fais glisser un bloc `||fwdMotors:set leftServo to 50 %||` sur l'espace de travail.

```blocks
fwdBase.leftServo.setSpeed(50)
```

## Étape de programmation 4

Place le bloc `||fwdMotors:set leftServo to 50 %||` à l'intérieur du premier bloc `||fwdSensors:on dial1 turned difference||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.leftServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
	
})
```

## Étape de programmation 5

Répète l'étape précédente pour ajouter un bloc `||fwdMotors:set leftServo to 50 %||` à l'intérieur de l'autre bloc `||fwdSensors:on dial1 turned difference||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.leftServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.leftServo.setSpeed(50)
})
```

## Étape de programmation 6

Change la vitesse du dernier bloc `||fwdMotors:set leftServo to 50 %||` pour qu'elle soit de -50 %

~hint Pourquoi avons-nous fait cela?

-   Rendre la vitesse négative fera reculer le moteur
-   Ainsi, nous avons un bloc de moteur qui tourne dans le sens antihoraire, et un autre dans le sens horaire
    hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.leftServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.leftServo.setSpeed(-50)
})
```

## Étape de programmation 7

Fais glisser un autre bloc `||fwdMotors:set leftServo to 50 %||` dans l'espace de travail et ajoute-le à l'intérieur du bloc d'entrée `||fwdSensors:on touch down||`.

~hint Pourquoi avons-nous fait cela?

-   Ce bloc d'entrée sera notre déclencheur pour arrêter le moteur
    hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.leftServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.leftServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.leftServo.setSpeed(-50)
})
```

## Étape de programmation 8

Maintenant, change la vitesse de ce bloc `||fwdMotors:set leftServo to 50 %||` pour qu'elle soit de 0 %.

~hint Pourquoi avons-nous fait cela?

-   Une vitesse de 0 % arrêtera le moteur
    hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.leftServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.leftServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.leftServo.setSpeed(-50)
})
```

## Étape de programmation 9

Clique sur le bouton `|Télécharger|` pour télécharger le code de ton projet.
![téléchargement](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape de programmation 10 @showdialog

Félicitations d'avoir terminé ton prototype de programmation! Essaie de tester notre projet en vrai! Voici à quoi ton prototype terminé devrait ressembler!
À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel. Cela mettra fin au tutoriel et conservera ton code!
