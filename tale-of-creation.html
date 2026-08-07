(() => {
  const groups = [{"id":"world","label":"The World","links":[{"page":"world","label":"The World","href":"index.html"},{"page":"tale","label":"Tale of Creation","href":"tale-of-creation.html"},{"page":"nadim","label":"Nadim ibn Iljhayf","href":"nadim-ibn-iljhayf.html"}]},{"id":"wargame","label":"Wargame","links":[{"page":"wargame","label":"Wargame Index","href":"wargame.html"},{"page":"wargame-rules","label":"Core Rules","href":"wargame-rules.html"},{"page":"wargame-keywords","label":"Keywords","href":"wargame-keywords.html"},{"page":"wg-yellow-institut","label":"Yellow Institut","href":"wargame-yellow-institut.html"},{"page":"wg-shrikes","label":"Shrikes","href":"wargame-shrikes.html"},{"page":"wg-anointed-holy-cities","label":"The Anointed Holy Cities","href":"wargame-anointed-holy-cities.html"},{"page":"wg-people-far-dunes","label":"People of the Far-Dunes","href":"wargame-people-of-the-far-dunes.html"},{"page":"wg-abyssal-cults","label":"Abyssal Cults of Jegari","href":"wargame-abyssal-cults-of-jegari.html"},{"page":"wg-flaying-courts","label":"The Flaying Courts","href":"wargame-the-flaying-courts.html"},{"page":"wg-monolith-clockworks","label":"Monolith Clockworks","href":"wargame-monolith-clockworks.html"},{"page":"wg-chitinous-enclaves","label":"Chitinous Enclaves","href":"wargame-chitinous-enclaves.html"},{"page":"wg-jakiisi","label":"Jakiisi","href":"wargame-jakiisi.html"},{"page":"wg-tyrisaz","label":"Tyrisaz","href":"wargame-tyrisaz.html"},{"page":"wg-dredgefolk","label":"Dredgefolk","href":"wargame-dredgefolk.html"}]},{"id":"factions","label":"Factions","links":[{"page":"factions","label":"Faction Index","href":"factions.html"},{"page":"yellow-institut","label":"Yellow Institut","href":"yellow-institut.html"},{"page":"the-shrikes","label":"The Shrikes","href":"the-shrikes.html"},{"page":"anointed-holy-cities","label":"The Anointed Holy Cities","href":"anointed-holy-cities.html"},{"page":"people-far-dunes","label":"People Of The Far-Dunes","href":"people-of-the-far-dunes.html"},{"page":"abyssal-cults","label":"Abyssal Cults of Jegari","href":"abyssal-cults-of-jegari.html"},{"page":"flaying-courts","label":"The Flaying Courts","href":"the-flaying-courts.html"},{"page":"flajhills","label":"Flajhills","href":"flajhills.html"},{"page":"monolith-clockworks","label":"Monolith Clockworks","href":"monolith-clockworks.html"},{"page":"chitinous-enclaves","label":"Chitinous Enclaves","href":"chitinous-enclaves.html"},{"page":"jakiisi","label":"Jakiisi","href":"jakiisi.html"},{"page":"tyrisaz","label":"Tyrisaz","href":"tyrisaz.html"}]},{"id":"locations","label":"Locations of Note","links":[{"page":"locations","label":"Overview","href":"locations.html"},{"page":"locations","label":"Fahroway","href":"locations.html#fahroway"},{"page":"locations","label":"Mothua","href":"locations.html#mothua"},{"page":"locations","label":"Ekternau","href":"locations.html#ekternau"},{"page":"locations","label":"Krashq’kanov","href":"locations.html#krashqkanov"}]},{"id":"bestiary","label":"Bestiary","links":[{"page":"bestiary","label":"Overview","href":"bestiary.html"},{"page":"bestiary","label":"The Great Seas","href":"bestiary.html#the-great-seas"},{"page":"bestiary","label":"Fahroway","href":"bestiary.html#fahroway"},{"page":"bestiary","label":"Ekternau","href":"bestiary.html#ekternau"}]},{"id":"beings","label":"Beings of Note","links":[{"page":"beings","label":"Overview","href":"beings-of-note.html"},{"page":"beings","label":"Fahroway","href":"beings-of-note.html#fahroway"},{"page":"beings","label":"Krashq’kanov","href":"beings-of-note.html#krashqkanov"},{"page":"beings","label":"Mothua","href":"beings-of-note.html#mothua"},{"page":"beings","label":"Ekternau","href":"beings-of-note.html#ekternau"}]},{"id":"tongues","label":"Order of Tongues","links":[{"page":"tongues","label":"The Tongue of Shrikes","href":"order-of-tongues.html"}]}];
  const body = document.body;
  const current = body.dataset.page || '';
  const currentGroup = body.dataset.group || '';
  const sidebar = document.getElementById('site-sidebar');

  const esc = (value) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const currentFile = location.pathname.split('/').pop() || 'index.html';

  sidebar.innerHTML = `
    <button class="sidebar-close" type="button" aria-label="Close navigation">✕</button>
    <a class="sidebar-brand" href="index.html">Grimmvein</a>
    <nav class="sidebar-nav" aria-label="Grimmvein archive">
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

// Wargame keyword tooltips.
(() => {
  if (!document.querySelector('.datasheet')) return;

  const keywordDescriptions = {
    'HIGH COMMANDER': 'Units with [HIGH COMMANDER] fulfill the [HIGH COMMANDER] role',
    'COMMANDER': 'Units with [COMMANDER] fulfill the [COMMANDER] role',
    'FORMATIONS UNIT': 'Units with [FORMATIONS UNIT] fulfill the [FORMATIONS UNIT] role',
    'SPECIALIST UNIT': 'Units with [SPECIALIST UNIT] fulfill the [SPECIALIST UNIT] role',
    'SPECIALIST CHARACTER': 'Units with [SPECIALIST CHARACTER] fulfill the [SPECIALIST CHARACTER] role',
    'MACHINE OF WAR': 'Units with [MACHINE OF WAR] fulfill the [MACHINE OF WAR] role',

    'MAGICKS': 'Something Magical, in which anything affecting the [MAGICKS] keyword applies',
    'AREA': 'Has an area of affect that involves an entire unit instead of just a single model of that unit',
    'CONTACT': 'Makes contact, in which anything affecting the [CONTACT] keyword applies',
    'MANIPULATOR': 'A model or unit that has some sort of battlefield utility that is not strictly offensive or defensive',
    'LONE WARRIOR': 'This model or unit cannot lead or be led by other models or units',
    'SUMMONED': 'This model or unit cannot be deployed and must instead be summoned by whatever means are specified on that model or unit’s statline. Unless specified otherwise in that model or unit’s statline, the summoned model or unit appears at the beginning of the next round.',
    'TITANIC': 'Has an area of affect that involves all enemy targets within range, assuming those targets are wholly within line of sight',
    'SEER': 'Designates this model or unit as a Seer, in which anything affecting the [SEER] keyword applies',
    'IMPALERS': 'Any model or unit with the [IMPALERS] keyword has +2 melee SPEED against any unit with the [MOUNTED] keyword',
    'MOUNTED': 'A model or unit that is mounted, in which anything affecting the [MOUNTED] keyword applies',
    'BRAWLER': 'A model or unit that is a brawler or consists of brawlers, meaning that they are primarily offense focused',
    'CLEAVE': 'A horizontal attack using the melee weapon, typically faster but weaker',
    'CHOP': 'A vertical attack using the melee weapon, typically slower but stronger',
    'NAUSEA': 'The model or unit hit by an attack with the [NAUSEA] Keyword has -2 Armor',
    'POISON': 'The model or unit hit by an attack with the [POISON] Keyword loses -1 Health for the rest of the game, but this can only apply once per model',
    'FLIGHT': 'The model or unit with the [FLIGHT] keyword can freely traverse over terrain and other models, but may not sit atop terrain or other models',
    'RALLY': 'The model or unit with the [RALLY] keyword gains +1 to Melee Speed upon entering Melee Engagement, lasts only for that Melee Engagement',
    'WELL COMPOSED': 'The model or unit with the [WELL COMPOSED] keyword gain +3 Actions after Retaliate is used on them, lasts only for this model or unit’s next turn',
    'BASTION': 'The model or unit with the [BASTION] keyword lowers enemy Might by 1 upon reaching Melee Engagement, but this effect only lasts during the Melee Engagement itself',
    'DEVOUT': 'The model or unit with the [DEVOUT] keyword gains +2 Melee Speed against any model or unit with the [DAEMON] keyword',
    'DAEMON': 'The model or unit with the [DAEMON] keyword gains +2 Crit against any model or unit with the [DEVOUT] keyword',
    'DUELIST': 'The model or unit with the [DUELIST] keyword gains +1 Might when an enemy unit steps onto the same objective as this model or unit',
    'COVER': 'Anything with the [COVER] Keyword gains +1 Armor against both Ranged and Melee attacks.',

    'DJINN': 'A unit type belonging to the People Of The Far-Dunes army',
    'TITAN': 'A unit type belonging to the Tyrisaz army',
    'STRAHZZI': 'A unit type belonging to the Tyrisaz army',
    'AIMLESS': 'A unit that does not belong to any army natively',
    'NOMAD': 'A unit type belonging to the People Of The Far-Dunes army',

    'MOTHUA ENCLAVE': 'The Mothua Enclave has +3 Actions when chosen as Secondary Units, but have -1 Armor.',
    'KRANOV ENCLAVE': 'The Kranov Enclave can attack a second time in the same turn, but the second attack costs 2 Actions instead of 1 Action.',
    'EKTERNAU ENCLAVE': 'The Ekternau Enclave has +2 Armor when Retaliate is used on them, but they have -1 Action for the following turn.',
    'EXECUTIONER': 'Executioner Djinn focus on offensive power.',
    'UNDYING': 'Undying Djinn focus on defensive power.'
  };

  const unknownDescription = 'No standalone rule is currently listed for this keyword.';
  const bracketPattern = /\[([A-Z][A-Z ]*)\]/g;

  const tooltip = document.createElement('div');
  tooltip.className = 'keyword-tooltip';
  tooltip.id = 'keyword-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  tooltip.setAttribute('aria-hidden', 'true');
  tooltip.innerHTML = '<strong class="keyword-tooltip-name"></strong><span class="keyword-tooltip-text"></span>';
  document.body.appendChild(tooltip);

  const tooltipName = tooltip.querySelector('.keyword-tooltip-name');
  const tooltipText = tooltip.querySelector('.keyword-tooltip-text');
  let activeTrigger = null;

  const getDescription = keyword => keywordDescriptions[keyword] || unknownDescription;

  const positionTooltip = trigger => {
    const rect = trigger.getBoundingClientRect();
    const margin = 10;
    const edge = 12;

    tooltip.style.left = '0px';
    tooltip.style.top = '0px';
    const tipRect = tooltip.getBoundingClientRect();

    let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
    left = Math.max(edge, Math.min(left, window.innerWidth - tipRect.width - edge));

    let top = rect.top - tipRect.height - margin;
    if (top < edge) top = rect.bottom + margin;
    if (top + tipRect.height > window.innerHeight - edge) {
      top = Math.max(edge, window.innerHeight - tipRect.height - edge);
    }

    tooltip.style.left = `${Math.round(left)}px`;
    tooltip.style.top = `${Math.round(top)}px`;
  };

  const showTooltip = trigger => {
    const keyword = trigger.dataset.keyword;
    if (!keyword) return;
    activeTrigger = trigger;
    tooltipName.textContent = `[${keyword}]`;
    tooltipText.textContent = getDescription(keyword);
    tooltip.classList.add('is-visible');
    tooltip.setAttribute('aria-hidden', 'false');
    positionTooltip(trigger);
  };

  const hideTooltip = trigger => {
    if (trigger && activeTrigger !== trigger) return;
    activeTrigger = null;
    tooltip.classList.remove('is-visible');
    tooltip.setAttribute('aria-hidden', 'true');
  };

  const makeTrigger = (element, keyword) => {
    element.classList.add('keyword-tooltip-trigger');
    element.dataset.keyword = keyword;
    if (!element.hasAttribute('tabindex')) element.tabIndex = 0;
    element.setAttribute('aria-describedby', tooltip.id);

    element.addEventListener('mouseenter', () => showTooltip(element));
    element.addEventListener('mouseleave', () => hideTooltip(element));
    element.addEventListener('focus', () => showTooltip(element));
    element.addEventListener('blur', () => hideTooltip(element));

    if (window.matchMedia('(hover: none)').matches) {
      element.addEventListener('click', event => {
        event.stopPropagation();
        if (activeTrigger === element && tooltip.classList.contains('is-visible')) hideTooltip(element);
        else showTooltip(element);
      });
    }
  };

  const replaceKeywordsInElement = (root, allowUnknown) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach(node => {
      if (!node.nodeValue || !node.nodeValue.includes('[')) return;
      if (node.parentElement?.closest('.keyword-tooltip-trigger')) return;

      const text = node.nodeValue;
      bracketPattern.lastIndex = 0;
      let match;
      let lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let changed = false;

      while ((match = bracketPattern.exec(text)) !== null) {
        const keyword = match[1];
        if (!allowUnknown && !keywordDescriptions[keyword]) continue;

        changed = true;
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        const span = document.createElement('span');
        span.textContent = match[0];
        makeTrigger(span, keyword);
        fragment.appendChild(span);
        lastIndex = match.index + match[0].length;
      }

      if (!changed) return;
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      node.replaceWith(fragment);
    });
  };

  document.querySelectorAll('.datasheet-meta span, .keyword-chip, .weapon-keywords').forEach(element => {
    replaceKeywordsInElement(element, true);
  });

  document.querySelectorAll('.datasheet').forEach(datasheet => {
    replaceKeywordsInElement(datasheet, false);
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.keyword-tooltip-trigger')) hideTooltip();
  });
  window.addEventListener('scroll', () => {
    if (activeTrigger) positionTooltip(activeTrigger);
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (activeTrigger) positionTooltip(activeTrigger);
  });
})();
