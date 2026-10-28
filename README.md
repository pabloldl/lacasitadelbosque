# La Casita de El Bosque

Web estática local de alojamiento rural. HTML5, CSS3 y JavaScript vanilla, compatible con Live Server y apertura directa de index.html. Sin dependencias, compilación ni despliegue. Propuesta no oficial.

## Revisión fotográfica — 28 de octubre de 2026

Se revisaron los archivos locales, incluidos los ocultos fuera de .git. Solo existen dos JPEG de la misma panorámica del pueblo; no hay originales de la vivienda ni documentos nuevos de autorización. Las ilustraciones SVG antiguas están guardadas, pero no aparecen en el HTML ni en el manifiesto de fotografías.

La apertura directa de https://www.booking.com/hotel/es/la-casita-de-el-bosque.es.html volvió a devolver una verificación de JavaScript. El contenido indexado identifica el alojamiento de 8 Los Membrillos y fotografías de exterior, salón, dormitorios y baño. No se eludió la verificación ni se descargaron fotografías protegidas. No hay permiso documentado para republicarlas.

**Para continuar hacen falta los archivos originales y su autorización, no otro rediseño.** El hero, la galería de proporciones variadas, los filtros y el visor ya están preparados. No se ha incorporado ninguna fotografía nueva ni se considera terminada la corrección fotográfica.

Material mínimo que debe facilitar el titular:

1. Una foto horizontal del exterior o estancia principal para el hero, preferiblemente de 2400 px de ancho o más.
2. Una foto distinta del salón y una de la cocina.
3. Una foto de cada dormitorio que quiera mostrar, identificando cuál es cada uno.
4. Fotografías de los baños y el aseo, identificados.
5. Terraza, jardín o piscina únicamente si quiere mostrarlos y puede confirmar qué espacio y tipo de acceso representan.
6. Autor y confirmación de que dispone de los derechos y autoriza la publicación de esos archivos en esta web. Si son de un fotógrafo, aportar el permiso correspondiente. Una captura de Booking o el enlace de su ficha no sustituyen los originales ni el permiso.

Puede facilitar JPG, PNG o WebP sin necesidad de convertirlos previamente. Al recibirlos se comprobarán formato real, decodificación y duplicados, se optimizarán y se configurará el encuadre por imagen. La incorporación se hará en la lista propertyPhotos de js/script.js, con los campos descritos más abajo; no es necesario crear un proyecto o una galería nuevos. No se cargarán rutas antes de que existan los archivos.

En esta revisión se ejecutó node --check del JavaScript y se comprobaron rutas y anclas del HTML. No se repitieron pruebas de navegador ni de recorte: no hay fotos nuevas de la casa que comprobar. Las pruebas en cuatro anchos descritas al final corresponden al trabajo del 27 de octubre, no a fotografías incorporadas hoy. No se realizó despliegue ni actualización de GitHub en esta revisión.

## Rediseño visual para fotografía — 27 de octubre de 2026
Se sustituyeron HTML, estilos y JavaScript de la presentación anterior. La nueva estructura contiene aproximadamente 320 palabras visibles: cabecera ligera que cambia al desplazar, hero preparado para una fotografía grande con texto fuera de la imagen, presentación breve, recorrido horizontal de formatos distintos, detalles compactos, panorama del entorno, estancia y un footer nuevo. Tipografía Aptos/Segoe UI, paleta cálida, controles sencillos y composición de imágenes de borde amplio. Se retiraron las tarjetas extensas, la navegación secundaria y el acceso flotante de la versión anterior. No se leyeron ni reutilizaron componentes de otras webs.

La galería preparada combina formatos panorámicos, verticales y detalles, con scroll-snap nativo, botones anterior/siguiente, filtros generados a partir de categorías reales y visor ampliado. No hay reproducción automática, parallax ni control del scroll de la página. Los revelados de imagen son puntuales, mediante máscaras suaves; el contenido es visible por defecto y no depende de que una animación se ejecute.

No quedan ilustraciones de habitaciones, paisajes o mapas en la interfaz. Los SVG previos se conservan sin uso en img/; el favicon y los iconos funcionales no representan instalaciones.

## Estado de las fotografías: pendiente de material de la vivienda
**No se han recibido fotografías del alojamiento con autorización. El rediseño no se entrega como una web fotográfica terminada de la propiedad.**

El objetivo de 70 % fotografía y una portada inmersiva de la casa **sigue sin alcanzarse en la página actual por falta de material autorizado**. Se comprobó el funcionamiento de esa estructura con una prueba temporal aislada, que no forma parte de la web entregada. La panorámica del pueblo no se utiliza como sustituta de la casa en el hero, la galería ni el footer.

