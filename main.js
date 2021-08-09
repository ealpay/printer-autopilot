const { createWindow } = require('./util.js')
const { app, ipcMain } = require('electron')


  let mainWindow;

  app.whenReady().then(() => {

    mainWindow = createWindow()
    mainWindow.setResizable(false)
    mainWindow.setMenu(null)
    mainWindow.loadFile('pages/splash/splash.html')


    //Splash ekranı eventleri
    ipcMain.on("splash:openPrinterSelection", () => {
      mainWindow.loadFile('pages/printer_selection/printer_selection.html')
    })

    //Printer selection ekranı eventleri
    ipcMain.on("printer_selection:openConnectionSelection", () => {
      mainWindow.loadFile('pages/connection_selection/connection_selection.html')
    })

    //Connection selection ekranı eventleri
    ipcMain.on("connection_selection:openScanningPrinter", () => {
      mainWindow.loadFile('pages/scanning_printer/scanning_printer.html')
    })

    //Scanning printer ekranı eventleri
    ipcMain.on("scanning_printer:openInstallation", () => {
      mainWindow.loadFile('pages/installation/installation.html')
    })

    //Installation ekranı eventleri
    ipcMain.on("installation:openCompleting", () => {
      mainWindow.loadFile('pages/completing/completing.html')
    })

    //Completing ekranı eventleri
    ipcMain.on("completing:quitApp", () => {
      app.quit()
    })
    

  })
