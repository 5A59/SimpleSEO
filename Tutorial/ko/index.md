# 초간단 SEO 튜토리얼
<!-- ignore start -->

[English](../en/index.md) | [中文](../zh/index.md) | [Español](../es/index.md) | [Français](../fr/index.md) | [Deutsch](../de/index.md) | [Italiano](../it/index.md) | [Português](../pt/index.md) | [日本語](../ja/index.md) | [한국어](../ko/index.md) | [Русский](../ru/index.md) | [العربية](../ar/index.md) | [हिन्दी](../hi/index.md) | [Bahasa Indonesia](../id/index.md) | [ภาษาไทย](../th/index.md) | [Türkçe](../tr/index.md) | [Tiếng Việt](../vi/index.md) | [Filipino](../tl/index.md) | [বাংলা](../bn/index.md) | [Kiswahili](../sw/index.md)

<!-- ignore end -->

## 튜토리얼 목표

이 튜토리얼은 SEO가 뭔지 몰라도, 왜 해야 하는지 몰라도, 튜토리얼을 보고 따라 하기만 하면 웹사이트 SEO를 80점까지 끌어올릴 수 있도록 돕는 것을 목표로 합니다.

따라서 이 튜토리얼은 SEO가 무엇인지, SEO 이론은 무엇인지 가르치지 않습니다. 오직 "SEO를 어떻게 잘하는지"만 알려줍니다.

