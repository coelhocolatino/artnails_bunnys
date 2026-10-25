/* ============================================================
   nails.js — dibuja sets de uñas en SVG (maquetas)
   Sustituye estas maquetas por fotos reales antes de publicar:
   cada tarjeta acepta una imagen propia (ver data.js -> foto).
   ============================================================ */
(function (global) {
  'use strict';

  function semilla(n) {
    var s = (n >>> 0) || 7;
    return function () {
      s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  }

  /* contorno de uña almendrada, origen en el centro de la base */
  function contorno(w, h) {
    var mx = w / 2;
    return 'M' + (-mx) + ',' + h +
      'L' + (-mx) + ',' + (h * 0.38) +
      'C' + (-mx) + ',' + (h * 0.10) + ' ' + (-w * 0.30) + ',0 0,0' +
      'C' + (w * 0.30) + ',0 ' + mx + ',' + (h * 0.10) + ' ' + mx + ',' + (h * 0.38) +
      'L' + mx + ',' + h + 'Z';
  }

  function esc(v) { return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* --- motivos ------------------------------------------------ */
  function motivo(tipo, d, w, h, id, rnd) {
    var mx = w / 2, out = '';
    switch (tipo) {
      case 'french':
        out += '<path d="M' + (-mx) + ',' + (h * 0.30) + ' Q0,' + (h * 0.02) + ' ' + mx + ',' + (h * 0.30) +
               ' L' + mx + ',0 L' + (-mx) + ',0 Z" fill="' + d.acento + '"/>';
        break;
      case 'punta':
        out += '<rect x="' + (-mx) + '" y="0" width="' + w + '" height="' + (h * 0.22) + '" fill="' + d.acento + '"/>';
        break;
      case 'cromo':
        out += '<rect x="' + (-mx) + '" y="0" width="' + w + '" height="' + h + '" fill="url(#cr' + id + ')" opacity=".85"/>';
        break;
      case 'cateye':
        out += '<ellipse cx="0" cy="' + (h * 0.46) + '" rx="' + (w * 0.52) + '" ry="' + (h * 0.12) +
               '" fill="' + d.acento + '" opacity=".75" transform="rotate(-16)"/>' +
               '<ellipse cx="0" cy="' + (h * 0.46) + '" rx="' + (w * 0.30) + '" ry="' + (h * 0.05) +
               '" fill="#fff" opacity=".35" transform="rotate(-16)"/>';
        break;
      case 'lunares':
        for (var i = 0; i < 7; i++) {
          out += '<circle cx="' + ((rnd() - 0.5) * w * 0.8).toFixed(1) + '" cy="' + (h * 0.12 + rnd() * h * 0.78).toFixed(1) +
                 '" r="' + (1.6 + rnd() * 1.8).toFixed(1) + '" fill="' + d.acento + '"/>';
        }
        break;
      case 'estrellas':
        for (var j = 0; j < 4; j++) {
          var ex = (rnd() - 0.5) * w * 0.7, ey = h * 0.15 + rnd() * h * 0.7, r = 3 + rnd() * 2;
          out += '<path d="M' + ex + ',' + (ey - r) + ' L' + (ex + r * 0.3) + ',' + (ey - r * 0.3) +
                 ' L' + (ex + r) + ',' + ey + ' L' + (ex + r * 0.3) + ',' + (ey + r * 0.3) +
                 ' L' + ex + ',' + (ey + r) + ' L' + (ex - r * 0.3) + ',' + (ey + r * 0.3) +
                 ' L' + (ex - r) + ',' + ey + ' L' + (ex - r * 0.3) + ',' + (ey - r * 0.3) + 'Z" fill="' + d.acento + '"/>';
        }
        break;
      case 'purpurina':
        for (var k = 0; k < 26; k++) {
          out += '<circle cx="' + ((rnd() - 0.5) * w).toFixed(1) + '" cy="' + (rnd() * h).toFixed(1) +
                 '" r="' + (0.7 + rnd() * 1.3).toFixed(1) + '" fill="' + d.acento + '" opacity="' + (0.4 + rnd() * 0.6).toFixed(2) + '"/>';
        }
        break;
      case 'telarana':
        out += '<g stroke="' + d.acento + '" stroke-width="1.1" fill="none">' +
               '<path d="M' + mx + ',0 L' + (-mx * 0.2) + ',' + (h * 0.55) + '"/>' +
               '<path d="M' + mx + ',0 L' + (-mx * 0.9) + ',' + (h * 0.22) + '"/>' +
               '<path d="M' + mx + ',0 L' + (mx * 0.1) + ',' + (h * 0.8) + '"/>' +
               '<path d="M' + (mx * 0.75) + ',' + (h * 0.1) + ' Q' + (mx * 0.1) + ',' + (h * 0.3) + ' ' + (-mx * 0.45) + ',' + (h * 0.22) + '"/>' +
               '<path d="M' + (mx * 0.5) + ',' + (h * 0.28) + ' Q' + (-mx * 0.1) + ',' + (h * 0.5) + ' ' + (-mx * 0.3) + ',' + (h * 0.5) + '"/>' +
               '</g>';
        break;
      case 'fantasma':
        out += '<path d="M' + (-w * 0.26) + ',' + (h * 0.62) + ' L' + (-w * 0.26) + ',' + (h * 0.40) +
               ' a' + (w * 0.26) + ',' + (h * 0.17) + ' 0 0 1 ' + (w * 0.52) + ',0 L' + (w * 0.26) + ',' + (h * 0.62) +
               ' l' + (-w * 0.13) + ',' + (-h * 0.05) + ' l' + (-w * 0.13) + ',' + (h * 0.05) +
               ' l' + (-w * 0.13) + ',' + (-h * 0.05) + ' Z" fill="' + d.acento + '"/>' +
               '<circle cx="' + (-w * 0.1) + '" cy="' + (h * 0.44) + '" r="1.7" fill="' + d.base + '"/>' +
               '<circle cx="' + (w * 0.1) + '" cy="' + (h * 0.44) + '" r="1.7" fill="' + d.base + '"/>';
        break;
      case 'copos':
        for (var c = 0; c < 3; c++) {
          var cx = (rnd() - 0.5) * w * 0.6, cy = h * 0.2 + rnd() * h * 0.6, rr = 3.4 + rnd() * 1.6;
          out += '<g stroke="' + d.acento + '" stroke-width="1" stroke-linecap="round">' +
                 '<path d="M' + (cx - rr) + ',' + cy + ' H' + (cx + rr) + '"/>' +
                 '<path d="M' + cx + ',' + (cy - rr) + ' V' + (cy + rr) + '"/>' +
                 '<path d="M' + (cx - rr * .7) + ',' + (cy - rr * .7) + ' L' + (cx + rr * .7) + ',' + (cy + rr * .7) + '"/>' +
                 '<path d="M' + (cx - rr * .7) + ',' + (cy + rr * .7) + ' L' + (cx + rr * .7) + ',' + (cy - rr * .7) + '"/></g>';
        }
        break;
      case 'lazo':
        out += '<g fill="' + d.acento + '" transform="translate(0,' + (h * 0.45) + ')">' +
               '<path d="M0,0 L-9,-6 L-9,6 Z"/><path d="M0,0 L9,-6 L9,6 Z"/><circle cx="0" cy="0" r="2.6"/></g>';
        break;
      case 'conejito':
        out += '<g transform="translate(0,' + (h * 0.48) + ')">' +
               '<ellipse cx="-4.6" cy="-9" rx="2.6" ry="7" fill="' + d.acento + '"/>' +
               '<ellipse cx="4.6" cy="-9" rx="2.6" ry="7" fill="' + d.acento + '"/>' +
               '<ellipse cx="-4.6" cy="-9" rx="1.1" ry="4.6" fill="' + d.base + '" opacity=".55"/>' +
               '<ellipse cx="4.6" cy="-9" rx="1.1" ry="4.6" fill="' + d.base + '" opacity=".55"/>' +
               '<circle cx="0" cy="0" r="7.2" fill="' + d.acento + '"/>' +
               '<circle cx="-2.4" cy="-.8" r="1" fill="' + d.base + '"/>' +
               '<circle cx="2.4" cy="-.8" r="1" fill="' + d.base + '"/>' +
               '<path d="M-1.6,2 Q0,3.4 1.6,2" stroke="' + d.base + '" stroke-width=".9" fill="none"/></g>';
        break;
      case 'rayas':
        for (var s = 0; s < 4; s++) {
          out += '<rect x="' + (-mx) + '" y="' + (h * (0.18 + s * 0.18)) + '" width="' + w + '" height="2.2" fill="' + d.acento + '" opacity=".9"/>';
        }
        break;
      case 'marmol':
        out += '<path d="M' + (-mx) + ',' + (h * .7) + ' Q' + (-w * .1) + ',' + (h * .45) + ' ' + (w * .1) + ',' + (h * .62) +
               ' T' + mx + ',' + (h * .35) + '" stroke="' + d.acento + '" stroke-width="1.6" fill="none" opacity=".9"/>' +
               '<path d="M' + (-mx) + ',' + (h * .3) + ' Q' + (-w * .05) + ',' + (h * .12) + ' ' + mx + ',' + (h * .25) +
               '" stroke="' + d.acento + '" stroke-width="1" fill="none" opacity=".6"/>';
        break;
    }
    return out;
  }

  /* --- set completo ------------------------------------------- */
  function set(d, opciones) {
    var o = opciones || {};
    var rnd = semilla(d.semilla || 11);
    var id = (d.id || 'x').replace(/[^a-z0-9]/gi, '');
    var ratio = o.ratio || 'h';
    var W = 300, H = ratio === 'v' ? 560 : (ratio === 'c' ? 300 : 210);
    var dy = (H - 210) / 2;
    var w = 42, h = 84, hueco = 9;
    var escalas = [0.78, 0.92, 1, 0.93, 0.74];
    var giros = [-15, -7, 0, 7, 16];
    var altos = [30, 14, 6, 16, 36];
    var total = 5 * w + 4 * hueco;
    var x0 = (W - total) / 2 + w / 2;

    var defs = '<defs>' +
      '<linearGradient id="g' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + d.brillo + '"/><stop offset=".55" stop-color="' + d.base + '"/>' +
      '<stop offset="1" stop-color="' + (d.sombra || d.base) + '"/></linearGradient>' +
      '<linearGradient id="cr' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#EBD9E4"/><stop offset=".3" stop-color="#BDD4E6"/>' +
      '<stop offset=".55" stop-color="#A8D8CC"/><stop offset=".78" stop-color="#F0C9D7"/>' +
      '<stop offset="1" stop-color="#D6C7E8"/></linearGradient>';

    var cuerpo = '';
    for (var i = 0; i < 5; i++) {
      var cx = x0 + i * (w + hueco), cy = 54 + altos[i] + dy, e = escalas[i];
      var tipo = (d.especial && d.especial[i]) ? d.especial[i] : d.motivo;
      var cid = 'c' + id + i;
      defs += '<clipPath id="' + cid + '"><path d="' + contorno(w, h) + '"/></clipPath>';
      cuerpo += '<g transform="translate(' + cx.toFixed(1) + ',' + cy + ') rotate(' + giros[i] + ') scale(' + e + ')">' +
        '<path d="' + contorno(w, h) + '" fill="url(#g' + id + ')"/>' +
        '<g clip-path="url(#' + cid + ')">' + motivo(tipo, d, w, h, id, rnd) +
        '<ellipse cx="' + (-w * 0.18) + '" cy="' + (h * 0.3) + '" rx="' + (w * 0.17) + '" ry="' + (h * 0.3) +
        '" fill="#fff" opacity=".22" transform="rotate(-10)"/>' +
        '<ellipse cx="0" cy="' + (h * 1.02) + '" rx="' + (w * 0.6) + '" ry="' + (h * 0.14) + '" fill="#000" opacity=".10"/>' +
        '</g>' +
        '<path d="' + contorno(w, h) + '" fill="none" stroke="rgba(0,0,0,.14)" stroke-width="1"/>' +
        '</g>';
    }
    defs += '</defs>';

    return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(d.nombre) + '" ' +
      (o.cubrir ? 'preserveAspectRatio="xMidYMid slice" ' : '') +
      (o.clase ? 'class="' + o.clase + '" ' : '') + 'xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="' + (d.fondo || '#F4E7EC') + '"/>' +
      defs + cuerpo + '</svg>';
  }

  /* --- avatar conejita (recreación, no es el logo original) ----- */
  function avatar(tam, aro) {
    var t = tam || 92;
    var anillo = aro === false ? '' :
      '<circle cx="50" cy="50" r="48" fill="none" stroke="url(#aro)" stroke-width="3.5"/>';
    return '<svg viewBox="0 0 100 100" width="' + t + '" height="' + t + '" aria-label="Avatar Art Nails Bunny\'s" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="aro" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#F7C948"/><stop offset=".35" stop-color="#E0457B"/>' +
      '<stop offset=".7" stop-color="#8A4FE0"/><stop offset="1" stop-color="#44B8C9"/></linearGradient></defs>' +
      anillo +
      '<circle cx="50" cy="50" r="42" fill="#FBEFF2"/>' +
      '<ellipse cx="38" cy="30" rx="6.5" ry="16" fill="#fff" stroke="#2A1A22" stroke-width="2"/>' +
      '<ellipse cx="62" cy="30" rx="6.5" ry="16" fill="#fff" stroke="#2A1A22" stroke-width="2"/>' +
      '<ellipse cx="38" cy="31" rx="2.8" ry="10" fill="#F3B6C6"/>' +
      '<ellipse cx="62" cy="31" rx="2.8" ry="10" fill="#F3B6C6"/>' +
      '<circle cx="50" cy="58" r="20" fill="#fff" stroke="#2A1A22" stroke-width="2"/>' +
      '<circle cx="43" cy="55" r="2.4" fill="#2A1A22"/><circle cx="57" cy="55" r="2.4" fill="#2A1A22"/>' +
      '<path d="M47,62 h6 l-3,3 z" fill="#E0457B"/>' +
      '<path d="M44,67 q6,4 12,0" stroke="#2A1A22" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
      '<circle cx="36" cy="62" r="3.4" fill="#F7C9D5" opacity=".9"/>' +
      '<circle cx="64" cy="62" r="3.4" fill="#F7C9D5" opacity=".9"/>' +
      '</svg>';
  }

  global.ANB_NAILS = { set: set, avatar: avatar };
})(window);
