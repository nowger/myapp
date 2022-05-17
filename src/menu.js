import {Menu} from 'electron'
const template = [
    {
      label: '菜单',
      // 子菜单
      submenu: [
        { 
          label: '图表',
          //  给菜单定义点击事件,是一个函数 
          click() {
            
          }
        }
      ]
    }
  ]
   
  
   
// 编译模版，得到menu对象
const menu = Menu.buildFromTemplate(template)

function key() {
  return Menu.setApplicationMenu(menu)
}
export default key
  
