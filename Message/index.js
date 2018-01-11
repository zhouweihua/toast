// 全局信息toast
import Vue from 'vue';
import Main from './Main.vue';
let MessageConstructor = Vue.extend(Main);
let instance;
let seed = 1;

const Message = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {

    // ------- 控制显示提示 字符数
    if (/[A-Za-z].*/.test(options)) {
      if (options.length > 19) {
        options = options.substring(0, 17) + "...";
      }
    } else {
      if (options.length > 12) {
        options = options.substring(0, 10) + "...";
      }
    }
    // ------- 控制显示提示 字符数

    options = {
      message: options
    };
  }
  let id = 'message_' + seed++;

  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = 200;
};

export default Message;