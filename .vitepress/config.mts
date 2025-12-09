import { defineConfig } from "vitepress";

const postsSidebar = [
  { text: "技术分享", link: "/posts/index" },
  { text: "CVZJ 项目日志", link: "/posts/cvzj-log" },
  { text: "网络工程实践", link: "/posts/network-eng" },
];

const interestSidebar = [
  { text: "摄影作品 (A7M3)", link: "/interests/photography" },
  { text: "骑行记录 (RC 100)", link: "/interests/cycling" },
  { text: "电影与动漫", link: "/interests/movies-anime" },
  { text: "自学日语笔记", link: "/interests/japanese-notes" },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shuo Wang - 王硕",
  description:
    "超高级软件/网络工程师王硕的个人博客与项目展示，涵盖CVZJ、摄影、骑行等。",
  lang: "zh-CN", // 设定语言，有利于 SEO 和可访问性

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "技术博客", link: "/posts/index" }, // 新增博客入口
      { text: "个人兴趣", link: "/interests/photography" }, // 新增兴趣展示
      { text: "关于我", link: "/about" },
    ],

    sidebar: {
      // 当在 /posts/ 路径下时显示
      '/posts/': [
        {
          text: '💻 技术与工程',
          items: postsSidebar
        }
      ],
      // 当在 /projects/ 路径下时显示
      '/projects/': [
        {
          text: '⭐ 核心项目展示',
          items: [
            { text: 'Creative Vision Zonal Join (CVZJ)', link: '/projects/cvzj' },
            { text: 'SpaceGT 基础设施', link: '/projects/spacegt' },
          ]
        }
      ],
      // 当在 /interests/ 路径下时显示
      '/interests/': [
        {
          text: '📸 生活与爱好',
          items: interestSidebar
        }
      ],
      // 默认侧边栏（例如在主页或关于我页面）
      '/': [
        {
          text: '快速导航',
          items: [
            { text: '技术博客', link: '/posts/index' },
            { text: '关于我', link: '/about' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/spacegt-master/spacegt-www" },
    ],

    // 启用搜索
    search: {
      provider: 'local'
    },
    
    // 页面内导航标题（可选）
    outline: {
        label: '本页目录'
    }
  },
});
