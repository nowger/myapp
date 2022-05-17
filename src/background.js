''use strict'

import { app, BrowserWindow, } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

import key from './menu'

key()
async function createWindow() {
  const win = new BrowserWindow({
    show: false,
    icon: "public/favicon.ico"
  })
  win.maximize()
  await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  createProtocol('app')
   
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  createWindow()
})


 
