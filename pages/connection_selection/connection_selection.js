const electron = require('electron');
const { ipcRenderer } = electron


let usbConnectionWrapper = document.querySelector("#usbConnectionWrapper")
let btnUsbConnection = document.querySelector("#btnUsbConnection")

let networkConnectionWrapper = document.querySelector("#networkConnectionWrapper")
let btnNetworkConnection = document.querySelector("#btnNetworkConnection")

let wifiConnectionWrapper = document.querySelector("#wifiConnectionWrapper")
let btnWifiConnection = document.querySelector("#btnWifiConnection")

let btnContinueFromConnectionSelection = document.querySelector("#btnContinueFromConnectionSelection")


btnUsbConnection.addEventListener("click", () => {
    usbConnectionWrapper.classList.add("border-primary")
    networkConnectionWrapper.classList.remove("border-primary")
    wifiConnectionWrapper.classList.remove("border-primary")

    btnContinueFromConnectionSelection.disabled = false
})

btnNetworkConnection.addEventListener("click", () => {
    networkConnectionWrapper.classList.add("border-primary")
    usbConnectionWrapper.classList.remove("border-primary")
    wifiConnectionWrapper.classList.remove("border-primary")

    btnContinueFromConnectionSelection.disabled = false
})

btnWifiConnection.addEventListener("click", () => {
    wifiConnectionWrapper.classList.add("border-primary")
    usbConnectionWrapper.classList.remove("border-primary")
    networkConnectionWrapper.classList.remove("border-primary")

    btnContinueFromConnectionSelection.disabled = false
})



btnContinueFromConnectionSelection.addEventListener("click", () => {
    ipcRenderer.send("connection_selection:openScanningPrinter")
})