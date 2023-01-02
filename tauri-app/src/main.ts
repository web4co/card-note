import '@ant-design-vue/pro-layout/dist/style.css';
import 'ant-design-vue/dist/antd.variable.min.css';

import { createApp } from "vue";
import { createPinia } from 'pinia';
import { ConfigProvider } from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import App from "./App.vue";

createApp(App)
.use(createPinia())
.use(router).use(ConfigProvider).use(ProLayout).use(PageContainer)
.mount("#app");
