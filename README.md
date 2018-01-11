# toast

说明：

vue的一个简单toast插件

不用在每一个vue模板中，引入component，直接使用的toast
————————————————————————————————————————————

main中引入:

import Message from "@/Message";

在vue的全局变量上自定义toast:

Vue.prototype.$myMessage = Message;
————————————————————————————————————————————

使用:

this.$myMessage("message")