만약 "SEO란 무엇인가?", "SEO는 어떻게 작동하는가?"를 배우고 싶다면, [튜토리얼 원본](https://ahrefs.com/blog/zh/how-do-search-engines-work/)을 참고하세요.

"SEO를 어떻게 해야 하는가?"를 배우고 싶다면, 이 튜토리얼이 적합합니다.

하지만 시작하기 전에, 이것은 "기술"이지 "도"가 아니라는 것을 기억하세요.

이 튜토리얼 내용의 90%는 Ahrefs SEO 튜토리얼에서 가져왔으며, 원본 튜토리얼의 핵심 내용을 압축한 버전이라고 생각하시면 됩니다.

여기 Ahrefs SEO 튜토리얼 원본이 있습니다. 시간이 있다면 한번 살펴보시는 것을 추천합니다: https://ahrefs.com/blog/zh/how-do-search-engines-work/

준비되셨다면, 시작해 봅시다.

<!-- ignore start -->

## 목차
* [초고속 버전, 10분 안에 보고 바로 적용하기](#초고속-버전-10분-안에-보고-바로-적용하기)
* [상세 버전](#상세-버전)
  * [1. 키워드 찾기](#1-키워드-찾기)
  * [2. SEO 콘텐츠 작성법](#2-seo-콘텐츠-작성법)
  * [3. 페이지 SEO](#3-페이지-seo)
  * [4. 외부 링크](#4-외부-링크)
  * [5. 기타 최적화](#5-기타-최적화)
  * [6. SEO 도구](#6-seo-도구)

<!-- ignore end -->

## 초고속 버전, 10분 안에 보고 바로 적용하기

### 0. 웹사이트는 반드시 정적 페이지 또는 서버 사이드 렌더링으로 제작해야 합니다.

많은 초보자들이 간과하는 부분인데, 나중에 SEO를 아무리 해도 효과가 없다는 것을 깨닫게 됩니다.

**왜 그럴까요?**

검색 엔진 크롤러(예: Googlebot)는 정적 페이지 또는 서버 사이드 렌더링으로 생성된 HTML 콘텐츠를 직접 읽을 수 있기 때문에 웹페이지를 더 쉽게 크롤링하고 이해할 수 있습니다.

반면에 JavaScript를 사용하여 브라우저에서 콘텐츠를 생성하는 웹사이트(클라이언트 사이드 렌더링)의 경우 크롤러가 더 많은 시간을 들여야 하고, 심지어 구글이 이러한 JavaScript 코드를 실행할지 여부도 불확실하여 색인 생성 및 순위에 영향을 미칩니다.

또한 정적 페이지 또는 서버 사이드 렌더링 페이지는 일반적으로 로딩 속도가 더 빨라 사용자 경험이 향상되며, 이는 Google이 중요하게 생각하는 요소입니다.

Next.js, Nuxt.js 등과 같은 프레임워크를 사용하면 SEO 작업을 많이 덜 수 있습니다.

### 1. 키워드 찾기

1.  자신의 비즈니스/웹사이트와 관련된 단어 몇 개를 생각해 냅니다 (예: 이 웹사이트는 SEO 튜토리얼과 관련되어 있으므로 "SEO", "키워드 연구", "페이지 최적화" 등을 생각해 낼 수 있습니다).
2.  키워드 연구 도구 (예: Ahrefs의 Free Keyword Generator, Google의 Keyword Planner, Semrush 등)를 사용하여 더 많은 관련 단어를 찾습니다.
3.  괜찮다고 생각되는 단어를 몇 개 골라서 적어둡니다.
4.  GPT를 사용하여 더 많은 키워드를 찾습니다.

키워드 선택 요약:
*   키워드는 자신의 비즈니스/웹사이트와 관련이 있어야 합니다.
*   키워드는 트래픽을 유도할 수 있어야 합니다.
*   키워드는 어느 정도 검색량이 있어야 합니다. 너무 틈새 키워드는 의미가 없습니다.
*   KD (키워드 난이도, 키워드 연구 도구에서 확인할 수 있음)가 낮을수록 좋습니다. 낮을수록 경쟁이 적고 순위가 높아질 가능성이 높습니다.

### 2. 콘텐츠 작성

1.  **경쟁자 분석:** Google에서 키워드를 검색하고, 상위에 랭크된 콘텐츠가 **무엇을 (유형, 형식, 관점) 작성했는지** 확인합니다.
2.  **검색 의도 일치:** 사용자가 키워드를 검색할 때 보고 싶어 하는 정보 (유형, 형식, 관점)를 충족합니다.
3.  **유용한 정보 작성:** **실제 경험**을 공유하고, 사용자 문제를 해결하며, 자신의 전문성과 경험을 보여줍니다.
4.  **포괄성:** 사용자가 알고 싶어 할 수 있는 **관련 포인트**를 다루고, 가능한 한 경쟁자보다 더 포괄적으로 다룹니다.
5.  **강조:** **다른 사람이 가지고 있지 않은** 고유한 정보나 기술을 제공합니다.
6.  **읽기 쉬움:** **짧은 문장, 단락 구분, 이미지 추가**를 사용하고 오타를 확인합니다.
7.  **지속적인 업데이트:** 오래된 정보를 즉시 업데이트해야 합니다.

### 3. 페이지 최적화

1.  **메타 태그 & 제목:**
    *   **페이지 제목 (Title):** 매력적이고, 키워드를 포함하고, 길이가 적절해야 합니다 (약 30자). (예: `<title>페이지 SEO 궁극 가이드 (2024)</title>`)
    *   **H1 태그:** 각 페이지에 H1 태그를 하나만 사용하고, 페이지 주제를 요약합니다. (예: `<h1>페이지 SEO 궁극 가이드</h1>`)
    *   **H2-H6 태그:** 콘텐츠 부제목에 사용하여 구조를 구성합니다.
    *   **메타 설명 (Meta Description):** 페이지 내용을 설명하고, 클릭을 유도하고, 키워드를 포함하고, 길이가 적절해야 합니다 (약 80자). (예: `<meta name="description" content="키워드 최적화부터 기술적 세부 사항까지 페이지 SEO의 모든 것을 배우고 웹사이트 순위를 높이세요!">`)

2.  **링크:**
    *   **내부 링크:** 자신의 웹사이트 내의 다른 관련 페이지를 가리킵니다. 피라미드 구조로 만드는 것이 좋으며, 고립된 페이지를 남겨두지 마세요. 그렇지 않으면 Google이 찾을 수 없습니다. (예: `<a href="/keyword-research">키워드 연구 배우기</a>`)
    *   **외부 링크:** (필요한 경우) 신뢰할 수 있는 정보 출처 또는 유용한 외부 리소스를 가리킵니다. (예: `<a href="https://example.com" rel="nofollow">참고 자료</a>`)

3.  **이미지:**
    *   **파일명:** 설명적인 이름을 사용합니다. (예: `page-seo-checklist.jpg`)
    *   **대체 텍스트 (Alt Text):** 이미지 내용을 설명하는 Alt 텍스트를 추가합니다. (예: `<img src="..." alt="페이지 SEO 점검 목록 표 스크린샷">`)
    *   **압축:** 이미지 파일 크기를 압축하여 로딩 속도를 높입니다.

4.  **URL:**
    *   **간결한 설명:** URL 경로가 짧고 이해하기 쉬워야 하며, 키워드 (영문은 `-`으로 구분)를 포함하는 것이 가장 좋습니다. (예: `/page-seo-guide/`)

5.  **경험:**
    *   **페이지 속도 (Core Web Vitals):** 로딩 속도를 최적화합니다.
    *   **모바일 친화성:** 휴대폰에서 좋은 경험을 제공하는지 확인합니다.
    *   **HTTPS:** HTTPS 암호화를 사용합니다.
    *   **방해 금지:** 팝업 광고가 너무 많지 않도록 합니다.
    *   **(선택 사항) 특징 발췌 최적화:** 간결하고 명확한 답변을 제공합니다.
    *   **(선택 사항) 스키마 마크업:** 구조화된 데이터를 추가하여 Google이 콘텐츠를 이해하도록 돕습니다.

### 4. 외부 링크 추가
1.  **좋은 콘텐츠 작성:** 콘텐츠를 **매우 훌륭하고 유용하게** 작성하여 다른 사람들이 글을 인용하거나 도구를 추천하고 싶게 만듭니다 (가장 중요하고 지속적인 방법입니다).
2.  **외부 링크 제출:** 웹사이트를 **가장 중요하고 신뢰할 수 있는 업계 디렉토리 웹사이트**에 제출합니다 (예: 항전 등).
3.  **기고 작성:** 글쓰기를 좋아한다면, 주제와 관련된 다른 웹사이트에 **게스트 블로그**를 작성해 보세요. 기사에서 웹사이트를 가리키는 링크를 자연스럽게 넣을 수 있습니다.
4.  **절대 링크를 구매하지 마세요:** Ahrefs는 **링크 구매를 강력히 권장하지 않습니다.** 위험이 매우 높고, 돈을 낭비하고 웹사이트가 Google에서 처벌을 받을 수 있습니다.

### 5. 기타
1.  **색인 확인:** [Google Search Console](https://search.google.com/search-console/about) (무료, 이하 GSC)에서 "URL 검사" 기능을 사용하여 중요한 페이지를 Google에서 찾을 수 있는지 확인합니다.
2.  **깨진 링크 수정:** URL을 변경했거나 페이지를 삭제한 경우 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (무료, 이하 AWT)를 사용하여 404로 변경되었지만 이전에 외부 링크가 있었던 페이지를 찾고 301 리디렉션으로 새 페이지로 리디렉션합니다.
3.  **다국어 지원:** 웹사이트 경쟁이 치열한 경우 다국어 지원을 시도해 보세요. 많은 웹사이트가 영어로만 경쟁하며, 다국어 지원을 통해 더 많은 트래픽을 확보할 수 있습니다.
4.  **사이트맵 생성:** 웹사이트의 모든 중요한 페이지를 나열하는 `sitemap.xml` 파일을 만들고 Google Search Console에 제출하여 Google이 콘텐츠를 더 빠르고 포괄적으로 검색할 수 있도록 돕습니다.
    *   **예시 (sitemap.xml 기본 구조):**
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
5.  **Hreflang (다국어 태그):** 웹사이트에 여러 언어가 있거나 다른 지역을 대상으로 하는 콘텐츠가 있는 경우 `hreflang` 태그를 사용하여 각 페이지의 다른 언어/지역 버전을 Google에 알려 콘텐츠 중복 문제를 방지하고 올바른 사용자에게 올바른 버전을 표시하도록 합니다.
    *   **예시 (HTML `<head>`에서):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(참고: `x-default`는 기본 또는 특정 언어 지역이 없는 버전을 지정하는 데 사용됩니다.)*
6.  **Robots.txt (크롤링 규칙):** 웹사이트 루트 디렉토리에 `robots.txt` 파일을 넣어 검색 엔진 크롤러가 액세스하거나 색인 생성을 원하지 않는 페이지 또는 디렉토리(예: 백엔드 관리 페이지, 테스트 페이지 등)를 알려줍니다.
    *   **예시 (robots.txt 내용):**
        ```
        User-agent: *          # 모든 크롤러에 적용
        Disallow: /admin/       # /admin/ 디렉토리 접근 금지
        Disallow: /private.html # /private.html 파일 접근 금지
        Allow: /public/        # /public/ 디렉토리 접근 허용 (상위 디렉토리가 금지된 경우)

        User-agent: Googlebot   # Google 크롤러에만 적용
        Disallow: /tmp/         # Google 크롤러가 /tmp/ 디렉토리에 접근하는 것을 금지
        Sitemap: http://www.example.com/sitemap.xml # 사이트맵 위치 지정
        ```
7.  **Canonical (표준 태그):** 웹사이트에 내용이 동일하거나 매우 유사한 페이지가 여러 개 있는 경우(예: 매개변수가 있는 URL) `canonical` 태그를 사용하여 "공식" 버전을 지정하고 검색 엔진이 이를 중복 콘텐츠로 간주하여 가중치를 분산시키는 것을 방지합니다.
    *   **예시 (HTML `<head>`에서):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(참고: `http://www.example.com/product-page?ref=banner` 이 페이지에서도 매개변수 없는 표준 URL을 가리켜야 합니다.)*
8.  **Schema Markup (구조화된 데이터):** 페이지 코드에 Schema 마크업을 추가하여 표준화된 형식으로 Google에 페이지 콘텐츠의 의미(예: 레시피, 제품, FAQ)를 설명하면 Google이 콘텐츠를 이해하는 데 도움이 되며 검색 결과에 평점, 가격 범위 등과 같은 더 풍부한 스타일을 표시하여 클릭률을 높일 수 있습니다.
    *   **예시 (JSON-LD 형식, `<script>` 태그에 배치):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "SEO란 무엇인가요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (검색 엔진 최적화)는 웹사이트 콘텐츠 및 기술 측면을 최적화하여 Google과 같은 검색 엔진의 자연 검색 결과에서 웹사이트 순위를 높이는 프로세스를 의미합니다."
            }
          },{
            "@type": "Question",
            "name": "SEO는 효과가 나타나기까지 얼마나 걸리나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO의 효과가 나타나는 시간은 웹사이트 기반, 경쟁 수준, 투자된 리소스 등 다양한 요인에 따라 달라지며, 일반적으로 몇 주에서 몇 달 또는 그 이상이 걸려야 눈에 띄는 효과를 볼 수 있습니다."
            }
          }]
        }
        ```

## 상세 버전

<details>
<summary><h2>1. 키워드 찾기</h2></summary>

### 첫 번째 단계: "시드 키워드" 생각하기

"시드 키워드"는 가장 기본적인 핵심 단어입니다. 너무 복잡하게 생각하지 말고 자신에게 몇 가지 질문을 해보세요.

* 다른 사람들이 인터넷에서 당신의 물건을 어떻게 검색할까요? (예: "저렴한 커피 원두", "핸드 드립 커피 만드는 방법")
* 경쟁사 웹사이트에서 어떤 단어를 사용하고 있나요?
* 만약 당신이 고객이라면 무엇을 검색할까요?

**예시:**
만약 당신이 커피 원두를 판매하는 온라인 상점을 운영한다면, 당신의 시드 키워드는 다음과 같을 수 있습니다.
* 커피 원두
* 아라비카 커피 원두
* 핸드 드립 커피
* 커피 머신
* 커피 원두 구매

**팁:**

정말로 생각나지 않으시나요? ChatGPT (또는 AI)에게 당신의 비즈니스와 관련된 단어를 브레인스토밍해달라고 요청해 보세요.

생각나는 모든 것을 나열하세요. 많을수록 좋습니다.

### 두 번째 단계: 무료 도구를 사용하여 더 많은 키워드 찾기

머릿속으로만 생각하는 것으로는 충분하지 않습니다. 도구를 사용하여 더 많은 관련 단어를 찾아보세요. 모든 것을 사용할 필요는 없으며, 자신에게 맞는 몇 가지를 선택하세요.

**도구 1: Ahrefs Free Keyword Generator** (추천, 완전 무료)

1. [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator)를 엽니다.
2. 방금 생각한 "시드 키워드"를 하나씩 입력합니다.
3. 목표 국가 (예: 대한민국)를 선택합니다.
4. "Find keywords"를 클릭합니다.

관련 키워드 제안이 많이 표시될 것입니다. 다음 두 가지에 집중하세요.

* **Phrase Match (구문 일치):** 시드 단어를 포함하는 구문입니다. 예를 들어 "커피 원두"를 검색하면 "유기농 커피 원두", "콜드 브루 커피 원두"가 표시될 수 있습니다.
* **Questions (질문):** 시드 단어를 포함하는 질문입니다. 예를 들어 "핸드 드립 커피"를 검색하면 "핸드 드립 커피에 필요한 도구", "핸드 드립 커피 맛있게 만드는 방법"이 표시될 수 있습니다.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*이미지 예시: Ahrefs와 같은 키워드 도구를 사용하여 "aeropress" 관련 키워드를 찾으면 월간 검색량 등의 정보를 볼 수 있습니다. 무료 도구 인터페이스는 유사하며, 키워드 목록을 제공합니다.*

**도구 2: Google 검색창 & 관련 검색**

1. Google 검색을 엽니다.
2. 시드 키워드를 입력하고 검색창에서 자동으로 팝업되는 제안 (Google Suggest)을 확인합니다. 이들은 모두 사람들이 자주 검색하는 것들입니다.
3. 검색 후 페이지 맨 아래로 스크롤하여 "관련 검색" 섹션을 확인합니다. 이곳도 관련 단어를 찾기에 좋은 곳입니다.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**도구 3: Answer The Public**

1. [Answer The Public](https://answerthepublic.com/)을 엽니다.
2. 시드 키워드를 입력합니다 (영어로 사용하는 것이 더 효과적일 수 있습니다).
3. 국가/언어를 선택합니다.
4. 시드 키워드 주변의 질문, 전치사 구, 비교 등을 생성하여 사용자가 구체적으로 어떤 의문을 가지고 검색하는지 이해하는 데 도움을 줍니다. 무료 버전은 일일 사용 횟수 제한이 있습니다.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**도구 4: Google Trends** (인기도 보기, 트렌드 찾기)

1. [Google Trends](https://trends.google.com/)를 엽니다.
2. 시드 키워드를 입력합니다.
3. 이 단어의 검색 인기 변화 추세를 보고 계절적 변화나 갑자기 인기 급상승하는 주제를 발견할 수 있습니다.
4. 또한 관련 검색어를 보고 사람들이 동시에 검색하는 다른 인기 단어를 찾을 수 있습니다.

**도구 5: ChatGPT**

1. [ChatGPT](https://chat.openai.com/) 또는 기타 유사한 AI 도구를 엽니다.
2. 시드 키워드를 기반으로 더 많은 관련 키워드, 주제 또는 질문을 생성하도록 요청합니다. 예를 들어 "저는 커피 원두를 판매합니다. 사람들이 검색할 수 있는 관련 키워드 또는 질문을 알려주세요"라고 물을 수 있습니다.

**도구 6: Google Keyword Planner** (무료, 하지만 Google Ads 계정 필요)

Google Ads 계정이 있는 경우 (무료로 등록할 수 있으며, 광고 게재에 돈을 쓸 필요는 없습니다) Keyword Planner를 사용할 수 있습니다.

1. Google Ads에 로그인하여 "도구 및 설정" -> "계획" -> "키워드 플래너"를 찾습니다.
2. "새 키워드 찾기"를 선택합니다.
3. 시드 키워드를 입력합니다.

검색량 추정치와 더 많은 키워드 제안을 제공합니다. 하지만 무료 버전은 검색량을 범위로 표시하므로 정확하지 않습니다.

### 세 번째 단계: 포럼/커뮤니티/게시판/질문 답변 웹사이트 둘러보기

* **관련 포럼/커뮤니티/게시판/질문 답변 웹사이트 둘러보기:** 예를 들어 커피 관련이라면 커피 애호가 포럼, 지식iN 관련 주제, 다음 카페에서 사람들이 무엇을 묻고, 토론하고, 어떤 단어를 사용하는지 확인합니다.
* **댓글 섹션 확인:** 경쟁사 웹사이트, 관련 제품의 전자상거래 페이지, 소셜 미디어 게시물의 댓글 섹션에도 사용자의 실제 검색어가 숨겨져 있을 수 있습니다.

**예시:** 커피 포럼에서 "필터 없이 핸드 드립하는 방법"에 대한 질문을 보았다면 이는 이전에 생각하지 못했던 좋은 키워드가 될 수 있습니다!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### 키워드 도구 모음

* **도구 모음:**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (주력, 무료)
 * Google 검색창 & 관련 검색 (보조, 무료)
 * [Answer The Public](https://answerthepublic.com/) (질문 찾기, 무료, 일일 제한)
 * [Google Trends](https://trends.google.com/) (트렌드 보기, 무료)
 * [ChatGPT](https://chat.openai.com/) (AI 브레인스토밍, 무료)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (Ads 계정 필요, 무료)
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): 더욱 강력한 무료 도구 모음이지만 자신의 웹사이트 소유권을 확인해야 합니다. 웹사이트가 현재 어떤 키워드로 순위가 매겨지고 있는지 확인하고 경쟁이 낮은 키워드를 발견할 수 있습니다.

</details>

---

<details>
<summary><h2>2. SEO 콘텐츠 작성법</h2></summary>

### 1단계: 사용자가 무엇을 보고 싶어 하는지 파악 (검색 의도 분석)

해당 단어를 검색하는 사람이 어떤 유형, 형식, 관점의 콘텐츠를 보고 싶어 하는지 반드시 알아야 합니다.

1. Google에서 키워드를 검색합니다.
2. 상위 5-10개 결과 확인:
  * **유형:** 기사? 제품 페이지? 비디오?
  * **형식:** 튜토리얼? 체크리스트? 리뷰?
  * **관점:** "입문"? "저렴한"? "최신"?
3. **모방:** 콘텐츠 유형, 형식, 관점이 주류와 일치해야 합니다.

### 2단계: 자신이 아는 것을 작성 (경험 E-E-A-T 보여주기)

콘텐츠를 신뢰할 수 있게 만들고, 당신이 실제로 안다는 것을 보여주세요.
 * **자신의 직접적인 경험이나 잘하는 것을 쓰세요.**
 * "저"를 사용하여 경험과 견해를 공유하세요.
 * (해당되는 경우) 자신의 배경이나 성과를 간단히 언급하세요.

### 3단계: 포괄적으로 다루기 (자세한 내용)

주제에 대한 사용자의 대부분의 질문에 답하세요.

 1. 도구를 사용하여 해당 키워드와 관련된 질문/롱테일 키워드를 찾습니다.
 2. 순위가 높은 기사의 소제목을 보고 그들이 다루는 포인트를 찾습니다.
 3. 당신이 찾은 것과 중요하다고 생각하는 포인트를 콘텐츠에 모두 추가합니다.

주의: 포괄적이라고 해서 장황한 것은 아니며, 사용자 의도에 따라 작성하세요.

### 4단계: 특별한 것을 추가 (고유성)

사용자가 다른 사람의 기사가 아닌 당신의 기사를 봐야 하는 이유를 제시하세요.

 * 독특한 기술, 경험 요약 또는 관점을 공유하세요.
 * 다른 사람이 가지고 있지 않은 작은 리소스 (예: 템플릿, 체크리스트)를 제공하세요.
 * (고급) 작은 실험 또는 데이터 공유를 수행하세요.

### 5단계: 읽기 쉽도록 만들기 (가독성)

사용자가 편안하게 보고 계속 읽고 싶어 해야 합니다.

 * 짧은 문장, 많은 단락 구분.
 * 소제목으로 콘텐츠를 분리.
 * 그림을 사용하여 설명하거나 피로를 덜어주세요.
 * 굵게 강조, 목록을 사용하여 요점을 강조하세요.

### 6단계: 꾸준히 업데이트

콘텐츠가 오래되어 순위가 떨어지는 것을 방지합니다.

 * 정기적으로 (예: 매년) 확인: 정보가 정확한가요? 링크가 유효한가요?
 * 콘텐츠 업데이트: 오래된 정보를 수정하고 새로운 내용을 추가하세요.
 * 업데이트 날짜 표시: 사용자에게 최신 정보임을 알리세요.

---

</details>

---

<details>
<summary><h2>3. 페이지 SEO</h2></summary>

### 첫 번째 단계: 검색 엔진과 사용자가 페이지를 "이해"하도록 만들기

검색 의도와 일치시키세요.
 * Google에서 키워드를 검색하고, 상위 5-10개 결과를 봅니다. 콘텐츠 유형 (기사/제품 페이지/?), 콘텐츠 형식 (튜토리얼/체크리스트/리뷰/?), 콘텐츠 관점 ("입문"/"저렴한"/"최신"?)에 주의하세요.
 * 콘텐츠가 그들과 일치하고 사용자에게 보고 싶어 하는 것을 제공해야 합니다.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *이미지 예시: "avocado seed" (아보카도 씨앗)를 검색한 결과 대부분은 재배 방법을 가르치는 가이드 기사이고, 관점은 "간단하고 쉬움"입니다. 이는 사용자가 초보자임을 나타냅니다.*

#### "제목 낚시" 잘하기 (Title Tag):
  * 핵심 키워드를 포함하세요.
  * 길이는 70자(한글 약 30자)를 넘지 않는 것이 좋습니다. 그렇지 않으면 전부 표시되지 않습니다.
  * 명확하고 매력적이며 클릭하고 싶도록 만드세요.
  * 순수한 "제목 낚시"를 하지 말고 콘텐츠와 일치해야 합니다.
  * 콘텐츠가 시기 적절성 (예: 튜토리얼)을 중시하는 경우 연도를 추가할 수 있습니다.
  * **도구:** ChatGPT를 사용하여 제목을 브레인스토밍해 보세요. Ahrefs Webmaster Tools (AWT)의 Site Audit을 사용하여 제목이 너무 길거나 누락되었는지 확인하세요.

 ![이미지 예시: 좋은 제목 예시](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### "얼굴 마담" 잘 만들기 (Meta Description):
  * 검색 결과에서 제목 아래에 있는 설명 텍스트입니다. 순위에 직접적인 영향을 미치지는 않지만 클릭률에 영향을 미칩니다.
  * 길이는 160자(한글 약 80자)를 넘지 않는 것이 좋습니다.
  * 제목의 보충으로 볼 수 있으며, 제목에 넣을 수 없는 판매 포인트를 넣습니다.
  * 키워드를 포함하세요 (Google이 굵게 표시함).
  * 능동형으로 사용하여 사용자에게 무엇을 제공할 수 있는지 직접 알리세요.
  * **도구:** ChatGPT를 사용하여 여러 버전을 작성해 보세요. Ahrefs Webmaster Tools (AWT)의 Site Audit을 사용하여 누락되었거나 너무 긴지 확인하세요.
 ![이미지 예시: 좋은 메타 설명 예시](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### 좋은 "웹사이트 이름" 짓기 (URL):
  * URL 경로 (도메인 뒤에 오는 부분)는 짧고 이해하기 쉬워야 합니다.
  * 핵심 키워드를 포함하세요 (영문 또는 병음 사용, 단어 사이는 `-`으로 연결).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *이미지 예시: `domain.com/learn-seo`가 `domain.com/p=123`보다 좋습니다.*

#### 콘텐츠에는 "뼈대"가 있어야 합니다 (Heading Tags: H1-H6):
  * H1-H6 태그를 사용하여 콘텐츠를 구성하고 명확한 계층 구조를 형성하여 읽기 쉽게 만드세요.
  * **H1 태그:** 각 페이지에 하나만 사용하며, 일반적으로 페이지 제목 (Title Tag)과 의미가 일치하거나 유사합니다.
  * **H2-H6 태그:** 각 섹션의 소제목으로 사용합니다.
  * **도구:** Ahrefs Webmaster Tools (AWT)의 Site Audit을 사용하여 H1 태그가 누락되었거나 중복되었는지 확인하세요.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *이미지 예시: H 태그를 사용하여 시각적 계층 만들기*

### 두 번째 단계: "유익하고" "독특한" 콘텐츠 작성

#### 콘텐츠는 "전체적"이어야 합니다:
  * 콘텐츠가 사용자가 해당 키워드를 검색할 때 알고 싶어 할 수 있는 주요 측면과 문제를 다루고 있는지 확인하세요.
  * Google 검색 결과에서 상위 몇 개의 기사가 어떤 소제목 (H2, H3)을 다루었는지 살펴보세요.
  * Google 검색 결과 페이지 하단의 "관련 검색"을 살펴보세요.
  * **도구:** (선택 사항) Ahrefs Webmaster Tools (AWT)의 Site Explorer를 사용하여 웹사이트와 경쟁사 웹사이트 모두 어떤 공통 키워드가 트래픽을 유도했는지 확인하고 (Content Gap 기능) 추가할 수 있는 하위 주제를 찾습니다.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *이미지 예시: 경쟁사 기사를 분석하여 절약 방법으로 "구독 취소"가 언급되었음을 확인하고 기사에 이 점을 추가하는 것을 고려할 수도 있습니다.*

#### 콘텐츠는 "특별"해야 합니다:
  * 다른 사람의 말을 반복하지 말고 독특한 가치를 제공하세요.
  * 당신의 독특한 통찰력 또는 경험 요약, 다른 사람이 가지고 있지 않은 작은 기술, 독창적인 사례 분석, 무료 템플릿 또는 체크리스트일 수 있습니다.
  * 목표는 사용자에게 당신의 기사를 "즐겨찾기"하거나 "공유"할 이유를 제공하는 것입니다.

#### 당신의 "전문성" 또는 "경험"을 보여주세요:
  * 전문 분야 (예: 의료, 금융) 또는 직접적인 경험 (예: 제품 리뷰)이 필요한 콘텐츠를 작성하는 경우 전문성 또는 실제 경험을 보여주세요.
  * 정보 출처 (인용, 링크)를 명확하게 설명하고, 작성자 배경 정보를 제공하고 (작성자 정보 페이지에 링크), 당신의 작업 과정 또는 사용 경험을 공유하고 (그림, 비디오), 콘텐츠의 사실 정확성을 확인하세요.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *이미지 예시: 제품 리뷰에서 실제 사용 경험을 보여주세요.*

### 세 번째 단계: 세부 사항을 최적화하여 경험을 향상시키세요.

#### 이미지 최적화:
  * **파일명:** 설명적인 단어로 이미지 파일 이름을 지정하고 영단어 또는 병음은 `-`으로 구분하세요 (예: `black-puppy-play-ball.jpg` 또는 `heise-xiaogou-wanqiu.jpg`)
  * **대체 텍스트 (Alt Text):** 검색 엔진과 시각 장애 사용자를 위한 이미지 설명입니다. HTML의 `<img>` 태그에 `alt` 속성을 추가하여 이미지 콘텐츠를 간결한 언어로 설명하세요. 키워드를 자연스럽게 포함할 수 있습니다. (예: `<img src="강아지공놀이.jpg" alt="검은색 래브라도 강아지가 잔디밭에서 빨간색 공을 가지고 놀고 있습니다">`)
  * **이미지 압축:** 이미지가 너무 크면 로딩이 느려집니다. 도구를 사용하여 이미지 크기를 압축하고 선명도를 최대한 유지하세요.
  * **도구:** Ahrefs Webmaster Tools (AWT)의 Site Audit을 사용하여 이미지에 Alt 텍스트가 누락되었는지 확인하세요. TinyPNG 또는 iLoveIMG와 같은 온라인 도구를 사용하여 이미지를 압축하세요.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *이미지 예시: 좋은 Alt 텍스트 예시*

#### 내부 링크:
  * 기사에서 웹사이트의 다른 관련 기사 또는 페이지에 링크하세요.
  * 이렇게 하면 사용자가 더 많은 콘텐츠를 발견하는 데 도움이 되고 검색 엔진이 웹사이트 구조와 페이지 관계를 이해하는 데 도움이 됩니다.
  * **도구:** Ahrefs Webmaster Tools (AWT)의 Site Audit에서 "Internal link opportunities" 기능을 사용하여 내부 링크를 추가할 수 있는 위치를 찾습니다.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *이미지 예시: AWT에서 찾은 내부 링크 기회입니다. A 페이지에서 B 페이지로 링크할 수 있다고 알려줍니다.*

#### 외부 링크:
  * 적절한 위치에서 다른 고품질의 관련 외부 웹사이트에 참조 또는 정보 출처로 링크하세요.
  * 예를 들어 데이터를 인용할 때는 원본 보고서에 링크하고 도구를 추천할 때는 공식 웹사이트에 링크하세요.
  * **참고:** 광고 또는 스폰서 링크인 경우 `rel="nofollow"` 또는 `rel="sponsored"` 속성을 사용하여 검색 엔진에 알리세요.

#### 페이지 경험:
   * 빠른 로딩 속도 (Core Web Vitals).
   * 휴대폰에서 좋은 브라우징 경험 (Mobile-Friendly).
   * HTTPS 암호화 사용 (보안).
   * 성가신 팝업 광고 없음 (No intrusive interstitials).
  * 이것들은 일반적으로 웹사이트 전체의 최적화이지만 새 페이지도 요구 사항을 충족하는지 확인해야 합니다.
  * **도구:** Google PageSpeed Insights를 사용하여 페이지 속도와 경험을 테스트하세요. Google Search Console에서 관련 보고서를 확인하세요.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
  *이미지 예시: Google의 페이지 경험 신호*

#### "특수 전시 위치" 확보:
  * **특징 발췌 (Featured Snippet):** Google은 검색 결과의 맨 위에 질문에 직접 답변하는 상자를 표시하는 경우가 있습니다. 페이지가 이미 상위 순위에 있고 콘텐츠에 질문에 대한 직접적이고 간결한 답변이 있는 경우(형식이 기존 Snippet(예: 목록, 단락)과 가장 일치하는 것이 좋습니다) 선택될 가능성이 있습니다.
  * **풍부한 미디어 발췌 (Rich Snippet):** 페이지에 스키마 마크업(구조화된 데이터 코드)을 추가하여 콘텐츠 유형(예: 레시피, FAQ, 제품 정보)을 Google에 알려주면 Google이 검색 결과에 평점, 가격, 단계와 같은 더 풍부한 정보를 표시하는 경우가 있습니다.
  * **도구:** Google Search Console을 사용하여 순위가 높고 Google에서 특집 발췌를 표시한 단어를 확인하세요. Schema.dev의 스키마 생성기를 사용하여 스키마 코드를 생성하세요.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *이미지 예시: 평점 및 리뷰 수가 있는 풍부한 미디어 발췌*

### 네 번째 단계: 지속적인 관심과 업데이트

#### 효과 모니터링:
 * 목표 키워드 순위 변화에 주의하세요.
 * Google Search Console을 사용하여 Google 검색에서 페이지 성능(노출 수, 클릭 수, 순위)을 확인하세요.

#### 콘텐츠 업데이트:
 * SEO는 일회성 작업이 아닙니다. 정기적으로(예: 1년) 콘텐츠를 검토하여 정보가 오래되었는지, 링크가 끊어졌는지, 추가할 새로운 정보가 있는지 확인하세요. 콘텐츠를 업데이트하면 순위를 유지하는 데 도움이 됩니다.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *이미지 예시: 콘텐츠 업데이트 후 트래픽 증가*

---

### 페이지 SEO 도구 모음
* [Google Search](https://www.google.com/) (의도 보기, 경쟁자 보기)
* [ChatGPT](https://chat.openai.com/) (제목/설명 아이디어 생각하기)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (무료, H1, 제목, 설명, Alt 텍스트 검사, 내부 링크 기회 찾기, 키워드 차이점 보기)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (온라인 이미지 압축)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (페이지 속도 및 경험 측정)
* [Google Search Console](https://search.google.com/search-console/) (순위, 경험 문제, 키워드 모니터링)
* [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (스키마 코드 생성)

</details>

---

<details>
<summary><h2>4. 외부 링크</h2></summary>

### 외부 링크란 무엇인가요?

인터넷이 거대한 관계망이라고 상상해 보세요. 다른 웹사이트 A가 페이지에 당신의 웹사이트 B를 가리키는 링크를 추가하면 A에서 B로의 외부 링크가 형성됩니다. Google은 이 링크를 웹사이트 A가 웹사이트 B에 "추천" 또는 "투표"를 한 것으로 간주합니다.

일반적으로 **신뢰도가 높고 관련성이 높은** 웹사이트의 "투표"가 더 중요합니다.

외부 링크를 얻는 방법은 많지만 가장 핵심적이고 위험이 낮은 방법에 집중하겠습니다.

### 1. 다른 사람이 자발적으로 당신을 링크하도록 하기(링크 획득 - Earn Links)

이것은 가장 이상적이고 Google이 권장하는 방식이며 "빠르지는" 않지만 효과가 가장 오래 지속됩니다.

**핵심 작업:** **고품질의 독특한 가치가 있고 인용할 가치가 있는** 콘텐츠를 만드세요. 이것은 다음과 같을 수 있습니다.
 * 매우 유용한 무료 온라인 도구 또는 계산기.
 * 독점 데이터가 포함된 심층적인 산업 연구 보고서.
 * 사용자의 고충을 해결하는 매우 자세한 궁극적인 가이드 또는 자습서.
 * 참신한 관점 또는 고유한 리소스 목록.

콘텐츠가 충분히 좋으면 다른 웹사이트 작성자가 관련 주제를 작성할 때 콘텐츠를 발견하고 참조 또는 추천으로 자발적으로 링크할 수 있습니다.

### 2. 직접 링크를 "추가"하기

이 방법은 비교적 쉽지만 효과는 제한적이며 적당히 사용해야 합니다.

**핵심 작업:**
 * **산업 디렉토리:** 당신의 비즈니스에 실체 또는 명확한 산업 소속(예: 지역 사업체, 소프트웨어 회사)이 있는 경우 가장 유명하고 신뢰할 수 있는 산업 수직 웹사이트 또는 사업 디렉토리를 찾아 웹사이트 정보를 제출하세요. 예를 들어 레스토랑은 Yelp, TripAdvisor에 제출할 수 있고 소프트웨어는 Capterra, G2 등에 제출할 수 있습니다.(가장 중요한 몇 개만!)
 * **관련 커뮤니티/포럼/질문:** **실제로 참여하고 익숙한** 산업 포럼, 게시판, 지식iN 등 커뮤니티에서 당신의 특정 웹페이지 콘텐츠가 특정 질문에 답변하거나 토론을 보완하는 데 도움이 된다면 링크를 **자연스럽게** 남겨두세요. **관련 없는 커뮤니티에 스팸 광고 링크를 게시하지 마세요!** 이렇게 하면 삭제되거나 평판이 손상될 수도 있습니다.

### 3. 링크를 "요청"하기

다른 웹사이트에 링크를 직접 요청하면 성공률이 매우 낮습니다. 왜냐하면 다른 사람이 왜 당신을 도와야 할까요? 그러나 비교적 합리적인 방법이 몇 가지 있습니다.

**핵심 작업:**
 * **게스트 블로그:** 이것은 비교적 효과적인 방법입니다. 다른 관련 웹사이트에 **고품질 기사를 무료로** 작성하고 그 대가로 기사 작성자 정보 또는 콘텐츠에 당신의 웹사이트를 가리키는 링크를 하나 또는 두 개 포함할 수 있습니다.
  * **방법 (간단한 버전):** 당신이 좋다고 생각하고 당신의 주제와 관련된 블로그를 찾고 그들이 게스트 게시물을 받는지 확인하세요(일반적으로 웹사이트 바닥글 또는 연락처 페이지에 설명이 있습니다). 요구 사항이 많지 않은 블로그부터 시도하고 당신이 잘하고 독자에게 가치가 있는 기사를 작성하세요.
 * **이미지 링크 구축 (Image Link Building):** 당신의 웹사이트에 있는 원본 이미지, 차트가 다른 웹사이트에서 사용되었지만 출처를 밝히지 않았다면 정중하게 연락하여 원본 이미지 페이지에 대한 링크를 추가하도록 요청할 수 있습니다.
* **홍보 이메일 템플릿:** `web.html` 파일은 직접 복사하여 사용할 수 있는 이메일 템플릿을 제공하지 않습니다. 또한 맹목적으로 링크를 요청하는 이메일을 보내는 것은 성공률이 매우 낮다고 언급했습니다. 게스트 블로그를 작성하려면 상대방 웹사이트의 스타일과 요구 사항에 따라 게시물 설명을 신중하게 작성해야 합니다.

### 4. 링크 "구매"? 만지지 마세요!

**핵심 경고:** Ahrefs는 **링크 구매를 권장하지 않는다고 명확하게 밝혔습니다.**
 * SEO에 도움이 되지 않는 스팸 링크를 쉽게 구매하여 돈을 낭비할 수 있습니다.
 * Google의 웹마스터 가이드라인을 위반하면 웹사이트가 처벌을 받아 순위가 크게 떨어지거나 색인에서 제거될 수 있습니다.

### 5. 이미 가지고 있는 링크 유지하기

힘들게 얻은 링크를 잃어버리면 너무 아깝습니다.

**핵심 작업:** 웹사이트에 열리지 않는 페이지(404 Not Found)가 있는지 확인하세요. 이러한 페이지는 이전에 외부 링크가 있었습니다.
**도구:** 무료 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)를 사용하세요.
**단계:**
 1. Ahrefs Webmaster Tools에 로그인하여 웹사이트를 인증합니다.
 2. Site Explorer(웹사이트 분석) 도구로 이동합니다.
 3. 왼쪽 메뉴에서 "Pages"(페이지) -> "Best by links"(역링크 수로 정렬)를 선택합니다.
 4. "HTTP code" 필터를 클릭하고 "404 not found"를 선택합니다.
 5. 보고서 목록을 확인합니다. 404 페이지 뒤에 높은 "Referring domains"(참조 도메인, 이 페이지에 링크된 웹사이트 수를 나타냅니다) 수가 있는 경우 이 실효 페이지가 한때 중요했다는 의미입니다.
 6. 당신의 웹사이트에서 이 실효 페이지 콘텐츠와 가장 관련성이 높은 새 페이지 URL을 찾습니다(완벽하게 일치하는 페이지가 없는 경우 홈페이지도 괜찮습니다).
 7. **301 리디렉션**을 설정하여 이 404 페이지의 URL을 당신이 찾은 새 URL로 영구적으로 리디렉션합니다. 이렇게 하면 이전 URL에 대한 링크 가치가 새 페이지로 전달됩니다. (301 리디렉션 설정 방법은 웹사이트 서버 및 플랫폼에 따라 다릅니다. "WordPress에서 301 리디렉션 설정하는 방법"과 같은 특정 자습서를 검색해야 할 수도 있습니다).
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *이미지 설명: Ahrefs Site Explorer의 Best by links 보고서와 404 필터를 함께 사용하여 외부 링크가 있는 실효 페이지를 찾습니다(Ahrefs 블로그의 예시).*

---

### 외부 링크 도구 모음

**필수 (무료):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): 당신의 웹사이트가 받은 링크를 보고, 링크가 있는 404 페이지를 찾아 수정하고, 웹사이트 기술적 건전성을 검사합니다.
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): 웹사이트(경쟁사 포함)의 상위 100개 외부 링크를 빠르게 확인하고 링크를 어디서 얻었는지 파악합니다.
 * [Google Alerts](https://www.google.com/alerts): 당신의 브랜드 이름, 웹사이트 이름, 핵심 주제와 관련된 알림을 설정합니다. 온라인에서 관련 새 콘텐츠가 나타나면 이메일 알림을 받게 됩니다. 이는 다른 사람이 당신을 언급했지만 링크를 추가하지 않은 경우를 발견하는 데 도움이 됩니다(추가하도록 요청할 수 있음). 또는 새로운 링크 구축 기회를 발견하는 데 도움이 됩니다.

</details>

---

<details>
<summary><h2>5. 기타 최적화</h2></summary>

1.  **색인 확인:** [Google Search Console](https://search.google.com/search-console/about) (무료, 이하 GSC)에서 "URL 검사" 기능을 사용하여 중요한 페이지를 Google에서 찾을 수 있는지 확인합니다.
2.  **깨진 링크 수정:** URL을 변경했거나 페이지를 삭제한 경우 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (무료, 이하 AWT)를 사용하여 404로 변경되었지만 이전에 외부 링크가 있었던 페이지를 찾고 301 리디렉션으로 새 페이지로 리디렉션합니다.
3.  **다국어 지원:** 웹사이트 경쟁이 치열한 경우 다국어 지원을 시도해 보세요. 많은 웹사이트가 영어로만 경쟁하며, 다국어 지원을 통해 더 많은 트래픽을 확보할 수 있습니다.
4.  **사이트맵 생성:** 웹사이트의 모든 중요한 페이지를 나열하는 `sitemap.xml` 파일을 만들고 Google Search Console에 제출하여 Google이 콘텐츠를 더 빠르고 포괄적으로 검색할 수 있도록 돕습니다.
    *   **예시 (sitemap.xml 기본 구조):**
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
5.  **Hreflang (다국어 태그):** 웹사이트에 여러 언어가 있거나 다른 지역을 대상으로 하는 콘텐츠가 있는 경우 `hreflang` 태그를 사용하여 각 페이지의 다른 언어/지역 버전을 Google에 알려 콘텐츠 중복 문제를 방지하고 올바른 사용자에게 올바른 버전을 표시하도록 합니다.
    *   **예시 (HTML `<head>`에서):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(참고: `x-default`는 기본 또는 특정 언어 지역이 없는 버전을 지정하는 데 사용됩니다.)*
6.  **Robots.txt (크롤링 규칙):** 웹사이트 루트 디렉토리에 `robots.txt` 파일을 넣어 검색 엔진 크롤러가 액세스하거나 색인 생성을 원하지 않는 페이지 또는 디렉토리(예: 백엔드 관리 페이지, 테스트 페이지 등)를 알려줍니다.
    *   **예시 (robots.txt 내용):**
        ```
        User-agent: *          # 모든 크롤러에 적용
        Disallow: /admin/       # /admin/ 디렉토리 접근 금지
        Disallow: /private.html # /private.html 파일 접근 금지
        Allow: /public/        # /public/ 디렉토리 접근 허용 (상위 디렉토리가 금지된 경우)

        User-agent: Googlebot   # Google 크롤러에만 적용
        Disallow: /tmp/         # Google 크롤러가 /tmp/ 디렉토리에 접근하는 것을 금지
        Sitemap: http://www.example.com/sitemap.xml # 사이트맵 위치 지정
        ```
7.  **Canonical (표준 태그):** 웹사이트에 내용이 동일하거나 매우 유사한 페이지가 여러 개 있는 경우(예: 매개변수가 있는 URL) `canonical` 태그를 사용하여 "공식" 버전을 지정하고 검색 엔진이 이를 중복 콘텐츠로 간주하여 가중치를 분산시키는 것을 방지합니다.
    *   **예시 (HTML `<head>`에서):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(참고: `http://www.example.com/product-page?ref=banner` 이 페이지에서도 매개변수 없는 표준 URL을 가리켜야 합니다.)*
8.  **Schema Markup (구조화된 데이터):** 페이지 코드에 Schema 마크업을 추가하여 표준화된 형식으로 Google에 페이지 콘텐츠의 의미(예: 레시피, 제품, FAQ)를 설명 하면 Google이 콘텐츠를 이해하는 데 도움이 되며 검색 결과에 평점, 가격 범위 등과 같은 더 풍부한 스타일을 표시하여 클릭률을 높일 수 있습니다.
    *   **예시 (JSON-LD 형식, `<script>` 태그에 배치):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "SEO란 무엇인가요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (검색 엔진 최적화)는 웹사이트 콘텐츠 및 기술 측면을 최적화하여 Google과 같은 검색 엔진의 자연 검색 결과에서 웹사이트 순위를 높이는 프로세스를 의미합니다."
            }
          },{
            "@type": "Question",
            "name": "SEO는 효과가 나타나기까지 얼마나 걸리나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO의 효과가 나타나는 시간은 웹사이트 기반, 경쟁 수준, 투자된 리소스 등 다양한 요인에 따라 달라지며, 일반적으로 몇 주에서 몇 달 또는 그 이상이 걸려야 눈에 띄는 효과를 볼 수 있습니다."
            }
          }]
        }
        ```

</details>

---

<details>
<summary><h2>6. SEO 도구</h2></summary>

### 무료 도구
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator):** 키워드를 찾는 데 사용됩니다.
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools):** 무료 웹사이트 진단, 키워드 순위 추적, 내부 링크 기회 찾기, 끊어진 링크 검사 등 도구 모음입니다.
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker):** 웹사이트의 상위 100개 역링크를 빠르게 확인합니다.
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** Google Ads 내의 키워드 연구 도구입니다(Google Ads 계정이 필요합니다).
* **[Google 검색창 제안 (Google Suggest)](https://www.google.com/):** Google에서 검색할 때 자동으로 팝업되는 제안입니다.
* **[Google 관련 검색](https://www.google.com/):** Google 검색 결과 페이지 하단의 관련 검색어입니다.
* **[Answer The Public](https://answerthepublic.com/):** 키워드와 관련된 질문 및 주제를 찾는 데 사용됩니다(일일 사용 제한이 있습니다).
* **[Google Trends](https://trends.google.com/):** 키워드의 검색 인기 및 추세를 확인합니다.
* **[ChatGPT (기본 버전)](https://chat.openai.com/):** 브레인스토밍, 콘텐츠 생성, 제목 등에 사용됩니다.
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** Google 검색에서 웹사이트 성능, 색인 생성 상황, 기술 문제 등을 모니터링합니다.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** 온라인 이미지 압축 도구입니다.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** 페이지 로딩 속도와 사용자 경험을 테스트합니다.
* **[Schema Markup Generator (예: Schema.dev)](https://schema.dev/schema-generator/):** 구조화된 데이터 코드를 생성하는 도구입니다.
* **[Google 검색 갤러리 (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** Google이 지원하는 스키마 유형과 풍부한 미디어 요약을 확인합니다.
* **[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):** 웹 페이지의 모바일 친화성을 테스트합니다.
* **[Google Alerts](https://www.google.com/alerts):** 특정 키워드 또는 브랜드에 대한 새로운 콘텐츠가 웹에 언급되는 것을 모니터링합니다.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** SEO 친화적인 웹사이트를 구축하는 데 도움이 되는 프론트엔드 프레임워크입니다.
* **산업 디렉토리/리뷰 웹사이트(부분적으로 무료):** [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/)와 같이 기본적인 비즈니스 정보를 제출할 수 있습니다.

### 유료 도구
* **[Ahrefs (핵심 도구 모음)](https://ahrefs.com/):** 더욱 심층적인 키워드 연구, 경쟁사 분석, 역링크 분석, 웹사이트 진단 등을 제공하는 모든 기능을 갖춘 SEO 도구 플랫폼입니다.
* **[Semrush](https://www.semrush.com/):** Ahrefs와 유사한 모든 기능을 갖춘 SEO 및 마케팅 도구 플랫폼입니다.
* **[SimilarWeb](https://www.similarweb.com/):** Ahrefs와 유사한 모든 기능을 갖춘 SEO 및 마케팅 도구 플랫폼입니다.
* **[Answer The Public (유료 버전)](https://answerthepublic.com/):** 사용 횟수 제한이 없습니다.
* **[ChatGPT (고급 버전)](https://openai.com/chatgpt/):** 더욱 강력한 AI 모델입니다.
* **산업 디렉토리/리뷰 웹사이트(고급 기능/광고):** [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/)와 같이 유료 프로모션 또는 고급 분석 기능을 제공할 수 있습니다.

</details>

---

## 마지막으로
마지막으로, 제가 개발한 도구 [SparkNow](https://sparknow.cc/)를 살짝 홍보하겠습니다. 프로젝트 시작, SEO 검사, 역링크, 성능, 홍보 문구, 홍보 이미지 등을 한 번에 해결할 수 있도록 도와줍니다. 관심 있는 분들은 사용해 보시고 관심 없으신 분들은 그냥 무시하셔도 괜찮습니다. 위에 설명된 SEO 방법만 익혀도 충분합니다.
