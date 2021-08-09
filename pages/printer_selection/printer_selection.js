const electron = require('electron');
const { ipcRenderer } = electron



let btnBarcodePrinter = document.querySelector("#btnBarcodePrinter")
let barcodePrinterWrapper = document.querySelector("#barcodePrinterWrapper")

let btnA4Printer = document.querySelector("#btnA4Printer")
let a4PrinterWrapper = document.querySelector("#a4PrinterWrapper")

let btnContinueFromPrinterSelection = document.querySelector("#btnContinueFromPrinterSelection")

btnBarcodePrinter.addEventListener("click", () => {
    barcodePrinterWrapper.classList.add("border-primary")
    a4PrinterWrapper.classList.remove("border-primary")

    btnContinueFromPrinterSelection.disabled = false
    
});

btnA4Printer.addEventListener("click", () => {
    a4PrinterWrapper.classList.add("border-primary")
    barcodePrinterWrapper.classList.remove("border-primary")

    btnContinueFromPrinterSelection.disabled = false
    
});


btnContinueFromPrinterSelection.addEventListener("click", () => {
    ipcRenderer.send("printer_selection:openConnectionSelection")
})
