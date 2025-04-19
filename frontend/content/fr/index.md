# Tutoriel SEO Ultime pour Débutants (et Experts Paresseux !)


## Notre Engagement

Ce tutoriel a un seul objectif : vous permettre d'atteindre 80% des performances SEO optimales pour votre site, en un minimum de temps. Pas besoin de comprendre pourquoi, ni même de savoir ce qu'est le SEO !

Ici, pas de définitions théoriques ou de concepts obscurs. On se concentre sur le "comment faire", avec des instructions claires et applicables immédiatement.

Si vous cherchez à comprendre "qu'est-ce que le SEO" ou "comment fonctionnent les moteurs de recherche", je vous conseille plutôt de consulter la [version originale de ce tutoriel (en anglais)](https://ahrefs.com/blog/zh/how-do-search-engines-work/).

Mais si vous voulez passer directement à l'action et savoir "comment optimiser votre SEO", vous êtes au bon endroit.

Gardez simplement à l'esprit qu'il s'agit d'une approche pratique, pas d'une exploration philosophique du SEO.

Ce tutoriel est à 90% une version condensée du tutoriel SEO d'Ahrefs. Si vous avez le temps, je vous recommande de consulter la version complète : https://ahrefs.com/blog/zh/how-do-search-engines-work/

Prêt ? Alors, c'est parti !



## Version Express : Mise en place en 10 minutes

### 0. Privilégiez un Site Statique ou Rendu Côté Serveur

C'est une erreur fréquente chez les débutants, qui se retrouvent avec un SEO inefficace.

**Pourquoi ?**

Parce que les robots d'indexation des moteurs de recherche (comme Googlebot) peuvent directement lire le code HTML des pages statiques ou rendues côté serveur. Cela facilite grandement l'exploration et la compréhension de vos pages.

Les sites où le contenu est généré uniquement par JavaScript dans le navigateur (rendu côté client) posent plus de problèmes. Les robots mettent plus de temps à les indexer, et il n'est même pas certain que Google exécute ces scripts JavaScript. Cela affecte négativement l'indexation et le positionnement.

De plus, les pages statiques ou rendues côté serveur sont généralement plus rapides à charger, ce qui améliore l'expérience utilisateur – un facteur important pour Google.

Je vous conseille d'utiliser des frameworks comme Next.js ou Nuxt.js, qui facilitent grandement le travail d'optimisation SEO.

### 1. Trouver les Bons Mots-Clés

1. Faites une liste de quelques mots-clés liés à votre activité/site web (par exemple, pour un site sur le SEO, pensez à "SEO", "recherche de mots-clés", "optimisation de pages", etc.).
2. Utilisez des outils de recherche de mots-clés (comme Free Keyword Generator d'Ahrefs, Keyword Planner de Google, Semrush, etc.) pour trouver d'autres termes associés.
3. Sélectionnez les mots-clés qui vous semblent les plus pertinents et notez-les.
4. Demandez à ChatGPT de vous suggérer d'autres mots-clés.

Points clés pour choisir les mots-clés :
* Ils doivent être pertinents pour votre activité/site web.
* Ils doivent potentiellement générer du trafic.
* Ils doivent avoir un certain volume de recherche (oubliez les mots-clés trop confidentiels).
* Plus le KD (Keyword Difficulty, indiqué dans les outils de recherche de mots-clés) est bas, mieux c'est. Un KD faible signifie moins de concurrence et donc une meilleure chance de vous positionner.

### 2. Rédiger du Contenu Optimisé

1. **Analysez la concurrence :** Recherchez vos mots-clés sur Google et étudiez le contenu des premiers résultats (type, format, angle).
2. **Comprenez l'intention :** Répondez aux besoins des utilisateurs qui recherchent ce mot-clé (type, format, angle).
3. **Offrez du contenu de qualité :** Partagez votre **expérience concrète**, résolvez les problèmes des utilisateurs, démontrez votre expertise.
4. **Soyez exhaustif :** Couvrez tous les aspects pertinents que l'utilisateur pourrait vouloir connaître, et essayez d'être plus complet que vos concurrents.
5. **Apportez votre touche personnelle :** Offrez des informations ou des astuces **uniques** que les autres n'ont pas.
6. **Facilitez la lecture :** Utilisez des **phrases courtes, des paragraphes, des images**, et vérifiez l'orthographe.
7. **Mettez à jour régulièrement :** Actualisez les informations obsolètes.

### 3. Optimiser Vos Pages (SEO On-Page)

1. **Méta-tags & Titres :**
 * **Titre de la page (Title) :** Accrocheur, incluant le mot-clé, de longueur appropriée (environ 50-60 caractères). (Exemple : `<title>SEO On-Page : Le Guide Ultime (2024)</title>`)
 * **Balise H1 :** Une seule par page, résumant le sujet principal. (Exemple : `<h1>Le Guide Ultime du SEO On-Page</h1>`)
 * **Balises H2-H6 :** Utilisées pour les sous-titres, organisant la structure du contenu.
 * **Méta-description (Meta Description) :** Décrit le contenu de la page, incite au clic, inclut le mot-clé, de longueur appropriée (environ 150-160 caractères). (Exemple : `<meta name="description" content="Apprenez tout sur le SEO On-Page : optimisation des mots-clés, aspects techniques... Améliorez le positionnement de votre site !">`)

2. **Liens :**
 * **Liens internes :** Pointent vers d'autres pages pertinentes de votre site web. Créez une structure en pyramide, évitez les pages isolées (sinon Google ne les trouvera pas). (Exemple : `<a href="/recherche-mots-cles">Découvrez la recherche de mots-clés</a>`)
 * **Liens externes :** (Si nécessaire) Pointent vers des sources d'informations crédibles ou des ressources externes utiles. (Exemple : `<a href="https://example.com" rel="nofollow">Ressources complémentaires</a>`)

3. **Images :**
 * **Nom de fichier :** Utilisez un nom descriptif. (Exemple : `checklist-seo-on-page.jpg`)
 * **Texte alternatif (Alt Text) :** Ajoutez un texte alternatif décrivant le contenu de l'image. (Exemple : `<img src="..." alt="Capture d'écran d'une checklist SEO On-Page">`)
 * **Compression :** Compressez la taille des fichiers images pour accélérer le chargement.

4. **URL :**
 * **Clair et concis :** URL courte, facile à comprendre, contenant idéalement le mot-clé (avec des tirets `-` pour séparer les mots). (Exemple : `/guide-seo-on-page/`)

5. **Expérience Utilisateur :**
 * **Vitesse de chargement (Core Web Vitals) :** Optimisez la vitesse.
 * **Adaptation mobile (Responsive Design) :** Assurez-vous d'une expérience optimale sur mobile.
 * **HTTPS :** Utilisez le protocole HTTPS pour la sécurité.
 * **Pas d'interruptions :** Évitez les pop-ups publicitaires intrusives.
 * **(Optionnel) Optimisation pour les extraits optimisés :** Fournissez une réponse concise et directe à la question posée.
 * **(Optionnel) Balisage Schema :** Ajoutez des données structurées pour aider Google à comprendre le contenu.

### 4. Gagner des Backlinks (Liens Externes)

1. **Créez du contenu exceptionnel :** Votre objectif est de produire un contenu **tellement bon et utile** que d'autres sites web voudront naturellement le citer ou recommander vos outils. (C'est la stratégie la plus durable et la plus efficace).
2. **Soumettez votre site à des annuaires de qualité :** Inscrivez votre site sur **quelques annuaires sectoriels les plus importants et crédibles**. (Par exemple, des annuaires de startups, des guides d'entreprises locales, etc.).
3. **Proposez des articles invités :** Si vous aimez écrire, proposez des **articles invités** (guest blogging) à d'autres sites web traitant de sujets similaires au vôtre. Vous pourrez naturellement insérer un lien vers votre site dans l'article.
4. **N'achetez jamais de liens :** Ahrefs **déconseille fortement** l'achat de liens. C'est une pratique risquée qui peut vous coûter cher et entraîner une pénalité de Google.

### 5. Autres Optimisations

1. **Vérifiez l'indexation :** Rendez-vous sur [Google Search Console](https://search.google.com/search-console/about) (gratuit) et utilisez l'outil "Inspecteur d'URL" pour vérifier si Google peut bien accéder à vos pages importantes.
2. **Corrigez les liens brisés :** Si vous avez modifié des URL ou supprimé des pages, utilisez [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (gratuit) pour trouver les pages qui renvoient maintenant une erreur 404 mais qui avaient des liens externes pointant vers elles. Redirigez-les vers les nouvelles pages avec une redirection 301.
3. **Pensez au multilingue :** Si votre secteur est très concurrentiel, essayez d'adapter votre site à d'autres langues. La compétition est souvent moins forte que sur le marché anglophone, ce qui peut vous apporter du trafic supplémentaire.
4. **Créez un Sitemap :** Créez un fichier `sitemap.xml` listant toutes les pages importantes de votre site et soumettez-le à Google Search Console. Cela aide Google à explorer votre site plus rapidement et complètement.
    *   **Exemple (structure de base d'un sitemap.xml) :**
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
5.  **Hreflang (balises multilingues) :** Si votre site propose du contenu dans plusieurs langues ou pour différentes régions, utilisez les balises `hreflang` pour indiquer à Google les différentes versions de chaque page. Cela évite les problèmes de contenu dupliqué et garantit que la bonne version est présentée aux bons utilisateurs.
    *   **Exemple (dans le `<head>` du code HTML) :**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="fr-fr" href="http://www.example.com/fr/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Note : `x-default` est utilisé pour spécifier la version par défaut ou sans région/langue spécifique)*
6.  **Robots.txt (protocole d'exclusion des robots) :** Placez un fichier `robots.txt` à la racine de votre site web pour indiquer aux robots d'exploration des moteurs de recherche quelles pages ou répertoires vous ne souhaitez pas qu'ils explorent ou indexent (par exemple, les pages d'administration, les pages de test, etc.).
    *   **Exemple (contenu du fichier robots.txt) :**
        ```
        User-agent: *          # S'applique à tous les robots
        Disallow: /admin/       # Interdit l'accès au répertoire /admin/
        Disallow: /private.html # Interdit l'accès au fichier /private.html
        Allow: /public/        # Autorise explicitement l'accès au répertoire /public/ (si un répertoire parent est interdit)

        User-agent: Googlebot   # S'applique uniquement au robot de Google
        Disallow: /tmp/         # Interdit au robot de Google l'accès au répertoire /tmp/
        Sitemap: http://www.example.com/sitemap.xml # Indique l'emplacement du sitemap
        ```
7.  **Canonical (balises canoniques) :** Si votre site comporte plusieurs pages ayant un contenu identique ou très similaire (par exemple, des URL avec des paramètres), utilisez la balise `canonical` pour indiquer quelle est la version "officielle". Cela évite que les moteurs de recherche les considèrent comme du contenu dupliqué et diluent le poids de chaque page.
    *   **Exemple (dans le `<head>` du code HTML) :**
        ```html
        <link rel="canonical" href="http://www.example.com/page-produit" />
        ```
        *(Note : même sur la page `http://www.example.com/page-produit?ref=bannière`, pointez vers l'URL canonique sans paramètres)*
8.  **Schema Markup (données structurées) :** Ajoutez des balises Schema au code de vos pages pour expliquer à Google, dans un format standardisé, ce que représente le contenu de la page (par exemple, une recette, un produit, une FAQ). Cela aide Google à comprendre le contenu et peut permettre d'afficher des informations plus riches dans les résultats de recherche (par exemple, des notes, des fourchettes de prix), améliorant ainsi le taux de clics.
    *   **Exemple (format JSON-LD, placé dans une balise `<script>`) :**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Qu'est-ce que le SEO ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le SEO (Search Engine Optimization) est l'ensemble des techniques visant à améliorer le positionnement d'un site web dans les résultats naturels des moteurs de recherche (comme Google)."
            }
          },{
            "@type": "Question",
            "name": "Combien de temps faut-il pour voir les résultats du SEO ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le temps nécessaire pour observer les effets du SEO varie en fonction de nombreux facteurs (ancienneté du site, niveau de concurrence, ressources investies...). Il faut généralement compter plusieurs semaines, voire plusieurs mois."
            }
          }]
        }
        ```

## Version Détaillée


<h2>1. Trouver les Bons Mots-Clés</h2>

### Première étape : Trouver les "Mots-Clés de Base"

Les "mots-clés de base" sont les termes les plus fondamentaux et les plus centraux. Ne vous compliquez pas la vie, posez-vous ces questions :

* Comment les gens rechercheraient-ils vos produits/services sur internet ? (Exemples : "café en grains pas cher", "préparer café filtre")
* Quels mots-clés vos concurrents utilisent-ils sur leur site web ?
* Si vous étiez client, que chercheriez-vous ?

**Exemple :**
Si vous avez une boutique en ligne de vente de café en grains, vos mots-clés de base pourraient inclure :
* Café en grains
* Café arabica
* Café filtre
* Machine à café
* Acheter café

**Astuce :**

Bloqué ? Demandez à ChatGPT (ou un autre outil d'IA) de vous aider à trouver des termes liés à votre activité.

Faites une liste de toutes vos idées, plus il y en a, mieux c'est.

### Deuxième étape : Utiliser des Outils Gratuits pour Trouver Plus de Mots-Clés

Brainstorming seul ne suffit pas. Utilisez des outils pour trouver d'autres mots-clés pertinents. Vous n'avez pas besoin de tous les utiliser, choisissez ceux qui vous conviennent le mieux.

**Outil 1 : Ahrefs Free Keyword Generator** (Recommandé, entièrement gratuit)

1. Ouvrez [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator).
2. Entrez un par un les "mots-clés de base" que vous avez trouvés.
3. Choisissez votre pays cible (par exemple, la France).
4. Cliquez sur "Find keywords".

Vous verrez une liste de suggestions de mots-clés associés. Concentrez-vous sur ces deux catégories :

* **Phrase Match (Correspondance exacte) :** Les expressions contenant votre mot-clé de base. Par exemple, si vous cherchez "café en grains", vous pourriez voir "café en grains bio", "café en grains Colombie".
* **Questions (Questions) :** Les phrases interrogatives contenant votre mot-clé de base. Par exemple, si vous cherchez "café filtre", vous pourriez voir "quel matériel pour café filtre", "comment faire un bon café filtre".

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*Exemple d'image : Utiliser un outil de mots-clés comme Ahrefs pour trouver des mots-clés liés à "aeropress" et consulter le volume de recherche mensuel. L'interface des outils gratuits est similaire, elle affiche une liste de mots-clés.*

**Outil 2 : Google Saisies Automatiques et Recherches Associées**

1. Ouvrez Google.
2. Entrez votre mot-clé de base et regardez les suggestions qui apparaissent automatiquement dans la barre de recherche (Google Suggest). Ce sont des recherches fréquentes.
3. Après avoir fait votre recherche, descendez en bas de la page et regardez la section "Recherches associées". C'est également une excellente source d'idées.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**Outil 3 : Answer The Public**

1. Ouvrez [Answer The Public](https://answerthepublic.com/).
2. Entrez votre mot-clé de base (en anglais de préférence, les résultats peuvent être meilleurs).
3. Choisissez le pays/la langue.
4. L'outil génère une visualisation des questions, prépositions et comparaisons liées à votre mot-clé, vous aidant à comprendre ce que les utilisateurs recherchent précisément. La version gratuite est limitée en nombre d'utilisations quotidiennes.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**Outil 4 : Google Trends** (pour suivre les tendances et la popularité)

1. Ouvrez [Google Trends](https://trends.google.com/).
2. Entrez votre mot-clé de base.
3. Vous pouvez observer l'évolution de la popularité du mot-clé au fil du temps, identifier des variations saisonnières ou des pics d'intérêt soudains.
4. Vous pouvez également explorer les requêtes associées pour trouver d'autres mots-clés populaires recherchés simultanément.

**Outil 5 : ChatGPT**

1. Ouvrez [ChatGPT](https://chat.openai.com/) ou un autre outil d'IA similaire.
2. Demandez à l'IA de générer davantage de mots-clés, de sujets ou de questions liés à votre mot-clé de base. Par exemple, vous pouvez lui demander : "Je vends du café en grains, peux-tu me suggérer des mots-clés ou des questions que les gens pourraient rechercher ?".

**Outil 6 : Google Keyword Planner** (Gratuit, mais nécessite un compte Google Ads)

Si vous avez un compte Google Ads (vous pouvez en créer un gratuitement, sans forcément lancer de campagne payante), vous pouvez utiliser Keyword Planner.

1. Connectez-vous à Google Ads, allez dans "Outils et paramètres" -> "Planification" -> "Planificateur de mots clés".
2. Choisissez "Découvrir de nouveaux mots clés".
3. Entrez vos mots-clés de base.

L'outil vous fournira des estimations de volume de recherche et d'autres suggestions de mots-clés. La version gratuite affiche cependant un intervalle de volume de recherche, moins précis.

### Troisième étape : Explorez les Forums, Communautés et Sites de Questions/Réponses

* **Explorez les forums/communautés/sites de questions/réponses :** Si vous êtes dans le domaine du café, allez sur les forums d'amateurs de café, les discussions pertinentes sur Quora, les groupes spécialisés. Regardez quelles questions les gens posent, ce dont ils discutent, quels termes ils utilisent.
* **Étudiez les commentaires :** Les commentaires sur les sites web de vos concurrents, les pages produits des sites e-commerce, les publications sur les réseaux sociaux peuvent également révéler des mots-clés utilisés par les utilisateurs.

**Exemple :** Sur un forum de café, vous voyez quelqu'un demander "comment faire un café filtre sans filtre en papier". C'est peut-être un excellent mot-clé auquel vous n'aviez pas pensé !

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### Boîte à Outils pour Mots-Clés

* **Outils :**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (Principal, gratuit)
 * Saisies automatiques & Recherches associées de Google (Complémentaire, gratuit)
 * [Answer The Public](https://answerthepublic.com/) (Pour trouver des questions, gratuit, limité par jour)
 * [Google Trends](https://trends.google.com/) (Pour suivre les tendances, gratuit)
 * [ChatGPT](https://chat.openai.com/) (Brainstorming IA, gratuit)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (Nécessite un compte Ads, gratuit)
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools):** Une suite d'outils gratuits plus puissante, mais nécessite de prouver que vous possédez votre site web. Vous permet de voir les mots-clés pour lesquels votre site est positionné, et de découvrir des mots-clés à faible concurrence.



---


<h2>2. Rédiger du Contenu SEO-Friendly</h2>

### Étape 1 : Comprendre ce que l'utilisateur veut voir (Analyser l'intention de recherche)

Vous devez impérativement savoir quel type de contenu (article, page produit, vidéo...), quel format (tutoriel, liste, avis...) et quel angle (débutant, pas cher, récent...) les gens recherchent.

1. Recherchez vos mots-clés sur Google.
2. Étudiez les 5 à 10 premiers résultats :
  * **Type :** Est-ce un article ? Une page produit ? Une vidéo ?
  * **Format :** Est-ce un tutoriel ? Une liste ? Un comparatif ?
  * **Angle :** Est-ce un contenu "pour débutants" ? "bon marché" ? "à jour" ?
3. **Imitez :** Votre type, format et angle de contenu doivent être cohérents avec les résultats dominants.

### Étape 2 : Écrivez sur ce que vous connaissez (Démontrez votre expertise E-E-A-T)

Rendez votre contenu crédible en démontrant votre expertise.
 * **Écrivez sur vos expériences personnelles ou vos domaines de compétences.**
 * Utilisez le "je" pour partager vos expériences et points de vue.
 * (Si pertinent) Mentionnez brièvement votre parcours ou vos réalisations.

### Étape 3 : Couvrez tous les aspects (Contenu détaillé)

Répondez à la plupart des questions que les utilisateurs peuvent se poser sur le sujet.

 1. Utilisez des outils pour trouver les questions/mots-clés de longue traîne associés à votre mot-clé principal.
 2. Étudiez les sous-titres des articles les mieux classés pour identifier les points qu'ils couvrent.
 3. Intégrez les points que vous avez trouvés et que vous jugez importants à votre propre contenu.

Attention : complet ne signifie pas bavard, adaptez-vous à l'intention de l'utilisateur.

### Étape 4 : Ajoutez votre touche personnelle (Originalité)

Donnez aux utilisateurs une raison de lire votre article plutôt que celui des autres.

 * Partagez une astuce unique, un résumé d'expérience ou une opinion personnelle.
 * Offrez une petite ressource que les autres n'ont pas (modèle, liste de contrôle...).
 * (Avancé) Réalisez une petite étude ou partagez des données.

### Étape 5 : Facilitez la lecture (Lisibilité)

Le confort de lecture encourage les utilisateurs à continuer.

 * Phrases courtes, paragraphes courts.
 * Séparez le contenu avec des sous-titres.
 * Illustrez avec des images pour faciliter la compréhension ou relâcher la fatigue visuelle.
 * Utilisez le gras ou des listes pour mettre en évidence les points clés.

### Étape 6 : Mettez à jour régulièrement

Évitez que le contenu ne devienne obsolète, ce qui peut entraîner une baisse du positionnement.

 * Vérifiez régulièrement (par exemple, une fois par an) : les informations sont-elles toujours exactes ? Les liens fonctionnent-ils toujours ?
 * Mettez à jour le contenu : modifiez les informations obsolètes, ajoutez du nouveau contenu.
 * Indiquez la date de mise à jour : Pour montrer aux utilisateurs que le contenu est à jour.

---



---


<h2>3. Optimisation On-Page (SEO Technique)</h2>

### Étape 1 : Aidez les moteurs de recherche et les utilisateurs à "comprendre" votre page

Adaptez-vous à l'intention de recherche.
 * Recherchez vos mots-clés sur Google et étudiez les 5 à 10 premiers résultats. Observez leur type de contenu (article/page produit/?) et leur format (tutoriel/liste/avis/?) et leur angle (débutant/pas cher/récent/?).
 * Votre contenu doit être cohérent avec ce que les utilisateurs recherchent.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *Exemple d'image : La recherche de "avocado seed" (graine d'avocat) renvoie principalement des articles de conseils sur la façon de la planter, avec un angle "simple et facile", ce qui indique que les utilisateurs sont des débutants.*

#### Écrivez un titre accrocheur (Title Tag) :
  * Incluez le mot-clé principal.
  * Sa longueur idéale ne devrait pas dépasser 70 caractères (environ 50 à 60 caractères pour éviter qu'il ne soit tronqué).
  * Qu'il soit clair et attractif, pour donner envie de cliquer.
  * Évitez de créer un titre purement accrocheur, il doit correspondre au contenu.
  * S'il s'agit d'un contenu sensible au facteur temps (comme un tutoriel), vous pouvez ajouter l'année.
  * **Outils :** ChatGPT peut vous aider à trouver des idées de titres. Utilisez l'audit de site Ahrefs Webmaster Tools (AWT) pour vérifier si le titre est trop long ou manquant.

 ![Exemple d'image : Exemple d'un bon titre](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### Écrivez un "front de page" (Meta Description) efficace :
  * C'est le texte descriptif sous le titre dans les résultats de recherche. Bien qu'il n'affecte pas directement le classement, il influence le taux de clics.
  * La longueur idéale est de moins de 160 caractères (environ 150 à 160 caractères).
  * Considérez-le comme un complément au titre, où vous pouvez mettre en avant des arguments qui ne rentrent pas dans le titre.
  * Incluez des mots-clés (Google les met en gras).
  * Utilisez une voix active et indiquez directement ce que vous pouvez offrir aux utilisateurs.
  * **Outils :** ChatGPT peut vous aider à rédiger plusieurs versions. Utilisez l'audit de site Ahrefs Webmaster Tools (AWT) pour vérifier si elle est manquante ou trop longue.
 ![Exemple d'image : Exemple d'une bonne méta-description](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### Choisissez un bon "nom d'URL" (URL) :
  * Le chemin d'URL (la partie après le nom de domaine) doit être court et facile à comprendre.
  * Incluez les mots-clés principaux (en anglais ou en pinyin, en utilisant `-` pour séparer les mots).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *Exemple d'image : `domain.com/learn-seo` est mieux que `domain.com/p=123`*

#### Le contenu doit avoir un "squelette" (Balises de titre : H1-H6) :
  * Utilisez les balises H1-H6 pour organiser le contenu et créer une structure hiérarchique claire, facile à lire.
  * **Balise H1 :** N'utilisez qu'une seule balise par page, généralement avec la même signification ou similaire au titre de la page (Title Tag).
  * **Balises H2-H6 :** Utilisez-les comme sous-titres pour chaque section.
  * **Outils :** Utilisez l'audit de site Ahrefs Webmaster Tools (AWT) pour vérifier si les balises H1 sont manquantes ou dupliquées.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *Exemple d'image : Créez une hiérarchie visuelle à l'aide de balises H*

### Étape 2 : Rédigez un contenu "substantiel" et "unique"

#### Contenu "Complet" :
  * Assurez-vous que votre contenu couvre les principaux aspects et questions que les utilisateurs peuvent souhaiter connaître lorsqu'ils recherchent ce mot-clé.
  * Consultez les titres des principaux articles (H2, H3) dans les résultats de recherche Google.
  * Consultez les "recherches associées" au bas des pages de résultats de recherche Google.
  * **Outils :** (facultatif) Utilisez l'explorateur de site Ahrefs Webmaster Tools (AWT) pour consulter votre site web et celui de vos concurrents afin de voir quels mots-clés communs génèrent du trafic (fonction Content Gap) et trouver les sous-thèmes que vous pouvez ajouter.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *Exemple d'image : Analysez les articles de vos concurrents, découvrez qu'ils mentionnent la "désinscription" comme moyen d'économiser de l'argent, et votre article peut également envisager d'ajouter ce point.*

#### Le contenu doit être "spécial" :
  * Ne vous contentez pas de répéter les mots des autres, offrez une valeur unique.
  * Il peut s'agir de : votre point de vue unique ou le résumé de votre expérience, une astuce unique que personne d'autre ne possède, une analyse de cas originale, un modèle ou une liste de contrôle gratuite.
  * L'objectif est de donner aux utilisateurs une raison de "sauvegarder" ou de "partager" votre article.

#### Présentez votre "expertise" ou votre "expérience" :
  * Si vous écrivez du contenu dans un domaine professionnel (tel que la médecine, la finance) ou si vous avez besoin d'une expérience personnelle (tel que les critiques de produits), vous devez présenter votre professionnalisme ou votre expérience réelle.
  * Expliquez clairement les sources d'informations (citations, liens), fournissez une présentation des antécédents de l'auteur (liens vers la page de présentation de l'auteur), partagez votre processus de fonctionnement ou votre expérience d'utilisation (avec des images, des vidéos) et assurez-vous que le contenu est factuellement exact.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *Exemple d'image : Présentez votre expérience d'utilisation réelle dans les critiques de produits.*

### Étape 3 : Optimiser les détails pour améliorer l'expérience

#### Optimiser les images :
  * **Nom de fichier :** Nommez les fichiers image avec des mots descriptifs, en utilisant `-` pour séparer les mots anglais ou le pinyin (tel que `black-puppy-play-ball.jpg` ou `heise-xiaogou-wanqiu.jpg`).
  * **Texte alternatif (Alt Text) :** Il s'agit d'une description d'image à montrer aux moteurs de recherche et aux utilisateurs malvoyants. Ajoutez l'attribut `alt` à la balise HTML `<img>`, et décrivez le contenu de l'image avec un langage concis, qui peut naturellement contenir des mots-clés. (Par exemple : `<img src="chien jouant avec une balle.jpg" alt="Un chiot labrador noir joue avec une balle rouge sur l'herbe">`)
  * **Compresser les images :** Les images trop grandes seront lentes à charger. Utilisez un outil pour compresser la taille de l'image tout en conservant la clarté autant que possible.
  * **Outils :** Utilisez l'audit de site Ahrefs Webmaster Tools (AWT) pour vérifier si les images manquent de texte Alt. Utilisez des outils en ligne tels que TinyPNG ou iLoveIMG pour compresser les images.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/20```markdown
