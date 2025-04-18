<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <!-- 导航条 -->
    <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
      <div class="container mx-auto py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center">
        <NuxtLink to="/" class="font-bold text-xl text-gray-900 dark:text-white">
          SimpleSEO
        </NuxtLink>
        
        <div class="flex items-center space-x-2 sm:space-x-4">
          <!-- 桌面端导航 -->
          <nav class="hidden md:flex space-x-4">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.path" 
              :to="localePath(item.path)"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              {{ $t(item.titleKey) }}
            </NuxtLink>
          </nav>
          
          <!-- 语言切换 -->
          <LanguageSwitcher class="mr-2" />
          
          <!-- 暗黑模式切换 -->
          <button 
            @click="toggleColorMode" 
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="切换暗黑模式"
          >
            <div v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div v-else class="w-5 h-5 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </button>
          
          <!-- 移动端导航 -->
          <MobileNavbar class="md:hidden" />
        </div>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="container mx-auto flex-grow px-4 sm:px-6 py-4 sm:py-8">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto py-4 sm:py-6 px-4 sm:px-6 text-center text-gray-600 dark:text-gray-400">
        <p>{{ $t('footer.rights', { year: new Date().getFullYear() }) }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// 显式导入组件
import LanguageSwitcher from '../components/LanguageSwitcher.vue';
import MobileNavbar from '../components/MobileNavbar.vue';
import { useLocalePath } from '#i18n'

const localePath = useLocalePath()
const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// 导航菜单
const navigation = [
  { titleKey: 'nav.home', path: '/' },
  { titleKey: 'nav.guide', path: '/guide' },
  { titleKey: 'nav.tools', path: '/tools' },
];
</script>

<style>
/* 全局响应式样式 */
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style> 