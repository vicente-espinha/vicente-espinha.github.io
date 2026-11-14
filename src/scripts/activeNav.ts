// Highlights the sidebar link for the section currently being read.
export {};
const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));

function update() {
  // The active section is the last one whose top has passed 40% of the viewport.
  const line = window.innerHeight * 0.4;
  let current = sections[0]?.id;
  for (const s of sections) {
    if (s.getBoundingClientRect().top <= line) current = s.id;
  }
  // At the very bottom, the last section is always active.
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
    current = sections.at(-1)?.id ?? current;
  }
  links.forEach((a) => {
    const active = a.dataset.nav === current;
    a.dataset.active = String(active);
    if (active) a.setAttribute('aria-current', 'location');
    else a.removeAttribute('aria-current');
  });
}

if (links.length && sections.length) {
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
  update();
}
