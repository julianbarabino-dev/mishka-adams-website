/**
 * ==========================================================================
 * MISHKA ADAMS — OFFICIAL WEBSITE SCRIPT (i18n, Carousel & Interactions)
 * Design & Architecture: Metaflow | Julián Barabino
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. BILINGUAL DICTIONARY (ES / EN) — ZERO EMOJIS
// --------------------------------------------------------------------------
const i18nData = {
  es: {
    // Navigation
    navHome: "Inicio",
    navTeaching: "Clases & Talleres",
    navMusic: "Música & Discografía",
    navBio: "Trayectoria & Discografía",
    navPress: "Prensa",
    navContact: "Contacto",

    // Hero
    heroBadge: "Cantante, Multiinstrumentista & Vocal Coach",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Cantante, multiinstrumentista, compositora y pedagoga vocal radicada en Buenos Aires. Explorando el universo rítmico del jazz, la bossa nova y la música latinoamericana.",
    heroCtaTeaching: "Clases & Talleres",
    heroCtaMusic: "Trayectoria & Discografía",
    heroCtaTag: "Cantante, Multiinstrumentista & Vocal Coach",
    heroCtaTitle: "Explorá tu voz, el ritmo y el cuerpo",
    heroCtaBtn: "Sumate a los Talleres",

    // Teaching Section (Positioned 1st after Hero)
    teachingTag: "Pedagogía Vocal & Ritmo",
    teachingTitle: "Propuesta Educativa",
    teachingSubtitle: "20 años de experiencia pedagógica guiando a cantantes, músicos y grupos vocales en el descubrimiento del ritmo, la afinación y el cuerpo.",
    teachingQuote: "“Conectar con el groove y el tiempo mientras cantamos eleva la interpretación vocal y nos une orgánicamente con la música y los músicos con quienes compartimos.”",
    teachingQuoteAuthor: "— Mishka Adams",
    teachingTeaserTag: "Pedagogía Vocal, Ritmo & Ensambles",
    teachingTeaserTitle: "Propuesta Educativa",
    teachingTeaserText: "20 años de experiencia pedagógica guiando a cantantes, músicos y grupos vocales en el descubrimiento del ritmo, la afinación y el cuerpo. Talleres de Percussion for Singers, Ensambles Vocales (Rayuela y Agronomía Canta) y clases particulares individuales.",
    teachingTeaserBtn: "Explorar Clases & Talleres",

    // Bio & Discography Section
    bioHeroTitle: "Trayectoria & Raíces",
    bioTag: "Trayectoria, Raíces & Discografía",
    bioTitle: "Sobre Mishka Adams",
    bioTeaserTitle: "Sobre Mishka Adams",
    bioTeaserText: "Cantante, multiinstrumentista, arregladora vocal y pedagoga filipino-británica radicada en Buenos Aires. Con 9 álbumes editados y una destacada trayectoria internacional desde Londres hasta Sudamérica, lidera proyectos como solista, a dúo junto a Beto Caletti y ensambles como Canciones Migrantes y Mujererío.",
    bioTeaserBtn: "Conocer su Trayectoria & Discografía",
    bioLead: "Mishka Adams es una galardonada cantante, multiinstrumentista, arregladora vocal y directora de ensambles vocales filipino-británica, radicada actualmente en Buenos Aires, Argentina. Participa en diversos proyectos que se nutren de los ritmos y estilos de Latinoamérica, principalmente de Brasil, Argentina y Uruguay. A su vez, se presenta como solista y cantautora, con influencias ligadas a sus raíces en el jazz y el folk. Hasta la fecha ha grabado 9 discos, y tiene un nuevo álbum y un EP en camino.",
    bioP1_duo: "Entre sus proyectos colaborativos más recientes se destacan su dúo junto a su esposo Beto Caletti, reconocido cantante, guitarrista y compositor por su trayectoria en la música brasileña;",
    bioP1_collaborations: "Canciones Migrantes junto a Florencia Dávalos y Georgina Hassan, un trío vocal que reúne canciones sobre la inmigración de todo el mundo; Cantoras del Sur, un octeto vocal con percusión y acordeón; y Mujererío Voces y Cuerpo, un noneto a capela.",
    bioP2: "En 2004, antes de radicarse en Buenos Aires, firmó un contrato discográfico de cuatro álbumes con Candid Records y en 2006 se mudó a Londres para estudiar jazz. Vivió allí durante muchos años, consolidando una fuerte presencia en la escena del jazz y la música brasileña a través de su proyecto solista y diversas colaboraciones. En 2007 cofundó el London Vocal Project junto a su amigo y maestro Pete Churchill, además de desempeñarse como cantante y percusionista en el reconocido grupo de samba Rhythms of the City.",
    bioP3: "Se ha presentado en numerosos escenarios y giras internacionales, combinando su actividad artística con una profunda pasión por la docencia: cuenta con 20 años de experiencia pedagógica, dirige dos coros femeninos y dicta clases particulares de canto y percusión para cantantes.",
    bioCtaTeaching: "Explorar Propuesta Educativa",
    bioCtaContact: "Contactar & Booking",
    
    // Discography Showcase
    discoTag: "Lanzamientos & Discografía",
    discoTitle: "Música Destacada",
    duoTag: "Dúo Internacional",
    duoTitle: "Mishka Adams & Beto Caletti",
    duoMeta: "Trilogía de Álbumes • Bossa Nova & Ritmos del Sur",
    duoDesc: "Un diálogo acústico virtuoso junto al reconocido cantante y guitarrista Beto Caletti, recorriendo las ricas tradiciones rítmicas de Brasil, Argentina y Uruguay.",

    // Press & Home Quotes (Janis Joplin Bold Typographic Aesthetic)
    homeQuoteBioText: "LA VOZ DE MISHKA ADAMS ES HOY UN INSTRUMENTO CAUTIVADOR: LIVIANO, SUAVE Y SUTIL.",
    homeQuoteBioAuthor: "SEBASTIAN SCOTNEY · UK JAZZ NEWS",
    homeQuoteText: "UNE LA MÚSICA ARGENTINA Y BRASILEÑA CON LA IMPRONTA PERSONAL DE UNA CANTAUTORA Y UNA MUSICALIDAD SUBLIME.",
    homeQuoteAuthor: "ALISON BENTLEY · LONDON JAZZ NEWS",
    bioOpeningQuoteText: "REFRESCANTEMENTE SIN PRETENSIONES Y SENCILLAMENTE TALENTOSA.",
    bioOpeningQuoteAuthor: "TIME OUT LONDON",
    pressTag: "Crítica & Prensa Internacional",
    pressTitle: "Prensa",
    pressQuoteMain: "EL SUEÑO DE TODO COMPOSITOR: UNA COMPRENSIÓN PROFUNDA DEL TEXTO Y, SENCILLAMENTE, UNA DE LAS VOCES MÁS HERMOSAS QUE HE ESCUCHADO.",
    pressAuthorMain: "PETE CHURCHILL · ROYAL ACADEMY OF MUSIC, LONDRES",
    pressQuote2: "Refrescantemente sin pretensiones y sencillamente talentosa.",
    pressQuote3: "Une la música argentina y brasileña con la impronta personal de una cantautora y una musicalidad sublime.",
    pressQuote4: "La voz de Mishka Adams es hoy un instrumento cautivador: liviano, suave y sutil.",

    // Newsletter Section
    newsletterTitle: "Conectemos a través de la música",
    newsletterSubtitle: "Suscribite para recibir avisos de nuevos conciertos, aperturas de talleres de Percusión para Cantantes y lanzamientos exclusivos.",
    newsletterPlaceholder: "Tu correo electrónico...",
    newsletterBtn: "Suscribirme",
    newsletterSuccess: "¡Gracias por suscribirte! Te contactaremos pronto.",
    footerNewsletterTitle: "Newsletter",
    footerNewsletterDesc: "Novedades de conciertos, talleres y lanzamientos exclusivos.",

    // Contact Section
    contactTag: "Contacto & Booking",
    contactTitle: "Conversemos",
    contactSubtitle: "Escribinos para coordinar clases particulares, sumarte a los talleres y ensambles, o para contrataciones y conciertos.",
    contactDirectTitle: "Contacto Directo",
    contactDirectDesc: "Escribinos por WhatsApp para consultas rápidas sobre horarios y disponibilidad.",
    contactEmailTitle: "Email Directo",
    contactEmailDesc: "Para prensa, contrataciones internacionales o propuestas pedagógicas:",
    contactFormName: "Nombre completo",
    contactFormEmail: "Correo electrónico",
    contactFormSubject: "Motivo de consulta",
    contactSubject1: "Clases Particulares de Canto (1 a 1)",
    contactSubject2: "Taller Percusión para Cantantes",
    contactSubject3: "Ensambles Vocales (Rayuela / Agronomía Canta)",
    contactSubject4: "Contratación Artística & Conciertos",
    contactSubject5: "Prensa & General",
    contactFormMessage: "Tu mensaje...",
    contactFormBtn: "Enviar Mensaje",
    contactFormSuccess: "¡Mensaje enviado con éxito! Te responderemos a la brevedad.",

    // Footer
    footerBrandDesc: "Cantante, multiinstrumentista y pedagoga vocal. Buenos Aires, Argentina.",
    footerNavTitle: "Navegación",
    footerLegalTitle: "Enlaces",
    footerConnectTitle: "Plataformas",
    footerRights: "Todos los derechos reservados.",
    footerCredits: 'Diseñado por <a href="https://metaflow.com.ar" target="_blank" rel="noopener noreferrer">Metaflow</a> | <a href="https://julianbarabino.com.ar" target="_blank" rel="noopener noreferrer">Julián Barabino</a>'
  },

  en: {
    // Navigation
    navHome: "Home",
    navTeaching: "Teaching & Workshops",
    navMusic: "Music & Discography",
    navBio: "Journey & Discography",
    navPress: "Press",
    navContact: "Contact",

    // Hero
    heroBadge: "Singer, Multi-instrumentalist & Vocal Coach",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Singer, multi-instrumentalist, songwriter and vocal pedagogue based in Buenos Aires. Exploring the rhythmic universe of jazz, bossa nova and Latin American music.",
    heroCtaTeaching: "Workshops & Classes",
    heroCtaMusic: "Journey & Discography",
    heroCtaTag: "Singer, Multi-instrumentalist & Vocal Coach",
    heroCtaTitle: "Unlock your voice, rhythm & body",
    heroCtaBtn: "Join the Workshops",

    // Teaching Section
    teachingTag: "Vocal Pedagogy & Rhythm",
    teachingTitle: "Teaching & Workshops",
    teachingSubtitle: "20 years of pedagogical experience guiding singers, musicians and vocal ensembles in unlocking rhythm, groove, vocal technique and the body.",
    teachingQuote: "“Connecting to groove and time while we sing can elevate a vocal performance and unites us with the music and the musicians we are playing with.”",
    teachingQuoteAuthor: "— Mishka Adams",
    teachingTeaserTag: "Vocal Pedagogy, Rhythm & Ensembles",
    teachingTeaserTitle: "Teaching & Workshops",
    teachingTeaserText: "20 years of pedagogical experience guiding singers, musicians and vocal ensembles in unlocking rhythm, groove, vocal technique and the body. Workshops in Percussion for Singers, Vocal Ensembles and 1-on-1 private lessons.",
    teachingTeaserBtn: "Explore Teaching & Workshops",

    // Bio & Discography Section
    bioHeroTitle: "JOURNEY & ROOTS",
    bioTag: "Journey, Roots & Discography",
    bioTitle: "About Mishka Adams",
    bioTeaserTitle: "About Mishka Adams",
    bioTeaserText: "Filipino-British singer, multi-instrumentalist, vocal arranger and vocal pedagogue based in Buenos Aires. With 9 recorded albums and an acclaimed international journey from London to South America, she leads solo works, her duo with Beto Caletti, and vocal ensembles such as Canciones Migrantes and Mujererío.",
    bioTeaserBtn: "Explore Journey & Discography",
    bioLead: "Mishka Adams is an award-winning Filipino-British singer, multi-instrumentalist, vocal arranger and vocal ensemble director, currently based in Buenos Aires, Argentina. She participates in diverse projects rooted in the rhythms and styles of Latin America, mainly Brazil, Argentina and Uruguay. At the same time, she performs as a soloist and singer-songwriter, with influences tied to her roots in jazz and folk. To date, she has recorded 9 albums, with a new album and an EP currently in the works.",
    bioP1_duo: "Among her most recent collaborative projects, highlights include her duo with her husband Beto Caletti, a renowned singer, guitarist and composer celebrated for his extensive career in Brazilian music;",
    bioP1_collaborations: "Canciones Migrantes alongside Florencia Dávalos and Georgina Hassan, a vocal trio bringing together immigration songs from across the globe; Cantoras del Sur, a vocal octet with percussion and accordion; and Mujererío Voces y Cuerpo, an a cappella nonet.",
    bioP2: "In 2004, prior to settling in Buenos Aires, she signed a four-album recording contract with Candid Records and moved to London in 2006 to study jazz. She lived there for many years, building a strong presence in the jazz and Brazilian music scenes through her solo project and diverse collaborations. In 2007, she co-founded the London Vocal Project alongside her mentor and friend Pete Churchill, and performed as a singer and percussionist with the acclaimed samba ensemble Rhythms of the City.",
    bioP3: "She has performed on numerous international stages and tours, blending her artistic journey with a deep passion for education: she brings 20 years of pedagogical experience, directs two women's choirs, and offers private vocal lessons and signature Percussion for Singers workshops.",
    bioCtaTeaching: "Explore Workshops & Classes",
    bioCtaContact: "Contact & Booking",

    // Discography Showcase
    discoTag: "Releases & Discography",
    discoTitle: "Featured Music",
    duoTag: "International Duo",
    duoTitle: "Mishka Adams & Beto Caletti",
    duoMeta: "Album Trilogy • Bossa Nova & Southern Rhythms",
    duoDesc: "A virtuosic acoustic dialogue with renowned singer and guitarist Beto Caletti, celebrating the rich musical traditions of Brazil, Argentina and Uruguay.",

    // Press & Home Quotes (Janis Joplin Bold Typographic Aesthetic)
    homeQuoteBioText: "MISHKA ADAMS' VOICE RIGHT NOW IS AN APPEALING LIGHT, SOFT, GENTLE INSTRUMENT.",
    homeQuoteBioAuthor: "SEBASTIAN SCOTNEY · UK JAZZ NEWS",
    homeQuoteText: "BRINGING TOGETHER ARGENTINIAN AND BRAZILIAN MUSIC WITH A SINGER-SONGWRITER’S PERSONAL TOUCH AND SUPERB MUSICIANSHIP.",
    homeQuoteAuthor: "ALISON BENTLEY · LONDON JAZZ NEWS",
    bioOpeningQuoteText: "REFRESHINGLY UNPRETENTIOUS AND JUST PLAIN TALENTED.",
    bioOpeningQuoteAuthor: "TIME OUT LONDON",
    pressTag: "International Reviews & Press",
    pressTitle: "Press",
    pressQuoteMain: "SHE IS A SONGWRITER’S DREAM – A GREAT UNDERSTANDING OF TEXT, AND, QUITE SIMPLY, ONE OF THE MOST BEAUTIFUL VOICES I’VE EVER HEARD.",
    pressAuthorMain: "PETE CHURCHILL · ROYAL ACADEMY OF MUSIC, LONDON",
    pressQuote2: "Refreshingly unpretentious and just plain talented.",
    pressQuote3: "Bringing together Argentinian and Brazilian music with a singer-songwriter’s personal touch and superb musicianship.",
    pressQuote4: "Mishka Adams' voice right now is an appealing light, soft, gentle instrument.",

    // Newsletter Section
    newsletterTitle: "Stay Connected",
    newsletterSubtitle: "Subscribe for news on upcoming tour dates, new releases and new workshop openings.",
    newsletterPlaceholder: "Your email address...",
    newsletterBtn: "Subscribe",
    newsletterSuccess: "Thank you for subscribing! We will be in touch soon.",
    footerNewsletterTitle: "Newsletter",
    footerNewsletterDesc: "Updates on upcoming concerts, workshops and exclusive releases.",

    // Contact Section
    contactTag: "Contact & Booking",
    contactTitle: "Get in Touch",
    contactSubtitle: "Reach out to book 1:1 lessons, inquire about upcoming workshops and ensembles, or discuss concerts and bookings.",
    contactDirectTitle: "Direct Contact",
    contactDirectDesc: "Send a message via WhatsApp for quick questions regarding scheduling and availability.",
    contactEmailTitle: "Direct Email",
    contactEmailDesc: "For press, international bookings, or pedagogical inquiries:",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormSubject: "Inquiry Type",
    contactSubject1: "1:1 Voice Lessons (Private Coaching)",
    contactSubject2: "Percussion for Singers Workshop",
    contactSubject3: "Vocal Ensembles (Rayuela / Agronomía Canta)",
    contactSubject4: "Concert Booking & Artistic Projects",
    contactSubject5: "Press & General",
    contactFormMessage: "Your message...",
    contactFormBtn: "Send Message",
    contactFormSuccess: "Message sent successfully! We will get back to you shortly.",

    // Footer
    footerBrandDesc: "Singer, multi-instrumentalist and vocal pedagogue. Buenos Aires, Argentina.",
    footerNavTitle: "Navigation",
    footerLegalTitle: "Links",
    footerConnectTitle: "Platforms",
    footerRights: "All rights reserved.",
    footerCredits: 'Designed by <a href="https://metaflow.com.ar" target="_blank" rel="noopener noreferrer">Metaflow</a> | <a href="https://julianbarabino.com.ar" target="_blank" rel="noopener noreferrer">Julián Barabino</a>'
  }
};

// --------------------------------------------------------------------------
// 2. TEACHING & WORKSHOPS DATA (Ordered by language requirements)
// --------------------------------------------------------------------------
const teachingCardsES = [

  {
    id: "percussion",
    badge: "Taller Especializado",
    title: "Percussion for Singers",
    subtitle: "Talleres grupales & clases particulares",
    summary: "Conectar con el groove, la clave y el ritmo corporal como fundamento para cantar con soltura, tocar percusión y conectar orgánicamente con la música.",
    desc: "Mishka siempre ha sentido una profunda pasión y curiosidad por la percusión, convencida de que el ritmo es fundamental para cantar, toquemos o no un instrumento. Conectar con el groove y el tiempo mientras cantamos eleva la interpretación vocal y nos une con los músicos con quienes compartimos. Es parte de lo que convierte a una cantante en música integral. En sus presentaciones en vivo, Mishka casi siempre acompaña sus canciones con percusión menor y corporal.",
    featuresTitle: "En los talleres y clases exploramos:",
    features: [
      "Aprender y tocar una gran variedad de grooves, claves y estilos",
      "Coordinación e independencia corporal mientras cantás y tocás",
      "Comprender y sentir los distintos tipos de 'swing' y subdivisiones",
      "Aprovechar la percusión de mano (¡y objetos cotidianos!) para acompañar canciones",
      "Experimentar con temas de tu propio repertorio en grupo"
    ],
    ctaText: "Consultar Fechas & Cupos",
    ctaLink: "#contact",
    youtubeText: "Ver Tutoriales en YouTube",
    youtubeLink: "https://www.youtube.com/@PercussionforSingers",
    image: "FOTOS WEBSITE/Percussion for Singers/DSC02010.JPG",
    theme: "terracotta"
  },
  {
    id: "ensembles",
    badge: "Presencial en Agronomía",
    title: "Ensambles Vocales",
    subtitle: "Rayuela & Agronomía Canta",
    summary: "Dos agrupaciones corales femeninas en Agronomía. Arreglos a medida creados por Mishka que transitan la bossa nova, folklore argentino y canciones del mundo.",
    desc: "Actualmente Mishka dirige dos ensambles vocales femeninos desde su espacio en Agronomía, Buenos Aires: Ensamble Rayuela (intermedio/avanzado) y Agronomía Canta (inicial/intermedio). Ambos grupos abordan un amplio abanico de estilos e idiomas con arreglos a medida. Se vive un fuerte sentido de comunidad donde los lazos humanos son tan enriquecedores como la música. Realizan conciertos regulares y encuentros con otras agrupaciones.",
    featuresTitle: "Características del espacio:",
    features: [
      "Arreglos vocales exclusivos hechos a medida para cada grupo",
      "Repertorio multicultural: Bossa nova, folklore argentino, candombe y música balcánica",
      "Desarrollo del empaste vocal, dinámica grupal y escucha armónica",
      "Conciertos periódicos y presentaciones conjuntas"
    ],
    ctaText: "Consultar por Integración",
    ctaLink: "#contact",
    image: "FOTOS WEBSITE/Percussion for Singers/DSC02056.JPG",
    theme: "sand"
  },
  {
    id: "voice-1to1",
    badge: "Presencial & Online",
    title: "Clases Particulares 1 a 1",
    subtitle: "Coaching y técnica personalizada",
    summary: "Acompañamiento individual a medida para descubrir tu voz, potenciar tu afinación y profundizar en técnica, ritmo y repertorio desde nivel inicial hasta profesional.",
    desc: "El camino de cada cantante es único: todos tenemos necesidades, metas y habilidades distintas. Mishka trabaja con vocalistas de todos los niveles: desde principiantes que buscan descubrir su voz o instrumentistas que desean cantar, hasta cantantes profesionales en busca de coaching técnico, interpretativo y asesoramiento artístico.",
    featuresTitle: "Ejes de trabajo personalizados:",
    features: [
      "Técnica vocal, salud y emisión fisiológica",
      "Trabajo corporal y alineación postural",
      "Ritmo, groove e independencia en la voz",
      "Elección, desarrollo y arreglo de repertorio",
      "Interpretación, presencia y expresión escénica"
    ],
    ctaText: "Reservar Clase Individual",
    ctaLink: "#contact",
    image: "FOTOS WEBSITE/Berlin/6 (1 of 1).jpg",
    theme: "warm-dark"
  }
];

const teachingCardsEN = [
  {
    id: "percussion",
    badge: "Signature Workshop",
    title: "Percussion for Singers",
    subtitle: "Group workshops & 1:1 lessons",
    summary: "Connecting to groove, pulse, and body percussion as the foundation for expressive singing, instrumental independence, and holistic musicianship.",
    desc: "Mishka has always been passionate and curious about percussion and feels that rhythm is essential to singing, whether we play a percussive instrument or not. Connecting to groove and time while we sing can elevate a vocal performance and unites us with the music and the musicians we are playing with. In her live shows she almost always plays percussion to accompany her songs.",
    featuresTitle: "What you'll explore in the workshops:",
    features: [
      "Learning and playing a variety of grooves and styles",
      "Moving in time while singing and playing",
      "Understanding and feeling different types of 'swing' and subdivisions",
      "Making the most of handheld percussion to accompany your songs",
      "Trying out songs from your own repertoire in the group"
    ],
    ctaText: "Inquire Dates / Book Class",
    ctaLink: "#contact",
    youtubeText: "Watch YouTube Tutorials",
    youtubeLink: "https://www.youtube.com/@PercussionforSingers",
    image: "FOTOS WEBSITE/Percussion for Singers/DSC02010.JPG",
    theme: "terracotta"
  },
  {
    id: "voice-1to1",
    badge: "In Person & Online Worldwide",
    title: "Voice Lessons 1:1",
    subtitle: "Private coaching & mentorship",
    summary: "Tailored one-on-one vocal technique and mentorship for all levels (beginner to professional), focusing on vocal freedom, rhythm, and artistic identity.",
    desc: "No two journeys are the same for any singer: we all have specific needs, goals and abilities. Mishka works with singers of all levels, from helping beginners find their voice, to instrumentalists who want to start singing, to professional vocalists looking for advanced technique and artistic coaching.",
    featuresTitle: "Personalized focus areas:",
    features: [
      "Vocal technique & vocal health",
      "Body work and physical alignment",
      "Rhythm and groove in the voice and body",
      "Repertoire exploration and styling",
      "Interpretation, storytelling and expression"
    ],
    ctaText: "Book a 1:1 Lesson",
    ctaLink: "#contact",
    image: "FOTOS WEBSITE/Berlin/6 (1 of 1).jpg",
    theme: "warm-dark"
  },
  {
    id: "ensembles",
    badge: "In-Person in Buenos Aires",
    title: "Vocal Ensembles",
    subtitle: "Rayuela & Agronomía Canta",
    summary: "Two female vocal ensembles in Agronomía, Buenos Aires, singing custom vocal arrangements in Brazilian music, Argentine folk, and world polyphony.",
    desc: "Mishka currently runs two female vocal ensembles from her home in Agronomía, Buenos Aires – Ensamble Rayuela and Agronomía Canta. Both ensembles sing a wide variety of styles with tailor-made arrangements by Mishka. There is a strong sense of community and regular concerts and joint performances.",
    featuresTitle: "Ensemble features:",
    features: [
      "Tailor-made vocal arrangements crafted by Mishka",
      "Rich repertoire: Brazilian, Argentine folk, candombe, Eastern European folk",
      "Vocal blending, group dynamics and ear training",
      "Regular concerts and community gatherings"
    ],
    ctaText: "Inquire for Ensembles",
    ctaLink: "#contact",
    image: "FOTOS WEBSITE/Percussion for Singers/DSC02056.JPG",
    theme: "sand"
  }
];


// Press Quotes Data (Curated International Press & Critical Acclaim)
const pressQuotes = {
  es: [
    {
      id: "pete-churchill",
      quote: "El sueño de todo compositor: una comprensión profunda del texto y, sencillamente, una de las voces más hermosas que he escuchado.",
      author: "Pete Churchill",
      role: "Profesor de Jazz en la Royal Academy of Music, Londres",
      publication: "Royal Academy of Music",
      featured: true
    },
    {
      id: "time-out",
      quote: "Refrescantemente sin pretensiones y sencillamente talentosa.",
      author: "Time Out London",
      role: "Crítica Cultural & Espectáculos · Reino Unido",
      publication: "Time Out London",
      featured: false
    },
    {
      id: "london-jazz-news",
      quote: "Une la música argentina y brasileña con la impronta personal de una cantautora y una musicalidad sublime.",
      author: "Alison Bentley",
      role: "Crítica Musical · London Jazz News",
      publication: "London Jazz News",
      featured: false
    },
    {
      id: "uk-jazz-news",
      quote: "La voz de Mishka Adams es hoy un instrumento cautivador: liviano, suave y sutil.",
      author: "Sebastian Scotney",
      role: "Editor & Periodista · UK Jazz News",
      publication: "UK Jazz News",
      featured: false
    }
  ],
  en: [
    {
      id: "pete-churchill",
      quote: "She is a songwriter’s dream – a great understanding of text, and, quite simply, one of the most beautiful voices I’ve ever heard.",
      author: "Pete Churchill",
      role: "Professor of Jazz, Royal Academy of Music, London",
      publication: "Royal Academy of Music",
      featured: true
    },
    {
      id: "time-out",
      quote: "Refreshingly unpretentious and just plain talented.",
      author: "Time Out London",
      role: "Cultural Review & Arts · United Kingdom",
      publication: "Time Out London",
      featured: false
    },
    {
      id: "london-jazz-news",
      quote: "Bringing together Argentinian and Brazilian music with a singer-songwriter’s personal touch and superb musicianship.",
      author: "Alison Bentley",
      role: "Music Critic · London Jazz News",
      publication: "London Jazz News",
      featured: false
    },
    {
      id: "uk-jazz-news",
      quote: "Mishka Adams' voice right now is an appealing light, soft, gentle instrument.",
      author: "Sebastian Scotney",
      role: "Editor & Journalist · UK Jazz News",
      publication: "UK Jazz News",
      featured: false
    }
  ]
};

// --------------------------------------------------------------------------
// 3. CORE STATE & CONTROLLER
// --------------------------------------------------------------------------
let currentLanguage = new URLSearchParams(window.location.search).get('lang') || localStorage.getItem('mishka_site_lang') || 'es';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initHeaderScroll();
  initMobileMenu();
  initNewsletterForm();
  initContactForm();
  initSmoothScroll();
  
  // Apply initial language
  setLanguage(currentLanguage);
});

// --------------------------------------------------------------------------
// 4. LANGUAGE SWITCHING & DYNAMIC RENDERING
// --------------------------------------------------------------------------
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLanguage) {
        setLanguage(selectedLang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('mishka_site_lang', lang);

  // 1. Update HTML lang attribute
  document.documentElement.lang = lang;

  // 2. Update toggle button active styles
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 3. Update all static text nodes with data-i18n
  const dict = i18nData[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 3b. Update all HTML-enabled text nodes with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 4. Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 5. Render dynamic Teaching & Workshops cards
  renderTeachingCards(lang);

  // 6. Render Press Editorial Matrix
  renderPressGrid(lang);
}

/**
 * Renders the 3 educational boxes dynamically with fully visible content filling the viewport
 */
