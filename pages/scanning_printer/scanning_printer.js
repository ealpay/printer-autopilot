const electron = require('electron');
const { shell, ipcRenderer } = electron


let scanningWrapper = document.querySelector("#scanningWrapper")
let btnOpenDriverSite = document.querySelector("#btnOpenDriverSite")
let hpPrinterTableRow = document.querySelector("#hpPrinterTableRow")
let tableContentWrapper = document.querySelector("#tableContentWrapper")
let driverAndCheckWrapper = document.querySelector("#driverAndCheckWrapper")
let checkboxDriverIsOk = document.querySelector("#checkboxDriverIsOk")
let btnContinueFromScanningPrinter = document.querySelector("#btnContinueFromScanningPrinter")

window.setTimeout(hideScanningWrapper, 10000)


hpPrinterTableRow.addEventListener("click", selectHpPrinterRow)
btnOpenDriverSite.addEventListener("click", openDriverSite)
checkboxDriverIsOk.addEventListener("click", checkboxControl)

btnContinueFromScanningPrinter.addEventListener("click", () => {
    ipcRenderer.send("scanning_printer:openInstallation")
})


function selectHpPrinterRow() {
    hpPrinterTableRow.classList.add("table-primary")
    driverAndCheckWrapper.classList.remove("d-none")
}

function hideScanningWrapper() {
    scanningWrapper.classList.add("d-none")
    tableContentWrapper.classList.remove("d-none")
}

function openDriverSite() {
    shell.openExternal("https://support.hp.com/tr-tr/drivers/selfservice/hp-officejet-6100-all-in-one-printer-series/79476")
}

function checkboxControl() {
    if(checkboxDriverIsOk.checked == true) {
        btnContinueFromScanningPrinter.classList.remove("d-none")
    } else {
        btnContinueFromScanningPrinter.classList.add("d-none")
    }
}