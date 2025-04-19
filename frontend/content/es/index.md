# Guía SEO Minimalista: Domina el Posicionamiento en Buscadores


## Propósito de esta guía

El objetivo de esta guía es que, después de leerla y seguir los pasos, puedas optimizar el SEO de tu sitio web al 80%, incluso si no sabes por qué, ni qué es el SEO.

Por lo tanto, esta guía no te dirá qué es el SEO ni te enseñará la teoría, simplemente te dirá "cómo hacer un buen SEO".

Si quieres aprender "¿qué es el SEO?" o "¿cómo funciona el SEO?", te recomiendo consultar la [versión original](https://ahrefs.com/blog/zh/how-do-search-engines-work/).

Si lo que quieres es aprender "cómo hacer SEO", esta guía es perfecta para ti.

Pero recuerda: esto es la "técnica", no la "filosofía".

El 90% del contenido de esta guía proviene del tutorial SEO de Ahrefs, y puede considerarse una versión condensada del mismo.

Aquí tienes la versión original del tutorial SEO de Ahrefs, que te recomiendo consultar si tienes tiempo: https://ahrefs.com/blog/zh/how-do-search-engines-work/

Si estás listo, ¡empecemos!



## Versión express: apréndelo y aplícalo en 10 minutos

### 0. Asegúrate de que tu sitio web sea estático o con renderizado del lado del servidor (SSR)

Muchos principiantes lo ignoran y luego descubren que el SEO no funciona.

**¿Por qué?**

Porque los rastreadores de los motores de búsqueda (como Googlebot) pueden leer directamente el HTML generado por páginas estáticas o SSR, lo que facilita la indexación y comprensión de tus páginas.

En cambio, en sitios web que generan contenido en el navegador con JavaScript (renderizado del lado del cliente o CSR), el rastreador necesita más tiempo, e incluso no está garantizado que Google ejecute ese código JavaScript, lo que afecta la indexación y el posicionamiento.

Además, las páginas estáticas o con renderizado del lado del servidor suelen cargar más rápido, lo que mejora la experiencia del usuario, algo que Google valora mucho.

Se recomienda usar frameworks como next.js o nuxt.js, que ya tienen muchas optimizaciones SEO incorporadas.

### 1. Encuentra las palabras clave (Keywords)

1.  Piensa en algunas palabras relacionadas con tu negocio/sitio web (por ejemplo, si este sitio web es sobre tutoriales SEO, piensa en "SEO", "investigación de palabras clave", "optimización on-page", etc.).
2.  Utiliza herramientas de investigación de palabras clave (como el Generador de Palabras Clave Gratuito de Ahrefs, el Planificador de Palabras Clave de Google, Semrush, etc.) para encontrar más palabras clave relacionadas.
3.  Elige algunas palabras que te parezcan relevantes y anótalas.
4.  Pide a GPT que te ayude a encontrar aún más palabras clave.

Puntos clave al elegir palabras clave:
*   Las palabras clave deben estar relacionadas con tu negocio/sitio web.
*   Las palabras clave deben generar tráfico.
*   Las palabras clave deben tener un volumen de búsqueda decente, evita las palabras clave demasiado nicho.
*   Cuanto menor sea el KD (Dificultad de la Palabra Clave, que se ve en las herramientas de investigación de palabras clave), mejor. Una KD baja significa menos competencia y más facilidad para posicionar.

### 2. Escribe contenido de calidad

1.  **Analiza a la competencia:** Busca tus palabras clave en Google y mira qué **tipo de contenido (tipo, formato, ángulo)** están publicando los que se posicionan en los primeros lugares.
2.  **Alinea la intención:** Satisface la intención de búsqueda del usuario, ofreciendo el **tipo de información (tipo, formato, ángulo)** que busca al ingresar esa palabra clave.
3.  **Ofrece contenido valioso:** Comparte **experiencias reales**, resuelve los problemas del usuario, demuestra tu conocimiento y experiencia.
4.  **Sé completo:** Cubre todos los **puntos relevantes** que el usuario pueda querer saber, e intenta ser más completo que la competencia.
5.  **Añade un toque único:** Ofrece información o técnicas **que nadie más tenga**.
6.  **Facilita la lectura:** Usa **frases cortas, párrafos separados, imágenes** y revisa la ortografía.
7.  **Mantente actualizado:** Actualiza la información obsoleta lo antes posible.

### 3. Optimiza la página (SEO On-Page)

1.  **Meta etiquetas y Títulos:**
    *   **Título de la página (Title):** Atractivo, con palabras clave, longitud adecuada (aprox. 30 caracteres). (Ejemplo: `<title>Guía Definitiva de SEO On-Page (2024)</title>`)
    *   **Etiqueta H1:** Usa un solo H1 por página, resumiendo el tema. (Ejemplo: `<h1>Guía Definitiva de SEO On-Page</h1>`)
    *   **Etiquetas H2-H6:** Para subtítulos, organizando la estructura del contenido.
    *   **Meta Descripción (Meta Description):** Describe el contenido, atrae clics, incluye palabras clave, longitud adecuada (aprox. 80 caracteres). (Ejemplo: `<meta name="description" content="Aprende todo sobre SEO On-Page, desde la optimización de palabras clave hasta detalles técnicos, ¡y mejora el ranking de tu sitio web!">`)

2.  **Enlaces:**
    *   **Enlaces internos:** Apunta a otras páginas relevantes dentro de tu sitio web. Lo ideal es una estructura piramidal, evitando páginas huérfanas (islas), para que Google las encuentre. (Ejemplo: `<a href="/investigacion-palabras-clave">Aprende a investigar palabras clave</a>`)
    *   **Enlaces externos:** (Si es necesario) Apunta a fuentes de información autorizadas o recursos externos útiles. (Ejemplo: `<a href="https://example.com" rel="nofollow">Referencias</a>`)

3.  **Imágenes:**
    *   **Nombre del archivo:** Usa nombres descriptivos. (Ejemplo: `checklist-seo-on-page.jpg`)
    *   **Texto alternativo (Alt Text):** Agrega texto alternativo que describa el contenido de la imagen. (Ejemplo: `<img src="..." alt="Captura de pantalla de la lista de verificación de SEO On-Page">`)
    *   **Compresión:** Comprime las imágenes para que carguen más rápido.

4.  **URL:**
    *   **Descripción concisa:** La ruta de la URL debe ser corta, fácil de entender y preferiblemente incluir palabras clave (en inglés, separadas por `-`). (Ejemplo: `/guia-seo-on-page/`)

5.  **Experiencia del usuario:**
    *   **Velocidad de la página (Core Web Vitals):** Optimiza la velocidad de carga.
    *   **Adaptación a móviles (Mobile-Friendly):** Asegúrate de que la experiencia en teléfonos móviles sea buena.
    *   **HTTPS:** Usa cifrado HTTPS.
    *   **Sin interrupciones:** Evita el exceso de anuncios pop-up.
    *   **(Opcional) Optimización para fragmentos destacados:** Ofrece respuestas concisas y directas.
    *   **(Opcional) Marcado Schema (Schema Markup):** Agrega datos estructurados para ayudar a Google a entender el contenido.

### 4. Consigue Enlaces Externos (Backlinks)

1.  **Escribe contenido increíble:** Esfuérzate para que tu contenido sea **excepcional y útil**, para que la gente quiera citar tus artículos o recomendar tus herramientas. (Esta es la clave más importante y duradera).
2.  **Envía tu sitio a directorios:** Envía tu sitio web a **los directorios más importantes y autorizados** de tu sector (por ejemplo, directorios de empresas locales).
3.  **Escribe como invitado (Guest Blogging):** Si te gusta escribir, puedes intentar escribir **artículos como invitado** para otros sitios web relacionados con tu tema, incluyendo un enlace a tu sitio web de forma natural.
4.  **¡Nunca compres enlaces!:** Ahrefs **desaconseja encarecidamente** la compra de enlaces. Es un riesgo altísimo, puede ser una pérdida de dinero y hasta provocar que Google penalice tu sitio web.

### 5. Otras Optimizaciones

1.  **Verifica la indexación:** Ve a [Google Search Console](https://search.google.com/search-console/about) (gratis, GSC a partir de ahora), y usa la función "Inspección de URL" para comprobar si Google puede encontrar tus páginas importantes.
2.  **Corrige enlaces rotos:** Si has cambiado URLs o borrado páginas, usa [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (gratis, AWT a partir de ahora) para encontrar las páginas que dan error 404 pero que antes tenían enlaces externos. Redirígelas con un 301 a las nuevas páginas.
3.  **Adapta tu sitio a varios idiomas:** Si tu nicho es muy competitivo, intenta adaptar tu sitio a varios idiomas. Muchos sitios solo compiten en inglés, así que traducir tu contenido te puede traer más tráfico.
4.  **Crea un Sitemap:** Crea un archivo `sitemap.xml` que liste todas las páginas importantes de tu sitio web y envíalo a Google Search Console para ayudar a Google a descubrir tu contenido de forma más rápida y completa.
    *   **Ejemplo (estructura básica de sitemap.xml):**
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
5.  **Hreflang (etiquetas de idioma):** Si tu sitio web tiene contenido en varios idiomas o dirigido a diferentes regiones, usa las etiquetas `hreflang` para indicarle a Google qué versión de cada página corresponde a cada idioma/región. Esto evita problemas de contenido duplicado y asegura que se muestre la versión correcta a cada usuario.
    *   **Ejemplo (en el `<head>` del HTML):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="es-es" href="http://www.example.com/es/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Nota: `x-default` se usa para especificar la versión predeterminada o sin región/idioma específico)*
6.  **Robots.txt (protocolo de exclusión):** Pon un archivo `robots.txt` en el directorio raíz de tu sitio web para indicarle a los rastreadores de los motores de búsqueda qué páginas o directorios no quieres que visiten ni indexen (por ejemplo, páginas de administración, páginas de prueba, etc.).
    *   **Ejemplo (contenido de robots.txt):**
        ```
        User-agent: *          # Se aplica a todos los rastreadores
        Disallow: /admin/       # Prohíbe el acceso al directorio /admin/
        Disallow: /private.html # Prohíbe el acceso al archivo /private.html
        Allow: /public/        # Permite explícitamente el acceso al directorio /public/ (si un directorio superior está prohibido)

        User-agent: Googlebot   # Solo se aplica al rastreador de Google
        Disallow: /tmp/         # Prohíbe que Googlebot acceda al directorio /tmp/
        Sitemap: http://www.example.com/sitemap.xml # Indica la ubicación del Sitemap
        ```
7.  **Canonical (etiqueta canónica):** Si tienes varias páginas con contenido idéntico o muy similar (por ejemplo, URLs con parámetros), usa la etiqueta `canonical` para especificar cuál es la versión "oficial" y evitar que los motores de búsqueda las consideren contenido duplicado y dispersen la autoridad.
    *   **Ejemplo (en el `<head>` del HTML):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Nota: Incluso en la página `http://www.example.com/product-page?ref=banner`, debe apuntar a la URL canónica sin parámetros)*
8.  **Schema Markup (datos estructurados):** Agrega Schema Markup al código de tu página. Es una forma estandarizada de explicarle a Google qué significa el contenido de tu página (por ejemplo, si es una receta, un producto, una sección de preguntas frecuentes). Esto ayuda a Google a entender el contenido y puede mostrar información más rica en los resultados de búsqueda (como valoraciones, rangos de precios, etc.), mejorando el CTR.
    *   **Ejemplo (formato JSON-LD, dentro de una etiqueta `<script>`):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "¿Qué es el SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El SEO (Search Engine Optimization) se refiere al proceso de optimizar el contenido y los aspectos técnicos de un sitio web para mejorar su posicionamiento en los resultados de búsqueda orgánica de motores de búsqueda como Google."
            }
          },{
            "@type": "Question",
            "name": "¿Cuánto tiempo tarda el SEO en dar resultados?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El tiempo para ver resultados de SEO varía según factores como la base del sitio web, la competencia y los recursos invertidos. Generalmente, se necesitan semanas, meses o incluso más para observar efectos significativos."
            }
          }]
        }
        ```

## Versión detallada


<h2>1. Encuentra las palabras clave</h2>

### Paso 1: Piensa en las "palabras clave semilla"

Las "palabras clave semilla" son las más básicas y centrales. No te compliques, hazte estas preguntas:

*   ¿Cómo buscaría la gente lo que ofreces en internet? (Por ejemplo: "granos de café baratos", "cómo hacer café con filtro")
*   ¿Qué palabras usan tus competidores en sus sitios web?
*   Si fueras cliente, ¿qué buscarías?

**Ejemplo:**
Supongamos que tienes una tienda online de granos de café. Tus palabras clave semilla podrían incluir:
*   Granos de café
*   Granos de café arábica
*   Café con filtro
*   Cafetera
*   Comprar granos de café

**Consejo:**

¿No se te ocurre nada? Prueba a preguntarle a ChatGPT (o a otra IA) que te ayude a generar ideas relacionadas con tu negocio.

Anota todo lo que se te ocurra, cuantas más ideas, mejor.

### Paso 2: Usa herramientas gratuitas para encontrar más palabras clave

Pensar solo con la cabeza no es suficiente. Usa herramientas que te ayuden a encontrar más palabras clave relacionadas. No hace falta usarlas todas, elige las que mejor se adapten a ti.

**Herramienta 1: Ahrefs Free Keyword Generator** (Recomendada, totalmente gratis)

1.  Abre [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator).
2.  Introduce una a una las "palabras clave semilla" que pensaste antes.
3.  Selecciona tu país objetivo (por ejemplo: España).
4.  Haz clic en "Find keywords".

Verás un montón de sugerencias de palabras clave relacionadas. Presta atención a estas dos categorías:

*   **Phrase Match (coincidencia de frase):** Frases que contienen tu palabra clave semilla. Por ejemplo, si buscas "granos de café", podrías ver "granos de café orgánico", "granos de café de Colombia".
*   **Questions (preguntas):** Preguntas que contienen tu palabra clave semilla. Por ejemplo, si buscas "café con filtro", podrías ver "¿qué necesito para hacer café con filtro?", "¿cómo hacer un buen café con filtro?".

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*Ejemplo de imagen: Usar una herramienta de palabras clave como Ahrefs para buscar palabras clave relacionadas con "aeropress". Puedes ver información como el volumen de búsqueda mensual. La interfaz de las herramientas gratuitas es similar, te dan una lista de palabras clave.*

**Herramienta 2: Barra de búsqueda de Google y búsquedas relacionadas**

1.  Abre la búsqueda de Google.
2.  Escribe tus palabras clave semilla y observa las sugerencias que aparecen automáticamente (Google Suggest). Son búsquedas frecuentes de la gente.
3.  Después de buscar, baja hasta el final de la página y mira la sección de "Búsquedas relacionadas". Es un buen lugar para encontrar palabras clave relacionadas.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**Herramienta 3: Answer The Public**

1.  Abre [Answer The Public](https://answerthepublic.com/).
2.  Introduce tu palabra clave semilla (se recomienda usar inglés, puede dar mejores resultados).
3.  Selecciona el país/idioma.
4.  Generará un montón de preguntas, frases preposicionales, comparaciones, etc. en torno a tu palabra clave, ayudándote a entender qué preguntas específicas está buscando la gente. La versión gratuita tiene un límite de uso diario.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**Herramienta 4: Google Trends** (Para ver la popularidad y las tendencias)

1.  Abre [Google Trends](https://trends.google.com/).
2.  Introduce tu palabra clave semilla.
3.  Puedes ver la evolución de la popularidad de búsqueda de esa palabra, detectar cambios estacionales o temas que se vuelven virales de repente.
4.  También puedes ver las consultas relacionadas para encontrar otras palabras populares que la gente busca al mismo tiempo.

**Herramienta 5: ChatGPT**

1.  Abre [ChatGPT](https://chat.openai.com/) u otra herramienta de IA similar.
2.  Pídele que genere más palabras clave, temas o preguntas relacionadas con tus palabras clave semilla. Por ejemplo, puedes preguntar: "Vendo granos de café, dame algunas palabras clave o preguntas relacionadas que la gente podría buscar".

**Herramienta 6: Google Keyword Planner** (Gratuita, pero necesitas una cuenta de Google Ads)

Si tienes una cuenta de Google Ads (puedes registrarte gratis, no necesitas gastar dinero en anuncios), puedes usar el Keyword Planner.

1.  Inicia sesión en Google Ads, ve a "Herramientas y configuración" -> "Planificación" -> "Planificador de palabras clave".
2.  Selecciona "Descubre nuevas palabras clave".
3.  Introduce tus palabras clave semilla.

Te dará estimaciones del volumen de búsqueda y más sugerencias de palabras clave. Pero la versión gratuita muestra el volumen de búsqueda como un rango, no es tan preciso.

### Paso 3: Visita foros/comunidades/blogs/sitios de preguntas y respuestas

*   **Visita foros/comunidades/blogs/sitios de preguntas y respuestas relacionados:** Por ejemplo, si te dedicas al café, visita foros de amantes del café, temas relacionados en Quora, grupos de Facebook. Mira qué pregunta la gente, de qué hablan, qué palabras usan.
*   **Mira las secciones de comentarios:** Las secciones de comentarios de los sitios web de tus competidores, páginas de comercio electrónico de productos relacionados, publicaciones en redes sociales, también pueden esconder palabras clave que los usuarios buscan de verdad.

**Ejemplo:** En un foro de café, ves que alguien pregunta "cómo hacer café con filtro sin usar filtros de papel". ¡Podría ser una buena palabra clave que no habías pensado!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### Kit de herramientas de palabras clave

*   **Kit de herramientas:**
    *   [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (Principal, gratuita)
    *   Barra de búsqueda de Google y búsquedas relacionadas (Auxiliar, gratuita)
    *   [Answer The Public](https://answerthepublic.com/) (Para encontrar preguntas, gratuita, con límite diario)
    *   [Google Trends](https://trends.google.com/) (Para ver tendencias, gratuita)
    *   [ChatGPT](https://chat.openai.com/) (Brainstorming con IA, gratuita)
    *   [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (Necesitas cuenta de Ads, gratuita)
    *   [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): Un conjunto de herramientas gratuitas más potentes, pero necesitas verificar que eres el propietario de tu sitio web. Puedes ver para qué palabras clave se posiciona tu sitio web y encontrar palabras clave con poca competencia.



---


<h2>2. Cómo escribir contenido SEO</h2>

### Paso 1: Entiende qué quiere ver el usuario (Análisis de la intención de búsqueda)

Debes saber qué tipo, formato y ángulo de contenido está buscando la gente al buscar esa palabra clave.

1.  Busca tu palabra clave en Google.
2.  Mira los resultados de las primeras 5-10 posiciones:
    *   **Tipo:** ¿Es un artículo? ¿Una página de producto? ¿Un vídeo?
    *   **Formato:** ¿Es un tutorial? ¿Una lista? ¿Una reseña?
    *   **Ángulo:** ¿Es "para principiantes"? ¿"Barato"? ¿"Lo último"?
3.  **Imita:** El tipo, formato y ángulo de tu contenido deben ser similares a los de la mayoría.

### Paso 2: Escribe sobre lo que sabes (Demuestra experiencia E-E-A-T)

Haz que el contenido sea creíble, demuestra que sabes de lo que hablas.
*   **Escribe sobre tus experiencias personales o sobre lo que dominas.**
*   Usa "yo" para compartir tus experiencias y opiniones.
*   (Si aplica) Menciona brevemente tu experiencia o tus logros.

### Paso 3: Cubre todos los temas (Contenido exhaustivo)

Responde la mayoría de las preguntas del usuario sobre ese tema.

1.  Usa herramientas para encontrar preguntas/palabras clave long-tail relacionadas con esa palabra clave.
2.  Mira los subtítulos de los artículos que se posicionan en los primeros lugares para encontrar los temas que cubren.
3.  Añade a tu contenido todos los temas que encuentres y que consideres importantes.

Nota: Ser completo no significa ser repetitivo. Escribe según la intención del usuario.

### Paso 4: Aporta algo especial (Unicidad)

Dale al usuario una razón para leer tu artículo en lugar de otro.

*   Comparte una técnica única, un resumen de experiencias o un punto de vista.
*   Ofrece un pequeño recurso que nadie más tenga (como una plantilla, una lista de verificación).
*   (Avanzado) Realiza un pequeño experimento o comparte datos.

### Paso 5: Facilita la lectura (Legibilidad)

Que el usuario se sienta cómodo al leer y quiera seguir leyendo.

*   Frases cortas, párrafos separados.
*   Usa subtítulos para separar el contenido.
*   Incluye imágenes para ilustrar o reducir el cansancio.
*   Usa negritas y listas para destacar los puntos importantes.

### Paso 6: Mantente actualizado

Evita que el contenido se quede obsoleto y caiga en el ranking.

*   Revisa periódicamente (por ejemplo, cada año): ¿La información sigue siendo precisa? ¿Los enlaces siguen funcionando?
*   Actualiza el contenido: Modifica la información obsoleta, añade contenido nuevo.
*   Indica la fecha de actualización: Para que el usuario sepa que es la última versión.

---



---


<h2>3. SEO On-Page (SEO en la página)</h2>

### Paso 1: Haz que los motores de búsqueda y los usuarios "entiendan" tu página

Alinea la intención de búsqueda.
*   Busca tus palabras clave en Google y mira los primeros 5-10 resultados. Presta atención al tipo de contenido (artículo/página de producto/¿?), al formato del contenido (tutorial/lista/reseña/¿?) y al ángulo del contenido ("para principiantes"/"barato"/"lo último"/¿?).
*   Tu contenido debe ser coherente con ellos. Dale al usuario lo que quiere ver.

![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

*Ejemplo de imagen: Una búsqueda de "avocado seed" (semilla de aguacate) da como resultado guías que enseñan a cultivarlo. El ángulo es "fácil, sencillo", lo que indica que los usuarios son principiantes.*

#### Escribe un "título llamativo" (Title Tag):
*   Incluye la palabra clave principal.
*   La longitud ideal es de 70 caracteres (aproximadamente 30 letras), o no se mostrará completo.
*   Debe ser claro y atractivo, que dé ganas de hacer clic.
*   No hagas títulos puramente "clickbait", debe ser coherente con el contenido.
*   Si el contenido tiene un plazo de validez (como un tutorial), añade el año.
*   **Herramientas:** Pídele a ChatGPT que te ayude a generar ideas para varios títulos. Usa la herramienta de auditoría de sitios de Ahrefs Webmaster Tools (AWT) para comprobar si el título es demasiado largo o falta.

![Ejemplo de imagen: Un buen ejemplo de título](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### Escribe un buen "escaparate" (Meta Description):
*   Es el texto descriptivo que aparece debajo del título en los resultados de búsqueda. No influye directamente en el posicionamiento, pero sí en el CTR (tasa de clics).
*   La longitud ideal es de 160 caracteres (aproximadamente 80 letras).
*   Se puede considerar un complemento del título. Incluye puntos de venta que no cabían en el título.
*   Incluye la palabra clave (Google la pone en negrita).
*   Usa la voz activa. Dile directamente al usuario lo que le puedes ofrecer.
*   **Herramientas:** Pídele a ChatGPT que te ayude a escribir varias versiones. Usa la herramienta de auditoría de sitios de Ahrefs Webmaster Tools (AWT) para comprobar si falta o es demasiado largo.
![Ejemplo de imagen: Un buen ejemplo de meta descripción](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### Elige un buen "nombre de URL" (URL):
*   La ruta de la URL (la parte que va después del dominio) debe ser corta y fácil de entender.
*   Incluye la palabra clave principal (en inglés o en pinyin, separa las palabras con `-`).
![URL-Friendly](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

*Ejemplo de imagen: domain.com/learn-seo es mejor que domain.com/p=123*

#### El contenido debe tener una "estructura" (Etiquetas de encabezado: H1-H6):
*   Usa las etiquetas H1-H6 para organizar el contenido y formar una estructura jerárquica clara que facilite la lectura.
*   **Etiqueta H1:** Usa solo una por página, normalmente con el mismo significado o similar al del título de la página (Title Tag).
*   **Etiquetas H2-H6:** Úsalas como subtítulos de las distintas secciones.
*   **Herramientas:** Usa la auditoría de sitios de Ahrefs Webmaster Tools (AWT) para comprobar si faltan etiquetas H1 o si están duplicadas.

![ejemplo de jerarquia con las etiquetas H](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
*Ejemplo de imagen: crea una jerarquía visual usando etiquetas H*

### Paso 2: Escribe contenido "sustancioso" y "único"

#### El contenido debe ser "completo":
*   Asegúrate de que tu contenido cubre los principales aspectos y preguntas que la gente puede querer saber cuando busca esa palabra clave.
*   Mira los subtítulos (H2, H3) de los artículos que aparecen en las primeras posiciones de los resultados de búsqueda de Google.
*   Mira las "búsquedas relacionadas" en la parte inferior de la página de resultados de búsqueda de Google.
*   **Herramientas:** (Opcional) Usa el Explorador de sitios de Ahrefs Webmaster Tools (AWT) para ver para qué palabras clave están generando tráfico tanto tu sitio web como el de tus competidores (función "Content Gap"). Encuentra subtemas que podrías añadir.
![Ejemplo de imagen: Analiza los artículos de tus competidores](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
*Ejemplo de imagen: Analiza los artículos de tus competidores. Descubre que mencionan "darse de baja" como forma de ahorrar dinero. Tu artículo también podría considerar añadir ese punto.*

#### El contenido debe ser "especial":
*   No te limites a repetir lo que dicen los demás, ofrece algo único.
*   Puede ser: una visión o resumen de experiencia único, un pequeño truco que nadie más tenga, un análisis de caso original, una plantilla o lista de verificación gratuita.
*   El objetivo es darle al usuario una razón para "guardar" o "compartir" tu artículo.

#### Demuestra tu "profesionalidad" o "experiencia":
*   Si escribes sobre un campo profesional (como medicina o finanzas) o necesitas experiencia de primera mano (como reseñas de productos), demuestra tu profesionalidad o experiencia real.
*   Indica claramente las fuentes de información (citas, enlaces), ofrece una presentación del autor (enlace a la página de biografía del autor), comparte tu proceso de operación o experiencia de uso (con imágenes o vídeos), asegúrate de que el contenido sea preciso.
![Ejemplo de imagen: Demuestra tu experiencia real en una reseña de productos](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
*Ejemplo de imagen: Demuestra tu experiencia real en una reseña de productos.*

### Paso 3: Optimiza los detalles, mejora la experiencia

#### Optimiza las imágenes:
*   **Nombre del archivo:** Nombra el archivo de imagen con palabras descriptivas, separando las palabras en inglés o pinyin con `-` (por ejemplo, `black-puppy-play-ball.jpg` o `perro-negro-jugando-pelota.jpg`).
*   **Texto alternativo (Alt Text):** Esta es la descripción de la imagen para los motores de búsqueda y los usuarios con discapacidad visual. Añade un atributo `alt` en la etiqueta `<img>` del HTML. Describe el contenido de la imagen con un lenguaje sencillo. Puedes incluir la palabra clave de forma natural. (Por ejemplo: `<img src="perro-jugando-pelota.jpg" alt="Un cachorro labrador negro jugando con una pelota roja en el césped">`)
*   **Comprime las imágenes:** Si las imágenes son demasiado grandes, tardarán más en cargar. Usa herramientas para comprimir el tamaño de la imagen, manteniendo la nitidez en la medida de lo posible.
*   **Herramientas:** Usa la auditoría de sitios de Ahrefs Webmaster Tools (AWT) para comprobar si a las imágenes les falta texto alternativo. Usa herramientas en línea como TinyPNG o iLoveIMG para comprimir las imágenes.
![Ejemplo de imagen: Un buen ejemplo de texto alternativo](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
*Ejemplo de imagen: Un buen ejemplo de texto alternativo*

#### Enlaces internos:
*   En tus artículos, enlaza a otros artículos o páginas relevantes de tu sitio web.
*   Esto ayuda a los usuarios a descubrir más contenido y también ayuda a los motores de búsqueda a comprender la estructura de tu sitio web y las relaciones entre las páginas.
*   **Herramientas:** Usa la función "Oportunidades de enlaces internos" en la auditoría de sitios de Ahrefs Webmaster Tools (AWT) para encontrar lugares donde puedes añadir enlaces internos.
![Ejemplo de imagen: Oportunidad de enlace interno encontrada por AWT](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
*Ejemplo de imagen: AWT encuentra oportunidades de enlaces internos. Te indica que puedes enlazar de la página A a la página B.*

#### Enlaces externos:
*   En los lugares adecuados, enlaza a otros sitios web externos relevantes y de alta calidad como referencia o fuente de información.
*   Por ejemplo, enlaza al informe original cuando cites datos, enlaza al sitio web oficial cuando recomiendes herramientas.
*   **Atención:** Si es un enlace de publicidad o patrocinado, usa el atributo `rel="nofollow"` o `rel="sponsored"` para indicárselo a los motores de búsqueda.

#### Experiencia de la página:
*   Carga rápida (Core Web Vitals).
*   Buena experiencia de navegación en teléfonos móviles (Mobile-Friendly).
*   Usa cifrado HTTPS (seguro).
*   Sin molestos anuncios emergentes (sin intersticiales intrusivos).
*   Estas suelen ser optimizaciones de todo el sitio, pero asegúrate de que las páginas nuevas también cumplen los requisitos.
*   **Herramientas:** Usa Google PageSpeed Insights para probar la velocidad y la experiencia de la página. Consulta los informes relacionados en Google Search Console.
![Ejemplo de imagen: Señales de experiencia de la página de Google](https://ahrefs.com/blog/zh/wp-```markdown
content/uploads/2023/11/On-Page-SEO-3.png)
*Ejemplo de imagen: Señales de experiencia de la página de Google*

