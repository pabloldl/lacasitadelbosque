'use strict';

// Fotografías locales aportadas por el usuario e incorporación solicitada el 28/10/2026.
// {src:'img/...', alt, title, category, width, height,
//  use:'hero'|'gallery', format:'wide'|'portrait'|'detail', position:'50% 50%', permission:'referencia en README'}
const propertyPhotos = [
  { src: 'img/349875923.jpg', alt: 'Terraza de La Casita de El Bosque con mesa y sillas rojas y vistas hacia la piscina', title: 'La terraza', category: 'Exterior', width: 1024, height: 768, use: 'hero', position: '50% 50%', permission: 'Imagen aportada por el usuario; incorporación solicitada el 28/10/2026.' },
  { src: 'img/349116675.jpg', alt: 'Fachada blanca de La Casita de El Bosque con balcón, entrada y pérgola de madera', title: 'El exterior de la casa', category: 'Exterior', width: 576, height: 768, use: 'gallery', format: 'portrait', position: '50% 50%', permission: 'Imagen aportada por el usuario; incorporación solicitada el 28/10/2026.' },
  { src: 'img/349116756.jpg', alt: 'Salón con sofás naranjas, mesa de cristal, televisión y chimenea', title: 'El salón', category: 'Salón', width: 1024, height: 768, use: 'gallery', format: 'wide', position: '50% 50%', permission: 'Imagen aportada por el usuario; incorporación solicitada el 28/10/2026.' },
  { src: 'img/349116758.jpg', alt: 'Dormitorio con cama doble, ventilador de techo y puerta acristalada', title: 'Un dormitorio', category: 'Dormitorios', width: 576, height: 768, use: 'gallery', format: 'portrait', position: '50% 50%', permission: 'Imagen aportada por el usuario; incorporación solicitada el 28/10/2026.' },
  { src: 'img/520800970.jpg', alt: 'Piscina exterior rodeada de zonas ajardinadas y viviendas', title: 'La piscina exterior', category: 'Exterior', width: 1024, height: 768, use: 'gallery', format: 'wide', position: '50% 50%', permission: 'Imagen aportada por el usuario; incorporación solicitada el 28/10/2026.' },
  { src: 'img/349116746.jpg', alt: 'Río entre árboles y rocas en el entorno natural, fuera del alojamiento', title: 'El entorno natural · fuera de la casa', category: 'Entorno', width: 576, height: 768, use: 'gallery', format: 'portrait', position: '50% 50%', permission: 'Imagen aportada por el usuario; incorporación solicitada el 28/10/2026.' }
];
const seen = new Set();
const photos = propertyPhotos.filter(photo => {
  if (!photo.permission || !/^img\//.test(photo.src) || seen.has(photo.src) || !photo.alt || !photo.title || !(photo.width > 0 && photo.height > 0)) return false;
  seen.add(photo.src);
  return photo.use === 'hero' || photo.use === 'gallery';
});
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const desktop = matchMedia('(min-width: 801px)');
const menu = document.querySelector('#main-menu');
const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
menuButton.hidden = false;
document.documentElement.classList.add('js');
function closeMenu(focus = false) {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menu.inert = !desktop.matches;
  if (focus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
  menu.inert = !open;
});
menu.addEventListener('click', event => { if (event.target.closest('a') && !desktop.matches) closeMenu(true); });
document.addEventListener('click', event => { if (!header.contains(event.target)) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) closeMenu(true); });
desktop.addEventListener('change', () => closeMenu());
closeMenu();
function updateHeader() { header.classList.toggle('scrolled', scrollY > 16); }
addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
document.querySelector('#year').textContent = new Date().getFullYear();

// Las imágenes están visibles por defecto. El revelado no depende de clases ocultas.
const imageObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const reveal = () => {
      if (!motion.matches && image.naturalWidth && typeof image.animate === 'function') image.animate([
        { clipPath: 'inset(0 0 8% 0)', opacity: .85 },
        { clipPath: 'inset(0)', opacity: 1 }
      ], { duration: 550, easing: 'cubic-bezier(.2,.65,.3,1)' });
    };
    if (image.complete) reveal();
    else image.addEventListener('load', reveal, { once: true });
    imageObserver.unobserve(image);
  });
}, { threshold: .12 }) : null;
function observeImage(image) { imageObserver?.observe(image); }
motion.addEventListener('change', () => { if (motion.matches) document.getAnimations().forEach(animation => animation.cancel()); });
document.querySelectorAll('.destination-photo img').forEach(observeImage);
function makeImage(photo, hero = false) {
  const image = new Image();
  image.alt = photo.alt;
  image.width = photo.width;
  image.height = photo.height;
  image.loading = hero ? 'eager' : 'lazy';
  image.decoding = 'async';
  image.style.objectPosition = photo.position || '50% 50%';
  if (hero) image.fetchPriority = 'high';
  return image;
}
const hero = photos.find(photo => photo.use === 'hero');
if (hero) {
  const figure = document.querySelector('#hero-photo');
  const image = makeImage(hero, true);
  const caption = document.createElement('figcaption');
  caption.textContent = hero.title;
  image.addEventListener('load', () => {
    figure.hidden = false;
    document.querySelector('.hero').classList.add('has-photo');
    observeImage(image);
  });
  image.addEventListener('error', () => { figure.hidden = true; document.querySelector('.hero').classList.remove('has-photo'); });
  figure.append(image, caption);
  image.src = hero.src;
}

