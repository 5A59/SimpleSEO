<template>
  <div class="relative inline-block">
    <button 
      @click="toggleDropdown" 
      class="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition px-3 py-2 rounded-md"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      aria-label="切换语言"
    >
      <span class="mr-1">{{ currentLanguageLabel }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- 下拉菜单 -->
    <div 
      v-show="isOpen" 
      class="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700"
    >
      <a 
        v-for="lang in availableLanguages" 
        :key="lang.code" 
        @click="selectLanguage(lang.code)"
        class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        :class="{ 'font-semibold': currentLanguage === lang.code }"
      >
        {{ lang.label }}
      </a>
    </div>
    
    <!-- 点击其他区域关闭下拉菜单 -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalePath, useSwitchLocalePath } from '#i18n'

const route = useRoute()
const router = useRouter()
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const isOpen = ref(false)

// 修改为使用i18n的可用语言
const availableLanguages = computed(() => {
  return locales.value.map(l => ({
    code: l.code,
    label: l.name
  }))
})

// 当前语言标签
const currentLanguageLabel = computed(() => {
  const lang = availableLanguages.value.find(lang => lang.code === locale.value)
  return lang ? lang.label : '中文'
})

// 检测当前路径中的语言
onMounted(() => {
  detectCurrentLanguage()
  
  // 添加Escape键监听
  document.addEventListener('keydown', handleEscKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey)
})

// 检测当前URL中的语言
const detectCurrentLanguage = () => {
  const path = route.path
  
  // 检查路径是否以/zh/等非默认语言前缀开始
  if (path.startsWith('/zh/')) {
    locale.value = 'zh'
  } else if (path.startsWith('/en/')) {
    // 如果以/en/开始 (虽然使用prefix_except_default策略时这不太可能)
    locale.value = 'en'
  } else {
    // 根路径或其他路径，使用默认语言(英文)
    locale.value = 'en'
  }
}

// 切换下拉菜单显示状态
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// 按ESC关闭下拉菜单
const handleEscKey = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

// 选择语言
const selectLanguage = async (langCode) => {
  if (langCode !== locale.value) {
    // 获取当前路由对应的新语言路径
    const newPath = switchLocalePath(langCode)
    
    // 设置新语言
    await setLocale(langCode)
    
    // 关闭下拉菜单
    isOpen.value = false
    
    // 导航到新路径
    if (newPath) {
      await navigateTo(newPath)
    } else {
      // 如果没有获取到新路径，尝试刷新页面使语言设置生效
      window.location.reload()
    }
  } else {
    // 如果点击当前已经选择的语言，只关闭菜单
    isOpen.value = false
  }
}
</script> 