2023/11/On-Page-SEO-1.png)
 *Exemple d'image : bon exemple de texte Alt*

#### Liens internes :
  * Dans votre article, créez un lien vers d'autres articles ou pages pertinentes de votre site web.
  * Cela aide les utilisateurs à découvrir plus de contenu et aide également les moteurs de recherche à comprendre la structure et les relations entre les pages de votre site.
  * **Outils :** Utilisez la fonction "Opportunités de liens internes" de l'audit de site Ahrefs Webmaster Tools (AWT) pour trouver les endroits où vous pouvez ajouter des liens internes.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *Exemple d'image : AWT a trouvé des opportunités de liens internes et vous a demandé de créer un lien vers la page B sur la page A.*

#### Liens externes :
  * Aux endroits appropriés, créez des liens vers d'autres sites web externes de haute qualité et pertinents comme références ou sources d'informations.
  * Par exemple, créez un lien vers le rapport original lors de la citation de données et créez un lien vers le site web officiel lors de la recommandation d'outils.
  * **Remarque :** S'il s'agit d'une publicité ou d'un lien sponsorisé, utilisez l'attribut `rel="nofollow"` ou `rel="sponsored"` pour en informer les moteurs de recherche.

#### Expérience utilisateur :
   * Vitesse de chargement rapide (Core Web Vitals).
   * Bonne expérience de navigation sur le téléphone mobile (Mobile-Friendly).
   * Utiliser le cryptage HTTPS (sécurisé).
   * Pas de publicité contextuelle agaçante (Pas de contextuelles intrusives).
  * Il s'agit généralement d'une optimisation à l'échelle du site, mais assurez-vous que les nouvelles pages répondent également aux exigences.
  * **Outils :** Utilisez Google PageSpeed Insights pour tester la vitesse et l'expérience de la page. Consultez les rapports pertinents dans Google Search Console.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *Exemple d'image : Signaux d'expérience de page de Google*

