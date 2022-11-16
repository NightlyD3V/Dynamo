console.log("Script is linked")

const get_button = document.querySelector('#getDetails')

const doTheThings = async () => {
  const device = await navigator.bluetooth.requestDevice({
      optionalServices: ["battery_service", "device_information"],
      acceptAllDevices: true,
  });
  const server = await device.gatt.connect()
  const info = await infoService.getCharacteristics()
  console.log(info, server, device)
}

get_button.addEventListener('click', ()=> {
  doTheThings()
})