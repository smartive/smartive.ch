import localFont from 'next/font/local';
import { FC } from 'react';

const NeueMachina = localFont({
  display: 'swap',
  src: [
    {
      path: './PPNeueMachina-InktrapUltrabold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const LangerSamstagLogo: FC = () => (
  <div className="my-12 lg:my-48">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 1200 600"
      style={{ whiteSpace: 'pre', background: '#4f4be9', ...NeueMachina.style }}
      className="rounded"
    >
      <path
        id="LS-Path-1"
        fill="none"
        stroke="#ff6e4e"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="80"
        d="M-26.5 485.5C325 485.5 600 322 600-38.5"
      ></path>
      <text
        fill="#4f4be9"
        fontSize="48"
        letterSpacing="0"
        wordSpacing="0"
        writingMode="vertical-rl"
        style={{ lineHeight: 16 }}
      >
        <textPath xlinkHref="#LS-Path-1">
          Langer Saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamstag{' '}
          <animate
            attributeName="startOffset"
            begin="0s"
            dur="12s"
            from="120%"
            repeatCount="indefinite"
            to="-160%"
          ></animate>
        </textPath>
      </text>
      <path
        id="LS-Path-2"
        fill="none"
        stroke="#ff6e4e"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="80"
        d="M283.5-38.5c0 199.5 14.732 301.806 258 353 316 66.5 522 0 522 309"
      ></path>
      <text
        fill="#4f4be9"
        fontSize="48"
        letterSpacing="0"
        wordSpacing="0"
        writingMode="vertical-rl"
        style={{ lineHeight: 16 }}
      >
        <textPath xlinkHref="#LS-Path-2">
          Musik, Theater, Literatur, Film, Comedy, Ausstellungen, Street Art, Workshops, Parties{' '}
          <animate
            attributeName="startOffset"
            begin="0s"
            dur="15s"
            from="100%"
            repeatCount="indefinite"
            to="-200%"
          ></animate>
        </textPath>
      </text>
      <text
        fill="#feea1e"
        fontSize="200"
        letterSpacing="0"
        textAnchor="middle"
        transform="translate(600 270.4)"
        wordSpacing="0"
        writingMode="horizontal-tb"
        style={{ lineHeight: 160 }}
      >
        Langer
      </text>
      <text
        fill="#feea1e"
        fontSize="200"
        letterSpacing="0"
        textAnchor="middle"
        transform="translate(574.361 447)"
        wordSpacing="0"
        writingMode="horizontal-tb"
        style={{ lineHeight: 160 }}
      >
        Samstag
      </text>
      <path
        id="Path-4"
        fill="none"
        stroke="#ff6e4e"
        strokeLinejoin="round"
        strokeWidth="80"
        d="M-54 87c373 156 315 413 263 560"
      ></path>
      <text
        fill="#4f4be9"
        fontSize="48"
        letterSpacing="0"
        wordSpacing="0"
        writingMode="vertical-rl"
        style={{ lineHeight: 16 }}
      >
        <textPath xlinkHref="#Path-4">
          Langer Saaaaaaaaaaaaaaaaaaaaaaaaamstag{' '}
          <animate
            attributeName="startOffset"
            begin="0s"
            dur="10s"
            from="120%"
            repeatCount="indefinite"
            to="-160%"
          ></animate>
        </textPath>
      </text>
      <path
        id="LS-Path-3"
        fill="none"
        stroke="#ff6e4e"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="80"
        d="M1230.5 82c-419.5 0-619 229.5-619 564.5"
      ></path>
      <text
        fill="#4f4be9"
        fontSize="48"
        letterSpacing="0"
        wordSpacing="0"
        writingMode="vertical-rl"
        style={{ lineHeight: 16 }}
      >
        <textPath xlinkHref="#LS-Path-3">
          Parties, Musik, Literatur, Workshops, Film, Street Art, Theater, Ausstellungen, Comedy{' '}
          <animate
            attributeName="startOffset"
            begin="0s"
            dur="15s"
            from="-235%"
            repeatCount="indefinite"
            to="150%"
          ></animate>
        </textPath>
      </text>
    </svg>
  </div>
);
