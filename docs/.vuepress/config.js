const path = require('path')

module.exports = {
  title: 'Dino-UI',
  description: 'A high quality UI Toolkit built on Vue.js 2.5',
  base: '/dino-ui/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      {
        text: '交流',
        items: [
          { text: 'Github', link: 'https://github.com/yancongwen/dino-ui.git' },
          { text: 'Blog', link: 'https://yancongwen.cn' }
        ]
      }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: '开始',
        collapsable: false,
        children: ['/guide/', '/guide/install', '/guide/get-started']
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/button-group',
          '/components/input',
          '/components/tabs',
          '/components/collapse',
          '/components/layout',
          '/components/grid',
          '/components/message'
        ]
      }
    ]
  },
  scss: {
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
