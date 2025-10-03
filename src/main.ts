import '@unocss/reset/normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import '@vant/touch-emulator';

import '@/static/css/transition.css';
import './style.css';

import '@arco-design/web-vue/dist/arco.css';
import 'virtual:uno.css';

createApp(App).use(ArcoVue).use(ArcoVueIcon).use(router).mount('#app');
