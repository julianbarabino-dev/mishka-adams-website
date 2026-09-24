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
    navBio: "Bio",
    navDisco: "Discografía",
    navTeaching: "Clases y Talleres",
    navVideos: "Videos",
    navShows: "Recitales",
    navContact: "Contacto",

    // Hero
    // Hero
    heroBadge: "Cantante – multiinstrumentista – coach vocal – percusión para cantantes",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Cantante, multiinstrumentista, compositora y coach vocal radicada en Buenos Aires. Explorando el universo rítmico del jazz, la bossa nova y la música latinoamericana.",
    heroCtaTeaching: "Talleres & Clases",
    heroCtaMusic: "Bio & Discografía",
    heroCtaTag: "Cantante – multiinstrumentista – coach vocal – percusión para cantantes",
    heroCtaTitle: "Explorá tu voz, el ritmo y el cuerpo",
    heroCtaBtn: "Clases 1:1 / Talleres de Percusión para Cantantes",

    // Quotes
    preBioQuoteText: "REFRESCANTEMENTE SIN PRETENSIONES Y SIMPLEMENTE TALENTOSA",
    preBioQuoteAuthor: "TIME OUT LONDON",
    homeQuoteText: "EL SUEÑO DE TODO COMPOSITOR: UNA COMPRENSIÓN PROFUNDA DEL TEXTO Y, SENCILLAMENTE, UNA DE LAS VOCES MÁS HERMOSAS QUE HE ESCUCHADO",
    homeQuoteAuthor: "PETE CHURCHILL · PROFESOR DE JAZZ EN LA ROYAL ACADEMY OF MUSIC, LONDRES",

    // Bio Stripe Section (Landing)
    bioStripeLead: "Mishka Adams es cantante, multi-instrumentista, arregladora vocal y directora de ensambles vocales. Filipina-británica, radicada actualmente en Buenos Aires, participa en diversos proyectos que se nutren de los ritmos y estilos de Latinoamérica. Se presenta también como solista y cantautora, con influencias ligadas a sus raíces en el jazz y el folk. Hasta hoy ha grabado 9 discos, ganó el “Awit Awards” en Filipinas y tiene un nuevo álbum y un EP en camino.",
    bioStripePlaceholder: "",
    bioStripeBtn: "Conocer más",
    bioStripeBtnCollapse: "Leer menos",
    bioExtendedHtml: `
      <p>Nací en Filipinas, hija de una escultora filipina y de un empresario inglés (y poeta ocasional). Gracias al arte de mi madre crecí rodeada por la comunidad bohemia de Manila. En casa había reuniones que se extendían hasta altas horas de la noche y en las que siempre aparecía una guitarra; mi madre me enseñaba canciones de Joni Mitchell, James Taylor y Crosby, Stills &amp; Nash, que cantábamos a dúo; la primera canción que toqué en la guitarra fue The Circle Game de Joni Mitchell. Nos reuníamos en la casa de mi tío, llegaba un pianista, un tío cantaba Elvis, otro Frank Sinatra. Mi tío preferido tocaba la flauta traversa y cantaba temas de Jobim, esa fue mi primera conexión con la música brasileña. La música seguía hasta tarde y mi tío mayor tenía una lista de temas entrañables que siempre me pedía que cantara. Su preferido indiscutido era Cry Me a River de Arthur Hamilton, para ese entonces ya me interesaba el jazz.</p>

      <p>Entonces me fui a estudiar a Londres, y ahí toqué guitarra, piano, batería, y finalmente descubrí el saxo tenor, impulsada por mi amor al jazz nacido en aquellas cenas familiares. No sabía mucho de teoría pero podía leer música; toqué en una orquesta y con el tiempo empecé a cantar en un grupo de jazz. Cuando canté en público por primera vez tenía 14 años, me temblaban tanto las rodillas que tuve que cantar descalza.</p>

      <p>A los 18 decidí quedarme en Manila y a los 19 ya era cantante de jazz de tiempo completo. Tuve la fortuna de ser invitada a cantar en un concierto durante una gira del gran saxofonista británico Courtney Pine y entre el público se encontraba la esposa del presidente de Candid Records. Poco tiempo después firmé un contrato por cuatro álbumes en los que pude grabar mis canciones y hacer mis primeros arreglos.</p>

      <p>Cuatro años después sentí que ya no pertenecía allí y me mudé definitivamente a Londres para estudiar jazz y vivir como música profesional. Cursé una maestría en jazz en la Guildhall School of Music, donde conocí a profesores maravillosos, entre ellos a Pete Churchill, con quién cofundamos el “London Vocal Project”. Pete y yo grabamos juntos un álbum con sus hermosas canciones. Durante mis años en Londres participé en numerosos proyectos como cantante principal, integrante de coros y sesionista en voces y percusión.</p>

      <p>Profundicé mi amor por la música brasilera al sumarme al grupo de samba “Rhythms of the City”: entré como percusionista y con el tiempo me convertí en una de sus cantantes. Toqué con ellos durante cinco o seis años girando por todo el Reino Unido y parte de Europa. Viajé a Brasil, aprendí portugués y viví un breve tiempo en Berlín. En el medio recorrí el mundo, conociendo lugares increíbles y personas entrañables. Hacia el final de mi estadía en Londres Guillermo Rozenthuler, compañero de banda, amigo y maestro, me introdujo por primera vez a la música argentina y me hizo escuchar las canciones de Beto Caletti, a quién conocí, me enamoré y terminé acompañando a la Argentina. Y aquí estoy en Buenos Aires, donde nació nuestra hija Mayumi, sintiendo que finalmente encontré mi lugar en el mundo. Con Beto giramos por el mundo tocando y cantando como dúo. Este hermoso país y su gente me abrieron infinitas puertas y tengo la suerte de compartir música con artistas extraordinarios.</p>

      <div class="bio-projects-section" style="margin-top: 2.25rem; border-top: 1px solid var(--border-subtle); padding-top: 1.75rem;">
        <h4 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary); margin-bottom: 1.25rem;">Otros proyectos:</h4>
        <div class="bio-projects-list">
          <div class="bio-project-item">
            <span class="bio-project-title">Mishka Adams &amp; Beto Caletti</span>
            <span class="bio-project-desc">Dúo de voces, guitarra de siete cuerdas y percusión que tiene sus raíces en la tradición de los ritmos afro latinos de Sudamérica. Sus canciones emergen de esta mezcla de estilos y embarcan a quien los escucha en un viaje en cuatro lenguajes: español, portugués, inglés y tagalog (filipino).</span>
          </div>
          <div class="bio-project-item">
            <span class="bio-project-title">Canciones Migrantes</span>
            <span class="bio-project-desc">Trío junto a Florencia Dávalos y Georgina Hassan que reúne canciones de sus ancestros, canciones propias y otras de diferentes partes del mundo.</span>
          </div>
          <div class="bio-project-item">
            <span class="bio-project-title">Cantoras del Sur</span>
            <span class="bio-project-desc">Ensamble de siete cantantes y percusión - una reunión de intérpretes y compositoras de diversas procedencias y estilos, unidas por el deseo de compartir y recrear repertorios populares, propios y anónimos, transmitidos de generación en generación principalmente por mujeres.</span>
          </div>
          <div class="bio-project-item">
            <span class="bio-project-title">Mujererío Voces y Cuerpo</span>
            <span class="bio-project-desc">Es un espectáculo en el que la música y las voces, se entrelazan con poemas y textos en una puesta en escena sutil y poética. Voces a capella, nueve cantoras y una bailarina bajo la dirección y arreglos de Violeta Manoukian.</span>
          </div>
          <div class="bio-project-item">
            <span class="bio-project-title">Stories to Tell (with Pete Churchill)</span>
            <span class="bio-project-desc">Unidos por las canciones de Pete Churchill y la voz de Mishka, este grupo también incluye el extraordinario Mark Lockheart en saxo, la guitarra exquisita de Ben Barritt, y el fantástico percusionista Adriano Adewale.</span>
          </div>
        </div>
      </div>

      <p style="margin-top: 1.75rem;">Entre todo esto, tengo mi proyecto solista en que toco mis composiciones que nacen de mis raíces en el folk y el jazz. También dirijo dos ensambles de mujeres, doy clases de canto particulares y talleres de percusión para cantantes.</p>

      <p class="bio-closing-note" style="margin-top: 1rem; font-style: italic;">Ha sido una aventura maravillosa hasta ahora, y no podría estar más agradecida, sobre todo a mi maestro John – sin él sería otra persona.</p>
    `,

    // Bio Page (Full Bio)
    bioHeroTitle: "Trayectoria & Raíces",
    bioTag: "Trayectoria & Raíces",
    bioTitle: "Biografía Oficial",
    bioLead: "Mishka Adams es cantante, multi-instrumentista, arregladora vocal y directora de ensambles vocales. Filipina-británica, radicada actualmente en Buenos Aires, participa en diversos proyectos que se nutren de los ritmos y estilos de Latinoamérica. Se presenta también como solista y cantautora, con influencias ligadas a sus raíces en el jazz y el folk. Hasta hoy ha grabado 9 discos, ganó el “Awit Awards” en Filipinas y tiene un nuevo álbum y un EP en camino.",
    bioP1_duo: "Entre sus proyectos colaborativos más recientes se destacan su dúo junto a su pareja Beto Caletti, reconocido cantante, guitarrista y compositor por su trayectoria en la música brasileña;",
    bioP1_collaborations: "Canciones Migrantes junto a Florencia Dávalos y Georgina Hassan; Cantoras del Sur; Mujererío Voces y Cuerpo; y Stories to Tell junto a Pete Churchill.",
    bioP2: "En 2004, antes de radicarse en Buenos Aires, firmó un contrato discográfico de cuatro álbumes con Candid Records y en 2006 se mudó a Londres para estudiar jazz. Vivió allí durante muchos años, consolidando una fuerte presencia en la escena del jazz y la música brasileña a través de su proyecto solista y diversas colaboraciones. En 2007 cofundó el London Vocal Project junto a su amigo y maestro Pete Churchill, además de desempeñarse como cantante y percusionista en el reconocido grupo de samba Rhythms of the City.",
    bioP3: "Se ha presentado en numerosos escenarios y giras internacionales, combinando su actividad artística con una profunda pasión por la docencia: cuenta con 20 años de experiencia pedagógica, dirige dos coros femeninos y dicta clases particulares de canto y percusión para cantantes.",
    bioCtaTeaching: "Explorar Propuesta Educativa",
    bioCtaContact: "Contactar & Booking",

    // Discography Showcase (3 Central Players & Expandable Catalog)
    discoTag: "Lanzamientos & Discografía",
    discoTitle: "Discografía",
    discoSubtitle: "",
    discoPlayer1Badge: "Dúo · Adams & Caletti (2020)",
    discoPlayer1Title: "Adams & Caletti",
    discoPlayer1Desc: "Nuestro segundo álbum grabado a dúo con mi pareja Beto Caletti. Escribimos estas canciones mientras estábamos de gira por Asia y Europa en 2019, y lo terminamos y lanzamos en 2020 tras la llegada de la pandemia. Cuenta con la participación de artistas de todo el mundo.",
    discoPlayer2Badge: "Dúo con Pete Churchill (2015)",
    discoPlayer2Title: "Stories to Tell",
    discoPlayer2Desc: "Un álbum con canciones de mi querido amigo Pete Churchill. Trabajamos juntos durante muchos años en el London Vocal Project y fue uno de mis profesores en mi maestría. Grabado en Londres en 2015 junto a una banda maravillosa.",
    discoPlayer3Badge: "Solista · Candid Records (2012)",
    discoPlayer3Title: "Stranger on the Shore",
    discoPlayer3Desc: "Mi cuarto y último álbum bajo el sello de jazz Candid Records, editado en 2012. Se sienten como canciones de una vida anterior. Grabado, mezclado y masterizado en Manila, Filipinas junto a músicos maravillosos.",

    // Catalog 8 Albums (ES)
    discoStyle1: "Música Brasileña & Raíz",
    discoLabel1: "Grabación en Vivo",
    discoDesc1: "Nuestro tercer álbum a dúo con Beto Caletti, grabado en vivo en nuestro primer concierto en público en 2021 tras el fin de la pandemia. Estaba embarazada de 4 meses de nuestra hija Mayumi.",

    discoStyle2: "Música Rioplatense, Bossa & Folk",
    discoLabel2: "Dúo de Estudio · Buenos Aires",
    discoDesc2: "Nuestro primer álbum a dúo con Beto Caletti, grabado, mezclado y masterizado en Buenos Aires en 2018. Nos habíamos conocido el año anterior y estábamos recién enamorados.",

    discoStyle3: "Contemporary Jazz & Folk",
    discoLabel3: "Candid Records · Londres",
    discoDesc3: "Mi segundo álbum con Candid Records. Grabado y arreglado en Londres en colaboración con el trompetista John Hoare y su maravilloso cuarteto en 2007, recién graduada de mi maestría en jazz.",

    discoStyle4: "Vocal Jazz & Bossa Nova",
    discoLabel4: "Candid Records · Debut",
    discoDesc4: "Mi primer álbum de la historia y el primero de cuatro con el sello discográfico Candid Records. Tenía 19 años y estaba feliz de grabar. Fue grabado, mezclado y masterizado en Manila, Filipinas con mi banda de aquel momento en 2005.",

    discoStyle5: "Vocal Jazz Standards",
    discoLabel5: "Candid Records · Manila",
    discoDesc5: "Mi tercer álbum bajo el sello Candid Records, una reedición de algunas canciones anteriores junto con cuatro nuevas grabaciones incluidas, registrado con mi banda en Filipinas en 2007.",

    discoStyle6: "Acoustic Folk & Songwriting",
    discoLabel6: "Independiente · Manila",
    discoDesc6: "Grabé este álbum en Manila en un momento muy difícil de mi vida. Es un proyecto totalmente independiente, autofinanciado, producido y publicado por mí, y fue la primera y única vez que lancé un disco con composiciones exclusivamente mías. Mi querido amigo Ben Barritt viajó a Filipinas para grabarlo conmigo.",

    discoStyle7: "Folk, Soul & Acoustic",
    discoLabel7: "Colaboración · Berlín",
    discoDesc7: "Coros y percusión para el álbum debut de mi querido amigo Ben Barritt.",

    discoStyle8: "Choral Jazz & Poetry",
    discoLabel8: "London Vocal Project · ECM / Edition",
    discoDesc8: "Fui cofundadora y canté en la cuerda de contraltos de este maravilloso coro durante 13 años, bajo la dirección y arreglos de Pete Churchill. Grabamos este álbum con la música del gran Kenny Wheeler.",

    discoListenLabel: "Escuchar en:",
    discoListenSpotify: "Spotify",
    discoListenBandcamp: "Bandcamp",

    // Teaching & Workshops Teaser (Landing)
    teachingTeaserTag: "1:1 lessons, percussion for singers & vocal ensembles",
    teachingTeaserTitle: "Clases & Talleres",
    teachingTeaserSubtitle: "",
    teachingPillar1Title: "Percusión para cantantes",
    teachingPillar1Desc: "Talleres y clases particulares en que vamos a trabajar “groove” y ritmo y aprender una gran variedad de estilos. Voy a compartir unos principios básicos y ayudarte a incorporar percusión en tu repertorio.",
    teachingPillar2Title: "Clases de canto particulares",
    teachingPillar2Desc: "En estas clases vamos a trabajar técnica vocal, ritmo, interpretación y expresión, y repertorio dentro de otras cosas, siempre guiados por tus necesidades e intereses.",
    teachingPillar3Title: "Ensambles vocales",
    teachingPillar3Desc: "Ensamble Rayuela y Agronomía Canta: dos ensambles vocales que se encuentran una vez por semana en Buenos Aires. El repertorio tiene una gran variedad de estilos e idiomas, con arreglos hechos a medida para cada grupo. También hacemos conciertos y encuentros con otros grupos.",
    teachingTeaserBtn: "Explorar Clases & Talleres",

    // Teaching Dedicated Page (talleres.html)
    teachingHeroTitle: "CLASES & TALLERES",
    teachingTitle: "CLASES & TALLERES (online y presencial)",
    teachingSubtitle: "Percusión para cantantes, clases de canto particulares, mentoría para cantantes y músicos, y ensambles vocales",
    teachingTag: "Pedagogía Vocal",

    // Videos Section (Home)
    videosTag: "Registro Audiovisual",
    videosTitle: "Videos",
    videosSubtitle: "Conciertos en vivo, proyecto solista y colaboraciones",
    video1Title: "De Repente",
    video1Sub: "Mishka Adams & Beto Caletti",
    video2Title: "Paalam",
    video2Sub: "Mishka Adams & Beto Caletti",
    video3Title: "Chegaste",
    video3Sub: "Mishka Adams & Beto Caletti (En Vivo)",
    video4Title: "Puso Mo",
    video4Sub: "En vivo en Berlín",
    video5Title: "We’ll Never Know",
    video5Sub: "En vivo con Pedro Carneiro Silva",
    video6Title: "River Song",
    video6Sub: "En vivo con Pedro Carneiro Silva",
    video7Title: "El Pajarillo",
    video7Sub: "En vivo con Cantoras del Sur",
    videosMoreBtn: "Canal Oficial de YouTube",
    videosTeachingBtn: "Canal Percussion for Singers",

    // Vocal Ensembles Videos (talleres.html)
    ensemblesVideoTag: "Ensambles Vocales en Acción",
    ensemblesVideoTitle: "Ensamble Rayuela en Vivo",
    ensemblesVideoSubtitle: "Registros audiovisuales y arreglos polifónicos dirigidos por Mishka Adams en Buenos Aires.",
    ensembleVideo1Title: "Colibrí",
    ensembleVideo1Sub: "Ensamble Rayuela · Dir. Mishka Adams",
    ensembleVideo2Title: "Maagwane",
    ensembleVideo2Sub: "Ensamble Rayuela · Dir. Mishka Adams",

    // Recitales & Gigs Section (Minimalist Live Dates)
    showsTag: "Conciertos & Fechas",
    showsTitle: "Recitales & Shows",
    showsSubtitle: "Presentaciones en vivo, fechas de ensambles y conciertos en Buenos Aires y giras internacionales.",
    show1Date: "OCT 2026",
    show1City: "Buenos Aires, Argentina",
    show1Venue: "Café Vinilo",
    show1Project: "Mishka Adams & Beto Caletti (Dúo)",
    show1Status: "Próximamente",
    show2Date: "NOV 2026",
    show2City: "Buenos Aires, Argentina",
    show2Venue: "Centro Cultural Kirchner (CCK)",
    show2Project: "Canciones Migrantes (Trío Vocal)",
    show2Status: "Próximamente",
    show3Date: "DIC 2026",
    show3City: "Agronomía, CABA",
    show3Venue: "Concierto de Cierre de Año",
    show3Project: "Ensamble Rayuela & Agronomía Canta",
    show3Status: "Entradas en breve",
    showBookingTitle: "¿Querés programar un concierto o festival?",
    showBookingDesc: "Escribinos directamente para disponibilidad de fechas, giras y proyectos artísticos.",
    showBookingBtn: "Consultar Booking",

    // Contact Teaser Section (Landing)
    contactTeaserTag: "Contacto & Booking",
    contactTeaserTitle: "Conversemos",
    contactTeaserDesc: "",
    contactTeaserBtn: "Ir a la Página de Contacto",
    contactDirectEmail: "Enviar un Correo",

    // Contact Dedicated Page (contacto.html)
    contactPageTag: "Contacto Directo & Booking",
    contactPageTitle: "Conversemos",
    contactPageSubtitle: "Escribinos para coordinar clases de canto particulares, consultar por talleres y ensambles vocales, o proponer proyectos artísticos y fechas de conciertos.",
    contactChannelsTitle: "Canales Directos",
    contactChannelsDesc: "Elegí el medio más cómodo para comunicarte:",
    contactEmailTitle: "Email",
    contactEmailDesc: "Para prensa, contrataciones internacionales o propuestas pedagógicas:",
    contactLocationTitle: "Ubicación & Modalidad",
    contactLocationDesc: "Buenos Aires, Argentina (presencial) y clases / talleres online para todo el mundo.",
    contactPhotoCaption: "Mishka Adams — Buenos Aires & Clases Online",
    contactFormTitle: "Envianos tu mensaje",
    contactFormName: "Nombre completo",
    contactFormEmail: "Correo electrónico",
    contactFormSubject: "Motivo de la consulta",
    contactSubject1: "Clases Particulares de Canto (1 a 1)",
    contactSubject2: "Taller Percusión para Cantantes",
    contactSubject3: "Ensambles Vocales (Rayuela / Agronomía Canta)",
    contactSubject4: "Contratación Artística & Conciertos",
    contactSubject5: "Prensa & General",
    contactFormMessage: "Tu mensaje",
    contactFormBtn: "Enviar Mensaje",
    contactFormSuccess: "¡Mensaje enviado con éxito! Te responderemos a la brevedad.",

    // Press Kit & Materials (Google Drive)
    pressKitTitle: "Material de Prensa",
    pressKitSubtitle: "¿Estás buscando material de prensa de Mishka?",
    pressKitDesc: "Podés descargar acá el kit oficial con fotos en alta resolución, biografía, dossier y rider técnico:",
    pressKitBtn: "Descargar Material de Prensa (Drive)",

    // Newsletter Section on Contact Page
    contactNewsletterTitle: "Newsletter",
    contactNewsletterSubtitle: "Novedades, conciertos y talleres",
    contactNewsletterDesc: "Dejá tu mail para enterarte antes que nadie de nuevas fechas en vivo, aperturas de talleres y ensambles vocales, y novedades discográficas.",
    contactNewsletterPlaceholder: "Ingresá tu correo electrónico",
    contactNewsletterBtn: "Suscribirme",

    // Press & Home Quotes
    homeQuoteBioText: "LA VOZ DE MISHKA ADAMS ES HOY UN INSTRUMENTO CAUTIVADOR: LIVIANO, SUAVE Y SUTIL.",
    homeQuoteBioAuthor: "SEBASTIAN SCOTNEY · UK JAZZ NEWS",
    homeQuoteText: "EL SUEÑO DE TODO COMPOSITOR: UNA COMPRENSIÓN PROFUNDA DEL TEXTO Y, SENCILLAMENTE, UNA DE LAS VOCES MÁS HERMOSAS QUE HE ESCUCHADO",
    homeQuoteAuthor: "PETE CHURCHILL · PROFESOR DE JAZZ EN LA ROYAL ACADEMY OF MUSIC, LONDRES",
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

    // Footer
    footerBrandDesc: "Cantante, multiinstrumentista y coach vocal. Buenos Aires, Argentina.",
    footerNavTitle: "Navegación",
    footerLegalTitle: "Enlaces",
    footerConnectTitle: "Plataformas",
    footerRights: "Todos los derechos reservados.",
    footerCredits: 'Diseñado por <a href="https://metaflow.com.ar" target="_blank" rel="noopener noreferrer">Metaflow</a> | <a href="https://julianbarabino.com.ar" target="_blank" rel="noopener noreferrer">Julián Barabino</a>'
  },

  en: {
    // Navigation
    navHome: "Home",
    navBio: "Bio",
    navDisco: "Discography",
    navTeaching: "Workshops and Classes",
    navVideos: "Videos",
    navShows: "Live Shows",
    navContact: "Contact",

    // Hero
    heroBadge: "Singer – multi instrumentalist – voice coach – percussion for singers",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Singer, multi-instrumentalist, songwriter and vocal coach based in Buenos Aires. Exploring the rhythmic universe of jazz, bossa nova and Latin American music.",
    heroCtaTeaching: "Workshops & Classes",
    heroCtaMusic: "Bio & Discography",
    heroCtaTag: "Singer – multi instrumentalist – voice coach – percussion for singers",
    heroCtaTitle: "Unlock your voice, rhythm & body",
    heroCtaBtn: "1:1 lessons / Percussion for Singers workshops",

    // Quotes
    preBioQuoteText: "REFRESHINGLY UNPRETENTIOUS AND JUST PLAIN TALENTED",
    preBioQuoteAuthor: "TIME OUT LONDON",
    homeQuoteText: "SHE IS A SONGWRITER’S DREAM – A GREAT UNDERSTANDING OF TEXT, AND, QUITE SIMPLY, ONE OF THE MOST BEAUTIFUL VOICES I’VE EVER HEARD",
    homeQuoteAuthor: "PETE CHURCHILL · PROFESSOR OF JAZZ AT THE ROYAL ACADEMY OF MUSIC, LONDON",

    // Bio Stripe Section (Landing)
    bioStripeLead: "Mishka Adams is a Filipino-British singer, multi-instrumentalist, vocal arranger and vocal ensemble director, currently based in Buenos Aires, Argentina. She participates in diverse projects rooted in the rhythms and styles of Latin America. She also performs as a soloist and singer-songwriter, with influences from her roots in jazz and folk. She was awarded “Best New Female Recording Artist” at the Awit Awards in Manila. To date, she has recorded 9 albums, with a new album and an EP currently in the works.",
    bioStripePlaceholder: "",
    bioStripeBtn: "Read more",
    bioStripeBtnCollapse: "Read less",
    bioExtendedHtml: `
      <p>I was born in the Philippines to a Filipina sculptor and an English businessman and occasional poet. Thanks to my mother’s art, I grew up surrounded by the bohemian community in Manila. In my family home there were many gatherings that lasted late into the night, and in the early hours of the morning a guitar always appeared. My mother taught me the songs she had sung with her late sister in the sixties - Joni Mitchell, James Taylor, Crosby Stills &amp; Nash – and she taught me the first song I ever played on the guitar, <em>The Circle Game</em> by Joni Mitchell. We would sing together in two-part harmony. At the family gatherings at my uncle’s house, a piano player would come and we would sing late into the night. One uncle sang Elvis, another Frank Sinatra, and my favourite uncle played alto flute and sang songs by Jobim – that was my first connection with Brazilian music. My oldest uncle, the head of the family had a list of beloved songs that he always wanted me to sing, and wouldn’t let me go home until I did so. His all-time favourite for me was <em>Cry me a River</em> by Arthur Hamilton.</p>

      <p>At this point I went to study in the UK where I tried loads of different instruments, guitar, piano, drums, and eventually discovered the tenor saxophone, due to my love of jazz that had been born in my uncle’s family dinners. I was not well versed in music theory but I could read music, I played in the orchestra and eventually started singing in the jazz band – when I sang in public for the first time at 14 my knees trembled so badly that I had to go barefoot.</p>

      <p>At 18 I was determined to stay in Manila and was a full-time jazz singer by the age of 19. I had the great fortune of being invited to sing in a concert when the great British saxophonist Courtney Pine came over on tour and the CEO of Candid Records wife was sitting in the audience. Shortly after I signed a four-album recording contract - I recorded jazz standards and original songs, and did my first arrangements.</p>

      <p>Four years later I felt I no longer belonged there and moved permanently to London to study a jazz masters at the Guildhall School of Music and live a musician’s life. There I met one of my wonderful professors and now close friend Pete Churchill. After I graduated we co-founded the London Vocal Project, a wonderful jazz/contemporary choir, and also recorded an album of his beautiful songs together, once my album deal with Candid Records came to an amicable close. During my time in London I played in lots of different amazing projects both as a lead singer, choir member and side woman on backing vocals and percussion.</p>

      <p>I deepened my love for Brazilian music on joining a great samba group called Rhythms of the City – I joined first as a percussionist and later on became one of the singers – I played with them for five or six years and we toured all over the UK and some of Europe. I travelled to Brazil, learned Portuguese, and lived in Berlin for a short time. I travelled all over the world in the middle of it all, to amazing places with wonderful people. Towards the end of my time living in London, my great friend, bandmate, and teacher Guillermo Rozenthuler, introduced me to Argentinian music for the first time, and played me the music of his longtime friend Beto Caletti. One thing led to another, Beto and I met, played music, and fell in love. And here I am in Buenos Aires, where my daughter was born, feeling like I finally found my place in the world. Beto and I toured all over the world as a musical duo. This wonderful country and its amazing people have opened so many doors and I am lucky enough to be able to play with some incredible musicians.</p>

      <p>Among my collaborations and musical projects:</p>

      <div class="bio-projects-list">
        <div class="bio-project-item">
          <span class="bio-project-title">Mishka Adams &amp; Beto Caletti</span>
          <span class="bio-project-desc">Seven string guitar, percussion and intricate vocal harmonies that take you on a journey through South America’s Afro-Latin rhythms. The songs emerge from this melting pot in four diverse languages – Spanish, Portuguese, English, and Tagalog (Filipino).</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Canciones Migrantes</span>
          <span class="bio-project-desc">Trio with Georgina Hassan and Florencia Dávalos, bringing together songs inspired by immigrant stories and diverse cultures. New EP in the works.</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Cantoras del Sur</span>
          <span class="bio-project-desc">Seven singers and a percussionist with a repertoire rooted in world music, Latin American styles and original compositions.</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Mujererío Voces y Cuerpo</span>
          <span class="bio-project-desc">A cappella nonet and dancer blending song and theatre – repertoire from Latin America under the direction and arrangements of Violeta Manoukian.</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Stories to Tell (with Pete Churchill)</span>
          <span class="bio-project-desc">Brought together by the songs of Pete Churchill and the voice of Mishka Adams, this group also includes the extraordinary Mark Lockheart, the exquisite guitar playing of Ben Barritt, and fantastic percussionist Adriano Adewale. The songs are songs of loss and longing, of love, of hope and searching. This is about story telling – come, listen and be part of the journey.</span>
        </div>
      </div>

      <p style="margin-top: 1.75rem;">In the middle of all this, I have a solo project of my own songs that bring back some of my roots in the folk music my mum taught me in my childhood and two vocal ensembles of students that I direct, as well as my one to one teaching and percussion for singers workshops.</p>

      <p class="bio-closing-note" style="margin-top: 1rem; font-style: italic;">It’s been a great adventure so far, and I couldn’t be more grateful, especially to my teacher John, without whom I would be a completely different person.</p>
    `,

    // Bio Page (Full Bio)
    bioHeroTitle: "JOURNEY & ROOTS",
    bioTag: "Journey & Roots",
    bioTitle: "Official Biography",
    bioLead: "Mishka Adams is a Filipino-British singer, multi-instrumentalist, vocal arranger and vocal ensemble director, currently based in Buenos Aires, Argentina. She participates in diverse projects rooted in the rhythms and styles of Latin America. She also performs as a soloist and singer-songwriter, with influences from her roots in jazz and folk. She was awarded “Best New Female Recording Artist” at the Awit Awards in Manila. To date, she has recorded 9 albums, with a new album and an EP currently in the works.",
    bioP1_duo: "Among her most recent collaborative projects, highlights include her duo with her partner Beto Caletti, a renowned singer, guitarist and composer celebrated for his extensive career in Brazilian music;",
    bioP1_collaborations: "Canciones Migrantes alongside Florencia Dávalos and Georgina Hassan; Cantoras del Sur; Mujererío Voces y Cuerpo; and Stories to Tell alongside Pete Churchill.",
    bioP2: "In 2004, prior to settling in Buenos Aires, she signed a four-album recording contract with Candid Records and moved to London in 2006 to study jazz. She lived there for many years, building a strong presence in the jazz and Brazilian music scenes through her solo project and diverse collaborations. In 2007, she co-founded the London Vocal Project alongside her mentor and friend Pete Churchill, and performed as a singer and percussionist with the acclaimed samba ensemble Rhythms of the City.",
    bioP3: "She has performed on numerous international stages and tours, blending her artistic journey with a deep passion for education: she brings 20 years of pedagogical experience, directs two women's choirs, and offers private vocal lessons and signature Percussion for Singers workshops.",
    bioCtaTeaching: "Explore Workshops & Classes",
    bioCtaContact: "Contact & Booking",

    // Discography Showcase (3 Central Players & Expandable Catalog)
    discoTag: "Releases & Discography",
    discoTitle: "Discography",
    discoSubtitle: "",
    discoPlayer1Badge: "Duo · Adams & Caletti (2020)",
    discoPlayer1Title: "Adams & Caletti",
    discoPlayer1Desc: "Our second album recorded in duo with my partner Beto Caletti. We wrote these songs while on tour in Asia and Europe in 2019 and finished and released it in 2020 after the pandemic hit. Featuring artists from all over the world.",
    discoPlayer2Badge: "Duo with Pete Churchill (2015)",
    discoPlayer2Title: "Stories to Tell",
    discoPlayer2Desc: "An album of my close friend Pete Churchill’s songs. We worked together for many years in the London Vocal Project and he was one of my teachers on my masters degree. Recorded in London in 2015 with a wonderful band.",
    discoPlayer3Badge: "Soloist · Candid Records (2012)",
    discoPlayer3Title: "Stranger on the Shore",
    discoPlayer3Desc: "My fourth and final album on jazz label Candid Records, released in 2012. They feel like songs from a previous life. Recorded, mixed and mastered in Manila, Philippines with wonderful musicians.",

    // Catalog 8 Albums (EN)
    discoStyle1: "Brazilian Roots & Live Folk",
    discoLabel1: "Live Recording",
    discoDesc1: "Our third album in duo with Beto Caletti, recorded live on our first concert in public in 2021 after the end of the pandemic. I was 4 months pregnant with our daughter Mayumi.",

    discoStyle2: "Rioplatense Song, Bossa & Folk",
    discoLabel2: "Studio Duo · Buenos Aires",
    discoDesc2: "Our first album in duo with Beto Caletti, recorded, mixed and mastered in Buenos Aires in 2018. We had met the year before and were newly in love.",

    discoStyle3: "Contemporary Jazz & Folk",
    discoLabel3: "Candid Records · London",
    discoDesc3: "My second album with Candid Records. Recorded and arranged in London in collaboration with trumpet player John Hoare and his wonderful quartet in 2007, right after graduating from my jazz masters degree.",

    discoStyle4: "Vocal Jazz & Bossa Nova",
    discoLabel4: "Candid Records · Debut",
    discoDesc4: "My first ever album and the first of four on my record deal with Candid Records. I was 19 years old and so delighted to be recording. This was recorded, mixed and mastered in Manila, Philippines with my band at the time in 2005.",

    discoStyle5: "Vocal Jazz Standards",
    discoLabel5: "Candid Records · Manila",
    discoDesc5: "My third album under the Candid Records label, a re-release of some old songs with four new recordings included, recorded with my band in the Philippines in 2007.",

    discoStyle6: "Acoustic Folk & Songwriting",
    discoLabel6: "Independent · Manila",
    discoDesc6: "I recorded this album in Manila at a very difficult time in my life. It is a totally independent project, self-funded, produced and released and was the first and only time I released a record with only my compositions on it. My dear friend Ben Barritt flew out to the Philippines to record it with me.",

    discoStyle7: "Folk, Soul & Acoustic",
    discoLabel7: "Collaboration · Berlin",
    discoDesc7: "Backing vocals and percussion for my dear friend Ben Barritt’s debut album.",

    discoStyle8: "Choral Jazz & Poetry",
    discoLabel8: "London Vocal Project · ECM / Edition",
    discoDesc8: "I was co-founder and sang as part of the alto section of this wonderful choir for 13 years, under the direction and arrangements by Pete Churchill. We recorded this album of the great Kenny Wheeler’s music.",

    discoListenLabel: "Listen on:",
    discoListenSpotify: "Spotify",
    discoListenBandcamp: "Bandcamp",

    // Teaching & Workshops Teaser (Landing)
    teachingTeaserTag: "1:1 lessons, percussion for singers & vocal ensembles",
    teachingTeaserTitle: "Workshops & Classes",
    teachingTeaserSubtitle: "",
    teachingPillar1Title: "Percussion for Singers",
    teachingPillar1Desc: "Group workshops and 1:1 sessions where we’ll work on groove and time and learn a variety of different rhythms. I’ll share some percussion basics and help you to incorporate percussion into your repertoire.",
    teachingPillar2Title: "1:1 Private Voice Lessons",
    teachingPillar2Desc: "Bespoke one to one lessons tailored to your specific needs and interests. We can work on vocal technique, rhythm and time, interpretation and repertoire, and everything in between.",
    teachingPillar3Title: "Vocal Ensembles",
    teachingPillar3Desc: "Ensamble Rayuela and Agronomía Canta: two vocal ensembles that meet weekly in Buenos Aires. The repertoire includes a wide variety of styles and languages, with arrangements written specifically for each group. We also do concerts and encounters with other vocal groups.",
    teachingTeaserBtn: "Explore Workshops & Classes",

    // Teaching Dedicated Page (talleres.html)
    teachingHeroTitle: "CLASSES & WORKSHOPS",
    teachingTitle: "CLASSES & WORKSHOPS (online and in person)",
    teachingSubtitle: "Percussion for singers workshops, bespoke 1:1 voice lessons and vocal mentorship for singers and musicians, vocal ensembles",
    teachingTag: "Vocal Pedagogy",

    // Videos Section (Home)
    videosTag: "Audiovisual Archive",
    videosTitle: "Videos",
    videosSubtitle: "Live concerts, solo project and collaborations",
    video1Title: "De Repente",
    video1Sub: "Mishka Adams & Beto Caletti",
    video2Title: "Paalam",
    video2Sub: "Mishka Adams & Beto Caletti",
    video3Title: "Chegaste",
    video3Sub: "Mishka Adams & Beto Caletti (Live)",
    video4Title: "Puso Mo",
    video4Sub: "Live in Berlin",
    video5Title: "We’ll Never Know",
    video5Sub: "Live with Pedro Carneiro Silva",
    video6Title: "River Song",
    video6Sub: "Live with Pedro Carneiro Silva",
    video7Title: "El Pajarillo",
    video7Sub: "Live with Cantoras del Sur",
    videosMoreBtn: "Official YouTube Channel",
    videosTeachingBtn: "Percussion for Singers Channel",

    // Vocal Ensembles Videos (talleres.html)
    ensemblesVideoTag: "Vocal Ensembles in Action",
    ensemblesVideoTitle: "Ensamble Rayuela Live",
    ensemblesVideoSubtitle: "",
    ensembleVideo1Title: "Colibrí",
    ensembleVideo1Sub: "Ensamble Rayuela · Dir. Mishka Adams",
    ensembleVideo2Title: "Maagwane",
    ensembleVideo2Sub: "Ensamble Rayuela · Dir. Mishka Adams",

    // Recitales & Gigs Section (Minimalist Live Dates)
    showsTag: "Concerts & Dates",
    showsTitle: "Live Shows & Gigs",
    showsSubtitle: "Upcoming live dates, ensemble performances and concerts in Buenos Aires and international tours.",
    show1Date: "OCT 2026",
    show1City: "Buenos Aires, Argentina",
    show1Venue: "Café Vinilo",
    show1Project: "Mishka Adams & Beto Caletti (Duo)",
    show1Status: "Coming Soon",
    show2Date: "NOV 2026",
    show2City: "Buenos Aires, Argentina",
    show2Venue: "Centro Cultural Kirchner (CCK)",
    show2Project: "Canciones Migrantes (Vocal Trio)",
    show2Status: "Coming Soon",
    show3Date: "DEC 2026",
    show3City: "Agronomía, Buenos Aires",
    show3Venue: "End-of-Year Concert",
    show3Project: "Ensamble Rayuela & Agronomía Canta",
    show3Status: "Tickets shortly",
    showBookingTitle: "Interested in booking a concert or festival?",
    showBookingDesc: "Contact us directly for dates availability, festival programming and collaborative projects.",
    showBookingBtn: "Inquire Booking",

    // Contact Teaser Section (Landing)
    contactTeaserTag: "Contact & Booking",
    contactTeaserTitle: "Get in Touch",
    contactTeaserDesc: "",
    contactTeaserBtn: "Go to Contact Page",
    contactDirectEmail: "Send an Email",

    // Contact Dedicated Page (contacto.html)
    contactPageTag: "Direct Contact & Booking",
    contactPageTitle: "Get in Touch",
    contactPageSubtitle: "Reach out to schedule 1:1 voice coaching, inquire about upcoming workshops and vocal ensembles, or discuss concerts and artistic bookings.",
    contactChannelsTitle: "Direct Channels",
    contactChannelsDesc: "Choose your preferred channel to get in touch:",
    contactEmailTitle: "Email",
    contactEmailDesc: "For press, international bookings or educational inquiries:",
    contactLocationTitle: "Location & Format",
    contactLocationDesc: "Buenos Aires, Argentina (in-person) and online lessons / workshops worldwide.",
    contactPhotoCaption: "Mishka Adams — Buenos Aires & Online Lessons",
    contactFormTitle: "Send a Message",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormSubject: "Inquiry Type",
    contactSubject1: "1:1 Voice Lessons (Private Coaching)",
    contactSubject2: "Percussion for Singers Workshop",
    contactSubject3: "Vocal Ensembles (Rayuela / Agronomía Canta)",
    contactSubject4: "Concert Booking & Artistic Projects",
    contactSubject5: "Press & General",
    contactFormMessage: "Your message",
    contactFormBtn: "Send Message",
    contactFormSuccess: "Message sent successfully! We will get back to you shortly.",

    // Press Kit & Materials (Google Drive)
    pressKitTitle: "Press & Media Kit",
    pressKitSubtitle: "Looking for Mishka's press materials?",
    pressKitDesc: "You can download here high-resolution photos, official biographies, fliers and technical rider:",
    pressKitBtn: "Download Press Kit (Google Drive)",

    // Newsletter Section on Contact Page
    contactNewsletterTitle: "Newsletter",
    contactNewsletterSubtitle: "News, concerts and workshops",
    contactNewsletterDesc: "Leave your email to stay updated on upcoming concerts, workshop openings, ensemble dates and exclusive releases.",
    contactNewsletterPlaceholder: "Enter your email address",
    contactNewsletterBtn: "Subscribe",

    // Press & Home Quotes
    homeQuoteBioText: "MISHKA ADAMS' VOICE RIGHT NOW IS AN APPEALING LIGHT, SOFT, GENTLE INSTRUMENT.",
    homeQuoteBioAuthor: "SEBASTIAN SCOTNEY · UK JAZZ NEWS",
    homeQuoteText: "SHE IS A SONGWRITER’S DREAM – A GREAT UNDERSTANDING OF TEXT, AND, QUITE SIMPLY, ONE OF THE MOST BEAUTIFUL VOICES I’VE EVER HEARD",
    homeQuoteAuthor: "PETE CHURCHILL · PROFESSOR OF JAZZ AT THE ROYAL ACADEMY OF MUSIC, LONDON",
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

    // Footer
    footerBrandDesc: "Singer, multi-instrumentalist and vocal coach. Buenos Aires, Argentina.",
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
    title: "Percusión para cantantes",
    subtitle: "Talleres grupales & sesiones 1 a 1",
    summary: "Aprendé conceptos básicos de percusión, diferentes ritmos y grooves, y cómo incorporar la percusión a tu repertorio.",
    desc: "Siempre tuve una profunda pasión y curiosidad por la percusión, y siento que el ritmo y el groove son esenciales para cantar, toquemos o no un instrumento; a menudo estos elementos de nuestra formación como cantantes quedan fuera de las clases. Nos unifican con la música y con los músicos con quienes compartimos: son parte de lo que convierte a un cantante en un músico. En mi proyecto solista y en los grupos en los que participo, toco mucha percusión mientras canto y lo disfruto enormemente. Me encanta compartir lo aprendido en el camino, ya sea enseñando estilos específicos dentro de su contexto cultural o brindando herramientas de percusión para acompañarse en el propio repertorio.",
    featuresTitle: "En los talleres y clases exploramos:",
    features: [
      "Aprender y tocar una gran variedad de grooves y estilos",
      "Mover con el pulso mientras cantás y tocás",
      "Comprender y sentir los distintos tipos de 'swing' y subdivisiones rítmicas",
      "Aprovechar la percusión de mano (¡y objetos cotidianos!) para acompañar tus canciones",
      "Experimentar con temas de tu propio repertorio dentro del grupo"
    ],
    ctaText: "Consultar Fechas & Cupos",
    ctaLink: "#contact",
    youtubeText: "Ver Tutoriales en YouTube",
    youtubeLink: "https://www.youtube.com/@PercussionforSingers",
    image: "FOTOS WEBSITE/Percussion for Singers/DSC02010.JPG",
    theme: "terracotta"
  },
  {
    id: "voice-1to1",
    badge: "Presencial & Online",
    title: "Clases Particulares de Canto",
    subtitle: "Clases 1:1 a medida y mentoría para todos los niveles (inicial a profesional)",
    summary: "En estas clases vamos a trabajar técnica vocal, ritmo, interpretación y expresión, y repertorio dentro de otras cosas, siempre guiados por tus necesidades e intereses.",
    desc: "En estas clases vamos a trabajar técnica vocal, ritmo, interpretación y expresión, y repertorio dentro de otras cosas, siempre guiados por tus necesidades e intereses. Trabajo con cantantes de todos los niveles: desde ayudar a principiantes a descubrir su propia voz, pasando por músicos que desean empezar a cantar, hasta cantantes profesionales en busca de mentoría y acompañamiento en su carrera. En las clases, trabajamos en cualquiera o en todas estas áreas según lo que necesites y estés buscando:",
    featuresTitle: "Ejes de trabajo personalizados:",
    features: [
      "Técnica vocal",
      "Trabajo corporal",
      "Ritmo y groove en la voz y el cuerpo",
      "Repertorio",
      "Interpretación y expresión",
      "Mentoría para grabaciones de álbumes y videos"
    ],
    ctaText: "Reservar Clase Individual",
    ctaLink: "#contact",
    image: "FOTOS WEBSITE/Berlin/6 (1 of 1).jpg",
    theme: "warm-dark"
  },
  {
    id: "ensembles",
    badge: "Presencial en Buenos Aires",
    title: "Ensambles Vocales",
    subtitle: "Ensamble Rayuela & Agronomía Canta",
    summary: "Dos ensambles vocales femeninos en Buenos Aires, cantando un repertorio variado con arreglos vocales a medida.",
    desc: "Otra de las cosas que me apasiona profundamente es dirigir grupos vocales y escribir arreglos para ellos. Actualmente dirijo dos ensambles vocales femeninos desde mi espacio en Buenos Aires: Ensamble Rayuela (intermedio/avanzado) y Agronomía Canta (inicial/intermedio). Ambos grupos abordan un amplio abanico de estilos y lenguas, con arreglos hechos a la medida para cada formación. El repertorio incluye música brasileña, folklore argentino, gospel, folk, candombe uruguayo, canciones tradicionales de Europa del Este y mucho más. Se vive un fuerte sentido de comunidad en cada ensamble y los lazos que se tejen entre las integrantes son tan importantes como la música que creamos juntas. Con frecuencia realizamos conciertos y encuentros compartidos con otros grupos para cantar y compartir escenario.",
    featuresTitle: "Características del espacio:",
    features: [
      "Arreglos vocales exclusivos hechos a la medida de cada ensamble",
      "Repertorio multicultural: música brasileña, folklore argentino, candombe, Europa del Este, gospel, canciones africanas",
      "Empaste vocal, dinámica grupal y entrenamiento auditivo",
      "Conciertos periódicos y encuentros comunitarios"
    ],
    ctaText: "Consultar por Integración",
    ctaLink: "#contact",
    youtubeText: "Ver Actuaciones en Vivo",
    youtubeLink: "#ensambles-videos",
    image: "FOTOS WEBSITE/Percussion for Singers/mishkaAdmas_ensamblesVocales.jpeg",
    theme: "sand"
  }
];

