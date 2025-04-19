<template>
  <div>
    <!-- 移动端菜单按钮 -->
    <button 
      @click="isOpen = !isOpen" 
      class="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="导航菜单"
    >
      <svg 
        v-if="!isOpen" 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg 
        v-else 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- 移动端菜单抽屉 -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-40 bg-black bg-opacity-50"
      @click="isOpen = false"
    >
      <div 
        class="absolute left-0 top-0 w-4/5 max-w-sm h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform"
        @click.stop
      >
        <div class="p-5 flex flex-col h-full">
          <div class="flex justify-between items-center mb-8">
            <NuxtLink @click="isOpen = false" to="/" class="font-bold text-xl text-gray-900 dark:text-white">
              SimpleSEO
            </NuxtLink>
            <button @click="isOpen = false" class="text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav class="space-y-3 flex-grow">
            <template v-for="item in navigation" :key="item.path">
              <NuxtLink 
                v-if="!item.external"
                :to="localePath(item.path)"
                @click="isOpen = false"
                class="block py-2 px-4 text-lg rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                :class="{ 'bg-gray-100 dark:bg-gray-700 font-medium': route.path === localePath(item.path) }"
              >
                {{ $t(item.titleKey) }}
              </NuxtLink>
              <a 
                v-else
                :href="item.path"
                target="_blank"
                @click="isOpen = false"
                class="block py-2 px-4 text-lg rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {{ $t(item.titleKey) }}
              </a>
            </template>
          </nav>
          
          <div class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <LanguageSwitcher />
              
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useRoute } from 'vue-router'
import { useLocalePath } from '#i18n'

const route = useRoute()
const localePath = useLocalePath()
const colorMode = useColorMode()
const isOpen = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// 导航菜单项
const navigation = [
  { titleKey: 'nav.home', path: '/' },
  { titleKey: 'nav.about', path: 'https://zyi1024.com/', external: true },
  { titleKey: 'nav.github', path: 'https://github.com/5A59/SimpleSEO', external: true },
]

// 添加ESC键和滚动监听
onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
  document.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey)
  document.removeEventListener('scroll', handleScroll)
})

// ESC键关闭菜单
const handleEscKey = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

// 滚动时关闭菜单
const handleScroll = () => {
  if (isOpen.value) {
    isOpen.value = false
  }
}
</script>

<style scoped>
/* 添加动画效果 */
.fixed {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 