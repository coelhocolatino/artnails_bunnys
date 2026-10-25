/* site.js — monta la portada a partir de data.js */
(function () {
  'use strict';
  var D = window.ANB, N = window.ANB_NAILS;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var byId = function (i) { return document.getElementById(i); };
  var dis = function (n) { return n >= 60 ? (n % 60 ? (n / 60 | 0) + ' h ' + (n % 60) + ' min' : (n / 60 | 0) + ' h') : n + ' min'; };

  /* ---- tema ---- */
  (function () {
    var raiz = document.documentElement, b = byId('btnTema');
    try { var g = localStorage.getItem('anb-tema'); if (g) raiz.setAttribute('data-theme', g); } catch (e) {}
    b && b.addEventListener('click', function () {
      var oscuro = raiz.getAttribute('data-theme') === 'dark' ||
        (!raiz.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
      var nuevo = oscuro ? 'light' : 'dark';
      raiz.setAttribute('data-theme', nuevo);
      try { localStorage.setItem('anb-tema', nuevo); } catch (e) {}
    });
  })();

  function aviso(txt) {
    var t = document.createElement('div');
    t.className = 'copiado'; t.textContent = txt; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }
  function copiar(txt, ok) {
    try {
      navigator.clipboard.writeText(txt).then(function () { aviso(ok || 'Copiado'); },
        function () { aviso('Selecciona el texto y cópialo'); });
    } catch (e) { aviso('Selecciona el texto y cópialo'); }
  }
  window.ANB_UI = { copiar: copiar, aviso: aviso, dis: dis };

  if (!D || !byId('listaServicios')) return;
  var n = D.negocio;

  /* ---- cabecera y enlaces ---- */
  byId('marcaAvatar').innerHTML = N.avatar(34, false);
  byId('heroSub').textContent = n.reclamo + '. ' + n.descripcion;
  byId('heroArte').innerHTML = N.set(D.disenos.filter(function (d) { return d.id === 'bunny'; })[0]);
  ['ctaBarra', 'ctaHero', 'ctaConfig', 'ctaContacto', 'ctaOpiniones'].forEach(function (i) {
    var e = byId(i); if (e) e.href = n.booksy;
  });
  byId('ctaIG').href = n.instagram;
  if (n.tiktok) { var tt = byId('ctaTT'); tt.hidden = false; tt.href = n.tiktok; }
  byId('avisoPrecios').textContent = D.avisoPrecios;

  /* ---- servicios ---- */
  byId('listaServicios').innerHTML = D.servicios.map(function (s) {
    return '<article class="servicio">' +
      '<div class="servicio__top"><h3 style="font-size:1.25rem">' + s.nombre + '</h3>' +
      '<span class="servicio__precio">' + s.precio + ' €</span></div>' +
      '<span class="servicio__meta">' + dis(s.duracion) + (s.destacado ? ' · el más pedido' : '') + '</span>' +
      '<p>' + s.texto + '</p></article>';
  }).join('');

  /* ---- galería ---- */
  var filtroActual = 'todo';
  byId('filtros').innerHTML = D.categorias.map(function (c) {
    return '<button class="chip' + (c.id === 'todo' ? ' activo' : '') + '" data-cat="' + c.id + '" aria-pressed="' + (c.id === 'todo') + '">' + c.nombre + '</button>';
  }).join('');
  function pintarGaleria() {
    byId('galeria').innerHTML = D.disenos.filter(function (d) {
      return filtroActual === 'todo' || d.cat === filtroActual;
    }).map(function (d) {
      return '<button class="pieza" data-id="' + d.id + '">' + N.set(d) +
        '<span class="pieza__txt"><h4>' + d.nombre + '</h4><p>' + d.texto + '</p></span></button>';
    }).join('');
  }
  byId('filtros').addEventListener('click', function (ev) {
    var b = ev.target.closest('.chip'); if (!b) return;
    filtroActual = b.dataset.cat;
    Array.prototype.forEach.call(this.querySelectorAll('.chip'), function (c) {
      var on = c === b; c.classList.toggle('activo', on); c.setAttribute('aria-pressed', on);
    });
    pintarGaleria();
  });
  pintarGaleria();

  var visor = byId('visor');
  byId('galeria').addEventListener('click', function (ev) {
    var p = ev.target.closest('.pieza'); if (!p) return;
    var d = D.disenos.filter(function (x) { return x.id === p.dataset.id; })[0];
    byId('visorArte').innerHTML = N.set(d);
    byId('visorTitulo').textContent = d.nombre;
    byId('visorTexto').textContent = d.texto;
    byId('visorCta').href = n.booksy;
    if (visor.showModal) visor.showModal();
  });
  byId('visorCerrar').addEventListener('click', function () { visor.close(); });

  /* ---- configurador ---- */
  var sSer = byId('selServicio'), sExt = byId('selExtra'), sRet = byId('selRetirada');
  sSer.innerHTML = D.servicios.filter(function (s) { return s.id !== 'retirada'; })
    .map(function (s) { return '<option value="' + s.id + '">' + s.nombre + ' — ' + s.precio + ' €</option>'; }).join('');
  sExt.innerHTML = '<option value="">Sin diseño añadido</option>' +
    D.extras.map(function (e) { return '<option value="' + e.id + '">' + e.nombre + '</option>'; }).join('');
  var retirada = D.servicios.filter(function (s) { return s.id === 'retirada'; })[0];

  function calcula() {
    var s = D.servicios.filter(function (x) { return x.id === sSer.value; })[0];
    var e = D.extras.filter(function (x) { return x.id === sExt.value; })[0];
    var conRet = sRet.value === 'si';
    var precio = s.precio + (conRet ? retirada.precio : 0);
    var mins = s.duracion + (e ? e.duracion : 0) + (conRet ? retirada.duracion : 0);
    byId('resServicio').textContent = s.nombre;
    byId('resPrecio').textContent = s.precio + ' €';
    byId('resExtra').textContent = e ? e.nombre : 'Sin diseño añadido';
    byId('resExtraT').textContent = e ? '+' + e.duracion + ' min · a consultar' : '—';
    byId('filaRetirada').hidden = !conRet;
    byId('resRetirada').textContent = retirada.precio + ' € · +' + retirada.duracion + ' min';
    byId('resTotal').textContent = precio + ' €';
    byId('resTiempo').textContent = dis(mins);
    return s.nombre + (e ? ' + ' + e.nombre : '') + (conRet ? ' + retirada' : '') +
      ' · desde ' + precio + ' € · unos ' + dis(mins);
  }
  [sSer, sExt, sRet].forEach(function (c) { c.addEventListener('change', calcula); });
  calcula();
  byId('btnCopiarCita').addEventListener('click', function () {
    copiar('Hola, me gustaría reservar: ' + calcula() + '.', 'Resumen copiado');
  });

  /* ---- pasos ---- */
  byId('pasos').innerHTML = D.pasos.map(function (p, i) {
    return '<div class="paso"><span class="paso__n">' + (i + 1) + '</span><div>' +
      '<h4>' + p.t + '</h4><p>' + p.d + '</p></div></div>';
  }).join('');

  /* ---- temporada ---- */
  var temp = [
    { id: 'halloween', t: 'Halloween, sin pasarse', d: 'Tres niveles: un detalle discreto en una uña, la versión conejita o el acabado glam en negro, borgoña o verde cromado.' },
    { id: 'navidad', t: 'Navidad y Nochevieja', d: 'Cranberry con oro, verde terciopelo, francesa festiva o nieve elegante. El motivo va en una o dos uñas para que siga sirviendo en enero.' }
  ];
  byId('temporada').innerHTML = temp.map(function (t) {
    var d = D.disenos.filter(function (x) { return x.id === t.id; })[0];
    return '<article class="temporada__card">' + N.set(d) +
      '<div><span class="etiqueta">' + d.cat + '</span><h3>' + t.t + '</h3><p>' + t.d + '</p>' +
      '<a class="btn btn--linea btn--pequeno" style="align-self:flex-start; margin-top:.4rem" href="' + n.booksy + '" target="_blank" rel="noopener">Reservar</a></div></article>';
  }).join('');

  /* ---- faq ---- */
  byId('listaFaq').innerHTML = D.faq.map(function (f) {
    return '<details class="acc"><summary>' + f.p + '</summary><div class="acc__cuerpo">' + f.r + '</div></details>';
  }).join('');

  /* ---- contacto ---- */
  var filas = [];
  filas.push('<p style="color:var(--tinta-suave)">' + n.ciudad + '</p>');
  if (n.direccion) filas.push('<p>' + n.direccion + '</p>');
  if (n.telefono) filas.push('<p><b>Teléfono:</b> ' + n.telefono + '</p>');
  if (n.whatsapp) filas.push('<p><b>WhatsApp:</b> +' + n.whatsapp + '</p>');
  if (n.email) filas.push('<p><b>Email:</b> ' + n.email + '</p>');
  if (n.mapa) filas.push('<p><a href="' + n.mapa + '" target="_blank" rel="noopener">Ver en el mapa</a></p>');
  if (!n.direccion && !n.telefono) filas.push('<p class="nota">Añade dirección, teléfono y enlace al mapa en <code>assets/js/data.js</code> para que aparezcan aquí.</p>');
  byId('datosContacto').innerHTML = filas.join('');
  byId('horario').innerHTML = n.horario.map(function (h) {
    return '<tr><td>' + h.dia + '</td><td style="text-align:right">' + h.horas + '</td></tr>';
  }).join('');
})();