const teachingCardsEN = [
  {
    id: "percussion",
    badge: "Signature Workshop",
    title: "Percussion for Singers",
    subtitle: "Group workshops & 1:1 sessions",
    summary: "Learn basic percussion, different rhythms and grooves, and how to incorporate percussion into your repertoire.",
    desc: "I’ve always been passionate and curious about percussion and feel that rhythm and groove are essential to singing, whether we play a percussive instrument or not, and I feel that often these elements of our musicianship and training as singers are left out of classes. They unify us with the music and the musicians we are playing with; they are part of what makes a singer a musician. In my solo project and in the groups I am in, I play a lot of percussion while I sing and I really enjoy it. I love sharing what I’ve learned along the way with people, whether it be teaching specific styles within their cultural context, or teaching hand percussion basics so singers can learn to accompany themselves in their own repertoire.",
    featuresTitle: "What we’ll explore:",
    features: [
      "Learning and playing a variety of grooves and styles",
      "Moving in time while singing and playing",
      "Understanding and feeling different types of 'swing' and rhythmic subdivisions",
      "Making the most of handheld percussion (and household objects!) to accompany your songs",
      "Trying out songs from your own repertoire within the group"
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
    title: "Voice Lessons",
    subtitle: "Vocal technique, interpretation & expression, rhythm and much more",
    summary: "Bespoke one to one lessons tailored to your specific needs and interests. We can work on vocal technique, rhythm and time, interpretation and repertoire, and everything in between.",
    desc: "Bespoke one to one lessons tailored to your specific needs and interests. We can work on vocal technique, rhythm and time, interpretation and repertoire, and everything in between. I work with singers of all levels, from helping beginners find their voice, to musicians who want to start singing, or professional singers looking for coaching and accompaniment in their career. In the classes, what we’ll work on can include any or all of these things, depending on what you need and what you’re looking for:",
    featuresTitle: "Personalized focus areas:",
    features: [
      "Vocal technique",
      "Body work",
      "Rhythm and groove in the voice and body",
      "Repertoire",
      "Interpretation and Expression",
      "Mentorship for album and video recordings"
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
    subtitle: "Ensamble Rayuela & Agronomía Canta",
    summary: "Two female vocal ensembles in Buenos Aires, singing a varied repertoire with custom vocal arrangements.",
    desc: "Something else that I absolutely love doing is leading vocal groups and writing arrangements for them. I currently run two female vocal ensembles from my space in Buenos Aires – Ensamble Rayuela (Intermediate/advanced) and Agronomía Canta (beginner/intermediate). Both ensembles sing a wide variety of styles and in different languages, with arrangements tailor-made for each group. The repertoire includes Brazilian music, Argentinian folklore, gospel, folk, Uruguayan candombe, Eastern European folk songs and much more. There is a strong sense of community in each ensemble and the bonds formed between the members are as important as the music they make together. The ensembles regularly join together for concerts and also come together with other groups to sing together and share songs and performances.",
    featuresTitle: "Ensemble features:",
    features: [
      "Tailor-made vocal arrangements written for each ensemble",
      "Rich repertoire: Brazilian, Argentine folklore, candombe, Eastern European folk, gospel, African songs",
      "Vocal blending, group dynamics and ear training",
      "Regular concerts and community gatherings"
    ],
    ctaText: "Inquire for Ensembles",
    ctaLink: "#contact",
    youtubeText: "Watch Live Performances",
    youtubeLink: "#ensambles-videos",
    image: "FOTOS WEBSITE/Percussion for Singers/mishkaAdmas_ensamblesVocales.jpeg",
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
  initDiscographyAccordion();
  initBioAccordion();
  
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
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
      if (dict[key] === "") {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
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

  // 7. Update Bio accordion button state text
  const bioDrawer = document.getElementById('bio-extended-drawer');
  const isBioExpanded = bioDrawer && bioDrawer.classList.contains('is-expanded');
  updateBioBtnText(isBioExpanded);
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
                  <span class="feature-bullet" aria-hidden="true"><svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor" style="display:inline-block; vertical-align:middle;"><circle cx="12" cy="12" r="6"/></svg></span>
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
              <a href="${card.youtubeLink}" ${card.youtubeLink.startsWith('#') ? '' : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-secondary youtube-btn">
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

// --------------------------------------------------------------------------
// 9. DISCOGRAPHY EXPANDABLE CATALOG ACCORDION
// --------------------------------------------------------------------------
function initDiscographyAccordion() {
  const cards = document.querySelectorAll('.disco-catalog-card');
  if (!cards.length) return;

  cards.forEach(card => {
    const header = card.querySelector('.disco-catalog-header');
    const toggleBtn = card.querySelector('.disco-catalog-toggle');
    const media = card.querySelector('.disco-catalog-media');

    const toggleCard = () => {
      const isExpanded = card.classList.toggle('is-expanded');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      }
    };

    if (header) {
      header.addEventListener('click', toggleCard);
    }
    if (media) {
      media.addEventListener('click', toggleCard);
    }
  });
}

// --------------------------------------------------------------------------
// 10. IN-PLACE BIO EXPANDABLE ACCORDION (DRAWER)
// --------------------------------------------------------------------------
function initBioAccordion() {
  const expandBtn = document.getElementById('bio-expand-btn');
  const drawer = document.getElementById('bio-extended-drawer');
  if (!expandBtn || !drawer) return;

  expandBtn.addEventListener('click', () => {
    const isExpanded = drawer.classList.toggle('is-expanded');
    expandBtn.classList.toggle('is-expanded', isExpanded);
    expandBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');

    updateBioBtnText(isExpanded);

    if (!isExpanded) {
      // Smooth scroll back to #bio if user collapses it after scrolling down
      const bioSection = document.getElementById('bio');
      if (bioSection) {
        const headerOffset = 90;
        const elementPosition = bioSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        if (window.pageYOffset > offsetPosition) {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  });
}

function updateBioBtnText(isExpanded) {
  const expandBtn = document.getElementById('bio-expand-btn');
  if (!expandBtn) return;
  const labelSpan = expandBtn.querySelector('.bio-btn-label');
  if (!labelSpan) return;

  const dict = i18nData[currentLanguage] || i18nData.es;
  if (isExpanded) {
    labelSpan.textContent = dict.bioStripeBtnCollapse || (currentLanguage === 'en' ? 'Read less' : 'Leer menos');
  } else {
    labelSpan.textContent = dict.bioStripeBtn || (currentLanguage === 'en' ? 'Read more' : 'Conocer más');
  }
}

