/*
 * @Description: 购机爱你配置
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-10 19:04:21
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-03-31 07:45:04
 */
module.exports = {
  theme:"antdocs",
  title: "薛定谔的Egg.js",
  description: "官方文档出发、结合使用体验，不一样的笔记文档",
  base: "/",
  head: [
      ["link",{ rel: "icon",href: "/assets/egg_learning_logo.png" }],
      // 百度SEO优化
      ['meta', { name: 'author', content: 'Rong姐姐好可爱,Bilibili、Github、公众号都是这样啦' }],
      // Google在结果页面会提供一个翻译链接，但有时候你不希望出现这个链接
      ['meta', { name: 'google', content: 'notranslate' }],
      ['meta', { name: 'keywords', content: 'Rong姐姐好可爱' }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最近更新",
    repo: "https://github.com/mmdapl",
    editLinks: false,
    backToTop: true,
    sidebarDepth: 2,
    // sidebar: 'auto',// 自动生成侧栏
    displayAllHeaders: false, // 默认值：false
    searchMaxSuggestions: 10,// 搜索框显示的搜索结果数量
    ads:{
      style: 2, 
      // speed: 2000,
      image: '/assets/gzh.png',
      text: '来公众号交个朋友吧~',
      link: 'https://space.bilibili.com/350937042',

    }
  },
};