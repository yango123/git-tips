# yang-prompt
是一种浮框插件，鼠标进入显示，移除隐藏（或者点击）
如果当前元素上方空间不够显示浮框，则自动在下方显示

Install
npm install yang-prompt --save

### Compiles and hot-reloads for development
npm run serve

### Compiles and minifies for production
npm run build

vue项目中全局引入
在 main.js中引入插件

import prompt from '@/plugins/index'
Vue.prototype.$prompt = prompt.install;

使用方法：
在任意组件中调用插件并可以传参
1、选择你的目标元素 写上ref (触发此元素时，显示提示浮框)

<span ref="tips">此处使用 prompt浮框</span>

2、确保页面元素加载完成后调用方法

some.vue页面：
mounted() {
    this.$prompt({
        node: this.$refs.tips,// 浮框的显示位置-> 必传
        context: "这是内容...", //浮框的显示内容-> 必传
        promptClass: "add-class",//浮框最外层类名-> 非必传
        trigger: "click",//浮框的显示方式（默认鼠标进出）-> 非必传
        icon: "prompt-icon",//浮框的图标-> 非必传
        iconSlot: "<em></em>"//浮框的图标位置插入-> 非必传
    })
}

也可以在当前组件直接引用：
import prompt from '@/plugins/index'

prompt = prompt.install;

通过调用prompt并传入需要参数





