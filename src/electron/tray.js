const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')

function createWindow(route) {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    icon: path.join(__dirname, '../', '../', 'public', 'images', 'icons-png', '256x256.png'),
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    }
  })

  win.loadURL(`http://localhost:3000/${route}`)
}

function main() {
  const tray = new Tray(path.join(__dirname, '../', '../', 'public', 'images', 'icons-png', 'logo.png'))
  const mainMenu = Menu.buildFromTemplate([
    { label: 'Create event', type: 'normal', click: () => {
      createWindow('create-event')
    }},
    { label: 'Events', type: 'normal', click: () => {
      createWindow('events')
    }},
    { type: 'separator' },
    { label: 'Open Count Timer', type: 'normal', click: () => {
      createWindow('')
    }},
    { label: 'Shut down Count Timer', type: 'normal', click: () => {
      app.quit()
    }}
  ])

  tray.setToolTip('This is my application.')
  tray.setContextMenu(mainMenu)
}

module.exports = { main }
