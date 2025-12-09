// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme";
import FooterCustom from "./FooterCustom.vue";
import './style.css'
import { h } from "vue";

export default {
  ...DefaultTheme,
  // 使用 Layout 钩子来插入自定义组件
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 替换 'doc-footer' slot 或者使用 'layout-bottom'
      "layout-bottom": () => h(FooterCustom),
    });
  },
};
