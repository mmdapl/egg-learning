/*
 * @Description: 右上菜单栏配置
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-10 19:04:21
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-01-17 14:11:32
 */
module.exports = [
  // Nav 1
  {
    text: "基础",
    link: "/official/"
  },
  {
    text: "进阶",
    link: "/egg-core/"
  },
  {
    text: "插件应用",
    link: "/egg-plugin/"
  },
  {
    text: "最佳实践",
    link: "/practice/"
  },
  {
    text: '开源插件',
    ariaLabel: 'open code plugin',
    items: [
      { text: 'egg-sequelize-plus【stable】', link: '/' },
      { text: 'egg-mysql-plus【stable】', link: '/' },
      { text: 'egg-axios-plus【beta】', link: '/' },
      { text: 'egg-grpc-plus【todo】', link: '/' },
      { text: 'egg-rabbit-plus【todo】', link: '/' }
    ]
  },
  {
    text: '我的项目',
    ariaLabel: 'my project',
    items: [
      { text: 'Chinese', link: '/l' },
      { text: 'Japanese', link: '/language/japanese/' }
    ]
  },
];
