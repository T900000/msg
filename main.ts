input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(":|")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(":(")
})
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(2)
})
radio.setGroup(1)
