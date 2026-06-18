// ─── UPDATE when LinkedIn is ready ─────────────────────────────────────────
const LINKEDIN_URL = 'https://www.linkedin.com/in/ugochukwu-wisdom-895235416';
// ────────────────────────────────────────────────────────────────────────────

// Replace placeholder hrefs set in HTML
document.querySelectorAll('[href="https://www.linkedin.com/in/ugochukwu-wisdom-895235416"]').forEach(el => el.href = LINKEDIN_URL);

// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// ─── Theme toggle ────────────────────────────────────────────────────────────
const themeBtn       = document.getElementById('themeBtn');
const iconSun         = themeBtn.querySelector('.icon-sun');
const iconMoon        = themeBtn.querySelector('.icon-moon');
const themeColorMeta  = document.getElementById('themeColorMeta');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark';
  iconSun.style.display  = isDark ? 'block' : 'none';
  iconMoon.style.display = isDark ? 'none'  : 'block';
  themeColorMeta.setAttribute('content', isDark ? '#0d0d0d' : '#faf7f2');
}

// Respect saved preference, then OS preference, then default dark
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});
// ────────────────────────────────────────────────────────────────────────────

// ─── Typewriter ──────────────────────────────────────────────────────────────
(function typewriter() {
  const el    = document.getElementById('tw');
  const words = [
    'web applications.',
    'business websites.',
    'school platforms.',
    'interactive dashboards.',
    'landing pages.',
    'clean, fast interfaces.'
  ];
  let wIdx = 0, cIdx = 0, deleting = false;
  function tick() {
    const word = words[wIdx];
    el.textContent = word.slice(0, cIdx);
    if (!deleting) {
      if (cIdx < word.length) { cIdx++; setTimeout(tick, 85); }
      else { deleting = true;   setTimeout(tick, 2000); }
    } else {
      if (cIdx > 0)  { cIdx--; setTimeout(tick, 40); }
      else { deleting = false; wIdx = (wIdx + 1) % words.length; setTimeout(tick, 300); }
    }
  }
  tick();
})();
// ────────────────────────────────────────────────────────────────────────────
// Creates an element without innerHTML — no XSS risk regardless of data source
function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}
function txt(tag, className, text) {
  const node = el(tag, className);
  node.textContent = text;
  return node;
}
// ────────────────────────────────────────────────────────────────────────────

