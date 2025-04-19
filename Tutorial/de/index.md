# Minimale SEO-Anleitung

## Ziel dieser Anleitung

Das Ziel dieser Anleitung ist, dass du nach dem Lesen und Umsetzen die SEO deiner Website auf 80 Punkte bringen kannst, selbst wenn du nicht weißt, warum, und sogar ohne zu wissen, was SEO überhaupt ist.

Daher wird dir diese Anleitung nicht erklären, was SEO ist, und dir auch keine SEO-Theorie vermitteln, sondern dir nur sagen, "wie man SEO richtig macht".

Wenn du also lernen möchtest "was ist SEO", "wie funktioniert SEO", empfehle ich dir, die [Originalversion der Anleitung](https://ahrefs.com/blog/zh/how-do-search-engines-work/) anzusehen.

Wenn du lernen möchtest "how to do seo", ist diese Anleitung sehr gut für dich geeignet.

Aber bevor du anfängst, vergiss bitte nicht, dass dies das "Wie" ist, nicht das "Warum".

90% des Inhalts dieser Anleitung stammen aus der Ahrefs SEO-Anleitung. Man kann sie als die destillierte Version der Originalanleitung betrachten.

Hier ist die Originalversion der Ahrefs SEO-Anleitung. Wenn du Zeit hast, empfehle ich dir, sie anzusehen: https://ahrefs.com/blog/zh/how-do-search-engines-work/

Wenn du bereit bist, lass uns beginnen.

<!-- ignore start -->

## Inhaltsverzeichnis
* [Blitzversion, in 10 Minuten gelesen und sofort anwendbar](#blitzversion-in-10-minuten-gelesen-und-sofort-anwendbar)
* [Detaillierte Version](#detaillierte-version)
  * [1. Keywords finden](#1-keywords-finden)
  * [2. Wie man SEO-Inhalte schreibt](#2-wie-man-seo-inhalte-schreibt)
  * [3. On-Page-SEO](#3-on-page-seo)
  * [4. Externe Links (Backlinks)](#4-externe-links-backlinks)
  * [5. Weitere Optimierungen](#5-weitere-optimierungen)
  * [6. SEO-Tools](#6-seo-tools)

<!-- ignore end -->

## Blitzversion, in 10 Minuten gelesen und sofort anwendbar

### 0. Die Website muss als statische Seite oder serverseitig gerendert sein

Viele Anfänger übersehen dies möglicherweise und stellen am Ende fest, dass ihre SEO keine Wirkung zeigt.

**Warum?**

Weil Suchmaschinen-Crawler (wie Googlebot) statische Seiten oder serverseitig gerenderte HTML-Inhalte direkt lesen können, wodurch deine Seiten leichter gecrawlt und verstanden werden.

Websites, die Inhalte erst im Browser mit JavaScript generieren (clientseitiges Rendering), benötigen mehr Zeit für den Crawler, und es ist sogar unklar, ob Google diese JS-Codes ausführt. Dies beeinträchtigt die Indexierung und das Ranking.

Gleichzeitig laden statische oder serverseitig gerenderte Seiten in der Regel schneller, was die Benutzererfahrung verbessert. Das ist auch ein Punkt, den Google wichtig findet.

Empfehlenswert sind Frameworks wie next.js oder nuxt.js, die dir viele SEO-Aufgaben abnehmen.

### 1. Keywords finden

1. Überlege dir einige Wörter, die mit deinem Geschäft/deiner Website zu tun haben (z. B. SEO, Keyword-Recherche, Seitenoptimierung für diese SEO-Anleitungsseite).
2. Verwende Keyword-Recherche-Tools (z. B. Ahrefs' Free Keyword Generator, Google Keyword Planner, Semrush usw.), um weitere relevante Wörter zu finden.
3. Notiere dir einige Wörter, die du für sinnvoll hältst.
4. Lass dir von GPT helfen, weitere Keywords zu finden.

Wichtige Punkte bei der Keyword-Auswahl:
* Die Keywords müssen mit deinem Geschäft/deiner Website zusammenhängen.
* Die Keywords müssen Traffic generieren können.
* Die Keywords müssen ein gewisses Suchvolumen haben; zu wenig gesuchte Keywords sind nicht sinnvoll.
* Der KD-Wert (Keyword Difficulty, in Keyword-Recherche-Tools zu finden) sollte so niedrig wie möglich sein. Je niedriger, desto geringer der Wettbewerb und desto einfacher das Ranking.

### 2. Inhalte schreiben

1. **Konkurrenzanalyse:** Suche bei Google nach deinen Keywords und schau dir an, **was die Top-Inhalte schreiben (Typ, Format, Perspektive)**.
2. **Suchintention erfüllen:** Stelle sicher, dass deine Inhalte die Informationen liefern, die Nutzer erwarten, wenn sie nach diesem Keyword suchen (Typ, Format, Perspektive).
3. **Gehaltvolle Inhalte:** Teile **echte Erfahrungen**, löse die Probleme der Nutzer und zeige deine Expertise und Erfahrung.
4. **Vollständigkeit:** Decke alle **relevanten Punkte** ab, die Nutzer interessieren könnten, und sei umfassender als deine Konkurrenz.
5. **Einzigartigkeit:** Biete **einzigartige Informationen oder Techniken**, die andere nicht haben.
6. **Lesbarkeit:** Verwende **kurze Sätze, Absätze, Bilder**, überprüfe auf Tippfehler.
7. **Aktualität:** Aktualisiere veraltete Informationen zeitnah.

### 3. Seiten optimieren

1. **Meta-Tags & Titel:**
 * **Seitentitel (Title):** Ansprechend, enthält Keywords, angemessene Länge (ca. 60 Zeichen). (Beispiel: `<title>Die ultimative On-Page-SEO-Anleitung (2024)</title>`)
 * **H1-Tag:** Verwende pro Seite nur einen H1-Tag, der das Thema der Seite zusammenfasst. (Beispiel: `<h1>Die ultimative On-Page-SEO-Anleitung</h1>`)
 * **H2-H6-Tags:** Für Unterüberschriften verwenden, um die Inhaltsstruktur zu organisieren.
 * **Meta-Beschreibung (Meta Description):** Beschreibt den Seiteninhalt, regt zum Klicken an, enthält Keywords, angemessene Länge (ca. 150 Zeichen). (Beispiel: `<meta name="description" content="Lerne alles über On-Page-SEO, von der Keyword-Optimierung bis zu technischen Details, um das Ranking deiner Website zu verbessern!">`)

2. **Links:**
 * **Interne Links:** Verweisen auf andere relevante Seiten innerhalb deiner Website. Baue eine Pyramidenstruktur auf und vermeide isolierte Seiten, da Google sie sonst nicht findet. (Beispiel: `<a href="/keyword-recherche">Keyword-Recherche lernen</a>`)
 * **Externe Links:** (Falls erforderlich) Verweisen auf seriöse Informationsquellen oder nützliche externe Ressourcen. (Beispiel: `<a href="https://example.com" rel="nofollow">Referenzen</a>`)

3. **Bilder:**
 * **Dateiname:** Verwende beschreibende Namen. (Beispiel: `on-page-seo-checklist.jpg`)
 * **Alternativtext (Alt-Text):** Füge Alt-Texte hinzu, die den Bildinhalt beschreiben. (Beispiel: `<img src="..." alt="Screenshot einer On-Page-SEO-Checkliste">`)
 * **Komprimierung:** Komprimiere die Bilddateigröße, um die Ladezeit zu beschleunigen.

4. **URL:**
 * **Kurze Beschreibung:** Der URL-Pfad sollte kurz, verständlich sein und idealerweise Keywords enthalten (Englische Wörter durch `-` trennen). (Beispiel: `/on-page-seo-anleitung/`)

5. **Benutzererfahrung:**
 * **Seitengeschwindigkeit (Core Web Vitals):** Optimiere die Ladezeit.
 * **Mobile-Freundlichkeit:** Stelle sicher, dass die Seite auf Mobilgeräten gut aussieht und funktioniert.
 * **HTTPS:** Verwende HTTPS-Verschlüsselung.
 * **Keine Ablenkungen:** Vermeide zu viele Pop-up-Anzeigen.
 * **(Optional) Optimierung für hervorgehobene Snippets:** Biete gezielte, prägnante Antworten.
 * **(Optional) Schema-Markup:** Füge strukturierte Daten hinzu, um Google zu helfen, den Inhalt zu verstehen.

### 4. Backlinks aufbauen
1. **Hochwertige Inhalte:** Erstelle **besonders gute, nützliche** Inhalte, sodass andere deine Artikel zitieren oder deine Tools empfehlen möchten. (Dies ist die wichtigste und nachhaltigste Methode.)
2. **Branchenverzeichnisse:** Trage deine Website in **einige der wichtigsten, renommiertesten Branchenverzeichnisse** ein.
3. **Gastbeiträge:** Wenn du gerne schreibst, versuche Gastbeiträge für andere Websites zu schreiben, die sich mit deinem Thema beschäftigen. In den Artikeln kannst du auf natürliche Weise einen Link zu deiner Website einfügen.
4. **Kaufe niemals Links:** Ahrefs **rät dringend davon ab**, Links zu kaufen. Das Risiko ist sehr hoch, es kann Geldverschwendung sein und dazu führen, dass deine Website von Google abgestraft wird.

### 5. Weitere Optimierungen
1. **Indexierung prüfen:** Gehe zur [Google Search Console](https://search.google.com/search-console/about) (kostenlos, im Folgenden GSC genannt) und prüfe mit der Funktion "URL-Prüfung", ob Google deine wichtigen Seiten finden kann.
2. **Defekte Links reparieren:** Wenn du URLs geändert oder Seiten gelöscht hast, verwende die [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (kostenlos, im Folgenden AWT genannt), um die Seiten zu finden, die zu 404-Fehlern geworden sind, aber früher externe Links hatten. Leite diese dann per 301-Weiterleitung auf neue Seiten um.
3. **Mehrsprachigkeit:** Wenn der Wettbewerb auf deiner Website hoch ist, versuche es mit Mehrsprachigkeit. Viele Websites konkurrieren nur in englischer Sprache. Durch die Anpassung an mehrere Sprachen kannst du mehr Traffic erzielen.
4. **Sitemap erstellen:** Erstelle eine `sitemap.xml`-Datei, die alle wichtigen Seiten deiner Website auflistet, und übermittle sie an die Google Search Console. Dies hilft Google, deine Inhalte schneller und umfassender zu entdecken.
    * **Beispiel (Grundstruktur einer sitemap.xml):**
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
5. **Hreflang (Sprachauszeichnung):** Wenn deine Website Inhalte in mehreren Sprachen oder für verschiedene Regionen anbietet, verwende `hreflang`-Tags, um Google mitzuteilen, welche Sprach-/Regionalversionen jeder Seite vorhanden sind. Dadurch werden Probleme mit doppeltem Content vermieden und sichergestellt, dass den richtigen Nutzern die richtige Version angezeigt wird.
    * **Beispiel (im HTML `<head>`):**
        ```html
        <link rel="alternate" hreflang="de-de" href="http://www.example.com/de/page.html" />
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Hinweis: `x-default` wird verwendet, um die Standardversion oder eine Version ohne spezifische Sprachregion anzugeben.)*
6. **Robots.txt (Crawler-Protokoll):** Platziere eine `robots.txt`-Datei im Stammverzeichnis deiner Website, um Suchmaschinen-Crawlern mitzuteilen, welche Seiten oder Verzeichnisse sie nicht besuchen oder indexieren sollen (z. B. Admin-Bereiche, Testseiten usw.).
    * **Beispiel (Inhalt einer robots.txt):**
        ```
        User-agent: *          # Gilt für alle Crawler
        Disallow: /admin/       # Zugriff auf /admin/-Verzeichnis verbieten
        Disallow: /private.html # Zugriff auf /private.html-Datei verbieten
        Allow: /public/        # Zugriff auf /public/-Verzeichnis explizit erlauben (falls übergeordnetes Verzeichnis verboten ist)

        User-agent: Googlebot   # Gilt nur für Google-Crawler
        Disallow: /tmp/         # Google-Crawler den Zugriff auf /tmp/-Verzeichnis verbieten
        Sitemap: http://www.example.com/sitemap.xml # Sitemap-Position angeben
        ```
7. **Canonical (Canonical-Tag):** Wenn deine Website mehrere Seiten mit gleichem oder sehr ähnlichem Inhalt aufweist (z. B. URLs mit Parametern), verwende das `canonical`-Tag, um anzugeben, welche die "offizielle" Version ist. Dies vermeidet, dass Suchmaschinen diese als doppelten Inhalt betrachten und die Gewichtung aufgeteilt wird.
    * **Beispiel (im HTML `<head>`):**
        ```html
        <link rel="canonical" href="http://www.example.com/produktseite" />
        ```
        *(Hinweis: Auch auf der Seite `http://www.example.com/produktseite?ref=banner` musst du auf die kanonische URL ohne Parameter verweisen.)*
8. **Schema-Markup (Strukturierte Daten):** Füge Schema-Markup in den Seitenquelltext ein, um Google in einem standardisierten Format zu erklären, was der Inhalt der Seite bedeutet (z. B. Rezept, Produkt, FAQ). Dies hilft Google, den Inhalt zu verstehen, und kann dazu führen, dass in den Suchergebnissen reichhaltigere Darstellungen angezeigt werden (z. B. Bewertungen, Preisspannen usw.), was die Klickrate erhöht.
    * **Beispiel (JSON-LD-Format, im `<script>`-Tag platziert):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Was ist SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Suchmaschinenoptimierung) bezieht sich auf den Prozess der Optimierung von Website-Inhalten und technischen Aspekten, um das Ranking der Website in den organischen Suchergebnissen von Suchmaschinen (wie Google) zu verbessern."
            }
          },{
            "@type": "Question",
            "name": "Wie lange dauert es, bis SEO Wirkung zeigt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Die Zeit, die es dauert, bis SEO Wirkung zeigt, hängt von verschiedenen Faktoren ab, wie z. B. der Website-Basis, dem Wettbewerb und den eingesetzten Ressourcen. In der Regel dauert es Wochen bis Monate oder sogar noch länger, bis deutliche Ergebnisse sichtbar werden."
            }
          }]
        }
        ```

## Detaillierte Version

<details>
<summary><h2>1. Keywords finden</h2></summary>

### Schritt 1: "Seed Keywords" sammeln

"Seed Keywords" sind die grundlegendsten und wichtigsten Wörter. Denke nicht zu kompliziert, sondern stelle dir folgende Fragen:

* Wie würden andere Leute online nach deinen Produkten oder Dienstleistungen suchen? (z. B. "günstige Kaffeebohnen", "Wie mache ich Handfilterkaffee?")
* Welche Wörter verwenden deine Wettbewerber auf ihren Websites?
* Wenn du ein Kunde wärst, wonach würdest du suchen?

**Beispiel:**
Angenommen, du betreibst einen Online-Shop für Kaffeebohnen. Deine Seed Keywords könnten sein:
* Kaffeebohnen
* Arabica Kaffeebohnen
* Handfilterkaffee
* Kaffeemaschine
* Kaffeebohnen kaufen

**Tipp:**

Fällt dir nichts ein? Frage ChatGPT (oder eine andere KI), um ein Brainstorming mit Wörtern zu machen, die mit deinem Geschäft in Verbindung stehen.

Notiere alles, was dir einfällt, je mehr, desto besser.

### Schritt 2: Verwende kostenlose Tools, um weitere Keywords zu finden

Es reicht nicht aus, sich nur etwas auszudenken. Verwende Tools, um weitere relevante Wörter zu finden. Du musst nicht alle verwenden, sondern wähle einige aus, die für dich geeignet sind.

**Tool 1: Ahrefs Free Keyword Generator** (empfohlen, völlig kostenlos)

1. Öffne den [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator).
2. Gib deine "Seed Keywords", die dir eingefallen sind, einzeln ein.
3. Wähle dein Zielland (z. B. Deutschland).
4. Klicke auf "Find keywords".

Du siehst eine Menge relevanter Keyword-Vorschläge. Konzentriere dich auf diese beiden Kategorien:

* **Phrase Match (Passende Wortgruppe):** Wortgruppen, die dein Seed Keyword enthalten. Wenn du beispielsweise nach "Kaffeebohnen" suchst, siehst du möglicherweise "Bio Kaffeebohnen", "Äthiopische Kaffeebohnen".
* **Questions (Fragen):** Fragen, die dein Seed Keyword enthalten. Wenn du beispielsweise nach "Handfilterkaffee" suchst, siehst du möglicherweise "Welches Zubehör brauche ich für Handfilterkaffee?", "Wie mache ich guten Handfilterkaffee?".

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*Bildbeispiel: Verwende Keyword-Tools wie Ahrefs, um nach Keywords im Zusammenhang mit "Aeropress" zu suchen und Informationen wie das monatliche Suchvolumen zu sehen. Die kostenlose Tool-Oberfläche ist ähnlich und bietet eine Keyword-Liste.*

**Tool 2: Google-Suchleiste & ähnliche Suchanfragen**

1. Öffne die Google-Suche.
2. Gib dein Seed Keyword ein und sieh dir die Vorschläge an, die automatisch in der Suchleiste erscheinen (Google Suggest). Das sind alles Suchanfragen, die häufig gestellt werden.
3. Nachdem du gesucht hast, scrolle zum Ende der Seite und sieh dir den Abschnitt "Ähnliche Suchanfragen" an. Hier findest du auch relevante Wörter.

![](https://ahrefs.com/blog/wp-content/uploads/2021/02/autosuggest.png)

**Tool 3: Answer The Public**

1. Öffne [Answer The Public](https://answerthepublic.com/).
2. Gib dein Seed Keyword ein (es wird empfohlen, Englisch zu verwenden, da es möglicherweise besser funktioniert).
3. Wähle Land/Sprache aus.
4. Es generiert eine Reihe von Fragen, Präpositionalphrasen, Vergleichen usw. rund um dein Keyword, die dir helfen, zu verstehen, wonach Nutzer konkret suchen. Die kostenlose Version hat eine tägliche Nutzungslimite.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**Tool 4: Google Trends** (Trendanalyse)

1. Öffne [Google Trends](https://trends.google.com/).
2. Gib dein Seed Keyword ein.
3. Du kannst die Entwicklung der Suchpopularität dieses Wortes sehen und saisonale Veränderungen oder plötzlich auftretende Themen erkennen.
4. Du kannst auch verwandte Suchanfragen sehen, um andere beliebte Wörter zu finden, nach denen die Leute gleichzeitig suchen.

**Tool 5: ChatGPT**

1. Öffne [ChatGPT](https://chat.openai.com/) oder ein anderes ähnliches KI-Tool.
2. Lasse es weitere relevante Keywords, Themen oder Fragen basierend auf deinen Seed Keywords generieren. Du kannst beispielsweise fragen: "Ich verkaufe Kaffeebohnen. Gib mir einige relevante Keywords oder Fragen, nach denen die Leute suchen könnten."

**Tool 6: Google Keyword Planner** (kostenlos, benötigt aber ein Google Ads-Konto)

Wenn du ein Google Ads-Konto hast (du kannst dich kostenlos registrieren, ohne Geld für das Schalten von Anzeigen ausgeben zu müssen), kannst du den Keyword Planner verwenden.

1. Melde dich bei Google Ads an, gehe zu "Tools & Einstellungen" -> "Planung" -> "Keyword-Planer".
2. Wähle "Neue Keywords entdecken".
3. Gib dein Seed Keyword ein.

Es werden geschätzte Suchvolumina und weitere Keyword-Vorschläge angezeigt. Die kostenlose Version zeigt jedoch nur ein Suchvolumen im Bereich an, das nicht so genau ist.

### Schritt 3: Foren/Communities/Pinnwände/Frage-und-Antwort-Websites besuchen

* **Relevante Foren/Communities/Pinnwände/Frage-und-Antwort-Websites durchsuchen:** Wenn du dich beispielsweise mit Kaffee beschäftigst, besuche Kaffee-Enthusiasten-Foren, relevante Themen auf Zhihu, Douban-Gruppen, um zu sehen, was die Leute fragen, diskutieren und welche Wörter sie verwenden.
* **Kommentare ansehen:** Die Kommentarbereiche deiner Wettbewerber-Websites, E-Commerce-Seiten mit verwandten Produkten und Social-Media-Posts können auch tatsächliche Suchbegriffe von Nutzern enthalten.

**Beispiel:** In einem Kaffee-Forum fragt jemand "Wie mache ich Handfilterkaffee ohne Filterpapier?". Dies könnte ein gutes Keyword sein, an das du vorher nicht gedacht hast!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### Keyword-Tool-Paket

* **Tool-Paket:**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (hauptsächlich, kostenlos)
 * Google-Suchleiste & verwandte Suchanfragen (zusätzlich, kostenlos)
 * [Answer The Public](https://answerthepublic.com/) (Fragen finden, kostenlos, tägliche Nutzungslimite)
 * [Google Trends](https://trends.google.com/) (Trends ansehen, kostenlos)
 * [ChatGPT](https://chat.openai.com/) (KI-Brainstorming, kostenlos)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (erfordert ein Ads-Konto, kostenlos)
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools):** Leistungsstärkere kostenlose Tool-Sammlung, aber du musst nachweisen, dass du deine eigene Website besitzt. Du kannst sehen, für welche Keywords deine Website derzeit rankt, und Keywords mit geringem Wettbewerb finden usw.

</details>

---

<details>
<summary><h2>2. Wie man SEO-Inhalte schreibt</h2></summary>

### Schritt 1: Verstehe, was Nutzer sehen wollen (Suchintention analysieren)

Es ist wichtig zu wissen, welche Art, welches Format und welche Perspektive von Inhalten die Leute suchen, wenn sie nach diesem Keyword suchen.

1. Suche bei Google nach deinen Keywords.
2. Sieh dir die Top 5-10 Ergebnisse an:
  * **Typ:** Ist es ein Artikel? Eine Produktseite? Ein Video?
  * **Format:** Ist es ein Tutorial? Eine Checkliste? Eine Bewertung?
  * **Perspektive:** Ist es "Einsteiger"? "Günstig"? "Neueste"?
3. **Imitiere:** Dein Inhaltstyp, Format und Perspektive müssen mit dem Mainstream übereinstimmen.

### Schritt 2: Schreibe über das, was du weißt (Zeige Erfahrung E-E-A-T)

Mache den Inhalt glaubwürdig und zeige, dass du dich damit auskennst.
 * **Schreibe über deine persönlichen Erfahrungen oder das, was du gut kannst.**
 * Teile Erfahrungen und Ansichten mit "Ich".
 * (Falls zutreffend) Erwähne kurz deinen Hintergrund oder deine Erfolge.

### Schritt 3: Umfassende Abdeckung (detaillierter Inhalt)

Beantworte die meisten Fragen der Nutzer zu diesem Thema.

 1. Verwende Tools, um verwandte Fragen/Long-Tail-Keywords unter diesem Keyword zu finden.
 2. Sieh dir die Unterüberschriften der Top-Artikel an, um die von ihnen behandelten Punkte zu finden.
 3. Füge alle Punkte, die du findest und für wichtig hältst, in deine Inhalte ein.

Hinweis: Umfassend bedeutet nicht umständlich, schreibe basierend auf der Benutzerabsicht.

### Schritt 4: Bringe etwas Besonderes (Einzigartigkeit)

Gib den Nutzern einen Grund, deinen Artikel und nicht den eines anderen anzusehen.

 * Teile eine einzigartige Technik, eine Zusammenfassung von Erfahrungen oder eine Perspektive.
 * Stelle eine kleine Ressource zur Verfügung, die niemand sonst hat (z. B. Vorlage, Checkliste).
 * (Fortgeschritten) Mache ein kleines Experiment oder eine Datenaustausch.

### Schritt 5: Erleichtere das Lesen (Lesbarkeit)

Benutzer fühlen sich wohl und sind bereit weiterzulesen.

 * Kurze Sätze, viele Absätze.
 * Verwende Unterüberschriften, um den Inhalt zu trennen.
 * Füge Abbildungen zur Erläuterung oder zur Entlastung von Müdigkeit hinzu.
 * Hebe wichtige Punkte mit Fettdruck und Listen hervor.

### Schritt 6: Auf dem Laufenden bleiben

Vermeide es, dass Inhalte veraltet sind und das Ranking sinkt.

 * Regelmäßige Prüfung (z. B. jährlich): Stimmen die Informationen noch? Sind die Links noch gültig?
 * Inhalt aktualisieren: Veraltete Informationen ändern, neue Inhalte hinzufügen.
 * Aktualisierungsdatum markieren: Lass die Nutzer wissen, dass dies die neuesten Informationen sind.

---

</details>

---

<details>
<summary><h2>3. On-Page-SEO</h2></summary>

### Schritt 1: Sorge dafür, dass Suchmaschinen und Nutzer deine Seite "verstehen"

Passe die Suchintention an.
 * Suche deine Keywords bei Google und sieh dir die Top 5-10 Ergebnisse an. Beachte ihren Inhaltstyp (Artikel/Produktseite/?)、Inhaltsformat (Tutorial/Checkliste/Review/?) und die Content-Perspektive ("Einsteiger"/"Günstig"/"Neueste"?).
 * Deine Inhalte sollten mit ihnen übereinstimmen, um den Nutzern zu geben, was sie sehen wollen.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *Bildbeispiel: Die Suche nach "Avocado-Samen" ergibt hauptsächlich Ratgeberartikel, in denen erklärt wird, wie man sie pflanzt, wobei der Fokus auf "einfach und leicht" liegt, was darauf hindeutet, dass die Benutzer Anfänger sind.*

#### Schreibe einen guten "Titel-Tag":
  * Enthält Kern-Keywords.
  * Die Länge sollte nicht mehr als 70 Zeichen (ca. 30 chinesische Zeichen) betragen, da sie sonst nicht vollständig angezeigt werden.
  * Klar, ansprechend und lädt zum Klicken ein.
  * Tue nicht so, als ob du ein reiner "Titel-Parteigänger" wärst, der mit dem Inhalt übereinstimmt.
  * Wenn der Inhalt auf Aktualität setzt (z. B. ein Tutorial), kannst du das Jahr hinzufügen.
  * **Tool:** Lass ChatGPT ein paar Titel brainstormen. Verwende den Ahrefs Webmaster Tools (AWT) Site Audit, um zu überprüfen, ob die Titel zu lang sind oder fehlen.

 ![Bildbeispiel: Ein Beispiel für einen guten Titel](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### Schreibe eine gute "Meta-Beschreibung":
  * Dies ist die beschreibende Zeile unter dem Titel in den Suchergebnissen. Sie wirkt sich zwar nicht direkt auf das Ranking aus, aber sie beeinflusst die Klickrate.
  * Die Länge sollte nicht mehr als 160 Zeichen (ca. 80 chinesische Zeichen) betragen.
  * Es kann als Ergänzung zum Titel betrachtet werden, indem einige Verkaufsargumente hinzugefügt werden, die nicht im Titel enthalten sind.
  * Enthält Keywords (Google markiert sie fett).
  * Verwende die aktive Stimme, um dem Benutzer direkt mitzuteilen, was du anbieten kannst.
  * **Tool:** Lass ChatGPT dir ein paar Versionen schreiben. Verwende den Ahrefs Webmaster Tools (AWT) Site Audit, um zu überprüfen, ob er fehlt oder zu lang ist.
 ![Bildbeispiel: Ein Beispiel für eine gute Meta-Beschreibung](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### Benenne die "URL" gut:
  * Der URL-Pfad (der Teil hinter der Domain) sollte kurz und verständlich sein.
  * Enthält Kern-Keywords (in Englisch oder Pinyin, Wörter werden durch `-` getrennt).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *Bildbeispiel: `domain.com/learn-seo` ist besser als `domain.com/p=123`*

#### Der Inhalt muss ein "Gerüst" haben (Überschriften-Tags: H1-H6):
  * Verwende H1-H6-Tags, um den Inhalt zu organisieren und eine klare Hierarchie zu schaffen, die das Lesen erleichtert.
  * **H1-Tag:** Verwende es nur einmal pro Seite, in der Regel mit der gleichen oder einer ähnlichen Bedeutung wie der Seitentitel (Title Tag).
  * **H2-H6-Tags:** Werden als Unterüberschriften für die einzelnen Abschnitte verwendet.
  * **Tool:** Verwende den Ahrefs Webmaster Tools (AWT) Site Audit, um zu überprüfen, ob H1-Tags fehlen oder doppelt vorhanden sind.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *Bildbeispiel: Verwenden Sie H-Tags, um eine visuelle Hierarchie zu erstellen*

### Schritt 2: Schreiben Sie "wertvolle" und "einzigartige" Inhalte

#### Inhalt muss "vollständig" sein:
  * Stelle sicher, dass deine Inhalte die wichtigsten Aspekte und Fragen abdecken, die ein Nutzer möglicherweise wissen möchte, wenn er nach diesem Keyword sucht.
  * Sieh dir an, welche Unterüberschriften (H2, H3) die Top-Artikel in den Google-Suchergebnissen haben.
  * Sieh dir die "Verwandten Suchanfragen" am Ende der Google-Suchergebnisse an.
  * **Tool:** (Optional) Verwende Ahrefs Webmaster Tools (AWT) Site Explorer, um zu sehen, welche gemeinsamen Keywords Traffic auf deine Website und die deiner Wettbewerber bringen (Content Gap-Funktion), und finde Unterthemen, die du ergänzen kannst.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *Bildbeispiel: Analysiere die Artikel der Konkurrenz und stelle fest, dass sie "Abbestellen" als geldsparende Methode erwähnen. Dein Artikel könnte auch in Erwägung ziehen, diesen Punkt aufzunehmen.*

#### Der Inhalt muss "besonders" sein:
  * Wiederhole nicht nur, was andere gesagt haben, sondern biete einen einzigartigen Mehrwert.
  * Das kann sein: deine eigenen Erkenntnisse oder Erfahrungen, ein kleiner Trick, den sonst niemand hat, eine originelle Fallstudie, eine kostenlose Vorlage oder Checkliste.
  * Das Ziel ist es, dem Nutzer einen Grund zu geben, deinen Artikel zu "speichern" oder zu "teilen".

#### Zeige deine "Professionalität" oder "Erfahrung":
  * Wenn du über Fachgebiete (z. B. Medizin, Finanzen) oder Inhalte schreibst, die persönliche Erfahrungen erfordern (z. B. Produktbewertungen), solltest du deine Professionalität oder deine tatsächliche Erfahrung zeigen.
  * Gib die Informationsquellen klar an (Zitate, Links), gib Hintergrundinformationen zum Autor (Link zur Autorenseite), teile deine Vorgehensweise oder Nutzungserfahrung (mit Abbildungen, Videos) und stelle sicher, dass die Fakten im Inhalt korrekt sind.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *Bildbeispiel: Zeige deine praktischen Erfahrungen in einer Produktbewertung.*

### Schritt 3: Optimiere die Details, um das Erlebnis zu verbessern

#### Bilder optimieren:
  * **Dateiname:** Benenne Bilddateien mit beschreibenden Wörtern und trenne englische Wörter oder Pinyin mit `-` (z. B. `black-puppy-play-ball.jpg` oder `heise-xiaogou-wanqiu.jpg`).
  * **Alternativtext (Alt-Text):** Dies ist eine Bildbeschreibung für Suchmaschinen und sehbehinderte Benutzer. Füge das `alt`-Attribut im HTML-`<img>`-Tag hinzu und beschreibe den Bildinhalt in einer prägnanten Sprache, die auf natürliche Weise Schlüsselwörter enthalten kann. (z. B.: `<img src="kleiner Welpe spielt mit Ball.jpg" alt="Ein schwarzer Labradorwelpe spielt mit einem roten Ball auf dem Rasen">`)
  * **Bilder komprimieren:** Zu große Bilder laden langsam. Verwende Tools, um die Bildgröße zu komprimieren und gleichzeitig die Klarheit zu erhalten.
  * **Tools:** Verwende Ahrefs Webmaster Tools (AWT) Site Audit, um zu überprüfen, ob Bildern Alt-Text fehlt. Verwende Online-Tools wie TinyPNG oder iLoveIMG, um Bilder zu komprimieren.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *Bildbeispiel: Gutes Beispiel für Alt-Text*

#### Interne Links:
  * Verlinke in deinen Artikeln auf andere relevante Artikel oder Seiten auf deiner Website.
  * Dies hilft den Nutzern, mehr Inhalte zu entdecken, und hilft den Suchmaschinen, die Struktur deiner Website und die Seitenbeziehungen zu verstehen.
  * **Tool:** Verwende die Funktion "Internal link opportunities" in Ahrefs Webmaster Tools (AWT) Site Audit, um Stellen zu finden, an denen du interne Links hinzufügen kannst.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *Bildbeispiel: Die von AWT gefundenen internen Linkmöglichkeiten, die dich darauf hinweisen, dass du auf Seite A zu Seite B verlinken kannst.*

#### Externe Links:
  * Verlinke an geeigneten Stellen auf andere hochwertige, relevante externe Websites als Referenz oder Informationsquelle.
  * Verlinke zum Beispiel beim Zitieren von Daten auf den Originalbericht oder beim Empfehlen von Tools auf die offizielle Website.
  * **Hinweis:** Wenn es sich um eine Werbe- oder Sponsorenlink handelt, verwende das Attribut `rel="nofollow"` oder `rel="sponsored"`, um dies den Suchmaschinen mitzuteilen.

#### Seitenerlebnis:
   * Schnelle Ladezeiten (Core Web Vitals).
   * Gute Benutzererfahrung auf Mobiltelefonen (Mobile-Friendly).
   * Verwende HTTPS-Verschlüsselung (sicher).
   * Keine lästigen Popup-Werbung (Keine aufdringlichen Interstitials).
  * Dies sind in der Regel Website-weite Optimierungen, stelle aber sicher, dass auch neue Seiten die Anforderungen erfüllen.
  * **Tool:** Verwende Google PageSpeed Insights, um die Seitengeschwindigkeit und -erfahrung zu testen. Zeige verwandte Berichte in der Google Search Console an.
 ![](https://ahrefs.com/blog/zhzh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *Bildbeispiel: Google's Seitenerfahrungssignale*

#### Bemühe dich um "Sonderanzeigen":
  * **Hervorgehobene Snippets (Featured Snippet):** Google zeigt manchmal ein Feld direkt am oberen Rand der Suchergebnisse an, das eine Frage direkt beantwortet. Wenn deine Seite bereits in den Top-Rankings gelistet ist und dein Inhalt eine direkte, prägnante Antwort auf eine Frage enthält (das Format sollte sich am besten an vorhandenen Snippets orientieren, z. B. Listen, Absätze), besteht die Möglichkeit, ausgewählt zu werden.
  * **Rich Snippets (Rich Snippet):** Indem du der Seite ein Schema-Markup (eine Art strukturierter Datencode) hinzufügst, teilst du Google mit, welcher Art dein Inhalt ist (z. B. Rezept, FAQ, Produktinformationen). Manchmal zeigt Google in den Suchergebnissen umfangreichere Informationen an (z. B. Bewertungen, Preise, Schritte).
  * **Tools:** Verwende die Google Search Console, um zu sehen, für welche Wörter du gut rankst und für die Google Featured Snippets anzeigt. Verwende den Schema Generator von Schema.dev, um Schema-Code zu generieren.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *Bildbeispiel: Rich Snippet mit Bewertungen und Anzahl der Kommentare*

### Schritt 4: Kontinuierliche Überwachung und Aktualisierung

#### Überwachen der Ergebnisse:
 * Behalte die Ranking-Änderungen deiner Ziel-Keywords im Auge.
 * Verwende die Google Search Console, um die Leistung deiner Seiten in der Google-Suche zu verfolgen (Impressionen, Klicks, Rankings).

#### Inhalte aktualisieren:
 * SEO ist keine einmalige Aufgabe. Überprüfe deine Inhalte regelmäßig (z. B. jährlich), um zu überprüfen, ob die Informationen veraltet sind, Links ungültig sind und ob neue Informationen hinzugefügt werden können. Das Aktualisieren von Inhalten hilft, das Ranking beizubehalten.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *Bildbeispiel: Durch die Aktualisierung der Inhalte erzieltes Traffic-Wachstum*

---

### On-Page-SEO-Toolkit
* [Google Search](https://www.google.com/) (Absichten sehen, Konkurrenten sehen)
* [ChatGPT](https://chat.openai.com/) (Ideen für Titel/Beschreibungen finden)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (Kostenlose Überprüfung von H1, Titeln, Beschreibungen, Alt-Texten, interne Verlinkungsmöglichkeiten finden, Keyword-Lücken sehen)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (Online-Bildkomprimierung)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (Seitengeschwindigkeit und -erlebnis messen)
* [Google Search Console](https://search.google.com/search-console/) (Rankings überwachen, Erlebnisprobleme, Keywords sehen)
* [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (Schema-Code generieren)

</details>

---

<details>
<summary><h2>4. Externe Links (Backlinks)</h2></summary>

### Was sind externe Links (Backlinks)?

Stelle dir vor, das Internet ist ein riesiges Netzwerk von Beziehungen. Wenn eine andere Website A einen Link auf ihrer Seite platziert, der auf deine Website B verweist, entsteht ein externer Link von A nach B. Google betrachtet diesen Link als "Empfehlung" oder "Abstimmung" von Website A für Website B.

Im Allgemeinen haben "Stimmen" von **autoritativen, relevanten** Websites mehr Gewicht.

Es gibt viele Möglichkeiten, Backlinks zu erhalten. Wir konzentrieren uns auf die wichtigsten und risikoärmsten Methoden:

### 1. Lass dich von anderen aktiv verlinken (Links verdienen)

Dies ist der idealste und von Google geförderte Weg, der nicht so "schnell" ist, aber die nachhaltigsten Ergebnisse liefert.

**Kernaktion:** Erstelle **hochwertige, einzigartige Inhalte mit Wert, die es wert sind, zitiert zu werden**. Dies kann sein:
 * Ein sehr nützliches, kostenloses Online-Tool oder ein Rechner.
 * Ein detaillierter Branchenforschungsbericht mit exklusiven Daten.
 * Ein äußerst detaillierter, ultimativer Leitfaden oder ein Tutorial, das die Schmerzpunkte der Nutzer anspricht.
 * Eine neue Perspektive oder eine einzigartige Liste von Ressourcen.

Wenn deine Inhalte gut genug sind, können die Autoren anderer Websites deine Inhalte bei der Bearbeitung verwandter Themen entdecken und aktiv als Referenz oder Empfehlung verlinken.

### 2. Selbst ein paar Links "hinzufügen"

Diese Methode ist relativ einfach, aber die Wirkung ist begrenzt und sollte in Maßen eingesetzt werden.

**Kernaktion:**
 * **Branchenverzeichnis:** Wenn dein Unternehmen eine physische oder klare Branchenzugehörigkeit hat (z. B. lokales Geschäft, Softwarefirma), suche nach den **bekanntesten, maßgeblichsten** vertikalen Branchenwebsites oder Geschäftsverzeichnissen und reiche deine Website-Informationen ein. Zum Beispiel können Restaurants bei Yelp, TripAdvisor eingereicht werden; Software kann bei Capterra, G2 usw. eingereicht werden. (Nur die wichtigsten!)
 * **Relevante Communities/Foren/Fragen und Antworten:** Gelegentlich in Branchenforen, Foren, Zhihu-Fragen und -Antworten usw., an denen du **wirklich teilnimmst und mit denen du vertraut bist**, wenn der Inhalt deiner Website tatsächlich dazu beitragen kann, eine Frage zu beantworten oder eine Diskussion zu ergänzen, kannst du **natürlich** einen Link hinterlassen. **Schicke niemals Spam-Werbelinks in irrelevante Communities!** Dies führt sehr wahrscheinlich dazu, dass sie gelöscht werden oder sogar den Ruf schädigen.

### 3. Ein paar Links "anfordern"

Direkt Links von anderen Websites anzufordern, hat in der Regel eine geringe Erfolgsquote, denn warum sollte dir jemand helfen? Aber es gibt ein paar relativ vernünftige Möglichkeiten:

**Kernaktion:**
 * **Gastblogging:** Dies ist eine relativ effektive Möglichkeit. Du **schreibst einen hochwertigen Artikel kostenlos** für andere relevante Websites, und als Gegenleistung kannst du ein oder zwei Links zu deiner eigenen Website in den Informationen zum Artikelautor oder im Inhalt einfügen.
  * **Wie es geht (vereinfachte Version):** Finde ein paar Blogs, die du für gut hältst und die sich mit deinem Thema befassen, und sieh nach, ob sie Beiträge annehmen (normalerweise gibt es am Ende der Website oder auf der Kontaktseite Hinweise). Beginne mit Blogs, die nicht so hohe Anforderungen stellen, und schreibe einen Artikel, in dem du dich gut auskennst und der für ihre Leser wertvoll ist.
 * **Bildlink-Aufbau (Image Link Building):** Wenn du originelle Bilder oder Diagramme auf deiner Website hast, die von anderen Websites verwendet werden, diese aber deine Quelle nicht nennen, kannst du sie höflich kontaktieren und darum bitten, einen Link zu deiner ursprünglichen Bildseite hinzuzufügen.
* **E-Mail-Vorlage für Reichweite:** Die `web.html`-Datei bietet keine E-Mail-Vorlagen, die direkt kopiert und verwendet werden können. Es wurde auch erwähnt, dass die Erfolgsquote beim blinden Senden von E-Mails zur Anforderung von Links sehr gering ist. Wenn du Gastblogs schreiben möchtest, musst du deine Beitragshinweise sorgfältig nach dem Stil und den Anforderungen der Website verfassen.

### 4. Links "kaufen"? Finger weg!

**Kernwarnung:** Ahrefs **rät ausdrücklich davon ab, Links zu kaufen**.
 * Es ist leicht, Spam-Links zu kaufen, die für SEO nicht hilfreich sind, was Geldverschwendung ist.
 * Verstoßen gegen die Google-Richtlinien für Webmaster. Wenn dies entdeckt wird, kann deine Website bestraft werden, was zu einem erheblichen Ranking-Verlust oder sogar zum Entfernen aus dem Index führen kann.

### 5. Pflege deine vorhandenen Links

Wenn du hart erkämpfte Links verlierst, ist das sehr bedauerlich.

**Kernaktion:** Überprüfe, ob Seiten auf deiner Website nicht mehr geöffnet werden können (404 Nicht gefunden), diese Seiten aber früher externe Links hatten, die auf sie verwiesen.
**Tool:** Verwende die kostenlosen [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools).
**Schritte:**
 1. Melde dich bei Ahrefs Webmaster Tools an und verifiziere deine Website.
 2. Rufe das Site Explorer-Tool auf.
 3. Wähle im linken Menü "Seiten" -> "Beste nach Links" (nach Anzahl der Backlinks sortieren).
 4. Klicke auf den Filter "HTTP-Code" und wähle "404 nicht gefunden".
 5. Zeige die Berichtliste an. Wenn du feststellst, dass eine 404-Seite von einer höheren Anzahl von "Verweisenden Domains" (der Anzahl der Websites, die auf diese Seite verlinken) gefolgt wird, deutet dies darauf hin, dass diese ungültige Seite früher wichtig war.
 6. Suche die neue URL-Seite auf deiner Website, die am engsten mit dem Inhalt dieser ungültigen Seite übereinstimmt (wenn keine vollständig entsprechende vorhanden ist, kann auch die Homepage verwendet werden).
 7. Richte eine **301-Weiterleitung** ein, um die URL dieser 404-Seite dauerhaft auf die neue URL umzuleiten, die du gefunden hast. Auf diese Weise kann der Wert des Links, der auf die alte URL verweist, an die neue Seite weitergegeben werden. (Wie man eine 301-Weiterleitung einrichtet, hängt von deinem Website-Server und deiner Plattform ab, du musst möglicherweise nach einem bestimmten Tutorial suchen, z. B. "So richtest du eine 301-Weiterleitung in WordPress ein").
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *Bildbeschreibung: Verwende den Bericht "Beste nach Links" des Ahrefs Site Explorer in Verbindung mit dem 404-Filter, um ungültige Seiten mit externen Links zu finden (Beispiel aus dem Ahrefs-Blog)*

---

### Backlink-Toolkit

**Erforderlich (kostenlos):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): Zeige die Links an, die deine eigene Website erhält, finde 404-Seiten mit Links, um sie zu reparieren, und überprüfe den technischen Zustand der Website.
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): Zeige schnell die 100 besten externen Links einer beliebigen Website (einschließlich deiner Mitbewerber) an, um zu erfahren, woher sie ihre Links erhalten.
 * [Google Alerts](https://www.google.com/alerts): Richte Benachrichtigungen ein, die sich auf deinen Markennamen, Website-Namen und Kernthemen beziehen. Du erhältst eine E-Mail-Benachrichtigung, wenn neue Inhalte im Internet erscheinen. Dies hilft dir, Fälle zu finden, in denen du von anderen erwähnt wurdest, aber keinen Link hinzugefügt hast (du kannst sie bitten, ihn hinzuzufügen), oder um neue Möglichkeiten zum Linkaufbau zu finden.

</details>

---

<details>
<summary><h2>5. Weitere Optimierungen</h2></summary>

1.  **Indexierung prüfen:** Gehe zur [Google Search Console](https://search.google.com/search-console/about) (kostenlos, im Folgenden GSC genannt) und prüfe mit der Funktion "URL-Prüfung", ob Google deine wichtigen Seiten finden kann.
2.  **Defekte Links reparieren:** Wenn du URLs geändert oder Seiten gelöscht hast, verwende die [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (kostenlos, im Folgenden AWT genannt), um die Seiten zu finden, die zu 404-Fehlern geworden sind, aber früher externe Links hatten. Leite diese dann per 301-Weiterleitung auf neue Seiten um.
3.  **Mehrsprachigkeit:** Wenn der Wettbewerb auf deiner Website hoch ist, versuche es mit Mehrsprachigkeit. Viele Websites konkurrieren nur in englischer Sprache. Durch die Anpassung an mehrere Sprachen kannst du mehr Traffic erzielen.
4.  **Sitemap erstellen:** Erstelle eine `sitemap.xml`-Datei, die alle wichtigen Seiten deiner Website auflistet, und übermittle sie an die Google Search Console. Dies hilft Google, deine Inhalte schneller und umfassender zu entdecken.
    *   **Beispiel (Grundstruktur einer sitemap.xml):**
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
5.  **Hreflang (Sprachauszeichnung):** Wenn deine Website Inhalte in mehreren Sprachen oder für verschiedene Regionen anbietet, verwende `hreflang`-Tags, um Google mitzuteilen, welche Sprach-/Regionalversionen jeder Seite vorhanden sind. Dadurch werden Probleme mit doppeltem Content vermieden und sichergestellt, dass den richtigen Nutzern die richtige Version angezeigt wird.
    *   **Beispiel (im HTML `<head>`):**
        ```html
        <link rel="alternate" hreflang="de-de" href="http://www.example.com/de/page.html" />
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Hinweis: `x-default` wird verwendet, um die Standardversion oder eine Version ohne spezifische Sprachregion anzugeben.)*
6.  **Robots.txt (Crawler-Protokoll):** Platziere eine `robots.txt`-Datei im Stammverzeichnis deiner Website, um Suchmaschinen-Crawlern mitzuteilen, welche Seiten oder Verzeichnisse sie nicht besuchen oder indexieren sollen (z. B. Admin-Bereiche, Testseiten usw.).
    *   **Beispiel (Inhalt einer robots.txt):**
        ```
        User-agent: *          # Gilt für alle Crawler
        Disallow: /admin/       # Zugriff auf /admin/-Verzeichnis verbieten
        Disallow: /private.html # Zugriff auf /private.html-Datei verbieten
        Allow: /public/        # Zugriff auf /public/-Verzeichnis explizit erlauben (falls übergeordnetes Verzeichnis verboten ist)

        User-agent: Googlebot   # Gilt nur für Google-Crawler
        Disallow: /tmp/         # Google-Crawler den Zugriff auf /tmp/-Verzeichnis verbieten
        Sitemap: http://www.example.com/sitemap.xml # Sitemap-Position angeben
        ```
7.  **Canonical (Canonical-Tag):** Wenn deine Website mehrere Seiten mit gleichem oder sehr ähnlichem Inhalt aufweist (z. B. URLs mit Parametern), verwende das `canonical`-Tag, um anzugeben, welche die "offizielle" Version ist. Dies vermeidet, dass Suchmaschinen diese als doppelten Inhalt betrachten und die Gewichtung aufgeteilt wird.
    *   **Beispiel (im HTML `<head>`):**
        ```html
        <link rel="canonical" href="http://www.example.com/produktseite" />
        ```
        *(Hinweis: Auch auf der Seite `http://www.example.com/produktseite?ref=banner` musst du auf die kanonische URL ohne Parameter verweisen.)*
8.  **Schema-Markup (Strukturierte Daten):** Füge Schema-Markup in den Seitenquelltext ein, um Google in einem standardisierten Format zu erklären, was der Inhalt der Seite bedeutet (z. B. Rezept, Produkt, FAQ). Dies hilft Google, den Inhalt zu verstehen, und kann dazu führen, dass in den Suchergebnissen reichhaltigere Darstellungen angezeigt werden (z. B. Bewertungen, Preisspannen usw.), was die Klickrate erhöht.
    *   **Beispiel (JSON-LD-Format, im `<script>`-Tag platziert):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Was ist SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Suchmaschinenoptimierung) bezieht sich auf den Prozess der Optimierung von Website-Inhalten und technischen Aspekten, um das Ranking der Website in den organischen Suchergebnissen von Suchmaschinen (wie Google) zu verbessern."
            }
          },{
            "@type": "Question",
            "name": "Wie lange dauert es, bis SEO Wirkung zeigt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Die Zeit, die es dauert, bis SEO Wirkung zeigt, hängt von verschiedenen Faktoren ab, wie z. B. der Website-Basis, dem Wettbewerb und den eingesetzten Ressourcen. In der Regel dauert es Wochen bis Monate oder sogar noch länger, bis deutliche Ergebnisse sichtbar werden."
            }
          }]
        }
        ```

</details>

---

<details>
<summary><h2>6. SEO-Tools</h2></summary>

### Kostenlose Tools
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator):** Zur Keyword-Recherche.
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools):** Kostenlose Tools zur Website-Diagnose, Keyword-Ranking-Tracking, interne Verlinkungsmöglichkeiten finden, defekte Links überprüfen usw.
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker):** Schnelle Ansicht der 100 besten Backlinks einer Website.
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** Keyword-Recherche-Tool in Google Ads (erfordert Google Ads-Konto).
* **[Google-Suchvorschläge (Google Suggest)](https://www.google.com/):** Automatisch angezeigte Vorschläge bei der Google-Suche.
* **[Verwandte Google-Suchanfragen](https://www.google.com/):** Verwandte Suchbegriffe am Ende der Google-Suchergebnisseite.
* **[Answer The Public](https://answerthepublic.com/):** Zum Finden von Fragen und Themen rund um Keywords (mit täglicher Nutzungslimite).
* **[Google Trends](https://trends.google.com/):** Um das Suchinteresse und die Trends von Keywords zu sehen.
* **[ChatGPT (Basisversion)](https://chat.openai.com/):** Für Brainstorming, Content-Generierung, Titelfindung usw.
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** Überwachung der Website-Performance in der Google-Suche, Indexierungsstatus, technische Probleme usw.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** Online-Tools zur Bildkomprimierung.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** Testet die Seitengeschwindigkeit und das Benutzererlebnis.
* **[Schema Markup Generator (z. B. Schema.dev)](https://schema.dev/schema-generator/):** Tools zum Generieren von strukturiertem Datencode.
* **[Google-Suchgalerie (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** Zeigt die von Google unterstützten Schema-Typen und Rich Snippets an.
* **[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):** Testet die Mobile-Freundlichkeit einer Webseite.
* **[Google Alerts](https://www.google.com/alerts):** Überwachung neuer Inhalte im Internet, die bestimmte Keywords oder Marken erwähnen.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** Front-End-Frameworks, die beim Aufbau von SEO-freundlichen Websites helfen.
* **Branchenverzeichnisse/Bewertungsportale (teilweise kostenlos):** Wie [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/), wo grundlegende Geschäftsinformationen eingereicht werden können.

### Bezahlte Tools
* **[Ahrefs (Kernsuite)](https://ahrefs.com/):** Vollständige SEO-Tool-Plattform, die tiefere Keyword-Recherche, Wettbewerbsanalyse, Backlink-Analyse, Website-Diagnose usw. bietet.
* **[Semrush](https://www.semrush.com/):** Eine weitere umfassende SEO- und Marketing-Tool-Plattform mit ähnlichen Funktionen wie Ahrefs.
* **[SimilarWeb](https://www.similarweb.com/):** Eine weitere umfassende SEO- und Marketing-Tool-Plattform mit ähnlichen Funktionen wie Ahrefs.
* **[Answer The Public (bezahlte Version)](https://answerthepublic.com/):** Keine Nutzungseinschränkungen.
* **[ChatGPT (erweiterte Version)](https://openai.com/chatgpt/):** Leistungsstärkeres KI-Modell.
* **Branchenverzeichnisse/Bewertungsportale (erweiterte Funktionen/Werbung):** Wie [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/), die möglicherweise kostenpflichtige Werbe- oder erweiterte Analysefunktionen anbieten.

</details>

---

## Zum Schluss
Zum Schluss noch etwas Eigenwerbung: Ich habe ein Tool entwickelt, [SparkNow](https://sparknow.cc/), das dir hilft, dein Projekt aus einer Hand zu starten. SEO-Check, Backlinks, Performance, Werbetexte, Werbebilder, alles wird für dich erledigt. Interessierte Freunde können es gerne ausprobieren. Wenn du nicht interessiert bist, ignoriere es einfach. Es reicht aus, die oben genannten SEO-Methoden zu beherrschen.