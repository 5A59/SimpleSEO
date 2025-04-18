import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      }
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  app: {
    head: {
      title: 'SimpleSEO',
      meta: [
        { name: 'description', content: '一个简洁、优雅的SEO工具' }
      ]
    }
  },
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  // sitemap 配置
  sitemap: {
    hostname: 'https://simpleseo.zyi1024.com',
    gzip: true,
    exclude: [
    ],
    i18n: {
      locales: ['en', 'zh', 'de', 'es', 'fr', 'ja', 'ko'],
      routesNameSeparator: '___'
    }
  },
})