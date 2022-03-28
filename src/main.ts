import { createApp, createVNode } from 'vue';
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons';
import App from './App.vue';
import './styles/reset.scss';

import router from '@/router/index';
import store from '@/store/index';

// element-plus
import 'element-plus/dist/index.css';

const app = createApp(App);

// 注册全局组件
// 创建Icon组件
const Icon = (props: { icon: string }) => {
  const { icon } = props;
  return createVNode(Icons[icon as keyof typeof Icons]);
};
// 注册Icon组件
app.component('IconItem', Icon);

app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
