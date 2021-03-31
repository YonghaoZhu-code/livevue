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
  Avatar,
  Upload,
  Row,
  Col,
  Carousel,
  CarouselItem

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
Vue.use(Upload)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
