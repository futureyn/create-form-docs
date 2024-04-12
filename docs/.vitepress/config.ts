export default {
    base:"/create-form-docs",
    title:'Create-Form',
    description:'',
    themeConfig: {
        nav: [
            { text: '更新日志', link: '/log/updateLog' },
          ],
        sidebar: [
            {
                text: '更新日志',
                link: '/log/updateLog'
            },
            {
                text: 'Form 表单组件',
                link: '/quick-start'
            },
            {
                text: 'List 列表组件',
                link: '/list'
            },
            {
                text: 'Table 表格组件',
                link: '/table'
            }
        ],
        socialLinks: [
            { link: 'https://www.npmjs.com/package/xc-components-custom', icon:"npm" },
            // {
            //     text: 'Dropdown Menu',
            //     items: [
            //         { text: 'Item A', link: '/item-1' },
            //         { text: 'Item B', link: '/item-2' },
            //         { text: 'Item C', link: '/item-3' }
            //     ]
            // }
        ]
    }
}