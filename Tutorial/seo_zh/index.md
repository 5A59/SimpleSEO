# 懒人SEO

## 教程宗旨

本教程的目的是，看完以后照着做，你可以把网站的 SEO 做到 80 分，即便你不知道为什么，甚至不用你知道 SEO 是什么。

所以本教程不会告诉你什么是 SEO，也不会教你 SEO 的理论知识，只会告诉你怎么做。

俗话说，授人以鱼不如授人以渔，而本教程，只会授人以鱼，至于"渔"，你可以在很多地方找到。

看之前也请你记住，这是"术"，不是"道"。

本教程全部来源于 Ahrefs SEO 教程，可以认为是原教程的蒸馏版。

这里是 Ahrefs SEO 教程原版，如果有时间，推荐看看：https://ahrefs.com/blog/zh/how-do-search-engines-work/

如果你准备好了，开始吧。

## 目录
* [极速版](#极速版)
* [详细版](#详细版)
* [1、找到关键词](#1找到关键词-1)
* [2、SEO 内容怎么写](#2seo-内容怎么写)
* [3、页面 SEO](#3页面-seo)
* [4、外部链接](#4外部链接)
* [5、其他优化](#5其他优化)
* [6、SEO 工具](#6seo-工具)

## 极速版

### 0、网站一定要做成静态网页或者后端渲染

很多新手可能会忽略，最后发现做了SEO但是没效果。

**为什么？** 

因为搜索引擎爬虫（比如 Googlebot）可以直接读取静态网页或后端渲染生成的 HTML 内容，更容易抓取和理解你的网页。

而一些用 JavaScript 在浏览器里才生成内容的网站（客户端渲染），爬虫需要花更多时间，甚至谷歌会不会运行这些js代码还不确定，影响收录和排名。

同时，静态或后端渲染的网页通常加载更快，用户体验更好，这也是 Google 看重的点。

建议使用 next.js、nuxt.js 等框架，帮你做了很多 SEO 的工作。

### 1、找到关键词

1. 想几个跟你的业务/网站相关的词 (比如这个网站是 SEO 教程相关的，就想"SEO"、"关键词研究"、"页面优化"等)。
2. 使用关键词研究工具（比如 Ahrefs 的 Free Keyword Generator，Google 的 Keyword Planner，Semrush 等等），找到更多相关的词。
3. 挑一些你觉得靠谱的词记下来。
4. 让GPT帮你找到更多关键词。

选词要点：
* 关键词要跟你的业务/网站相关。
* 关键词要能带来流量。
* 关键词要有一定的搜索量，太冷门的关键词就算了。
* KD（关键词难度）越低越好，越低说明竞争越小，越容易排名。

### 2、写内容

1. **看对手:** Google 搜你的词，看排前面的内容**写了啥 (类型、格式、角度)**。
2. **对齐意图:** 满足用户搜索这个词时想看的信息 (类型、格式、角度)。
3. **写干货:** 分享**真经验**，解决用户问题，展示自己的专业和经验。
4. **求全面:** 覆盖用户可能想知道的**相关点**，尽量比对手更全一点。
5. **加亮点:** 提供点**别人没有**的独特信息或技巧。
6. **易阅读:** 用**短句、分段、加图**，检查错别字。
7. **勤更新:** 一定要及时更新过时信息。

### 3、优化页面

1. **元标签 & 标题:**
 * **页面标题 (Title):** 吸引人、包含关键词、长度适中 (约 30 字)。(例: `<title>页面 SEO 终极指南 (2024)</title>`)
 * **H1 标签:** 每页用一个H1，概括页面主题。(例: `<h1>页面 SEO 终极指南</h1>`)
 * **H2-H6 标签:** 用于内容副标题，组织结构。
 * **元描述 (Meta Description):** 描述页面内容、吸引点击、包含关键词、长度适中 (约 80 字)。(例: `<meta name="description" content="学习页面 SEO 的所有知识，从关键词优化到技术细节，提升你的网站排名！">`)

2. **链接:**
 * **内部链接:** 指向自己网站内其他相关页面，最好做成金字塔结构，不要留下孤岛页面，否则谷歌找不到它。(例: `<a href="/keyword-research">学习关键词研究</a>`)
 * **外部链接:** (如果需要) 指向权威信息来源或有用的外部资源。(例: `<a href="https://example.com" rel="nofollow">参考资料</a>`)

3. **图片:**
 * **文件名:** 使用描述性名称。(例: `page-seo-checklist.jpg`)
 * **替代文本 (Alt Text):** 添加描述图片内容的 Alt 文本。(例: `<img src="..." alt="页面 SEO 检查清单表格截图">`)
 * **压缩:** 压缩图片文件大小，加快加载速度。

4. **网址:**
 * **简洁描述:** URL 路径短、易懂，最好包含关键词 (英文用 `-` 分隔)。(例: `/page-seo-guide/`)

5. **体验:**
 * **页面速度 (Core Web Vitals):** 优化加载速度。
 * **移动端友好:** 确保在手机上体验良好。
 * **HTTPS:** 使用 HTTPS 加密。
 * **无干扰:** 避免过多弹窗广告。
 * **(可选) 特色片段优化:** 针对性地提供简明扼要的答案。
 * **(可选) Schema 标记:** 添加结构化数据帮助 Google 理解内容。

### 4、加外链
1.  **写好内容:** 努力把内容写得**特别棒、特别有用**，让别人看了就想引用你的文章或推荐你的工具。(这是最核心、最持久的方法)
2.  **提交外链:** 把你的网站提交到**几个最重要、最权威的行业目录网站**上 (比如到航站等等)。
3.  **写投稿:** 如果你喜欢写作，可以尝试给和你主题相关的其他网站**写客座博客**，文章里可以自然地放一个指向你网站的链接。
4.  **千万别买链接:** Ahrefs **强烈不建议**购买链接，风险极高，可能浪费钱还导致网站被 Google 惩罚。

### 5、其他
1.  **查收录:** 去 [Google Search Console](https://search.google.com/search-console/about) (免费，后面简称 GSC)，用 "网址检查" 功能看看你的重要页面 Google 能不能找到。
2.  **修死链:** 如果你改过网址或删过页面，用 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (免费，后面简称 AWT) 找到那些变成 404 但以前有外部链接的页面，把它们用 301 重定向到新页面。
3.  **适配多语言:** 如果你的网站竞争很大，尝试适配多语言，很多网站只在英文上竞争，你适配多语言后，可以获得更多流量。
4.  **创建Sitemap:** 创建一个 `sitemap.xml` 文件，列出你网站上所有重要的页面，并提交给 Google Search Console，帮助 Google 更快、更全面地发现你的内容。
    *   **示例 (sitemap.xml 基础结构):**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
           <url>
              <loc>http://www.example.com/page1.html</loc>
              <lastmod>2024-01-01</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
           </url>
           <url>
              <loc>http://www.example.com/page2.html</loc>
           </url>
        </urlset>
        ```
5.  **Hreflang (多语言标签):** 如果你的网站有多种语言或针对不同地区的内容，使用 `hreflang` 标签告诉 Google 每个页面的不同语言/地区版本，避免内容重复问题，确保向正确的用户展示正确的版本。
    *   **示例 (HTML `<head>` 中):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(注: `x-default` 用于指定默认或无特定语言区域的版本)*
6.  **Robots.txt (爬虫协议):** 在网站根目录放一个 `robots.txt` 文件，告诉搜索引擎爬虫哪些页面或目录你不希望它们访问或收录（比如后台管理页面、测试页面等）。
    *   **示例 (robots.txt 内容):**
        ```
        User-agent: *          # 应用于所有爬虫
        Disallow: /admin/       # 禁止访问 /admin/ 目录
        Disallow: /private.html # 禁止访问 /private.html 文件
        Allow: /public/        # 明确允许访问 /public/ 目录 (如果上级目录被禁止)

        User-agent: Googlebot   # 只应用于 Google 爬虫
        Disallow: /tmp/         # 禁止 Google 爬虫访问 /tmp/ 目录
        Sitemap: http://www.example.com/sitemap.xml # 指明 Sitemap 位置
        ```
7.  **Canonical (规范标签):** 如果你的网站上有内容相同或高度相似的多个页面（例如带参数的 URL），使用 `canonical` 标签指定哪个是"官方"版本，避免搜索引擎将它们视为重复内容而分散权重。
    *   **示例 (HTML `<head>` 中):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(注: 即使在 `http://www.example.com/product-page?ref=banner` 这个页面上，也要指向不带参数的规范 URL)*
8.  **Schema Markup (结构化数据):** 在页面代码中添加 Schema 标记，用一种标准化的格式向 Google 解释页面内容的含义（比如这是食谱、产品、FAQ），有助于 Google 理解内容，并可能在搜索结果中显示更丰富的样式（如评分、价格范围等），提升点击率。
    *   **示例 (JSON-LD 格式，放在 `<script>` 标签中):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "什么是 SEO？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (搜索引擎优化) 是指通过优化网站内容和技术等方面，提高网站在搜索引擎（如 Google）自然搜索结果中排名的过程。"
            }
          },{
            "@type": "Question",
            "name": "SEO 需要多长时间见效？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO 的效果显现时间因网站基础、竞争程度、投入资源等多种因素而异，通常需要数周到数月甚至更长时间才能看到明显效果。"
            }
          }]
        }
        ```

## 详细版

## 1、找到关键词

> 极速版 (10分钟搞定):
> 1. 想几个跟你的业务/网站相关的词 (比如你是卖咖啡的，就想"咖啡豆"、"手冲咖啡")。
> 2. 打开 [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (免费的!)，把你想到的词输进去。
> 3. 看它给出的"Phrase Match"和"Questions"列表，挑一些你觉得靠谱的词记下来。
> 4. 让GPT帮你找到更多关键词。

---

### 详细操作

#### 第一步：想"种子关键词"

"种子关键词"就是最基础、最核心的词。别想太复杂，问自己几个问题：

* 别人会怎么在网上搜你的东西？(例如："便宜的咖啡豆"、"怎么做手冲咖啡")
* 你的竞争对手网站上都用了哪些词？
* 如果你是顾客，你会搜什么？

**例子：** 
假设你开了一个卖咖啡豆的网店，你的种子关键词可能包括：
* 咖啡豆
* 阿拉比卡咖啡豆
* 手冲咖啡
* 咖啡机
* 买咖啡豆

**小技巧：** 

实在想不出来？可以试试问 ChatGPT (或者AI)，让它帮你头脑风暴一些和你的业务相关的词。

把你想到的都列下来，越多越好。

#### 第二步：用免费工具找到更多的关键词

光靠拍脑袋想不够多，用工具帮你找更多相关的词，不需要全用，选几个适合自己的就行。

**工具 1：Ahrefs Free Keyword Generator** (推荐，完全免费)

1. 打开 [Ahrefs Free Keyword Generator](https://ahrefs.com/free-keyword-generator)。
2. 把你刚才想到的"种子关键词"一个一个输进去。
3. 选择你的目标国家 (比如：中国)。
4. 点击"Find keywords"。

你会看到一堆相关的关键词建议，重点关注这两类：

* **Phrase Match (词组匹配):** 包含你种子词的词组。比如搜"咖啡豆"，可能会看到"有机咖啡豆"、"云南咖啡豆"。
* **Questions (问题):** 包含你种子词的问句。比如搜"手冲咖啡"，可能会看到"手冲咖啡需要哪些工具"、"手冲咖啡怎么做才好喝"。

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*图片示例：使用像 Ahrefs 这样的关键词工具查找"aeropress"相关的关键词，可以看到月搜索量等信息。免费工具界面类似，会提供关键词列表。*

**工具 2：Google 搜索框 & 相关搜索**

1. 打开 Google 搜索。
2. 输入你的种子关键词，看看搜索框自动弹出的建议 (Google Suggest)。这些都是大家经常搜的。
3. 搜完之后，拉到页面最下面，看"相关搜索"部分。这里也是找相关词的好地方。

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**工具 3：Answer The Public**

1. 打开 [Answer The Public](https://answerthepublic.com/)。
2. 输入你的种子关键词 (建议用英文，效果可能更好)。
3. 选择国家/语言。
4. 它会生成一堆围绕你的关键词的问题、介词短语、比较等，帮你了解用户具体在搜什么疑问。免费版有每日使用次数限制。

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**工具 4：Google Trends** (看热度，找趋势)

1. 打开 [Google Trends](https://trends.google.com/)。
2. 输入你的种子关键词。
3. 可以看这个词的搜索热度变化趋势，发现季节性变化或突然爆火的话题。
4. 还可以看相关的查询，找到人们同时在搜的其他热门词汇。

**工具 5: ChatGPT**

1. 打开 [ChatGPT](https://chat.openai.com/) 或其他类似的 AI 工具。
2. 让它基于你的种子关键词生成更多相关的关键词、主题或问题。例如，你可以问："我是卖咖啡豆的，请给我一些人们可能会搜索的相关关键词或问题"。

**工具 6：Google Keyword Planner** (免费，但需要 Google Ads 账号)

如果你有 Google Ads 账号 (没有可以免费注册一个，投放广告就不用花钱)，可以用 Keyword Planner。

1. 登录 Google Ads，找到"工具与设置" -> "规划" -> "关键字规划师"。
2. 选择"发现新关键字"。
3. 输入你的种子关键词。

它会提供搜索量估算和更多关键词建议。不过免费版显示的搜索量是一个范围，没那么精确。

#### 第三步：去论坛/社区/贴吧/问答网站逛逛

* **逛逛相关论坛/社区/贴吧/问答网站:** 比如你是搞咖啡的，就去咖啡爱好者论坛、知乎相关话题、豆瓣小组看看大家都在问什么、讨论什么、用什么词。
* **看看评论区:** 你的竞争对手网站、相关产品的电商页面、社交媒体帖子的评论区，也可能藏着用户真实的搜索词。

**例子：** 在一个咖啡论坛里看到有人问"不用滤纸怎么做手冲"，这可能就是一个你之前没想到的好关键词！

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### 关键词工具包

* **工具包:**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/free-keyword-generator) (主力，免费)
 * Google 搜索框 & 相关搜索 (辅助，免费)
 * [Answer The Public](https://answerthepublic.com/) (找问题，免费，有日限)
 * [Google Trends](https://trends.google.com/) (看趋势，免费)
 * [ChatGPT](https://chat.openai.com/) (AI brainstorm，免费)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (需要 Ads 账号，免费)
 * **(进阶可选) [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools):** 功能更强的免费工具集，但需要验证你拥有自己的网站。可以看到自己网站目前有哪些关键词排名，以及发现低竞争度关键词等。

* **模板 (我的种子关键词):**
 ```
 我的业务/网站主题：_________

 可能的种子关键词：
 1. _________
 2. _________
 3. _________
 4. _________
 5. _________
 ... (越多越好)
 ```

## 2、SEO 内容怎么写

> 极速版（3分钟搞定）
> 1. **看对手:** Google 搜你的词，看排前面的内容**写了啥 (类型、格式、角度)**。
> 2. **对齐意图:** 满足用户搜索这个词时想看的信息 (类型、格式、角度)。
> 3. **写干货:** 分享**真经验**，解决用户问题，展示自己的专业和经验。
> 4. **求全面:** 覆盖用户可能想知道的**相关点**，尽量比对手更全一点。
> 5. **加亮点:** 提供点**别人没有**的独特信息或技巧。
> 6. **易阅读:** 用**短句、分段、加图**，检查错别字。
> 7. **勤更新:** 一定要及时更新过时信息。

---

### 详细操作

#### 步骤 1: 搞懂用户想看啥 (分析搜索意图)**

* **目标:** 知道搜这个词的人想看什么类型、格式、角度的内容。
* **工具:** Google 搜索结果第一页。
* **动作:**
 1. 搜你的关键词。
 2. 看排名前 5-10 的结果：
  * **类型:** 是文章？产品页？视频？
  * **格式:** 是教程？清单？评测？
  * **角度:** 是"入门"？"便宜"？"最新"？
 3. **模仿:** 你的内容类型、格式、角度要和主流保持一致。

**步骤 2: 写你懂的 (展示经验 E-E-A-T)**

* **目标:** 让内容可信，展示你确实懂这个。
* **动作:**
 * **写你亲身经历或擅长的。**
 * 用"我"分享经验和看法。
 * (如果适用) 简单提下你的背景或成果。

**步骤 3: 覆盖全面 (内容详尽)**

* **目标:** 回答用户关于这个主题的多数疑问。
* **工具:** 关键词工具 (看相关问题)、Google 相关搜索、竞争对手文章大纲。
* **动作:**
 1. 用工具找这个关键词下的相关问题/长尾词。
 2. 看排名靠前文章的小标题，找他们覆盖的点。
 3. 把你找到的、认为重要的点都加到你的内容里。
 * **注意:** 全面不等于啰嗦，根据用户意图写。

**步骤 4: 来点特别的 (独特性)**

* **目标:** 给用户一个看你文章而不是别人的理由。
* **动作:**
 * 分享一个**独特的技巧、经验总结或观点**。
 * 提供一个**别人没有的小资源** (如模板、清单)。
 * (进阶) 做个**小实验或数据分享**。

**步骤 5: 让阅读变轻松 (可读性)**

* **目标:** 用户看得舒服，愿意读下去。
* **动作:**
 * **短句，多分段。**
 * 用**小标题**分隔内容。
 * **配图**说明或缓解疲劳。
 * 用**加粗、列表**突出重点。

**步骤 6: 保持更新**

* **目标:** 避免内容过时导致排名下降。
* **动作:**
 * **定期 (如每年) 检查:** 信息还准吗？链接还有效吗？
 * **更新内容:** 修改过时信息，补充新内容。
 * **标注更新日期:** 让用户知道这是最新的。

---

## 3、页面 SEO

> 极速版
> 1. **元标签 & 标题:**
> * **页面标题 (Title):** 吸引人、包含关键词、长度适中 (约 30 字)。(例: `<title>页面 SEO 终极指南 (2024)</title>`)
> * **H1 标签:** 每页用一个H1，概括页面主题。(例: `<h1>页面 SEO 终极指南</h1>`)
> * **H2-H6 标签:** 用于内容副标题，组织结构。
> * **元描述 (Meta Description):** 描述页面内容、吸引点击、包含关键词、长度适中 (约 80 字)。(例: `<meta name="description" content="学习页面 SEO 的所有知识，从关键词优化到技术细节，提升你的网站排名！">`)
>
> 2. **链接:**
> * **内部链接:** 指向自己网站内其他相关页面，最好做成金字塔结构，不要留下孤岛页面，否则谷歌找不到它。(例: `<a href="/keyword-research">学习关键词研究</a>`)
> * **外部链接:** (如果需要) 指向权威信息来源或有用的外部资源。(例: `<a href="https://example.com" rel="nofollow">参考资料</a>`)
>
> 3. **图片:**
> * **文件名:** 使用描述性名称。(例: `page-seo-checklist.jpg`)
> * **替代文本 (Alt Text):** 添加描述图片内容的 Alt 文本。(例: `<img src="..." alt="页面 SEO 检查清单表格截图">`)
> * **压缩:** 压缩图片文件大小，加快加载速度。
>
> 4. **网址:**
> * **简洁描述:** URL 路径短、易懂，最好包含关键词 (英文用 `-` 分隔)。(例: `/page-seo-guide/`)
>
> 5. **体验:**
> * **页面速度 (Core Web Vitals):** 优化加载速度。
> * **移动端友好:** 确保在手机上体验良好。
> * **HTTPS:** 使用 HTTPS 加密。
> * **无干扰:** 避免过多弹窗广告。
> * **(可选) 特色片段优化:** 针对性地提供简明扼要的答案。
> * **(可选) Schema 标记:** 添加结构化数据帮助 Google 理解内容。

---

### 详细操作

#### 第一步：让搜索引擎和用户"看懂"你的页面

* **匹配搜索意图:**
 * **动作:** Google 搜你的关键词，看排名前 5-10 的结果。注意他们的**内容类型** (文章/产品页/?)、**内容格式** (教程/清单/评测/?) 和**内容角度** ("入门"/"便宜"/"最新"?)。
 * **目标:** 你的内容要和他们保持一致，给用户他们想看的东西。

 ![图片示例：搜索 "avocado seed" (鳄梨种子)，结果多是教你怎么种的指南文章，角度是"简单、容易"，说明用户是初学者。](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *图片示例：搜索 "avocado seed" (鳄梨种子)，结果多是教你怎么种的指南文章，角度是"简单、容易"，说明用户是初学者。*

* **写好"标题党" (Title Tag):**
 * **动作:**
  * 包含核心关键词。
  * 长度最好别超过 70 个字符 (大概 30 个汉字)，不然会显示不全。
  * 清晰、有吸引力，让人想点。
  * 别搞纯粹的"标题党"，要和内容一致。
  * 如果内容讲究时效性 (如教程)，可以加上年份。
  * **工具:** 可以让 ChatGPT 帮你头脑风暴几个标题。用 Ahrefs Webmaster Tools (AWT) 的 Site Audit 检查标题是否太长或缺失。

 ![图片示例：一个好的标题例子](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

* **写好"门面" (Meta Description):**
 * **动作:**
  * 这是搜索结果里标题下面的那段描述文字，虽然不直接影响排名，但影响点击率。
  * 长度最好不超过 160 字符 (大概 80 个汉字)。
  * 可以看作是标题的补充，放一些标题里放不下的卖点。
  * 包含关键词 (Google 会标黑)。
  * 用主动语态，直接告诉用户你能提供什么。
  * **工具:** 可以让 ChatGPT 帮你写几个版本。用 Ahrefs Webmaster Tools (AWT) 的 Site Audit 检查是否缺失或太长。
 ![图片示例：一个好的 Meta 描述示例](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

* **起个好"网址名" (URL):**
 * **动作:**
  * URL 路径（域名后面的部分）要短、易懂。
  * 包含核心关键词 (用英文或拼音，单词间用 `-` 连接)。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *图片示例：`domain.com/learn-seo` 比 `domain.com/p=123` 更好*

* **内容要有"骨架" (Heading Tags: H1-H6):**
 * **动作:**
  * 用 H1-H6 标签组织内容，形成清晰的层级结构，方便阅读。
  * **H1 标签:** 每页只用一个，通常和页面标题 (Title Tag) 意思一致或接近。
  * **H2-H6 标签:** 用作各个部分的副标题。
  * **工具:** 用 Ahrefs Webmaster Tools (AWT) 的 Site Audit 检查 H1 标签是否缺失或重复。

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *图片示例：使用 H 标签创建视觉层次*

#### 第二步：写"有料"且"独特"的内容

* **内容要"全" (Comprehensive):**
 * **动作:**
  * 确保你的内容覆盖了用户搜索这个关键词时可能想了解的主要方面和问题。
  * 看看 Google 搜索结果前几名的文章都讲了哪些小标题 (H2, H3)。
  * 看看 Google 搜索结果页底部的"相关搜索"。
  * **工具:** (可选) 用 Ahrefs Webmaster Tools (AWT) 的 Site Explorer 查看你的网站和竞争对手网站都为哪些共同的关键词带来了流量 (Content Gap 功能)，找到你可以补充的子主题。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *图片示例：分析对手文章，发现他们提到了"取消订阅"作为省钱方法，你的文章也可以考虑加入这点。*

* **内容要"特别" (Unique):**
 * **动作:**
  * 别只是重复别人的话，提供一些独特的价值。
  * 可以是：你独到的见解或经验总结、一个别人没有的小技巧、一个原创的案例分析、一个免费的模板或清单。
  * 目标是给用户一个"收藏"或"分享"你文章的理由。

* **展示你的"专业"或"经验" (E-E-A-T):**
 * **动作:**
  * 如果你写的是专业领域 (如医疗、金融) 或需要亲身体验 (如产品评测) 的内容，要展示你的专业性或真实经验。
  * **方法:** 清晰说明信息来源 (引用、链接)，提供作者背景介绍 (链接到作者简介页)，分享你的操作过程或使用体验 (配图、视频)，确保内容事实准确。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *图片示例：产品评测中展示你实际使用的经验。*

#### 第三步：优化细节，提升体验

* **优化图片 (Image SEO):**
 * **动作:**
  * **文件名 (File Name):** 用描述性的词语命名图片文件，用 `-` 分隔英文单词或拼音 (如 `black-puppy-play-ball.jpg` 或 `heise-xiaogou-wanqiu.jpg`)。
  * **替代文本 (Alt Text):** 这是给搜索引擎和视障用户看的图片描述。在 HTML 的 `<img>` 标签里添加 `alt` 属性，用简洁的语言描述图片内容，可以自然地包含关键词。 (例如: `<img src="小狗玩球.jpg" alt="一只黑色拉布拉多小狗在草地上玩红色球">`)
  * **压缩图片 (Compress Images):** 图片太大加载会慢。使用工具压缩图片大小，同时尽量保持清晰度。
  * **工具:** 用 Ahrefs Webmaster Tools (AWT) 的 Site Audit 检查图片是否缺少 Alt 文本。用 TinyPNG 或 iLoveIMG 等在线工具压缩图片。
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *图片示例：好的 Alt 文本示例*

* **内部链接 (Internal Links):**
 * **动作:**
  * 在你的文章中，链接到你网站上其他相关的文章或页面。
  * 这有助于用户发现更多内容，也帮助搜索引擎理解你的网站结构和页面关系。
  * **工具:** 用 Ahrefs Webmaster Tools (AWT) 的 Site Audit 中的 "Internal link opportunities" 功能，找到可以添加内链的地方。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *图片示例：AWT 找到的内部链接机会，提示你可以在 A 页面链接到 B 页面。*

* **外部链接 (External Links):**
 * **动作:**
  * 在合适的地方，链接到其他高质量、相关的外部网站作为参考或信息来源。
  * 例如，引用数据时链接到原始报告，推荐工具时链接到官网。
  * **注意:** 如果是广告或赞助链接，要使用 `rel="nofollow"` 或 `rel="sponsored"` 属性告诉搜索引擎。

* **(进阶) 页面体验 (Page Experience):**
 * **动作:**
  * 确保你的网站：
   * 加载速度快 (Core Web Vitals)。
   * 在手机上浏览体验好 (Mobile-Friendly)。
   * 使用 HTTPS 加密 (安全)。
   * 没有烦人的弹窗广告 (No intrusive interstitials)。
  * 这些通常是全站范围的优化，但要保证新页面也符合要求。
  * **工具:** 使用 Google PageSpeed Insights 测试页面速度和体验。在 Google Search Console 查看相关报告。
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *图片示例：Google 的页面体验信号*

* **(进阶) 争取"特殊展示位" (Featured Snippets & Rich Snippets):**
 * **动作:**
  * **特色片段 (Featured Snippet):** Google 有时会在搜索结果最顶端显示一个直接回答问题的框。如果你的页面已经排在前几名，并且内容里有对某个问题的直接、简洁的回答 (格式最好参考已有的 Snippet，如列表、段落)，就有机会被选中。
  * **富媒体片段 (Rich Snippet):** 通过在页面添加 Schema 标记 (一种结构化数据代码)，告诉 Google 你的内容是什么类型 (比如菜谱、FAQ、产品信息)，有时 Google 会在搜索结果中显示更丰富的信息 (如评分、价格、步骤)。
  * **工具:** 用 Google Search Console 查看哪些词你的排名靠前且 Google 显示了特色片段。用 Schema.dev 的 Schema Generator 生成 Schema 代码。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *图片示例：带有评分和评论数量的富媒体片段*

#### 第四步：持续关注和更新

* **监控效果:**
 * **动作:** 关注你的目标关键词排名变化。
 * **工具:** 使用 Google Search Console 查看你的页面在 Google 搜索中的表现 (展示次数、点击次数、排名)。

* **更新内容:**
 * **动作:** SEO 不是一次性工作。定期 (比如一年) 回顾你的内容，检查信息是否过时，链接是否失效，是否有新的信息可以补充。更新内容有助于保持排名。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *图片示例：更新内容后带来的流量增长*

---

### 页面 SEO 工具包

* **工具包:**
 * [Google Search](https://www.google.com/) (看意图, 看对手)
 * [ChatGPT](https://chat.openai.com/) (想标题/描述点子)
 * [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (免费检查 H1, 标题, 描述, Alt文本, 找内链机会, 看关键词差距)
 * [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (在线图片压缩)
 * [Google PageSpeed Insights](https://pagespeed.web.dev/) (测页面速度和体验)
 * [Google Search Console](https://search.google.com/search-console/) (监控排名, 体验问题, 看关键词)
 * [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (生成 Schema 代码)

## 4、外部链接

外部链接，也叫反向链接或外链，可以简单理解为**其他网站给你的网站投的"推荐票"**。票越多、越重要，通常对你的 Google 排名越有帮助。

> 极速版
> 1.  **写好内容:** 努力把内容写得**特别棒、特别有用**，让别人看了就想引用你的文章或推荐你的工具。(这是最核心、最持久的方法)
> 2.  **提交外链:** 把你的网站提交到**几个最重要、最权威的行业目录网站**上 (比如到航站等等)。
> 3.  **写投稿:** 如果你喜欢写作，可以尝试给和你主题相关的其他网站**写客座博客**，文章里可以自然地放一个指向你网站的链接。
> 4.  **千万别买链接:** Ahrefs **强烈不建议**购买链接，风险极高，可能浪费钱还导致网站被 Google 惩罚。

---

### 详细操作

#### 什么是外部链接 (外链)？

想象一下，互联网是一个巨大的关系网。当另一个网站 A 在它的页面上放了一个链接，指向你的网站 B，这就形成了一个从 A 到 B 的外部链接。Google 会把这个链接看作是网站 A 给网站 B 的一次"推荐"或"投票"。

通常来说，来自**权威高、相关性强**的网站的"投票"更有分量。

#### 怎么获得外链？(懒人适用版)

获得外链的方法很多，但根据懒人原则，我们聚焦在最核心和风险最低的方法上：

##### 1. 让别人主动链接你 (赚取链接 - Earn Links)

这是最理想、最被 Google 鼓励的方式，虽然"懒人"可能觉得不那么"快"，但效果最持久。

* **核心动作:** 创造出**高质量、有独特价值、值得被引用**的内容。这可以是：
 * 一个非常有用的免费在线工具或计算器。
 * 一份深入的、包含独家数据的行业研究报告。
 * 一篇极其详尽、解决用户痛点的终极指南或教程。
 * 一个新颖的观点或独特的资源列表。
* **原理:** 当你的内容足够好，其他网站的作者在写相关主题时，就可能会发现你的内容并主动链接过来作为参考或推荐。
* **懒人要点:** 这部分和第二节"SEO 内容怎么写"紧密相关。把内容写好，就是最好的"赚取"链接的基础。

##### 2. 自己"加"一点链接 (添加链接 - Add Links)

这种方法比较容易操作，但效果有限，要适度。

* **核心动作:**
 * **行业目录:** 如果你的业务有实体或明确的行业归属 (如本地商家、软件公司)，找到几个**最知名、最权威**的行业垂直网站或商业目录，提交你的网站信息。例如，餐馆可以提交到 Yelp、TripAdvisor；软件可以提交到 Capterra、G2 等。(只做最重要那几个！)
 * **相关社区/论坛/问答:** 偶尔在你**真正参与并熟悉的**行业论坛、贴吧、知乎问答等社区，如果你的某个网页内容确实能帮助回答某个问题或补充某个讨论，可以**自然地**留下链接。**千万不要去不相关的社区发垃圾广告链接！** 这样做很可能被删除，甚至损害声誉。
* **懒人要点:** 只做几个最相关的就行，别指望靠这个方法大幅提升排名。不要花钱去做批量的目录提交或论坛发帖。

##### 3. "要"一点链接 (请求链接 - Ask for Links)

直接向其他网站请求链接，成功率通常很低，因为别人为什么要帮你呢？但有几种相对合理的方式：

* **核心动作:**
 * **客座博客 (Guest Blogging):** 这是相对有效的方式。你为其他相关网站**免费写一篇高质量的文章**，作为回报，你可以在文章作者信息或内容中，包含一两个指向你自己网站的链接。
  * **怎么做 (简化版):** 找一些你觉得还不错的、和你主题相关的博客，看看他们是否接受投稿 (通常网站页脚或联系页面会有说明)。先从要求不那么高的博客开始尝试，写一篇你擅长且对他们读者有价值的文章。
 * **图片链接 (Image Link Building):** 如果你网站上有原创的图片、图表被其他网站使用了，但他们没有注明来源是你，你可以礼貌地联系他们，请求添加一个指向你原始图片页面的链接。
* **外展邮件模板:** `web.html` 文件没有提供可以直接复制使用的邮件模板。而且也提到，盲目发邮件请求链接的成功率非常低。如果你要做客座博客，需要根据对方网站的风格和要求，认真撰写你的投稿说明。
* **懒人要点:** 客座博客需要投入时间和精力写作。图片链接建设需要你有原创图片并被别人使用。总体来说，"请求"链接对懒人不太友好。

##### 4. "买"链接？别碰！(Buying Links)

* **核心警告:** `web.html` (代表 Ahrefs 的观点) **明确指出不建议购买链接**。
* **风险:**
 * 很容易买到对 SEO 没有帮助的垃圾链接，浪费钱。
 * 违反 Google 的站长指南，一旦被发现，你的网站可能会受到惩罚，导致排名大幅下降甚至被移除索引。
* **懒人要点:** 这是红线，不要碰。

##### 5. 维护好你已有的链接 (Maintaining Links)

辛辛苦苦获得的链接如果丢失了，那就太可惜了。

* **核心动作:** 检查你网站上是否有页面打不开了 (404 Not Found)，但这些页面以前是有外部链接指向它们的。
* **工具:** 使用免费的 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)。
* **步骤:**
 1. 登录 Ahrefs Webmaster Tools，验证你的网站。
 2. 进入 Site Explorer (网站分析) 工具。
 3. 在左侧菜单选择 "Pages" (页面) -> "Best by links" (按反链数量排序)。
 4. 点击 "HTTP code" 筛选器，选择 "404 not found"。
 5. 查看报告列表。如果发现有 404 页面后面跟着较高的 "Referring domains" (引用域，表示有多少个网站链接到这个页面) 数量，说明这个失效页面曾经很重要。
 6. 找到你网站上与这个失效页面内容最相关的新页面 URL (如果没有完全对应的，首页也可以)。
 7. 设置 **301 重定向**，将这个 404 页面的 URL 永久重定向到你找到的新 URL。这样，指向旧 URL 的链接价值就能传递给新页面了。(如何设置 301 重定向取决于你的网站服务器和平台，你可能需要搜索具体教程，比如 "WordPress 如何设置 301 重定向")。
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *图片说明：使用 Ahrefs Site Explorer 的 Best by links 报告配合 404 过滤器，找到带有外部链接的失效页面 (示例来自 Ahrefs 博客)*
* **懒人要点:** 这是技术活里相对简单且见效快的一个，定期做一次检查很有必要。

---

### 外部链接工具包

* **必备 (免费):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): 查看你自己网站收到的链接，找到带链接的 404 页面进行修复，检查网站技术健康度。
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): 快速查看任何网站 (包括你的竞争对手) 的前 100 个外部链接，了解他们从哪里获得链接。
 * [Google Alerts](https://www.google.com/alerts): 设置与你的品牌名、网站名、核心主题相关的提醒。当网上出现相关新内容时，你会收到邮件通知。这有助于你发现别人提到了你但没加链接的情况 (可以去请求加上)，或是发现新的链接建设机会。


## 5、其他优化

1.  **查收录:** 去 [Google Search Console](https://search.google.com/search-console/about) (免费，后面简称 GSC)，用 "网址检查" 功能看看你的重要页面 Google 能不能找到。
2.  **修死链:** 如果你改过网址或删过页面，用 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (免费，后面简称 AWT) 找到那些变成 404 但以前有外部链接的页面，把它们用 301 重定向到新页面。
3.  **适配多语言:** 如果你的网站竞争很大，尝试适配多语言，很多网站只在英文上竞争，你适配多语言后，可以获得更多流量。
4.  **创建Sitemap:** 创建一个 `sitemap.xml` 文件，列出你网站上所有重要的页面，并提交给 Google Search Console，帮助 Google 更快、更全面地发现你的内容。
    *   **示例 (sitemap.xml 基础结构):**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
           <url>
              <loc>http://www.example.com/page1.html</loc>
              <lastmod>2024-01-01</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
           </url>
           <url>
              <loc>http://www.example.com/page2.html</loc>
           </url>
        </urlset>
        ```
5.  **Hreflang (多语言标签):** 如果你的网站有多种语言或针对不同地区的内容，使用 `hreflang` 标签告诉 Google 每个页面的不同语言/地区版本，避免内容重复问题，确保向正确的用户展示正确的版本。
    *   **示例 (HTML `<head>` 中):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(注: `x-default` 用于指定默认或无特定语言区域的版本)*
6.  **Robots.txt (爬虫协议):** 在网站根目录放一个 `robots.txt` 文件，告诉搜索引擎爬虫哪些页面或目录你不希望它们访问或收录（比如后台管理页面、测试页面等）。
    *   **示例 (robots.txt 内容):**
        ```
        User-agent: *          # 应用于所有爬虫
        Disallow: /admin/       # 禁止访问 /admin/ 目录
        Disallow: /private.html # 禁止访问 /private.html 文件
        Allow: /public/        # 明确允许访问 /public/ 目录 (如果上级目录被禁止)

        User-agent: Googlebot   # 只应用于 Google 爬虫
        Disallow: /tmp/         # 禁止 Google 爬虫访问 /tmp/ 目录
        Sitemap: http://www.example.com/sitemap.xml # 指明 Sitemap 位置
        ```
7.  **Canonical (规范标签):** 如果你的网站上有内容相同或高度相似的多个页面（例如带参数的 URL），使用 `canonical` 标签指定哪个是"官方"版本，避免搜索引擎将它们视为重复内容而分散权重。
    *   **示例 (HTML `<head>` 中):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(注: 即使在 `http://www.example.com/product-page?ref=banner` 这个页面上，也要指向不带参数的规范 URL)*
8.  **Schema Markup (结构化数据):** 在页面代码中添加 Schema 标记，用一种标准化的格式向 Google 解释页面内容的含义（比如这是食谱、产品、FAQ），有助于 Google 理解内容，并可能在搜索结果中显示更丰富的样式（如评分、价格范围等），提升点击率。
    *   **示例 (JSON-LD 格式，放在 `<script>` 标签中):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "什么是 SEO？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (搜索引擎优化) 是指通过优化网站内容和技术等方面，提高网站在搜索引擎（如 Google）自然搜索结果中排名的过程。"
            }
          },{
            "@type": "Question",
            "name": "SEO 需要多长时间见效？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO 的效果显现时间因网站基础、竞争程度、投入资源等多种因素而异，通常需要数周到数月甚至更长时间才能看到明显效果。"
            }
          }]
        }
        ```
---

### 详细操作

#### 第一步：速胜要素 (优先搞定这些)

* **检查页面是否被收录 (Indexability):**
 * **目标:** 确保你想让用户看到的页面，Google 确实能找到并收录进它的数据库。
 * **动作:**
  1. 打开 [Google Search Console](https://search.google.com/search-console/about)。
  2. 使用顶部的 "网址检查" 工具，输入你想检查的页面 URL，看 Google 是否已收录，以及它看到的版本是怎样的。
  3. (或者) 查看左侧菜单的 "覆盖率" 报告，了解整个网站的收录情况，看有没有错误或被排除的页面。
  4. (可选免费工具) 在 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) 中运行 Site Audit (网站诊断)，查看 "Indexability" (可索引性) 报告，它会列出所有无法被索引的页面和原因。
 * **工具:** Google Search Console, Ahrefs Webmaster Tools (Site Audit)

* **回收丢失的链接权重 (Link Reclamation via Redirects):**
 * **目标:** 网站改版、删除页面或更改 URL 后，一些指向旧 URL 的外部链接就失效了 (变成 404 Not Found)。通过重定向，可以把这些链接的价值"捡回来"。
 * **动作:**
  1. 打开 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)。
  2. 进入 Site Explorer (网站分析) 部分 (AWT 免费版提供有限功能，但够用)。
  3. 输入你的域名。
  4. 在左侧菜单找到 "页面" -> "Best by links" (按反链数量排序)。
  5. 添加一个 HTTP 状态过滤器，选择 "404 not found"。
  6. 查看列表，找到那些有很多 "Referring domains" (引用域) 的 404 页面。
  7. 对于每个有价值的 404 页面，找到现在网站上内容最相关的新页面 (或者首页)。
  8. 设置 301 重定向，把旧的 404 URL 指向新的相关页面。 (如何设置 301 取决于你的网站平台和服务器，可能需要搜索具体教程或寻求技术帮助)。
 * **工具:** Ahrefs Webmaster Tools (Site Explorer)
 * **例子效果 (来自原文):** 检查 1800flowers.com 发现一个旧的母亲节页面是 404，但有来自 59 个网站的 225 个链接指向它。通过 301 重定向到当前的母亲节页面，就能回收这些链接的价值。
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *图片说明：使用类似 Ahrefs 的工具找到带有外部链接的 404 页面*

* **添加内部链接 (Internal Linking):**
 * **目标:** 帮助 Google 理解你的网站结构，传递页面权重，也方便用户在你的网站内浏览。
 * **动作:**
  1. 在写新内容或编辑旧内容时，思考当前页面可以链接到哪些网站内其他相关的页面。
  2. 使用描述性的锚文本 (链接文字)。例如，写到"关键词研究"时，链接到你关于关键词研究的详细教程页面，锚文本可以是"学习如何做关键词研究"。
  3. (可选免费工具) 在 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) 中运行 Site Audit (网站诊断)，查看 "Internal link opportunities" (内部链接机会) 报告，它会自动帮你找到可以添加内链的地方。
 * **工具:** 你的大脑，Ahrefs Webmaster Tools (Site Audit)

* **添加架构标记 (Schema Markup):**
 * **目标:** 用一种 Google 能读懂的"语言"告诉它你页面上内容的具体含义 (比如这是一篇食谱、一个 FAQ 列表、一个产品)，有时能在搜索结果中获得更丰富的展示样式 (富媒体摘要)，吸引点击。
 * **动作:**
  1. 访问 [Google 搜索库](https://developers.google.com/search/docs/guides/search-gallery)，看看有哪些 Schema 类型适用于你的内容 (常见的有 Article, FAQPage, Product, Recipe 等)。
  2. 找到适合你内容的类型后，使用 Schema 生成器工具 (网上搜索 "Schema Markup Generator" 有很多免费的) 来创建对应的 JSON-LD 代码。你需要填入一些内容信息 (如标题、问题、答案、产品名称、价格等)。
  3. 将生成的代码复制粘贴到你网页 HTML 的 `<head>` 或 `<body>` 部分。
 * **工具:** [Google 搜索库](https://developers.google.com/search/docs/guides/search-gallery) (查类型), Schema Markup Generator (网上找免费工具)

#### 第二步：附加/进阶要素 (有精力再搞)

* **关注页面体验 (Page Experience Signals):**
 * **目标:** 这些主要是为了提升用户访问你网站时的感受，Google 也将它们作为次要排名因素。
 * **动作 & 工具:**
  * **核心页面指标 (Core Web Vitals):** 使用 [Google PageSpeed Insights](https://pagespeed.web.dev/) 测试你的页面加载速度 (LCP)、视觉稳定性 (CLS) 和交互响应性 (FID)。根据工具的建议进行优化 (这可能需要技术知识)。
  * **HTTPS:** 确保你的整个网站是通过 `https://` 访问的 (地址栏有小锁标志)。如果不是，需要配置 SSL 证书。
  ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-86.png)
  *图片说明：浏览器地址栏的 HTTPS 小锁标志*
  * **移动友好 (Mobile-Friendly):** 使用 [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) 或查看 Google Search Console 中的 "移动可用性" 报告，确保页面在手机上布局合理、按钮可点、文字可读。
  ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-88.png)
  *图片说明：Google Search Console 中的移动可用性报告示例*
  * **安全浏览 (Safe Browsing):** Google Search Console 的 "安全问题" 报告会提示你的网站是否有恶意软件、钓鱼等问题。保持网站安全。
  * **无干扰性插页广告 (No Intrusive Interstitials):** 避免使用会覆盖主内容、影响用户访问的大弹窗广告。

