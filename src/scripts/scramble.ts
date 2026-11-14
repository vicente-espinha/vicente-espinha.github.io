// "Decodes" text: random glyphs resolve into the real text from left to right.
export {};
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]#$%&*+=';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scramble(el: HTMLElement) {
  const final = el.textContent?.trim() ?? '';
  const delay = Number(el.dataset.scrambleDelay ?? 0);
  const duration = 900;
  el.setAttribute('aria-label', final);

  const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  const frameText = (revealed: number) =>
    final
      .split('')
      .map((ch, i) => (ch === ' ' || i < revealed ? ch : randomGlyph()))
      .join('');

  el.textContent = frameText(0);
  let start = 0;
  let last = 0;

  const tick = (now: number) => {
    if (!start) start = now + delay;
    const t = now - start;
    if (t < 0) {
      // Before the decode starts, keep cycling glyphs (throttled).
      if (now - last > 60) {
        el.textContent = frameText(0);
        last = now;
      }
      requestAnimationFrame(tick);
      return;
    }
    const progress = Math.min(1, t / duration);
    if (now - last > 40 || progress === 1) {
      el.textContent = frameText(Math.floor(progress * final.length));
      last = now;
    }
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = final;
  };
  requestAnimationFrame(tick);
}

if (!reduced) {
  document.querySelectorAll<HTMLElement>('[data-scramble]').forEach(scramble);
}
