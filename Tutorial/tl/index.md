# Napakasimpleng Gabay sa SEO (Search Engine Optimization)

## Layunin ng Gabay na Ito

Ang layunin ng gabay na ito ay para, pagkatapos mong basahin at sundin ito, magagawa mo ang SEO ng iyong website sa 80%, kahit hindi mo alam kung bakit, o kahit hindi mo alam kung ano ang SEO.

Kaya, hindi sasabihin sa iyo ng gabay na ito kung ano ang SEO, o magtuturo ng teorya tungkol sa SEO, sasabihin lamang nito sa iyo kung "paano gawin ang SEO".

Kaya, kung gusto mong matuto ng "what is seo", "how does seo work", inirerekomenda ko na tingnan mo ang [orihinal na bersyon ng gabay](https://ahrefs.com/blog/zh/how-do-search-engines-work/).

Kung gusto mong matuto ng "how to do seo", napakaganda ng gabay na ito para sa iyo.

Pero bago ka magsimula, tandaan mo na ito ay "teknik", hindi "karunungan".

Ang 90% ng nilalaman ng gabay na ito ay mula sa Ahrefs SEO tutorial, at maituturing itong pinaikling bersyon ng orihinal na gabay.

Narito ang orihinal na bersyon ng Ahrefs SEO tutorial, kung may oras ka, inirerekomenda ko na tingnan mo: https://ahrefs.com/blog/zh/how-do-search-engines-work/

Kung handa ka na, simulan na natin.

<!-- ignore start -->

## Talaan ng mga Nilalaman
* [Super Bilis na Bersyon, 10 Minuto Lang para Matuto at Magamit](#super-bilis-na-bersyon-10-minuto-lang-para-matuto-at-magamit)
* [Detalyadong Bersyon](#detalyadong-bersyon)
  * [1、Maghanap ng mga Keyword](#1maghanap-ng-mga-keyword)
  * [2、Paano Sumulat ng Nilalamang Pang-SEO](#2paano-sumulat-ng-nilalamang-pang-seo)
  * [3、On-Page SEO](#3on-page-seo)
  * [4、External Links (Mga Panlabas na Link)](#4external-links-mga-panlabas-na-link)
  * [5、Iba pang Pag-optimize](#5iba-pang-pag-optimize)
  * [6、Mga Tool para sa SEO](#6mga-tool-para-sa-seo)

<!-- ignore end -->

## Super Bilis na Bersyon, 10 Minuto Lang para Matuto at Magamit

### 0、Siguraduhin na Ang Website Mo Ay Ginawa Gamit ang Static na Pahina o Backend Rendering

Maraming baguhan ang maaaring makalimutan ito, at sa huli ay matutuklasan na may ginawa silang SEO pero walang epekto.

**Bakit?**

Dahil kaya ng mga search engine crawler (tulad ng Googlebot) na direktang basahin ang mga static na pahina o ang HTML na nilikha ng backend rendering, mas madali para sa kanila na i-crawl at maintindihan ang iyong mga pahina.

Samantala, ang ilang website na gumagamit ng JavaScript para bumuo ng nilalaman sa browser (client-side rendering), kailangan ng crawler ng mas maraming oras, at hindi pa tiyak kung papaganahin ng Google ang mga JS code na ito, na nakakaapekto sa pag-index at pagraranggo.

Gayundin, ang mga static o backend-rendered na pahina ay karaniwang mas mabilis mag-load, na nagbibigay ng mas magandang karanasan sa user, na pinapahalagahan din ng Google.

Inirerekomenda na gumamit ng mga framework tulad ng next.js, nuxt.js, atbp., na tumutulong sa iyo sa maraming gawaing SEO.

### 1、Maghanap ng mga Keyword

1. Mag-isip ng ilang salita na may kaugnayan sa iyong negosyo/website (halimbawa, ang website na ito ay tungkol sa SEO tutorial, kaya mag-isip ng "SEO", "Keyword Research", "Page Optimization", atbp.).
2. Gumamit ng mga keyword research tool (tulad ng Free Keyword Generator ng Ahrefs, Keyword Planner ng Google, Semrush, atbp.), para makahanap ng mas maraming kaugnay na salita.
3. Pumili ng ilang salita na sa tingin mo ay maaasahan at isulat ang mga ito.
4. Hayaan ang GPT na tulungan kang makahanap ng mas maraming keyword.

Mga dapat tandaan sa pagpili ng keyword:
* Dapat na may kaugnayan ang keyword sa iyong negosyo/website.
* Dapat na makapagdulot ng trapiko ang keyword.
* Dapat na may tiyak na dami ng paghahanap ang keyword, huwag nang piliin ang mga keyword na masyadong obskuro.
* Mas mababa ang KD (Keyword Difficulty, makikita sa mga keyword research tool) mas mabuti, dahil mas mababa ito, mas maliit ang kompetisyon, at mas madaling mag-rank.

### 2、Sumulat ng Nilalaman

1. **Tingnan ang Kalaban:** I-Google ang iyong salita, at tingnan kung **ano ang isinulat (uri, pormat, anggulo)** ng mga nasa unang ranggo.
2. **Pag-ugnayin ang Intensyon:** Tugunan ang impormasyon na gustong makita ng user kapag hinanap niya ang salitang ito (uri, pormat, anggulo).
3. **Sumulat ng Mahahalagang Impormasyon:** Ibahagi ang **tunay na karanasan**, lutasin ang problema ng user, at ipakita ang iyong propesyonalismo at karanasan.
4. **Magpakakumpleto:** Saklawin ang **mga kaugnay na punto** na gustong malaman ng user, at subukang maging mas kumpleto kaysa sa iyong kalaban.
5. **Magdagdag ng Highlight:** Magbigay ng kakaibang impormasyon o teknik na **wala sa iba**.
6. **Madaling Basahin:** Gumamit ng **maikling pangungusap, talata, at magdagdag ng mga larawan**, at suriin ang mga pagkakamali sa pagbaybay.
7. **Madalas Mag-update:** Siguraduhin na i-update agad ang mga lumang impormasyon.

### 3、I-optimize ang Pahina

1. **Meta Tags at Pamagat:**
 * **Pamagat ng Pahina (Title):** Nakakaakit, naglalaman ng keyword, at may katamtamang haba (mga 30 salita). (Hal: `<title>Ultimate Guide sa On-Page SEO (2024)</title>`)
 * **H1 Tag:** Gumamit ng isang H1 sa bawat pahina, buudin ang paksa ng pahina. (Hal: `<h1>Ultimate Guide sa On-Page SEO</h1>`)
 * **H2-H6 Tags:** Ginagamit para sa mga subtitle ng nilalaman, upang isaayos ang istraktura.
 * **Meta Description:** Ilarawan ang nilalaman ng pahina, umakit ng mga pag-click, maglaman ng keyword, at may katamtamang haba (mga 80 salita). (Hal: `<meta name="description" content="Matutunan ang lahat ng kaalaman sa On-Page SEO, mula sa keyword optimization hanggang sa mga teknikal na detalye, upang mapabuti ang ranggo ng iyong website!">`)

2. **Mga Link:**
 * **Internal Links:** Tumuturo sa iba pang kaugnay na pahina sa iyong website, pinakamahusay na gawin itong istrakturang pyramid, at huwag mag-iwan ng mga pahinang nakahiwalay, kung hindi ay hindi ito mahahanap ng Google. (Hal: `<a href="/keyword-research">Matutunan ang Keyword Research</a>`)
 * **External Links:** (Kung kinakailangan) Tumuturo sa mga mapagkakatiwalaang mapagkukunan ng impormasyon o kapaki-pakinabang na panlabas na mapagkukunan. (Hal: `<a href="https://example.com" rel="nofollow">Sanggunian</a>`)

3. **Mga Larawan:**
 * **Pangalan ng File:** Gumamit ng deskriptibong pangalan. (Hal: `page-seo-checklist.jpg`)
 * **Alt Text (Alternatibong Teksto):** Magdagdag ng Alt Text na naglalarawan sa nilalaman ng larawan. (Hal: `<img src="..." alt="Screenshot ng talahanayan ng checklist ng On-Page SEO">`)
 * **I-compress:** I-compress ang laki ng file ng larawan upang mapabilis ang pag-load.

4. **URL:**
 * **Maikling Paglalarawan:** Maikli, madaling maintindihan ang landas ng URL, pinakamahusay na maglaman ng keyword (gumamit ng `-` para paghiwalayin ang mga salita sa Ingles). (Hal: `/page-seo-guide/`)

5. **Karanasan:**
 * **Bilis ng Pahina (Core Web Vitals):** I-optimize ang bilis ng pag-load.
 * **Mobile-Friendly:** Siguraduhin na maganda ang karanasan sa mga mobile phone.
 * **HTTPS:** Gumamit ng HTTPS encryption.
 * **Walang Pagkaabala:** Iwasan ang labis na mga pop-up ad.
 * **(Opsyonal) Pag-optimize ng Featured Snippet:** Partikular na magbigay ng maikli at madaling maintindihan na sagot.
 * **(Opsyonal) Schema Markup:** Magdagdag ng structured data para tulungan ang Google na maintindihan ang nilalaman.

### 4、Magdagdag ng Mga Panlabas na Link (Backlink)
1. **Sumulat ng Mahusay na Nilalaman:** Pagsikapan na gawing **napakaganda, napaka-kapaki-pakinabang** ang nilalaman, para gustong banggitin ng ibang tao ang iyong artikulo o irekomenda ang iyong mga tool. (Ito ang pinaka-pangunahing at pinaka-pangmatagalang paraan)
2. **Isumite ang Mga Panlabas na Link:** Isumite ang iyong website sa **ilang pinakamahalaga at pinaka-mapagkakatiwalaang website ng direktoryo ng industriya** (tulad ng 到航站, atbp.).
3. **Sumulat ng Mga Post:** Kung gusto mong magsulat, maaari mong subukang **magsulat ng mga guest blog** para sa iba pang mga website na may kaugnayan sa iyong paksa, at maaari kang natural na maglagay ng link na tumuturo sa iyong website sa artikulo.
4. **Huwag Bumili ng Mga Link:** **Mahigpit na hindi inirerekomenda** ng Ahrefs na bumili ng mga link, dahil napakataas ng panganib, at maaari kang magsayang ng pera at magdulot ng parusa mula sa Google sa iyong website.

### 5、Iba pa
1. **Suriin ang Pag-index:** Pumunta sa [Google Search Console](https://search.google.com/search-console/about) (libre, na tatawagin sa GSC sa mga susunod), gamitin ang function na "URL Inspection" para tingnan kung mahahanap ng Google ang iyong mga mahahalagang pahina.
2. **Ayusin ang Mga Patay na Link (Broken Links):** Kung binago mo ang URL o nagtanggal ng pahina, gamitin ang [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (libre, na tatawagin sa AWT sa mga susunod) para hanapin ang mga pahina na naging 404 ngunit mayroon dating mga panlabas na link na tumuturo sa mga ito, at i-redirect ang mga ito sa mga bagong pahina gamit ang 301 redirect.
3. **Umangkop sa Maraming Wika:** Kung malaki ang kompetisyon ng iyong website, subukang umangkop sa maraming wika. Maraming website ang nakikipagkumpitensya lamang sa Ingles, at pagkatapos mong umangkop sa maraming wika, makakakuha ka ng mas maraming trapiko.
4. **Gumawa ng Sitemap:** Gumawa ng `sitemap.xml` file, ilista ang lahat ng mahahalagang pahina sa iyong website, at isumite ito sa Google Search Console upang matulungan ang Google na mas mabilis at mas ganap na matuklasan ang iyong nilalaman.
    *   **Halimbawa (basehang istraktura ng sitemap.xml):**
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
5.  **Hreflang (Mga Tag para sa Maraming Wika):** Kung ang iyong website ay may maraming wika o nilalaman na nakatuon sa iba't ibang rehiyon, gamitin ang `hreflang` tag para sabihin sa Google ang iba't ibang bersyon ng wika/rehiyon ng bawat pahina, upang maiwasan ang mga problema sa pag-uulit ng nilalaman, at tiyakin na ang tamang bersyon ay ipinapakita sa tamang user.
    *   **Halimbawa (sa HTML `<head>`):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Tandaan: ginagamit ang `x-default` para tukuyin ang default o bersyon na walang partikular na rehiyon ng wika)*
6.  **Robots.txt (Protocol ng Crawler):** Maglagay ng `robots.txt` file sa root directory ng website para sabihin sa mga search engine crawler kung aling mga pahina o direktoryo ang ayaw mong bisitahin o i-index ng mga ito (tulad ng mga pahina ng pamamahala sa background, mga pahina ng pagsubok, atbp.).
    *   **Halimbawa (nilalaman ng robots.txt):**
        ```
        User-agent: *          # Inilalapat sa lahat ng crawler
        Disallow: /admin/       # Ipinagbabawal ang pagbisita sa /admin/ directory
        Disallow: /private.html # Ipinagbabawal ang pagbisita sa /private.html file
        Allow: /public/        # Malinaw na pinapayagan ang pagbisita sa /public/ directory (kung ang direktoryo sa itaas ay ipinagbabawal)

        User-agent: Googlebot   # Inilalapat lamang sa Google crawler
        Disallow: /tmp/         # Ipinagbabawal ang pagbisita ng Google crawler sa /tmp/ directory
        Sitemap: http://www.example.com/sitemap.xml # Ituro ang lokasyon ng Sitemap
        ```
7.  **Canonical (Canonical Tag):** Kung ang iyong website ay may maraming pahina na may parehong nilalaman o halos magkatulad (tulad ng mga URL na may mga parameter), gamitin ang `canonical` tag para tukuyin kung aling bersyon ang "opisyal", para maiwasan na ituring ng mga search engine ang mga ito bilang duplicate na nilalaman at ikalat ang bigat.
    *   **Halimbawa (sa HTML `<head>`):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Tandaan: kahit na sa pahinang `http://www.example.com/product-page?ref=banner`, dapat ituro ang canonical URL na walang parameter)*
8.  **Schema Markup (Structured Data):** Magdagdag ng Schema markup sa code ng pahina, gamit ang isang standardisadong format para ipaliwanag sa Google ang kahulugan ng nilalaman ng pahina (tulad ng ito ay isang recipe, produkto, FAQ), na tumutulong sa Google na maintindihan ang nilalaman, at maaaring magpakita ng mas mayamang estilo sa mga resulta ng paghahanap (tulad ng mga rating, hanay ng presyo, atbp.), na nagpapataas ng click-through rate.
    *   **Halimbawa (format ng JSON-LD, ilagay sa loob ng `<script>` tag):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Ano ang SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ang SEO (Search Engine Optimization) ay tumutukoy sa proseso ng pagpapabuti ng ranggo ng isang website sa mga resulta ng natural na paghahanap ng mga search engine (tulad ng Google) sa pamamagitan ng pag-optimize ng nilalaman at mga teknikal na aspeto ng website."
            }
          },{
            "@type": "Question",
            "name": "Gaano katagal bago makita ang epekto ng SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ang oras na kinakailangan para lumitaw ang mga resulta ng SEO ay nag-iiba depende sa iba't ibang mga kadahilanan tulad ng pundasyon ng website, antas ng kompetisyon, at mga mapagkukunang inilaan, at karaniwang tumatagal ng ilang linggo hanggang ilang buwan o kahit na mas matagal upang makita ang halatang mga resulta."
            }
          }]
        }
        ```

## Detalyadong Bersyon

<details>
<summary><h2>1、Maghanap ng mga Keyword</h2></summary>

### Unang Hakbang: Mag-isip ng "Seed Keywords"

Ang "seed keywords" ay ang pinakapangunahin at pinakamahalagang salita. Huwag mag-isip ng masyadong kumplikado, tanungin ang iyong sarili ng ilang katanungan:

* Paano hahanapin ng ibang tao ang iyong produkto o serbisyo online? (Halimbawa: "murang coffee beans", "paano gumawa ng pour over coffee")
* Anong mga salita ang ginagamit ng iyong mga kakompetensya sa kanilang mga website?
* Kung ikaw ang customer, ano ang hahanapin mo?

**Halimbawa:**
Ipagpalagay na mayroon kang online store na nagbebenta ng coffee beans, ang iyong mga seed keywords ay maaaring magsama ng:
* Coffee beans
* Arabica coffee beans
* Pour over coffee
* Coffee maker
* Bumili ng coffee beans

**Munting Tip:**

Hindi ka talaga makapag-isip? Maaari mong subukang tanungin ang ChatGPT (o AI), para tulungan kang mag-brainstorm ng ilang salita na may kaugnayan sa iyong negosyo.

Ilista ang lahat ng naiisip mo, mas marami, mas mabuti.

### Pangalawang Hakbang: Gumamit ng mga Libreng Tool Para Makahanap ng Mas Maraming Keyword

Hindi sapat ang pag-iisip lamang, gumamit ng mga tool para tulungan kang makahanap ng mas maraming kaugnay na salita, hindi kailangang gamitin ang lahat, pumili lamang ng ilan na angkop sa iyo.

**Tool 1: Ahrefs Free Keyword Generator** (Inirerekomenda, ganap na libre)

1. Buksan ang [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator).
2. Ilagay ang mga "seed keywords" na naisip mo kanina isa-isa.
3. Piliin ang iyong target na bansa (halimbawa: Pilipinas).
4. I-click ang "Find keywords".

Makakakita ka ng isang grupo ng mga kaugnay na mungkahi ng keyword, pagtuunan ng pansin ang dalawang kategoryang ito:

* **Phrase Match (Pagtutugma ng Parirala):** Mga parirala na naglalaman ng iyong seed word. Halimbawa, kung maghanap ka ng "coffee beans", maaari mong makita ang "organic coffee beans", "Yirgacheffe coffee beans".
* **Questions (Mga Tanong):** Mga pangungusap ng tanong na naglalaman ng iyong seed word. Halimbawa, kung maghanap ka ng "pour over coffee", maaari mong makita ang "anong mga tool ang kailangan para sa pour over coffee", "paano gumawa ng masarap na pour over coffee".

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*Halimbawa ng larawan: Gumagamit ng keyword tool tulad ng Ahrefs upang maghanap ng mga keyword na may kaugnayan sa "aeropress", maaari mong makita ang buwanang dami ng paghahanap at iba pang impormasyon. Ang interface ng libreng tool ay katulad, na nagbibigay ng listahan ng keyword.*

**Tool 2: Google Search Box & Kaugnay na Paghahanap**

1. Buksan ang Google Search.
2. Ipasok ang iyong seed keyword, tingnan ang mga mungkahi na awtomatikong lumalabas sa search box (Google Suggest). Ito ang mga madalas hanapin ng mga tao.
3. Pagkatapos mong maghanap, pumunta sa ilalim ng pahina, at tingnan ang seksyon ng "Kaugnay na Paghahanap". Ito rin ay isang magandang lugar para maghanap ng mga kaugnay na salita.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**Tool 3: Answer The Public**

1. Buksan ang [Answer The Public](https://answerthepublic.com/).
2. Ipasok ang iyong seed keyword (inirerekomenda na gumamit ng Ingles, maaaring mas maganda ang epekto).
3. Piliin ang bansa/wika.
4. Bubuo ito ng isang grupo ng mga tanong, prepositional phrases, paghahambing, atbp. sa paligid ng iyong keyword, para tulungan kang maunawaan kung ano ang partikular na hinahanap ng mga user. Ang libreng bersyon ay may limitasyon sa bilang ng mga paggamit bawat araw.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**Tool 4: Google Trends** (Tingnan ang Popularidad, Maghanap ng Trends)

1. Buksan ang [Google Trends](https://trends.google.com/).
2. Ipasok ang iyong seed keyword.
3. Maaari mong makita ang pagbabago ng trend ng popularidad ng paghahanap ng salitang ito, matuklasan ang mga seasonal na pagbabago o biglaang sikat na mga paksa.
4. Maaari mo ring makita ang mga kaugnay na query, para makahanap ng iba pang sikat na salita na hinahanap din ng mga tao.

**Tool 5: ChatGPT**

1. Buksan ang [ChatGPT](https://chat.openai.com/) o iba pang katulad na AI tool.
2. Hayaan itong bumuo ng mas maraming kaugnay na mga keyword, paksa, o tanong batay sa iyong seed keyword. Halimbawa, maaari mong itanong: "Nagbebenta ako ng coffee beans, bigyan mo ako ng ilang kaugnay na mga keyword o tanong na maaaring hanapin ng mga tao".

**Tool 6: Google Keyword Planner** (Libre, ngunit nangangailangan ng Google Ads account)

Kung mayroon kang Google Ads account (maaari kang magrehistro ng libre, hindi mo kailangang gumastos ng pera upang maglagay ng mga ad), maaari mong gamitin ang Keyword Planner.

1. Mag-log in sa Google Ads, hanapin ang "Tools & Settings" -> "Planning" -> "Keyword Planner".
2. Piliin ang "Discover new keywords".
3. Ipasok ang iyong seed keyword.

Magbibigay ito ng mga pagtatantiya ng dami ng paghahanap at mas maraming mungkahi ng keyword. Gayunpaman, ang dami ng paghahanap na ipinapakita sa libreng bersyon ay isang saklaw, na hindi masyadong tumpak.

### Ikatlong Hakbang: Bisitahin ang mga Forum/Komunidad/Thread/Q&A Websites

* **Bisitahin ang mga kaugnay na forum/komunidad/thread/Q&A websites:** Halimbawa, kung nagtatrabaho ka sa kape, pumunta sa mga forum ng mahilig sa kape, kaugnay na mga paksa sa Zhihu, mga grupo ng Douban para tingnan kung ano ang itatanong, tatalakayin, at gagamitin ng lahat na mga salita.
* **Tingnan ang seksyon ng komento:** Maaaring may mga tunay na termino sa paghahanap ng user na nakatago sa mga komento ng iyong mga kakompetensya, mga pahina ng e-commerce ng mga kaugnay na produkto, at mga post sa social media.

**Halimbawa:** Sa isang forum ng kape, nakita mo ang isang tao na nagtatanong "Paano gumawa ng pour over nang walang filter paper", ito ay maaaring isang magandang keyword na hindi mo naisip dati!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### Keyword Tool Kit

* **Tool kit:**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (Pangunahing, libre)
 * Google Search Box & Kaugnay na Paghahanap (Pantulong, libre)
 * [Answer The Public](https://answerthepublic.com/) (Maghanap ng mga Tanong, libre, may limitasyon sa araw)
 * [Google Trends](https://trends.google.com/) (Tingnan ang mga Trend, libre)
 * [ChatGPT](https://chat.openai.com/) (AI brainstorm, libre)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (Nangangailangan ng Ads account, libre)
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools):** Mas malakas na libreng tool set, ngunit kailangan mong patunayan na pagmamay-ari mo ang iyong sariling website. Maaari mong makita kung aling mga keyword ang kasalukuyang nagraranggo sa iyong website, pati na rin ang pagtuklas ng mga keyword na may mababang kompetisyon, atbp.

</details>

---

<details>
<summary><h2>2、Paano Sumulat ng Nilalamang Pang-SEO</h2></summary>

### Hakbang 1: Alamin Kung Ano ang Gustong Makita ng User (Pagsusuri ng Intensyon ng Paghahanap)

Dapat mong malaman kung anong uri, format, at anggulo ng nilalaman ang gustong makita ng taong naghahanap sa salitang ito.

1. Maghanap sa Google ng iyong keyword.
2. Tingnan ang nangungunang 5-10 resulta:
  * **Uri:** Artikulo ba? Pahina ng produkto? Video?
  * **Format:** Tutorial ba? Checklist? Pagsusuri?
  * **Anggulo:** "Panimula" ba? "Mura"? "Pinakabago"?
3. **Gayahin:** Ang iyong uri, format, at anggulo ng nilalaman ay dapat manatiling pareho sa pangunahing nilalaman.

### Hakbang 2: Isulat Kung Ano ang Alam Mo (Pagpapakita ng Karanasan E-E-A-T)

Gawing kapani-paniwala ang nilalaman, ipakita na talagang alam mo ito.
 * **Isulat ang iyong personal na karanasan o kung saan ka mahusay.**
 * Gumamit ng "ako" para magbahagi ng mga karanasan at opinyon.
 * (Kung naaangkop) Banggitin ang iyong background o mga nagawa.

### Hakbang 3: Saklawin ang Lahat (Kumpletong Nilalaman)

Sagutin ang karamihan sa mga tanong ng user tungkol sa paksang ito.

 1. Gumamit ng mga tool para maghanap ng mga kaugnay na tanong/long-tail keyword sa ilalim ng keyword na ito.
 2. Tingnan ang mga subtitle ng nangungunang artikulo, at hanapin ang mga puntong sinasaklaw ng mga ito.
 3. Idagdag ang mga puntong nakita mo at sa tingin mo ay mahalaga sa iyong nilalaman.

Tandaan: Ang pagiging kumpleto ay hindi nangangahulugang pagiging masalita, magsulat ayon sa intensyon ng user.

### Hakbang 4: Magkaroon ng isang Espesyal (Pagiging Kakaiba)

Bigyan ang user ng dahilan para basahin ang iyong artikulo sa halip na ang iba.

 * Magbahagi ng isang natatanging diskarte, buod ng karanasan, o pananaw.
 * Magbigay ng isang maliit na mapagkukunan na wala sa iba (tulad ng isang template, checklist).
 * (Advanced) Gumawa ng isang maliit na eksperimento o ibahagi ang data.

### Hakbang 5: Gawing Madali ang Pagbabasa (Pagiging Madaling Basahin)

Komportable ang user na basahin, gustong magpatuloy sa pagbabasa.

 * Maikling pangungusap, maraming talata.
 * Gumamit ng mga subtitle para paghiwalayin ang nilalaman.
 * Gumamit ng mga larawan upang ipaliwanag o mapawi ang pagkapagod.
 * Gumamit ng naka-bold, mga listahan para i-highlight ang mga pangunahing punto.

### Hakbang 6: Panatilihing Na-update

Iwasan ang pagbagsak ng ranggo dahil sa lipas na nilalaman.

 * Regular na suriin (halimbawa, taun-taon): Tama pa ba ang impormasyon? May bisa pa ba ang link?
 * I-update ang nilalaman: Baguhin ang lipas na impormasyon, magdagdag ng bagong nilalaman.
 * Markahan ang petsa ng pag-update: Ipalaman sa user na ito ang pinakabago.

---

</details>

---

<details>
<summary><h2>3、On-Page SEO</h2></summary>

### Unang Hakbang: Hayaan ang mga Search Engine at User na "Maintindihan" ang Iyong Pahina

Itugma ang intensyon ng paghahanap.
 * Maghanap sa Google para sa iyong keyword, tingnan ang nangungunang 5-10 resulta. Pansinin ang uri ng kanilang nilalaman (artikulo/pahina ng produkto/?), format ng nilalaman (tutorial/checklist/pagsusuri/?), at anggulo ng nilalaman ("panimula"/"mura"/"pinakabago"?).
 * Dapat na pareho ang iyong nilalaman sa kanila, at ibigay sa mga user ang gusto nilang makita.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *Halimbawa ng larawan: Paghahanap ng "avocado seed", ang mga resulta ay karamihan ay gabay na artikulo na nagtuturo sa iyo kung paano itanim ang mga ito, at ang anggulo ay "simple at madali", na nagpapakita na ang mga user ay mga nagsisimula.*

#### Sumulat ng Isang Magandang "Pamagat" (Title Tag):
  * Naglalaman ng pangunahing keyword.
  * Pinakamainam na hindi lalampas sa 70 karakter (mga 30 Chinese character), kung hindi, hindi ito ganap na ipapakita.
  * Malinaw at nakakaakit, ginagawang gustong i-click ng mga tao.
  * Huwag gumawa ng dalisay na "pamagat", dapat itong naaayon sa nilalaman.
  * Kung ang nilalaman ay nakatuon sa napapanahong paksa (tulad ng isang tutorial), maaari kang magdagdag ng taon.
  * **Tool:** Maaari kang humingi ng tulong sa ChatGPT na mag-brainstorm ng ilang mga pamagat. Gumamit ng Site Audit ng Ahrefs Webmaster Tools (AWT) para suriin kung ang pamagat ay masyadong mahaba o nawawala.

 ![Halimbawa ng larawan: Isang magandang halimbawa ng pamagat](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### Sumulat ng Magandang "Mukha" (Meta Description):
  * Ito ang paglalarawan na teksto sa ibaba ng pamagat sa mga resulta ng paghahanap. Kahit na hindi ito direktang nakakaapekto sa ranggo, nakakaapekto ito sa click-through rate.
  * Pinakamainam na ang haba ay hindi lalampas sa 160 karakter (mga 80 Chinese character).
  * Maaari itong ituring na isang pandagdag sa pamagat, at maglagay ng ilang selling point na hindi mailagay sa pamagat.
  * Naglalaman ng mga keyword (ibibigay ng Google ang mga ito).
  * Gumamit ng aktibong tinig, at direktang sabihin sa mga user kung ano ang maaari mong ibigay.
  * **Tool:** Maaari kang humingi ng tulong sa ChatGPT na magsulat ng ilang bersyon. Gumamit ng Site Audit ng Ahrefs Webmaster Tools (AWT) para suriin kung ito ay nawawala o masyadong mahaba.
 ![Halimbawa ng larawan: Isang magandang halimbawa ng Meta Description](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### Mag-isip ng Magandang "Pangalan ng Website" (URL):
  * Ang landas ng URL (ang bahagi pagkatapos ng domain name) ay dapat na maikli at madaling maunawaan.
  * Naglalaman ng pangunahing keyword (gumamit ng Ingles o Pinyin, gamitin ang `-` para ikonekta ang mga salita).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *Halimbawa ng larawan: mas maganda ang `domain.com/learn-seo` kaysa sa `domain.com/p=123`*

#### Ang Nilalaman ay Dapat Magkaroon ng "Balangkas"(Heading Tags: H1-H6):
  * Gumamit ng H1-H6 tags para ayusin ang nilalaman, bumuo ng malinaw na hierarchical structure, para sa madaling pagbabasa.
  * **H1 Tag:** Gumamit ng isa lamang sa bawat pahina, karaniwang may parehong kahulugan o malapit sa pamagat ng pahina (Title Tag).
  * **H2-H6 Tags:** Gamitin bilang mga subtitle ng bawat seksyon.
  * **Tool:** Gamitin ang Site Audit ng Ahrefs Webmaster Tools (AWT) para suriin kung ang H1 tag ay nawawala o nauulit.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *Halimbawa ng larawan: Paggamit ng H tags para lumikha ng visual hierarchy*

### Pangalawang Hakbang: Sumulat ng "Makabuluhan" at "Natatanging" Nilalaman

#### Ang Nilalaman ay Dapat "Kompleto":
  * Tiyakin na nasasaklaw ng iyong nilalaman ang pangunahing aspeto at tanong na maaaring gustong malaman ng mga user kapag naghahanap sila ng keyword na ito.
  * Tingnan kung anong mga subtitle (H2, H3) ang tinalakay sa mga nangungunang artikulo sa mga resulta ng paghahanap ng Google.
  * Tingnan ang "Mga Kaugnay na Paghahanap" sa ilalim ng pahina ng mga resulta ng paghahanap ng Google.
  * **Tool:** (Opsyonal) Gamitin ang Site Explorer ng Ahrefs Webmaster Tools (AWT) para tingnan kung aling karaniwang keyword ang nagdadala ng trapiko sa iyong website at mga website ng iyong mga kakompetensya (Content Gap Function), para makahanap ng mga sub-topic na maaari mong dagdag.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *Halimbawa ng larawan: Pagsusuri sa mga artikulo ng mga kalaban, natuklasan na binanggit nila ang "pagkansela ng subscription" bilang isang paraan upang makatipid ng pera, maaari mong isaalang-alang na idagdag ang puntong ito sa iyong artikulo.*

#### Ang Nilalaman ay Dapat "Espesyal":
  * Huwag lamang ulitin ang mga salita ng iba, magbigay ng natatanging halaga.
  * Maaari itong: ang iyong natatanging pananaw o buod ng karanasan, isang maliit na diskarte na wala sa iba, isang orihinal na pagsusuri ng kaso, isang libreng template o checklist.
  * Ang layunin ay bigyan ang user ng isang dahilan upang "i-bookmark" o "ibahagi" ang iyong artikulo.

#### Ipakita ang iyong "Propesyonalismo" o "Karanasan":
  * Kung sumusulat ka tungkol sa isang propesyonal na larangan (tulad ng medikal, pananalapi) o nilalaman na nangangailangan ng personal na karanasan (tulad ng pagsusuri ng produkto), ipakita ang iyong propesyonalismo o tunay na karanasan.
  * Malinaw na ipaliwanag ang pinagmulan ng impormasyon (sipi, mga link), magbigay ng isang panimula sa background ng may-akda (link sa pahina ng pagpapakilala ng may-akda), ibahagi ang iyong mga hakbang sa pagpapatakbo o karanasan sa paggamit (mga larawan, video), at tiyakin ang kawastuhan ng katotohanan ng nilalaman.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *Halimbawa ng larawan: Ipakita ang iyong aktwal na karanasan sa paggamit sa pagsusuri ng produkto.*

### Ikatlong Hakbang: I-optimize ang mga Detalye para Mapahusay ang Karanasan

#### I-optimize ang Mga Larawan:
  * **Pangalan ng File:** Pangalanan ang file ng larawan na may naglalarawang mga salita, at paghiwalayin ang mga salitang Ingles o Pinyin na may `-` (tulad ng `black-puppy-play-ball.jpg` o `heise-xiaogou-wanqiu.jpg`).
  * **Alternatibong Teksto (Alt Text):** Ito ay isang paglalarawan ng larawan para sa mga search engine at mga user na may kapansanan sa paningin. Magdagdag ng isang `alt` na katangian sa HTML `<img>` tag, at ilarawan ang nilalaman ng larawan sa maigsi na wika, na maaaring natural na maglaman ng mga keyword. (Halimbawa: `<img src="小狗玩球.jpg" alt="一只黑色拉布拉多小狗在草地上玩红色球">`)
  * **Compress Pictures:** Ang masyadong malalaking larawan ay mabagal mag-load. Gumamit ng mga tool para i-compress ang laki ng larawan habang pinapanatili ang kalinawan hangga't maaari.
  * **Tool:** Gumamit ng Site Audit ng Ahrefs Webmaster Tools (AWT) para suriin kung ang mga larawan ay kulang sa Alt text. Gumamit ng mga online na tool tulad ng TinyPNG o iLoveIMG para i-compress ang mga larawan.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *Halimbawa ng larawan: Magandang halimbawa ng Alt text*

#### Internal Links:
  * Sa iyong artikulo, mag-link sa iba pang mga kaugnay na artikulo o pahina sa iyong website.
  * Nakakatulong ito sa mga user na tumuklas ng mas maraming nilalaman, at tumutulong din sa mga search engine na maunawaan ang istraktura ng iyong website at mga relasyon sa pahina.
  * **Tool:** Gumamit ng "Internal link opportunities" function sa Site Audit ng Ahrefs Webmaster Tools (AWT) para makahanap ng mga lugar kung saan maaari kang magdagdag ng mga internal link.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *Halimbawa ng larawan: AWT na natagpuang mga pagkakataon sa panloob na pag-link, na nagpapahiwatig na maaari kang mag-link mula sa Pahina A patungo sa Pahina B.*

#### External Links:
  * Sa naaangkop na mga lugar, mag-link sa iba pang mga de-kalidad, mga kaugnay na panlabas na website bilang sanggunian o pinagmulan ng impormasyon.
  * Halimbawa, mag-link sa orihinal na ulat kapag sumisipi ng data, at mag-link sa opisyal na website kapag nagrerekomenda ng mga tool.
  * **Tandaan:** Kung ito ay isang advertisement o naka-sponsor na link, gumamit ng `rel="nofollow"` o `rel="sponsored"` na katangian upang sabihin sa mga search engine.

#### Karanasan sa Pahina:
   * Mabilis na bilis ng pag-load (Core Web Vitals).
   * Magandang karanasan sa pag-browse sa mga mobile phone (Mobile-Friendly).
   * Gumamit ng HTTPS encryption (secure).
   * Walang nakakainis na mga pop-up ad (No intrusive interstitials).
  * Ang mga ito ay karaniwang pag-optimize sa buong site, ngunit dapat tiyakin na ang mga bagong pahina ay nakakatugon din sa mga kinakailangan.
  * **Tool:** Gamitin ang Google PageSpeed Insights para subukan ang bilis ng pahina at karanasan. Tingnan ang mga nauugnay na ulat sa Google Search Console.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *Halimbawa ng larawan: Mga signal ng karanasan sa pahina ng Google*

#### Sikaping Makakuha ng "Espesyal na Mga Placement ng Display":
  * **Featured Snippet:** Minsan ipinapakita ng Google ang isang kahon sa pinakatuktok ng mga resulta ng paghahanap na direktang sumasagot sa tanong. Kung ang iyong pahina ay mayroon na sa tuktok na ilang ranggo, at may isang direkta at maigsi na sagot sa isang tanong sa nilalaman (mas mainam na sumangguni sa umiiral na Snippet para sa format, tulad ng mga listahan, mga talata), may pagkakataon na mapili.
  * **Rich Snippet:** Sa pamamagitan ng pagdaragdag ng Schema markup (isang uri ng structured data code) sa pahina, sabihin sa Google kung anong uri ng iyong nilalaman (tulad ng mga recipe, FAQ, impormasyon ng produkto), minsan magpapakita ang Google ng mas mayamang impormasyon sa mga resulta ng paghahanap (tulad ng mga rating, presyo, mga hakbang).
  * **Tool:** Gamitin ang Google Search Console para tingnan kung aling mga termino ang iyong ranggo sa tuktok para sa at ipinapakita ng Google ang mga itinatampok na snippet. Gamitin ang Schema Generator ng Schema.dev para bumuo ng Schema code.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *Halimbawa ng larawan: Isang Rich snippet na may mga rating at bilang ng mga review*

### Ikaapat na Hakbang: Patuloy na Pagbigyan ng Pansin at Pag-update

#### Subaybayan ang Epekto:
 * Bigyan ng pansin ang mga pagbabago sa ranggo ng iyong target na mga keyword.
 * Gamitin ang Google Search Console para tingnan ang performance ng iyong pahina sa Google Search (mga impression, mga pag-click, ranggo).

#### I-update ang Nilalaman:
 * Ang SEO ay hindi isang beses lamang na trabaho. Regular (halimbawa, isang beses sa isang taon) na balikan ang iyong nilalaman, suriin kung ang impormasyon ay lipas na, kung ang mga link ay hindi na gumagana, at kung may bagong impormasyon na maaaring idagdag. Ang pag-update ng nilalaman ay tumutulong na mapanatili ang ranggo.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *Halimbawa ng larawan: Ang paglago ng trapiko na dinala ng pag-update ng nilalaman*

---

### On-Page SEO Toolkit
* [Google Search](https://www.google.com/) (Tingnan ang layunin, tingnan ang kalaban)
* [ChatGPT](https://chat.openai.com/) (Mga ideya para sa pamagat/paglalarawan)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (Libreng suriin ang H1, pamagat, paglalarawan, Alt text, maghanap ng mga pagkakataon sa panloob na pag-link, tingnan ang puwang ng mga keyword)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (Online image compression)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (Sukatin ang bilis ng pahina at karanasan)
* [Google Search Console](https://search.google.com/search-console/) (Subaybayan ang ranggo, mga problema sa karanasan, tingnan ang mga keyword)
* [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (Bumuo ng Schema code)

</details>

---

<details>
<summary><h2>4、External Links (Mga Panlabas na Link)</h2></summary>

### Ano ang External Link (Backlink)?

Isipin na ang internet ay isang malaking network ng mga relasyon. Kapag ang isa pang website A ay naglagay ng isang link sa kanyang pahina, na tumuturo sa iyong website B, ito ay bumubuo ng isang panlabas na link mula A patungo sa B. Ituturing ng Google ang link na ito bilang isang "rekomendasyon" o "boto" mula sa website A para sa website B.

Karaniwan, ang "boto" mula sa mga website na **mataas ang awtoridad at malakas ang kaugnayan** ay mas mahalaga.

Maraming mga paraan upang makakuha ng mga panlabas na link, tututok kami sa pinakamahalaga at pinakamababang panganib na mga paraan:

### 1. Hayaan ang Iba na Kusang Mag-link sa Iyo (Kumita ng Mga Link - Earn Links)

Ito ang pinaka-ideal at pinakanahihiyaan na paraan ng Google, hindi masyadong "mabilis", ngunit ang epekto ay pinakamatagal.

**Pangunahing Aksyon:** Lumikha ng **de-kalidad, may natatanging halaga, karapat-dapat na sipiin** na nilalaman. Ito ay maaaring:
 * Isang napakakapaki-pakinabang na libreng online tool o calculator.
 * Isang malalim na ulat ng pananaliksik sa industriya na naglalaman ng eksklusibong data.
 * Isang napaka-detalyadong, naglutas ng sakit ng user na panghuling gabay o tutorial.
 * Isang bagong pananaw o isang natatanging listahan ng mga mapagkukunan.

Kapag ang iyong nilalaman ay sapat na mahusay, ang mga may-akda ng iba pang mga website ay maaaring matuklasan ang iyong nilalaman at kusang mag-link pabalik dito bilang sanggunian o rekomendasyon kapag nagsusulat tungkol sa mga kaugnay na paksa.

### 2. "Magdagdag" ng Kaunting Link sa Iyong Sarili

Ang paraan na ito ay medyo madaling patakbuhin, ngunit ang epekto ay limitado, at dapat na katamtaman.

**Pangunahing Aksyon:**
 * **Directory ng Industriya:** Kung ang iyong negosyo ay may pisikal o malinaw na pag-uuri sa industriya (tulad ng mga lokal na negosyo, mga kumpanya ng software), maghanap ng ilang **pinaka-kilala at pinaka-makapangyarihang** mga website ng industriya o direktoryo ng negosyo, at isumite ang impormasyon ng iyong website. Halimbawa, maaaring isumite ang mga restaurant sa Yelp, TripAdvisor; maaaring isumite ang software sa Capterra, G2, atbp. (Gawin lamang ang pinakamahalaga!)
 * **Kaugnay na Komunidad/Forum/Q&A:** Paminsan-minsan, sa mga komunidad tulad ng mga forum ng industriya, mga thread, mga Zhihu Q&A, atbp. na **talagang nakikilahok ka at pamilyar**, kung ang nilalaman ng iyong website ay talagang makakatulong na sagutin ang isang tanong o magdagdag ng isang talakayan, maaari kang **natural** na mag-iwan ng link. **Huwag mag-post ng mga spam ad link sa hindi nauugnay na mga komunidad!** Sa paggawa nito, maaaring tanggalin, o kahit na makapinsala sa reputasyon.

### 3. "Humingi" ng Kaunting Link

Direktang humiling ng mga link sa iba pang mga website, kadalasan mababa ang rate ng tagumpay, dahil bakit ka tutulungan ng iba? Ngunit may ilang medyo makatwirang paraan:

**Pangunahing Aksyon:**
 * **Guest Blog:** Ito ay isang medyo epektibong paraan. **Sumulat ka ng isang de-kalidad na artikulo nang libre** para sa iba pang mga kaugnay na website, at bilang kapalit, maaari mong isama ang isa o dalawang link na tumuturo sa iyong sariling website sa impormasyon ng may-akda ng artikulo o nilalaman.
  * **Paano Gawin (Pinasimple na Bersyon):** Maghanap ng ilang mga blog na sa tingin mo ay medyo mahusay at nauugnay sa iyong paksa, at tingnan kung tinatanggap nila ang mga pagsusumite (karaniwang ipapahiwatig ito sa footer ng website o sa pahina ng contact). Magsimula sa pamamagitan ng pagsubok sa mga blog na hindi gaanong mataas ang pangangailangan, at sumulat ng isang artikulo kung saan ka dalubhasa at nagbibigay-halaga sa kanilang mga mambabasa.
 * **Link ng Larawan (Image Link Building):** Kung ang iyong website ay may orihinal na mga larawan, chart na ginamit ng iba pang mga website, ngunit hindi nila binanggit ang iyong pinagmulan, maaari kang makipag-ugnayan sa kanila nang may paggalang, at humiling na magdagdag ng isang link na tumuturo sa iyong orihinal na pahina ng larawan.
* **Template ng Mail ng Outreach:** Ang `web.html` file ay hindi nagbibigay ng isang template ng mail na maaaring kopyahin at gamitin nang direkta. At binanggit din nito na ang rate ng tagumpay ng kusang pagpapadala ng mga mail para humiling ng mga link ay napakababa. Kung gagawa ka ng isang guest blog, kailangan mong maingat na isulat ang iyong mga tagubilin sa pagsusumite ayon sa estilo at mga kinakailangan ng kabilang partido.

### 4. "Bumili" ng Mga Link? Huwag Itong Hawakan!

**Pangunahing Babala:** **Malinaw na hindi inirerekomenda** ng Ahrefs ang pagbili ng mga link.
 * Madaling bumili ng mga spam link na walang tulong sa SEO, pag-aaksaya lamang ng pera.
 * Lumalabag sa mga alituntunin ng webmaster ng Google, at kapag natuklasan, ang iyong website ay maaaring maparusahan, na magreresulta sa isang malaking pagbaba sa mga ranggo o kahit na alisin sa index.

### 5. Panatilihin ang Iyong Umiiral na Mga Link

Sayang naman kung ang mga link na pinaghirapan mong makuha ay mawawala.

**Pangunahing Aksyon:** Suriin kung may mga pahina sa iyong website na hindi mabuksan (404 Not Found), ngunit ang mga pahina na ito ay mayroon dating mga panlabas na link na tumuturo sa kanila.
**Tool:** Gamitin ang libreng [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools).
**Mga Hakbang:**
 1. Mag-log in sa Ahrefs Webmaster Tools, at i-verify ang iyong website.
 2. Pumunta sa tool na Site Explorer.
 3. Piliin ang "Mga Pahina" -> "Pinakamahusay sa pamamagitan ng mga link" sa kaliwang menu.
 4. I-click ang filter na "HTTP code", at piliin ang "404 not found".
 5. Tingnan ang listahan ng ulat. Kung makakita ka ng isang 404 na pahina na sinusundan ng isang mataas na bilang ng "Referring domains" (na nagpapahiwatig kung gaano karaming mga website ang naka-link sa pahinang ito), ipinapahiwatig nito na mahalaga ang lumang pahinang iyon.
 6. Hanapin ang pinakanauugnay na bagong URL ng pahina sa iyong website sa nilalaman ng lumang pahinang ito (kung walang ganap na katumbas, maaari mo ring gamitin ang homepage).
 7. I-set up ang isang **301 redirect**, upang permanenteng i-redirect ang URL ng 404 na pahinang ito sa bagong URL na nahanap mo. Sa ganitong paraan, ang halaga ng link na tumuturo sa lumang URL ay maaaring maipasa sa bagong pahina. (Kung paano i-set up ang 301 redirect ay nakasalalay sa iyong website server at platform, maaaring kailangan mong maghanap ng isang partikular na tutorial, tulad ng "Paano mag-set up ng 301 redirect sa WordPress").
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *Paglalarawan ng larawan: Gamitin ang ulat ng Best by links ng Ahrefs Site Explorer kasama ang 404 filter para maghanap ng mga broken page na may mga external link (halimbawa mula sa Ahrefs blog)*

---

### Toolkit ng Panlabas na Pag-link

**Kailangan (Libre):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): Tingnan ang mga link na natanggap ng iyong sariling website, maghanap ng mga 404 na pahina na may mga link para ayusin, at suriin ang teknikal na kalusugan ng website.
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): Mabilis na tingnan ang nangungunang 100 mga panlabas na link ng anumang website (kabilang ang iyong mga kakumpitensya), para maunawaan kung saan sila nakakakuha ng mga link.
 * [Google Alerts](https://www.google.com/alerts): Mag-set up ng mga alerto na nauugnay sa iyong pangalan ng brand, pangalan ng website, at pangunahing mga paksa. Kapag lumitaw ang bagong nilalaman na nauugnay sa web, makakatanggap ka ng mga abiso sa email. Nakakatulong ito sa iyo na matuklasan kung binanggit ka ng ibang tao ngunit hindi nagdagdag ng link (maaari kang humiling na idagdag ito), o para tumuklas ng mga bagong pagkakataon sa pagtatayo ng link.

</details>

---

<details>
<summary><h2>5、Iba pang Pag-optimize</h2></summary>

1.  **Suriin ang Pag-index:** Pumunta sa [Google Search Console](https://search.google.com/search-console/about) (libre, na tatawagin sa GSC sa mga susunod), gamitin ang function na "URL Inspection" para tingnan kung mahahanap ng Google ang iyong mga mahahalagang pahina.
2.  **Ayusin ang Mga Patay na Link (Broken Links):** Kung binago mo ang URL o nagtanggal ng pahina, gamitin ang [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (libre, na tatawagin sa AWT sa mga susunod) para hanapin ang mga pahina na naging 404 ngunit mayroon dating mga panlabas na link na tumuturo sa mga ito, at i-redirect ang mga ito sa mga bagong pahina gamit ang 301 redirect.
3.  **Umangkop sa Maraming Wika:** Kung malaki ang kompetisyon ng iyong website, subukang umangkop sa maraming wika. Maraming website ang nakikipagkumpitensya lamang sa Ingles, at pagkatapos mong umangkop sa maraming wika, makakakuha ka ng mas maraming trapiko.
4.  **Gumawa ng Sitemap:** Gumawa ng `sitemap.xml` file, ilista ang lahat ng mahahalagang pahina sa iyong website, at isumite ito sa Google Search Console upang matulungan ang Google na mas mabilis at mas ganap na matuklasan ang iyong nilalaman.
    *   **Halimbawa (basehang istraktura ng sitemap.xml):**
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
5.  **Hreflang (Mga Tag para sa Maraming Wika):** Kung ang iyong website ay may maraming wika o nilalaman na nakatuon sa iba't ibang rehiyon, gamitin ang `hreflang` tag para sabihin sa Google ang iba't ibang bersyon ng wika/rehiyon ng bawat pahina, upang maiwasan ang mga problema sa pag-uulit ng nilalaman, at tiyakin na ang tamang bersyon ay ipinapakita sa tamang user.
    *   **Halimbawa (sa HTML `<head>`):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Tandaan: ginagamit ang `x-default` para tukuyin ang default o bersyon na walang partikular na rehiyon ng wika)*
6.  **Robots.txt (Protocol ng Crawler):** Maglagay ng `robots.txt` file sa root directory ng website para sabihin sa mga search engine crawler kung aling mga pahina o direktoryo ang ayaw mong bisitahin o i-index ng mga ito (tulad ng mga pahina ng pamamahala sa background, mga pahina ng pagsubok, atbp.).
    *   **Halimbawa (nilalaman ng robots.txt):**
        ```
        User-agent: *          # Inilalapat sa lahat ng crawler
        Disallow: /admin/       # Ipinagbabawal ang pagbisita sa /admin/ directory
        Disallow: /private.html # Ipinagbabawal ang pagbisita sa /private.html file
        Allow: /public/        # Malinaw na pinapayagan ang pagbisita sa /public/ directory (kung ang direktoryo sa itaas ay ipinagbabawal)

        User-agent: Googlebot   # Inilalapat lamang sa Google crawler
        Disallow: /tmp/         # Ipinagbabawal ang pagbisita ng Google crawler sa /tmp/ directory
        Sitemap: http://www.example.com/sitemap.xml # Ituro ang lokasyon ng Sitemap
        ```
7.  **Canonical (Canonical Tag):** Kung ang iyong website ay may maraming pahina na may parehong nilalaman o halos magkatulad (tulad ng mga URL na may mga parameter), gamitin ang `canonical` tag para tukuyin kung aling bersyon ang "opisyal", para maiwasan na ituring ng mga search engine ang mga ito bilang duplicate na nilalaman at ikalat ang bigat.
    *   **Halimbawa (sa HTML `<head>`):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Tandaan: kahit na sa pahinang `http://www.example.com/product-page?ref=banner`ito, dapat ituro ang canonical URL na walang parameter)*
8.  **Schema Markup (Structured Data):** Magdagdag ng Schema markup sa code ng pahina, gamit ang isang standardisadong format para ipaliwanag sa Google ang kahulugan ng nilalaman ng pahina (tulad ng ito ay isang recipe, produkto, FAQ), na tumutulong sa Google na maintindihan ang nilalaman, at maaaring magpakita ng mas mayamang estilo sa mga resulta ng paghahanap (tulad ng mga rating, hanay ng presyo, atbp.), na nagpapataas ng click-through rate.
    *   **Halimbawa (format ng JSON-LD, ilagay sa loob ng `<script>` tag):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Ano ang SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ang SEO (Search Engine Optimization) ay tumutukoy sa proseso ng pagpapabuti ng ranggo ng isang website sa mga resulta ng natural na paghahanap ng mga search engine (tulad ng Google) sa pamamagitan ng pag-optimize ng nilalaman at mga teknikal na aspeto ng website."
            }
          },{
            "@type": "Question",
            "name": "Gaano katagal bago makita ang epekto ng SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ang oras na kinakailangan para lumitaw ang mga resulta ng SEO ay nag-iiba depende sa iba't ibang mga kadahilanan tulad ng pundasyon ng website, antas ng kompetisyon, at mga mapagkukunang inilaan, at karaniwang tumatagal ng ilang linggo hanggang ilang buwan o kahit na mas matagal upang makita ang halatang mga resulta."
            }
          }]
        }
        ```

</details>

---

<details>
<summary><h2>6、Mga Tool para sa SEO</h2></summary>

### Mga Libreng Tool
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator):** Ginagamit para maghanap ng mga keyword.
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools):** Libreng website diagnostics, keyword ranking tracking, panloob na link na pagkakataon sa paghahanap, mga broken link na pagsuri, atbp.
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker):** Mabilis na tingnan ang nangungunang 100 mga panlabas na link ng website.
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** Tool sa pananaliksik ng keyword sa loob ng Google Ads (nangangailangan ng Google Ads account).
* **[Mga mungkahi sa Google Search Box (Google Suggest)](https://www.google.com/):** Ang mga mungkahi na awtomatikong lumalabas kapag naghahanap sa Google.
* **[Kaugnay na mga Paghahanap ng Google](https://www.google.com/):** Ang mga kaugnay na termino ng paghahanap sa ilalim ng pahina ng resulta ng paghahanap ng Google.
* **[Answer The Public](https://answerthepublic.com/):** Ginagamit para maghanap ng mga tanong at paksa sa paligid ng mga keyword (may pang-araw-araw na limitasyon sa paggamit).
* **[Google Trends](https://trends.google.com/):** Tingnan ang hotness ng paghahanap at mga trend ng mga keyword.
* **[ChatGPT (Basic Edition)](https://chat.openai.com/):** Ginagamit para sa brainstorming, pagbuo ng nilalaman, pamagat, atbp.
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** Subaybayan ang pagganap, pag-index, mga teknikal na isyu, atbp ng website sa Google Search.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** Mga online na tool sa pag-compress ng imahe.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** Subukan ang bilis ng pag-load at karanasan ng user ng pahina.
* **[Schema Markup Generator (tulad ng Schema.dev)](https://schema.dev/schema-generator/):** Tool para bumuo ng structured data code.
* **[Google Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** Tingnan ang mga uri ng Schema at rich snippet na sinusuportahan ng Google.
* **[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):** Subukan ang mobile-friendliness ng webpage.
* **[Google Alerts](https://www.google.com/alerts):** Subaybayan ang bagong nilalaman sa web na nagbabanggit ng partikular na mga keyword o brand.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** Mga frontend framework na nakakatulong na bumuo ng mga website na palakaibigan sa SEO.
* **Mga direktoryo/website ng pagsusuri ng industriya (bahagi ay libre):** Tulad ng [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/), maaari kang magsumite ng pangunahing impormasyon sa negosyo.

### Bayad na mga Tool
* **[Ahrefs (Core Suite)](https://ahrefs.com/):** Platform ng SEO tool na may buong-function, na nagbibigay ng mas malalim na pananaliksik sa keyword, pagsusuri ng kalaban, pagsusuri ng panlabas na link, diagnostics ng website, atbp.
* **[Semrush](https://www.semrush.com/):** Isa pang platform ng SEO at marketing tool na may buong-function, na may mga katulad na function sa Ahrefs.
* **[SimilarWeb](https://www.similarweb.com/):** Isa pang platform ng SEO at marketing tool na may buong-function, na may mga katulad na function sa Ahrefs.
* **[Answer The Public (Bayad na bersyon)](https://answerthepublic.com/):** Walang limitasyon sa bilang ng paggamit.
* **[ChatGPT (Advanced Edition)](https://openai.com/chatgpt/):** Mas makapangyarihang modelo ng AI.
* **Mga direktoryo/website ng pagsusuri ng industriya (Advanced na mga function/advertisement):** Tulad ng [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/), na maaaring magbigay ng bayad na promosyon o mga advanced na function ng pagsusuri.

</details>

---

## Huli
Sa wakas, idadagdag ko ang aking sariling produkto, [SparkNow](https://sparknow.cc/), isang one-stop shop para tulungan kang simulan ang iyong proyekto, pagsuri ng SEO, mga panlabas na link, pagganap, promotional copywriting, promotional images, lahat ay tinutulungan ka, malaki at sapat, maaaring subukan ng mga interesadong kaibigan, hindi interesado ay maaaring huwag pansinin nang direkta, sapat na ang pagmaster sa mga paraan ng SEO sa itaas.
