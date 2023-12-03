radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    if (iRxCount > 5) {
        iRxCount = 0
        serial.writeValue("distance", radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128)
    } else {
        iRxCount += 1
    }
})
let iRxCount = 0
radio.setGroup(43)
iRxCount = 0
basic.forever(function () {
	
})
