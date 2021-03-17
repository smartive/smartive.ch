import { canvasPath } from 'blobs/v2/animate';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { BrandColor, mapColorToHex } from '../utils/colors';

export enum PositionX {
  left = 'left-0',
  right = 'right-0',
}

export enum PositionY {
  top = 'top-0',
  bottom = 'bottom-0',
}

type Props = {
  color: BrandColor;
  positionX: PositionX;
  positionY: PositionY;
  className?: string;
};

export const Blob: FC<Props> = ({ positionX, positionY, color, className = '' }) => {
  const [size, setSize] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>();

  const resize = useCallback(() => {
    // Set blob size relative to window, but limit to 400.
    const rawSize = Math.min(500, Math.min(window.innerWidth / 2));
    canvasRef.current.style.width = `${rawSize}px`;
    canvasRef.current.style.height = `${rawSize}px`;

    // Scale resolution to take into account device pixel ratio.
    const adjustedSize = rawSize * (window.devicePixelRatio || 1);

    canvasRef.current.width = adjustedSize;
    canvasRef.current.height = adjustedSize;
    setSize(adjustedSize);
  }, [canvasRef, setSize]);

  useEffect(() => {
    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    const animation = canvasPath();
    const randomOffsetX = randomNumberInRange(size - 0.6 * size, size - 0.4 * size);
    const randomOffsetY = randomNumberInRange(size - 0.8 * size, size - 0.6 * size);
    const canvasOptions = {
      offsetX: positionX === PositionX.left ? -randomOffsetX : positionX === PositionX.right ? randomOffsetX : 0,
      offsetY: positionY === PositionY.top ? -randomOffsetY : positionY === PositionY.bottom ? randomOffsetY : 0,
    };

    const blobOptions = {
      size,
      extraPoints: randomNumberInRange(5, 10),
      randomness: randomNumberInRange(7, 10),
    };

    const renderAnimation = () => {
      context.clearRect(0, 0, size, size);
      context.fillStyle = mapColorToHex(color);
      context.fill(animation.renderFrame());
      requestAnimationFrame(renderAnimation);
    };

    const loopAnimation = () => {
      animation.transition({
        canvasOptions,
        duration: 7000,
        timingFunction: 'ease',
        callback: loopAnimation,
        blobOptions: {
          seed: Math.random(),
          ...blobOptions,
        },
      });
    };

    requestAnimationFrame(renderAnimation);

    animation.transition({
      canvasOptions,
      duration: 0, // Render immediately.
      callback: loopAnimation,
      blobOptions: {
        seed: Math.random(),
        ...blobOptions,
      },
    });
  }, [size]);

  return <canvas ref={canvasRef} className={`absolute z-0 rounded ${positionX} ${positionY} ${className}`}></canvas>;
};

const randomNumberInRange = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
