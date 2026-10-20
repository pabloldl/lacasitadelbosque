/* Navegación: usable también sin JavaScript. */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#menu-desplegable');
// Reutiliza los enlaces internos sin modificar la navegación ni Booking.
document.querySelectorAll('#navegacion a[href^="#"]').forEach(link => {
  navigation.append(link.cloneNode(true));
});
const header = document.querySelector('.header');
menuButton.hidden = false;
document.body.classList.add('js-menu');
function closeMenu() {
  navigation.classList.remove('open');
  navigation.inert = true;
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
  navigation.inert = !open;
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) {
    closeMenu();
    menuButton.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 951px)').addEventListener('change', closeMenu);
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 20); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
document.querySelector('#year').textContent = new Date().getFullYear();

/* Revelado progresivo con alternativa accesible sin movimiento. */
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.body.classList.add('js-motion');
  motionPreference.addEventListener('change', event => {
    if (event.matches) document.body.classList.remove('js-motion');
  });
}

/* Dialog nativo: foco confinado, Escape y devolución al disparador. */
const dialog = document.querySelector('#lightbox');
const gallery = [...document.querySelectorAll('[data-image]')];
const image = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
let currentIndex = 0;
let trigger = null;
function showImage(index) {
  currentIndex = (index + gallery.length) % gallery.length;
  const item = gallery[currentIndex];
  image.src = item.dataset.image;
  image.alt = item.querySelector('img').alt;
  caption.textContent = item.dataset.caption;
  document.querySelector('.lightbox-counter').textContent = `${currentIndex + 1} / ${gallery.length}`;
}
gallery.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (typeof dialog.showModal !== 'function') {
      window.open(item.dataset.image, '_blank', 'noopener');
      return;
    }
    trigger = item;
    showImage(index);
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.querySelector('.lightbox-close').focus();
  });
});
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1));
dialog.querySelector('.lightbox-next').addEventListener('click', () => showImage(currentIndex + 1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showImage(currentIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (trigger) trigger.focus();
});

