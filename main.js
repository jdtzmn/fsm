const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 1200, height: 800, title: 'Finite State Machine' })

  // and load the index.html of the app.
  win.loadFile('www/index.html')
}

app.on('ready', createWindow)