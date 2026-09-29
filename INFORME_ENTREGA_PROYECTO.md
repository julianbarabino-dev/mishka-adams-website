# Informe de Entrega Técnica y Estado del Proyecto
**Proyecto:** Sitio Web Oficial Mishka Adams  
**URL de Producción:** [https://mishkaadams.com](https://mishkaadams.com) | [https://www.mishkaadams.com](https://www.mishkaadams.com)  
**Desarrollo & Dirección Técnica:** Metaflow ([metaflow.com.ar](https://metaflow.com.ar)) — Julián Barabino  
**Fecha de Entrega Inicial:** 25 de Septiembre de 2026  
**Período de Garantía de Puesta a Punto:** Hasta el **21 de Octubre de 2026**  
**Alojamiento e Infraestructura Metaflow:** Vigente / Arancelado hasta el **21 de Septiembre de 2027**  
**Vencimiento del Dominio mishkaadams.com:** **24 de Septiembre de 2027**

---

## 1. Resumen Ejecutivo
El sitio web oficial de Mishka Adams fue diseñado, maquetado y programado bajo un estándar editorial boutique de alto impacto visual y estricto rigor tipográfico, adaptado a su identidad como cantante, multiinstrumentista, compositora y docente vocal. 

La plataforma combina un archivo sonoro vivo, una galería de medios interactiva, un catálogo de formación pedagógica y un sistema integrado de reservas y contacto directo.

---

## 2. Arquitectura Técnica y Stack
- **Estructura:** HTML5 semántico nativo optimizado para accesibilidad (WCAG AA) y rastreo por motores de búsqueda.
- **Estilos:** Vanilla CSS modular con arquitectura de variables de diseño (Design Tokens), escala tipográfica armónica, modo de alto contraste editorial y micro-interacciones sutiles. Se evitó el uso de frameworks pesados para garantizar tiempos de carga instantáneos.
- **Lógica e Interactividad:** JavaScript moderno nativo (ES6+) sin dependencias externas pesadas.
- **Alojamiento y Despliegue:** Netlify Edge Network (CDN global distribuida con despliegue continuo desde repositorio Git).
- **Dominio y DNS:** Dominio `mishkaadams.com` registrado en DonWeb, vinculado mediante balanceador Anycast a Netlify con certificado SSL/TLS (HTTPS) automático provisto por Let's Encrypt.
- **Política Estética Zero-Emoji:** Prohibición absoluta de emojis de sistema operativo en la interfaz, sustituidos exclusivamente por iconografía vectorial SVG refinada.

---

## 3. Funcionalidades y Conexiones Implementadas

### A. Sistema Bilingüe Completo (ES / EN)
- Selector de idioma en tiempo real con persistencia en almacenamiento local (`localStorage`) y soporte para parámetros de URL (`?lang=en`).
- Diccionario centralizado de traducción en `main.js` que actualiza textos, etiquetas accesibles (`aria-label`), placeholders y atributos dinámicos en toda la aplicación sin recargar la página.

### B. Biografía Desplegable In-Place
- Módulo bio con zócalo de entrada y cajón de lectura profunda expandible *in situ* (`#bio-extended-drawer`), evitando saltos abruptos o redirecciones innecesarias.

### C. Discografía y Reproductores Multimedia
- Archivo discográfico cronológico con reproductores integrados de Spotify y enlaces directos a Bandcamp.
- Sistema de acordeón para consultar álbumes solistas, colaboraciones y proyectos paralelos con fichas técnicas y créditos.

### D. Módulo Pedagógico y Talleres Interactivos (`talleres.html`)
- Tarjetas modulares de cursos y talleres:
  - *Percusión para Cantantes*
  - *Clases Particulares de Canto (1 a 1)*
  - *Ensambles Vocales (Rayuela y Agronomía Canta)*
- Carrusel responsivo con controles de navegación y puntos de paginación.
- Showcase audiovisual de videos en vivo integrado vía YouTube Embed sin cookies de rastreo invasivas (`youtube-nocookie.com`).
- Enrutamiento contextual directo: cada botón de acción de los talleres redirige automáticamente a la página de contacto preseleccionando la temática requerida.

### E. Sistema de Fechas en Vivo (Gigs & Tour) y Booking
- Agenda minimalista de presentaciones y recitales en Buenos Aires y giras.
- Bloque destacado de contratación artística (*"¿Querés programar un concierto o festival?"*).
- Botones de estado ("Próximamente", "Entradas en breve" y "Consultar Booking") vinculados directamente con el formulario de contacto bajo el parámetro `?subject=booking`.

### F. Formulario de Contacto Directo & Booking Inteligente (`contacto.html`)
- **Conexión AJAX vía FormSubmit:** Los mensajes se envían de forma asíncrona sin abandonar la página ni redirigir a pantallas externas de agradecimiento.
- **Destino del formulario:** `adams.mishka@gmail.com`.
- **Preselección y Foco Automático (`initContactSubjectFromUrl`):** Si el visitante proviene de un botón de taller o de booking, el selector de motivo se completa automáticamente y la vista se desplaza con suavidad hacia el formulario.
- **Plantilla de notificación personalizada:** El correo entrante llega con un formato claro y estructurado:
  - Asunto: `Hey Mishka! New inquiry: [Motivo] — [Nombre]`
  - Encabezado: `Hey Mishka, someone is interested in [Motivo]!`
  - Ficha con datos del remitente, email y consulta.
  - Indicación de respuesta directa: al presionar "Responder" (Reply), el correo va directamente al remitente (`_replyto`).
- **Seguridad y Anti-Spam:** Campo trampa silencioso (*honeypot*) que neutraliza envíos automatizados de bots sin molestar al usuario con captchas complejos.

### G. Conexión de Newsletter a Kit (ConvertKit)
- Formulario de suscripción en el pie de página global y en la tarjeta dedicada de `contacto.html`.
- Conectado a la API pública de suscripciones de Kit con el Form ID `9959843`.
- Manejo asíncrono con mensajes de estado y feedback visual acorde al diseño.

---

## 4. Tareas Pendientes para la Próxima Fase

1. **Auditoría y Optimización SEO On-Page:**
   - Redacción y refinamiento de metaetiquetas clave (`title`, `meta description`, etiquetas canonicals diferenciadas por idioma).
   - Implementación de marcado de datos estructurados Schema.org / JSON-LD para:
     - `MusicGroup` / `Person` (Mishka Adams).
     - `MusicAlbum` (lanzamientos discográficos).
     - `EducationEvent` / `Course` (talleres de percusión y clases vocales).
     - `MusicEvent` (conciertos y recitales).
   - Generación de `sitemap.xml` y archivo `robots.txt`.

2. **Alta y Vinculación en Google Search Console (GSC):**
   - Verificación de propiedad del dominio `mishkaadams.com`.
   - Envío del mapa del sitio (`sitemap.xml`) para indexación oficial en los resultados de búsqueda de Google.

3. **Actualización de Fotografías en Alta Resolución:**
   - Sustitución de imágenes de archivo temporal por las fotografías finales de la nueva sesión profesional en cuanto sean entregadas.
   - Optimización de peso, compresión WebP y ajuste de puntos de encuadre (*focal points*).

4. **Activación Inicial de FormSubmit (Acción requerida por Mishka):**
   - En el primer envío real de prueba al correo `adams.mishka@gmail.com`, Mishka recibirá un correo único con el asunto *"Activate Form"*.
   - Deberá presionar el botón de activación una sola vez para dejar la casilla 100% habilitada para envíos futuros.

5. **Analítica Web (Opcional):**
   - Configuración de Google Analytics 4 (GA4) o solución liviana y respetuosa de la privacidad si se desea registrar métricas de tráfico y conversión.

---

## 5. Garantía de Puesta a Punto Inicial (Hasta el 21 de Octubre de 2026)
El proyecto cuenta con un período de prueba y garantía técnica de funcionamiento **sin costo adicional hasta el 21 de Octubre de 2026**.

### Alcance de la Garantía Inicial:
- **Corrección de Bugs y Ajustes Técnicos:** Resolución de cualquier falla en el funcionamiento de formularios, enlaces, reproductores o interactividad del sitio.
- **Ajustes de Compatibilidad:** Verificación y corrección de visualización en diferentes dispositivos, navegadores móviles y resoluciones de pantalla.
- **Asistencia en el Período de Prueba:** Acompañamiento en la recepción de los primeros mensajes del formulario de contacto y suscripciones de newsletter.
- **Implementación de las Tareas Pendientes:** Acompañamiento en la subida a Google Search Console, reemplazo de las fotos nuevas de la sesión profesional y afinación final de SEO.

---

## 6. Alojamiento, Dominio y Soporte de Infraestructura (Período 2026–2027)

### Fechas de Cobertura y Vencimientos:
- **Alojamiento en Servidores de Metaflow:** El servicio de hosting, infraestructura y despliegue continuo en los servidores de Metaflow se encuentra pago y arancelado por la clienta con vigencia hasta el **21 de Septiembre de 2027**.
- **Registro del Dominio (`mishkaadams.com`):** El registro y titularidad técnica del dominio se encuentra activo con fecha de vencimiento el **24 de Septiembre de 2027**.

### Alcance del Soporte de Servidor Incluido:
Durante la vigencia de este período anual (hasta el 21 de Septiembre de 2027), el arancel cubre exclusivamente el soporte técnico de infraestructura:
- **Disponibilidad y Uptime:** Monitoreo y mantenimiento de la conectividad y funcionamiento ininterrumpido del servidor.
- **Gestión de Dominio y DNS:** Administración de registros DNS, renovación de certificados de seguridad SSL/TLS (HTTPS) y resolución de eventuales caídas o problemas de red.

### Exclusiones Explícitas (Cambios de Contenido y Diseño):
- El abono anual de infraestructura **no incluye** modificaciones de textos, agregado de nuevas páginas, rediseño estético, carga de nuevos cursos/talleres o desarrollo de nuevas funcionalidades posteriores al período de garantía inicial (21 de Octubre de 2026).
- Cualquier actualización estética, agregado de módulos o edición de contenidos posterior a la garantía inicial se cotizará de forma independiente o mediante un abono de mantenimiento web acordado por separado.

---

*Documento generado por Metaflow para Mishka Adams — 25 de Septiembre de 2026.*
