<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// 定义目录项类型
interface TocItem {
  id: string;
  title: string | null;
  level: number;
}

interface StructuredTocItem {
  id: string;
  title: string | null;
  children: TocItem[];
  expanded: boolean;
}

// 获取目录
const toc = ref<TocItem[]>([])
// 结构化的目录（使用ref而不是computed，这样才能修改其中的状态）
const structuredToc = ref<StructuredTocItem[]>([])

onMounted(() => {
  // 获取页面中的标题元素
  const headings = document.querySelectorAll('article h2, article h3')
  toc.value = Array.from(headings).map((element) => {
    const id = element.id
    const title = element.textContent
    const level = element.tagName === 'H2' ? 2 : 3
    return { id, title, level }
  })
  
  // 构建结构化目录
  buildStructuredToc()
})

// 构建结构化目录的方法
const buildStructuredToc = () => {
  const result: StructuredTocItem[] = [];
  let currentParent: StructuredTocItem | null = null;
  
  toc.value.forEach(item => {
    if (item.level === 2) {
      // 这是一个h2标题，创建新的父节点
      currentParent = {
        id: item.id,
        title: item.title,
        children: [],
        expanded: false // 默认折叠状态
      };
      result.push(currentParent);
    } else if (item.level === 3 && currentParent) {
      // 这是一个h3标题，添加到当前父节点的children中
      currentParent.children.push(item);
    }
  });
  
  structuredToc.value = result;
}

// 控制移动端目录显示
const showTocMobile = ref(false)

// 切换h2下的h3显示状态
const toggleExpand = (index: number) => {
  if (structuredToc.value[index]) {
    structuredToc.value[index].expanded = !structuredToc.value[index].expanded;
  }
};
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <!-- 移动端的目录切换按钮 -->
    <button 
      @click="showTocMobile = !showTocMobile" 
      class="md:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
      aria-label="目录"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>

    <!-- 侧边目录导航 - 桌面版 -->
    <div class="hidden md:block md:w-64 lg:w-72 shrink-0 h-screen sticky top-16">
      <div class="p-4 h-full overflow-y-auto">
        <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">{{ $t('toc.title') }}</h2>
        <nav>
          <ul class="space-y-1">
            <li v-for="(section, index) in structuredToc" :key="section.id" class="mb-2">
              <div class="flex items-center justify-between">
                <a 
                  :href="`#${section.id}`" 
                  class="block py-1.5 px-3 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white flex-grow"
                >
                  {{ section.title }}
                </a>
                <!-- 只有当有子项时才显示折叠按钮 -->
                <button 
                  v-if="section.children.length > 0"
                  @click="toggleExpand(index)" 
                  class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ml-2 p-1 focus:outline-none"
                  :aria-label="section.expanded ? '折叠' : '展开'"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 transition-transform" 
                    :class="{ 'rotate-180': section.expanded }"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <!-- 子项列表，根据expanded状态显示/隐藏 -->
              <ul v-if="section.expanded" class="mt-1 ml-4 space-y-1">
                <li v-for="child in section.children" :key="child.id">
                  <a 
                    :href="`#${child.id}`" 
                    class="block py-1 px-3 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {{ child.title }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- 移动端目录抽屉 -->
    <div 
      v-if="showTocMobile" 
      class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="showTocMobile = false"
    >
      <div 
        class="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-800 p-4 overflow-y-auto"
        @click.stop
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white">{{ $t('toc.title') }}</h2>
          <button @click="showTocMobile = false" class="text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- 移动端目录内容，与桌面版保持一致 -->
        <nav>
          <ul class="space-y-1">
            <li v-for="(section, index) in structuredToc" :key="section.id" class="mb-2">
              <div class="flex items-center justify-between">
                <a 
                  :href="`#${section.id}`" 
                  class="block py-1.5 px-3 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white flex-grow"
                  @click="showTocMobile = false"
                >
                  {{ section.title }}
                </a>
                <button 
                  v-if="section.children.length > 0"
                  @click="toggleExpand(index)" 
                  class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ml-2 p-1 focus:outline-none"
                  :aria-label="section.expanded ? '折叠' : '展开'"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 transition-transform" 
                    :class="{ 'rotate-180': section.expanded }"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <ul v-if="section.expanded" class="mt-1 ml-4 space-y-1">
                <li v-for="child in section.children" :key="child.id">
                  <a 
                    :href="`#${child.id}`" 
                    class="block py-1 px-3 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                    @click="showTocMobile = false"
                  >
                    {{ child.title }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="flex-1 max-w-3xl mx-auto">
      <article class="prose prose-blue dark:prose-invert lg:prose-lg w-full max-w-none">
        <ContentRenderer
          v-if="page"
          :value="page"
        />
      </article>
    </div>
  </div>
</template>

<style>
.prose h2 {
  scroll-margin-top: 6rem;
  margin-top: 2rem;
}

.prose h3 {
  scroll-margin-top: 6rem;
  margin-top: 1.5rem;
}

.prose p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose pre {
  background-color: #f8f9fa;
  border-radius: 0.375rem;
  padding: 1rem;
}

.dark .prose pre {
  background-color: #1e293b;
}

.prose img {
  border-radius: 0.375rem;
  margin: 1.5rem 0;
}

.prose a {
  text-decoration: none;
  border-bottom: 1px dotted;
}

.prose a:hover {
  border-bottom: 1px solid;
}

.prose blockquote {
  border-left-color: #2563eb;
  background-color: #f8fafc;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.dark .prose blockquote {
  background-color: #1e293b;
}

.prose ul, .prose ol {
  padding-left: 1.5rem;
}
</style>
