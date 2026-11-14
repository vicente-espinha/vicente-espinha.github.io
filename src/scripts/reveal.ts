// Fades elements with the `.reveal` class in as they scroll into view.
export {};
// Elements already on screen at page load are held back a little and staggered,
// so they arrive after the intro (name reveal + title decode) instead of with it.
const INTRO_DELAY = 900;
const STAGGER = 110;
const FIRST_LOAD_WINDOW = 400;

const items = document.querySelectorAll<HTMLElement>('.reveal');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced || !('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-visible'));
} else {
  const loadedAt = performance.now();
  let initialCount = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      const firstLoad = performance.now() - loadedAt < FIRST_LOAD_WINDOW;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (firstLoad) {
          el.style.setProperty('--reveal-delay', `${INTRO_DELAY + initialCount * STAGGER}ms`);
          initialCount++;
          // Drop the long delay once revealed so hover transitions stay snappy.
          el.addEventListener(
            'transitionend',
            () => el.style.removeProperty('--reveal-delay'),
            { once: true },
          );
        }
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  items.forEach((el) => observer.observe(el));
}
