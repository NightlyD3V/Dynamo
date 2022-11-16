

console.log("Script is linked")
const device = await navigator.bluetooth.requestDevice({
    optionalServices: ["battery_service", "device_information"],
    acceptAllDevices: true,
});

const server = await device.gatt.connect()
const info = await infoService.getCharacteristics()
console.log(info)
let infoValues = [];
const promise = new Promise((resolve, reject) => {
  infoCharacteristics.forEach(async (characteristic, index, array) => {
    // Returns a buffer
    const value = await characteristic.readValue();
    console.log(new TextDecoder().decode(value));
    // Convert the buffer to string
    infoValues.push(new TextDecoder().decode(value));
    if (index === array.length - 1) resolve();
  });
});
