namespace sodis {
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
        )}
}