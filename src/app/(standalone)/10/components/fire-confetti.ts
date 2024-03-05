export const fireConfetti = async () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (mediaQuery.matches) {
    return;
  }

  const Confetti = await import('js-confetti');
  const confetti = new Confetti.default();

  await confetti.addConfetti({
    confettiColors: ['#F8935A', '#7DDDD1', '#6986E8'],
  });
};
