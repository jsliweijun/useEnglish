import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/useEnglish',
    title: 'use English',
    description: 'test',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '入门级', link: '/01_beginner/01_theFirstWeek/01' }
            // { text: '应用级', link: '/02_test/api-examples' }
        ],
        sidebar: {
            '/01_beginner/': [
                {
                    text: '第一周',
                    items: [
                        { text: 'Day 1', link: '/01_beginner/01_theFirstWeek/01' },
                        { text: 'Day 2', link: '/01_beginner/01_theFirstWeek/02' },
                        { text: 'Day 3', link: '/01_beginner/01_theFirstWeek/03' },
                        { text: 'Day 4', link: '/01_beginner/01_theFirstWeek/04' },
                        { text: 'Day 5', link: '/01_beginner/01_theFirstWeek/05' },
                        { text: 'Day 6', link: '/01_beginner/01_theFirstWeek/06' },
                        { text: 'Day 7', link: '/01_beginner/01_theFirstWeek/07' }
                    ]
                },
                {
                    text: '第二周',
                    items: [
                        { text: 'Day 8', link: '/01_beginner/01_theFirstWeek/01' },
                        { text: 'Day 9', link: '/01_beginner/01_theFirstWeek/02' },
                        { text: 'Day 10', link: '/01_beginner/01_theFirstWeek/03' },
                        { text: 'Day 11', link: '/01_beginner/01_theFirstWeek/04' },
                        { text: 'Day 12', link: '/01_beginner/01_theFirstWeek/05' },
                        { text: 'Day 13', link: '/01_beginner/01_theFirstWeek/06' },
                        { text: 'Day 14', link: '/01_beginner/01_theFirstWeek/07' }
                    ]
                }
            ]

            // '/02_test/': [
            //     {
            //         text: 'Config',
            //         items: [
            //             { text: 'Index', link: '/config/' },
            //             { text: 'Three', link: '/config/three' },
            //             { text: 'Four', link: '/config/four' }
            //         ]
            //     }
            // ]
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    }
});
