import { FC } from 'react';
import { Image as DatoImage, ResponsiveImageType } from 'react-datocms';

type Props = {
  image: ResponsiveImageType;
};

export const Avatar: FC<Props> = ({ image }) => (
  <div className="relative inline-flex items-center overflow-hidden rounded-full bg-conic-gradient p-1">
    <DatoImage data={image} pictureClassName="h-12 w-12 rounded-full" className="h-12 w-12 rounded-full" />
  </div>
);
