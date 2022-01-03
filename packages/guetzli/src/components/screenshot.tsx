import React, { FC, useEffect, useRef, useState } from 'react';

export enum ScreenshotVariant {
  mobile = 'mobile',
  desktop = 'desktop',
}

export type ScreenshotProps = {
  title?: string;
  variant?: ScreenshotVariant;
  image?: {
    originalWidth: number;
    originalHeight: number;
    url: string;
  };
};

export const Screenshot: FC<ScreenshotProps> = ({ title, variant = ScreenshotVariant.desktop, image }) => {
  const [imageHeight, setImageHeight] = useState(500);
  const imageRef = useRef<SVGImageElement>(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (imageRef.current && image) {
        setImageHeight(imageRef.current.width.baseVal.value * (image.originalHeight / image.originalWidth));
      }
    };

    window.addEventListener('resize', calculateHeight);
    calculateHeight();

    return () => window.removeEventListener('resize', calculateHeight);
  }, [imageRef, image]);

  return variant === ScreenshotVariant.desktop ? (
    <svg
      className="rounded border border-white-100"
      width="100%"
      height={imageHeight}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="48" fill="white" />
      <circle cx="18" cy="24" r="6" fill="#F8935A" />
      <circle cx="36" cy="24" r="6" fill="#6986E8" />
      <circle cx="54" cy="24" r="6" fill="#7DDDD1" />
      {title && (
        <>
          <rect width="80%" height="24" rx="12" x="75" y="13" fill="#F8F7F5" />
          <text x="90" y="30" fill="#252525" className="font-sans font-normal text-xxs overflow-visible">
            {title}
          </text>
        </>
      )}
      {!image && <rect y="48" width="100%" height="100%" fill="#C4EBE6" />}
      {image && (
        <image ref={imageRef} preserveAspectRatio="xMinYMin slice" href={image.url} y="48" width="100%" height="100%" />
      )}
    </svg>
  ) : (
    <svg
      className="rounded border border-white-100"
      width="100%"
      height={imageHeight}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="40" fill="white" />
      <rect x="35%" y="16" width="20%" height="8" rx="4" fill="#7DDDD1" />
      <circle cx="60%" cy="20" r="6" fill="#6986E8" />
      <circle cx="60%" cy="20" r="2" fill="#F8935A" />
      {title && (
        <>
          <rect width="100%" height="40" transform="translate(0 40)" fill="white" />
          <rect width="90%" height="24" rx="12" x="5%" y="44" fill="#F8F7F5" />
          <text
            x="50%"
            y="61"
            fill="#252525"
            className="font-sans font-normal text-xxs overflow-visible"
            style={{ textAnchor: 'middle' }}
          >
            {title}
          </text>
        </>
      )}
      {!image && <rect y={title ? '80' : '40'} width="100%" height="100%" fill="#C4EBE6" />}
      {image && (
        <image
          ref={imageRef}
          preserveAspectRatio="xMinYMin slice"
          href={image.url}
          y={title ? '80' : '40'}
          width="100%"
          height="100%"
        />
      )}
    </svg>
  );
};
