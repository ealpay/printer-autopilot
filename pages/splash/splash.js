
const electron = require('electron');
const { ipcRenderer } = electron

let btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click", () => {
    ipcRenderer.send("splash:openPrinterSelection");

});

