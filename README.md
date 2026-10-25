# Art Nails Bunny's — web, plan de marketing y maquetas

Proyecto estático (HTML, CSS y JavaScript sin dependencias) listo para publicar en GitHub Pages.

| Página | Qué es |
|---|---|
| `index.html` | Web pública del estudio: servicios, galería de diseños, configurador de cita, dudas y contacto. |
| `plan.html` | Plan de marketing y publicidad de 90 días, con calendario marcable y dos calculadoras. |
| `mockups.html` | Maquetas a tamaño de móvil de los perfiles de Instagram y TikTok. |

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo `artnails-bunnys`).
2. Sube el contenido de esta carpeta a la rama `main`, con `index.html` en la raíz.
3. En *Settings → Pages*, elige *Deploy from a branch* → `main` / `/ (root)`.
4. En dos o tres minutos estará en `https://TU-USUARIO.github.io/artnails-bunnys/`.

Con Git desde la terminal:

```bash
git init
git add .
git commit -m "Web, plan de marketing y maquetas de Art Nails Bunny's"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/artnails-bunnys.git
git push -u origin main
```

El archivo `.nojekyll` ya está incluido para que GitHub sirva los archivos tal cual.

## Qué editar

Casi todo el contenido vive en **`assets/js/data.js`**: datos del negocio, enlaces, servicios, diseños de la galería, pasos, preguntas frecuentes, textos listos para publicar y las cifras de las maquetas. No hace falta tocar el HTML para cambiar un precio o añadir un diseño.

### Pendiente de completar antes de publicar

- [ ] Enlace exacto de la ficha de Booksy (`negocio.booksy`).
- [ ] Teléfono, WhatsApp, dirección o zona de atención, correo y enlace de Google Maps. Si se dejan vacíos no se muestran.
- [ ] Horario real en `negocio.horario`.
- [ ] Usuario de TikTok cuando la cuenta esté abierta (`negocio.tiktok`).
- [ ] Confirmar precios y duraciones con la ficha de Booksy del día.
- [ ] Sustituir las ilustraciones por fotos propias (ver abajo).
- [ ] Sustituir el avatar de la maqueta por el archivo original del logo.

## Sustituir las maquetas por fotos reales

Las uñas que se ven son dibujos vectoriales generados por `assets/js/nails.js`: sirven para decidir la composición, no para publicar. Para usar fotos:

1. Guarda las imágenes en `assets/img/` (cuadradas para la galería, verticales 9:16 para portadas).
2. Añade el campo `foto` al diseño correspondiente en `data.js`, por ejemplo:
   ```js
   { id:"gelrosa", nombre:"Gel rosa cristal", cat:"gel", foto:"assets/img/gel-rosa.jpg", ... }
   ```
3. En `assets/js/site.js`, dentro de `pintarGaleria`, usa la foto cuando exista:
   ```js
   var arte = d.foto ? '<img src="' + d.foto + '" alt="' + d.nombre + '" loading="lazy">' : N.set(d);
   ```

Optimiza las fotos antes de subirlas (ancho máximo 1200 px, formato `.webp` o `.jpg`) para que el sitio cargue rápido en móvil.

## Detalles técnicos

- Sin dependencias ni proceso de compilación: se abre con doble clic y funciona.
- Tema claro y oscuro automático, con botón para forzarlo. La preferencia se guarda en el navegador.
- El progreso del calendario de 90 días se guarda en `localStorage`: es de ese navegador, no se comparte entre dispositivos.
- Tipografías Gloock y Karla desde Google Fonts, con alternativas del sistema si no cargan.
- Probado a 390 px de ancho: no hay desplazamiento horizontal.

## Normas editoriales

No publiques testimonios inventados, fotos de clientas sin permiso, promesas de duración ni ofertas que no estén activas en Booksy. Las opiniones se enlazan a su fuente verificada en lugar de copiarse.

---

Última actualización del contenido: 26 de octubre de 2026.
