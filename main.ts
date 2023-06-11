input.onButtonPressed(Button.AB, function () {
    speed = Math.min(max_speed, Math.abs(speed + 2))
    stop_servos()
    basic.showNumber(speed)
})
input.onButtonPressed(Button.A, function () {
    if (!(isturning)) {
        isturning = true
        basic.showArrow(ArrowNames.West)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0 - speed)
    } else {
        stop_servos()
        basic.showIcon(IconNames.SmallSquare)
    }
})
function stop_servos () {
    isturning = false
    wuKong.stopMotor(wuKong.MotorList.M1)
    wuKong.stopMotor(wuKong.MotorList.M2)
}
input.onButtonPressed(Button.B, function () {
    if (!(isturning)) {
        isturning = true
        basic.showArrow(ArrowNames.East)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, speed)
    } else {
        stop_servos()
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    speed = Math.max(2, Math.abs(speed - 2))
    stop_servos()
    basic.showNumber(speed)
})
let isturning = false
let max_speed = 0
let speed = 0
stop_servos()
basic.showIcon(IconNames.SmallSquare)
speed = 12
max_speed = 70
