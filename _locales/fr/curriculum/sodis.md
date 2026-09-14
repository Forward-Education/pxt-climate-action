# SODIS

## Étape 1 @showdialog

Bienvenue au tutoriel de programmation Désinfection solaire de l'eau
![built-project-image](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-prototype.png)

## Étape 2 @showdialog

Branche ton câble USB au micro:bit.
![breakout board](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/connect-microbit.gif)

## Étape 3

Clique sur `||logic: Logic||`, glisse et dépose le bloc `||logic:If then Else||`
à l'intérieur de la boucle `||basic:forever||`.

```blocks
basic.forever(function () {

    if (true) {
          	
          }
    else {
        	
        }
        })
```

## Étape 4

Clique sur `||Logic:Logic||`, glisse et dépose le bloc `||Logic:Comparison <||`
pour remplacer la condition `||Logic:true||` du bloc `||Logic:If true then||`. Change
`||Logic:less than <||` en `||Logic:greater than >||`.

```blocks
basic.forever(function () {

    if (0>0) {
          	
          }
    else {
        	
        }
        })
```

## Étape 5

Clique sur `||Input:Input||`, glisse et dépose le bloc `||Input:light level||`
pour remplacer le `||Logic:0||` à gauche du bloc `||Logic:Comparison||`.
Change le `||Logic:0||` à droite en `||Logic:128||`.

```blocks
basic.forever(function () {

    if (input.lightLevel()>128) {
          	
          }
    else {
        	
        }
        })
```

## Étape 6

Clique sur `||Variables:Variables||` et crée deux `||Variables:Variables||` :

-   `||Variables:totalLightExposure||`
-   `||Variables:exposure_start_time||`

## Étape 7

Clique sur `||Variables:Variables||`, glisse et dépose le bloc
`||Variables:change totalLightExposure by 1||` à l'intérieur du bloc `||Logic:If||`
`||Input:light level||` `||Logic:> 128 then||`.

```blocks
basic.forever(function () {

    if (input.lightLevel()>128) {
    totalLightExposure += 1
          }
    else {
        	
        }
        })
```

## Étape 8

Clique sur `||Math:Math||`, glisse et dépose le bloc
`||Math:Substraction||` pour remplacer le `||Variables:1||` dans le bloc
`||Variables:change totalLightExposure by||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (0-0)
          }
    else {
        	
        }
        })
```

## Étape 9

Clique sur `||Input:Input||` puis `||Input:more||`, glisse et dépose le bloc
`||Input:running time (ms)||` pour remplacer le `||Math:0||` de gauche dans le bloc
`||Math:Substraction||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()-0)
          }
    else {
        	
        }
        })
```

## Étape 10

Clique sur `||Variables:Variables||`, glisse et dépose le bloc
`||Variables:exposure start time||` pour remplacer le `||Math:0||` de droite dans le bloc
`||Math:Substraction||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
          }
    else {
        	
        }
        })
```

## Étape 11

Clique sur `||Variables:Variables||`, glisse et dépose le bloc
`||Variables:set exposure_start_time||` sous le bloc
`||Variables:change totalLightExposure by||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = 0
          }
    else {
        	
        }
        })
```

## Étape 12

Clique sur `||Input:Input||` puis `||Input:more||`, glisse et dépose le bloc
`||Input:running time (ms)||` pour remplacer le `||0||` dans le bloc
`||Variables:set exposure_start_time to||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
          }
    else {
        	
        }
        })
```

## Étape 13

Clique sur `||logic:Logic||`, glisse et dépose le bloc `||logic:If true then||`
sous le bloc `||Variables:set exposure_start_time to||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(true){
    	
    }
          }
    else {
        	
        }
        })
```

## Étape 14

Clique sur `||Logic:Logic||`, glisse et dépose le bloc `||Logic:Comparison||`
pour remplacer la condition `||Logic:true||` du bloc `||Logic:If true then||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(0>0){
    	
    }
          }
    else {
        	
        }
        })
```

## Étape 15

Clique sur `||Variables:Variables||`, glisse et dépose le bloc `||Variables:totalLightExposure||`
pour remplacer le `||Logic:0||` de gauche du bloc `||Logic:Comparison||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure>0){
    	
    }
          }
    else {
        	
        }
        })
```

## Étape 16

Clique sur `||Math:Math||`, glisse et dépose le bloc `||Math:Mutliplication||`
pour remplacer le `||Logic:0||` de droite du bloc `||Logic:Comparison||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > (0 * 0)){
    	
    }
          }
    else {
        	
        }
        })
```

## Étape 17

Clique sur `||Math:Math||`, glisse et dépose le bloc `||Math:Mutliplication||`
pour remplacer le `||Math:0||` de gauche du bloc `||Math:Mutliplication||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((0 * 0) * 0)){
    	
    }
          }
    else {
        	
        }
        })
```

## Étape 18

Change les valeurs du bloc `||Math:Math||` pour `||Math:6 x 3600 x 1000||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    	
    }
          }
    else {
        	
        }
        })
```

## Étape 19

Clique sur `||Basic:Basic||`, glisse et dépose le bloc `||Basic:show icon||` à l'intérieur
du bloc `||Logic:if||` `||Variables:totalLightExposure||` `||Logic:then||`.
Change `||basic:Heart||` pour l'icône `||basic::)||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    basic.showIcon(IconNames.Happy)
    }
          }
    else {
        	
        }
        })
```

## Étape 20

Clique sur `||Basic:Basic||`, glisse et dépose le bloc `||Basic:show string||` sous
le bloc `||Basic:show icon||`. Change la chaîne pour `||basic:Safe||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    basic.showIcon(IconNames.Happy)
    basic.showString("Safe")
    }
          }
    else {
        	
        }
        })
```

## Étape 21

Clique sur `||Basic:Basic||`, glisse et dépose le bloc `||Basic:show string||` à l'intérieur
de la condition `||Logic:else||`. Change la chaîne pour `||basic:Not Safe||`.

```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    basic.showIcon(IconNames.Happy)
    basic.showString("Safe")
    }
          }
    else {
    basic.showString("Not Safe")
        }
        })
```

## Étape 22

`|Télécharger|` et teste ton code.
Félicitations, tu as terminé ton projet SODIS!
