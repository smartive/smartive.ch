import { canvasPath } from 'blobs/v2/animate';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { randomNumberInRange } from '../../utils/random';
import { BrandColor, mapColorToHex } from '../colors/colors';

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
  lowerLimit?: number;
  extraPoints?: [number, number];
  randomness?: [number, number];
};

export const Blob: FC<Props> = ({
  positionX,
  positionY,
  color,
  className = '',
  lowerLimit = 800,
  extraPoints = [3, 6],
  randomness = [3, 6],
}) => {
  const [size, setSize] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resize = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    // Set blob size relative to window, but set limit
    const rawSize = Math.min(lowerLimit, window.innerWidth / 1.2);
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
    if (!canvasRef.current) {
      return;
    }

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
      extraPoints: randomNumberInRange(extraPoints[0], extraPoints[1]),
      randomness: randomNumberInRange(randomness[0], randomness[1]),
    };

    const renderAnimation = () => {
      if (!context) {
        return;
      }

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
