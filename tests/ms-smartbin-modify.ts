namespace ms_smartbin_modify {
basic.forever(function () {
      if (fwdSensors.sonar1.fwdDistancePastThreshold(0.03, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        //@highlight
        fillLevel = 75
        basic.pause(500)
      }
}