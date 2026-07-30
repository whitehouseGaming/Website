function initVideoFilter() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-video-filter]');
  const cards = document.querySelectorAll<HTMLElement>('[data-video-card]');
  if (!buttons.length || buttons[0].dataset.bound) return;
  buttons.forEach((b) => (b.dataset.bound = 'true'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.videoFilter ?? 'all';

      buttons.forEach((b) => b.classList.toggle('is-active', b === button));

      cards.forEach((card) => {
        const refs = (card.dataset.videoRefs ?? '').split(',');
        const show = filter === 'all' || refs.includes(filter);
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

initVideoFilter();
document.addEventListener('astro:page-load', initVideoFilter);
