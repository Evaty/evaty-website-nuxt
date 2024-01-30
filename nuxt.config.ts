// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/assets/images/favicon/apple-touch-icon.png"
                },
                {
                    rel: "icon",
                    sizes: "32x32",
                    href: "/assets/images/favicon/favicon-32x32.png"
                },
                {
                    rel: "icon",
                    sizes: "16x16",
                    href: "/assets/images/favicon/favicon-16x16.png"
                },
                {
                    rel: "manifest",
                    href: "/assets/images/favicon/site.webmanifest"
                },
                {
                    rel: "mask-icon",
                    href: "/assets/images/favicon/safari-pinned-tab.svg",
                    color: "#00A2D7"
                },
                {
                    rel: "shortcut icon",
                    href: "/assets/images/favicon/favicon.ico",
                    color: "#00A2D7"
                }
            ],
            meta: [
                {
                    name: "theme-color",
                    content: "#00A2D7"
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    charset: "utf-8"
                }
            ]
        }
    },
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    modules: [
        '@nuxtjs/i18n',
        'nuxt-swiper',
        'nuxt-mapbox',
        'dayjs-nuxt'
    ],
    css: [
        '@/assets/scss/app.scss',
        'evaty-component-lib/dist/style.css',
        '@/assets/fonts/fontawesome/css/fontawesome.css',
        '@/assets/fonts/fontawesome/css/solid.css',
        '@/assets/fonts/fontawesome/css/brands.css',
        '@/assets/fonts/fontawesome/css/regular.css',
    ],
    mapbox: {
        accessToken: 'pk.eyJ1IjoiZXZhdHkiLCJhIjoiY2t0ZDVrMXRpMG0zbjJxcnd4OXk5OTQxMyJ9.zYhGJkZ3Qh-gzy-ay7DB_Q'
    },
    dayjs: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
    },
    routeRules: {
        '/': { swr: true },
        '/imprint': { prerender: true },
        '/privacy': { prerender: true },
        '/terms': { prerender: true },
        '/about': { prerender: true },
        '/host-yourself': { prerender: true },
        '/category': { swr: true },
        '/event/**': { swr: 3600 },
    }
})