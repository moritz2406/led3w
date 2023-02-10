basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
