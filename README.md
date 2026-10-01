# Mishka Adams — Sitio Web Oficial

Repositorio de código fuente, especificaciones técnicas y documentación de arquitectura del sitio web oficial de **Mishka Adams** (cantante, multiinstrumentista, compositora y docente vocal).

* **URL de Producción:** [https://mishkaadams.com](https://mishkaadams.com) | [https://www.mishkaadams.com](https://www.mishkaadams.com)
* **Dirección Técnica & Desarrollo:** Metaflow ([metaflow.com.ar](https://metaflow.com.ar)) — Julián Barabino
* **Despliegue e Infraestructura:** Netlify Edge Network (Continuous Deployment vía GitHub)
* **Gestión de Dominio y DNS:** DonWeb (Titularidad técnica vigente hasta el 24 de Septiembre de 2027)
* **Alojamiento y Soporte:** Metaflow (Vigencia arancelada hasta el 21 de Septiembre de 2027)

---

## 1. Arquitectura Técnica y Stack

* **Estructura:** HTML5 semántico nativo optimizado para SEO técnico, accesibilidad (estándar WCAG AA) y jerarquía estricta de encabezados.
* **Estilos (CSS):** Vanilla CSS modular (`styles.css`) con variables de diseño (Design Tokens), escala tipográfica proporcional, paleta editorial sobria (fondos oscuros, contrastes nítidos) y micro-interacciones sutiles. Sin frameworks pesados (cero dependencias de Bootstrap o Tailwind) para maximizar la velocidad de render y Core Web Vitals.
* **Lógica e Interactividad (JS):** JavaScript moderno nativo ES6+ (`main.js`) sin frameworks ni bundlers.
* **Política Visual Zero-Emoji:** Prohibición absoluta de emojis de sistema operativo en la interfaz de usuario. Se utiliza exclusivamente iconografía vectorial SVG minimalista y caracteres tipográficos neutros.

---

## 2. Mapa del Sitio y Estructura de Páginas

```
/
├── index.html            # Portada principal: Hero, Bio extracto, Discografía, Fechas en vivo, Newsletter, Footer
├── bio.html              # Biografía completa expandida y trayectoria artística
├── talleres.html         # Módulo pedagógico: Clases particulares, Ensamble vocal, Percusión para cantantes, Videos
├── contacto.html         # Formulario de contacto directo, booking de conciertos, newsletter y canales directos
├── privacidad.html       # Política de Privacidad (cumplimiento Ley 25.326 y verificación de Meta/Facebook)
├── terminos.html         # Términos y Condiciones de uso y contratación (cumplimiento Meta/Facebook)
├── sitemap.xml           # Mapa del sitio XML con alternate hreflang para SEO internacional
├── robots.txt            # Directivas de rastreo para motores de búsqueda y referencia al sitemap
├── site.webmanifest      # Manifiesto de Progressive Web App (PWA)
└── styles.css / main.js  # Hoja de estilos central y motor JavaScript
```

---

## 3. Infraestructura, Dominio y Correo Electrónico

### A. Dominio y DNS (DonWeb)
El dominio `mishkaadams.com` utiliza los servidores de nombres autoritativos de DonWeb (`ns1.donweb.com`, `ns2.donweb.com`). Los registros configurados en la zona DNS son:

* **A Record:** `@` -> `75.2.60.5` (Enrutamiento Netlify Anycast)
* **CNAME:** `www` -> `mishka-adams-website.netlify.app`
* **TXT (Google Search Console):** `google-site-verification=U1-6AjCSQoxNDXTjnWkJqYqLueZoeyzFEywOYpxkW7Y`
* **TXT (SPF para Correo):** `v=spf1 include:spf.improvmx.com ~all`
* **MX 1 (Prioridad 10):** `mx1.improvmx.com.`
* **MX 2 (Prioridad 20):** `mx2.improvmx.com.`

### B. Correo Institucional y Reenvío (ImprovMX)
* **Dirección Pública Oficial:** `contact@mishkaadams.com`
* **Destino Real del Reenvío:** `adams.mishka@gmail.com`
* **Cuenta Administradora en ImprovMX:** `cosmicvicarrecords@gmail.com`  
  *(Nota operativa: Se utilizó esta cuenta técnica de Metaflow para dar de alta el dominio `mishkaadams.com` en el plan gratuito de ImprovMX, evitando solicitar accesos o verificaciones a la clienta. Para gestionar o editar reglas de correo en el futuro, se debe ingresar a ImprovMX con este correo).*
* **Mecanismo:** El servicio de ImprovMX intercepta los correos dirigidos a `contact@mishkaadams.com` y los entrega en tiempo real en la bandeja de entrada de Gmail de Mishka sin costo de servidor de correo dedicado.

---

## 4. Integraciones y Servicios Externos

### A. Sistema Bilingüe (Español / Inglés)
* Motor de internacionalización cliente en `main.js`.
* Diccionario estructurado con persistencia en `localStorage.getItem('preferredLanguage')` y compatibilidad con parámetros de consulta (`?lang=en`).
* Traduce dinámicamente textos, atributos `placeholder`, `aria-label` y el contenido completo de las páginas legales.

### B. Formulario de Contacto y Booking (`contacto.html`)
* **Endpoint:** `https://formsubmit.co/ajax/adams.mishka@gmail.com`
* **Envío Asíncrono (AJAX):** Feedback inmediato en pantalla sin recarga ni redirección externa.
* **Enrutamiento Inteligente (`initContactSubjectFromUrl`):** Botones de fechas y talleres preseleccionan el motivo correspondiente (`booking`, `clases`, `taller-percusion`, etc.) y ejecutan scroll suave hacia el formulario.
* **Seguridad:** Campo señuelo silencioso (*honeypot*) contra bots de spam.

### C. Newsletter de Artista (Kit / ConvertKit)
* Integrado en el pie de página global y en la tarjeta de newsletter de `contacto.html`.
* **Form ID:** `9959843`.
* Procesamiento asíncrono con mensajes de confirmación de suscripción.

### D. Agenda de Conciertos y Venta de Entradas
* Módulo de fechas en vivo en `index.html`.
* Soporte para enlaces directos de compra de entradas (ej: Alternativa Teatral) con marcado semántico `schema.org/offers` y estados dinámicos ("Entradas" / "Próximamente").

### E. Cumplimiento Legal y Verificación de Meta
* **Privacidad (`privacidad.html`):** Adaptada a la Ley de Protección de Datos Personales (Ley 25.326, República Argentina) y exigencias de Meta Business Suite / Instagram Ads. Detalla derechos de acceso, rectificación y supresión.
* **Términos (`terminos.html`):** Regula el uso de la web, derechos de propiedad intelectual, contratación individualizada de servicios pedagógicos y exoneración de responsabilidad.

---

## 5. SEO Técnico, Rastreo y Metadatos

* **URLs Canónicas e Internacionalización:** Auto-referenciales en cada página para evitar canibalización o fragmentación por parámetros. Etiquetas `xhtml:link rel="alternate" hreflang` configuradas para `es`, `en` y `x-default`.
* **Jerarquía Semántica de Encabezados:** Estructura depurada con un único `<h1>` por página, encabezados `<h2>` temáticos y reducción de etiquetas redundantes en reproductores y pie de página para cumplir los estándares de Google Search Essentials.
* **Control de Enlaces Internos:** Parámetros de consulta internos (`contacto.html?subject=booking`) marcados con `rel="nofollow"` para preservar el presupuesto de rastreo (*crawl budget*).
* **Open Graph / Twitter Cards:** Imagen oficial de alta resolución `og-cover.jpg` (1200x630, 113 KB) y metadatos unificados por página. Favicons de retrato oficiales y manifest PWA (`site.webmanifest`).
* **Datos Estructurados (JSON-LD):** Esquemas Schema.org implementados para:
  * `MusicGroup` / `Person` (Mishka Adams).
  * `MusicAlbum` (lanzamientos discográficos y enlaces a Spotify/Bandcamp).
  * `MusicEvent` y `Offer` (conciertos y venta de entradas en Alternativa Teatral).
* **Google Search Console:** Propiedad del dominio verificada oficialmente mediante registro DNS TXT en DonWeb. `sitemap.xml` cargado para indexación continua.

---

## 6. Optimización Multimedia y Fotografías de Sesión

* **Incorporación de Nueva Sesión:** Se reemplazaron todas las imágenes temporales por el lote fotográfico profesional de alta resolución enviado por la artista en la portada principal, biografía, módulos pedagógicos y fondos inmersivos.
* **Conversión Universal a WebP:** Todas las fotografías de retratos, portadas de discos y talleres fueron convertidas y optimizadas al formato moderno WebP.
* **Rendimiento de Carga y Core Web Vitals:** Reducción drástica del peso de transferencia (de archivos JPEG/PNG pesados a assets livianos de entre 30 KB y 150 KB) para garantizar un Largest Contentful Paint (LCP) óptimo y navegación fluida instantánea en conexiones móviles.