// Projects
const projects = [
  { name: 'SkyCast', tag: 'Weather / Dashboard',
    problem:   'Checking the weather usually means a cluttered app or a boring interface that buries the data you actually need.',
    solution:  'A premium weather dashboard with live conditions, hourly trends, a 24 hours forecast, geolocation, and saved favorites — all in a clean glassmorphism interface.',
    challenge: 'Syncing the geolocation and weather API calls without race conditions, and building a graceful fallback for when users deny location access.',
    outcome:   'Users get local weather data instantly on first load with no manual input. The full forecast and hourly breakdown are accessible on any device in under two seconds.',
    tech: ['JavaScript', 'REST API', 'Geolocation API', 'JSON', 'CSS', 'PWA', 'Responsive Design' ],
    live: 'https://skycast-weather-app-drab.vercel.app/' },

  { name: 'QuizOra', tag: 'Education / Quiz Platform',
    problem:   'Static quiz apps feel passive and rarely keep learners engaged long enough to finish.',
    solution:  'A polished quiz platform with smooth interactions and instant feedback that keeps users engaged from start to finish.',
    challenge: 'Keeping quiz state consistent across multiple screens without losing progress, and ensuring score updates were announced correctly to screen readers.',
    outcome:   'Learners complete full quiz sessions with immediate feedback; accessible markup means users on assistive technology can participate without friction.',
    tech: ['JavaScript', 'HTML', 'CSS', 'PWA', 'Responsive Design'],
    live: 'https://quiz-ora-tan.vercel.app/' },

  { name: 'Nova Calc', tag: 'Utility / Productivity',
    problem:   'Default calculators are visually dated and frustrating for users who rely on keyboard shortcuts.',
    solution:  'A keyboard-first calculator with a sharp, minimal interface and zero learning curve.',
    challenge: 'Implementing correct operator precedence in chained calculations and making keyboard shortcuts feel native without conflicting with browser defaults.',
    outcome:   'All standard and chained calculations work from the keyboard. Zero external dependencies mean the app loads in under a second on any connection.',
    tech: ['JavaScript', 'HTML', 'CSS', 'PWA', 'Responsive Design'],
    live: 'https://nova-calc-one.vercel.app/' },

  { name: 'Shopping Hub', tag: 'E-commerce',
    problem:   'Small online stores lose buyers to slow product browsing and clunky cart experiences.',
    solution:  'A clean storefront with fast product discovery, instant filtering, an AI Chatbot for user assistant, clean UI/UX interface and a frictionless cart flow.',
    challenge: 'Managing cart state across the whole app without a dedicated library, while keeping product filtering fast on lower-end devices.',
    outcome:   'The full browse-to-cart flow runs as a single-page experience. Optimised state management keeps filtering instant, even on older mobile hardware.',
    tech: ['JavaScript', 'HTML', 'CSS', 'JSON', 'API', 'PWA', 'Responsive Design'],
    live: 'https://shoping-hub-xi.vercel.app/' },

  { name: 'Emeakroha Foundation School', tag: 'Education / Institution',
    problem:   'The school had no online presence — parents could not find program details, fees, or contact information without calling.',
    solution:  'A professional school website with clear program listings, real AI chatbots, real announcement portal, admissions information, and a trustworthy visual identity.',
    challenge: 'Translating a real institution\'s brand into a credible digital identity, optimised for the slower mobile connections common across Nigeria.',
    outcome:   'Parents can find programs, fees, contact, and stay updated with real announcement details, without a phone call. The site loads reliably on 3G — the network most visitors use.',
      tech: ['JavaScript', 'HTML', 'CSS', 'APIs', 'PWA', 'Responsive Design'],
    live: 'https://emeakroha-foundation-school.vercel.app/' },

  { name: 'Grade Flow', tag: 'EdTech / Dashboard',
    problem:   'Teachers waste hours manually tracking and computing grades across spreadsheets with no single place to review the class.',
    solution:  'A streamlined grading dashboard for entering, tracking, and computing student results in one place.',
    challenge: 'Designing a data-dense table UI that stays readable on tablets, and computing grades in real time without performance drops on large class sizes.',
    outcome:   'Teachers compute and review a full class\'s grades in minutes. Real-time calculation eliminates the manual errors that spreadsheet-based grading introduces.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://grade-flow-ivory.vercel.app/' }
];

const list = document.getElementById('projectList');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { rootMargin: '-60px' });

projects.forEach((p, i) => {
  const card = el('article', 'project reveal' + (i % 2 === 1 ? ' reverse' : ''));

  // ── Media ──────────────────────────────────────────────────────────────
  const thumb = 'https://s0.wordpress.com/mshots/v1/' +
    encodeURIComponent(p.live) + '?w=1280&h=960';
  const media = el('div', 'project-media');
  const img   = el('img');
  img.src     = thumb;
  img.alt     = p.name + ' preview';
  img.loading = 'lazy';
  media.appendChild(img);

  // ── Text column ────────────────────────────────────────────────────────
  const textCol = el('div', 'project-text');

  // meta row
  const meta  = el('div', 'project-meta');
  const tag   = txt('span', 'tag', p.tag);
  const line  = el('span', 'line');
  const count = txt('span', 'count', '0' + (i + 1) + ' / 0' + projects.length);
  meta.append(tag, line, count);

  // heading
  const heading = txt('h3', null, p.name);

  // info blocks — helper to keep it DRY
  function block(label, text, extra) {
    const wrap = el('div', 'block' + (extra ? ' ' + extra : ''));
    const b = txt('b', null, label);
    const span = txt('span', null, text);
    wrap.append(b, span);
    return wrap;
  }

  // tech tags
  const techWrap = el('div', 'tech');
  p.tech.forEach(t => techWrap.appendChild(txt('span', null, t)));

  // links — Live Demo only (GitHub profile stays in the contact section)
  const links   = el('div', 'project-links');
  const liveLink = el('a');
  liveLink.href   = p.live;
  liveLink.target = '_blank';
  liveLink.rel    = 'noopener';
  liveLink.textContent = 'Live Demo ↗';
  links.appendChild(liveLink);

  textCol.append(
    meta,
    heading,
    block('Problem',   p.problem),
    block('Solution',  p.solution),
    block('Challenge', p.challenge),
    block('Outcome',   p.outcome, 'outcome-block'),
    techWrap,
    links
  );

  card.append(media, textCol);
  list.appendChild(card);
  io.observe(card);
});

// ─── Technical Skills ────────────────────────────────────────────────────────
const SVG_NS = 'http://www.w3.org/2000/svg';

