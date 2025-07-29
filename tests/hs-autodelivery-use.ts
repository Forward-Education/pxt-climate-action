namespace hs_autodelivery_use {
basic.forever(function () {
  if (IsDrivingEnabled == true) {
  //@highlight
      if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off)) {
          basic.showArrow(ArrowNames.North)
          fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 20)
}