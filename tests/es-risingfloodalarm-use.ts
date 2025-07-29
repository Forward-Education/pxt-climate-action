namespace es_risingfloodalarm_use {
    basic.forever(function () {
        // @highlight
        led.plotBarGraph(fwdSensors.moisture1.moistureLevel(), 100)
    })
}