Se volvió a investigar la ficha de Booking y fuentes públicas por el nombre exacto y la dirección. La ficha corresponde a 8 Los Membrillos, El Bosque, y tiene fotografías de fachada, dormitorios, baño, piscina y salón. No se encontró licencia de reutilización o permiso del titular. La lectura directa de Booking durante la investigación anterior requería verificación JavaScript; se contrastó su contenido indexado sin sortear controles. No se copió ni enlazó como imagen ningún archivo de Booking. No confundir esta casa con «Mi casita del Bosque», de otra dirección y distribución.

Mientras no haya permiso, el hero no presenta una foto ajena ni una ilustración. La sección de fotografías muestra un acceso real a Booking y la información de espacios. No se ven recuadros vacíos ni archivos de imagen rotos. La fotografía del pueblo aparece únicamente en la sección del entorno, con su identidad y atribución visibles; no se presenta como fachada, instalación ni vista desde la casa.

### Archivos que debe aportar el propietario
Entregar originales JPG, PNG o WebP con identificación del espacio, nombre del autor, origen y autorización para publicar en esta web otorgada por quien tenga los derechos. Preferible ancho de 2400 px o superior, sin compresión de mensajería. Los nombres siguientes son destinos propuestos; no existen todavía:

| Destino | Contenido requerido |
| --- | --- |
| img/fachada.webp | Fachada o entrada, para el hero |
| img/salon.webp | Vista general del salón |
| img/dormitorio-01.webp a dormitorio-04.webp | Una vista identificada de cada dormitorio |
| img/cocina.webp | Cocina real |
| img/bano-01.webp, img/bano-02.webp, img/aseo.webp | Baños y aseo identificados |
| img/terraza.webp | Terraza |
| img/jardin.webp | Jardín, indicando si es privado o compartido |
| img/piscina.webp | Piscina, con tipo de acceso y temporada confirmados |

Antes de integrarlas: comprobar firma de archivo y decodificación, orientación y dimensiones; optimizar en WebP/JPEG; comparar duplicados y evitar usar la misma fotografía en hero y galería; registrar fuente, autor, permiso, fecha y transformaciones. Revisar recortes y elementos importantes en los cuatro anchos.

### Integración ya preparada
En js/script.js, propertyPhotos es una lista vacía. Añadir únicamente material autorizado, usando entradas con src local (dentro de img/), alt real, title, width, height, use ('hero' o 'gallery') y permission (referencia al permiso documentado en este README). Se rechazan entradas incompletas y rutas repetidas. El campo permission es un registro de mantenimiento, no una verificación automática de derechos.

Campos opcionales: category identifica el espacio real y genera filtros; format admite wide, portrait o detail para las distintas proporciones; position es la posición CSS del encuadre (por ejemplo 50% 40%). Comprobarla con cada fotografía real en móvil y escritorio. Nunca deducir un espacio de una imagen sin verificarlo.

El código construye las imágenes con nodos DOM, carga prioritaria en hero y carga diferida en galería. No solicita rutas ficticias. El hero se muestra al cargar; un error lo oculta. La galería conserva el orden del material, retira imágenes que fallen y mantiene el enlace de Booking si ninguna carga. Los controles se ocultan cuando no hay imágenes. El visor admite cierre, anterior/siguiente, Escape, flechas, gesto horizontal táctil y retorno del foco. Muestra el progreso y un aviso si falla la imagen ampliada. La preferencia de movimiento reducido desactiva transiciones y animaciones.

Una fotografía de hero no se reutiliza en la galería. Al incorporar material, actualizar también og:image y su alt; hoy se omiten porque no hay foto de portada autorizada. No utilizar la panorámica del pueblo como imagen social de la propiedad.

## Fotografía incorporada: entorno real

| Archivo | Dimensiones reales | Tamaño | Formato y uso |
| --- | --- | --- | --- |
| img/el-bosque-1600.jpg | 1600 × 418 | 179698 bytes | JPEG, vista panorámica del pueblo |
| img/el-bosque-800.jpg | 800 × 209 | 48062 bytes | JPEG, variante responsive de la misma foto |

- Autor: **Antonio Acosta Fernández**.
- Obra: El Bosque Lomo de Enmedio.JPG, 21 de mayo de 2011.
- Fuente y permiso: https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG
- Licencia elegida: **CC BY 3.0**, https://creativecommons.org/licenses/by/3.0/
- Descarga: miniatura de 1920 px servida por thumb.wikimedia.org. La descarga directa de otra imagen candidata dio HTTP 429; esa imagen no se utiliza. No se guardó una página HTML como JPEG.
- Transformaciones: decodificación con System.Drawing, reducción bicúbica y compresión JPEG calidad 84, sin filtros cromáticos. El encuadre CSS cambia en móvil sin deformación.
- Se verificaron firma JPEG FF-D8-FF, dimensiones, decodificación y visualización en Chrome. La atribución, enlace de fuente, licencia y aviso de cambios figuran bajo la foto.
- Son dos resoluciones de una sola imagen usadas con srcset, no dos fotografías de espacios diferentes.
- SHA-256 de 1600 px: 2D6B22190B201383A329897DA3B96905620599D1E0A3E94CE23EDC0C6E7E54B8.
- SHA-256 de 800 px: AA0451DC321C2F171FF9E5BDE40D3C19DD70381CC179205237D0A2CBF1F53EA1.