const track = document.querySelector('#property-gallery');
const handoff = document.querySelector('#photo-handoff');
const navigation = document.querySelector('#gallery-navigation');
const filters = document.querySelector('#photo-filters');
const instruction = document.querySelector('#gallery-instruction');
const previous = document.querySelector('#gallery-prev');
const next = document.querySelector('#gallery-next');
const records = [];
let category = 'Todos';
const visibleRecords = () => records.filter(record => record.ready && !record.figure.hidden);
function updateNavigation() {
  const overflow = track.scrollWidth - track.clientWidth;
  previous.disabled = track.scrollLeft < 3;
  next.disabled = track.scrollLeft >= overflow - 3;
}
function syncGallery() {
  if (category !== 'Todos' && !records.some(record => !record.failed && (record.photo.category || 'La casa') === category)) {
    category = 'Todos';
    records.forEach(record => { record.figure.hidden = record.failed; });
  }
  [...filters.children].forEach(button => {
    button.hidden = button.textContent !== 'Todos' && !records.some(record => !record.failed && (record.photo.category || 'La casa') === button.textContent);
    button.setAttribute('aria-pressed', String(button.textContent === category));
  });
  const any = records.some(record => !record.failed);
  const loaded = records.some(record => record.ready);
  track.hidden = !any;
  navigation.hidden = !loaded;
  instruction.hidden = !loaded;
  filters.hidden = !loaded || categories.length < 2;
  handoff.hidden = loaded;
  updateNavigation();
}
photos.filter(photo => photo.use === 'gallery').forEach(photo => {
  const figure = document.createElement('figure');
  figure.className = 'photo-card ' + (['portrait', 'detail'].includes(photo.format) ? photo.format : 'wide');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'photo-button';
  button.disabled = true;
  button.setAttribute('aria-label', 'Ampliar: ' + photo.title);
  const image = makeImage(photo);
  const caption = document.createElement('figcaption');
  const title = document.createElement('span');
  title.textContent = photo.title;
  const label = document.createElement('small');
  label.textContent = photo.category || 'La casa';
  caption.append(title, label);
  button.append(image);
  figure.append(button, caption);
  track.append(figure);
  const record = { photo, figure, button, ready: false, failed: false };
  records.push(record);
  track.hidden = false;
  image.addEventListener('load', () => { record.ready = true; button.disabled = false; observeImage(image); syncGallery(); });
  image.addEventListener('error', () => { record.failed = true; record.ready = false; figure.hidden = true; syncGallery(); });
  button.addEventListener('click', () => openPhoto(record));
  image.src = photo.src;
});
const categories = [...new Set(records.map(record => record.photo.category || 'La casa'))];
if (categories.length > 1) {
  filters.hidden = false;
  ['Todos', ...categories].forEach(name => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = name;
    button.setAttribute('aria-pressed', String(name === category));
    filters.append(button);
    button.addEventListener('click', () => {
      category = name;
      [...filters.children].forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      records.forEach(record => { record.figure.hidden = record.failed || (name !== 'Todos' && (record.photo.category || 'La casa') !== name); });
      track.scrollTo({ left: 0, behavior: motion.matches ? 'instant' : 'smooth' });
      updateNavigation();
    });
  });
}
function moveTrack(direction) { track.scrollBy({ left: direction * track.clientWidth * .75, behavior: motion.matches ? 'instant' : 'smooth' }); }
previous.addEventListener('click', () => moveTrack(-1));
next.addEventListener('click', () => moveTrack(1));
track.addEventListener('scroll', updateNavigation, { passive: true });
addEventListener('resize', updateNavigation);
syncGallery();

const dialog = document.querySelector('#lightbox');
const largeImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
const counter = document.querySelector('#lightbox-counter');
const status = document.querySelector('#lightbox-status');
let current = 0;
let openedRecords = [];
let trigger = null;
function showPhoto(index) {
  if (!openedRecords.length) return;
  current = (index + openedRecords.length) % openedRecords.length;
  const photo = openedRecords[current].photo;
  largeImage.alt = photo.alt;
  caption.textContent = photo.title;
  status.textContent = '';
  counter.textContent = `${current + 1} / ${openedRecords.length}`;
  largeImage.src = photo.src;
  dialog.querySelectorAll('.lightbox-prev, .lightbox-next').forEach(button => { button.hidden = openedRecords.length < 2; });
}
function openPhoto(record) {
  if (!record.ready) return;
  if (typeof dialog.showModal !== 'function') { window.open(record.photo.src, '_blank', 'noopener'); return; }
  openedRecords = visibleRecords();
  trigger = record.button;
  showPhoto(openedRecords.indexOf(record));
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.querySelector('.lightbox-close').focus();
}
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(current - 1));
dialog.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(current + 1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault(); showPhoto(current + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); trigger?.focus(); });
let gesture = null;
largeImage.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch') return;
  gesture = { x: event.clientX, y: event.clientY, id: event.pointerId };
  largeImage.setPointerCapture(event.pointerId);
});
largeImage.addEventListener('pointerup', event => {
  if (!gesture || event.pointerId !== gesture.id) return;
  const dx = event.clientX - gesture.x;
  const dy = event.clientY - gesture.y;
  gesture = null;
  if (Math.abs(dx) > 55 && Math.abs(dy) < 70) showPhoto(current + (dx < 0 ? 1 : -1));
});
largeImage.addEventListener('pointercancel', () => { gesture = null; });
largeImage.addEventListener('load', () => {
  if (!motion.matches && dialog.open) largeImage.animate([{ opacity: .65 }, { opacity: 1 }], { duration: 180 });
});
largeImage.addEventListener('error', () => { status.textContent = 'No se ha podido cargar esta fotografía. Puedes pasar a otra imagen o cerrar el visor.'; });
