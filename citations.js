/* Numeric citations with author-sorted bibliography and stable semantic anchors. */
(() => {
  const cites = [...document.querySelectorAll('cite[data-ref]')];
  const keys = [...new Set(cites.flatMap(c => c.dataset.ref.trim().split(/\s+/)))];
  keys.forEach(key => { if (!paperReferences[key]) throw new Error(`Unknown reference: ${key}`); });
  keys.sort((a, b) => paperReferences[a].sortKey.localeCompare(paperReferences[b].sortKey, 'en'));
  const used = new Map(keys.map((key, i) => [key, { number: i + 1, locations: [] }]));
  const authorName = author => author.includes(', ') ? author.split(', ').slice(1).join(', ') + ' ' + author.split(', ')[0] : author;
  const authorsText = ref => {
    const names = ref.authors.map(authorName);
    return names.length < 2 ? names[0] : names.slice(0, -1).join(', ') + (names.length > 2 ? ', and ' : ' and ') + names.at(-1);
  };
  let occurrence = 0;
  cites.forEach(cite => {
    const group = [...new Set(cite.dataset.ref.trim().split(/\s+/))].sort((a, b) => used.get(a).number - used.get(b).number);
    cite.append(document.createTextNode(' ['));
    group.forEach((key, i) => {
      const ref = paperReferences[key], item = used.get(key);
      if (i) cite.append(document.createTextNode(', '));
      const anchor = document.createElement('a');
      anchor.id = `cite-${key}-${++occurrence}`; anchor.href = `#ref-${key}`; anchor.className = 'citation'; anchor.textContent = item.number;
      anchor.title = `${ref.title}\n${authorsText(ref)} · ${ref.venue} · ${ref.year || ''}`;
      anchor.setAttribute('aria-label', `参考文献 ${item.number}：${ref.title}`); anchor.setAttribute('role', 'doc-noteref');
      cite.append(anchor); item.locations.push({ id: anchor.id, chapter: cite.closest('section').dataset.title });
    });
    cite.append(document.createTextNode(']'));
  });
  const list = document.getElementById('reference-list');
  for (const [key, item] of used) {
    const ref = paperReferences[key], li = document.createElement('li');
    li.id = `ref-${key}`; li.value = item.number; li.setAttribute('role', 'doc-biblioentry');
    const citation = document.createElement('p'); citation.className = 'ref-citation'; citation.append(document.createTextNode(authorsText(ref) + '. '));
    const title = document.createElement('a'); title.href = ref.url; title.textContent = ref.title; title.target = '_blank'; title.rel = 'noopener'; title.className = 'ref-title';
    citation.append(title, document.createTextNode('. '));
    if (ref.entryType === 'inproceedings') citation.append(document.createTextNode('In '));
    const venue = document.createElement('em'); venue.textContent = ref.eprint ? `arXiv:${ref.eprint}${ref.version}` : ref.venue; citation.append(venue);
    let publication = '';
    if (ref.entryType === 'article') {
      if (ref.volume) publication += `, ${ref.volume}${ref.number ? '(' + ref.number + ')' : ''}`;
      if (ref.pages) publication += ':' + ref.pages.replace(/--/g, '–');
    } else {
      if (ref.volume) publication += `, volume ${ref.volume}${ref.series ? ' of ' + ref.series : ''}`;
      if (ref.pages) publication += ', pages ' + ref.pages.replace(/--/g, '–');
    }
    if (ref.entryType === 'book' && ref.edition) publication += `, ${ref.edition === '2' ? '2nd' : ref.edition} edition`;
    if (ref.year) publication += `, ${ref.year}`;
    if (ref.accessed) publication += `. Accessed ${ref.accessed}`;
    citation.append(document.createTextNode(publication + '.'));
    const details = document.createElement('details'); details.className = 'ref-details';
    const summary = document.createElement('summary'); summary.textContent = ref.type + ' · 来源与备注';
    const note = document.createElement('p'); note.textContent = ref.note;
    if (ref.accessed) note.append(document.createTextNode(` 访问日期：${ref.accessed}。`));
    const links = document.createElement('div'); links.className = 'ref-links';
    const sourceLinks = [...(ref.links || [])]; if (ref.doi) sourceLinks.unshift(['DOI', `https://doi.org/${ref.doi}`]);
    for (const [label, url] of sourceLinks) {
      const link = document.createElement('a'); link.textContent = label + ' ↗'; link.href = url; link.target = '_blank'; link.rel = 'noopener'; links.append(link);
    }
    details.append(summary, note, links);
    const backs = document.createElement('div'); backs.className = 'ref-links ref-backlinks'; const chapters = new Set();
    item.locations.forEach(location => {
      if (chapters.has(location.chapter)) return; chapters.add(location.chapter);
      const back = document.createElement('a'); back.href = '#' + location.id; back.className = 'ref-back'; back.textContent = '↩ ' + location.chapter;
      back.setAttribute('aria-label', `返回${location.chapter}中对文献 ${item.number} 的引用`); backs.append(back);
    });
    li.append(citation, details, backs); list.append(li);
  }
})();
