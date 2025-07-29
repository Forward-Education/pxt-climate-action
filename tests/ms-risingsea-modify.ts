namespace ms_risingsea_modify {
// @highlight
    loops.everyInterval(60000, function () {
       datalogger.log(datalogger.createCV("Water Level", WaterLevel)
})
}