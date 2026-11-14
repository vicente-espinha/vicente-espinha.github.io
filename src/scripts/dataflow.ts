type Packet = {
  vertical: boolean;
  lane: number; // fixed coordinate (y for horizontal, x for vertical)
  pos: number; // head position along the travel axis
  speed: number; // px per second
  length: number; // tail length in px
  alpha: number;
};

const GAP = 28; // grid spacing in px
const INTRO_MS = 1400; // grid sweep-in duration
const CURSOR_RADIUS = 170;

function hexToRgb(value: string): [number, number, number] {
  const hex = value.trim().replace('#', '');
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return [94, 234, 212];
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function startDataFlow(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const accentVar = getComputedStyle(document.documentElement).getPropertyValue('--color-accent');
  let [r, g, b] = hexToRgb(accentVar || '#5eead4');
  const accent = (a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

  let w = 0;
  let h = 0;
  let dpr = 1;
  let grid: HTMLCanvasElement | null = null;
  let packets: Packet[] = [];
  const mouse = { x: -9999, y: -9999 };

  const cols = () => Math.ceil(w / GAP);
  const rows = () => Math.ceil(h / GAP);

  function newPacket(initial: boolean): Packet {
    const vertical = Math.random() < 0.3;
    const extent = vertical ? h : w;
    const length = 80 + Math.random() * 160;
    const lane = vertical
      ? Math.floor(Math.random() * cols()) * GAP + GAP / 2
      : Math.floor(Math.random() * rows()) * GAP + GAP / 2;
    return {
      vertical,
      lane,
      pos: initial ? Math.random() * extent : -Math.random() * extent * 0.6,
      speed: 50 + Math.random() * 140,
      length,
      alpha: 0.25 + Math.random() * 0.45,
    };
  }

  function buildGrid() {
    grid = document.createElement('canvas');
    grid.width = w * dpr;
    grid.height = h * dpr;
    const gctx = grid.getContext('2d');
    if (!gctx) return;
    gctx.scale(dpr, dpr);
    gctx.fillStyle = 'rgba(148, 163, 184, 0.16)';
    for (let x = GAP / 2; x < w; x += GAP) {
      for (let y = GAP / 2; y < h; y += GAP) {
        gctx.fillRect(x - 0.6, y - 0.6, 1.2, 1.2);
      }
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildGrid();
    const count = Math.min(finePointer ? 34 : 16, Math.round((w * h) / 42000));
    packets = Array.from({ length: count }, () => newPacket(true));
  }

  function drawGrid(progress: number) {
    if (!grid) return;
    ctx!.save();
    ctx!.beginPath();
    ctx!.rect(0, 0, w * easeOut(progress), h);
    ctx!.clip();
    ctx!.globalAlpha = progress;
    ctx!.drawImage(grid, 0, 0, w, h);
    ctx!.restore();
  }

  function drawCursorGlow() {
    if (mouse.x < -1000) return;
    const x0 = Math.max(GAP / 2, Math.floor((mouse.x - CURSOR_RADIUS) / GAP) * GAP + GAP / 2);
    const y0 = Math.max(GAP / 2, Math.floor((mouse.y - CURSOR_RADIUS) / GAP) * GAP + GAP / 2);
    for (let x = x0; x <= mouse.x + CURSOR_RADIUS; x += GAP) {
      for (let y = y0; y <= mouse.y + CURSOR_RADIUS; y += GAP) {
        const d = Math.hypot(x - mouse.x, y - mouse.y);
        if (d > CURSOR_RADIUS) continue;
        const k = 1 - d / CURSOR_RADIUS;
        ctx!.fillStyle = accent(k * k * 0.85);
        const s = 1.2 + k * 1.6;
        ctx!.fillRect(x - s / 2, y - s / 2, s, s);
      }
    }
  }

  function drawPacket(p: Packet, fade: number) {
    const head = p.pos;
    const tail = p.pos - p.length;
    const [x1, y1, x2, y2] = p.vertical ? [p.lane, tail, p.lane, head] : [tail, p.lane, head, p.lane];
    const grad = ctx!.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0, accent(0));
    grad.addColorStop(1, accent(p.alpha * fade));
    ctx!.strokeStyle = grad;
    ctx!.lineWidth = 1.2;
    ctx!.beginPath();
    ctx!.moveTo(x1, y1);
    ctx!.lineTo(x2, y2);
    ctx!.stroke();

    // Glowing head.
    ctx!.fillStyle = accent(0.12 * fade);
    ctx!.beginPath();
    ctx!.arc(x2, y2, 5, 0, Math.PI * 2);
    ctx!.fill();
    ctx!.fillStyle = accent(Math.min(1, p.alpha + 0.3) * fade);
    ctx!.beginPath();
    ctx!.arc(x2, y2, 1.6, 0, Math.PI * 2);
    ctx!.fill();
  }

  resize();

  if (reduced) {
    drawGrid(1);
    window.addEventListener('resize', () => {
      resize();
      drawGrid(1);
    });
    return;
  }

  window.addEventListener('resize', resize);
  if (finePointer) {
    window.addEventListener(
      'pointermove',
      (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      },
      { passive: true },
    );
    document.documentElement.addEventListener('pointerleave', () => {
      mouse.x = mouse.y = -9999;
    });
  }

  // Re-read the accent if it changes (e.g. while trying out colors).
  new MutationObserver(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--color-accent');
    if (v) [r, g, b] = hexToRgb(v);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'class'] });

  let t0 = 0;
  let last = 0;
  let running = true;

  const frame = (now: number) => {
    if (!running) return;
    if (!t0) t0 = last = now;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const intro = Math.min(1, (now - t0) / INTRO_MS);

    ctx!.clearRect(0, 0, w, h);
    drawGrid(intro);
    drawCursorGlow();

    // Packets start flowing once the grid is mostly in.
    const packetFade = Math.max(0, Math.min(1, (intro - 0.5) / 0.5));
    if (packetFade > 0) {
      for (const p of packets) {
        p.pos += p.speed * dt;
        const extent = p.vertical ? h : w;
        if (p.pos - p.length > extent) Object.assign(p, newPacket(false));
        drawPacket(p, packetFade);
      }
    }
    requestAnimationFrame(frame);
  };

  document.addEventListener('visibilitychange', () => {
    running = document.visibilityState === 'visible';
    if (running) {
      last = performance.now();
      requestAnimationFrame(frame);
    }
  });

  requestAnimationFrame(frame);
}