function makeSvgIcon(paths, opts) {
  opts = opts || {};
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('width',  opts.size || '20');
  svg.setAttribute('height', opts.size || '20');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', opts.fill || 'none');
  svg.setAttribute('stroke', opts.stroke || 'var(--accent)');
  svg.setAttribute('stroke-width', opts.strokeWidth || '1.5');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  paths.forEach(function(p) {
    const node = document.createElementNS(SVG_NS, p.tag);
    Object.entries(p.attrs).forEach(function(kv) { node.setAttribute(kv[0], kv[1]); });
    svg.appendChild(node);
  });
  return svg;
}

const checkPaths = [{ tag: 'polyline', attrs: { points: '20 6 9 17 4 12' } }];

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const techStack = [
  { name: 'HTML5',             url: DI + 'html5/html5-original.svg' },
  { name: 'CSS3',              url: DI + 'css3/css3-original.svg' },
  { name: 'JavaScript (ES6+)', url: DI + 'javascript/javascript-original.svg' },
  { name: 'JSON',               svg: [
    { tag:'path', attrs:{ d:'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1' }},
    { tag:'path', attrs:{ d:'M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1' }}
  ]},
  { name: 'REST APIs',          svg: [
    { tag:'polygon', attrs:{ points:'13 2 3 14 12 14 11 22 21 10 12 10 13 2', fill:'var(--accent)', stroke:'none' }}
  ]},
  { name: 'Firebase',          url: DI + 'firebase/firebase-plain.svg' },
  { name: 'Git & GitHub',      url: DI + 'git/git-original.svg' }
];

const expertise = [
  'Responsive Web Design',
  'Progressive Web App (PWA) Development',
  'Performance Optimization',
  'Deployment & Hosting',
  'Cross-Browser & Cross-Device Compatibility'
];

function buildSkillRow(iconNode, label) {
  const row      = el('li', 'skills-row');
  const iconWrap = el('span', 'skills-row-icon');
  iconWrap.appendChild(iconNode);
  row.append(iconWrap, txt('span', 'skills-row-label', label));
  return row;
}

const techList = document.getElementById('techStackList');
techStack.forEach(function(item) {
  let icon;
  if (item.url) {
    icon = el('img');
    icon.src = item.url; icon.alt = item.name;
    icon.width = 20; icon.height = 20; icon.loading = 'lazy';
  } else {
    icon = makeSvgIcon(item.svg, { size: 20 });
  }
  techList.appendChild(buildSkillRow(icon, item.name));
});

const expertiseList = document.getElementById('expertiseList');
expertise.forEach(function(label) {
  const icon = makeSvgIcon(checkPaths, { stroke: 'var(--accent)', strokeWidth: '2.5' });
  expertiseList.appendChild(buildSkillRow(icon, label));
});
// ────────────────────────────────────────────────────────────────────────────

// Reveal static elements
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form
// ─── Contact form — send via Email or WhatsApp ───────────────────────────────
let sendVia = 'email';
const sendIndicator = document.getElementById('sendIndicator');

document.querySelectorAll('.send-opt').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.send-opt').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    sendVia = btn.dataset.via;
    sendIndicator.style.transform = sendVia === 'whatsapp'
      ? 'translateX(calc(100% + 4px))'
      : 'translateX(0)';
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const f       = e.target;
  const name    = f.name.value.trim();
  const email   = f.email.value.trim();
  const message = f.message.value.trim();
  if (!name || !email || !message) { alert('Please fill out all fields.'); return; }

  if (sendVia === 'whatsapp') {
    const text = encodeURIComponent(
      'Hi Wisdom, my name is ' + name + ' (' + email + ').\n\n' + message
    );
    window.open('https://wa.me/2347063376182?text=' + text, '_blank');
  } else {
    const subject = encodeURIComponent('Project enquiry from ' + name);
    const body    = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:geniuswisdom123@gmail.com?subject=' + subject + '&body=' + body;
  }
});
// ────────────────────────────────────────────────────────────────────────────

// ─── PWA: service worker registration ────────────────────────────────────────
// Registering this makes the site installable (the browser's "Add to Home
// Screen" / install icon) and lets it run offline. Registration runs after
// page load so it never competes with the page's own resources for bandwidth.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // Install/offline support is a bonus feature — fail silently if blocked
      // (e.g. some privacy-focused browsers disable service workers).
    });
  });
}
// ────────────────────────────────────────────────────────────────────────────
