/* ============================================================
   data.js — TODO el contenido editable del sitio vive aquí.
   Cambia textos, precios, enlaces y diseños sin tocar el HTML.
   Los campos marcados con "REVISAR" deben confirmarse antes de
   publicar o de usarse en anuncios.
   ============================================================ */
window.ANB = {

  /* ---------- 1. Datos del negocio ---------- */
  negocio: {
    nombre: "Art Nails Bunny's",
    reclamo: "Nail art y uñas de gel en Vigo",
    descripcion: "Diseños personalizados, acabado cuidado y cita online cuando te venga bien.",
    ciudad: "Vigo, Pontevedra",
    // REVISAR: confirma el enlace exacto de tu ficha de Booksy
    booksy: "https://artnailsbunnys.booksy.com/",
    instagram: "https://www.instagram.com/artnails_bunny.s",
    instagramUsuario: "artnails_bunny.s",
    // Completa cuando abras la cuenta (deja "" para ocultar el enlace)
    tiktok: "",
    tiktokUsuario: "artnails_bunny.s",
    // Completa estos campos; si quedan vacíos no se muestran en la web
    telefono: "",
    whatsapp: "",            // formato internacional sin signos: 34600000000
    direccion: "",           // dirección o zona de atención
    mapa: "",                // enlace a Google Maps
    email: "",
    horario: [
      { dia: "Lunes a viernes", horas: "Consultar huecos en Booksy" },
      { dia: "Sábado", horas: "Consultar huecos en Booksy" },
      { dia: "Domingo", horas: "Cerrado" }
    ]
  },

  /* ---------- 2. Servicios (ficha pública de Booksy — REVISAR) ---------- */
  servicios: [
    { id: "gel", nombre: "Uñas de gel", precio: 18, duracion: 60, texto: "Esmaltado en gel sobre uña natural, con preparación y acabado brillante o mate.", destacado: true },
    { id: "extension", nombre: "Extensión de uñas", precio: 28, duracion: 150, texto: "Alargamiento con la forma y largo que elijas. Reserva con antelación: es una cita larga." },
    { id: "combo", nombre: "Combo promocional", precio: 30, duracion: 210, texto: "Varios servicios en una misma sesión. Consulta qué incluye antes de reservar." },
    { id: "manicura", nombre: "Manicura", precio: 12, duracion: 40, texto: "Cuidado básico de manos y uñas. Disponible para todos los públicos." },
    { id: "retirada", nombre: "Retirada de producto", precio: 5, duracion: 40, texto: "Retirada cuidadosa del producto anterior sin dañar la uña natural." }
  ],
  extras: [
    { id: "simple", nombre: "Diseño sencillo (1-2 uñas)", precio: 0, duracion: 10, texto: "Francesa mini, lunares, línea metálica." },
    { id: "medio", nombre: "Nail art en varias uñas", precio: 0, duracion: 20, texto: "Dibujo a mano, efecto terciopelo o cromado." },
    { id: "completo", nombre: "Set artístico completo", precio: 0, duracion: 35, texto: "Diseño personalizado en las diez uñas." }
  ],
  // Los extras se muestran como "a consultar" porque el precio depende del diseño.
  avisoPrecios: "Precios y duraciones tomados de la ficha pública de Booksy el 26/10/2026. El diseño personalizado puede variar el tiempo y el importe final: confírmalo al reservar.",

  /* ---------- 3. Galería (maquetas; sustituir por fotos reales) ---------- */
  disenos: [
    { id:"gelrosa", nombre:"Gel rosa cristal", cat:"gel", motivo:"solid", base:"#F0BFC9", brillo:"#FDE7EC", sombra:"#D99AA9", acento:"#FFFFFF", fondo:"#F6E9ED", semilla:3, texto:"Rosa empolvado con acabado espejo. El clásico que aguanta el crecimiento." },
    { id:"frenchmini", nombre:"Francesa mini", cat:"gel", motivo:"french", base:"#F2DED3", brillo:"#FFF6F1", sombra:"#DCC2B4", acento:"#B9243F", fondo:"#F3E8E2", semilla:9, texto:"Punta fina en rojo profundo sobre base nude. Discreta y de temporada." },
    { id:"cromo", nombre:"Cromado perla", cat:"nailart", motivo:"cromo", base:"#DCD3E2", brillo:"#F7F2F8", sombra:"#B9AFC6", acento:"#FFFFFF", fondo:"#EDE7F0", semilla:21, texto:"Efecto cromo iridiscente, el acabado que más se pide en vídeo." },
    { id:"velvet", nombre:"Velvet borgoña", cat:"temporada", motivo:"cateye", base:"#6C1F33", brillo:"#9C3B52", sombra:"#4A1324", acento:"#D98BA0", fondo:"#2E1420", semilla:5, texto:"Ojo de gato en borgoña: terciopelo magnético para otoño-invierno." },
    { id:"chocolate", nombre:"Chocolate mocha", cat:"temporada", motivo:"solid", base:"#5B3A2E", brillo:"#8A6150", sombra:"#3E261D", acento:"#E8D5C4", fondo:"#2C1C16", semilla:14, texto:"Marrón espresso, uno de los tonos clave de la temporada fría." },
    { id:"bunny", nombre:"Bunny signature", cat:"nailart", motivo:"lunares", especial:{2:"conejito"}, base:"#F7E6EA", brillo:"#FFFFFF", sombra:"#E2C5CE", acento:"#C96A86", fondo:"#F6EDEF", semilla:33, texto:"La firma del estudio: conejita pintada a mano y lunares suaves." },
    { id:"estrellas", nombre:"Azul marino con estrellas", cat:"nailart", motivo:"estrellas", base:"#20304F", brillo:"#3C5478", sombra:"#131E34", acento:"#E7C86A", fondo:"#15203A", semilla:17, texto:"El azul marino es el nuevo negro; las estrellas doradas lo rematan." },
    { id:"halloween", nombre:"Spooky discreto", cat:"halloween", motivo:"telarana", especial:{3:"fantasma"}, base:"#EFE1D6", brillo:"#FFF8F2", sombra:"#D6C3B5", acento:"#241E22", fondo:"#EDE2DA", semilla:31, texto:"Telaraña fina y fantasma mini sobre nude: Halloween sin pasarse." },
    { id:"glam", nombre:"Glam cromado verde", cat:"halloween", motivo:"cateye", base:"#1F3A30", brillo:"#3E6B57", sombra:"#132620", acento:"#7FD0AE", fondo:"#12241D", semilla:12, texto:"Verde oscuro con cat eye. Funciona en Halloween y después." },
    { id:"navidad", nombre:"Cranberry + oro", cat:"navidad", motivo:"punta", especial:{2:"estrellas"}, base:"#7A1B2E", brillo:"#A63E52", sombra:"#53101F", acento:"#E3B457", fondo:"#2B0F18", semilla:27, texto:"Borgoña con punta dorada y una uña de estrellas. Navidad elegante." },
    { id:"nieve", nombre:"Nieve elegante", cat:"navidad", motivo:"copos", base:"#DDE8EE", brillo:"#FFFFFF", sombra:"#BCCCD7", acento:"#7FA3BC", fondo:"#E6EDF2", semilla:41, texto:"Base lechosa, azul hielo y copos finos: dura bien tras las fiestas." },
    { id:"purpurina", nombre:"Purpurina rosa", cat:"temporada", motivo:"purpurina", base:"#E8A7B8", brillo:"#FBD9E2", sombra:"#C9869A", acento:"#FFFFFF", fondo:"#F2DEE4", semilla:52, texto:"Para fiestas y Nochevieja: purpurina sobre rosa, sin recargar." }
  ],
  categorias: [
    { id:"todo", nombre:"Todo" },
    { id:"gel", nombre:"Uñas de gel" },
    { id:"nailart", nombre:"Nail art" },
    { id:"temporada", nombre:"Temporada" },
    { id:"halloween", nombre:"Halloween" },
    { id:"navidad", nombre:"Navidad" }
  ],

  /* ---------- 4. Cómo funciona ---------- */
  pasos: [
    { t:"Elige diseño", d:"Guarda las fotos que te gusten del perfil o tráelas de Pinterest. Cuantas más referencias, mejor sale." },
    { t:"Reserva online", d:"La agenda de Booksy está abierta 24 h. Elige servicio, día y hora; recibirás confirmación y recordatorio." },
    { t:"Tu cita", d:"Preparación, color y diseño. Si el trabajo necesita más tiempo del reservado, se avisa antes de empezar." },
    { t:"Mantenimiento", d:"Deja reservada la siguiente cita al salir: así te aseguras el hueco que mejor te encaja." }
  ],

  /* ---------- 5. Preguntas frecuentes ---------- */
  faq: [
    { p:"¿Cuánto dura el esmaltado en gel?", r:"Depende del crecimiento de cada uña y del uso de las manos. Lo habitual es revisar el mantenimiento cada tres o cuatro semanas; en la cita se valora tu caso concreto." },
    { p:"¿Puedo llevar un diseño de referencia?", r:"Sí, es lo ideal. Envía la foto por Instagram antes de la cita y se confirma si es viable con el tiempo reservado." },
    { p:"¿Qué pasa si llevo producto de otro centro?", r:"Se puede retirar en la misma cita. Añade el servicio de retirada al reservar para que la agenda cuente con ese tiempo." },
    { p:"¿Cómo anulo o cambio la cita?", r:"Desde el enlace de confirmación de Booksy. Avisa con antelación para liberar el hueco." },
    { p:"¿Hacéis manicura sin color?", r:"Sí. La manicura básica incluye cuidado de uña y cutícula, con o sin esmaltado." },
    { p:"¿Se puede reservar fuera del horario habitual?", r:"Hay huecos con horario flexible. Los disponibles aparecen directamente en Booksy." }
  ],

  /* ---------- 6. Textos listos para publicar (se copian con un clic) ---------- */
  copys: [
    { t:"Bio de Instagram", x:"Nail Art Studio · Vigo\nUñas de gel · extensiones · diseños personalizados\nCitas con horario flexible\nReserva online aquí ↓" },
    { t:"Bio de TikTok", x:"Uñas de gel y nail art en Vigo 🐰 Diseños personalizados. Reserva en Booksy ↓" },
    { t:"Pie de foto — set terminado", x:"Gel + diseño a mano en tonos de temporada 🤎\n¿Te lo llevarías en versión suave o más atrevida?\nReserva tu cita en Vigo desde el enlace de la bio." },
    { t:"Pie de foto — huecos de la semana", x:"Huecos libres esta semana en Vigo:\n· [día] [hora]\n· [día] [hora]\nSe reservan desde el enlace de la bio, sin mensajes ni esperas." },
    { t:"Historia — recordatorio de mantenimiento", x:"¿Tus uñas piden revisión? Deja reservado el mantenimiento y te aseguras tu hora habitual. Enlace abajo ↓" },
    { t:"Respuesta a consulta por DM", x:"¡Hola! Gracias por escribir 🐰 Ese diseño se puede hacer sobre gel o extensión. El hueco más cercano está el [día] a las [hora]: puedes reservarlo aquí [enlace]. Si prefieres otra franja, dime cuál te encaja." },
    { t:"Anuncio — texto principal", x:"Uñas de gel y nail art en Vigo. Diseños personalizados y cita online en menos de un minuto. Mira los huecos de esta semana." },
    { t:"Pedir reseña tras la cita", x:"Me encantaría saber qué te han parecido. Si te apetece dejar una valoración honesta en Booksy o en Google, me ayuda mucho a que otras personas de Vigo encuentren el estudio. ¡Gracias!" }
  ],

  /* ---------- 7. Maquetas de redes ---------- */
  perfilIG: {
    usuario: "artnails_bunny.s",
    nombre: "Art Nails Bunny's | Uñas en Vigo",
    categoria: "Salón de uñas",
    bio: "Nail Art Studio · Vigo\nUñas de gel · extensiones · diseños personalizados\nCitas con horario flexible\nReserva online aquí ↓",
    enlace: "artnailsbunnys.booksy.com",
    // Cifras de ejemplo para la maqueta, no son datos reales de la cuenta
    publicaciones: "128", seguidores: "1.247", seguidos: "312",
    destacados: ["Sets", "Servicios", "Opiniones", "Ubicación", "Huecos"]
  },
  perfilTT: {
    usuario: "artnails_bunny.s",
    nombre: "Art Nails Bunny's · Vigo",
    bio: "Uñas de gel y nail art en Vigo 🐰 Diseños personalizados.\nReserva en Booksy ↓",
    enlace: "artnailsbunnys.booksy.com",
    seguidos: "180", seguidores: "2.4K", megusta: "18.6K"
  },
  rejillaIG: ["gelrosa","frenchmini","cromo","velvet","bunny","chocolate","estrellas","halloween","navidad"],
  videosTT: [
    { d:"velvet", vistas:"24,1K", titulo:"Velvet borgoña paso a paso" },
    { d:"cromo", vistas:"11,3K", titulo:"Cromo perla en 15 segundos" },
    { d:"bunny", vistas:"8.904", titulo:"La conejita de la casa" },
    { d:"halloween", vistas:"6.512", titulo:"Halloween discreto" },
    { d:"navidad", vistas:"4.330", titulo:"Cranberry + oro" },
    { d:"nieve", vistas:"3.187", titulo:"Copos finos sin recargar" }
  ]
};
