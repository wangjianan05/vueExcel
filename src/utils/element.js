/*
 * @Author: your name
 * @Date: 2020-03-10 15:36:18
 * @LastEditTime: 2020-03-10 16:05:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueExcel\src\utils\element.js
 */
// 导入自己需要的组件
import { Select, Option, OptionGroup, Input,Table, DatePicker , Icon, Button} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Table)
    Vue.use(DatePicker)
    Vue.use(Icon)
    Vue.use(Button)
  }
}
export default element