import { defineConfig } from 'vitepress'
export default defineConfig({
  base: "/create-form-docs/",
  title: "create-form",
  description: "create-form11",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/quick-start', items: [ { text: 'Markdown Examples', link: '/markdown-examples' }] },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'quick-start',
    //     link: '/create-form-docs/quick-start',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
