# 초간단 SEO 튜토리얼

## 튜토리얼 목표

이 튜토리얼은, 보고 따라하기만 하면 왜 그런지 몰라도, 심지어 SEO가 뭔지 몰라도 웹사이트 SEO를 80점까지 끌어올릴 수 있도록 돕는 것을 목표로 합니다.

따라서 이 튜토리얼은 SEO가 무엇인지 알려주거나 SEO 이론 지식을 가르쳐주지 않습니다. 단지 "SEO를 어떻게 해야 하는지"만 알려줍니다.

그러므로 "what is seo", "how does seo work"를 배우고 싶다면 [튜토리얼 원본](https://ahrefs.com/blog/zh/how-do-search-engines-work/)을 참고하세요.

"how to do seo"를 배우고 싶다면, 이 튜토리얼이 적합합니다.

하지만 시작하기 전에 이것은 "기술"이지 "도"가 아니라는 것을 기억하세요.

이 튜토리얼의 90%는 Ahrefs SEO 튜토리얼에서 가져왔으며, 원본 튜토리얼의 증류 버전이라고 생각하시면 됩니다.

Ahrefs SEO 튜토리얼 원본은 여기에서 확인할 수 있습니다. 시간적 여유가 있다면 읽어보는 것을 추천합니다: https://ahrefs.com/blog/zh/how-do-search-engines-work/

준비되셨다면 시작해 봅시다.

<!-- ignore start -->

## 목차
* [초고속 버전, 10분 안에 훑어보고 바로 시작](#초고속-버전-10분-안에-훑어보고-바로-시작)
* [상세 버전](#상세-버전)
  * [1. 키워드 찾기](#1-키워드-찾기)
  * [2. SEO 콘텐츠 작성법](#2-seo-콘텐츠-작성법)
  * [3. 페이지 SEO](#3-페이지-seo)
  * [4. 외부 링크](#4-외부-링크)
  * [5. 기타 최적화](#5-기타-최적화)
  * [6. SEO 도구](#6-seo-도구)

<!-- ignore end -->

## 초고속 버전, 10분 안에 훑어보고 바로 시작

### 0. 웹사이트는 반드시 정적 페이지 또는 백엔드 렌더링으로 제작해야 합니다.

많은 초보자들이 간과하기 쉽고, 결국 SEO를 해도 효과가 없는 것을 발견합니다.

**왜일까요?**

검색 엔진 크롤러(예: Googlebot)는 정적 페이지나 백엔드 렌더링으로 생성된 HTML 콘텐츠를 직접 읽을 수 있어 웹페이지를 더 쉽게 크롤링하고 이해할 수 있기 때문입니다.

반면 JavaScript를 사용하여 브라우저에서만 콘텐츠를 생성하는 웹사이트(클라이언트 측 렌더링)는 크롤러가 더 많은 시간을 들여야 하며, 심지어 Google이 해당 js 코드를 실행할지 여부도 불확실하여 수집 및 순위에 영향을 미칩니다.

또한 정적 또는 백엔드 렌더링된 웹페이지는 일반적으로 로딩 속도가 더 빨라 사용자 경험이 향상되는데, 이는 Google이 중요하게 생각하는 부분입니다.

next.js, nuxt.js 등의 프레임워크를 사용하여 SEO에 필요한 많은 작업을 쉽게 처리하는 것이 좋습니다.

### 1. 키워드 찾기

1. 당신의 비즈니스/웹사이트와 관련된 단어를 몇 개 생각해 냅니다 (예: 이 웹사이트가 SEO 튜토리얼 관련이라면, "SEO", "키워드 연구", "페이지 최적화" 등).
2. 키워드 연구 도구(예: Ahrefs의 Free Keyword Generator, Google의 Keyword Planner, Semrush 등)를 사용하여 더 많은 관련 단어를 찾습니다.
3. 괜찮다고 생각되는 단어를 몇 개 적어둡니다.
4. GPT를 사용하여 더 많은 키워드를 찾습니다.

키워드 선택 요점:
* 키워드는 당신의 비즈니스/웹사이트와 관련이 있어야 합니다.
* 키워드는 트래픽을 유도할 수 있어야 합니다.
* 키워드는 어느 정도 검색량이 있어야 합니다. 너무 틈새 키워드는 고려하지 마세요.
* KD(키워드 난이도, 키워드 연구 도구에서 확인할 수 있음)가 낮을수록 좋습니다. 낮을수록 경쟁이 적고 순위가 매겨지기 쉽습니다.

### 2. 콘텐츠 작성

1. **경쟁자 분석:** Google에서 당신의 키워드를 검색하고, 상위에 랭크된 콘텐츠가 **무엇을 (유형, 형식, 관점) 썼는지** 확인합니다.
2. **검색 의도에 맞춤:** 사용자가 해당 키워드를 검색할 때 보고 싶어하는 정보를 충족시킵니다 (유형, 형식, 관점).
3. **알맹이 있는 콘텐츠:** **실제 경험**을 공유하고, 사용자 문제를 해결하고, 당신의 전문성과 경험을 보여줍니다.
4. **포괄성:** 사용자가 알고 싶어할 수 있는 **관련 사항**을 최대한 많이 다루고, 경쟁자보다 더 포괄적으로 작성합니다.
5. **강조:** **다른 사람에게는 없는** 독특한 정보나 기술을 제공합니다.
6. **가독성:** **짧은 문장, 단락 구분, 그림 추가**를 사용하고 오타를 확인합니다.
7. **꾸준한 업데이트:** устарелую 정보를 즉시 업데이트해야 합니다.

### 3. 페이지 최적화

1. **메타 태그 & 제목:**
 * **페이지 제목 (Title):** 매력적이고, 키워드를 포함하고, 길이가 적당해야 합니다 (약 30자). (예: `<title>페이지 SEO 최종 가이드 (2024)</title>`)
 * **H1 태그:** 각 페이지에 H1 태그를 하나만 사용하고 페이지 주제를 요약합니다. (예: `<h1>페이지 SEO 최종 가이드</h1>`)
 * **H2-H6 태그:** 콘텐츠 부제목을 구성하는 데 사용합니다.
 * **메타 설명 (Meta Description):** 페이지 콘텐츠를 설명하고, 클릭을 유도하고, 키워드를 포함하고, 길이가 적당해야 합니다 (약 80자). (예: `<meta name="description" content="키워드 최적화부터 기술적 세부 사항까지 페이지 SEO에 대한 모든 것을 배우고 웹사이트 순위를 높이세요!">`)

2. **링크:**
 * **내부 링크:** 자신의 웹사이트 내 다른 관련 페이지를 가리킵니다. 피라미드 구조로 만드는 것이 좋으며, 고립된 페이지가 없도록 해야 합니다. 그렇지 않으면 Google이 찾을 수 없습니다. (예: `<a href="/keyword-research">키워드 연구 배우기</a>`)
 * **외부 링크:** (필요한 경우) 권위 있는 정보 소스 또는 유용한 외부 리소스를 가리킵니다. (예: `<a href="https://example.com" rel="nofollow">참고 자료</a>`)

3. **이미지:**
 * **파일명:** 설명적인 이름을 사용합니다. (예: `page-seo-checklist.jpg`)
 * **대체 텍스트 (Alt Text):** 이미지 콘텐츠를 설명하는 Alt 텍스트를 추가합니다. (예: `<img src="..." alt="페이지 SEO 체크리스트 테이블 스크린샷">`)
 * **압축:** 이미지 파일 크기를 압축하여 로딩 속도를 높입니다.

4. **URL:**
 * **간결한 설명:** URL 경로는 짧고 이해하기 쉬우며, 키워드를 포함하는 것이 좋습니다 (영문은 `-`로 구분). (예: `/page-seo-guide/`)

5. **사용자 경험:**
 * **페이지 속도 (Core Web Vitals):** 로딩 속도를 최적화합니다.
 * **모바일 친화적:** 휴대폰에서 좋은 사용자 경험을 보장합니다.
 * **HTTPS:** HTTPS 암호화를 사용합니다.
 * **방해 금지:** 과도한 팝업 광고를 피합니다.
 * **(선택 사항) 특징 스니펫 최적화:** 간결하고 핵심적인 답변을 제공합니다.
 * **(선택 사항) Schema 마크업:** 구조화된 데이터를 추가하여 Google이 콘텐츠를 이해하도록 돕습니다.

### 4. 외부 링크 추가
1.  **좋은 콘텐츠 작성:** 콘텐츠를 **매우 훌륭하고, 매우 유용하게** 작성하도록 노력하여 다른 사람이 읽고 당신의 기사를 인용하거나 도구를 추천하고 싶게 만드세요. (이것이 가장 핵심적이고 지속 가능한 방법입니다.)
2.  **외부 링크 제출:** 당신의 웹사이트를 **가장 중요하고, 가장 권위 있는 산업 디렉토리 웹사이트**에 제출합니다 (예: 항잔 등).
3.  **기고 작성:** 글쓰기를 좋아한다면, 당신의 주제와 관련된 다른 웹사이트에 **게스트 블로그**를 작성하는 것을 시도해 보세요. 기사 안에 당신의 웹사이트를 가리키는 링크를 자연스럽게 넣을 수 있습니다.
4.  **절대로 링크를 사지 마세요:** Ahrefs는 링크를 구매하는 것을 **강력히 반대**합니다. 위험이 매우 높고, 돈을 낭비하고 웹사이트가 Google에 의해 처벌될 수 있습니다.

### 5. 기타
1.  **수집 확인:** [Google Search Console](https://search.google.com/search-console/about) (무료, 이후 GSC로 약칭)에 가서 "URL 검사" 기능을 사용하여 당신의 중요한 페이지를 Google이 찾을 수 있는지 확인합니다.
2.  **죽은 링크 수정:** URL을 변경했거나 페이지를 삭제한 경우, [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (무료, 이후 AWT로 약칭)를 사용하여 404 페이지가 되었지만 이전에는 외부 링크가 있었던 페이지를 찾아 301 리디렉션으로 새 페이지로 리디렉션합니다.
3.  **다국어 지원:** 웹사이트 경쟁이 치열하다면, 다국어 지원을 시도해 보세요. 많은 웹사이트가 영어로만 경쟁하며, 다국어 지원을 통해 더 많은 트래픽을 얻을 수 있습니다.
4.  **Sitemap 생성:** 웹사이트의 모든 중요한 페이지를 나열하는 `sitemap.xml` 파일을 생성하여 Google Search Console에 제출하여 Google이 콘텐츠를 더 빠르고 포괄적으로 검색하도록 돕습니다.
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
5.  **Hreflang (다국어 태그):** 웹사이트에 여러 언어 또는 다른 지역을 대상으로 하는 콘텐츠가 있는 경우, `hreflang` 태그를 사용하여 각 페이지의 다른 언어/지역 버전을 Google에 알려 콘텐츠 중복 문제를 피하고 올바른 사용자에게 올바른 버전을 표시하도록 합니다.
    *   **예시 (HTML `<head>` 안):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(참고: `x-default`는 기본 또는 특정 언어 지역이 없는 버전을 지정하는 데 사용됩니다)*
6.  **Robots.txt (크롤러 프로토콜):** 웹사이트 루트 디렉토리에 `robots.txt` 파일을 넣고 검색 엔진 크롤러가 액세스하거나 수집하지 않도록 하려는 페이지 또는 디렉토리를 알려줍니다 (예: 백엔드 관리 페이지, 테스트 페이지 등).
    *   **예시 (robots.txt 내용):**
        ```
        User-agent: *          # 모든 크롤러에 적용
        Disallow: /admin/       # /admin/ 디렉토리 접근 금지
        Disallow: /private.html # /private.html 파일 접근 금지
        Allow: /public/        # /public/ 디렉토리 접근 명시적 허용 (상위 디렉토리가 금지된 경우)

        User-agent: Googlebot   # Google 크롤러에만 적용
        Disallow: /tmp/         # Google 크롤러의 /tmp/ 디렉토리 접근 금지
        Sitemap: http://www.example.com/sitemap.xml # Sitemap 위치 명시
        ```
7.  **Canonical (정규 태그):** 웹사이트에 내용이 동일하거나 매우 유사한 여러 페이지 (예: 매개변수가 있는 URL)가 있는 경우, `canonical` 태그를 사용하여 어떤 것이 "공식" 버전인지 지정하여 검색 엔진이 해당 페이지를 중복 콘텐츠로 간주하여 가중치를 분산시키지 않도록 합니다.
    *   **예시 (HTML `<head>` 안):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(참고: `http://www.example.com/product-page?ref=banner` 이 페이지에서도 매개변수가 없는 정규 URL을 가리켜야 합니다)*
8.  **Schema Markup (구조화된 데이터):** 페이지 코드에 Schema 마크업을 추가하여 표준화된 형식으로 Google에 페이지 콘텐츠의 의미 (예: 레시피, 제품, FAQ)를 설명합니다. Google이 콘텐츠를 이해하는 데 도움이 되며, 검색 결과에 평점, 가격 범위 등과 같은 풍부한 스타일로 표시되어 클릭률을 높일 수 있습니다.
    *   **예시 (JSON-LD 형식, `<script>` 태그 안에 넣음):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "SEO란 무엇입니까?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (검색 엔진 최적화)는 웹사이트 콘텐츠와 기술적인 측면을 최적화하여 검색 엔진 (예: Google) 자연 검색 결과에서 웹사이트 순위를 높이는 과정입니다."
            }
          },{
            "@type": "Question",
            "name": "SEO는 효과를 보려면 얼마나 걸립니까?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO 효과가 나타나는 데 걸리는 시간은 웹사이트 기초, 경쟁 정도, 투자 자원 등 다양한 요인에 따라 다르며, 일반적으로 몇 주에서 몇 달 또는 그 이상이 걸릴 수 있습니다."
            }
          }]
        }
        ```

## 상세 버전

<details>
<summary><h2>1. 키워드 찾기</h2></summary>

### 첫 번째 단계: "씨앗 키워드" 생각하기

"씨앗 키워드"는 가장 기본적이고 핵심적인 단어입니다. 너무 복잡하게 생각하지 말고, 스스로에게 몇 가지 질문을 해보세요.

* 다른 사람들이 당신의 것을 온라인에서 어떻게 검색할까요? (예: "저렴한 커피 원두", "핸드 드립 커피 만드는 법")
* 당신의 경쟁사 웹사이트에서는 어떤 단어를 사용하고 있나요?
* 당신이 고객이라면 무엇을 검색할까요?

**예시:**
만약 당신이 커피 원두를 판매하는 온라인 상점을 운영한다면, 당신의 씨앗 키워드는 다음을 포함할 수 있습니다.
* 커피 원두
* 아라비카 커피 원두
* 핸드 드립 커피
* 커피 머신
* 커피 원두 구매

**작은 팁:**

정말 생각이 안 나시나요? ChatGPT (또는 AI)에게 당신의 비즈니스와 관련된 단어를 브레인스토밍해 달라고 요청해 보세요.

생각나는 모든 것을 나열하세요, 많을수록 좋습니다.

### 두 번째 단계: 무료 도구를 사용하여 더 많은 키워드 찾기

머리 속에서만 생각하는 것은 충분하지 않습니다. 도구를 사용하여 더 많은 관련 단어를 찾아보세요. 모든 도구를 다 사용할 필요는 없으며, 자신에게 맞는 몇 가지만 선택하면 됩니다.

**도구 1: Ahrefs Free Keyword Generator** (추천, 완전 무료)

1. [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator)를 엽니다.
2. 방금 생각한 "씨앗 키워드"를 하나씩 입력합니다.
3. 목표 국가를 선택합니다 (예: 한국).
4. "Find keywords"를 클릭합니다.

관련 키워드 제안 목록을 볼 수 있습니다. 다음 두 가지 유형에 집중하세요.

* **Phrase Match (구문 일치):** 씨앗 단어를 포함하는 구문. 예를 들어 "커피 원두"를 검색하면 "유기농 커피 원두", "콜드 브루 커피 원두" 등을 볼 수 있습니다.
* **Questions (질문):** 씨앗 단어를 포함하는 질문. 예를 들어 "핸드 드립 커피"를 검색하면 "핸드 드립 커피에 필요한 도구", "핸드 드립 커피 맛있게 만드는 법" 등을 볼 수 있습니다.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*이미지 예시: Ahrefs와 같은 키워드 도구를 사용하여 "aeropress" 관련 키워드를 찾고, 월 검색량 등의 정보를 확인할 수 있습니다. 무료 도구 인터페이스는 유사하며, 키워드 목록을 제공합니다.*

**도구 2: Google 검색창 & 관련 검색어**

1. Google 검색을 엽니다.
2. 씨앗 키워드를 입력하고 검색창에 자동으로 나타나는 제안 (Google Suggest)을 확인합니다. 이들은 모두 사람들이 자주 검색하는 것입니다.
3. 검색 후 페이지 맨 아래로 스크롤하여 "관련 검색어" 섹션을 확인합니다. 여기도 관련 단어를 찾기에 좋은 곳입니다.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**도구 3: Answer The Public**

1. [Answer The Public](https://answerthepublic.com/)을 엽니다.
2. 씨앗 키워드를 입력합니다 (영어로 하는 것이 좋습니다. 효과가 더 좋을 수 있습니다).
3. 국가/언어를 선택합니다.
4. 당신의 키워드를 중심으로 한 질문, 전치사구, 비교 등을 생성하여 사용자가 구체적으로 어떤 의문을 가지고 검색하는지 파악하도록 돕습니다. 무료 버전은 일일 사용 횟수 제한이 있습니다.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**도구 4: Google Trends** (인기도 확인, 트렌드 찾기)

1. [Google Trends](https://trends.google.com/)를 엽니다.
2. 씨앗 키워드를 입력합니다.
3. 해당 단어의 검색량 변화 추이를 확인하고, 계절성 변화 또는 갑자기 인기를 얻는 주제를 발견할 수 있습니다.
4. 관련된 검색어를 확인하여 사람들이 동시에 검색하는 다른 인기 있는 단어를 찾을 수도 있습니다.

**도구 5: ChatGPT**

1. [ChatGPT](https://chat.openai.com/) 또는 유사한 AI 도구를 엽니다.
2. 씨앗 키워드를 기반으로 더 많은 관련 키워드, 주제 또는 질문을 생성하도록 합니다. 예를 들어 "저는 커피 원두를 판매하는데, 사람들이 검색할 만한 관련 키워드나 질문을 알려주세요"라고 물어볼 수 있습니다.

**도구 6: Google Keyword Planner** (무료, 단 Google Ads 계정 필요)

Google Ads 계정이 있다면 (없으면 무료로 등록 가능, 광고를 게재하지 않아도 됩니다), Keyword Planner를 사용할 수 있습니다.

1. Google Ads에 로그인하고 "도구 및 설정" -> "계획" -> "키워드 플래너"를 찾습니다.
2. "새 키워드 찾기"를 선택합니다.
3. 씨앗 키워드를 입력합니다.

검색량 추정치와 더 많은 키워드 제안을 제공합니다. 하지만 무료 버전은 검색량을 범위로 표시하므로 정확하지 않습니다.

### 세 번째 단계: 포럼/커뮤니티/카페/Q&A 사이트 방문

* **관련 포럼/커뮤니티/카페/Q&A 사이트 방문:** 예를 들어 당신이 커피 관련 사업을 한다면 커피 애호가 포럼, 지식인 관련 토론, 더쿠 카페에서 사람들이 무엇을 질문하고, 무엇을 논의하고, 어떤 단어를 사용하는지 확인합니다.
* **댓글 섹션 확인:** 당신의 경쟁사 웹사이트, 관련 제품의 전자상거래 페이지, 소셜 미디어 게시물의 댓글 섹션에도 사용자의 실제 검색어가 숨어 있을 수 있습니다.

**예시:** 한 커피 포럼에서 "필터 없이 핸드 드립 하는 법"이라는 질문을 발견했다면, 이것은 당신이 이전에 생각하지 못했던 좋은 키워드가 될 수 있습니다!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### 키워드 도구 모음

* **도구 모음:**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (주력, 무료)
 * Google 검색창 & 관련 검색어 (보조, 무료)
 * [Answer The Public](https://answerthepublic.com/) (질문 찾기, 무료, 일일 제한 있음)
 * [Google Trends](https://trends.google.com/) (트렌드 확인, 무료)
 * [ChatGPT](https://chat.openai.com/) (AI 브레인스토밍, 무료)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (Ads 계정 필요, 무료)
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools):** 더 강력한 무료 도구 모음이지만, 당신이 웹사이트 소유자인지 확인해야 합니다. 자신의 웹사이트에서 현재 어떤 키워드가 순위에 있는지 확인하고, 경쟁이 낮은 키워드를 발견할 수 있습니다.

</details>

---

<details>
<summary><h2>2. SEO 콘텐츠 작성법</h2></summary>

### 1단계: 사용자가 무엇을 보고 싶어 하는지 파악 (검색 의도 분석)

해당 단어를 검색하는 사람이 어떤 유형, 형식, 관점의 콘텐츠를 보고 싶어 하는지 반드시 알아야 합니다.

1. Google에서 당신의 키워드를 검색합니다.
2. 상위 5-10위의 검색 결과를 확인합니다.
  * **유형:** 기사인가요? 제품 페이지인가요? 동영상인가요?
  * **형식:** 튜토리얼인가요? 체크리스트인가요? 리뷰인가요?
  * **관점:** "입문"인가요? "저렴한"인가요? "최신"인가요?
3. **모방:** 콘텐츠 유형, 형식, 관점을 주류와 일치시켜야 합니다.

### 2단계: 당신이 아는 것을 작성 (경험 E-E-A-T 보여주기)

콘텐츠를 신뢰할 수 있게 만들고, 당신이 정말로 그것을 안다는 것을 보여줍니다.
 * **당신의 직접적인 경험 또는 잘하는 것을 작성합니다.**
 * "나"를 사용하여 경험과 견해를 공유합니다.
 * (해당하는 경우) 당신의 배경 또는 성과를 간단히 언급합니다.

### 3단계: 포괄적으로 다루기 (상세한 콘텐츠)

해당 주제에 대한 사용자의 대부분의 질문에 답변합니다.

 1. 도구를 사용하여 해당 키워드와 관련된 질문/롱테일 키워드를 찾습니다.
 2. 상위 랭킹 기사의 소제목을 보고 그들이 다루는 점을 찾습니다.
 3. 당신이 찾은 중요하다고 생각하는 점을 당신의 콘텐츠에 추가합니다.

주의: 포괄적인 것이 장황한 것을 의미하는 것은 아닙니다. 사용자 의도에 따라 작성하세요.

### 4단계: 특별한 것을 추가 (독창성)

사용자에게 다른 사람의 기사가 아닌 당신의 기사를 볼 이유를 제공합니다.

 * 독특한 기술, 경험 요약 또는 견해를 공유합니다.
 * 다른 사람이 가지고 있지 않은 작은 리소스(예: 템플릿, 체크리스트)를 제공합니다.
 * (고급) 작은 실험 또는 데이터 공유를 수행합니다.

### 5단계: 읽기 쉽게 만들기 (가독성)

사용자가 편안하게 보고, 계속 읽고 싶게 만듭니다.

 * 짧은 문장, 여러 단락.
 * 소제목으로 콘텐츠를 구분합니다.
 * 그림을 추가하여 설명하거나 피로를 완화합니다.
 * 굵게, 목록을 사용하여 요점을 강조합니다.

### 6단계: 지속적인 업데이트

콘텐츠가 오래되어 순위가 떨어지는 것을 방지합니다.

 * 정기적으로 (예: 매년) 점검합니다. 정보가 여전히 정확한가요? 링크가 여전히 유효한가요?
 * 콘텐츠를 업데이트합니다. устарелую 정보를 수정하고, 새로운 콘텐츠를 추가합니다.
 * 업데이트 날짜를 표시합니다. 사용자가 최신 정보임을 알 수 있도록 합니다.

---

</details>

---

<details>
<summary><h2>3. 페이지 SEO</h2></summary>

### 첫 번째 단계: 검색 엔진과 사용자가 페이지를 "이해"하도록 만들기

검색 의도와 일치시킵니다.
 * Google에서 당신의 키워드를 검색하고 상위 5-10개의 검색 결과를 확인하세요. 그들의 콘텐츠 유형 (기사/제품 페이지/?)、콘텐츠 형식 (튜토리얼/체크리스트/리뷰/?) 및 콘텐츠 관점 ("입문"/"저렴한"/"최신"?) 에 유의합니다.
 * 당신의 콘텐츠는 그들과 일치해야 하며, 사용자에게 보고 싶어하는 것을 제공해야 합니다.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *이미지 예시: "avocado seed" (아보카도 씨앗) 을 검색하면, 결과는 대부분 심는 방법을 가르치는 가이드 기사이고, 관점은 "간단하고 쉬운" 것으로, 사용자가 초보자임을 나타냅니다.*

#### "낚시성 제목" 작성 (Title Tag):
  * 핵심 키워드를 포함합니다.
  * 길이는 70자 (한글 30자 정도)를 넘지 않는 것이 좋습니다. 그렇지 않으면 전부 표시되지 않습니다.
  * 명확하고 매력적이며, 클릭하고 싶게 만듭니다.
  * 순전히 "낚시성 제목"을 만들지 말고, 콘텐츠와 일치해야 합니다.
  * 콘텐츠가 시의성을 중요하게 생각한다면 (예: 튜토리얼), 연도를 추가할 수 있습니다.
  * **도구:** ChatGPT를 사용하여 몇 가지 제목을 브레인스토밍할 수 있습니다. Ahrefs Webmaster Tools (AWT) 의 Site Audit을 사용하여 제목이 너무 길거나 누락되었는지 확인합니다.

 ![이미지 예시: 좋은 제목 예시](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### "간판" 작성 (Meta Description):
  * 이것은 검색 결과에서 제목 아래에 있는 설명 텍스트입니다. 순위에 직접적인 영향을 미치지는 않지만 클릭률에 영향을 미칩니다.
  * 길이는 160자 (한글 80자 정도)를 넘지 않는 것이 좋습니다.
  * 제목을 보충하는 것으로 간주하고, 제목에 넣을 수 없는 장점을 넣습니다.
  * 키워드를 포함합니다 (Google이 굵게 표시함).
  * 능동태를 사용하여 사용자에게 무엇을 제공할 수 있는지 직접 알려줍니다.
  * **도구:** ChatGPT를 사용하여 몇 가지 버전을 작성할 수 있습니다. Ahrefs Webmaster Tools (AWT) 의 Site Audit을 사용하여 누락되었는지 또는 너무 긴지 확인합니다.
 ![이미지 예시: 좋은 Meta 설명 예시](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### 좋은 "웹사이트 이름" 짓기 (URL):
  * URL 경로는 (도메인 뒷부분) 짧고 이해하기 쉬워야 합니다.
  * 핵심 키워드를 포함합니다 (영문 또는 병음으로 사용하고, 단어 사이는 `-` 로 연결합니다).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *이미지 예시: `domain.com/learn-seo` 가 `domain.com/p=123` 보다 좋습니다*

#### 콘텐츠에 "뼈대" 만들기 (Heading Tags: H1-H6):
  * H1-H6 태그를 사용하여 콘텐츠를 구성하고 명확한 계층 구조를 만들어 읽기 쉽게 만듭니다.
  * **H1 태그:** 각 페이지에 하나만 사용하고, 일반적으로 페이지 제목 (Title Tag) 과 의미가 일치하거나 가깝습니다.
  * **H2-H6 태그:** 각 부분의 부제목으로 사용합니다.
  * **도구:** Ahrefs Webmaster Tools (AWT) 의 Site Audit을 사용하여 H1 태그가 누락되었거나 중복되었는지 확인합니다.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *이미지 예시: H 태그를 사용하여 시각적 계층 구조 만들기*

### 두 번째 단계: "유익하고" "독특한" 콘텐츠 작성

#### 콘텐츠는 "전체" 여야 합니다.
  * 당신의 콘텐츠가 사용자가 해당 키워드를 검색할 때 알고 싶어할 수 있는 주요 측면과 질문을 다루도록 해야 합니다.
  * Google 검색 결과 상위 몇 개의 기사에서 어떤 소제목 (H2, H3) 을 다루는지 확인하세요.
  * Google 검색 결과 페이지 하단의 "관련 검색어"를 확인하세요.
  * **도구:** (선택 사항) Ahrefs Webmaster Tools (AWT) 의 Site Explorer를 사용하여 당신의 웹사이트와 경쟁사 웹사이트가 어떤 공통 키워드에서 트래픽을 유도하는지 확인 (Content Gap 기능) 하여 당신이 보충할 수 있는 하위 주제를 찾습니다.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *이미지 예시: 상대방 기사를 분석하여 그들이 돈을 절약하는 방법으로 "구독 취소"를 언급했음을 발견했다면, 당신의 기사에서도 이 점을 고려하여 추가할 수 있습니다.*

#### 콘텐츠는 "특별" 해야 합니다.
  * 단순히 다른 사람의 말을 반복하지 말고, 독특한 가치를 제공하세요.
  * 당신의 독특한 통찰력 또는 경험 요약、다른 사람이 가지고 있지 않은 작은 기술、독창적인 사례 분석、무료 템플릿 또는 체크리스트 등이 될 수 있습니다.
  * 목표는 사용자에게 당신의 기사를 "즐겨찾기" 또는 "공유" 할 이유를 제공하는 것입니다.

#### 당신의 "전문성" 또는 "경험" 을 보여줍니다.
  * 만약 당신이 전문 분야 (예: 의료, 금융) 또는 직접적인 경험 (예: 제품 리뷰) 이 필요한 콘텐츠를 작성한다면, 당신의 전문성 또는 실제 경험을 보여주어야 합니다.
  * 정보 출처 (인용, 링크)를 명확하게 설명하고、작성자 배경 소개 (작성자 소개 페이지 링크)를 제공하고、당신의 작동 과정 또는 사용 경험 (사진, 비디오)를 공유하고、콘텐츠 사실이 정확하도록 합니다.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *이미지 예시: 제품 리뷰에서 당신이 실제로 사용한 경험을 보여줍니다.*

### 세 번째 단계: 세부 사항을 최적화하고 경험을 향상시킵니다.

#### 이미지 최적화:
  * **파일명:** 설명적인 단어로 이미지 파일 이름을 짓고, 영단어나 병음 (예: `black-puppy-play-ball.jpg` 또는 `heise-xiaogou-wanqiu.jpg`) 을 `-` 로 구분합니다.
  * **대체 텍스트 (Alt Text):** 이것은 검색 엔진과 시각 장애인이 볼 수 있는 이미지 설명입니다. HTML의 `<img>` 태그에 `alt` 속성을 추가하고 간단한 언어로 이미지 콘텐츠를 설명하며, 자연스럽게 키워드를 포함할 수 있습니다. (예: `<img src="강아지 공놀이.jpg" alt="검은색 래브라도 강아지가 풀밭에서 빨간 공을 가지고 놀고 있습니다.">`)
  * **이미지 압축:** 이미지가 너무 크면 로딩이 느립니다. 도구를 사용하여 이미지 크기를 압축하는 동시에 선명도를 유지하도록 노력합니다.
  * **도구:** Ahrefs Webmaster Tools (AWT) 의 Site Audit을 사용하여 이미지에 Alt 텍스트가 누락되었는지 확인합니다. TinyPNG 또는 iLoveIMG 와 같은 온라인 도구를 사용하여 이미지를 압축합니다.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *이미지 예시: 좋은 Alt 텍스트 예시*

#### 내부 링크:
  * 당신의 기사에서 당신의 웹사이트에 있는 다른 관련 기사 또는 페이지를 링크하세요.
  * 이것은 사용자가 더 많은 콘텐츠를 발견하는 데 도움이 되고 검색 엔진이 당신의 웹사이트 구조와 페이지 관계를 이해하는 데 도움이 됩니다.
  * **도구:** Ahrefs Webmaster Tools (AWT) 의 Site Audit에서 "Internal link opportunities" 기능을 사용하여 내부 링크를 추가할 수 있는 곳을 찾습니다.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *이미지 예시: AWT에서 찾은 내부 링크 기회, A 페이지에서 B 페이지로 링크할 수 있다고 알려줍니다.*

#### 외부 링크:
  * 적절한 곳에 다른 고품질의 관련 외부 웹사이트를 참고 자료 또는 정보 출처로 링크하세요.
  * 예를 들어 데이터를 인용할 때 원본 보고서를 링크하고, 도구를 추천할 때 공식 웹사이트를 링크하세요.
  * **주의:** 광고 또는 후원 링크인 경우 `rel="nofollow"` 또는 `rel="sponsored"` 속성을 사용하여 검색 엔진에 알려야 합니다.

#### 페이지 경험:
   * 빠른 로딩 속도 (Core Web Vitals).
   * 휴대폰에서 좋은 브라우징 경험 (Mobile-Friendly).
   * HTTPS 암호화 사용 (보안).
   * 성가신 팝업 광고 없음 (No intrusive interstitials).
  * 이것은 일반적으로 웹사이트 전체 범위 최적화이지만, 새로운 페이지도 요구 사항을 충족하는지 확인해야 합니다.
  * **도구:** Google PageSpeed Insights 를 사용하여页面速度和体验，在 Google Search Console 查看相关报告。
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *图片示例：Google 的页面体验信号*

#### 争取"特殊展示位":
  * **特色片段 (Featured Snippet):** Google 有时会在搜索结果最顶端显示一个直接回答问题的框。如果你的页面已经排在前几名，并且内容里有对某个问题的直接、简洁的回答 (格式最好参考已有的 Snippet，如列表、段落)，就有机会被选中。
  * **富媒体片段 (Rich Snippet):** 通过在页面添加 Schema 标记 (一种结构化数据代码)，告诉 Google 你的内容是什么类型 (比如菜谱、FAQ、产品信息)，有时 Google 会在搜索结果中显示更丰富的信息 (如评分、价格、步骤)。
  * **工具:** 用 Google Search Console 查看哪些词你的排名靠前且 Google 显示了特色片段。用 Schema.dev 的 Schema Generator 生成 Schema 代码。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *图片示例：带有评分和评论数量的富媒体片段*

### 第四步：持续关注和更新

#### 监控效果:
 * 关注你的目标关键词排名变化。
 * 使用 Google Search Console 查看你的页面在 Google 搜索中的表现 (展示次数、点击次数、排名)。

#### 更新内容:
 * SEO 不是一次性工作。定期 (比如一年) 回顾你的内容，检查信息是否过时，链接是否失效，是否有新的信息可以补充。更新内容有助于保持排名。
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *图片示例：更新内容后带来的流量增长*

---

### 页面 SEO 工具包
* [Google Search](https://www.google.com/) (看意图, 看对手)
* [ChatGPT](https://chat.openai.com/) (想标题/描述点子)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (免费检查 H1, 标题, 描述, Alt文本, 找内链机会, 看关键词差距)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (在线图片压缩)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (测页面速度和体验)
* [Google Search Console](https://search.google.com/search-console/) (监控排名, 体验问题, 看关键词)
* [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (生成 Schema 代码)

</details>

---

<details>
<summary><h2>4、外部链接</h2></summary>

### 什么是外部链接 (外链)？

想象一下，互联网是一个巨大的关系网。当另一个网站 A 在它的页面上放了一个链接，指向你的网站 B，这就形成了一个从 A 到 B 的外部链接。Google 会把这个链接看作是网站 A 给网站 B 的一次"推荐"或"投票"。

通常来说，来自**权威高、相关性强**的网站的"投票"更有分量。

获得外链的方法很多，我们聚焦在最核心和风险最低的方法上：

### 1. 让别人主动链接你 (赚取链接 - Earn Links)

这是最理想、最被 Google 鼓励的方式，不那么"快"，但效果最持久。

**核心动作:** 创造出**高质量、有独特价值、值得被引用**的内容。这可以是：
 * 一个非常有用的免费在线工具或计算器。
 * 一份深入的、包含独家数据的行业研究报告。
 * 一篇极其详尽、解决用户痛点的终极指南或教程。
 * 一个新颖的观点或独特的资源列表。

当你的内容足够好，其他网站的作者在写相关主题时，就可能会发现你的内容并主动链接过来作为参考或推荐。

### 2. 自己"加"一点链接 

这种方法比较容易操作，但效果有限，要适度。

**核心动作:**
 * **行业目录:** 如果你的业务有实体或明确的行业归属 (如本地商家、软件公司)，找到几个**最知名、最权威**的行业垂直网站或商业目录，提交你的网站信息。例如，餐馆可以提交到 Yelp、TripAdvisor；软件可以提交到 Capterra、G2 等。(只做最重要那几个！)
 * **相关社区/论坛/问答:** 偶尔在你**真正参与并熟悉的**行业论坛、贴吧、知乎问答等社区，如果你的某个网页内容确实能帮助回答某个问题或补充某个讨论，可以**自然地**留下链接。**千万不要去不相关的社区发垃圾广告链接！** 这样做很可能被删除，甚至损害声誉。

### 3. "要"一点链接

直接向其他网站请求链接，成功率通常很低，因为别人为什么要帮你呢？但有几种相对合理的方式：

**核心动作:**
 * **客座博客:** 这是相对有效的方式。你为其他相关网站**免费写一篇高质量的文章**，作为回报，你可以在文章作者信息或内容中，包含一两个指向你自己网站的链接。
  * **怎么做 (简化版):** 找一些你觉得还不错的、和你主题相关的博客，看看他们是否接受投稿 (通常网站页脚或联系页面会有说明)。先从要求不那么高的博客开始尝试，写一篇你擅长且对他们读者有价值的文章。
 * **图片链接 (Image Link Building):** 如果你网站上有原创的图片、图表被其他网站使用了，但他们没有注明来源是你，你可以礼貌地联系他们，请求添加一个指向你原始图片页面的链接。
* **外展邮件模板:** `web.html` 文件没有提供可以直接复制使用的邮件模板。而且也提到，盲目发邮件请求链接的成功率非常低。如果你要做客座博客，需要根据对方网站的风格和要求，认真撰写你的投稿说明。

### 4. "买"链接？别碰！

**核心警告:** Ahrefs**明确指出不建议购买链接**。
 * 很容易买到对 SEO 没有帮助的垃圾链接，浪费钱。
 * 违反 Google 的站长指南，一旦被发现，你的网站可能会受到惩罚，导致排名大幅下降甚至被移除索引。

### 5. 维护好你已有的链接

辛辛苦苦获得的链接如果丢失了，那就太可惜了。

**核心动作:** 检查你网站上是否有页面打不开了 (404 Not Found)，但这些页面以前是有外部链接指向它们的。
**工具:** 使用免费的 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)。
**步骤:**
 1. 登录 Ahrefs Webmaster Tools，验证你的网站。
 2. 进入 Site Explorer (网站分析) 工具。
 3. 在左侧菜单选择 "Pages" (页面) -> "Best by links" (按反链数量排序)。
 4. 点击 "HTTP code" 筛选器，选择 "404 not found"。
 5. 查看报告列表。如果发现有 404 页面后面跟着较高的 "Referring domains" (引用域，表示有多少个网站链接到这个页面) 数量，说明这个失效页面曾经很重要。
 6. 找到你网站上与这个失效页面内容最相关的新页面 URL (如果没有完全对应的，首页也可以)。
 7. 设置 **301 重定向**，将这个 404 页面的 URL 永久重定向到你找到的新 URL。这样，指向旧 URL 的链接价值就能传递给新页面了。(如何设置 301 重定向取决于你的网站服务器和平台，你可能需要搜索具体教程，比如 "WordPress 如何设置 301 重定向")。
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *图片说明：使用 Ahrefs Site Explorer 的 Best by links 报告配合 404 过滤器，找到带有外部链接的失效页面 (示例来自 Ahrefs 博客)*

---

### 外部链接工具包

**必备 (免费):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): 查看你自己网站收到的链接，找到带链接的 404 页面进行修复，检查网站技术健康度。
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): 快速查看任何网站 (包括你的竞争对手) 的前 100 个外部链接，了解他们从哪里获得链接。
 * [Google Alerts](https://www.google.com/alerts): 设置与你的品牌名、网站名、核心主题相关的提醒。当网上出现相关新内容时，你会收到邮件通知。这有助于你发现别人提到了你但没加链接的情况 (可以去请求加上)，或是发现新的链接建设机会。

</details>

---

<details>
<summary><h2>5、其他优化</h2></summary>

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

</details>

---

<details>
<summary><h2>6、SEO 工具</h2></summary>

### 免费工具
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator):** 用于查找关键词。
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools):** 免费的网站诊断、关键词排名跟踪、内链机会查找、失效链接检查等工具集。
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker):** 快速查看网站的前 100 个外链。
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** Google Ads 内的关键词研究工具 (需要 Google Ads 账号)。
* **[Google 搜索框建议 (Google Suggest)](https://www.google.com/):** 在 Google 搜索时自动弹出的建议。
* **[Google 相关搜索](https://www.google.com/):** Google 搜索结果页底部的相关搜索词。
* **[Answer The Public](https://answerthepublic.com/):** 用于查找围绕关键词的问题和话题 (有每日使用限制)。
* **[Google Trends](https://trends.google.com/):** 查看关键词的搜索热度和趋势。
* **[ChatGPT (基础版)](https://chat.openai.com/):** 用于头脑风暴、生成内容、标题等。
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** 监控网站在 Google 搜索中的表现、收录情况、技术问题等。
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** 在线图片压缩工具。
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** 测试页面加载速度和用户体验。
* **[Schema Markup Generator (如 Schema.dev)](https://schema.dev/schema-generator/):** 生成结构化数据代码的工具。
* **[Google 搜索库 (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** 查看 Google 支持的 Schema 类型和富媒体摘要。
* **[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):** 测试网页的移动端友好性。
* **[Google Alerts](https://www.google.com/alerts):** 监控网络上提及特定关键词或品牌的新内容。
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** 前端框架，有助于构建 SEO 友好的网站。
* **行业目录/评论网站 (部分免费):** 如 [Yelp](https://www.yelp.com/)、[TripAdvisor](https://www.tripadvisor.com/)，可以提交基本的商业信息。

### 付费工具
* **[Ahrefs (核心套件)](https://ahrefs.com/):** 全功能的 SEO 工具平台，提供更深入的关键词研究、竞争对手分析、外链分析、网站诊断等。
* **[Semrush](https://www.semrush.com/):** 另一个全功能的 SEO 和营销工具平台，功能与 Ahrefs 类似。
* **[SimilarWeb](https://www.similarweb.com/):** 另一个全功能的 SEO 和营销工具平台，功能与 Ahrefs 类似。
* **[Answer The Public (付费版)](https://answerthepublic.com/):** 无使用次数限制。
* **[ChatGPT (高级版)](https://openai.com/chatgpt/):** 功能更强的 AI 模型。
* **行业目录/评论网站 (高级功能/广告):** 如 [Capterra](https://www.capterra.com/)、[G2](https://www.g2.com/)，可能提供付费推广或高级分析功能。

</details>

---

## 最后
마지막으로 개인적인 홍보를 하나 하겠습니다. 제가 개발한 도구인 [SparkNow](https://sparknow.cc/)는 프로젝트를 시작하는 데 도움을 주는 원스톱 솔루션입니다. SEO 검사, 외부 링크, 성능, 홍보 문구, 홍보 이미지까지 모두 처리해 드립니다. 관심 있는 분들은 사용해 보시고, 관심이 없으면 그냥 무시하셔도 됩니다. 위의 SEO 방법만 숙지해도 충분합니다.