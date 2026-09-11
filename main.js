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
    navTeaching: "Talleres",
    navVideos: "Videos",
    navShows: "Recitales",
    navContact: "Contacto",

    // Hero
    heroBadge: "Cantante, Multiinstrumentista & Vocal Coach",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Cantante, multiinstrumentista, compositora y pedagoga vocal radicada en Buenos Aires. Explorando el universo rítmico del jazz, la bossa nova y la música latinoamericana.",
    heroCtaTeaching: "Talleres & Clases",
    heroCtaMusic: "Bio & Discografía",
    heroCtaTag: "Cantante, Multiinstrumentista & Vocal Coach",
    heroCtaTitle: "Explorá tu voz, el ritmo y el cuerpo",
    heroCtaBtn: "Sumate a los Talleres",

    // Bio Stripe Section (Landing)
    bioStripeLead: "Mishka Adams es una galardonada cantante, multiinstrumentista, arregladora vocal y directora de ensambles vocales filipino-británica, radicada actualmente en Buenos Aires, Argentina. Participa en diversos proyectos que se nutren de los ritmos y estilos de Latinoamérica, principalmente de Brasil, Argentina y Uruguay. A su vez, se presenta como solista y cantautora, con influencias ligadas a sus raíces en el jazz y el folk. Hasta la fecha ha grabado 9 discos, y tiene un nuevo álbum y un EP en camino.",
    bioStripePlaceholder: "Una propuesta artística donde conviven la soltura del jazz, las polifonías de raíz sudamericana y un profundo compromiso con la pedagogía vocal.",
    bioStripeBtn: "Conocer más",
    bioStripeBtnCollapse: "Leer menos",
    bioExtendedHtml: `
      <p>Nací en Filipinas, hija de una escultora filipina y de un empresario inglés (y poeta ocasional). Gracias al arte de mi madre, crecí rodeada por la comunidad bohemia de Manila. En el hogar familiar y en la galería de arte de mis padres había reuniones que se extendían hasta altas horas de la noche, y en las primeras horas de la madrugada siempre aparecía una guitarra. A los 12 años, mi madre me enseñó las canciones que solía cantar con su difunta hermana en los años sesenta —Joni Mitchell, James Taylor, Crosby, Stills &amp; Nash— y me enseñó la primera canción que toqué en la guitarra: <em>The Circle Game</em> de Joni Mitchell. Cantábamos juntas en armonía a dos voces y ella me transmitió las melodías que cantaba en aquel dúo. La familia de mi madre también estaba llena de músicos y amantes de la música; cada vez que nos reuníamos en la casa de mi tío, venía un pianista (siempre el mismo). Un tío cantaba Elvis, otro Frank Sinatra, y mi tío preferido tocaba la flauta traversa en sol y cantaba temas de Jobim: esa fue mi primera conexión con la música brasileña. Cantábamos hasta tarde y mi tío mayor, cabeza de familia, tenía una lista de temas entrañables que siempre me pedía cantar, ¡y no me dejaba volver a casa hasta que lo hiciera! Su preferido indiscutido era <em>Cry Me a River</em> de Arthur Hamilton.</p>

      <p>Para ese entonces ya me interesaba el jazz, y me fui a un internado en el Reino Unido, al otro lado del planeta de mi enorme familia y de la tormentosa relación de mis padres. Había probado muchísimos instrumentos: guitarra, piano, batería, y finalmente descubrí y adopté durante algunos años el saxofón tenor, impulsada por mi amor al jazz nacido en aquellas cenas familiares. No era muy versada en teoría pero sabía leer música; toqué en la orquesta y con el tiempo empecé a cantar en la big band de jazz. Cuando canté en público por primera vez a los 14 años, me temblaban tanto las rodillas que tuve que cantar descalza.</p>

      <p>A los 18 decidí quedarme en Manila tras 9 años de sentirme desgarrada lejos de mi país natal; pero cuatro años después sentí que ya no pertenecía allí y me mudé definitivamente a Londres para estudiar jazz y vivir como música profesional. Antes de partir, estudié saxofón en la universidad local durante dos años (¡en esa época no había carreras de jazz para cantantes y el saxo era lo más cercano!) y a los 19 ya era cantante de jazz a tiempo completo. Tuve la gran fortuna de ser invitada a cantar en un concierto durante una gira del gran saxofonista británico Courtney Pine; entre el público se encontraba la esposa del presidente de Candid Records. Poco tiempo después firmé un contrato por cuatro álbumes y partí hacia Londres tras grabar mi primer disco en Manila.</p>

      <p>Cursé una maestría en jazz en la Guildhall School of Music, donde conocí a dos profesores maravillosos que se volvieron entrañables amigos y pilares de mi vida en Londres: Nikki Iles y Pete Churchill. Pete me acompañó en mis estudios con una generosidad inmensa y, al graduarme, cofundamos el London Vocal Project, un ensamble vocal contemporáneo de jazz que sigue activo tras casi 20 años. Pete y yo también grabamos juntos un álbum con sus hermosas canciones, una vez concluida amigablemente mi etapa con Candid Records. Durante mis años en Londres participé en numerosos proyectos fascinantes como cantante principal, integrante de coros y sesionista en segundas voces y percusión (habiendo dejado ya el saxofón tras partir de Filipinas).</p>

      <p>Descubrí la música de Brasil a través del jazz y al sumarme a un gran grupo de samba llamado Rhythms of the City: entré como percusionista para trabajar mi métrica y sentido del tiempo, y con el tiempo me convertí en una de sus cantantes. Toqué con ellos durante cinco o seis años girando por todo el Reino Unido y parte de Europa. Viajé a Brasil, aprendí portugués y viví un breve tiempo en Berlín. En el medio recorrí el mundo, conociendo lugares increíbles y personas entrañables. Hacia el final de mi estadía en Londres, mi gran amigo, compañero de banda y maestro Guillermo Rozenthuler —quien me introdujo por primera vez a la música argentina— me hizo escuchar las canciones de su amigo de toda la vida, Beto Caletti. Una cosa llevó a la otra: Beto y yo nos enamoramos y aquí estoy en Buenos Aires, sintiendo que finalmente encontré mi lugar en el mundo. Con Beto giramos por el mundo entero como dúo musical, nuestra hija nació aquí y siento que estoy donde siempre debí estar.</p>

      <p>Este hermoso país y su maravillosa gente me abrieron infinitas puertas y tengo la suerte de compartir música con artistas extraordinarios. Junto a nuestro dúo con Beto, también canto en tres ensambles femeninos:</p>

      <div class="bio-projects-list">
        <div class="bio-project-item">
          <span class="bio-project-title">Canciones Migrantes</span>
          <span class="bio-project-desc">Trío junto a Georgina Hassan y Florencia Dávalos, que reúne canciones inspiradas en las historias de inmigrantes, sus diversas culturas y lenguas. Actualmente tenemos un EP en camino.</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Cantoras del Sur</span>
          <span class="bio-project-desc">Siete cantantes y un percusionista con un repertorio diverso enraizado en la música del mundo, los estilos latinoamericanos y composiciones originales (con el placer de realizar varios arreglos vocales para este proyecto y para Canciones Migrantes).</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Mujererío Voces y Cuerpo</span>
          <span class="bio-project-desc">Noneto a capela y bailarina bajo la dirección y arreglos de Violeta Manoukian sobre repertorio latinoamericano.</span>
        </div>
      </div>

      <p>En medio de todo esto, desarrollo un proyecto solista con canciones propias que recuperan mis raíces en el folk que mi madre me enseñó en la infancia, dirijo dos ensambles vocales de alumnas y continúo con mis clases particulares de canto y los talleres de <em>Percussion for Singers</em>.</p>

      <p class="bio-closing-note">Ha sido una maravillosa aventura hasta aquí y no podría estar más agradecida. ¡Espero con entusiasmo las sorpresas que la vida me depare! Gracias por acompañarme en este camino si leíste hasta acá, y no dudes en ponerte en contacto si alguno de estos proyectos o clases te interesa.</p>
    `,

    // Bio Page (Full Bio)
    bioHeroTitle: "Trayectoria & Raíces",
    bioTag: "Trayectoria & Raíces",
    bioTitle: "Biografía Oficial",
    bioLead: "Mishka Adams es una galardonada cantante, multiinstrumentista, arregladora vocal y directora de ensambles vocales filipino-británica, radicada actualmente en Buenos Aires, Argentina. Participa en diversos proyectos que se nutren de los ritmos y estilos de Latinoamérica, principalmente de Brasil, Argentina y Uruguay. A su vez, se presenta como solista y cantautora, con influencias ligadas a sus raíces en el jazz y el folk. Hasta la fecha ha grabado 9 discos, y tiene un nuevo álbum y un EP en camino.",
    bioP1_duo: "Entre sus proyectos colaborativos más recientes se destacan su dúo junto a su esposo Beto Caletti, reconocido cantante, guitarrista y compositor por su trayectoria en la música brasileña;",
    bioP1_collaborations: "Canciones Migrantes junto a Florencia Dávalos y Georgina Hassan, un trío vocal que reúne canciones sobre la inmigración de todo el mundo; Cantoras del Sur, un octeto vocal con percusión y acordeón; y Mujererío Voces y Cuerpo, un noneto a capela.",
    bioP2: "En 2004, antes de radicarse en Buenos Aires, firmó un contrato discográfico de cuatro álbumes con Candid Records y en 2006 se mudó a Londres para estudiar jazz. Vivió allí durante muchos años, consolidando una fuerte presencia en la escena del jazz y la música brasileña a través de su proyecto solista y diversas colaboraciones. En 2007 cofundó el London Vocal Project junto a su amigo y maestro Pete Churchill, además de desempeñarse como cantante y percusionista en el reconocido grupo de samba Rhythms of the City.",
    bioP3: "Se ha presentado en numerosos escenarios y giras internacionales, combinando su actividad artística con una profunda pasión por la docencia: cuenta con 20 años de experiencia pedagógica, dirige dos coros femeninos y dicta clases particulares de canto y percusión para cantantes.",
    bioCtaTeaching: "Explorar Propuesta Educativa",
    bioCtaContact: "Contactar & Booking",

    // Discography Showcase (3 Central Players & Expandable Catalog)
    discoTag: "Lanzamientos & Discografía",
    discoTitle: "Discografía",
    discoSubtitle: "9 álbumes editados entre Londres y Buenos Aires, recorriendo el jazz vocal, la bossa nova y ricas polifonías de raíz sudamericana.",
    discoPlayer1Badge: "Solista · Candid Records",
    discoPlayer2Badge: "Dúo · Grabación en Vivo",
    discoPlayer3Badge: "Solista · Jazz & Folk",
    discoStyle1: "Vocal Jazz & Acoustic Soul",
    discoLabel1: "Candid Records · Londres",
    discoDesc1: "Álbum solista grabado en Londres junto a una selecta formación acústica, revisitando estándares de jazz y composiciones originales con una calidez vocal cautivadora.",
    discoStyle2: "Contemporary Jazz & Folk",
    discoLabel2: "Candid Records · Londres",
    discoDesc2: "Segundo disco solista para Candid Records, elogiado en el Reino Unido por su frescura melódica, soltura vocal y arreglos modernos.",
    discoStyle3: "Vocal Jazz & Bossa Nova",
    discoLabel3: "Candid Records · Debut",
    discoDesc3: "Álbum debut en Londres que inauguró su trayectoria internacional, fusionando la tradición del jazz vocal con sutiles aires de bossa.",
    discoStyle4: "Música Brasileña & Raíz",
    discoLabel4: "Grabación en Vivo",
    discoDesc4: "Registro en directo en Buenos Aires junto a Beto Caletti: guitarras, percusión y armonías en un vibrante diálogo con el público.",
    discoStyle5: "Candombe, Bossa & World Folk",
    discoLabel5: "Dúo Acústico · Trilogía",
    discoDesc5: "Parte de la trilogía discográfica del dúo internacional, tejiendo canciones rioplatenses, ritmos afrobrasileños y poética acústica.",
    discoStyle6: "Jazz Poético & Piano Voz",
    discoLabel6: "Royal Academy · Bandcamp",
    discoDesc6: "Grabación a dúo con el maestro Pete Churchill (Royal Academy of Music), celebrando la canción como relato poético íntimo.",
    discoListenLabel: "Escuchar en:",
    discoListenSpotify: "Spotify",
    discoListenBandcamp: "Bandcamp",

    // Teaching & Workshops Teaser (Landing)
    teachingTeaserTag: "Pedagogía Vocal, Ritmo & Ensambles",
    teachingTeaserTitle: "Clases & Talleres",
    teachingTeaserSubtitle: "20 años de experiencia pedagógica guiando a cantantes, músicos y grupos en el descubrimiento del ritmo, la afinación y el cuerpo.",
    teachingPillar1Title: "Percussion for Singers",
    teachingPillar1Desc: "Talleres grupales y clases 1 a 1 de ritmo, swing, subdivisiones y percusión corporal aplicados al canto.",
    teachingPillar2Title: "Clases Particulares de Canto",
    teachingPillar2Desc: "Técnica vocal, repertorio, soltura corporal e interpretación individual (online y presencial en CABA).",
    teachingPillar3Title: "Ensambles Vocales",
    teachingPillar3Desc: "Ensamble Rayuela y Agronomía Canta: comunidad vocal femenina, polifonías del mundo y conciertos.",
    teachingTeaserBtn: "Explorar Clases & Talleres",

    // Videos Section
    videosTag: "Registro Audiovisual",
    videosTitle: "Videos & En Vivo",
    videosSubtitle: "Conciertos en vivo, colaboraciones acústicas y registros íntimos en estudio.",
    video1Title: "De Repente — Mishka Adams & Beto Caletti",
    video1Desc: "Dúo en vivo: canción acústica, arreglos de guitarra y voz entrelazando la música brasileña y sudamericana.",
    video2Title: "Razão de Ser — The Basement Sessions",
    video2Desc: "Sesión acústica íntima en Londres: bossa nova, delicadeza vocal y sensibilidad interpretativa.",
    video3Title: "People Will Come, People Will Go — Pete Churchill & Mishka Adams",
    video3Desc: "Piano y voz a dúo con el maestro británico Pete Churchill: jazz poético y emoción pura.",
    videosMoreBtn: "Canal Oficial de YouTube",
    videosTeachingBtn: "Canal Percussion for Singers",

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
    contactTeaserDesc: "¿Te interesa sumarte a los talleres de percusión, tomar clases particulares de canto o coordinar una presentación artística? Estamos a un mensaje de distancia.",
    contactTeaserBtn: "Ir a la Página de Contacto",
    contactDirectEmail: "Enviar un Correo",

    // Contact Dedicated Page (contacto.html)
    contactPageTag: "Contacto Directo & Booking",
    contactPageTitle: "Conversemos",
    contactPageSubtitle: "Escribinos para coordinar clases de canto particulares, consultar por talleres y ensambles vocales, o proponer proyectos artísticos y fechas de conciertos.",
    contactChannelsTitle: "Canales Directos",
    contactChannelsDesc: "Elegí el medio más cómodo para comunicarte:",
    contactLocationTitle: "Ubicación & Modalidad",
    contactLocationDesc: "Agronomía, Buenos Aires, Argentina (presencial) y clases / talleres online para todo el mundo.",
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
    navBio: "Bio",
    navDisco: "Discography",
    navTeaching: "Workshops",
    navVideos: "Videos",
    navShows: "Live Shows",
    navContact: "Contact",

    // Hero
    heroBadge: "Singer, Multi-instrumentalist & Vocal Coach",
    heroTitlePrefix: "Mishka",
    heroTitleSuffix: "Adams",
    heroTagline: "Singer, multi-instrumentalist, songwriter and vocal pedagogue based in Buenos Aires. Exploring the rhythmic universe of jazz, bossa nova and Latin American music.",
    heroCtaTeaching: "Workshops & Classes",
    heroCtaMusic: "Bio & Discography",
    heroCtaTag: "Singer, Multi-instrumentalist & Vocal Coach",
    heroCtaTitle: "Unlock your voice, rhythm & body",
    heroCtaBtn: "Join the Workshops",

    // Bio Stripe Section (Landing)
    bioStripeLead: "Mishka Adams is an award-winning Filipino-British singer, multi-instrumentalist, vocal arranger and vocal ensemble director, currently based in Buenos Aires, Argentina. She participates in diverse projects rooted in the rhythms and styles of Latin America, mainly Brazil, Argentina and Uruguay. At the same time, she performs as a soloist and singer-songwriter, with influences tied to her roots in jazz and folk. To date, she has recorded 9 albums, with a new album and an EP currently in the works.",
    bioStripePlaceholder: "An artistic vision bridging the freedom of jazz, South American polyphonic traditions, and a lifelong dedication to vocal pedagogy.",
    bioStripeBtn: "Read more",
    bioStripeBtnCollapse: "Read less",
    bioExtendedHtml: `
      <p>I was born in the Philippines to a Filipina sculptor and an English businessman (and occasional poet). Thanks to my mother’s art, I grew up surrounded by the bohemian community in Manila. In my family home and my parents’ art gallery there were many gatherings that lasted late into the night, and in the early hours of the morning a guitar always appeared. At the age of 12 my mother taught me the songs she had sung with her late sister in the sixties — Joni Mitchell, James Taylor, Crosby, Stills &amp; Nash — and she taught me the first song I ever played on the guitar, <em>The Circle Game</em> by Joni Mitchell. We would sing together in two part harmony and she taught me the melodies her sister used to sing in their duo. My mother’s side of the family was also full of musicians and music lovers and every time we all gathered at my uncle’s house, a piano player would come (the same every time). One uncle sang Elvis, another Frank Sinatra, and my favourite uncle played alto flute and sang songs by Jobim – that was my first connection with Brazilian music. We would sing late into the night and my oldest uncle, the head of the family, had a list of beloved songs that he always wanted me to sing, and wouldn’t let me go home until I did so! His all-time favourite for me was <em>Cry Me a River</em> by Arthur Hamilton.</p>

      <p>At this point I was already interested in jazz, and going to boarding school in the UK, the other side of the planet from my enormous family and my parents’ very stormy relationship. I had tried loads of different instruments — guitar, piano, drums — and eventually discovered and stayed with for some years, the tenor saxophone, due to my love of jazz that had been born in my uncle’s family dinners. I was not well versed in music theory but I could read music, I played in the orchestra and eventually started singing in the jazz band – when I sang in public for the first time at 14 my knees trembled so badly that I had to go barefoot.</p>

      <p>At 18 I was determined to stay in Manila after 9 years of feeling torn from my home country – only to find 4 years later that I felt I no longer belonged there and moved to London full time to study jazz and live a musician’s life. Before I left, I studied saxophone at the local university for two years (there were no jazz courses for singers at that time and the sax was the closest I could get!) and was a full-time jazz singer by the age of 19. I had the great fortune of being invited to sing in a concert when the great British saxophonist Courtney Pine came over on tour and the CEO of Candid Records' wife was sitting in the audience. Shortly after I signed a four-album recording contract and left for London after recording my first album in Manila.</p>

      <p>I did a jazz masters at the Guildhall School of Music where I met two wonderful professors that became very good friends and central to my life in London, Nikki Iles and Pete Churchill. Pete got me through my studies with an enormous amount of help and after I left we co-founded the London Vocal Project, a wonderful jazz/contemporary choir that is still going almost 20 years on! Pete and I also recorded an album of his beautiful songs together, once my album deal with Candid Records came to an amicable close. During my time in London I played in lots of different amazing projects both as a lead singer, choir member and side woman on backing vocals and percussion (I had put down the sax after leaving the Philippines).</p>

      <p>I discovered Brazilian music through jazz and through joining a great samba group called Rhythms of the City – I joined as a percussionist because I wanted to work on my time keeping, and later on became one of the singers – I played with them for five or six years and we toured all over the UK and some of Europe. I travelled to Brazil, learned Portuguese, and lived in Berlin for a short time. I travelled all over the world in the middle of it all, to amazing places with wonderful people. Towards the end of my time living in London, my great friend, bandmate, and teacher Guillermo Rozenthuler, who first introduced me to Argentinian music, played me the music of his longtime friend Beto Caletti. One thing led to another, Beto and I fell in love and here I am in Buenos Aires – feeling like I finally found my place in the world. Beto and I toured all over the world as a musical duo, our daughter was born here, and I feel I am where I was always meant to be.</p>

      <p>This wonderful country and its amazing people have opened so many doors and I am lucky enough to be able to play with some incredible musicians. Alongside our duo with Beto, I also sing in three female groups:</p>

      <div class="bio-projects-list">
        <div class="bio-project-item">
          <span class="bio-project-title">Canciones Migrantes</span>
          <span class="bio-project-desc">A trio with Georgina Hassan and Florencia Dávalos that brings together songs inspired by immigrants and their many diverse cultures and languages. We have an EP in the making.</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Cantoras del Sur</span>
          <span class="bio-project-desc">With seven singers and a percussionist and a diverse repertoire rooted in world music and Latin American styles and original compositions (I have the great pleasure of doing a number of vocal arrangements for this project and Canciones Migrantes).</span>
        </div>
        <div class="bio-project-item">
          <span class="bio-project-title">Mujererío Voces y Cuerpo</span>
          <span class="bio-project-desc">An a cappella nonet and dancer under the direction of and with arrangements by Violeta Manoukian of Latin American repertoire.</span>
        </div>
      </div>

      <p>In the middle of all this, I have a solo project of my own songs that bring back some of my roots in the folk music my mum taught me in my childhood and two vocal ensembles of students that I direct, as well as my one to one teaching and percussion for singers workshops.</p>

      <p class="bio-closing-note">It’s been a great adventure so far, and I couldn’t be more grateful. I’m looking forward to seeing what surprises life brings next! Thanks for coming on the journey with me if you’ve read this far, and do get in touch if these projects or classes are interesting to you.</p>
    `,

    // Bio Page (Full Bio)
    bioHeroTitle: "JOURNEY & ROOTS",
    bioTag: "Journey & Roots",
    bioTitle: "Official Biography",
    bioLead: "Mishka Adams is an award-winning Filipino-British singer, multi-instrumentalist, vocal arranger and vocal ensemble director, currently based in Buenos Aires, Argentina. She participates in diverse projects rooted in the rhythms and styles of Latin America, mainly Brazil, Argentina and Uruguay. At the same time, she performs as a soloist and singer-songwriter, with influences tied to her roots in jazz and folk. To date, she has recorded 9 albums, with a new album and an EP currently in the works.",
    bioP1_duo: "Among her most recent collaborative projects, highlights include her duo with her husband Beto Caletti, a renowned singer, guitarist and composer celebrated for his extensive career in Brazilian music;",
    bioP1_collaborations: "Canciones Migrantes alongside Florencia Dávalos and Georgina Hassan, a vocal trio bringing together immigration songs from across the globe; Cantoras del Sur, a vocal octet with percussion and accordion; and Mujererío Voces y Cuerpo, an a cappella nonet.",
    bioP2: "In 2004, prior to settling in Buenos Aires, she signed a four-album recording contract with Candid Records and moved to London in 2006 to study jazz. She lived there for many years, building a strong presence in the jazz and Brazilian music scenes through her solo project and diverse collaborations. In 2007, she co-founded the London Vocal Project alongside her mentor and friend Pete Churchill, and performed as a singer and percussionist with the acclaimed samba ensemble Rhythms of the City.",
    bioP3: "She has performed on numerous international stages and tours, blending her artistic journey with a deep passion for education: she brings 20 years of pedagogical experience, directs two women's choirs, and offers private vocal lessons and signature Percussion for Singers workshops.",
    bioCtaTeaching: "Explore Workshops & Classes",
    bioCtaContact: "Contact & Booking",

    // Discography Showcase (3 Central Players & Expandable Catalog)
    discoTag: "Releases & Discography",
    discoTitle: "Discography",
    discoSubtitle: "9 recorded albums across London and Buenos Aires, exploring vocal jazz, bossa nova and rich South American polyphony.",
    discoPlayer1Badge: "Soloist · Candid Records",
    discoPlayer2Badge: "Duo · Live Recording",
    discoPlayer3Badge: "Soloist · Jazz & Folk",
    discoStyle1: "Vocal Jazz & Acoustic Soul",
    discoLabel1: "Candid Records · London",
    discoDesc1: "Solo album recorded for Candid Records in London, exploring classic jazz standards and original songs with an intimate acoustic ensemble.",
    discoStyle2: "Contemporary Jazz & Folk",
    discoLabel2: "Candid Records · London",
    discoDesc2: "Second solo album for Candid Records, acclaimed across the UK for its melodic freshness, vocal agility, and modern arrangements.",
    discoStyle3: "Vocal Jazz & Bossa Nova",
    discoLabel3: "Candid Records · Debut",
    discoDesc3: "Debut London album that launched her international career, blending classic vocal jazz tradition with subtle bossa nova nuances.",
    discoStyle4: "Brazilian Roots & Live Folk",
    discoLabel4: "Live Recording",
    discoDesc4: "Live concert recording in Buenos Aires with Beto Caletti: acoustic guitars, percussion, and rich vocal harmonies in full connection.",
    discoStyle5: "Candombe, Bossa & World Folk",
    discoLabel5: "Acoustic Duo · Trilogy",
    discoDesc5: "Part of the international duo's acclaimed trilogy, weaving Rioplatense songcraft, Afro-Brazilian rhythms, and acoustic poetics.",
    discoStyle6: "Poetic Jazz & Voice-Piano",
    discoLabel6: "Royal Academy · Bandcamp",
    discoDesc6: "Intimate duo project with master pianist Pete Churchill (Royal Academy of Music), celebrating song as narrative poetry.",
    discoListenLabel: "Listen on:",
    discoListenSpotify: "Spotify",
    discoListenBandcamp: "Bandcamp",

    // Teaching & Workshops Teaser (Landing)
    teachingTeaserTag: "Vocal Pedagogy, Rhythm & Ensembles",
    teachingTeaserTitle: "Workshops & Classes",
    teachingTeaserSubtitle: "20 years of pedagogical experience guiding singers, musicians and vocal ensembles in unlocking rhythm, groove, vocal technique and the body.",
    teachingPillar1Title: "Percussion for Singers",
    teachingPillar1Desc: "Group workshops and 1:1 sessions exploring groove, body percussion and rhythm applied to vocal expression.",
    teachingPillar2Title: "1:1 Private Voice Lessons",
    teachingPillar2Desc: "Vocal technique, repertoire, body awareness and tailored coaching (online and in-person in Buenos Aires).",
    teachingPillar3Title: "Vocal Ensembles",
    teachingPillar3Desc: "Ensamble Rayuela and Agronomía Canta: women's vocal community, world polyphony and concerts.",
    teachingTeaserBtn: "Explore Workshops & Classes",

    // Videos Section
    videosTag: "Audiovisual Archive",
    videosTitle: "Videos & Live",
    videosSubtitle: "Live concert footage, acoustic duo collaborations and intimate studio sessions.",
    video1Title: "De Repente — Mishka Adams & Beto Caletti",
    video1Desc: "Live acoustic duo performance weaving Brazilian songcraft and soulful guitar and vocal harmonies.",
    video2Title: "Razão de Ser — The Basement Sessions",
    video2Desc: "Intimate acoustic live session in London: heartfelt Brazilian bossa nova and vocal subtlety.",
    video3Title: "People Will Come, People Will Go — Pete Churchill & Mishka Adams",
    video3Desc: "Poetic piano & voice duo with British jazz master Pete Churchill: songwriting at its purest.",
    videosMoreBtn: "Official YouTube Channel",
    videosTeachingBtn: "Percussion for Singers Channel",

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
    contactTeaserDesc: "Interested in joining the percussion workshops, booking 1:1 voice coaching or coordinating a performance? We are just a message away.",
    contactTeaserBtn: "Go to Contact Page",
    contactDirectEmail: "Send an Email",

    // Contact Dedicated Page (contacto.html)
    contactPageTag: "Direct Contact & Booking",
    contactPageTitle: "Get in Touch",
    contactPageSubtitle: "Reach out to schedule 1:1 voice coaching, inquire about upcoming workshops and vocal ensembles, or discuss concerts and artistic bookings.",
    contactChannelsTitle: "Direct Channels",
    contactChannelsDesc: "Choose your preferred channel to get in touch:",
    contactLocationTitle: "Location & Format",
    contactLocationDesc: "Agronomía, Buenos Aires, Argentina (in-person) and online lessons / workshops worldwide.",
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

