const base = process.env.NODE_ENV === 'production' ? '/bit_comp' : '';
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
  themeConfig: {
    logo: 'logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'bit_comp',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/' },
          { text: 'Button', link: '/components/button/' },
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'bit_comp',
        description: '',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Button', link: '/en/components/button/' },
        ],
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
  },
};
