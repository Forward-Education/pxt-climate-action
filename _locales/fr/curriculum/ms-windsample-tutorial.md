# Éolienne Forward Education - Tutoriel d'exemple

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
	
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une éolienne automatisée. Nous allons faire cela en quatre parties :

1. **Construire** notre éolienne
2. **Ajouter du code** pour faire bouger notre projet
3. **Utiliser** notre éolienne pour apprendre comment elle fonctionne
4. **Modifier** notre projet avec un petit défi de programmation

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-render.webp" alt="Rendu complet de l'éolienne d'exemple" style="display: block; width: 60%; margin:auto;">

## Construction, étape 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs01.webp)

## Construction, étape 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs02.webp)

## Construction, étape 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs03.webp)

## Construction, étape 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs04.webp)

## Construction, étape 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs05.webp)

## Construction, étape 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs06.webp)

## Construction, étape 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs07.webp)

## Construction, étape 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs08.webp)

## Construction, étape 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs09.webp)

## Construction, étape 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs10.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera les instructions qui indiquent à notre micro:bit quoi faire.

## Programmation, étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Programmation, étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Programmation, étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

La bibliothèque de leçons de la trousse Action Climatique permet aux élèves de structurer leur apprentissage en trois étapes de projets : **Utiliser, Modifier et Créer.**

Maintenant que nous avons construit notre éolienne, nous allons commencer par **utiliser** un exemple de code pour voir comment il fonctionne.

Pendant que tu passes à travers les prochaines étapes :

-   **Utilise** les instructions en haut de l'écran.
-   Quand tu es prêt pour plus d'informations, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Utiliser, étape 1

Le code dans l'espace de travail fera tourner et arrêter notre éolienne.

## Utiliser, étape 2

Pendant que tu tournes le cadran vers la **droite**, observe ce qui se passe dans le panneau du simulateur virtuel _et_ sur ton éolienne physique.

~hint Dis-m'en plus!

-   Tu peux utiliser les simulateurs à gauche de l'espace de travail pour voir ce qui se passe avec ta trousse Action Climatique en temps réel pendant que ton moteur et tes cadrans tournent!
-   Quand nous tournons le cadran vers la droite, le moteur devrait réagir dans le simulateur virtuel **et** sur l'éolienne!
-   C'est ce qu'on appelle l'**entrée** et la **sortie** du code :
    _ **Entrée** - tourner le cadran vers la droite
    _ **Sortie** - le moteur tourne vers la droite
    hint~

## Utiliser, étape 3

Regarde ton code. Comment penses-tu que nous pouvons **arrêter** le moteur de tourner? Essaie-le!

~hint Dis-m'en plus!

-   Le moteur va **s'arrêter** quand tu appuies sur le **cadran**!
    hint~

## Utiliser, étape 4

Selon toi, que se passera-t-il quand tu tournes le cadran vers la **gauche**? Essaie-le maintenant!

~hint Dis-m'en plus!

-   Rien ne se passe! Il n'y a aucun code qui indique à l'ordinateur quoi faire quand le cadran est tourné dans cette direction.
    hint~

## C'est l'heure du défi! @showdialog

La bibliothèque de leçons de la trousse Action Climatique permet aux élèves de **modifier** leur projet grâce à des défis de programmation ou de construction!

Maintenant que nous avons **utilisé** du code pour créer une éolienne qui tourne vers la **droite** quand nous tournons le cadran vers la **droite**, nous devons **modifier** notre code pour que l'éolienne tourne **dans les deux directions**.

## Modifier, étape 1

Dans l'espace de travail, il y a un événement `||fwdSensors:on dial1 turned difference||` que nous n'avons pas encore utilisé. Comment peux-tu utiliser cet événement vide pour faire tourner l'éolienne vers la **gauche** quand nous tournons le cadran vers la **gauche**?

~hint Dis-m'en plus!

-   Le bloc `||fwdSensors:on dial1 turned difference||` est le bloc qui va détecter la nouvelle **entrée** (le cadran tournant vers la **gauche**).
    hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
	
})
```

## Modifier, étape 2

Ouvre la catégorie `||fwdMotors:Motors||` et fais glisser et dépose `||fwdMotors:set leftServo to 50 %||` dans l'espace de travail.

Sur le bloc du capteur, clique sur le menu déroulant pour changer **leftServo** en **middleServo**

~hint Dis-m'en plus!

-   Tu peux utiliser jusqu'à **3 moteurs à la fois** avec la trousse Action Climatique! Nous avons construit notre éolienne en utilisant le port **du milieu** (M), alors nous devons programmer notre capteur en utilisant le servo **du milieu**.
-   Le **moteur** est le bloc qui répondra avec notre nouvelle **sortie** (le moteur tournant vers la **gauche**).
    hint~

```block
 fwdBase.middleServo.setSpeed(50)
```

## Modifier, étape 3

Comment peux-tu combiner l'événement `||fwdSensors:on dial1 turned difference||` et le bloc `||fwdMotors:set middleServo to 50 %||` pour faire tourner l'éolienne vers la **gauche** quand le cadran est tourné vers la **gauche**?

~hint Dis-m'en plus!

-   Fais glisser et dépose le bloc bleu `||fwdMotors:set middleServo to 50 %||` dans l'événement vide `||fwdSensors:on dial1 turned difference||`.
-   Remarque : le bloc du moteur devrait maintenant devenir bleu!
    hint~

```block
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Modifier, étape 4

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

```block
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Réflexion @showdialog

Comment penses-tu que tu pourrais utiliser la trousse Action Climatique dans ta classe?

Quelle est une chose que tu aimerais approfondir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

## Terminé!

Tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

N'oublie pas de consulter la [bibliothèque de leçons de Forward Education](https://learn.forwardedu.com/lesson-library/) pour voir plus de projets que tu peux construire avec la trousse Action Climatique!
