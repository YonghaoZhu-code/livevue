import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Header,
  Aside,
  Main,
  Container,
  Tabs,
  TabPane,
  Card,
  Avatar

} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Avatar)
Vue.component(Message)
Vue.prototype.$message = Message
