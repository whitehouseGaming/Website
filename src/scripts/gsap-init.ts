import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initStatCounters() {
  const instant = reduceMotion();
  document.querySelectorAll<HTMLElement>('[data-stat-value]').forEach((el) => {
    if (el.dataset.bound) return;
    el.dataset.bound = 'true';

    const target = Number(el.dataset.statValue ?? '0');
    const suffix = el.dataset.statSuffix ?? '';
    const counter = { value: 0 };

    gsap.to(counter, {
      value: target,
      duration: instant ? 0.01 : 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value)}${suffix}`;
      },
    });
  });
}

function initTimelineDraw() {
  const instant = reduceMotion();
  const line = document.querySelector<SVGLineElement | HTMLElement>('[data-timeline-line]');
  const items = document.querySelectorAll<HTMLElement>('[data-timeline-item]');
  if (line && !line.dataset.bound) {
    line.dataset.bound = 'true';
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: instant
          ? { trigger: line, start: 'top 80%', once: true }
          : { trigger: line, start: 'top 80%', end: 'bottom 60%', scrub: 0.5 },
      },
    );
  }
  items.forEach((item, i) => {
    if (item.dataset.bound) return;
    item.dataset.bound = 'true';
    gsap.fromTo(
      item,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: instant ? 0.01 : 0.6,
        delay: instant ? 0 : i * 0.05,
        ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%', once: true },
      },
    );
  });
}

function initReveals() {
  const instant = reduceMotion();
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => {
    if (el.dataset.bound) return;
    el.dataset.bound = 'true';
    gsap.fromTo(
      el,
      { opacity: 0, y: instant ? 0 : 28 },
      {
        opacity: 1,
        y: 0,
        duration: instant ? 0.01 : 0.7,
        delay: instant ? 0 : (i % 6) * 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

function initTilt() {
  if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) return;
  if (reduceMotion()) return;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = 'true';

    const quickX = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power2.out' });
    const quickY = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power2.out' });

    card.style.transformPerspective = '600';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      quickX(px * 10);
      quickY(py * -10);
    });

    card.addEventListener('mouseleave', () => {
      quickX(0);
      quickY(0);
    });
  });
}

function initHeroText() {
  const instant = reduceMotion();
  document.querySelectorAll<HTMLElement>('[data-hero-line]').forEach((el, i) => {
    if (el.dataset.bound) return;
    el.dataset.bound = 'true';
    gsap.fromTo(
      el,
      { opacity: 0, y: instant ? 0 : 40 },
      { opacity: 1, y: 0, duration: instant ? 0.01 : 0.8, delay: instant ? 0 : i * 0.12, ease: 'power3.out' },
    );
  });
}

export function initAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  initHeroText();
  initStatCounters();
  initTimelineDraw();
  initReveals();
  initTilt();
  ScrollTrigger.refresh();
}
