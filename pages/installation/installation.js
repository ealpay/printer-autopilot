const electron = require('electron');
const { ipcRenderer } = electron


let progressBar = document.querySelector("#progressBar")

let progressCount = 0

let loop = setInterval(() => {
    progressBar.style.width = `${progressCount}%`

    if(progressCount == 120) {
        clearInterval(loop)
        openCompletingScreen()
    }

    progressCount++
}, 100)


function openCompletingScreen() {
    ipcRenderer.send("installation:openCompleting")
}