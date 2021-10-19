input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("recule")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("pelle")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("droite")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("gauche")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("pince")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("avance")
})
radio.setGroup(1)
basic.showIcon(IconNames.House)