## Información y fuentes
Consulta realizada el 27 de octubre de 2026 mediante resultados indexados de las propias fichas:

- https://www.booking.com/hotel/es/la-casita-de-el-bosque.es.html : nombre, 8 Los Membrillos, El Bosque; cuatro dormitorios, cocina, sala de estar, tres baños publicados, terraza y jardín; Wi-Fi, aire acondicionado, parking gratuito, piscina exterior de temporada y mascotas con posibles suplementos. No se afirma que piscina, jardín o aparcamiento sean privados.
- La descripción de la anfitriona en esa misma ficha detalla dos baños y un aseo y señala que se habilitan habitaciones según las personas de la reserva. Por eso se recomienda confirmar la distribución y no se promete acceso incondicional a los cuatro dormitorios.
- https://www.booking.com/hotel/es/la-casita-de-el-bosque.es-ar.html : contraste de la identidad y datos del alojamiento.
- https://aseci.es/la-casita-de-el-bosque/ atribuye el teléfono 644945937; https://24handalucia.es/directorio/cadiz/empresa/la-casita-de-el-bosque atribuye otro número. **Se retira el teléfono anterior de la interfaz y del JSON-LD por falta de confirmación directa y por esta discrepancia.** No se sustituye por otro número ni se inventa WhatsApp/email. El contacto se dirige a la ficha de reserva.

Se conserva exactamente el enlace de Booking del proyecto. Todos los botones de consulta y fotografías apuntan a esa ficha, que abre en otra pestaña; no se promete una galería concreta abierta automáticamente. No se hicieron reservas, llamadas ni contactos. Maps conserva una búsqueda por nombre, identificada como tal; no se presenta como ubicación cartográfica confirmada. No se publican precios, disponibilidad, puntuaciones, opiniones o distancias.

## Comprobaciones ejecutadas
- Rutas relativas y anclas internas, identificadores únicos, JSON-LD y node --check del JavaScript.
- Chrome headless/CDP en 375, 768, 1440 y 1920 px: sin desbordamiento horizontal, sin anclas rotas, fotografía del entorno cargada y destinos de Booking coherentes.
- Capturas completas de la página actual a 375 y 1440 px inspeccionadas visualmente. Captura de la estructura fotográfica de ensayo a 1440 px inspeccionada.
- Menú móvil: abrir, Escape y cierre; desplegable de condiciones; contenido y navegación sin JavaScript; prefers-reduced-motion con desplazamiento automático en vez de suave.
- Galería preparada: comprobada con una página temporal aislada, usando la imagen del pueblo rotulada como ENSAYO y sin atribuirla a la vivienda. Se utilizaron variantes de URL del mismo archivo solo para probar varios formatos y categorías. No se añadieron esas entradas a propertyPhotos de producción.
- En ese ensayo se verificaron los cuatro anchos, hero visible, cuatro fotos cargadas, filtro de categoría (dos visibles), desplazamiento con siguiente, ampliación, teclado (contador 2/4), gesto táctil emulado mediante Chrome CDP (contador 3/4), Escape y foco de vuelta al botón. La prueba táctil emulada no equivale a probar Safari o un dispositivo físico.
- Prueba temporal de ruta inexistente: se ocultan galería y controles vacíos y se recupera el enlace a Booking. Se eliminaron todas las páginas, capturas y perfiles de ensayo tras las comprobaciones.
- Sin excepciones JavaScript durante estas comprobaciones.

No se probó Safari ni un iPhone físico: no estaban disponibles. No se verificó el proceso de reserva ni el contenido de Booking mediante un navegador interactivo: su identidad y datos se contrastaron con resultados indexados. Las fotografías de la casa, sus recortes y su autorización siguen pendientes.

## Auditoría del resultado actual
- Texto reducido y estructura nueva: realizado.
- Header, botones, footer y adaptación móvil nuevos: realizado.
- Recorrido fotográfico, formatos variados, filtros y visor: implementados y probados con material aislado de ensayo; no contienen todavía fotos reales de la vivienda.
- Fotografía auténtica autorizada: se conserva únicamente la del entorno y su atribución.
- Hero de la casa, protagonismo de sus fotografías y galería real: pendientes de archivos y permiso de publicación. No se presentan como completados.

## Mantenimiento
Textos y enlaces: index.html. Diseño y responsive: css/style.css. Menú, estado de navegación y galería: js/script.js. No hay frameworks, paquetes instalados, formularios, calendarios, cookies, analítica ni mapas embebidos. Sin configuración de hosting. Antes de presentar como oficial, confirmar los datos con la propiedad, incorporar fotos autorizadas y completar los datos legales reales.
