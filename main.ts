radio.onReceivedValue(function (name, value) {
    if (name == "pitch") {
        pitch = value
    }
    if (name == "roll") {
        roll = value
    }
    if (name == "heading") {
        heading = value
    }
    if (name == "uTi") {
        uTi = value
    }
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
let uTi = 0
let heading = 0
let roll = 0
let pitch = 0
radio.setGroup(43)
loops.everyInterval(1000, function () {
    serial.writeValue("heading", heading)
    serial.writeNumbers([uTi, Math.abs(strength)])
})
basic.forever(function () {
	
})
