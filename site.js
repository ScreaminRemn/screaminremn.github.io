(() => {
  const groups = [{"id":"world","label":"The World","links":[{"page":"world","label":"The World","href":"index.html"},{"page":"tale","label":"Tale of Creation","href":"tale-of-creation.html"},{"page":"nadim","label":"Nadim ibn Iljhayf","href":"nadim-ibn-iljhayf.html"}]},{"id":"factions","label":"Factions","links":[{"page":"factions","label":"Faction Index","href":"factions.html"},{"page":"yellow-institut","label":"Yellow Institut","href":"yellow-institut.html"},{"page":"the-shrikes","label":"The Shrikes","href":"the-shrikes.html"},{"page":"anointed-holy-cities","label":"The Anointed Holy Cities","href":"anointed-holy-cities.html"},{"page":"people-far-dunes","label":"People Of The Far-Dunes","href":"people-of-the-far-dunes.html"},{"page":"abyssal-cults","label":"Abyssal Cults of Jegari","href":"abyssal-cults-of-jegari.html"},{"page":"flaying-courts","label":"The Flaying Courts","href":"the-flaying-courts.html"},{"page":"flajhills","label":"Flajhills","href":"flajhills.html"},{"page":"monolith-clockworks","label":"Monolith Clockworks","href":"monolith-clockworks.html"},{"page":"chitinous-enclaves","label":"Chitinous Enclaves","href":"chitinous-enclaves.html"},{"page":"jakiisi","label":"Jakiisi","href":"jakiisi.html"},{"page":"tyrisaz","label":"Tyrisaz","href":"tyrisaz.html"}]},{"id":"locations","label":"Locations of Note","links":[{"page":"locations","label":"Overview","href":"locations.html"},{"page":"locations","label":"Fahroway","href":"locations.html#fahroway"},{"page":"locations","label":"Mothua","href":"locations.html#mothua"},{"page":"locations","label":"Ekternau","href":"locations.html#ekternau"},{"page":"locations","label":"Krashq’kanov","href":"locations.html#krashqkanov"}]},{"id":"bestiary","label":"Bestiary","links":[{"page":"bestiary","label":"Overview","href":"bestiary.html"},{"page":"bestiary","label":"The Great Seas","href":"bestiary.html#the-great-seas"},{"page":"bestiary","label":"Fahroway","href":"bestiary.html#fahroway"},{"page":"bestiary","label":"Ekternau","href":"bestiary.html#ekternau"}]},{"id":"beings","label":"Beings of Note","links":[{"page":"beings","label":"Overview","href":"beings-of-note.html"},{"page":"beings","label":"Fahroway","href":"beings-of-note.html#fahroway"},{"page":"beings","label":"Krashq’kanov","href":"beings-of-note.html#krashqkanov"},{"page":"beings","label":"Mothua","href":"beings-of-note.html#mothua"},{"page":"beings","label":"Ekternau","href":"beings-of-note.html#ekternau"}]},{"id":"tongues","label":"Order of Tongues","links":[{"page":"tongues","label":"The Tongue of Shrikes","href":"order-of-tongues.html"}]},{"id":"wargame","label":"Wargame","links":[{"page":"wargame","label":"Wargame Index","href":"wargame.html"},{"page":"wargame-rules","label":"Core Rules","href":"wargame-rules.html"},{"page":"wargame-keywords","label":"Keywords","href":"wargame-keywords.html"},{"page":"wg-yellow-institut","label":"Yellow Institut","href":"wargame-yellow-institut.html"},{"page":"wg-shrikes","label":"Shrikes","href":"wargame-shrikes.html"},{"page":"wg-anointed-holy-cities","label":"The Anointed Holy Cities","href":"wargame-anointed-holy-cities.html"},{"page":"wg-people-far-dunes","label":"People of the Far-Dunes","href":"wargame-people-of-the-far-dunes.html"},{"page":"wg-abyssal-cults","label":"Abyssal Cults of Jegari","href":"wargame-abyssal-cults-of-jegari.html"},{"page":"wg-flaying-courts","label":"The Flaying Courts","href":"wargame-the-flaying-courts.html"},{"page":"wg-monolith-clockworks","label":"Monolith Clockworks","href":"wargame-monolith-clockworks.html"},{"page":"wg-chitinous-enclaves","label":"Chitinous Enclaves","href":"wargame-chitinous-enclaves.html"},{"page":"wg-jakiisi","label":"Jakiisi","href":"wargame-jakiisi.html"},{"page":"wg-tyrisaz","label":"Tyrisaz","href":"wargame-tyrisaz.html"},{"page":"wg-dredgefolk","label":"Dredgefolk","href":"wargame-dredgefolk.html"}]}];
  const body = document.body;
  const current = body.dataset.page || '';
  const currentGroup = body.dataset.group || '';
  const sidebar = document.getElementById('site-sidebar');

  const esc = (value) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const currentFile = location.pathname.split('/').pop() || 'index.html';

  sidebar.innerHTML = `
    <button class="sidebar-close" type="button" aria-label="Close navigation">✕</button>
    <a class="sidebar-brand" href="index.html">Grimmvein</a>
    <nav class="sidebar-nav" aria-label="Lore archive">
      ${groups.map(group => {
        let stored = null; try { stored = localStorage.getItem('grimmvein-nav-' + group.id); } catch (_) {}
        const shouldOpen = group.id === currentGroup || stored === 'open';
        return `<details data-group="${esc(group.id)}" ${shouldOpen ? 'open' : ''}>
          <summary>${esc(group.label)}</summary>
          <div class="sidebar-links">
            ${group.links.map(link => {
              const linkFile = link.href.split('#')[0];
              const exactHash = link.href.includes('#') && location.hash === '#' + link.href.split('#')[1];
              const isActive = link.page === current && (!link.href.includes('#') ? currentFile === linkFile && !location.hash : exactHash);
              const pageFallback = link.page === current && !group.links.some(x => x.page === current && x.href.includes('#') && location.hash === '#' + x.href.split('#')[1]);
              const active = isActive || (pageFallback && !link.href.includes('#') && currentFile === linkFile);
              return `<a href="${esc(link.href)}" class="${active ? 'active' : ''}" ${active ? 'aria-current="page"' : ''}>${esc(link.label)}</a>`;
            }).join('')}
          </div>
        </details>`;
      }).join('')}
    </nav>`;

  sidebar.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      try { localStorage.setItem('grimmvein-nav-' + detail.dataset.group, detail.open ? 'open' : 'closed'); } catch (_) {}
    });
  });

  const openNav = () => { body.classList.add('nav-open'); document.querySelector('.mobile-menu')?.setAttribute('aria-expanded','true'); };
  const closeNav = () => { body.classList.remove('nav-open'); document.querySelector('.mobile-menu')?.setAttribute('aria-expanded','false'); };
  document.querySelector('.mobile-menu')?.addEventListener('click', openNav);
  document.querySelector('.sidebar-overlay')?.addEventListener('click', closeNav);
  sidebar.querySelector('.sidebar-close')?.addEventListener('click', closeNav);
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
})();
