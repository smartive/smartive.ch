'use client';

import { FC, useEffect } from 'react';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

let konamiCodePosition = 0;

const startEasterEgg = () => {
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

  const main = document.getElementsByTagName('main').item(0);
  if (body && main) {
    body.removeChild(main);
    front.appendChild(main);
  }

  const egg = document.createElement('iframe');
  egg.style.border = 'none';
  egg.style.width = '100vw';
  egg.style.height = '100vh';
  back.appendChild(egg);

  body?.appendChild(container);

  if (egg.contentWindow) {
    egg.contentWindow.document.body.innerHTML = `<canvas width="512" height="512"></canvas>`;

    const script = document.createElement('script');
    script.src = '/kube.js';
    egg.contentWindow.document.body.appendChild(script);
  }

  setTimeout(() => (flipper.style.transform = 'rotateY(180deg)'), 100);
};

const listener = ({ key }: KeyboardEvent) => {
  const requiredKey = konamiCode[konamiCodePosition];

  if (key === requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
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
};

export const Kube: FC = () => {
  useEffect(() => {
    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);

  return <></>;
};
