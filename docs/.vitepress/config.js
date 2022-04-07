const base = process.env.NODE_ENV === 'production' ? '/bit_comp' : '/';
const { resolve } = require('path');

module.exports = {
  title: 'bit_comp',
  description: '',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'bit_comp'
    [`bit_comp`]: resolve('./src'),
  },
  base,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'bit_comp',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '介绍', link: '/' },
          { text: '组件', link: '/components/' },
        ],
        sidebar: [
          { text: '开始', link: '/components/' },
          { text: 'Button', link: '/components/button/' },
        ],
        editLinkText: '欢迎帮助我们改善页面!',
      },
      '/en/': {
        lang: 'en-US',
        title: 'bit_comp',
        description: '',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/en/' },
          { text: 'Components', link: '/en/components/' },
        ],
        sidebar: [
          { text: 'Start up', link: '/en/components/' },
          { text: 'Button', link: '/en/components/button/' },
        ],
        editLinkText: 'Edit this page!',
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: '2bitlab/bit_comp',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
  },
};
