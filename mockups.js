/* mockups.js — dibuja las maquetas de Instagram y TikTok */
(function () {
  'use strict';
  var D = window.ANB, N = window.ANB_NAILS;
  if (!D || !document.getElementById('igPerfil')) return;
  var byId = function (i) { return document.getElementById(i); };
  var dis = function (id) { return D.disenos.filter(function (d) { return d.id === id; })[0]; };

  var ICO = {
    corazon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-7-4.6-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.6C19 15.4 12 20 12 20z"/></svg>',
    globo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 12a7.3 7.3 0 0 1-7.6 7.2c-1 0-2-.2-2.9-.5L5 20l1.4-3.6A7 7 0 0 1 4.6 12 7.3 7.3 0 0 1 12.2 4.8 7.3 7.3 0 0 1 20 12z"/></svg>',
    avion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 4 3 11l7 2.6L13 21z"/><path d="M10 13.6 21 4"/></svg>',
    marca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3h12v18l-6-4.6L6 21z"/></svg>',
    casa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 11 12 4l8 7v9H4z"/></svg>',
    lupa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>',
    mas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 9v6M9 12h6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 9 5 3-5 3z"/></svg>',
    persona: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c1.2-3.6 4-5.2 7-5.2s5.8 1.6 7 5.2"/></svg>',
    cuadricula: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>',
    etiqueta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16v12H4z"/><circle cx="12" cy="13" r="2.6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    nota: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="7" cy="17" r="2.6"/><path d="M9.6 17V6l8 -1.6V14"/><circle cx="17.6" cy="14" r="2.6"/></svg>'
  };
  function ico(n, t) { return ICO[n].replace('<svg', '<svg width="' + (t || 20) + '" height="' + (t || 20) + '"'); }
  var estado = '<div class="estado"><span>20:14</span><span>&#9679;&#9679;&#9679; &#9601;&#9603;&#9605;</span></div>';

  /* ---------- Instagram: perfil ---------- */
  var p = D.perfilIG;
  byId('igPerfil').innerHTML =
    '<div class="isla"></div>' + estado +
    '<div class="ig__barra"><span class="ig__usuario">' + p.usuario + ' &#9662;</span>' +
    '<span style="display:flex; gap:12px; color:#111">' + ico('mas', 19) + ico('menu', 19) + '</span></div>' +
    '<div class="ig__cuerpo">' +
      '<div class="ig__perfil">' + N.avatar(76) +
        '<div class="ig__nums">' +
          '<div><b>' + p.publicaciones + '</b><span>publicaciones</span></div>' +
          '<div><b>' + p.seguidores + '</b><span>seguidores</span></div>' +
          '<div><b>' + p.seguidos + '</b><span>seguidos</span></div>' +
        '</div></div>' +
      '<div class="ig__bio"><b>' + p.nombre + '</b>' +
        '<span style="color:#737373; font-size:10px">' + p.categoria + '</span>\n' + p.bio +
        '\n<span class="ig__enlace">' + p.enlace + '</span></div>' +
      '<div class="ig__botones"><span class="ig__btn ig__btn--pri">Reservar</span>' +
        '<span class="ig__btn">Seguir</span><span class="ig__btn">Mensaje</span></div>' +
      '<div class="ig__dest">' + p.destacados.map(function (d, i) {
        return '<div><i>' + N.set(D.disenos[i + 2], {ratio:'c', cubrir:true}) + '</i><span>' + d + '</span></div>';
      }).join('') + '</div>' +
      '<div class="ig__tabs"><div class="on">' + ico('cuadricula', 17) + '</div><div>' + ico('play', 17) + '</div><div>' + ico('etiqueta', 17) + '</div></div>' +
      '<div class="ig__grid">' + D.rejillaIG.map(function (id) { return '<div>' + N.set(dis(id), {ratio:'c', cubrir:true}) + '</div>'; }).join('') + '</div>' +
    '</div>' +
    '<div class="ig__pie" style="color:#111">' + ico('casa') + ico('lupa') + ico('mas') + ico('play') + ico('persona') + '</div>';

  /* ---------- Instagram: historia ---------- */
  byId('igStory').innerHTML =
    '<div class="lleno">' + N.set(dis('velvet'), {ratio:'v', cubrir:true}) + '</div><div class="velo"></div>' +
    '<div class="isla"></div>' +
    '<div class="story__barras"><i class="on"></i><i></i><i></i></div>' +
    '<div class="story__cab">' + N.avatar(26, false) + '<span>' + p.usuario + '</span><span style="font-weight:400; opacity:.7">2 h</span></div>' +
    '<div class="sticker"><b>Huecos esta semana</b><ul>' +
      '<li>Miércoles · 16:30</li><li>Jueves · 11:00 y 19:00</li><li>Sábado · 10:00</li></ul>' +
      '<span style="display:block; margin-top:7px; font-size:10px; color:#6E5460">Se reservan por orden de llegada</span></div>' +
    '<div class="story__cta">Reservar &#8599;</div>';

  /* ---------- Instagram: reel ---------- */
  byId('igReel').innerHTML =
    '<div class="lleno">' + N.set(dis('cromo'), {ratio:'v', cubrir:true}) + '</div><div class="velo"></div>' +
    '<div class="isla"></div>' +
    '<div class="story__cab" style="justify-content:space-between"><span>Reels</span><span>' + ico('mas', 18) + '</span></div>' +
    '<div class="reel__txt"><b>' + p.usuario + ' · Seguir</b>' +
      '<p>Cromo perla sobre base lechosa 🤍 Tres pasos y el acabado espejo que más dura.<br>Uñas de gel y nail art en Vigo. Reserva en Booksy.</p>' +
      '<span class="sonido">' + ico('nota', 13) + 'sonido original · artnails_bunny.s</span></div>' +
    '<div class="rail">' +
      '<div>' + ICO.corazon + '<span>842</span></div>' +
      '<div>' + ICO.globo + '<span>37</span></div>' +
      '<div>' + ICO.avion + '<span>64</span></div>' +
      '<div>' + ICO.marca + '<span>119</span></div></div>';

  /* ---------- TikTok: perfil ---------- */
  var t = D.perfilTT;
  byId('ttPerfil').innerHTML =
    '<div class="isla"></div>' + estado.replace('class="estado"', 'class="estado" style="color:#fff"') +
    '<div class="tt__barra"><span>&#8249;</span><span>' + t.usuario + '</span><span>' + ico('menu', 18) + '</span></div>' +
    '<div class="tt__perfil">' + N.avatar(70, false) +
      '<span class="tt__user">@' + t.usuario + '</span>' +
      '<div class="tt__nums">' +
        '<div><b>' + t.seguidos + '</b><span>Siguiendo</span></div>' +
        '<div><b>' + t.seguidores + '</b><span>Seguidores</span></div>' +
        '<div><b>' + t.megusta + '</b><span>Me gusta</span></div></div>' +
      '<div class="tt__acc"><span class="tt__btn">Reservar cita</span><span class="tt__btn tt__btn--sec">&#9825;</span></div>' +
      '<p class="tt__bio">' + t.bio + '</p>' +
      '<p style="font-size:10px; color:#7FD0AE; margin-top:4px">' + t.enlace + '</p>' +
      '<div class="tt__tabs"><div class="on">Vídeos</div><div>Fijados</div><div>Me gusta</div></div>' +
    '</div>' +
    '<div class="tt__grid">' + D.videosTT.map(function (v) {
      return '<div>' + N.set(dis(v.d), {ratio:'v', cubrir:true}) + '<span class="tt__vistas">&#9654; ' + v.vistas + '</span></div>';
    }).join('') + '</div>' +
    '<div class="tt__pie">' + ['Inicio', 'Buscar', '+', 'Bandeja', 'Perfil'].map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>';

  /* ---------- TikTok: vídeo ---------- */
  byId('ttVideo').innerHTML =
    '<div class="lleno">' + N.set(dis('chocolate'), {ratio:'v', cubrir:true}) + '</div><div class="velo"></div>' +
    '<div class="isla"></div>' +
    '<div class="story__cab" style="justify-content:center; gap:16px"><span style="opacity:.6">Siguiendo</span><span>Para ti</span></div>' +
    '<div style="position:absolute; top:34%; left:0; right:0; text-align:center; z-index:3; color:#fff; font-family:Gloock,Georgia,serif; font-size:22px; text-shadow:0 2px 10px rgba(0,0,0,.6)">Chocolate mocha<br><span style="font-family:Karla,sans-serif; font-size:11px; letter-spacing:.2em; text-transform:uppercase">paso a paso</span></div>' +
    '<div class="reel__txt"><b>@' + t.usuario + '</b>' +
      '<p>El marrón espresso de la temporada, en uña corta y cuadrada.<br>#uñasvigo #nailartvigo #uñasdegel #vigo</p>' +
      '<span class="sonido">' + ico('nota', 13) + 'sonido original · Art Nails Bunny\'s</span></div>' +
    '<div class="rail">' + N.avatar(36, false) +
      '<div>' + ICO.corazon + '<span>3.108</span></div>' +
      '<div>' + ICO.globo + '<span>96</span></div>' +
      '<div>' + ICO.marca + '<span>402</span></div>' +
      '<div>' + ICO.avion + '<span>151</span></div></div>';

  /* ---------- portadas ---------- */
  var portadas = [
    { d: 'gelrosa', t: 'Set de la semana' }, { d: 'halloween', t: 'Antes y después' },
    { d: 'estrellas', t: 'Elige tu color' }, { d: 'navidad', t: 'Nail art en Vigo' },
    { d: 'nieve', t: 'Huecos disponibles' }
  ];
  byId('cubiertas').innerHTML = portadas.map(function (c) {
    return '<div class="cubierta">' + N.set(dis(c.d), {ratio:'v', cubrir:true}) + '<span>' + c.t + '</span></div>';
  }).join('');
})();
