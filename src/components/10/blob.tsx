import { FC, ReactNode } from 'react';
import { Blob1, Blob2, Blob3, Blob4, Blob5, Blob6, Blob7 } from './blobs';

export enum BlobVariants {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
  Five = 'Five',
  Six = 'Six',
  Seven = 'Seven',
}

export const blobMap: Record<BlobVariants, ReactNode> = {
  [BlobVariants.One]: <Blob1 />,
  [BlobVariants.Two]: <Blob2 />,
  [BlobVariants.Three]: <Blob3 />,
  [BlobVariants.Four]: <Blob4 />,
  [BlobVariants.Five]: <Blob5 />,
  [BlobVariants.Six]: <Blob6 />,
  [BlobVariants.Seven]: <Blob7 />,
};

export const Blob: FC<{ variant?: BlobVariants; className?: string }> = ({ variant = BlobVariants.One, className }) => {
  return <div className={className}>{blobMap[variant]}</div>;
};
