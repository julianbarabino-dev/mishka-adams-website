/**
 * ==========================================================================
 * MISHKA ADAMS — OFFICIAL WEBSITE SCRIPT (i18n, Carousel & Interactions)
 * Design & Architecture: Metaflow | Julián Baravino
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. BILINGUAL DICTIONARY (ES / EN) — ZERO EMOJIS
// --------------------------------------------------------------------------
const i18nData = {
  es: {
    // Navigation
    navTeaching: "Clases & Talleres",
    navMusic: "Música & Discografía",
    navBio: "Biografía",
    navPress: "Prensa",
    navContact: "Contacto",

    // Hero
    heroBadge: "Música & Docente Vocal",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Cantante, multiinstrumentista, compositora y pedagoga vocal radicada en Buenos Aires. Explorando el universo rítmico del jazz, la bossa nova y la música latinoamericana.",
    heroCtaTeaching: "Clases & Talleres",
    heroCtaMusic: "Escuchar Música",

    // Teaching Section (Positioned 1st after Hero)
    teachingTag: "Pedagogía Vocal & Ritmo",
    teachingTitle: "Propuesta Educativa",
    teachingSubtitle: "20 años de experiencia pedagógica guiando a cantantes, músicos y grupos vocales en el descubrimiento del ritmo, la afinación y el cuerpo.",
    teachingQuote: "“Conectar con el groove y el tiempo mientras cantamos eleva la interpretación vocal y nos une orgánicamente con la música y los músicos con quienes compartimos.”",
    teachingQuoteAuthor: "— Mishka Adams",

    // Music Section
    musicTag: "Archivo Discográfico",
    musicTitle: "Música & Proyectos",
    musicSubtitle: "9 álbumes grabados y una constante exploración entre canciones originales, jazz acústico, bossa nova y ensambles vocales.",
    
    // Music Cards
    soloTag: "Proyecto Solista",
    soloTitle: "Mishka Adams (Solista)",
    soloMeta: "Jazz, Folk & Canción de Autor • 9 Discos",
    soloDesc: "Composiciones originales y arreglos íntimos que reflejan sus raíces musicales en el jazz y el folk británico-filipino, con una fuerte presencia en la escena europea y latinoamericana.",

    duoTag: "Dúo Internacional",
    duoTitle: "Mishka Adams & Beto Caletti",
    duoMeta: "Trilogía de Álbumes • Bossa Nova & Ritmos del Sur",
    duoDesc: "Un diálogo acústico virtuoso junto al reconocido cantante y guitarrista Beto Caletti, recorriendo las ricas tradiciones rítmicas de Brasil, Argentina y Uruguay.",

    collabTag: "Colaboración Especial",
    collabTitle: "Stories to Tell",
    collabMeta: "Mishka Adams & Pete Churchill • Bandcamp",
    collabDesc: "Álbum aclamado por la crítica británica junto al maestro y profesor de la Royal Academy of Music, Pete Churchill.",

    // Bio Section
    bioTag: "Trayectoria & Raíces",
    bioTitle: "Sobre Mishka Adams",
    bioLead: "Mishka Adams es una galardonada cantante, multiinstrumentista, arregladora vocal y pedagoga filipino-británica radicada en Buenos Aires, Argentina.",
    bioP1: "Firmó contrato discográfico a temprana edad con Candid Records en 2004 y se formó en la escena del jazz londinense. En 2007 cofundó el prestigioso London Vocal Project junto a Pete Churchill y fue vocalista y percusionista del ensamble de samba Rhythms of the City.",
    bioP2: "Ha girado internacionalmente por los principales festivales de Europa, Asia y América, combinando su actividad en vivo con su profunda vocación docente, dictando cursos de Percusión para Cantantes y dirigiendo agrupaciones corales.",

    // Press Section (Carousel)
    pressTag: "Crítica & Prensa Internacional",
    pressTitle: "Prensa",

    // Newsletter Section
    newsletterTitle: "Conectemos a través de la música",
    newsletterSubtitle: "Suscribite para recibir avisos de nuevos conciertos, aperturas de talleres de Percusión para Cantantes y lanzamientos exclusivos.",
    newsletterPlaceholder: "Tu correo electrónico...",
    newsletterBtn: "Suscribirme",
    newsletterSuccess: "¡Gracias por suscribirte! Te contactaremos pronto.",

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
    contactSubject5: "Prensa & Otros",
    contactFormMessage: "Mensaje o consulta...",
    contactFormBtn: "Enviar Mensaje",
    contactFormSuccess: "¡Mensaje enviado con éxito! Te responderemos a la brevedad.",

    // Footer
    footerBrandDesc: "Cantante, multiinstrumentista y docente vocal. Buenos Aires, Argentina.",
    footerNavTitle: "Navegación",
    footerLegalTitle: "Enlaces",
    footerConnectTitle: "Plataformas",
    footerRights: "Todos los derechos reservados.",
    footerCredits: "Diseñado por Metaflow | Julián Baravino"
  },

  en: {
    // Navigation
    navTeaching: "Workshops & Classes",
    navMusic: "Music & Discography",
    navBio: "About",
    navPress: "Press",
    navContact: "Contact",

    // Hero
    heroBadge: "Musician & Vocal Coach",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Singer, multi-instrumentalist, songwriter and vocal pedagogue based in Buenos Aires. Exploring the rhythmic universe of jazz, bossa nova and Latin American music.",
    heroCtaTeaching: "Workshops & Classes",
    heroCtaMusic: "Listen to Music",

    // Teaching Section
    teachingTag: "Vocal Pedagogy & Rhythm",
    teachingTitle: "Teaching & Workshops",
    teachingSubtitle: "20 years of pedagogical experience guiding singers, musicians and vocal ensembles in unlocking rhythm, groove, vocal technique and the body.",
    teachingQuote: "“Connecting to groove and time while we sing can elevate a vocal performance and unites us with the music and the musicians we are playing with.”",
    teachingQuoteAuthor: "— Mishka Adams",

    // Music Section
    musicTag: "Discography Archive",
    musicTitle: "Music & Projects",
    musicSubtitle: "9 albums recorded to date and an ongoing exploration across original songwriting, acoustic jazz, bossa nova and vocal ensembles.",

    // Music Cards
    soloTag: "Solo Project",
    soloTitle: "Mishka Adams (Solo)",
    soloMeta: "Jazz, Folk & Original Songs • 9 Albums",
    soloDesc: "Original songwriting and intimate arrangements reflecting her Filipino-British roots in jazz and folk, with an established presence across the UK, Europe and South America.",

    duoTag: "International Duo",
    duoTitle: "Mishka Adams & Beto Caletti",
    duoMeta: "Album Trilogy • Bossa Nova & Southern Rhythms",
    duoDesc: "A virtuosic acoustic dialogue with renowned singer and guitarist Beto Caletti, celebrating the rich musical traditions of Brazil, Argentina and Uruguay.",

    collabTag: "Special Collaboration",
    collabTitle: "Stories to Tell",
    collabMeta: "Mishka Adams & Pete Churchill • Bandcamp",
    collabDesc: "Acclaimed studio album created alongside Royal Academy of Music Professor and long-time mentor Pete Churchill.",

    // Bio Section
    bioTag: "Roots & Journey",
    bioTitle: "About Mishka Adams",
    bioLead: "Mishka Adams is a Filipina/English award-winning singer, multi-instrumentalist, vocal arranger and ensemble leader based in Buenos Aires, Argentina.",
    bioP1: "She signed a four-album record deal with Candid Records in 2004 and honed her craft within London's vibrant jazz scene. In 2007, she co-founded the London Vocal Project with Pete Churchill and performed as vocalist/percussionist with the renowned samba ensemble Rhythms of the City.",
    bioP2: "She has toured extensively worldwide while dedicating herself to vocal pedagogy, leading her signature 'Percussion for Singers' workshops and directing female vocal ensembles.",

    // Press Section (Carousel)
    pressTag: "International Reviews & Press",
    pressTitle: "Press",

    // Newsletter Section
    newsletterTitle: "Stay Connected",
    newsletterSubtitle: "Subscribe for news on upcoming tour dates, new releases and new workshop openings.",
    newsletterPlaceholder: "Your email address...",
    newsletterBtn: "Subscribe",
    newsletterSuccess: "Thank you for subscribing! We will be in touch soon.",

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
    footerCredits: "Designed by Metaflow | Julián Baravino"
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


// Press Quotes Data for Carousel
const pressQuotes = {
  es: [
    {
      quote: "Refrescantemente sin pretensiones y sencillamente talentosa.",
      source: "Time Out London"
    },
    {
      quote: "El sueño de todo compositor: una comprensión profunda del texto y, sencillamente, una de las voces más hermosas que he escuchado.",
      source: "Pete Churchill (Profesor de Jazz en la Royal Academy of Music, Londres)"
    },
    {
      quote: "Une la música argentina y brasileña con la impronta personal de una cantautora y una musicalidad sublime.",
      source: "Alison Bentley, London Jazz News"
    },
    {
      quote: "La voz de Mishka Adams es hoy un instrumento cautivador: liviano, suave y sutil.",
      source: "Sebastian Scotney, UK Jazz News"
    }
  ],
  en: [
    {
      quote: "Refreshingly unpretentious and just plain talented.",
      source: "Time Out London"
    },
    {
      quote: "The composer’s dream: a deep understanding of lyrics and, quite simply, one of the most beautiful voices I have ever heard.",
      source: "Pete Churchill (Professor of Jazz, Royal Academy of Music, London)"
    },
    {
      quote: "Brings together Argentine and Brazilian music with the personal stamp of a singer-songwriter and exquisite musicianship.",
      source: "Alison Bentley, London Jazz News"
    },
    {
      quote: "Mishka Adams' voice is today a captivating instrument: light, smooth, and subtle.",
      source: "Sebastian Scotney, UK Jazz News"
    }
  ]
};

// --------------------------------------------------------------------------
// 3. CORE STATE & CONTROLLER
// --------------------------------------------------------------------------
let currentLanguage = localStorage.getItem('mishka_site_lang') || 'es';
let currentPressIndex = 0;
let pressAutoSlideTimer = null;

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

  // 4. Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 5. Render dynamic Teaching & Workshops cards
  renderTeachingCards(lang);

  // 6. Render and Initialize Press Carousel
  currentPressIndex = 0;
  renderPressCarousel(lang);
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
// 5. PRESS CAROUSEL (SLIDER) CONTROLLER
// --------------------------------------------------------------------------
function renderPressCarousel(lang) {
  const track = document.getElementById('press-track');
  const dotsContainer = document.getElementById('press-dots');
  if (!track || !dotsContainer) return;

  const quotes = pressQuotes[lang] || pressQuotes.es;

  // Render Slides
  track.innerHTML = quotes.map((q, idx) => `
    <div class="press-slide" data-slide-index="${idx}">
      <p class="press-slide-quote">“${q.quote}”</p>
      <div class="press-slide-source">${q.source}</div>
    </div>
  `).join('');

  // Render Dots
  dotsContainer.innerHTML = quotes.map((_, idx) => `
    <button class="press-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
  `).join('');

  // Add click events to dots
  dotsContainer.querySelectorAll('.press-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      goToPressSlide(idx, quotes.length);
    });
  });

  // Init Carousel Buttons
  const prevBtn = document.getElementById('press-prev');
  const nextBtn = document.getElementById('press-next');

  if (prevBtn && nextBtn) {
    prevBtn.onclick = () => {
      const newIndex = (currentPressIndex - 1 + quotes.length) % quotes.length;
      goToPressSlide(newIndex, quotes.length);
    };

    nextBtn.onclick = () => {
      const newIndex = (currentPressIndex + 1) % quotes.length;
      goToPressSlide(newIndex, quotes.length);
    };
  }

  goToPressSlide(0, quotes.length);
  startAutoSlide(quotes.length);
}

function goToPressSlide(index, total) {
  currentPressIndex = index;
  const track = document.getElementById('press-track');
  const dots = document.querySelectorAll('.press-dot');

  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function startAutoSlide(total) {
  if (pressAutoSlideTimer) clearInterval(pressAutoSlideTimer);
  pressAutoSlideTimer = setInterval(() => {
    const nextIdx = (currentPressIndex + 1) % total;
    goToPressSlide(nextIdx, total);
  }, 7000);
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
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('newsletter-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('.newsletter-input');
    if (!emailInput || !emailInput.value) return;

    const submitBtn = form.querySelector('.newsletter-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
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