* **使用 Hreflang (针对多语言/多区域网站):**
 * **目标:** 如果你的网站有多个语言版本 (如 `example.com/en/` 和 `example.com/zh/`) 或针对不同国家提供不同内容 (如 `example.co.uk` 和 `example.com.au`)，你需要告诉 Google 这些版本之间的关系。
 * **动作:** 在每个页面的 HTML `<head>` 部分添加 `<link rel="alternate" hreflang="语言代码-国家代码" href="对应版本的URL">` 标签。例如，中文页面需要指向对应的英文页面，反之亦然。这是一个相对复杂的操作，如果你需要，请搜索 "hreflang generator" 或查阅 Google 的官方文档。
 * **工具:** Hreflang Tag Generator (网上搜索)

* **网站维护 (保持健康):**
 * **目标:** 定期检查并修复一些小问题，保持网站良好运行。
 * **动作 & 工具:**
  * **修复失效链接 (Broken Links):** 使用 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) 的 Site Audit 查找指向 404 页面的内部链接 ("Internal broken links") 和外部链接 ("External broken links")。修复或移除这些链接。
  ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-90.png)
  *图片说明：Site Audit 中查找失效链接的报告示例*
  * **修复重定向链 (Redirect Chains):** Site Audit 也会报告 "Redirect chains" (重定向链) 的问题。理想情况下，重定向应该一步到位 (A -> C)，而不是经过中间环节 (A -> B -> C)。修改重定向规则以消除链条。
  ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-92.png)
  *图片说明：Site Audit 中查找重定向链的报告示例*

