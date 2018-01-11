# toast
不用引入component 直接使用的toast

在vue的全局变量上自定义toast

main中引入:
import Message from "@/Message";
Vue.prototype.$myMessage = Message;

使用:
this.$myMessage("message")
