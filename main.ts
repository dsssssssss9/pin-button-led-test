/**
 * Connect 1 corner of switch to PIN0
 * 
 * Connect opposite corner of switch to 3v
 * 
 * Connect Anode ( long leg ) of LED to PIN16
 * 
 * Connect Cathode ( short Leg ) of LED to 1 leg  of the Resistor
 * 
 * Connect other leg resistor to  GND
 */
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, pins.digitalReadPin(DigitalPin.P0))
})