#### Battez-vous pour une « position d'affichage spéciale » :
  * **Extrait vedette (Featured Snippet):** Parfois, Google affiche une zone qui répond directement aux questions en haut des résultats de recherche. Si votre page se classe déjà parmi les premières, et qu'il y a une réponse directe et concise à une question dans le contenu (le format est préférable de se référer à l'extrait existant, tel qu'une liste, un paragraphe), il y a une chance d'être sélectionné.
  * **Extrait multimédia (Rich Snippet):** En ajoutant le balisage Schema (un code de données structurées) à la page, dites à Google quel est le type de votre contenu (par exemple, recettes, FAQ, informations sur le produit), parfois Google affichera des informations plus riches dans les résultats de recherche (tels que des notes, des prix, des étapes).
  * **Outils :** Utilisez Google Search Console pour voir pour quels mots vos classements sont élevés et Google affiche des extraits de fonctionnalités. Utilisez le générateur de schémas de Schema.dev pour générer du code de schéma.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *Exemple d'image : Extrait de support riche avec notes et nombre de commentaires*

### Étape 4 : Suivi et mise à jour continus

#### Surveiller l'effet :
 * Faites attention aux changements de classement de vos mots clés cibles.
 * Utilisez Google Search Console pour afficher les performances de votre page dans la recherche Google (impressions, clics, classements).

