import NextImage from 'next/image';
import { FC } from 'react';
import { Link } from '../../nodes';

export const PatternsBlobs: FC = () => (
  <>
    <div className="mb-4 space-x-8">
      <Link href="images/brand/avatars.zip" color="apricot" download target="_blank">
        Download Avatar Set ZIP
      </Link>
      <Link href="images/brand/wallpapers.zip" download color="mint" target="_blank">
        Download Wallpaper Set (Desktop/Mobile) ZIP
      </Link>
    </div>
    <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 lg:grid-cols-6">
      {Array.from({ length: 12 }, (_, i) => (
        <NextImage
          key={i}
          src={`/images/brand/avatars/avatar${i + 1}.png`}
          alt=""
          width={200}
          height={200}
          className="rounded"
        />
      ))}
    </div>
  </>
);
