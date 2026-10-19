const sections = [...document.querySelectorAll('main > section')];
const nav = document.getElementById('nav');

function navigationLink(target, label, number, className) {
  const link = document.createElement('a');
  link.href = `#${target.id}`;
  link.className = className;
  const index = document.createElement('span');
  index.textContent = number;
  link.append(index, document.createTextNode(label));
  return link;
}

const navigation = sections.map(section => {
  const group = document.createElement('div');
  group.className = 'nav-group';
  const parent = navigationLink(section, section.dataset.title, section.dataset.number, 'nav-parent');
  group.append(parent);
  const children = [...section.querySelectorAll('[data-nav]')].map(target => ({
    target,
    link: navigationLink(target, target.dataset.nav, target.dataset.number, 'nav-child')
  }));
  if (children.length) {
    const list = document.createElement('div');
    list.className = 'nav-sub';
    children.forEach(item => list.append(item.link));
    group.append(list);
  }
  nav.append(group);
  return { parent, children };
});

let active = 0;
function setActive(link, current) {
  link.classList.toggle('active', current);
  if (current) link.setAttribute('aria-current', 'location');
  else link.removeAttribute('aria-current');
}

function update() {
  let index = 0;
  sections.forEach((section, i) => {
    if (section.getBoundingClientRect().top < 140) index = i;
  });
  active = index;
  let subsection;
  navigation.forEach((entry, i) => {
    if (i === active) {
      entry.children.forEach(item => {
        if (item.target.getBoundingClientRect().top < 140) subsection = item;
      });
    }
    setActive(entry.parent, i === active && !subsection);
    entry.parent.classList.toggle('chapter-active', i === active);
    entry.children.forEach(item => setActive(item.link, i === active && item === subsection));
  });
  document.getElementById('chapter').textContent = sections[active].dataset.title
    + (subsection ? ` / ${subsection.target.dataset.nav}` : '');
  document.getElementById('position').textContent = `${active + 1} / ${sections.length} · ${sections[active].dataset.title}`;
  document.getElementById('progress').style.width = `${(active + 1) / sections.length * 100}%`;
  document.getElementById('prev').disabled = active === 0;
  document.getElementById('next').disabled = active === sections.length - 1;
}

function revealAnchor() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;
  for (let node = target; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS') node.open = true;
  }
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'instant' });
    update();
  });
}

function move(direction) {
  const target = sections[Math.max(0, Math.min(sections.length - 1, active + direction))];
  target.scrollIntoView({ behavior: 'auto' });
  history.replaceState(null, '', `#${target.id}`);
}

document.getElementById('prev').onclick = () => move(-1);
document.getElementById('next').onclick = () => move(1);
window.addEventListener('scroll', update, { passive: true });
window.addEventListener('resize', update);
window.addEventListener('hashchange', revealAnchor);
if (location.hash) revealAnchor();
update();

let printDetails = [];
window.addEventListener('beforeprint', () => {
  printDetails = [...document.querySelectorAll('details')].map(item => [item, item.open]);
  printDetails.forEach(([item]) => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  printDetails.forEach(([item, open]) => { item.open = open; });
});
