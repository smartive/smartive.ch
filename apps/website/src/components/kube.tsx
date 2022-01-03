import { useEffect } from 'react';

const allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b',
};

const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

let konamiCodePosition = 0;

function startEasterEgg() {
  const body = document.getElementsByTagName('body').item(0);

  const container = document.createElement('div');
  container.style.perspective = '1000px';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.overflow = 'hidden';

  const flipper = document.createElement('div');
  flipper.style.position = 'relative';
  flipper.style.transition = '0.6s';
  flipper.style.transformStyle = 'preserve-3d';
  container.appendChild(flipper);

  const front = document.createElement('div');
  front.style.width = '100vw';
  front.style.height = '100vh';
  front.style.backfaceVisibility = 'hidden';
  front.style.position = 'absolute';
  front.style.top = '0';
  front.style.left = '0';
  front.style.zIndex = '2';
  front.style.transform = 'rotateY(0deg)';
  flipper.appendChild(front);

  const back = document.createElement('div');
  back.style.width = '100vw';
  back.style.height = '100vh';
  back.style.backfaceVisibility = 'hidden';
  back.style.position = 'absolute';
  back.style.top = '0';
  back.style.left = '0';
  back.style.transform = 'rotateY(180deg)';
  flipper.appendChild(back);

  const next = document.getElementById('__next');
  body.removeChild(next);
  front.appendChild(next);

  const egg = document.createElement('iframe');
  egg.style.border = 'none';
  egg.style.width = '100vw';
  egg.style.height = '100vh';
  back.appendChild(egg);

  body.appendChild(container);

  egg.contentWindow.document.body.innerHTML = `<canvas width="512" height="512"></canvas>`;

  const script = document.createElement('script');
  script.src = '/kube.js';
  egg.contentWindow.document.body.appendChild(script);

  setTimeout(() => (flipper.style.transform = 'rotateY(180deg)'), 100);
}

function listener(e) {
  const key = allowedKeys[e.keyCode];
  const requiredKey = konamiCode[konamiCodePosition];

  if (key === requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      try {
        startEasterEgg();
      } finally {
        document.removeEventListener('keydown', listener);
      }
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
}

export const useKube = () => {
  useEffect(() => {
    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);
};
