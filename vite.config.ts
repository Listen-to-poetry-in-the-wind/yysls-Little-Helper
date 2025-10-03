import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';

import path from 'path';
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
			resolvers: [VantResolver()],
      imports: ['vue', 'vue-router'],
      dts: './auto-imports.d.ts',
      injectAtEnd: true,
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    Unocss(),
  ],
  resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		},
	},
  css: {
		postcss: {
			plugins: [
				postcsspxtoviewport8plugin({
					viewportWidth: 1920, // 设计稿的视口宽度
					unitToConvert: 'px', // 需要转换的单位，默认为"px"
					// exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件
					// include: [/node_modules\/@vant\//], // 包含匹配某些文件夹下的文件或特定文件
					unitPrecision: 5, // 单位转换后保留的精度(保留的小数点后几位)
					propList: ['*'], // 能转化为vw的属性列表
					viewportUnit: 'vw', // 希望使用的视口单位
					fontViewportUnit: 'vw', // 字体使用的视口单位
					selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
					// minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
					mediaQuery: true, // 媒体查询里的单位是否需要转换单位
					replace: true, //  是否直接更换属性值，而不添加备用属性
					landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
					landscapeUnit: 'vw', // 横屏时使用的单位
					landscapeWidth: 1920, // 横屏时使用的视口宽度
				}),
			],
		},
	},
});
