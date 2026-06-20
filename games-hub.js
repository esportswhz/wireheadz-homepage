/* =============================================
   GAMES-HUB.JS — Tab-Hero, Leistungen-Tabs, Lightbox
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =============================================
     1. TAB-HERO (Bereichs-Übersicht oben)
     ============================================= */
  const heroTabs  = document.querySelectorAll('.tab-hero__tab');
  const heroPanels = document.querySelectorAll('.tab-hero__panel');

  function activateHeroTab(tab) {
    const isAlreadyActive = tab.classList.contains('active');

    // Alle zurücksetzen
    heroTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.style.removeProperty('background');
      t.style.removeProperty('color');
    });
    heroPanels.forEach(p => p.classList.remove('active'));

    // Toggle: nochmals klicken hebt die Auswahl auf
    if (isAlreadyActive) return;

    // Neuen Tab aktivieren + Farbe setzen
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const color = tab.dataset.color;
    if (color) {
      tab.style.background = color;
      tab.style.color = '#fff';
    }

    const panelId = 'panel-' + tab.dataset.tab;
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
  }

  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => activateHeroTab(tab));
  });

  // Kein Tab initial ausgewählt


  /* (Leistungen-Tabs entfernt — Detailsektionen sind wieder eigenständige Scroll-Sections) */


  /* =============================================
     3. GALERIE LIGHTBOX
     ============================================= */
  const galleryImages = Array.from(document.querySelectorAll('.gallery-grid__img'));
  let lbIndex = 0;

  // Lightbox-Element erzeugen
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Bildvorschau');
  lb.innerHTML = `
    <div class="lightbox__overlay"></div>
    <button class="lightbox__close" aria-label="Schließen">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <button class="lightbox__nav lightbox__nav--prev" aria-label="Vorheriges Bild">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <img class="lightbox__img" src="" alt="" />
    <button class="lightbox__nav lightbox__nav--next" aria-label="Nächstes Bild">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  `;
  document.body.appendChild(lb);

  const lbImg   = lb.querySelector('.lightbox__img');

  function lbOpen(index) {
    lbIndex = (index + galleryImages.length) % galleryImages.length;
    lbImg.src = galleryImages[lbIndex].src;
    lbImg.alt = galleryImages[lbIndex].alt;
    lb.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox__close').focus();
  }

  function lbClose() {
    lb.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  function lbNav(dir) {
    lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
    lbImg.src = galleryImages[lbIndex].src;
    lbImg.alt = galleryImages[lbIndex].alt;
  }

  // Galerie-Bilder klickbar machen
  galleryImages.forEach((img, i) => {
    img.style.cursor = 'pointer';
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Bild vergrößern');
    img.addEventListener('click', () => lbOpen(i));
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lbOpen(i); }
    });
  });

  lb.querySelector('.lightbox__overlay').addEventListener('click', lbClose);
  lb.querySelector('.lightbox__close').addEventListener('click', lbClose);
  lb.querySelector('.lightbox__nav--prev').addEventListener('click', () => lbNav(-1));
  lb.querySelector('.lightbox__nav--next').addEventListener('click', () => lbNav(1));

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('lightbox--open')) return;
    if (e.key === 'Escape')      lbClose();
    if (e.key === 'ArrowLeft')   lbNav(-1);
    if (e.key === 'ArrowRight')  lbNav(1);
  });

});
