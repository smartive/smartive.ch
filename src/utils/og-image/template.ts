import {
  BlobType,
  BlobVariations,
  BrandColor,
  mapColorToHex,
  PositionX,
  PositionY,
  randomNumberInRange,
} from '@smartive/guetzli';
import { svg } from 'blobs/v2';
import marked from 'marked';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';

const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss(theme: BrandColor, fontSize: string) {
  const foreground = '#252525';
  const background = mapColorToHex(theme);

  return `
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${process.env.NEXT_PUBLIC_SITE_URL}/fonts/inter-v3-latin-600.woff2) format('woff2');
    }

    @font-face {
        font-family: 'IBM Plex Serif';
        font-style: italic;
        font-weight: 400;
        src: url(${process.env.NEXT_PUBLIC_SITE_URL}/fonts/ibm-plex-serif-v9-latin-italic.woff2) format('woff2');
    }

    body {
        overflow: hidden;
        background: ${background};
        height: 100vh;
        display: flex;
        text-align: left;
        align-items: center;
        justify-content: center;
    }

    .text {
        z-index: 10;
        padding: 8rem;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        font-weight: 600;
        color: ${foreground};
        line-height: 1.8;
    }

    em {
        font-family: 'IBM Plex Serif', serif;
        font-style: italic;
        font-weight: 400;
    }

    .blobs {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 0;
    }

    /* Required for emojis to be sized according to the text (https://github.com/twitter/twemoji#inline-styles) */
    img.emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
     }
`;
}

const getBlobProps = (size: number) => ({
  seed: Math.random(),
  extraPoints: randomNumberInRange(3, 6),
  randomness: randomNumberInRange(3, 6),
  size,
});

const getBlobStyle = ({ color, positionX, positionY }: BlobType) => `
    position: absolute;
    ${positionY === PositionY.top ? 'top' : 'bottom'}: -${randomNumberInRange(20, 30)}%;
    ${positionX === PositionX.right ? 'right' : 'left'}: -${randomNumberInRange(20, 30)}%;
    color: ${mapColorToHex(color)};
`;

const getRandomBlobs = (theme: BrandColor, size: number) => {
  const variations = BlobVariations[theme][randomNumberInRange(0, 2)] || BlobVariations[theme][0];
  return variations
    .map(
      (type) => `
        <div style="${getBlobStyle(type)}">
            ${svg(getBlobProps(size), { fill: 'currentColor' })}
        </div>
    `
    )
    .join('');
};

export function getHtml(parsedReq: ParsedRequest) {
  const { text, theme, md, fontSize, width, height } = parsedReq;
  const blobSize = (width + height) / 2.5;

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>OG Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
        <div class="text">
            ${emojify(md ? marked(text) : sanitizeHtml(text))}
        </div>
        <div class="blobs">
            ${getRandomBlobs(theme, blobSize)}
        </div>
    </body>
</html>`;
}
