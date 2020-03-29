import Vue from 'vue'
import promptUi from './prompt.vue'
let prompt = {}
let show = false
const offsetP = {
	x: 0,
	y: 0
}
prompt.install = function ( options) {
	// Vue = _Vue
	// 拿到当前使用dom节点
	const targetNode = options.node;
	// 引用浮框ui并挂载到body中
	let UI = Vue.extend(promptUi);
	const dom = new UI({
		data() {
			return {
				context: options.context,
				icon: options.icon,
				iconSlot: options.iconSlot,
				promptClass: options.promptClass
			}
		}
	}).$mount().$el;
	document.body.appendChild(dom);
	// 鼠标悬浮/点击事件，并刷新目标元素的位置
	const domHeight = dom.offsetHeight;
	// 判断用户是否启用点击方式
	if (options.trigger == 'click') {
		targetNode.addEventListener("click", () => {
			if (!show) {
				undate(targetNode, dom, domHeight, options);
				dom.style.opacity = 1;
			}
			if (show) {
				dom.style.transition = 'opacity 1s';
				dom.style.opacity = 0;
			}
			show = !show
		})
	}else{
		targetNode.addEventListener("mouseenter", () => {
			undate(targetNode, dom, domHeight, options);
			dom.style.opacity = 1;
		})
		targetNode.addEventListener("mouseout", () => {
			dom.style.transition = 'opacity 1s';
			dom.style.opacity = 0;
		})
	}

	// 如果页面滚动应立即关闭浮框
	window.addEventListener('scroll', () => {
		dom.style.transition = 'opacity 0s';
		dom.style.opacity = 0
	})
}
function undate(targetNode, dom, domHeight, options) {
	// 每次鼠标悬停都需要计算一次目标元素的位置
	// 判断目标元素上方是否有足够空间容纳浮框，不够则放在下方
	let top, left;
	offsetP.x = targetNode.getBoundingClientRect().x;
	offsetP.y = targetNode.getBoundingClientRect().y;
	if (offsetP.y >= domHeight + 12) {
		top = offsetP.y - domHeight - 12;
		dom.className = `tip-context ${options.promptClass}`
	} else {
		top = offsetP.y + domHeight + 12;
		dom.className = `tip-context tip-auto ${options.promptClass}`
	}
	left = offsetP.x + (targetNode.offsetWidth / 2) - (dom.offsetWidth / 2)
	dom.style.top = `${top}px`;
	dom.style.left = `${left}px`;
}

export default prompt