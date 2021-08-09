const electron = require('electron');
const { ipcRenderer } = electron

let btnQuitApp = document.querySelector("#btnQuitApp")
let btnPrintTest = document.querySelector("#btnPrintTest")

btnPrintTest.addEventListener("click", () => {
    alert("Test sayfası yazdırılıyor...")
})

btnQuitApp.addEventListener("click", () => {
    ipcRenderer.send("completing:quitApp")
})