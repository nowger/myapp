'use strict'

import { app, BrowserWindow,Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'


const template = [
  {
    label: '菜单',
    // 子菜单
    submenu: [
      { 
        label: '图表',
        //  给菜单定义点击事件,是一个函数 
        click() {
          new BrowserWindow({
            width: 200,
            height: 200
          })
        }
      }
    ]
  }
]
 

 
// 编译模版，得到menu对象
const menu = Menu.buildFromTemplate(template)
// 设置菜单
Menu.setApplicationMenu(menu)


async function createWindow() {
  const win = new BrowserWindow({
    show: false
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


