import { defineConfig, presetUno, presetTagify, presetAttributify, presetIcons } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify({
      prefix: 'un-',
    }),
    presetTagify({
      /* options */
    }),
  ],
  rules: [
    // // 定义一个自定义的背景色
    // ['bg-custom', { background: '#1e90ff' }],
    ['o-h', { overflow: 'hidden' }],
  ],
  // 自定义快捷方式
  shortcuts: {
    // 'btn': 'px-4 py-2 rounded bg-blue-500 text-white',
    // 'icon-btn': 'inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:bg-blue-100',
  },
  // 自定义主题
  theme: {
    // colors: {
    //   'primary': '#1e90ff',
    //   'secondary': '#ff6347',
    // },
  },
});
