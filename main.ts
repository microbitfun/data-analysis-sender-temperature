radio.setTransmitPower(7)
radio.setGroup(1)
basic.showString("S")
basic.forever(function () {
    radio.sendValue("temp", input.temperature())
    basic.pause(200)
    led.toggle(2, 2)
})
