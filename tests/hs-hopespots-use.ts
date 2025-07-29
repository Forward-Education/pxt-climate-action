namespace hs_hopespots_use {
    function rotateSensor() {
        fwdBase.rightServo.setAngleAndWait(angle)
        angle += 10
        if (angle >= 210) {
            angle = 0
        }
    }
}
