/* Grimmvein modular datasheet renderer */
(() => {
  'use strict';
  const DATA = window.GRIMVEIN_DATASHEETS || {};
  const DEFINITIONS = window.GRIMVEIN_KEYWORDS || {};

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const keyName = (value) => String(value ?? '').trim().replace(/^\[|\]$/g,'').toUpperCase();
  const bracket = (value) => `[${keyName(value)}]`;
  const slug = (value) => String(value ?? '').toLowerCase().normalize('NFKD').replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'datasheet';

  function keywordHTML(value, extraClass='') {
    const key = keyName(value);
    const label = `[${key}]`;
    const description = DEFINITIONS[key] || 'No standalone rule is currently listed for this keyword.';
    return `<span class="${extraClass ? esc(extraClass)+' ' : ''}keyword-tip" data-keyword="${esc(label)}" data-tooltip="${esc(description)}" tabindex="0">${esc(label)}</span>`;
  }

  function textWithKeywords(value) {
    const source = String(value ?? '');
    let out = '';
    let last = 0;
    const re = /\[([^\]\n]+)\]/g;
    let m;
    while ((m = re.exec(source))) {
      out += esc(source.slice(last, m.index));
      out += keywordHTML(m[1]);
      last = re.lastIndex;
    }
    return out + esc(source.slice(last));
  }

  function renderStats(stats={}) {
    const order = ['actions','armor','health','holding','might','accuracy','evasion'];
    return `<div class="stat-strip">${order.map(k => `<div class="stat-cell"><span class="stat-label">${esc(k[0].toUpperCase()+k.slice(1))}</span><span class="stat-value">${esc(stats[k] ?? '—')}</span></div>`).join('')}</div>`;
  }

  function renderWeapons(title, weapons, ranged) {
    if (!weapons) return '';
    const heading = ranged ? '<th>Ranged Weapon</th><th>Range</th><th>Strength</th><th>Speed</th>' : '<th>Melee Weapon</th><th>Strength</th><th>Speed</th><th>Crit</th>';
    const rows = (weapons || []).map(w => {
      const kws = (w.keywords || []).length ? ` <span class="weapon-keywords">${w.keywords.map(k => keywordHTML(k)).join(' ')}</span>` : '';
      const cells = ranged ? [w.range,w.strength,w.speed] : [w.strength,w.speed,w.crit];
      return `<tr><td class="weapon-name">${esc(w.name)}${kws}</td>${cells.map(v => `<td>${esc(v ?? '')}</td>`).join('')}</tr>`;
    }).join('');
    const body = rows || `<tr><td colspan="4" class="muted">NONE</td></tr>`;
    return `<section class="datasheet-subsection"><h3>${esc(title)}</h3><div class="table-scroll"><table class="weapon-table"><thead><tr>${heading}</tr></thead><tbody>${body}</tbody></table></div></section>`;
  }

  function renderAbilities(title, abilities) {
    if (abilities === null || abilities === undefined) return '';
    if (!abilities.length) return `<section class="datasheet-subsection"><h3>${esc(title)}</h3><p class="muted ability-none">NONE</p></section>`;
    return `<section class="datasheet-subsection"><h3>${esc(title)}</h3>${abilities.map(a => `<div class="ability-entry"><h4>${esc(a.name)}</h4><p>${textWithKeywords(a.text)}</p></div>`).join('')}</section>`;
  }

  function renderKeywords(keywords=[]) {
    return `<section class="datasheet-subsection"><h3>Keywords</h3><div class="keyword-row">${keywords.length ? keywords.map(k => keywordHTML(k,'keyword-chip')).join('') : '<span class="muted">NONE</span>'}</div></section>`;
  }

  function renderLeadership(items) {
    if (items === null || items === undefined) return '';
    const lines = items.length ? items.map(x => `<p><strong>${esc(x.label)}:</strong> ${textWithKeywords(x.text)}</p>`).join('') : '<p class="muted">NONE</p>';
    return `<section class="datasheet-subsection leadership"><h3>Leadership</h3>${lines}</section>`;
  }

  function renderDatasheet(unit, usedIds) {
    let id = unit.id || slug(unit.name);
    const baseId = id;
    let n = 2;
    while (usedIds.has(id)) id = `${baseId}-${n++}`;
    usedIds.add(id);
    return `<article class="datasheet" id="${esc(id)}">
      <header class="datasheet-header"><div><div class="datasheet-name">${esc(unit.name)}</div><div class="datasheet-meta">${unit.role ? `<span>${keywordHTML(unit.role)}</span>` : ''}<span>Base: ${esc(unit.base)}</span><span>Models: ${esc(unit.models)}</span></div></div><div class="coin-cost">${esc(unit.cost)}</div></header>
      ${renderStats(unit.stats)}
      ${renderWeapons('Ranged Weapons', unit.rangedWeapons || [], true)}
      ${renderWeapons('Melee Weapons', unit.meleeWeapons || [], false)}
      ${renderAbilities('Weapon Ability', unit.weaponAbilities)}
      ${renderAbilities('Unit Ability', unit.unitAbilities)}
      ${renderKeywords(unit.keywords || [])}
      ${renderLeadership(unit.leadership)}
    </article>`;
  }

  function renderApp(app) {
    const faction = app.dataset.faction;
    const units = Array.isArray(DATA[faction]) ? DATA[faction] : [];
    const count = document.getElementById('datasheet-count');
    if (count) count.textContent = units.length;
    if (!units.length) {
      app.innerHTML = '<div class="datasheet-stack"><section class="empty-state"><h2>Datasheets</h2><p>No completed datasheets are present for this faction in the current wargame document.</p></section></div>';
      return;
    }
    const usedIds = new Set();
    const rendered = units.map(u => {
      let id = u.id || slug(u.name), base=id, n=2;
      while (usedIds.has(id)) id=`${base}-${n++}`;
      usedIds.add(id);
      return {id, unit:u};
    });
    const toc = `<nav class="toc" aria-label="Datasheets on this page"><div class="toc-title">Datasheets</div><div class="toc-links">${rendered.map(x => `<a href="#${esc(x.id)}">${esc(x.unit.name)}</a>`).join('')}</div></nav>`;
    // Re-render with the resolved ids so TOC and article ids always agree.
    const stack = rendered.map(x => renderDatasheet({...x.unit,id:x.id}, new Set())).join('');
    app.innerHTML = `${toc}<div class="datasheet-stack">${stack}</div>`;
  }

  function initTooltips() {
    const triggers = [...document.querySelectorAll('.keyword-tip[data-tooltip]')];
    if (!triggers.length) return;
    document.body.classList.add('js-tooltips');
    let tip = document.querySelector('.gv-keyword-tooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'gv-keyword-tooltip';
      tip.setAttribute('role','tooltip');
      tip.setAttribute('aria-hidden','true');
      tip.innerHTML = '<strong></strong><span></span>';
      document.body.appendChild(tip);
    }
    const tipName=tip.querySelector('strong'), tipText=tip.querySelector('span');
    let active=null;
    const position = el => {
      if (!el || !tip.classList.contains('is-visible')) return;
      const r=el.getBoundingClientRect(), pad=12, gap=9;
      tip.style.left='0px'; tip.style.top='0px';
      const t=tip.getBoundingClientRect();
      let left=r.left+r.width/2-t.width/2;
      left=Math.max(pad,Math.min(left,window.innerWidth-t.width-pad));
      let top=r.top-t.height-gap;
      if(top<pad) top=r.bottom+gap;
      if(top+t.height>window.innerHeight-pad) top=Math.max(pad,window.innerHeight-t.height-pad);
      tip.style.left=`${Math.round(left)}px`; tip.style.top=`${Math.round(top)}px`;
    };
    const show = el => {
      active=el; tipName.textContent=el.dataset.keyword||el.textContent||''; tipText.textContent=el.dataset.tooltip||'';
      tip.classList.add('is-visible'); tip.setAttribute('aria-hidden','false'); position(el);
    };
    const hide = el => { if(el && active!==el) return; active=null; tip.classList.remove('is-visible'); tip.setAttribute('aria-hidden','true'); };
    triggers.forEach(el => {
      el.addEventListener('mouseenter',()=>show(el)); el.addEventListener('mouseleave',()=>hide(el)); el.addEventListener('focus',()=>show(el)); el.addEventListener('blur',()=>hide(el));
      el.addEventListener('click',e=>{ if(!window.matchMedia('(hover: none)').matches)return; e.stopPropagation(); show(el); });
    });
    document.addEventListener('click',()=>hide()); window.addEventListener('scroll',()=>active&&position(active),true); window.addEventListener('resize',()=>active&&position(active));
  }

  document.querySelectorAll('.datasheet-app[data-faction]').forEach(renderApp);
  initTooltips();
})();
