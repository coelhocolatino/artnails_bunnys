/* plan.js — interactividad del plan: checklist, calculadoras y textos */
(function () {
  'use strict';
  var D = window.ANB, UI = window.ANB_UI;
  var byId = function (i) { return document.getElementById(i); };
  if (!byId('fases')) return;
  var eur = function (n) { return (Math.round(n * 100) / 100).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' €'; };

  /* ---- paleta ---- */
  var paleta = [
    { c: '#F8F1F3', n: 'Lienzo', u: 'Fondos' },
    { c: '#F3CFD8', n: 'Rosa empolvado', u: 'Identidad' },
    { c: '#C02E5C', n: 'Frambuesa', u: 'Reservar' },
    { c: '#2A1A22', n: 'Cacao', u: 'Texto' },
    { c: '#A8D8CC', n: 'Menta', u: 'Acento' },
    { c: '#6C1F33', n: 'Borgoña', u: 'Temporada' }
  ];
  byId('paleta').innerHTML = paleta.map(function (p) {
    return '<div class="muestra"><i style="background:' + p.c + '"></i><span>' + p.n + '<br>' + p.u + '</span></div>';
  }).join('');

  /* ---- textos listos ---- */
  byId('copys').innerHTML = D.copys.map(function (c, i) {
    return '<article class="copy"><h4>' + c.t + '</h4><pre id="cp' + i + '">' + c.x + '</pre>' +
      '<button class="btn btn--linea btn--pequeno" data-cp="' + i + '" type="button" style="align-self:flex-start">Copiar</button></article>';
  }).join('');
  byId('copys').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-cp]'); if (!b) return;
    UI.copiar(D.copys[+b.dataset.cp].x, 'Texto copiado');
  });

  /* ---- calendario de 90 días ---- */
  var fases = [
    { t: 'Preparar la base', f: '26 oct – 1 nov', s: 'Perfil completo y reservas accesibles', tareas: [
      'Actualizar nombre y bio de Instagram con “Uñas en Vigo” y el enlace de Booksy.',
      'Revisar en Booksy que servicios, precios, duraciones y política de cancelación están al día.',
      'Fijar tres publicaciones: presentación, servicios y cómo reservar.',
      'Crear los cinco destacados: Sets, Servicios, Opiniones, Ubicación y Huecos.',
      'Abrir la cuenta de TikTok con el mismo nombre y foto.',
      'Crear o reclamar el Perfil de Empresa en Google con fotos y enlace de reserva.',
      'Publicar la mini colección de Halloween (tres niveles de diseño).'
    ]},
    { t: 'Probar contenido', f: '2 – 15 nov', s: 'Primeras consultas y citas desde redes', tareas: [
      'Publicar tres vídeos por semana siguiendo los guiones.',
      'Historias en todos los días de trabajo con disponibilidad real.',
      'Preguntar a cada clienta cómo encontró el estudio y anotarlo.',
      'Pedir valoración honesta al terminar cada cita.',
      'Identificar los dos formatos con más guardados y visitas al perfil.',
      'Subir diez fotos nuevas al Perfil de Empresa de Google.'
    ]},
    { t: 'Promoción local', f: '16 nov – 6 dic', s: 'Reservas atribuibles y coste por cita', tareas: [
      'Lanzar la prueba de anuncios con 5-8 €/día y dos creatividades.',
      'Orientar la campaña a Vigo y municipios a 25 minutos.',
      'Apagar a los 7 días el anuncio que no haya generado citas.',
      'Contactar con dos negocios cercanos para intercambio de recomendación.',
      'Empezar a enseñar ideas de Navidad y abrir la agenda de diciembre.',
      'Promocionar solo las franjas con huecos libres.'
    ]},
    { t: 'Temporada alta', f: '7 dic – 3 ene', s: 'Ocupación por día y reservas repetidas', tareas: [
      'Publicar la colección navideña: cranberry y oro, verde terciopelo, francesa festiva, nieve.',
      'Historias diarias con huecos reales de diciembre.',
      'Abrir y anunciar las citas de Nochevieja y Año Nuevo.',
      'Proponer la reserva del mantenimiento de enero a cada clienta que pase.',
      'Avisar con antelación de los días de cierre por festivos.'
    ]},
    { t: 'Consolidar', f: '4 – 23 ene', s: 'Más recurrencia y avance hacia 6 citas', tareas: [
      'Repetir los tres formatos que más citas generaron.',
      'Activar la colaboración local acordada en noviembre.',
      'Revisar los seis indicadores del trimestre completo.',
      'Recuperar a quien no volvió desde noviembre con dos horas concretas.',
      'Decidir si la publicidad sigue, cambia de mensaje o se detiene.',
      'Planificar San Valentín con la misma estructura de temporada.'
    ]}
  ];

  var ids = [];
  byId('fases').innerHTML = fases.map(function (f, i) {
    return '<section class="fase"><div class="fase__cab"><h3>' + f.t + '</h3>' +
      '<span>' + f.f + '</span><span style="margin-left:auto">Señal: ' + f.s + '</span></div>' +
      f.tareas.map(function (t, j) {
        var id = 'f' + i + 't' + j; ids.push(id);
        return '<div class="tarea"><input type="checkbox" id="' + id + '"><label for="' + id + '">' + t + '</label></div>';
      }).join('') + '</section>';
  }).join('');

  var CLAVE = 'anb-plan-90';
  function leer() { try { return JSON.parse(localStorage.getItem(CLAVE) || '{}'); } catch (e) { return {}; } }
  function guardar(o) { try { localStorage.setItem(CLAVE, JSON.stringify(o)); } catch (e) {} }
  function pintarProgreso() {
    var hechas = ids.filter(function (i) { return byId(i).checked; }).length;
    var pct = Math.round(hechas / ids.length * 100);
    byId('barraProg').style.width = pct + '%';
    byId('textoProg').textContent = hechas + ' de ' + ids.length + ' tareas · ' + pct + ' %';
  }
  var guardadas = leer();
  ids.forEach(function (i) {
    var c = byId(i);
    c.checked = !!guardadas[i];
    c.addEventListener('change', function () {
      var o = leer(); o[i] = c.checked; guardar(o); pintarProgreso();
    });
  });
  pintarProgreso();
  byId('btnReset').addEventListener('click', function () {
    guardar({}); ids.forEach(function (i) { byId(i).checked = false; }); pintarProgreso();
  });

  /* ---- calculadora de inversión ---- */
  var campos = ['inv', 'citas', 'ticket', 'repite', 'pcterep'];
  function calcInv() {
    var inv = +byId('inv').value || 0, citas = +byId('citas').value || 0,
        ticket = +byId('ticket').value || 0, rep = +byId('repite').value || 1,
        pct = Math.min(100, Math.max(0, +byId('pcterep').value || 0)) / 100;
    var cpc = citas ? inv / citas : 0;
    var ing = citas * ticket;
    var roas = inv ? ing / inv : 0;
    var ltv = citas * ticket * (1 + pct * (rep - 1));
    byId('rCpc').textContent = citas ? eur(cpc) : 'sin citas';
    byId('rIng').textContent = eur(ing);
    byId('rRoas').textContent = inv ? roas.toFixed(2) + ' €/€' : '—';
    byId('rLtv').textContent = eur(ltv);
    var v;
    if (!citas) v = 'Sin citas atribuidas no hay nada que valorar: la campaña se apaga y se revisa el mensaje y el enlace.';
    else if (cpc > ticket) v = 'Cada cita cuesta más de lo que factura. Solo se sostiene si repiten: aquí el retorno real llega en la segunda o tercera visita.';
    else if (cpc > ticket * 0.4) v = 'Coste alto pero recuperable. Merece la pena si el porcentaje de repetición se mantiene; si baja, se apaga.';
    else v = 'Coste por cita razonable. Mantén la creatividad ganadora y sube el presupuesto poco a poco, no de golpe.';
    byId('rVeredicto').textContent = v;
  }
  campos.forEach(function (c) { byId(c).addEventListener('input', calcInv); });
  calcInv();

  /* ---- calculadora de capacidad ---- */
  function calcCap() {
    var horas = +byId('horas').value || 0, dur = +byId('mezcla').value, margen = +byId('margen').value || 0;
    var caben = Math.floor((horas * 60) / (dur + margen));
    var precios = { 40: 12, 70: 18, 110: 23, 150: 28 };
    byId('rCitas').textContent = caben;
    byId('rFact').textContent = eur(caben * precios[dur]);
    byId('rCapacidad').textContent = caben >= 6
      ? 'Con esta mezcla caben las seis citas del objetivo. El límite lo pone la demanda, no la agenda.'
      : 'Con esta mezcla no caben seis citas: el objetivo del día son ' + caben + '. Para subir, reserva los servicios largos en días concretos.';
  }
  ['horas', 'mezcla', 'margen'].forEach(function (c) { byId(c).addEventListener('input', calcCap); });
  calcCap();
})();
