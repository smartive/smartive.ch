import React from 'react';

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

  const gatsby = body.firstChild;
  body.removeChild(gatsby);
  front.appendChild(gatsby);

  const egg = document.createElement('iframe');
  egg.style.border = 'none';
  egg.style.width = '100vw';
  egg.style.height = '100vh';
  back.appendChild(egg);

  body.appendChild(container);

  egg.contentWindow.document.body.innerHTML = `<canvas width="512" height="512"></canvas>`;

  const script = document.createElement('script');
  script.src = './tracker.js';
  egg.contentWindow.document.body.appendChild(script);

  setTimeout(() => {
    flipper.style.transform = 'rotateY(180deg)';
  }, 100);
}

function listener(e) {
  const key = allowedKeys[e.keyCode];
  const requiredKey = konamiCode[konamiCodePosition];

  if (key === requiredKey) {
    konamiCodePosition += 1;
    if (konamiCodePosition === konamiCode.length) {
      try {
        startEasterEgg();
      } catch (error) {
        // do nothing
      } finally {
        document.removeEventListener('keydown', listener);
      }
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
}

export class KubeConfig extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      if (!window.attached) {
        document.addEventListener('keydown', listener);
        window.attached = true;
      }
    }
  }

  render() {
    return <></>;
  }
}

export default KubeConfig;
