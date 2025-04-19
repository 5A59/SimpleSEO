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
        { name: 'description', content: '一个简洁、优雅的SEO工具' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }
      ]
    }
  },
  css: [
    '~/assets/css/mobile.css'
  ],
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'hi', iso: 'hi-IN', file: 'hi.json', name: 'हिन्दी' },
      { code: 'ar', iso: 'ar-SA', file: 'ar.json', name: 'العربية' },
      { code: 'pt', iso: 'pt-PT', file: 'pt.json', name: 'Português' },
      { code: 'bn', iso: 'bn-IN', file: 'bn.json', name: 'বাংলা' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'id', iso: 'id-ID', file: 'id.json', name: 'Bahasa Indonesia' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'sw', iso: 'sw-SW', file: 'sw.json', name: 'Kiswahili' },
      { code: 'vi', iso: 'vi-VN', file: 'vi.json', name: 'Tiếng Việt' },
      { code: 'ko', iso: 'ko-KR', file: 'ko.json', name: '한국어' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ไทย' },
      { code: 'tr', iso: 'tr-TR', file: 'tr.json', name: 'Türkçe' },
      { code: 'it', iso: 'it-IT', file: 'it.json', name: 'Italiano' },
      { code: 'tl', iso: 'tl-PH', file: 'tl.json', name: 'Filipino' }
      // const languages =  {
//   en: "英语",
//   // zh: "中文",
//   es: "西班牙语",
//   hi: "印地语",
//   ar: "阿拉伯语",
//   pt: "葡萄牙语",
//   bn: "孟加拉语",
//   fr: "法语",
//   ru: "俄语",
//   id: "印尼语",
//   ja: "日语",
//   de: "德语",
//   sw: "斯瓦希里语",
//   vi: "越南语",
//   ko: "韩语",
//   th: "泰语",
//   tr: "土耳其语",
//   it: "意大利语",
//   tl: "菲律宾语"
// };
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
      locales: ['en', 'zh'],
      routesNameSeparator: '___'
    }
  },
})