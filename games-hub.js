/* =============================================
   GAMES-HUB.JS — Tab-Hero
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =============================================
     TAB-HERO (Bereichs-Übersicht oben)
     ============================================= */
  const heroTabs  = document.querySelectorAll('.tab-hero__tab');
  const heroPanels = document.querySelectorAll('.tab-hero__panel');

  function activateHeroTab(tab) {
    const isAlreadyActive = tab.classList.contains('active');

    heroTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.style.removeProperty('background');
      t.style.removeProperty('color');
    });
    heroPanels.forEach(p => p.classList.remove('active'));

    if (isAlreadyActive) return;

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

});
