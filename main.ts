input.onButtonPressed(Button.A, function () {
    if (biasValue > 0) {
        biasValue += -1
    } else {
        biasValue = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (biasValue < 10) {
        biasValue += 1
    } else {
        biasValue = 10
    }
})
let biasValue = 0
biasValue = 0
basic.forever(function () {
    basic.showNumber(biasValue)
    Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, biasValue)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
})