#### Lucha por los "lugares de exhibición especiales":
*   **Fragmento destacado (Featured Snippet):** A veces Google muestra un cuadro en la parte superior de los resultados de búsqueda que responde directamente a la pregunta. Si tu página ya está en las primeras posiciones y contiene una respuesta directa y concisa a una pregunta (el formato debe ser similar al de los fragmentos existentes, como listas o párrafos), tienes la oportunidad de ser seleccionado.
*   **Fragmento de medios enriquecidos (Rich Snippet):** Añade marcado de esquema (un tipo de código de datos estructurados) a tu página para decirle a Google qué tipo de contenido es (por ejemplo, receta, preguntas frecuentes, información del producto). A veces Google muestra información más rica en los resultados de búsqueda (como clasificaciones, precios, pasos).
*   **Herramientas:** Usa Google Search Console para ver qué palabras clave tienen un buen ranking y Google muestra un fragmento destacado. Usa el generador de esquemas Schema.dev para generar código de esquema.
![Ejemplo de imagen: Fragmento de medios enriquecidos con calificaciones y número de reseñas](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
*Ejemplo de imagen: Fragmento de medios enriquecidos con calificaciones y número de reseñas*

### Paso 4: Seguimiento y actualización continuos

#### Monitorizar el rendimiento:
*   Presta atención a los cambios en el ranking de tus palabras clave objetivo.
*   Usa Google Search Console para ver el rendimiento de tus páginas en la búsqueda de Google (impresiones, clics, ranking).

#### Actualizar el contenido:
*   El SEO no es un trabajo puntual. Revisa periódicamente (por ejemplo, una vez al año) tu contenido. Comprueba si la información está desactualizada, si los enlaces ya no funcionan y si hay nueva información que puedas añadir. Actualizar el contenido ayuda a mantener el ranking.
![Ejemplo de imagen: Crecimiento del tráfico tras la actualización del contenido](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
*Ejemplo de imagen: Crecimiento del tráfico tras la actualización del contenido*

---

### Kit de herramientas de SEO On-Page
* [Google Search](https://www.google.com/) (Para ver la intención, ver la competencia)
* [ChatGPT](https://chat.openai.com/) (Para generar ideas para títulos/descripciones)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (Comprobación gratuita de H1, título, descripción, texto alternativo, oportunidades de enlace interno, ver la brecha de palabras clave)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (Compresión de imágenes en línea)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (Para medir la velocidad y la experiencia de la página)
* [Google Search Console](https://search.google.com/search-console/) (Monitorizar el ranking, problemas de experiencia, ver palabras clave)
* [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (Generar código de esquema)



---


<h2>4. Enlaces externos (Backlinks)</h2>

### ¿Qué son los enlaces externos (backlinks)?

Imagina que Internet es una enorme red de relaciones. Cuando otro sitio web A pone un enlace en su página que apunta a tu sitio web B, se forma un enlace externo de A a B. Google considera este enlace como una "recomendación" o "voto" de A para B.

Normalmente, los "votos" de sitios web **con autoridad alta y alta relevancia** tienen más peso.

Hay muchas maneras de conseguir enlaces externos. Nos centraremos en las formas más importantes y menos arriesgadas:

### 1. Deja que otros te enlacen de forma proactiva (Ganar enlaces - Earn Links)

Esta es la forma más ideal y más animada por Google. No es tan "rápida", pero los resultados son más duraderos.

**Acción principal:** Crea contenido de **alta calidad, valor único y que merezca ser citado**. Esto puede ser:
 * Una herramienta o calculadora en línea gratuita muy útil.
 * Un informe de investigación de la industria en profundidad con datos exclusivos.
 * Una guía o tutorial definitivo extremadamente detallado que resuelva los puntos débiles del usuario.
 * Un nuevo punto de vista o una lista única de recursos.

Cuando tu contenido es lo suficientemente bueno, los autores de otros sitios web pueden descubrir tu contenido al escribir sobre temas relacionados y enlazarte de forma proactiva como referencia o recomendación.

### 2. "Añade" tú mismo algunos enlaces

Este método es más fácil de usar, pero tiene un efecto limitado y debe usarse con moderación.

**Acción principal:**
 * **Directorio de la industria:** Si tu negocio tiene una ubicación física o una afiliación industrial clara (como una empresa local, una empresa de software), encuentra los sitios web verticales o directorios comerciales más conocidos y autorizados de la industria y envía la información de tu sitio web. Por ejemplo, los restaurantes se pueden enviar a Yelp, TripAdvisor; el software se puede enviar a Capterra, G2, etc. (¡Haz solo los más importantes!).
 * **Comunidades/Foros/Preguntas y respuestas relacionadas:** Ocasionalmente en foros de la industria, foros, preguntas y respuestas de Zhihu, etc. **que realmente participan y están familiarizados con**, si el contenido de una de tus páginas web realmente puede ayudar a responder a una pregunta o complementar una discusión, puedes dejar un enlace **de forma natural**. **¡Nunca publiques enlaces basura publicitarios en comunidades irrelevantes!** Esto puede ser eliminado e incluso dañar tu reputación.

### 3. "Pide" algunos enlaces

Pedir enlaces directamente a otros sitios web suele tener una tasa de éxito muy baja, ¿por qué deberían ayudarte? Pero hay algunas formas relativamente razonables:

**Acción principal:**
 * **Blogs de invitados:** Esta es una forma relativamente eficaz. Escribe **un artículo de alta calidad de forma gratuita** para otros sitios web relacionados. A cambio, puedes incluir uno o dos enlaces a tu propio sitio web en la información del autor del artículo o en el contenido.
  * **Cómo hacerlo (versión simplificada):** Encuentra algunos blogs que te parezcan decentes y que estén relacionados con tu tema. Comprueba si aceptan envíos (normalmente hay una explicación en el pie de página del sitio web o en la página de contacto). Empieza por probar con blogs que no tengan requisitos tan altos. Escribe un artículo en el que seas bueno y que sea valioso para sus lectores.
 * **Construcción de enlaces de imágenes (Image Link Building):** Si otros sitios web utilizan las imágenes, los gráficos que tienes en tu sitio web, pero no han indicado que eres la fuente, puedes ponerte en contacto con ellos de forma educada y solicitar que añadan un enlace a la página de la imagen original.
* **Plantilla de correo electrónico de divulgación:** El archivo `web.html` no proporciona una plantilla de correo electrónico que se pueda copiar y utilizar directamente. Y también se menciona que la tasa de éxito de enviar correos electrónicos ciegos para solicitar enlaces es muy baja. Si vas a escribir un blog de invitados, tienes que escribir cuidadosamente las instrucciones de envío en función del estilo y los requisitos del sitio web de la otra parte.

### 4. ¿"Comprar" enlaces? ¡No lo toques!

**Advertencia principal:** Ahrefs **indica claramente que no recomienda comprar enlaces**.
 * Es fácil comprar enlaces basura que no ayuden al SEO, desperdiciando dinero.
 * Viola las directrices para webmasters de Google. Si se descubre, tu sitio web puede ser penalizado, provocando una caída significativa del ranking o incluso la eliminación del índice.

### 5. Mantén los enlaces existentes

Es una pena que se pierdan los enlaces que tanto te ha costado conseguir.

**Acción principal:** Comprueba si hay páginas de tu sitio web que ya no se abren (404 Not Found), pero que antes tenían enlaces externos que apuntaban a ellas.
**Herramientas:** Utiliza el [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) gratuito.
**Pasos:**
 1. Inicia sesión en Ahrefs Webmaster Tools y verifica tu sitio web.
 2. Accede a la herramienta Site Explorer (Análisis de sitios web).
 3. En el menú de la izquierda, selecciona "Páginas" -> "Mejor por enlaces" (ordenar por número de backlinks).
 4. Haz clic en el filtro "Código HTTP" y selecciona "404 no encontrado".
 5. Ver el listado de informes. Si encuentras una página 404 seguida de un número elevado de "Dominios de referencia" (dominios de referencia, que indican cuántos sitios web enlazan a esta página), significa que esta página no válida fue importante en su momento.
 6. Encuentra la URL de la nueva página de tu sitio web que sea más relevante para el contenido de esta página no válida (si no hay ninguna que coincida exactamente, también se puede utilizar la página de inicio).
 7. Configura la **redirección 301**, para redirigir permanentemente la URL de esta página 404 a la nueva URL que has encontrado. De este modo, el valor del enlace que apunta a la antigua URL puede transferirse a la nueva página. (La forma de configurar la redirección 301 depende del servidor y la plataforma de tu sitio web. Es posible que tengas que buscar un tutorial específico, como "Cómo configurar la redirección 301 en WordPress").
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *Descripción de la imagen: Utilizando el informe de Mejores por enlaces de Ahrefs Site Explorer con el filtro 404, encuentra páginas no válidas con enlaces externos (ejemplo del blog de Ahrefs)*

---

### Kit de herramientas de enlace externo

**Imprescindible (gratuito):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): Ve los enlaces que recibe tu propio sitio web, encuentra las páginas 404 enlazadas para arreglarlas y comprueba el estado técnico de tu sitio web.
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): Consulta rápidamente los 100 principales enlaces externos de cualquier sitio web (incluido el de tus competidores) para saber de dónde están obteniendo los enlaces.
 * [Google Alerts](https://www.google.com/alerts): Configura alertas relacionadas con el nombre de tu marca, el nombre de tu sitio web y los temas principales. Cuando aparezca nuevo contenido relacionado en Internet, recibirás una notificación por correo electrónico. Esto te ayuda a descubrir los casos en los que te han mencionado pero no han añadido un enlace (puedes solicitar que lo añadan) o a descubrir nuevas oportunidades de construcción de enlaces.



---


<h2>5. Otras optimizaciones</h2>

1.  **Verifica la indexación:** Ve a [Google Search Console](https://search.google.com/search-console/about) (gratis, GSC a partir de ahora), y usa la función "Inspección de URL" para comprobar si Google puede encontrar tus páginas importantes.
2.  **Corrige enlaces rotos:** Si has cambiado URLs o borrado páginas, usa [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (gratis, AWT a partir de ahora) para encontrar las páginas que dan error 404 pero que antes tenían enlaces externos. Redirígelas con un 301 a las nuevas páginas.
3.  **Adapta tu sitio a varios idiomas:** Si tu nicho es muy competitivo, intenta adaptar tu sitio a varios idiomas. Muchos sitios solo compiten en inglés, así que traducir tu contenido te puede traer más tráfico.
4.  **Crea un Sitemap:** Crea un archivo `sitemap.xml` que liste todas las páginas importantes de tu sitio web y envíalo a Google Search Console para ayudar a Google a descubrir tu contenido de forma más rápida y completa.
    *   **Ejemplo (estructura básica de sitemap.xml):**
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
5.  **Hreflang (etiquetas de idioma):** Si tu sitio web tiene contenido en varios idiomas o dirigido a diferentes regiones, usa las etiquetas `hreflang` para indicarle a Google qué versión de cada página corresponde a cada idioma/región. Esto evita problemas de contenido duplicado y asegura que se muestre la versión correcta a cada usuario.
    *   **Ejemplo (en el `<head>` del HTML):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Nota: `x-default` se usa para especificar la versión predeterminada o sin región/idioma específico)*
6.  **Robots.txt (protocolo de exclusión):** Pon un archivo `robots.txt` en el directorio raíz de tu sitio web para indicarle a los rastreadores de los motores de búsqueda qué páginas o directorios no quieres que visiten ni indexen (por ejemplo, páginas de administración, páginas de prueba, etc.).
    *   **Ejemplo (contenido de robots.txt):**
        ```
        User-agent: *          # Se aplica a todos los rastreadores
        Disallow: /admin/       # Prohíbe el acceso al directorio /admin/
        Disallow: /private.html # Prohíbe el acceso al archivo /private.html
        Allow: /public/        # Permite explícitamente el acceso al directorio /public/ (si un directorio superior está prohibido)

        User-agent: Googlebot   # Solo se aplica al rastreador de Google
        Disallow: /tmp/         # Prohíbe que Googlebot acceda al directorio /tmp/
        Sitemap: http://www.example.com/sitemap.xml # Indica la ubicación del Sitemap
        ```
7.  **Canonical (etiqueta canónica):** Si tienes varias páginas con contenido idéntico o muy similar (por ejemplo, URLs con parámetros), usa la etiqueta `canonical` para especificar cuál es la versión "oficial" y evitar que los motores de búsqueda las consideren contenido duplicado y dispersen la autoridad.
    *   **Ejemplo (en el `<head>` del HTML):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Nota: Incluso en la página `http://www.example.com/product-page?ref=banner`, debe apuntar a la URL canónica sin parámetros)*
8.  **Schema Markup (datos estructurados):** Agrega Schema Markup al código de tu página. Es una forma estandarizada de explicarle a Google qué significa el contenido de tu página (por ejemplo, si es una receta, un producto, una sección de preguntas frecuentes). Esto ayuda a Google a entender el contenido y puede mostrar información más rica en los resultados de búsqueda (como valoraciones, rangos de precios, etc.), mejorando el CTR.
    *   **Ejemplo (formato JSON-LD, dentro de una etiqueta `<script>`):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "¿Qué es el SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El SEO (Search Engine Optimization) se refiere al proceso de optimizar el contenido y los aspectos técnicos de un sitio web para mejorar su posicionamiento en los resultados de búsqueda orgánica de motores de búsqueda como Google."
            }
          },{
            "@type": "Question",
            "name": "¿Cuánto tiempo tarda el SEO en dar resultados?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El tiempo para ver resultados de SEO varía según factores como la base del sitio web, la competencia y los recursos invertidos. Generalmente, se necesitan semanas, meses o incluso más para observar efectos significativos."
            }
          }]
        }
        ```



---


<h2>6. Herramientas SEO</h2>

### Herramientas gratuitas
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator):** Para encontrar palabras clave.
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools):** Conjunto gratuito de herramientas de diagnóstico de sitios web, seguimiento de posicionamiento de palabras clave, búsqueda de oportunidades de enlaces internos, comprobación de enlaces rotos, etc.
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker):** Consulta rápidamente los 100 principales enlaces externos de un sitio web.
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** Herramienta de investigación de palabras clave dentro de Google Ads (requiere una cuenta de Google Ads).
* **[Sugerencias del cuadro de búsqueda de Google (Google Suggest)](https://www.google.com/):** Sugerencias que aparecen automáticamente al buscar en Google.
* **[Búsquedas relacionadas de Google](https://www.google.com/):** Términos de búsqueda relacionados en la parte inferior de la página de resultados de búsqueda de Google.
* **[Answer The Public](https://answerthepublic.com/):** Para encontrar preguntas y temas relacionados con una palabra clave (tiene un límite de uso diario).
* **[Google Trends](https://trends.google.com/):** Para ver el volumen de búsqueda y las tendencias de una palabra clave.
* **[ChatGPT (versión básica)](https://chat.openai.com/):** Para brainstorming, generar contenido, títulos, etc.
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** Para supervisar el rendimiento de un sitio web en la búsqueda de Google, la situación de indexación, los problemas técnicos, etc.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** Herramientas en línea para comprimir imágenes.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** Para probar la velocidad de carga de la página y la experiencia del usuario.
* **[Generador de marcado de esquema (como Schema.dev)](https://schema.dev/schema-generator/):** Herramienta para generar código de datos estructurados.
* **[Galería de búsqueda de Google (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** Consulta los tipos de esquema y los resúmenes de medios enriquecidos que admite Google.
* **[Prueba de compatibilidad con dispositivos móviles de Google](https://search.google.com/test/mobile-friendly):** Prueba la facilidad de uso de una página web en dispositivos móviles.
* **[Google Alerts](https://www.google.com/alerts):** Supervisa el nuevo contenido en línea que mencione palabras clave o marcas específicas.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** Frameworks front-end que ayudan a construir sitios web compatibles con SEO.
* **Directorios de la industria/Sitios de reseñas (parcialmente gratuitos):** Como [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/), puedes enviar información básica de tu negocio.

### Herramientas de pago
* **[Ahrefs (suite principal)](https://ahrefs.com/):** Plataforma de herramientas SEO con todas las funciones, que ofrece investigación de palabras clave más profunda, análisis de la competencia, análisis de enlaces externos, diagnóstico de sitios web, etc.
* **[Semrush](https://www.semrush.com/):** Otra plataforma de herramientas de SEO y marketing con todas las funciones, con funciones similares a Ahrefs.
* **[SimilarWeb](https://www.similarweb.com/):** Otra plataforma de herramientas de SEO y marketing con todas las funciones, con funciones similares a Ahrefs.
* **[Answer The Public (versión de pago)](https://answerthepublic.com/):** Sin límites de uso.
* **[ChatGPT (versión avanzada)](https://openai.com/chatgpt/):** Modelo de IA más potente.
* **Directorios de la industria/Sitios de reseñas (funciones avanzadas/publicidad):** Como [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/), pueden ofrecer promoción de pago o funciones de análisis avanzadas.



---

## Por último
Por último, me gustaría presentar una herramienta que he desarrollado, [SparkNow](https://sparknow.cc/). Te ayuda a poner en marcha tus proyectos de forma integral, con detección de SEO, enlaces externos, rendimiento, textos publicitarios, imágenes publicitarias. Te ayuda con todo, en grandes cantidades. Si te interesa, puedes probarla. Si no, puedes ignorarla directamente. Basta con dominar los métodos SEO anteriores.