function renderTeachingCards(lang) {
  const container = document.getElementById('teaching-cards-container');
  if (!container) return;

  const cards = (lang === 'en') ? teachingCardsEN : teachingCardsES;

  container.innerHTML = cards.map((card, index) => `
    <article class="edu-card theme-${card.theme}" id="course-${card.id}">
      
      <!-- Top Grid: Photo and Title/Category Alongside -->
      <div class="edu-card-grid">
        <div class="edu-card-media">
          <img src="${card.image}" alt="${card.title}" loading="lazy" class="edu-card-img" />
        </div>

        <div class="edu-card-content">
          <div class="edu-card-header">
            <span class="edu-card-badge">${card.badge}</span>
            <h3 class="edu-card-title">${card.title}</h3>
            <p class="edu-card-subtitle font-serif">${card.subtitle}</p>
          </div>
          <p class="edu-card-summary">${card.summary}</p>
        </div>
      </div>

      <!-- Integrated Full Ficha / Details (Always Visible) -->
      <div class="edu-card-details">
        <div class="edu-details-inner">
          <p class="edu-details-desc">${card.desc}</p>

          <div class="edu-features-block">
            <h4 class="edu-features-heading">${card.featuresTitle}</h4>
            <ul class="edu-features-list">
              ${card.features.map(f => `
                <li class="edu-feature-item">
                  <span class="feature-bullet">✦</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="edu-card-actions">
            <a href="${card.ctaLink}" class="btn btn-primary">
              <span>${card.ctaText}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            ${card.youtubeLink ? `
              <a href="${card.youtubeLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary youtube-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="color: #E63946;">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>${card.youtubeText}</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>

    </article>
  `).join('');

  // Initialize Slider Controller
  setTimeout(initEduSlider, 50);
}


/**
 * Slide Carousel Controller for Educational Cards
 */
function initEduSlider() {
  const track = document.getElementById('teaching-cards-container');
  const prevBtn = document.getElementById('edu-slide-prev');
  const nextBtn = document.getElementById('edu-slide-next');
  const dotsContainer = document.getElementById('edu-dots');

  if (!track) return;

  const cards = track.querySelectorAll('.edu-card');
  if (!cards.length) return;

  // Render Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from(cards).map((_, idx) => `
      <button class="edu-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Tarjeta ${idx + 1}"></button>
    `).join('');

    dotsContainer.querySelectorAll('.edu-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        const targetCard = cards[idx];
        if (targetCard) {
          track.scrollTo({
            left: targetCard.offsetLeft - track.offsetLeft,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Arrow Navigation
  if (prevBtn) {
    prevBtn.onclick = () => {
      const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 360;
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 360;
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };
  }

  // Update dots on scroll
  track.onscroll = () => {
    const scrollLeft = track.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const diff = Math.abs((card.offsetLeft - track.offsetLeft) - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.edu-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === closestIndex);
      });
    }
  };
}

/**
 * Toggle Expandable Educational Drawer
 */
window.toggleEduDetails = function(courseId) {
  const card = document.getElementById(`course-${courseId}`);
  const drawer = document.getElementById(`drawer-${courseId}`);
  const btn = document.getElementById(`btn-toggle-${courseId}`);

  if (!card || !drawer) return;

  const isExpanded = card.classList.contains('is-expanded');

  if (isExpanded) {
    card.classList.remove('is-expanded');
    drawer.style.maxHeight = '0px';
    drawer.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  } else {
    card.classList.add('is-expanded');
    drawer.style.maxHeight = drawer.scrollHeight + 60 + 'px';
    drawer.setAttribute('aria-hidden', 'false');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
};


// --------------------------------------------------------------------------
// 5. PRESS EDITORIAL MATRIX CONTROLLER
// --------------------------------------------------------------------------
function renderPressGrid(lang) {
  const container = document.getElementById('press-grid');
  if (!container) return;

  const quotes = pressQuotes[lang] || pressQuotes.es;

  container.innerHTML = quotes.map((item, idx) => {
    const isFeatured = item.featured ? 'press-card-featured' : '';
    return `
      <article class="press-card ${isFeatured}" id="press-item-${item.id}">
        <div class="press-card-header">
          <span class="press-badge">${item.publication}</span>
          <div class="press-quote-icon-wrap" aria-hidden="true">
            <svg class="press-quote-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>
        <blockquote class="press-quote-body">
          <p class="press-quote-text">“${item.quote}”</p>
        </blockquote>
        <footer class="press-card-footer">
          <div class="press-author-name">${item.author}</div>
          ${item.role ? `<div class="press-author-role">${item.role}</div>` : ''}
        </footer>
      </article>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 6. HEADER SCROLL & MOBILE MENU
// --------------------------------------------------------------------------
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const hero = document.getElementById('hero');
  if (!header) return;

  function updateHeaderVisibility() {
    // Only show navbar when user is within the Hero section
    const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
    const threshold = heroHeight * 0.4;

    // Do not hide if mobile menu drawer is currently open
    const isMenuOpen = document.querySelector('.nav-menu')?.classList.contains('open');
    if (isMenuOpen) {
      header.classList.remove('header-hidden');
      return;
    }

    if (window.scrollY > threshold) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
  }

  window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
  updateHeaderVisibility();
}


function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

// --------------------------------------------------------------------------
// 7. NEWSLETTER & CONTACT FORMS
// --------------------------------------------------------------------------
function initNewsletterForm() {
  const forms = document.querySelectorAll('.footer-newsletter-form, #newsletter-form');

  forms.forEach(form => {
    const feedback = form.querySelector('.newsletter-feedback') || document.getElementById('footer-newsletter-feedback') || document.getElementById('newsletter-feedback');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('.footer-input, .newsletter-input');
      if (!emailInput || !emailInput.value) return;

      const submitBtn = form.querySelector('.footer-submit-btn, .newsletter-submit');
      if (submitBtn) submitBtn.disabled = true;

      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        emailInput.value = '';
        if (feedback) {
          feedback.classList.add('success');
          feedback.textContent = i18nData[currentLanguage].newsletterSuccess;
          setTimeout(() => {
            feedback.classList.remove('success');
          }, 5000);
        }
      }, 600);
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = '...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      if (feedback) {
        feedback.classList.add('success');
        feedback.textContent = i18nData[currentLanguage].contactFormSuccess;
        setTimeout(() => {
          feedback.classList.remove('success');
        }, 6000);
      }
    }, 700);
  });
}

// --------------------------------------------------------------------------
// 8. SMOOTH SCROLLING
// --------------------------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
