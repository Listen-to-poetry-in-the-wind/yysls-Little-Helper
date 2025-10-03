// @unocss-include
import { RouteRecordRaw } from 'vue-router';
import index from '@/views/index.vue';
import excelTool from '@/views/EquipmentAttributes/index.vue';
import cs1 from '@/views/cs1/index.vue';
import cs2 from '@/views/cs2/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      menu: {
        title: '主页',
        icon: 'i-mynaui:home-smile-solid',
      },
    },
  },
  {
    path: '/EquipmentAttributes',
    name: 'equipmentAttributes',
    component: excelTool,
    meta: {
      menu: {
        icon: 'i-icon-park-solid:excel',
        title: '调律',
        remarks: '各职业的词条优先级',
      },
    },
  },
  {
    path: '/cs1',
    name: 'cs1',
    component: cs1,
    meta: {
      menu: {
        icon: 'i-icon-park-solid:excel',
        title: '待定1',
        remarks: '----------------------------------------',
      },
    },
  },
  {
    path: '/cs2',
    name: 'cs2',
    component: cs2,
    meta: {
      menu: {
        icon: 'i-icon-park-solid:excel',
        title: '待定2',
        remarks: '-----------------------',
      },
    },
  },
];
