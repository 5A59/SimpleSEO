# Basit SEO Rehberi

## Rehberin Amacı

Bu rehberin amacı, okuduktan sonra uygulayarak web sitenizin SEO'sunu %80 seviyesine getirebilmenizi sağlamaktır. Nedenini bilmeseniz bile, hatta SEO'nun ne olduğunu bilmenize gerek kalmadan.

Bu nedenle, bu rehber size SEO'nun ne olduğunu anlatmayacak, teorik bilgiler öğretmeyecek, sadece "SEO nasıl yapılır"ı gösterecektir.

Eğer "SEO nedir", "SEO nasıl çalışır" öğrenmek istiyorsanız, [rehberin orijinalini](https://ahrefs.com/blog/zh/how-do-search-engines-work/) incelemenizi öneririm.

Eğer "SEO nasıl yapılır" öğrenmek istiyorsanız, bu rehber tam size göre.

Ancak başlamadan önce şunu unutmayın: Bu bir "teknik", bir "felsefe" değil.

Bu rehberin %90'ı Ahrefs SEO rehberinden alınmıştır ve orijinal rehberin özeti olarak düşünülebilir.

İşte Ahrefs SEO rehberinin orijinali: https://ahrefs.com/blog/zh/how-do-search-engines-work/. Zamanınız varsa göz atmanızı tavsiye ederim.

Hazırsanız başlayalım.

<!-- ignore start -->

## İçindekiler
* [Hızlı Versiyon: 10 Dakikada Okuyup Uygulamaya Başlayın](#hızlı-versiyon-10-dakikada-okuyup-uygulamaya-başlayın)
* [Detaylı Versiyon](#detaylı-versiyon)
  * [1. Anahtar Kelimeleri Bulun](#1-anahtar-kelimeleri-bulun)
  * [2. SEO İçeriği Nasıl Yazılır](#2-seo-içeriği-nasıl-yazılır)
  * [3. Sayfa İçi SEO](#3-sayfa-içi-seo)
  * [4. Dış Bağlantılar (Backlinkler)](#4-dış-bağlantılar-backlinkler)
  * [5. Diğer Optimizasyonlar](#5-diğer-optimizasyonlar)
  * [6. SEO Araçları](#6-seo-araçları)

<!-- ignore end -->

## Hızlı Versiyon: 10 Dakikada Okuyup Uygulamaya Başlayın

### 0. Web Sitenizi Mutlaka Statik Sayfa veya Sunucu Tarafında Oluşturulan (Backend) Bir Yapıya Çevirin

Birçok yeni başlayan bu adımı atlayabilir ve SEO yapmasına rağmen sonuç alamadığını görebilir.

**Neden mi?**

Çünkü arama motoru botları (örneğin Googlebot), statik sayfaları veya sunucu tarafında oluşturulan HTML içeriğini doğrudan okuyabilir, böylece sayfalarınızı daha kolay tarayabilir ve anlayabilir.

Bazı web siteleri ise içeriği sadece JavaScript ile tarayıcıda oluşturur (istemci tarafı oluşturma). Bu durumda botların daha fazla zaman harcaması gerekir ve Google'ın bu JavaScript kodlarını çalıştırıp çalıştırmayacağı bile kesin değildir, bu da indekslemeyi ve sıralamayı etkiler.

Aynı zamanda, statik veya sunucu tarafında oluşturulan sayfalar genellikle daha hızlı yüklenir ve kullanıcı deneyimini iyileştirir. Google da bu noktalara önem verir.

Next.js, Nuxt.js gibi framework'ler kullanarak SEO ile ilgili birçok işi sizin için kolaylaştırabilirsiniz.

### 1. Anahtar Kelimeleri Bulun

1. İşinizle/web sitenizle alakalı birkaç kelime düşünün (örneğin bu web sitesi SEO rehberi ile ilgili olduğu için "SEO", "anahtar kelime araştırması", "sayfa optimizasyonu" gibi kelimeler düşünebilirsiniz).
2. Anahtar kelime araştırma araçlarını (örneğin Ahrefs'in Ücretsiz Anahtar Kelime Üreticisi, Google'ın Anahtar Kelime Planlayıcısı, Semrush vb.) kullanarak daha fazla ilgili kelime bulun.
3. Size mantıklı gelen birkaç kelimeyi not alın.
4. GPT'den daha fazla anahtar kelime bulmanıza yardımcı olmasını isteyin.

Kelime Seçimi İçin İpuçları:
* Anahtar kelimeler işinizle/web sitenizle ilgili olmalı.
* Anahtar kelimeler trafik getirmeli.
* Anahtar kelimelerin belirli bir arama hacmi olmalı, çok niş anahtar kelimeleri eleyin.
* KD (anahtar kelime zorluğu, anahtar kelime araştırma araçlarında görülebilir) ne kadar düşükse o kadar iyidir. Düşük KD, rekabetin daha az olduğu ve sıralamanın daha kolay olacağı anlamına gelir.

### 2. İçerik Yazın

1. **Rakibe Bak:** Anahtar kelimenizi Google'da aratın ve üst sıralarda yer alan içeriklerin **ne yazdığına (tür, format, bakış açısı)** bakın.
2. **Amaca Hizmet Edin:** Kullanıcıların bu kelimeyi aradıklarında görmek istedikleri bilgileri karşılayın (tür, format, bakış açısı).
3. **Değerli İçerik Yazın:** **Gerçek deneyimlerinizi** paylaşın, kullanıcıların sorunlarını çözün ve kendi uzmanlığınızı ve tecrübenizi sergileyin.
4. **Kapsamlı Olun:** Kullanıcıların bilmek isteyebileceği **ilgili noktaları** kapsayın ve rakiplerinizden daha kapsamlı olmaya çalışın.
5. **Öne Çıkarın:** **Başkalarının sahip olmadığı** benzersiz bilgiler veya ipuçları sunun.
6. **Kolay Okunur Hale Getirin:** **Kısa cümleler, paragraflar, resimler** kullanın ve yazım hatalarını kontrol edin.
7. **Güncel Tutun:** Süresi geçmiş bilgileri mutlaka zamanında güncelleyin.

### 3. Sayfayı Optimize Edin

1. **Meta Etiketleri & Başlık:**
 * **Sayfa Başlığı (Title):** Çekici, anahtar kelime içeren, uygun uzunlukta (yaklaşık 30 karakter). (Örnek: `<title>Sayfa İçi SEO: En İyi Rehber (2024)</title>`)
 * **H1 Etiketi:** Her sayfada bir tane H1 etiketi kullanın ve sayfanın konusunu özetleyin. (Örnek: `<h1>Sayfa İçi SEO: En İyi Rehber</h1>`)
 * **H2-H6 Etiketleri:** İçerik alt başlıkları için kullanın, yapıyı düzenleyin.
 * **Meta Açıklama (Meta Description):** Sayfa içeriğini açıklayın, tıklamayı teşvik edin, anahtar kelime içerin, uygun uzunlukta (yaklaşık 80 karakter). (Örnek: `<meta name="description" content="Web sitenizin sıralamasını yükseltmek için anahtar kelime optimizasyonundan teknik detaylara kadar sayfa içi SEO hakkında her şeyi öğrenin!">`)

2. **Bağlantılar:**
 * **İç Bağlantılar:** Kendi web sitenizdeki diğer ilgili sayfalara bağlantı verin. En iyisi piramit yapısı oluşturmaktır. Aksi takdirde Google onu bulamaz. (Örnek: `<a href="/anahtar-kelime-arastirmasi">Anahtar Kelime Araştırması Öğrenin</a>`)
 * **Dış Bağlantılar:** (Gerekirse) Güvenilir bilgi kaynaklarına veya faydalı dış kaynaklara bağlantı verin. (Örnek: `<a href="https://example.com" rel="nofollow">Referans Materyalleri</a>`)

3. **Resimler:**
 * **Dosya Adı:** Açıklayıcı bir isim kullanın. (Örnek: `sayfa-seo-kontrol-listesi.jpg`)
 * **Alternatif Metin (Alt Text):** Resmin içeriğini açıklayan Alt metni ekleyin. (Örnek: `<img src="..." alt="Sayfa İçi SEO Kontrol Listesi Tablosunun Ekran Görüntüsü">`)
 * **Sıkıştırma:** Resim dosyası boyutunu küçültün, yükleme hızını artırın.

4. **Web Adresi (URL):**
 * **Kısa ve Açıklayıcı:** URL yolu kısa, anlaşılır ve tercihen anahtar kelime içermelidir (İngilizce kelimeler `-` ile ayrılır). (Örnek: `/sayfa-seo-rehberi/`)

5. **Deneyim:**
 * **Sayfa Hızı (Core Web Vitals):** Yükleme hızını optimize edin.
 * **Mobil Uyumluluk:** Cep telefonlarında iyi bir deneyim sağladığınızdan emin olun.
 * **HTTPS:** HTTPS şifrelemesi kullanın.
 * **Dikkat Dağıtıcı Unsurlar:** Çok fazla açılır pencere reklamından kaçının.
 * **(İsteğe Bağlı) Öne Çıkan Snippet Optimizasyonu:** Hedefli olarak kısa ve öz cevaplar sunun.
 * **(İsteğe Bağlı) Şema İşaretlemesi:** İçeriği anlamasına yardımcı olmak için Google'a yapılandırılmış veri ekleyin.

### 4. Dış Bağlantılar (Backlink) Alın
1. **Kaliteli İçerik Oluşturun:** İçeriği **çok iyi, çok faydalı** hale getirmeye çalışın. Böylece başkaları makalenize atıfta bulunmak veya aracınızı tavsiye etmek isteyecektir. (Bu en temel ve kalıcı yöntemdir)
2. **Dizinlere Kaydolun:** Web sitenizi **en önemli, en yetkili sektör dizinlerine** kaydedin.
3. **Misafir Yazarlık Yapın:** Eğer yazmayı seviyorsanız, sizinle aynı temaya sahip diğer web sitelerine **misafir blog yazıları** yazmayı deneyin. Makalenizde web sitenize doğal olarak bir bağlantı yerleştirebilirsiniz.
4. **Bağlantı Satın Almayın:** Ahrefs, **bağlantı satın alınmasını şiddetle önermiyor.** Riskli ve paranızı boşa harcayabilir, hatta web sitenizin Google tarafından cezalandırılmasına neden olabilir.

### 5. Diğer

1. **İndekslenmeyi Kontrol Edin:** [Google Search Console'a](https://search.google.com/search-console/about) (ücretsiz, GSC olarak kısaltılır) gidin ve "URL Denetleme" özelliğini kullanarak önemli sayfalarınızın Google tarafından bulunup bulunamadığını kontrol edin.
2. **Kırık Bağlantıları Düzeltin:** Web adreslerini değiştirdiyseniz veya sayfaları sildiyseniz, [Ahrefs Web Yöneticisi Araçları](https://ahrefs.com/webmaster-tools) (ücretsiz, AWT olarak kısaltılır) ile 404'e dönüşen ancak daha önce dış bağlantılara sahip olan sayfaları bulun ve bunları 301 yönlendirmesi ile yeni sayfalara yönlendirin.
3. **Çoklu Dil Desteği:** Web sitenizde büyük bir rekabet varsa, çoklu dil desteği eklemeyi deneyin. Birçok web sitesi sadece İngilizce'de rekabet eder, çoklu dil desteği ekleyerek daha fazla trafik elde edebilirsiniz.
4. **Site Haritası Oluşturun:** Web sitenizdeki tüm önemli sayfaları listeleyen bir `sitemap.xml` dosyası oluşturun ve Google'ın içeriğinizi daha hızlı ve daha kapsamlı bir şekilde bulmasına yardımcı olmak için Google Search Console'a gönderin.
    *   **Örnek (sitemap.xml temel yapısı):**
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
5.  **Hreflang (Çoklu Dil Etiketleri):** Web sitenizde birden fazla dil veya farklı bölgelere yönelik içerik varsa, içeriğin yinelenmesini önlemek ve doğru kullanıcılara doğru sürümü göstermek için her sayfanın farklı dil/bölge sürümlerini Google'a bildirmek için `hreflang` etiketlerini kullanın.
    *   **Örnek (HTML `<head>` bölümünde):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="tr-tr" href="http://www.example.com/tr/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Not: `x-default` varsayılan veya belirli bir dil/bölge olmayan sürümü belirtmek için kullanılır)*
6.  **Robots.txt (Tarama Protokolü):** Web sitenizin kök dizinine bir `robots.txt` dosyası yerleştirin ve arama motoru tarayıcılarına hangi sayfalara veya dizinlere erişmelerini veya indekslemelerini istemediğinizi bildirin (örneğin, yönetim sayfaları, test sayfaları vb.).
    *   **Örnek (robots.txt içeriği):**
        ```
        User-agent: *          # Tüm tarayıcılara uygulanır
        Disallow: /admin/       # /admin/ dizinine erişimi yasakla
        Disallow: /private.html # /private.html dosyasına erişimi yasakla
        Allow: /public/        # /public/ dizinine erişime izin ver (üst dizin yasaklanmışsa)

        User-agent: Googlebot   # Sadece Google tarayıcısına uygulanır
        Disallow: /tmp/         # Google tarayıcısının /tmp/ dizinine erişmesini yasakla
        Sitemap: http://www.example.com/sitemap.xml # Site haritasının konumunu belirt
        ```
7.  **Canonical (Standart Etiket):** Web sitenizde aynı veya çok benzer içeriğe sahip birden fazla sayfa varsa (örneğin, parametreli URL'ler), arama motorlarının bunları yinelenen içerik olarak görmesini ve ağırlığı dağıtmasını önlemek için hangisinin "resmi" sürüm olduğunu belirtmek için `canonical` etiketini kullanın.
    *   **Örnek (HTML `<head>` bölümünde):**
        ```html
        <link rel="canonical" href="http://www.example.com/urun-sayfasi" />
        ```
        *(Not: `http://www.example.com/urun-sayfasi?ref=banner` sayfasında bile parametresiz standart URL'yi işaret etmelidir)*
8.  **Şema İşaretlemesi (Yapılandırılmış Veri):** Sayfa kodunuza Şema işaretlemesi ekleyerek, sayfa içeriğinin ne anlama geldiğini standart bir biçimde Google'a açıklayın (örneğin, bu bir yemek tarifi, ürün, SSS). Bu, Google'ın içeriği anlamasına yardımcı olur ve arama sonuçlarında daha zengin stiller (örneğin, derecelendirme, fiyat aralığı vb.) göstermesine ve tıklama oranını artırmasına yardımcı olabilir.
    *   **Örnek (JSON-LD formatı, `<script>` etiketleri arasına yerleştirilir):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "SEO Nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Arama Motoru Optimizasyonu), web sitesi içeriğini ve teknik yönlerini optimize ederek web sitesinin arama motorlarında (örneğin Google) doğal arama sonuçlarında sıralamasını iyileştirme sürecidir."
            }
          },{
            "@type": "Question",
            "name": "SEO Ne Kadar Sürede Sonuç Verir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO'nun etkileri, web sitesinin temeli, rekabet düzeyi, harcanan kaynaklar gibi çeşitli faktörlere bağlı olarak değişiklik gösterir. Genellikle belirgin sonuçlar görmek haftalar, aylar, hatta daha uzun sürebilir."
            }
          }]
        }
        ```

## Detaylı Versiyon

<details>
<summary><h2>1. Anahtar Kelimeleri Bulun</h2></summary>

### Adım 1: "Tohum Anahtar Kelimeler" Düşünün

"Tohum anahtar kelimeler" en temel, en merkezi kelimelerdir. Çok karmaşık düşünmeyin, kendinize birkaç soru sorun:

* İnsanlar sizin ürününüzü/hizmetinizi internette nasıl aratır? (Örneğin: "ucuz kahve çekirdekleri", "elle demleme kahve nasıl yapılır")
* Rakiplerinizin web sitelerinde hangi kelimeler kullanılıyor?
* Müşteri olsaydınız ne aratırdınız?

**Örnek:**
Diyelim ki kahve çekirdekleri satan bir online mağazanız var. Tohum anahtar kelimeleriniz şunlar olabilir:
* Kahve çekirdekleri
* Arabica kahve çekirdekleri
* Elle demleme kahve
* Kahve makinesi
* Kahve çekirdekleri satın al

**İpucu:**

Gerçekten aklınıza bir şey gelmiyor mu? ChatGPT (veya başka bir yapay zeka aracı) ile işinizle ilgili kelimeler üzerine beyin fırtınası yapmasını isteyin.

Aklınıza gelen her şeyi listeleyin, ne kadar çok o kadar iyi.

### Adım 2: Ücretsiz Araçlarla Daha Fazla Anahtar Kelime Bulun

Sadece düşünerek yeterince kelime bulamazsınız. Araçlar size daha fazla alakalı kelime bulmanıza yardımcı olsun. Hepsini kullanmanıza gerek yok, kendinize uygun olanları seçin.

**Araç 1: Ahrefs Ücretsiz Anahtar Kelime Üreticisi** (Önerilir, tamamen ücretsiz)

1. [Ahrefs Ücretsiz Anahtar Kelime Üreticisi'ni](https://ahrefs.com/keyword-generator) açın.
2. Az önce düşündüğünüz "tohum anahtar kelimeler"i tek tek girin.
3. Hedef ülkenizi seçin (örneğin: Türkiye).
4. "Find keywords"e tıklayın.

Bir sürü alakalı anahtar kelime önerisi göreceksiniz. Şu iki kategoriye odaklanın:

* **Phrase Match (Kelime Öbeği Eşleşmesi):** Tohum kelimelerinizi içeren kelime öbekleri. Örneğin, "kahve çekirdekleri" aratırsanız "organik kahve çekirdekleri", "Türk kahvesi çekirdekleri" gibi kelimeler görebilirsiniz.
* **Questions (Sorular):** Tohum kelimelerinizi içeren soru cümleleri. Örneğin, "elle demleme kahve" aratırsanız, "elle demleme kahve için hangi malzemeler gerekir", "elle demleme kahve nasıl daha lezzetli yapılır" gibi kelimeler görebilirsiniz.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*Resim örneği: Ahrefs gibi bir anahtar kelime aracı kullanarak "aeropress" ile ilgili anahtar kelimeleri aradığınızda, aylık arama hacmi gibi bilgileri görebilirsiniz. Ücretsiz araçların arayüzü benzerdir ve anahtar kelime listeleri sunar.*

**Araç 2: Google Arama Kutusu & İlgili Aramalar**

1. Google Arama'yı açın.
2. Tohum anahtar kelimenizi girin ve arama kutusunun otomatik olarak önerdiği kelimelere bakın (Google Suggest). Bunlar insanların sıkça arattığı kelimelerdir.
3. Aramayı yaptıktan sonra sayfanın en altına inin ve "İlgili aramalar" bölümüne bakın. Burası da alakalı kelimeler bulmak için iyi bir yerdir.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**Araç 3: Answer The Public**

1. [Answer The Public'i](https://answerthepublic.com/) açın.
2. Tohum anahtar kelimenizi girin (İngilizce kullanmanız önerilir, daha iyi sonuçlar verebilir).
3. Ülke/dili seçin.
4. Anahtar kelimenizle ilgili bir sürü soru, edat öbeği, karşılaştırma vb. oluşturur. Böylece kullanıcıların tam olarak hangi soruları arattığını anlayabilirsiniz. Ücretsiz sürümün günlük kullanım sınırı vardır.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**Araç 4: Google Trends** (Trendleri ve Popülerliği Görün)

1. [Google Trends'i](https://trends.google.com/) açın.
2. Tohum anahtar kelimenizi girin.
3. Bu kelimenin arama popülaritesinin değişim trendini, mevsimsel değişiklikleri veya aniden popüler olan konuları görebilirsiniz.
4. Aynı zamanda ilgili sorguları da görebilir, insanların aynı anda arattığı diğer popüler kelimeleri bulabilirsiniz.

**Araç 5: ChatGPT**

1. [ChatGPT](https://chat.openai.com/) veya benzeri bir yapay zeka aracını açın.
2. Tohum anahtar kelimelerinize dayanarak daha fazla ilgili anahtar kelime, konu veya soru oluşturmasını isteyin. Örneğin, "Ben kahve çekirdekleri satıyorum. İnsanların arayabileceği alakalı anahtar kelimeler veya sorular verin" diye sorabilirsiniz.

**Araç 6: Google Anahtar Kelime Planlayıcısı** (Ücretsiz, ancak Google Ads hesabı gerekiyor)

Eğer bir Google Ads hesabınız varsa (yoksa ücretsiz olarak kaydolabilirsiniz, reklam yayınlamak zorunda değilsiniz), Anahtar Kelime Planlayıcısı'nı kullanabilirsiniz.

1. Google Ads'e giriş yapın, "Araçlar ve ayarlar" -> "Planlama" -> "Anahtar Kelime Planlayıcısı"nı bulun.
2. "Yeni anahtar kelimeler keşfedin"i seçin.
3. Tohum anahtar kelimelerinizi girin.

Size arama hacmi tahminleri ve daha fazla anahtar kelime önerisi sunacaktır. Ancak ücretsiz sürümdeki arama hacmi bir aralık olarak gösterilir, bu nedenle çok hassas değildir.

### Adım 3: Forumlarda/Topluluklarda/Sosyal Medyada/Soru-Cevap Sitelerinde Gezin

* **İlgili forumlarda/topluluklarda/sosyal medyada/soru-cevap sitelerinde gezinin:** Örneğin, kahve ile uğraşıyorsanız kahve severler forumlarında, sosyal medya gruplarında, Ekşi Sözlük'te insanların ne sorduğuna, tartıştığına, hangi kelimeleri kullandığına bakın.
* **Yorum bölümlerine bakın:** Rakiplerinizin web siteleri, ilgili ürünlerin e-ticaret sayfaları, sosyal medya gönderilerinin yorum bölümlerinde de kullanıcıların gerçek arama kelimelerini bulabilirsiniz.

**Örnek:** Bir kahve forumunda birinin "filtre kağıdı kullanmadan nasıl elle demleme yapılır" diye sorduğunu gördünüz. Bu daha önce aklınıza gelmeyen iyi bir anahtar kelime olabilir!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### Anahtar Kelime Araçları Paketi

* **Araçlar:**
 * [Ahrefs Ücretsiz Anahtar Kelime Üreticisi](https://ahrefs.com/keyword-generator) (Ana, ücretsiz)
 * Google Arama Kutusu & İlgili Aramalar (Yardımcı, ücretsiz)
 * [Answer The Public](https://answerthepublic.com/) (Soruları Bulun, Ücretsiz, Günlük Sınır Var)
 * [Google Trends](https://trends.google.com/) (Trendlere Bakın, Ücretsiz)
 * [ChatGPT](https://chat.openai.com/) (AI ile Beyin Fırtınası, Ücretsiz)
 * [Google Anahtar Kelime Planlayıcısı](https://ads.google.com/home/tools/keyword-planner/) (Ads Hesabı Gerektirir, Ücretsiz)
 * [Ahrefs Web Yöneticisi Araçları](https://ahrefs.com/webmaster-tools): Daha güçlü, ücretsiz araç seti, ancak kendi web sitenizin size ait olduğunu doğrulamanız gerekiyor. Web sitenizin şu anda hangi anahtar kelimelerde sıralandığını görebilir, düşük rekabetli anahtar kelimeler keşfedebilirsiniz.

</details>

---

<details>
<summary><h2>2. SEO İçeriği Nasıl Yazılır</h2></summary>

### Adım 1: Kullanıcının Ne Görmek İstediğini Anlayın (Arama Niyetini Analiz Edin)

Bu kelimeyi aratan kişilerin hangi türde, formatta ve bakış açısında içerik görmek istediğini bilmelisiniz.

1. Anahtar kelimenizi Google'da aratın.
2. İlk 5-10 sıradaki sonuçlara bakın:
  * **Tür:** Makale mi? Ürün sayfası mı? Video mu?
  * **Format:** Eğitim mi? Kontrol listesi mi? İnceleme mi?
  * **Bakış açısı:** "Başlangıç" mı? "Ucuz" mu? "En yeni" mi?
3. **Taklit Edin:** İçerik türünüz, formatınız ve bakış açınız ana akımla tutarlı olmalıdır.

### Adım 2: Bildiğiniz Şeyleri Yazın (Deneyimi Sergileyin - E-E-A-T)

İçeriğinizi güvenilir kılın ve bu konuda gerçekten bilgili olduğunuzu gösterin.
 * **Kendi deneyimlerinizi veya uzman olduğunuz alanları yazın.**
 * Deneyimleri ve fikirleri paylaşmak için "ben" dilini kullanın.
 * (Uygunsa) Geçmişinizden veya başarılarınızdan kısaca bahsedin.

### Adım 3: Kapsamlı Olun (İçeriği Detaylandırın)

Kullanıcıların konuyla ilgili sorularının çoğunu yanıtlayın.

 1. Araçlar kullanarak bu anahtar kelime altındaki ilgili soruları/uzun kuyruklu kelimeleri bulun.
 2. Üst sıralarda yer alan makalelerin alt başlıklarına bakın, kapsadıkları noktaları bulun.
 3. Bulduğunuz ve önemli olduğunu düşündüğünüz noktaları içeriğinize ekleyin.

Not: Kapsamlı olmak gevezelik etmek anlamına gelmez. Kullanıcı amacına göre yazın.

### Adım 4: Özel Bir Şeyler Ekleyin (Benzersizlik)

Kullanıcılara neden sizin makalenizi okumaları gerektiğine dair bir sebep verin.

 * Eşsiz bir teknik, deneyim özeti veya görüş paylaşın.
 * Başkalarının sahip olmadığı küçük bir kaynak sağlayın (örneğin, şablon, kontrol listesi).
 * (Gelişmiş) Küçük bir deney veya veri paylaşımı yapın.

### Adım 5: Okumayı Kolaylaştırın (Okunabilirlik)

Kullanıcı rahatça okuyabilsin ve okumaya devam etmek istesin.

 * Kısa cümleler, çok sayıda paragraf.
 * İçeriği alt başlıklarla ayırın.
 * Resimlerle açıklayın veya yorgunluğu azaltın.
 * Kalınlaştırmalar, listeler kullanarak önemli noktaları vurgulayın.

### Adım 6: Güncel Tutun

İçeriğin güncelliğini yitirerek sıralamanın düşmesini önleyin.

 * Düzenli olarak (örneğin, yılda bir) kontrol edin: Bilgiler hala doğru mu? Bağlantılar hala çalışıyor mu?
 * İçeriği güncelleyin: Eski bilgileri düzeltin, yeni içerikler ekleyin.
 * Güncelleme tarihini belirtin: Kullanıcılara bunun en güncel sürüm olduğunu gösterin.

---

</details>

---

<details>
<summary><h2>3. Sayfa İçi SEO</h2></summary>

### Adım 1: Arama Motorlarının ve Kullanıcıların Sayfanızı "Anlamasını" Sağlayın

Arama niyetini eşleştirin.
 * Anahtar kelimenizi Google'da aratın ve ilk 5-10 sıradaki sonuçlara bakın. İçerik türlerine (makale/ürün sayfası/?) içerik formatlarına (eğitim/kontrol listesi/inceleme/?) ve içerik açısına ("başlangıç"/"ucuz"/"en yeni"?) dikkat edin.
 * İçeriğiniz bunlarla tutarlı olmalı ve kullanıcılara görmek istedikleri şeyi sunmalıdır.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *Resim örneği: "avocado seed" (avokado çekirdeği) aratıldığında, sonuçların çoğu nasıl yetiştirileceğine dair rehber makaleleri, bakış açısı "basit, kolay" olduğundan kullanıcıların yeni başlayanlar olduğunu gösteriyor.*

#### "Başlık Hırsızlığı" Yazın (Başlık Etiketi):
  * Temel anahtar kelimeleri içerin.
  * Uzunluğu tercihen 70 karakteri (yaklaşık 30 Türkçe karakter) geçmemelidir, aksi takdirde tamamı görüntülenmeyebilir.
  * Net ve çekici olmalı, insanların tıklamasını sağlamalıdır.
  * Tamamen "başlık hırsızlığı" yapmayın, içerikle tutarlı olmalıdır.
  * İçerik zamana duyarlıysa (örneğin, bir eğitim), yılı ekleyebilirsiniz.
  * **Araç:** ChatGPT'nin birkaç başlık üzerine beyin fırtınası yapmasına izin verebilirsiniz. Ahrefs Web Yöneticisi Araçları'nın (AWT) Site Denetimi ile başlığın çok uzun veya eksik olup olmadığını kontrol edin.

 ![Resim örneği: İyi bir başlık örneği](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### "Cepheyi" Yazın (Meta Açıklama):
  * Bu, arama sonuçlarında başlığın altındaki açıklama metnidir. Sıralamayı doğrudan etkilemese de, tıklama oranını etkiler.
  * Uzunluğu tercihen 160 karakteri (yaklaşık 80 Türkçe karakter) geçmemelidir.
  * Başlığın bir tamamlayıcısı olarak görülebilir ve başlığa sığmayan satış noktalarını koyabilirsiniz.
  * Anahtar kelimeler içerin (Google koyu renkte vurgulayacaktır).
  * Etken çatılı ifadeler kullanın ve kullanıcılara ne sunabileceğinizi doğrudan söyleyin.
  * **Araç:** ChatGPT'nin birkaç sürüm yazmasına izin verebilirsiniz. Ahrefs Web Yöneticisi Araçları'nın (AWT) Site Denetimi ile eksik veya çok uzun olup olmadığını kontrol edin.
 ![Resim örneği: İyi bir Meta Açıklama örneği](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### İyi Bir "Web Sitesi Adı" (URL) Oluşturun:
  * URL yolu (alan adından sonraki bölüm) kısa ve anlaşılır olmalıdır.
  * Temel anahtar kelimeleri içermelidir (İngilizce veya Türkçe karakterlerle, kelimeler arasına `-` eklenerek).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *Resim örneği: `domain.com/seo-ogren` `domain.com/p=123`'ten daha iyidir*

#### İçeriğin "İskeleti" Olmalı (Başlık Etiketleri: H1-H6):
  * İçeriği düzenlemek ve okunabilirliği artırmak için H1-H6 etiketlerini kullanarak net bir hiyerarşik yapı oluşturun.
  * **H1 Etiketi:** Her sayfada yalnızca bir tane kullanın ve genellikle sayfa başlığıyla (Başlık Etiketi) aynı veya benzer anlama gelmelidir.
  * **H2-H6 Etiketleri:** Her bölümün alt başlığı olarak kullanın.
  * **Araç:** Ahrefs Web Yöneticisi Araçları'nın (AWT) Site Denetimi ile H1 etiketinin eksik veya yinelenip yinelenmediğini kontrol edin.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *Resim örneği: H etiketlerini kullanarak görsel bir hiyerarşi oluşturun*

### Adım 2: "Zengin" ve "Benzersiz" İçerik Yazın

#### İçerik "Tam" Olmalı:
  * İçeriğinizin, kullanıcıların bu anahtar kelimeyi ararken bilmek isteyebileceği temel yönleri ve soruları kapsadığından emin olun.
  * Google arama sonuçlarında ilk birkaç sıradaki makalenin hangi alt başlıkları (H2, H3) ele aldığını görün.
  * Google arama sonuç sayfasının altındaki "İlgili aramalar"a bakın.
  * **Araç:** (İsteğe bağlı) Ahrefs Web Yöneticisi Araçları (AWT) Site Gezgini'ni kullanarak hem sizin hem de rakiplerinizin web sitelerinin hangi ortak anahtar kelimelerden trafik getirdiğini görün (İçerik Boşluğu özelliği). Böylece hangi alt konuları ekleyebileceğinizi bulun.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *Resim örneği: Rakip makaleleri analiz edin ve para biriktirme yöntemi olarak "aboneliği iptal etme"den bahsettiklerini görün. Sizin makaleniz de bunu eklemeyi düşünebilir.*

#### İçerik "Özel" Olmalı:
  * Sadece başkalarının söylediklerini tekrarlamayın, benzersiz bir değer sunun.
  * Bu, sizin benzersiz görüşleriniz veya deneyim özetleriniz, başkalarının sahip olmadığı küçük bir teknik, özgün bir vaka analizi, ücretsiz bir şablon veya kontrol listesi olabilir.
  * Amaç, kullanıcılara makalenizi "kaydetmeleri" veya "paylaşmaları" için bir neden vermektir.

#### "Uzmanlığınızı" veya "Deneyiminizi" Sergileyin:
  * Profesyonel bir alanda (örneğin, tıp, finans) veya kişisel deneyim (örneğin, ürün incelemeleri) gerektiren içerikler yazdığınızda, profesyonelliğinizi veya gerçek deneyimlerinizi sergilemeniz gerekir.
  * Bilgi kaynaklarını (alıntılar, bağlantılar) net bir şekilde belirtin, yazarın arka plan tanıtımını (yazar biyografi sayfasına bağlantı) sağlayın, işlem sürecinizi veya kullanım deneyimlerinizi (resimlerle, videolarla) paylaşın ve içeriğin olgusal olarak doğru olduğundan emin olun.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *Resim örneği: Ürün incelemesinde gerçek kullanım deneyimlerinizi gösterin.*

### Adım 3: Ayrıntıları Optimize Edin, Deneyimi İyileştirin

#### Resimleri Optimize Edin:
  * **Dosya Adı:** Resim dosyalarını açıklayıcı kelimelerle adlandırın, İngilizce kelimeleri veya Türkçe karakterleri `-` ile ayırın (örneğin, `siyah-kopek-top-oyna.jpg`).
  * **Alternatif Metin (Alt Text):** Bu, arama motorları ve görme engelli kullanıcılar için resim açıklamasıdır. HTML'deki `<img>` etiketine `alt` özelliğini ekleyin ve resmin içeriğini kısaca açıklayın, anahtar kelimeleri doğal olarak içerebilirsiniz. (Örneğin: `<img src="kopek-top-oyna.jpg" alt="Çimlerde kırmızı topla oynayan siyah bir Labrador köpeği">`)
  * **Resimleri Sıkıştırın:** Resimler çok büyükse yüklenmeleri yavaşlar. Netliği mümkün olduğunca korurken resim boyutunu küçültmek için araçlar kullanın.
  * **Araç:** Ahrefs Web Yöneticisi Araçları'nın (AWT) Site Denetimi ile resimlerin Alt metninin eksik olup olmadığını kontrol edin. TinyPNG veya iLoveIMG gibi çevrimiçi araçları kullanarak resimleri sıkıştırın.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *Resim örneği: İyi bir Alt metin örneği*

#### İç Bağlantılar:
  * Makalenizde web sitenizdeki diğer ilgili makalelere veya sayfalara bağlantı verin.
  * Bu, kullanıcıların daha fazla içerik keşfetmesine yardımcı olur ve arama motorlarının web sitenizin yapısını ve sayfa ilişkilerini anlamasına yardımcı olur.
  * **Araç:** Ahrefs Web Yöneticisi Araçları'nın (AWT) Site Denetimi'ndeki "İç bağlantı fırsatları" özelliğini kullanarak iç bağlantı ekleyebileceğiniz yerleri bulun.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *Resim örneği: AWT'nin bulduğu iç bağlantı fırsatları, A sayfasından B sayfasına bağlantı verebileceğinizi belirtiyor.*

#### Dış Bağlantılar:
  * Uygun yerlerde, diğer yüksek kaliteli, alakalı harici web sitelerine referans veya bilgi kaynağı olarak bağlantı verin.
  * Örneğin, verileri alıntılarken orijinal rapora bağlantı verin, araçları önerirken resmi web sitesine bağlantı verin.
  * **Not:** Reklam veya sponsorlu bağlantılar ise, arama motorlarına bildirmek için `rel="nofollow"` veya `rel="sponsored"` özelliğini kullanın.

#### Sayfa Deneyimi:
   * Hızlı yükleme hızı (Core Web Vitals).
   * Cep telefonlarında iyi bir tarama deneyimi (Mobil Uyumlu).
   * HTTPS şifrelemesi kullanın (güvenli).
   * Rahatsız edici açılır pencere reklamları yok (Rahatsız Edici Geçiş Reklamları Yok).
  * Bunlar genellikle site çapında optimizasyonlardır, ancak yeni sayfaların da gereksinimleri karşıladığından emin olun.
  * **Araç:** Sayfa hızını ve deneyimini test etmek için Google PageSpeed Insights'ı kullanın. İlgili raporları Google Search Console'da görüntüleyin.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *Resim örneği: Google'ın sayfa deneyimi sinyalleri*

#### "Özel Görüntüleme Alanı" Kazanmaya Çalışın:
  * **Öne Çıkan Snippet (Featured Snippet):** Google bazen arama sonuçlarının en üstünde bir soruyu doğrudan yanıtlayan bir kutu gösterir. Sayfanız zaten ilk birkaç sırada yer alıyorsa ve içeriğinizde bir sorunun doğrudan, kısa ve öz bir cevabı varsa (en iyisi mevcut Snippet'leri format olarak referans alın, örneğin listeler, paragraflar), seçilme şansı vardır.
  * **Zengin Ortam Snippet'i (Rich Snippet):** Sayfaya Şema işaretlemesi (yapılandırılmış veri kodu türü) ekleyerek içeriğinizin ne tür bir içerik olduğunu Google'a bildirin (örneğin, yemek tarifi, SSS, ürün bilgileri). Bazen Google, arama sonuçlarında daha zengin bilgiler (örneğin, derecelendirmeler, fiyatlar, adımlar) görüntüler.
  * **Araç:** Google Search Console'u kullanarak sıralamanızın yüksek olduğu ve Google'ın öne çıkan snippet'ler görüntülediği kelimeleri görüntüleyin. Şema kodu oluşturmak için Schema.dev'in Şema Oluşturucusunu kullanın.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *Resim örneği: Derecelendirme ve yorum sayısına sahip zengin ortam snippet'i*

### Adım 4: Sürekli Olarak İzleyin ve Güncelleyin

#### Etkileri İzleyin:
 * Hedef anahtar kelime sıralamalarınızdaki değişiklikleri takip edin.
 * Google Search Console'u kullanarak sayfanızın Google aramalarında nasıl performans gösterdiğini (gösterimler, tıklamalar, sıralama) görün.

#### İçeriği Güncelleyin:
 * SEO, tek seferlik bir iş değildir. İçeriğinizi düzenli olarak (örneğin, bir yılda bir) gözden geçirin, bilgilerin güncelliğini yitirip yitirmediğini, bağlantıların bozulup bozulmadığını, eklenecek yeni bilgilerin olup olmadığını kontrol edin. İçeriğin güncellenmesi sıralamayı korumaya yardımcı olur.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *Resim örneği: İçeriği güncelledikten sonra oluşan trafik artışı*

---

### Sayfa İçi SEO Araç Seti
* [Google Search](https://www.google.com/) (Amaca bakın, rakiplere bakın)
* [ChatGPT](https://chat.openai.com/) (Başlık/Açıklama fikirleri düşünün)
* [Ahrefs Web Yöneticisi Araçları (AWT)](https://ahrefs.com/webmaster-tools) (Ücretsiz olarak H1, başlık, açıklama, Alt metinleri kontrol edin, iç bağlantı fırsatları bulun, anahtar kelime farklılıklarına bakın)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (Çevrimiçi resim sıkıştırma)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (Sayfa hızını ve deneyimini ölçün)
* [Google Search Console](https://search.google.com/search-console/) (Sıralamaları, deneyim sorunlarını izleyin, anahtar kelimelere bakın)
* [Schema.dev Şema Oluşturucu](https://schema.dev/schema-generator/) (Şema kodu oluşturun)

</details>

---

<details>
<summary><h2>4. Dış Bağlantılar (Backlinkler)</h2></summary>

### Dış Bağlantı (Backlink) Nedir?

İnternetin devasa bir ilişki ağı olduğunu hayal edin. Başka bir web sitesi A, sayfasında web siteniz B'ye işaret eden bir bağlantı yayınladığında, A'dan B'ye bir dış bağlantı oluşur. Google bu bağlantıyı A web sitesinin B web sitesine bir "tavsiyesi" veya "oyu" olarak görür.

Genel olarak konuşursak, **otoritesi yüksek, alakalı** web sitelerinden gelen "oylar" daha önemlidir.

Backlink kazanmanın birçok yolu vardır. En temel ve en düşük riskli yöntemlere odaklanacağız:

### 1. Başkalarının Size Kendiliğinden Bağlantı Vermesini Sağlayın (Bağlantı Kazanma)

Bu en ideal ve Google tarafından teşvik edilen yöntemdir, o kadar "hızlı" değildir, ancak etkisi en kalıcıdır.

**Temel İşlem:** **Yüksek kaliteli, benzersiz değer sunan, alıntılanmaya değer** içerik oluşturun. Bu şunlar olabilir:
 * Çok faydalı, ücretsiz bir çevrimiçi araç veya hesap makinesi.
 * Kapsamlı, özel veriler içeren derinlemesine bir sektör araştırma raporu.
 * Kullanıcıların acı noktalarını çözen son derece ayrıntılı, en iyi bir kılavuz veya eğitim.
 * Yeni bir bakış açısı veya benzersiz bir kaynak listesi.

İçeriğiniz yeterince iyiyse, diğer web sitelerinin yazarları ilgili konuları yazarken içeriğinizi bulabilir ve referans veya tavsiye olarak size bağlantı verebilirler.

### 2. Kendiniz Biraz Bağlantı "Ekleyin"

Bu yöntem daha kolay uygulanır, ancak etkisi sınırlıdır, bu nedenle ılımlı bir şekilde kullanılmalıdır.

**Temel İşlem:**
 * **Sektör Dizinleri:** İşletmenizin fiziksel bir varlığı veya net bir sektörel sınıflandırması varsa (örneğin, yerel bir işletme, bir yazılım şirketi), **en tanınmış, en yetkili** sektör dikey web sitelerini veya iş dizinlerini bulun ve web site bilgilerinizi gönderin. Örneğin, restoranlar Yelp, TripAdvisor'a gönderilebilir; yazılımlar Capterra, G2 vb.'ye gönderilebilir. (Sadece en önemli olan birkaçını yapın!)
 * **İlgili Topluluklar/Forumlar/Soru-Cevap:** **Gerçekten katıldığınız ve aşina olduğunuz** sektör forumlarında, Ekşi Sözlük gibi topluluklarda, bir web sayfası içeriğiniz belirli bir soruyu yanıtlamaya veya belirli bir tartışmayı geliştirmeye gerçekten yardımcı olursa, bağlantıyı **doğal olarak** bırakabilirsiniz. **Alakasız topluluklara spam bağlantılar göndermeyin!** Bunu yapmak silinmeyle ve hatta itibarınızı zedelemeyle sonuçlanabilir.

### 3. Biraz Bağlantı "İsteyin"

Diğer web sitelerinden doğrudan bağlantı istemek genellikle çok düşük bir başarı oranına sahiptir, çünkü bir başkasının size neden yardımcı olması gerekir? Ancak nispeten makul olan bazı yollar vardır:

**Temel İşlem:**
 * **Misafir Blog:** Bu nispeten etkili bir yoldur. Diğer ilgili web siteleri için **ücretsiz olarak yüksek kaliteli bir makale yazıyorsunuz** ve karşılığında makalenin yazarı bilgileri veya içeriğinde kendi web sitenize işaret eden bir veya iki bağlantı bulundurabilirsiniz.
  * **Nasıl yapılır (basitleştirilmiş sürüm):** İyi olduğunu düşündüğünüz ve sizinle aynı temaya sahip bazı bloglar bulun ve misafir gönderilerini kabul edip etmediklerini kontrol edin (genellikle web sitesi alt bilgisinde veya iletişim sayfasında açıklamalar bulunur). Çok fazla gereksinim duymayan bloglarla denemeye başlayın ve uzman olduğunuz ve okuyucuları için değerli olan bir makale yazın.
 * **Resim Bağlantısı Oluşturma:** Web sitenizde diğer web siteleri tarafından kullanılan orijinal resimleriniz, grafikleriniz varsa, ancak kaynak olarak belirtilmemişseniz, onlarla kibarca iletişime geçebilir ve orijinal resim sayfanıza işaret eden bir bağlantı eklemelerini isteyebilirsiniz.
* **Dış Erişim E-posta Şablonları:** `web.html` dosyası doğrudan kopyalanıp kullanılabilecek bir e-posta şablonu sağlamaz. Ayrıca bağlantılar istemek için kör e-postalar göndermenin çok düşük bir başarı oranına sahip olduğundan da bahsetti. Konuk blogu oluşturacaksanız, blogunun stiline ve gereksinimlerine göre gönderim açıklamanızı dikkatlice yazmanız gerekir.

### 4. Bağlantı mı "Satın Almak"? Dokunmayın!

**Temel Uyarı:** Ahrefs **bağlantı satın almayı açıkça önermiyor**.
 * SEO'ya yardımcı olmayan, paranızı boşa harcayan spam bağlantılar satın almak kolaydır.
 * Google'ın web yöneticisi yönergelerini ihlal eder. Keşfedilirse web siteniz cezalandırılabilir ve bu da sıralamalarda büyük düşüşlere veya hatta dizinden kaldırılmaya neden olabilir.

### 5. Mevcut Bağlantılarınızı Koruyun

Zorla kazanılmış bağlantıları kaybetmek çok kötü olur.

**Temel İşlem:** Web sitenizde çalışmayan sayfalar (404 Bulunamadı) olup olmadığını kontrol edin, ancak bu sayfaların daha önce onlara işaret eden dış bağlantıları vardı.
**Araç:** Ücretsiz [Ahrefs Web Yöneticisi Araçları](https://ahrefs.com/webmaster-tools) kullanın.
**Adımlar:**
 1. Ahrefs Web Yöneticisi Araçlarına giriş yapın, web sitenizi doğrulayın.
 2. Site Gezgini aracına gidin.
 3. Sol menüden "Sayfalar" -> "Bağlantıya Göre En İyi"yi seçin.
 4. "HTTP kodu" filtresine tıklayın ve "404 bulunamadı"yı seçin.
 5. Rapor listesini görüntüleyin. 404 sayfasının ardından yüksek bir "Yönlendirme etki alanı" (Bu sayfaya kaç web sitesinin bağlantı verdiği anlamına gelir) sayısı bulursanız, bu geçersiz sayfanın daha önce önemli olduğunu gösterir.
 6. Web sitenizde bu geçersiz sayfanın içeriğiyle en alakalı yeni URL'yi bulun (tam olarak eşleşen yoksa ana sayfa da olabilir).
 7. Bu 404 sayfasının URL'sini bulduğunuz yeni URL'ye kalıcı olarak yönlendirmek için **301 yönlendirmesi** ayarlayın. Bu şekilde, eski URL'ye işaret eden bağlantı değeri yeni sayfaya aktarılabilir. (301 yönlendirmesini nasıl ayarlayacağınız web sitenizin sunucusuna ve platformuna bağlıdır, örneğin "WordPress'te 301 yönlendirmesi nasıl ayarlanır" gibi belirli eğitimleri aramanız gerekebilir).
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *Resim açıklaması: Dış bağlantılara sahip geçersiz sayfaları bulmak için 404 filtresiyle Ahrefs Site Gezgini'nin Bağlantıya göre en iyi raporunu kullanın (Ahrefs blogundan örnek)*

---

### Dış Bağlantı Araç Seti

**Temel (ücretsiz):**
 * [Ahrefs Web Yöneticisi Araçları](https://ahrefs.com/webmaster-tools): Kendi web sitenizin aldığı bağlantıları görüntüleyin, düzeltmek için bağlantılı 404 sayfaları bulun, web sitesinin teknik sağlığını kontrol edin.
 * [Ahrefs Ücretsiz Backlink Denetleyicisi](https://ahrefs.com/zh/backlink-checker): Herhangi bir web sitesinin (rakipleriniz dahil) ilk 100 dış bağlantısını hızlıca görüntüleyin, bağlantılarını nereden aldıklarını anlayın.
 * [Google Alerts](https://www.google.com/alerts): Marka adınız, web sitesi adınız, temel konunuzla ilgili uyarılar ayarlayın. İnternette ilgili yeni içerik göründüğünde e-posta bildirimi alırsınız. Bu, sizden bahsedilen ancak bağlantı eklemeyen kişileri bulmanıza (eklenmesini isteyebilirsiniz) veya yeni bağlantı kurma fırsatları bulmanıza yardımcı olur.

</details>

---

<details>
<summary><h2>5. Diğer Optimizasyonlar</h2></summary>

1.  **İndekslenmeyi Kontrol Edin:** [Google Search Console'a](https://search.google.com/search-console/about) (ücretsiz, GSC olarak kısaltılır) gidin ve "URL Denetleme" özelliğini kullanarak önemli sayfalarınızın Google tarafından bulunup bulunamadığını kontrol edin.
2.  **Kırık Bağlantıları Düzeltin:** Web adreslerini değiştirdiyseniz veya sayfaları sildiyseniz, [Ahrefs Web Yöneticisi Araçları](https://ahrefs.com/webmaster-tools) (ücretsiz, AWT olarak kısaltılır) ile 404'e dönüşen ancak daha önce dış bağlantılara sahip olan sayfaları bulun ve bunları 301 yönlendirmesi ile yeni sayfalara yönlendirin.
3.  **Çoklu Dil Desteği:** Web sitenizde büyük bir rekabet varsa, çoklu dil desteği eklemeyi deneyin. Birçok web sitesi sadece İngilizce'de rekabet eder, çoklu dil desteği ekleyerek daha fazla trafik elde edebilirsiniz.
4.  **Site Haritası Oluşturun:** Web sitenizdeki tüm önemli sayfaları listeleyen bir `sitemap.xml` dosyası oluşturun ve Google'ın içeriğinizi daha hızlı ve daha kapsamlı bir şekilde bulmasına yardımcı olmak için Google Search Console'a gönderin.
    *   **Örnek (sitemap.xml temel yapısı):**
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
5.  **Hreflang (Çoklu Dil Etiketleri):** Web sitenizde birden fazla dil veya farklı bölgelere yönelik içerik varsa, içeriğin yinelenmesini önlemek ve doğru kullanıcılara doğru sürümü göstermek için her sayfanın farklı dil/bölge sürümlerini Google'a bildirmek için `hreflang` etiketlerini kullanın.
    *   **Örnek (HTML `<head>` bölümünde):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Not: `x-default` varsayılan veya belirli bir dil/bölge olmayan sürümü belirtmek için kullanılır)*
6.  **Robots.txt (Tarama Protokolü):** Web sitenizin kök dizinine bir `robots.txt` dosyası yerleştirin ve arama motoru tarayıcılarına hangi sayfalara veya dizinlere erişmelerini veya indekslemelerini istemediğinizi bildirin (örneğin, yönetim sayfaları, test sayfaları vb.).
    *   **Örnek (robots.txt içeriği):**
        ```
        User-agent: *          # Tüm tarayıcılara uygulanır
        Disallow: /admin/       # /admin/ dizinine erişimi yasakla
        Disallow: /private.html # /private.html dosyasına erişimi yasakla
        Allow: /public/        # /public/ dizinine erişime izin ver (üst dizin yasaklanmışsa)

        User-agent: Googlebot   # Sadece Google tarayıcısına uygulanır
        Disallow: /tmp/         # Google tarayıcısının /tmp/ dizinine erişmesini yasakla
        Sitemap: http://www.example.com/sitemap.xml # Site haritasının konumunu belirt
        ```
7.  **Canonical (Standart Etiket):** Web sitenizde aynı veya çok benzer içeriğe sahip birden fazla sayfa varsa (örneğin, parametreli URL'ler), arama motorlarının bunları yinelenen içerik olarak görmesini ve ağırlığı dağıtmasını önlemek için hangisinin "resmi" sürüm olduğunu belirtmek için `canonical` etiketini kullanın.
    *   **Örnek (HTML `<head>` bölümünde):**
        ```html
        <link rel="canonical" href="http://www.example.com/urun-sayfasi" />
        ```
        *(Not: `http://www.example.com/urun-sayfasi?ref=banner` sayfasında bile parametresiz standart URL'yi işaret etmelidir)*
8.  **Şema İşaretlemesi (Yapılandırılmış Veri):** Sayfa kodunuza Şema işaretlemesi ekleyerek, sayfa içeriğinin ne anlama geldiğini standart bir biçimde Google'a açıklayın (örneğin, bu bir yemek tarifi, ürün, SSS). Bu, Google'ın içeriği anlamasına yardımcı olur ve arama sonuçlarında daha zengin stiller (örneğin, derecelendirme, fiyat aralığı vb.) göstermesine ve tıklama oranını artırmasına yardımcı olabilir.
    *   **Örnek (JSON-LD formatı, `<script>` etiketleri arasına yerleştirilir):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "SEO Nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Arama Motoru Optimizasyonu), web sitesi içeriğini ve teknik yönlerini optimize ederek web sitesinin arama motorlarında (örneğin Google) doğal arama sonuçlarında sıralamasını iyileştirme sürecidir."
            }
          },{
            "@type": "Question",
            "name": "SEO Ne Kadar Sürede Sonuç Verir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO'nun etkileri, web sitesinin temeli, rekabet düzeyi, harcanan kaynaklar gibi çeşitli faktörlere bağlı olarak değişiklik gösterir. Genellikle belirgin sonuçlar görmek haftalar, aylar, hatta daha uzun sürebilir."
            }
          }]
        }
        ```

</details>

---

<details>
<summary><h2>6. SEO Araçları</h2></summary>

### Ücretsiz Araçlar
* **[Ahrefs Ücretsiz Anahtar Kelime Üreticisi](https://ahrefs.com/keyword-generator):** Anahtar kelime bulmak için.
* **[Ahrefs Web Yöneticisi Araçları (AWT)](https://ahrefs.com/webmaster-tools):** Ücretsiz web sitesi teşhisi, anahtar kelime sıralaması takibi, iç bağlantı fırsatları bulma, bozuk bağlantı denetimi vb. araç seti.
* **[Ahrefs Ücretsiz Backlink Denetleyicisi](https://ahrefs.com/zh/backlink-checker):** Bir web sitesinin ilk 100 backlink'ini hızlıca görüntüleyin.
* **[Google Anahtar Kelime Planlayıcısı](https://ads.google.com/home/tools/keyword-planner/):** Google Ads içindeki anahtar kelime araştırma aracı (Google Ads hesabı gerektirir).
* **[Google Arama Kutusu Önerisi (Google Suggest)](https://www.google.com/):** Google'da arama yaparken otomatik olarak açılan öneriler.
* **[Google İlgili Aramalar](https://www.google.com/):** Google arama sonuçları sayfasının altındaki ilgili arama kelimeleri.
* **[Answer The Public](https://answerthepublic.com/):** Anahtar kelimelerle ilgili soruları ve konuları bulmak için (günlük kullanım sınırı vardır).
* **[Google Trends](https://trends.google.com/):** Anahtar kelimelerin arama popülaritesini ve trendlerini görüntüleyin.
* **[ChatGPT (Temel sürüm)](https://chat.openai.com/):** Beyin fırtınası yapmak, içerik oluşturmak, başlıklar oluşturmak vb. için.
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** Web sitesinin Google aramalarındaki performansını, indeksleme durumunu, teknik sorunları vb. izleyin.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** Çevrimiçi resim sıkıştırma araçları.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** Sayfa yükleme hızını ve kullanıcı deneyimini test edin.
* **[Şema İşaretleme Oluşturucu (Örneğin Schema.dev)](https://schema.dev/schema-generator/):** Yapılandırılmış veri kodu oluşturmak için araç.
* **[Google Arama Kitaplığı (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** Google tarafından desteklenen Şema türlerini ve zengin medya özetlerini görüntüleyin.
* **[Google Mobil Uyumlu Test](https://search.google.com/test/mobile-friendly):** Web sayfalarının mobil cihazlarla uyumluluğunu test edin.
* **[Google Alerts](https://www.google.com/alerts):** Belirli anahtar kelimeleri veya markaları belirten web üzerindeki yeni içeriği izleyin.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** SEO dostu web siteleri oluşturmaya yardımcı olan ön uç framework'leri.
* **Sektör dizinleri/yorum siteleri (bazıları ücretsiz):** [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/) gibi temel işletme bilgilerini gönderebilirsiniz.

### Ücretli Araçlar
* **[Ahrefs (Temel paket)](https://ahrefs.com/):** Daha derin anahtar kelime araştırması, rakip analizi, backlink analizi, web sitesi teşhisi vb. sağlayan tam özellikli SEO araç platformu.
* **[Semrush](https://www.semrush.com/):** Ahrefs'e benzer işlevlere sahip başka bir tam özellikli SEO ve pazarlama araç platformu.
* **[SimilarWeb](https://www.similarweb.com/):** Ahrefs'e benzer işlevlere sahip başka bir tam özellikli SEO ve pazarlama araç platformu.
* **[Answer The Public (Ücretli sürüm)](https://answerthepublic.com/):** Kullanım sayısı sınırı yoktur.
* **[ChatGPT (Gelişmiş sürüm)](https://openai.com/chatgpt/):** Daha güçlü AI modeli.
* **Sektör dizinleri/yorum siteleri (Gelişmiş özellikler/Reklam):** [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/) gibi ücretli promosyon veya gelişmiş analiz özellikleri sunabilir.

</details>

---

## Son olarak
Son olarak küçük bir tanıtım eklemek istiyorum. [SparkNow](https://sparknow.cc/) adında bir araç geliştirdim. Projelerinizi başlatmanıza, SEO algılamanıza, backlink almanıza, performansınızı artırmanıza, tanıtım belgeleri ve resimleri oluşturmanıza tek elden yardımcı olur. İlgilenenler deneyebilir. İlgilenmeyenler doğrudan görmezden gelebilir. Yukarıdaki SEO yöntemlerine hakim olmanız yeterli.