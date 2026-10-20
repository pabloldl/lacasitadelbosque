# La Casita de El Bosque

Propuesta web no oficial. Landing estática realizada con HTML5, CSS3 y JavaScript vanilla, sin dependencias, Node.js ni compilación.

## Visualizar
Abre `index.html` en cualquier navegador moderno. Todo está incluido localmente: recursos SVG, estilos y JavaScript. No se necesitan instalaciones, conexión para tipografías ni servidor. Los enlaces externos requieren conexión.

## Editar
- Textos y secciones: modifica `index.html`. El contenido se encuentra directamente en HTML.
- Colores y tipografías: cambia las variables de `:root` al principio de `css/style.css`. Se utilizan Georgia y Segoe UI con alternativas del sistema.
- Contacto: busca `644 945 937` y `+34644945937` en HTML; actualiza también el JSON-LD del encabezado.
- Booking y Maps: sustituye sus direcciones en todas las llamadas a la acción. Booking se abre en otra pestaña; la llamada usa exclusivamente el teléfono proporcionado.
- Animaciones y galería: `js/script.js`. La galería utiliza un dialog nativo, Escape, flechas, botones anterior/siguiente y retorno del foco. El menú móvil admite Escape y cierre al navegar.

## Imágenes y derechos
**No se han aportado fotografías auténticas autorizadas. Ninguna imagen es una fotografía del alojamiento ni del entorno real.** No se han descargado recursos de Booking ni de otras viviendas. Los ocho SVG son ilustraciones originales de código, creadas para esta propuesta y guardadas en `img/`. Se identifican como provisionales en la interfaz, textos alternativos y títulos internos.

| Archivo | Condición y uso | Origen y permiso |
| --- | --- | --- |
| refugio.svg | Patio mediterráneo conceptual, portada | Creación original del proyecto; reutilizable en esta propuesta |
| terraza.svg | Terraza conceptual, bienvenida | Creación original del proyecto; reutilizable en esta propuesta |
| dormitorio.svg | Placeholder de dormitorios | Creación original del proyecto; reutilizable en esta propuesta |
| salon.svg | Placeholder de salón | Creación original del proyecto; reutilizable en esta propuesta |
| cocina.svg | Placeholder de cocina/comedor | Creación original del proyecto; reutilizable en esta propuesta |
| exterior.svg | Placeholder de exteriores | Creación original del proyecto; reutilizable en esta propuesta |
| sierra.svg | Paisaje conceptual panorámico; sin localización real | Creación original del proyecto; reutilizable en esta propuesta |
| rio.svg | Paisaje conceptual fluvial; no muestra el Majaceite | Creación original del proyecto; reutilizable en esta propuesta |

No hay imágenes duplicadas; la galería ampliada carga la misma imagen seleccionada, de forma intencionada. SVG se mantiene por tratarse de ilustración vectorial; convertirla a WebP no mejoraría su nitidez ni mantenimiento.

Para sustituir: guarda fotos autorizadas y optimizadas en WebP en `img/`, actualiza `src`, `width`, `height`, `alt` y, en los botones de galería, `data-image` y `data-caption`. Retira los avisos provisionales SOLO después de tener autorización. Actualiza `og:image`. Documenta autor, fuente, licencia/permiso, fecha y cualquier atribución exigida. Usa imágenes de diferentes proporciones y revisa su recorte en móvil.

## Información pendiente de verificar
Los datos proceden del briefing, que los atribuye a fichas públicas; no constituyen una comprobación independiente actualizada. Confirmar con la propiedad:
- Nombre, teléfono, dirección exacta y número de registro turístico aplicable.
- Los Membrillos como dirección proporcionada; el briefing cita el número 8 en Booking, pendiente de confirmación. La web omite el número hasta validarlo.
- Cuatro dormitorios, salón-comedor, cocina equipada, tres baños incluyendo aseo, terraza, Wi-Fi, aire acondicionado y aparcamiento gratuito.
- Piscina exterior de temporada: fechas, acceso y condiciones.
- Admisión y condiciones de mascotas.
- Vigencia de ficha Booking y resultado exacto de la búsqueda en Maps.
- Fotografías autorizadas de fachada, dormitorios, salón, cocina, terraza, piscina y vistas.
No se afirman capacidades, precios, promociones, disponibilidad, opiniones, redes sociales ni políticas de reserva. No se usa WhatsApp.

## Publicar en hosting estático
Sube `index.html`, `css/`, `js/`, `img/` y `favicon.svg` conservando las rutas. No hace falta compilación. Activa HTTPS en tu proveedor. No es necesario publicar README ni .gitignore. Antes de presentar como web oficial, validar los datos con la propiedad y gestionar los textos legales aplicables con los datos reales del titular.

Una vez conocido el dominio definitivo, añadir URL canónica y `og:url`, convertir `og:image` a URL pública absoluta (idealmente foto autorizada JPG/WebP), y completar la URL de la entidad en JSON-LD. Los metadatos sociales actuales son una base local: la previsualización final depende del dominio y de la compatibilidad del crawler con SVG. No se inventa un dominio.

No se utilizan cookies, analítica, formularios ni mapas embebidos. Maps es un enlace externo. La publicación debe revisar si el hosting añade servicios adicionales.

## Validación
Revisiones estáticas: destinos de enlaces, anclas internas, archivos locales, sintaxis XML de SVG, unicidad de imágenes, JSON-LD y .gitignore. Diseño con puntos de adaptación a 1150, 950 y 620 px, estados de foco y prefers-reduced-motion. Sin JavaScript, los textos y navegación siguen disponibles; el lightbox requiere JavaScript.

Pruebas manuales recomendadas antes de publicación: anchos 375/768/1440 px, zoom 200%, menú con teclado, lightbox (Tab, Escape, flechas y retorno del foco), lector de pantalla, carga de imágenes, Booking/Maps y llamada desde móvil. La entrega no implica haber realizado pruebas en navegador si no se ha indicado expresamente.