## 6、SEO 工具

### 免费工具
* **Ahrefs Free Keyword Generator:** 用于查找关键词。
* **Ahrefs Webmaster Tools (AWT):** 免费的网站诊断、关键词排名跟踪、内链机会查找、失效链接检查等工具集。
* **Ahrefs Free Backlink Checker:** 快速查看网站的前 100 个外链。
* **Google Keyword Planner:** Google Ads 内的关键词研究工具 (需要 Google Ads 账号)。
* **Google 搜索框建议 (Google Suggest):** 在 Google 搜索时自动弹出的建议。
* **Google 相关搜索:** Google 搜索结果页底部的相关搜索词。
* **Answer The Public:** 用于查找围绕关键词的问题和话题 (有每日使用限制)。
* **Google Trends:** 查看关键词的搜索热度和趋势。
* **ChatGPT (基础版):** 用于头脑风暴、生成内容、标题等。
* **Google Search Console (GSC):** 监控网站在 Google 搜索中的表现、收录情况、技术问题等。
* **TinyPNG / iLoveIMG:** 在线图片压缩工具。
* **Google PageSpeed Insights:** 测试页面加载速度和用户体验。
* **Schema Markup Generator (如 Schema.dev):** 生成结构化数据代码的工具。
* **Google 搜索库 (Search Gallery):** 查看 Google 支持的 Schema 类型和富媒体摘要。
* **Google Mobile-Friendly Test:** 测试网页的移动端友好性。
* **Google Alerts:** 监控网络上提及特定关键词或品牌的新内容。
* **Next.js / Nuxt.js:** 前端框架，有助于构建 SEO 友好的网站。
* **行业目录/评论网站 (部分免费):** 如 Yelp、TripAdvisor，可以提交基本的商业信息。

### 付费工具
* **Ahrefs (核心套件):** 全功能的 SEO 工具平台，提供更深入的关键词研究、竞争对手分析、外链分析、网站诊断等。
* **Semrush:** 另一个全功能的 SEO 和营销工具平台，功能与 Ahrefs 类似。
* **SimilarWeb:** 另一个全功能的 SEO 和营销工具平台，功能与 Ahrefs 类似。
* **Answer The Public (付费版):** 无使用次数限制。
* **ChatGPT (高级版):** 功能更强的 AI 模型。
* **行业目录/评论网站 (高级功能/广告):** 如 Capterra、G2，可能提供付费推广或高级分析功能。

## 最后
最后夹带一个私货，我开发了一款工具，![SparkNow](https://sparknow.cc/)，一站式帮你启动项目，量大管饱，感兴趣的可以试试，不感兴趣直接忽略就行。