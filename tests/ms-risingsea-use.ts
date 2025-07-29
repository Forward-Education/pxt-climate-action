namespace ms_risingsea_use {
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.fwdDistance()
    basic.pause(1000)
   //@highlight 
   led.plotBarGraph(
    WaterLevel,
    0.3,
    true
    )
})
}