#### Mettre à jour le contenu :
 * Le référencement n'est pas un travail ponctuel. Passez régulièrement en revue votre contenu (par exemple, une fois par an), vérifiez si les informations sont obsolètes, si les liens sont invalides et si de nouvelles informations peuvent être ajoutées. La mise à jour du contenu aide à maintenir les classements.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *Exemple d'image : Augmentation du trafic après la mise à jour du contenu*

---

### Boîte à outils SEO de page
* [Google Search](https://www.google.com/) (voir les intentions, voir les adversaires)
* [ChatGPT](https://chat.openai.com/) (pensez à des idées de titres/descriptions)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (vérification gratuite de H1, titres, descriptions, textes Alt, recherche d'opportunités de liens internes, affichage des lacunes de mots-clés)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (Compression d'images en ligne)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (mesurer la vitesse et l'expérience de la page)
* [Google Search Console](https://search.google.com/search-console/) (surveiller les classements, les problèmes d'expérience, voir les mots-clés)
* [Générateur de schémas Schema.dev](https://schema.dev/schema-generator/) (Générer du code Schema)



---


<h2>4. Les liens externes</h2>

### Que sont les liens externes (backlinks) ?

Imaginez que l'Internet est un vaste réseau de relations. Lorsqu'un autre site Web A place un lien sur sa page pointant vers votre site Web B, cela crée un lien externe de A vers B. Google considérera ce lien comme un « vote » ou une « recommandation » du site Web A au site Web B.

En général, les « votes » des sites Web avec une **autorité élevée et une forte pertinence** sont plus importants.

Il existe de nombreuses façons d'obtenir des liens externes, nous nous concentrons sur les méthodes les plus essentielles et les moins risquées :

### 1. Laissez les autres vous créer des liens de manière proactive (gagner des liens - Earn Links)

C'est le moyen le plus idéal et le plus encouragé par Google, pas si « rapide », mais l'effet est le plus durable.

**Action principale :** créez du contenu **de haute qualité, avec une valeur unique et digne d'être cité**. Cela peut être :
 * Un outil ou une calculatrice en ligne gratuit très utile.
 * Un rapport de recherche sectoriel approfondi contenant des données exclusives.
 * Un guide ou un tutoriel ultime extrêmement détaillé qui résout les problèmes des utilisateurs.
 * Une opinion nouvelle ou une liste de ressources unique.

Lorsque votre contenu est suffisamment bon, les auteurs d'autres sites web peuvent trouver votre contenu et créer des liens vers celui-ci de manière proactive comme référence ou recommandation lorsqu'ils écrivent sur des sujets connexes.

### 2. « Ajoutez » vous-même quelques liens

Cette méthode est plus facile à utiliser, mais l'effet est limité, elle doit être modérée.

**Action principale :**
 * **Annuaire sectoriel :** Si votre entreprise a une attribution physique ou une attribution sectorielle claire (telle qu'une entreprise locale, une entreprise de logiciels), trouvez quelques sites verticaux ou annuaires commerciaux **les plus connus et les plus faisant autorité** du secteur, et soumettez les informations de votre site web. Par exemple, les restaurants peuvent être soumis à Yelp, TripAdvisor ; les logiciels peuvent être soumis à Capterra, G2, etc. (Ne faites que le plus important !)
 * **Communautés/forums/questions et réponses pertinentes :** Parfois, si le contenu de l'une de vos pages Web peut vraiment aider à répondre à une question ou à compléter une discussion, dans les communautés telles que les forums sectoriels, les barres de publication, les questions et réponses Zhihu que vous **participez et connaissez vraiment**, vous pouvez laisser un lien **naturellement**. **N'allez jamais poster de liens de spam dans les communautés non pertinentes !** Cela pourrait être supprimé et même nuire à votre réputation.

### 3. « Demandez » quelques liens

Demander directement des liens à d'autres sites web a généralement un faible taux de réussite, car pourquoi les autres vous aideraient-ils ? Mais il existe quelques moyens relativement raisonnables :

**Action principale :**
 * **Blogue invité :** C'est un moyen relativement efficace. Vous écrivez un article de haute qualité **gratuitement** pour d'autres sites web connexes, et en retour, vous pouvez inclure un ou deux liens pointant vers votre propre site web dans les informations sur l'auteur ou dans le contenu.
  * **Comment procéder (version simplifiée) :** Trouvez quelques blogs qui vous semblent plutôt bons et liés à votre thème, et voyez s'ils acceptent des contributions (généralement, il y aura une description sur le pied de page ou la page de contact du site web). Commencez par essayer les blogs qui n'ont pas des exigences trop élevées et rédigez un article que vous maîtrisez et qui est précieux pour leurs lecteurs.
 * **Liens d'image (Construction de liens d'image) :** Si un autre site web utilise des images, des graphiques originaux sur votre site web, mais qu'il n'indique pas que vous êtes la source, vous pouvez le contacter poliment et lui demander d'ajouter un lien pointant vers votre page d'image d'origine.
* **Modèle d'e-mail de sensibilisation :** Le fichier `web.html` ne fournit pas de modèles d'e-mails qui peuvent être copiés et utilisés directement. Et il a également été mentionné que le taux de réussite de l'envoi aveugle d'e-mails demandant des liens est très faible. Si vous souhaitez publier un blogue invité, vous devez rédiger sérieusement vos instructions de soumission en fonction du style et des exigences du site web de l'autre partie.

### 4. « Acheter » des liens ? Ne touchez pas !

**Avertissement de base :** Ahrefs **indique clairement qu'il n'est pas recommandé d'acheter des liens**.
 * Il est facile d'acheter des liens de spam qui n'aident pas le référencement et de gaspiller de l'argent.
 * Violez les directives de Google pour les webmasters. Une fois découvert, votre site web peut être pénalisé, ce qui entraînera une baisse significative de son classement ou même sa suppression de l'index.

### 5. Maintenez bien vos liens existants

Il serait dommage de perdre les liens durement gagnés.

**Action principale :** Vérifiez si certaines pages de votre site web ne peuvent pas être ouvertes (404 introuvable), mais ces pages avaient auparavant des liens externes pointant vers elles.
**Outil :** Utilisez [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) gratuit.
**Étapes :**
 1. Connectez-vous à Ahrefs Webmaster Tools et vérifiez votre site web.
 2. Accédez à l'outil Site Explorer.
 3. Sélectionnez « Pages » dans le menu de gauche -> « Meilleur par liens » (Trié par nombre de liens retour).
 4. Cliquez sur le filtre « Code HTTP » et sélectionnez « 404 introuvable ».
 5. Afficher la liste des rapports. Si vous constatez qu'une page 404 est suivie d'un nombre élevé de « Domaines référents » (le nombre de sites web qui renvoient à cette page), cela indique que cette page expirée était autrefois importante.
 6. Trouvez la nouvelle URL de la page la plus pertinente avec le contenu de cette page expirée sur votre site web (si la page correspondante n'existe pas, la page d'accueil peut également être).
 7. Définissez la **redirection 301**, redirigez en permanence l'URL de cette page 404 vers la nouvelle URL que vous avez trouvée. De cette façon, la valeur du lien pointant vers l'ancienne URL peut être transférée vers la nouvelle page. (La façon de définir la redirection 301 dépend de votre serveur et de votre plateforme web. Vous devrez peut-être rechercher des tutoriels spécifiques, tels que « Comment définir la redirection 301 dans WordPress »).
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *Description de l'image : Utilisez le rapport Meilleur par liens de Ahrefs Site Explorer avec le filtre 404 pour trouver les pages expirées avec des liens externes (l'exemple provient du blog d'Ahrefs)*

---

### Boîte à outils de lien externe

**Obligatoire (gratuit) :**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): Affichez les liens que votre propre site web reçoit, trouvez les pages 404 avec des liens et réparez-les, et vérifiez la santé technique du site web.
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): Afficher rapidement les 100 premiers liens externes de n'importe quel site web (y compris vos concurrents), et comprendre d'où ils tirent leurs liens.
 * [Alertes Google](https://www.google.com/alerts): Définissez des rappels liés au nom de votre marque, au nom de votre site web et aux thèmes principaux. Lorsque du nouveau contenu pertinent apparaît en ligne, vous recevrez une notification par e-mail. Cela vous aide à découvrir les cas où d'autres vous mentionnent mais ne vous ont pas créé de lien (vous pouvez demander à l'ajouter), ou à découvrir de nouvelles opportunités de création de liens.



---


<h2>5. Autres optimisations</h2>

1. **Vérifiez l'inclusion :** Accédez à [Google Search Console](https://search.google.com/search-console/about) (gratuit, ci-après dénommé GSC), utilisez la fonction « Vérification d'URL » pour voir si Google peut trouver votre page importante.
2. **Corrigez les liens morts :** Si vous avez modifié une URL ou supprimé une page, utilisez [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (gratuit, ci-après dénommé AWT) pour trouver les pages qui sont devenues 404, mais qui avaient des liens externes pointant vers elles, et redirigez-les vers la nouvelle page avec une redirection 301.
3. **Adaptez plusieurs langues :** Si la concurrence sur votre site web est forte, essayez d'adapter plusieurs langues. Après avoir adapté plusieurs langues, vous pouvez obtenir plus de trafic.
4. **Créez un plan de site :** Créez un fichier `sitemap.xml`, répertoriez toutes les pages importantes de votre site web et soumettez-le à Google Search Console pour aider Google à découvrir votre contenu plus rapidement et plus complètement.
    *   **Exemple (structure de base du sitemap.xml) :**
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
5.  **Hreflang (balise multilingue) :** Si votre site web a plusieurs langues ou contenu pour différentes régions, utilisez la balise `hreflang` pour indiquer à Google les différentes versions linguistiques/régionales de chaque page, éviter le problème de la duplication de contenu et vous assurer que la version correcte est affichée aux bons utilisateurs.
    *   **Exemple (dans la balise `<head>` HTML) :**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Remarque : `x-default` est utilisé pour spécifier la version de région par défaut ou non spécifique)*
6.  **Robots.txt (protocole d'exploration) :** Placez un fichier `robots.txt` dans le répertoire racine du site web pour indiquer aux robots d'exploration de moteur de recherche quelles pages ou répertoires vous ne voulez pas qu'ils visitent ou incluent (par exemple, les pages de gestion en arrière-plan, les pages de test, etc.).
    *   **Exemple (contenu robots.txt) :**
        ```
        User-agent: *          # S'applique à tous les robots d'exploration
        Disallow: /admin/       # Interdire l'accès au répertoire /admin/
        Disallow: /private.html # Interdire l'accès au fichier /private.html
        Allow: /public/        # Autoriser explicitement l'accès au répertoire /public/ (si le répertoire parent est interdit)

        User-agent: Googlebot   # S'applique uniquement aux robots d'exploration de Google
        Disallow: /tmp/         # Interdire aux robots d'exploration de Google l'accès au répertoire /tmp/
        Sitemap: http://www.example.com/sitemap.xml # Indique l'emplacement du plan de site
        ```
7.  **Canonical (étiquette canonique) :** Si votre site web a plusieurs pages avec le même contenu ou un contenu très similaire (par exemple, des URL avec des paramètres), utilisez la balise `canonical` pour spécifier quelle est la version « officielle », pour éviter que les moteurs de recherche ne les considèrent comme du contenu dupliqué et ne dispersent le poids.
    *   **Exemple (dans la balise `<head>` HTML) :**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Remarque : Même sur cette page `http://www.example.com/product-page?ref=banner`, vous devez pointer vers l'URL standard sans paramètres)*
8.  **Balisage de schéma (données structurées) :** Ajoutez un balisage de schéma au code de la page, utilisez un format standardisé pour expliquer la signification du contenu de la page à Google (par exemple, il s'agit d'une recette, d'un produit, d'une FAQ), aidez Google à comprendre le contenu et peut afficher un style plus riche dans les résultats de recherche (tels que la notation, la fourchette de prix, etc.), améliorant ainsi le taux de clics.
    *   **Exemple (format JSON-LD, placé dans la balise `<script>`) :**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Qu'est-ce que le SEO ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (optimisation pour les moteurs de recherche) fait référence au processus d'amélioration du classement d'un site web dans les résultats de recherche naturelle des moteurs de recherche (tels que Google) en optimisant le contenu du site web et les aspects techniques."
            }
          },{
            "@type": "Question",
            "name": "Combien de temps faut-il pour que le SEO prenne effet ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le temps qu'il faut pour que le référencement porte ses fruits varie en fonction de nombreux facteurs tels que la base du site web, le niveau de concurrence, les ressources investies, etc. Il faut généralement plusieurs semaines, voire plusieurs mois ou plus pour voir des effets significatifs."
            }
          }]
        }
        ```



---


<h2>6. Outils SEO</h2>

### Outils gratuits
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) :** Utilisé pour trouver des mots clés.
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) :** Ensemble gratuit d'outils de diagnostic de site web, de suivi du classement des mots clés, de recherche d'opportunités de liens internes, de vérification des liens invalides, etc.
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker) :** Permet de voir rapidement les 100 premiers liens externes d'un site web.
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) :** Outil de recherche de mots clés dans Google Ads (nécessite un compte Google Ads).
* **[Suggestion de zone de recherche Google (Google Suggest)](https://www.google.com/) :** Les suggestions qui apparaissent automatiquement lors de la recherche sur Google.
* **[Recherches associées Google](https://www.google.com/) :** Les mots clés de recherche associées au bas de la page de résultats de recherche Google.
* **[Answer The Public](https://answerthepublic.com/) :** Utilisé pour trouver des questions et des sujets liés aux mots clés (limite quotidienne d'utilisation).
* **[Google Trends](https://trends.google.com/) :** Affichez la popularité et les tendances des mots clés.
* **[ChatGPT (version de base)](https://chat.openai.com/) :** Utilisé pour le brainstorming, la génération de contenu, les titres, etc.
* **[Google Search Console (GSC)](https://search.google.com/search-console/about) :** Surveiller les performances du site web dans la recherche Google, l'état d'inclusion, les problèmes techniques, etc.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/) :** Outil de compression d'images en ligne.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/) :** Testez la vitesse de chargement des pages et l'expérience utilisateur.
* **[Générateur de balisage de schéma (tel que Schema.dev)](https://schema.dev/schema-generator/) :** Un outil qui génère du code de données structurées.
* **[Bibliothèque de recherche Google (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) :** Affichez les types de schémas et les résumés enrichis pris en charge par Google.
* **[Test d'optimisation mobile Google](https://search.google.com/test/mobile-friendly) :** Tester la convivialité mobile des pages web.
* **[Alertes Google](https://www.google.com/alerts) :** Surveiller le nouveau contenu sur le Web qui mentionne des mots clés ou des marques spécifiques.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/) :** Cadres de façade, aident à construire un site web conviviale au SEO.
* **Annuaire sectoriel/site web de critiques (partiellement gratuit) :** Tels que [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/), vous pouvez soumettre des informations commerciales de base.

### Outils payants
* **[Ahrefs (suite de base)](https://ahrefs.com/) :** Plateforme d'outils SEO complète, fournit des recherches de mots clés plus approfondies, une analyse des concurrents, une analyse des liens externes, un diagnostic de site web, etc.
* **[Semrush](https://www.semrush.com/) :** Une autre plate-forme d'outils SEO et de marketing complète, avec des fonctions similaires à celles d'Ahrefs.
* **[SimilarWeb](https://www.similarweb.com/) :** Une autre plate-forme d'outils SEO et de marketing complète, avec des fonctions similaires à celles d'Ahrefs.
* **[Answer The Public (version payante)](https://answerthepublic.com/) :** Nombre illimité d'utilisations.
* **[ChatGPT (version avancée)](https://openai.com/chatgpt/) :** Modèle d'IA plus puissant.
* **Annuaire sectoriel/site web de critiques (fonctions avancées/publicité) :** Tels que [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/), peut fournir des fonctions de promotion payantes ou d'analyse avancées.



---

## Enfin
Enfin, incluez une possession privée. J'ai développé un outil, [SparkNow](https://sparknow.cc/), pour vous aider à démarrer un projet en une seule fois. La détection SEO, les liens externes, les performances, le texte promotionnel et les images promotionnelles sont tous pris en charge par vous. Les amis intéressés peuvent l'essayer, et les personnes non intéressées peuvent l'ignorer directement, et maîtriser les méthodes SEO ci-dessus suffisent.