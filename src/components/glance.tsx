import { FC, ReactNode } from 'react';

type Props = {
  image: ReactNode;
};

export const Glance: FC<Props> = ({ image, children }) => (
  <div className="bg-cornflower-500 rounded grid grid-cols-1 md:grid-cols-3 p-8 md:px-16 md:gap-6">
    <div className="mx-auto mb-8 md:mb-0 md:mx-0">{image}</div>
    <div className="col-span-2 flex flex-col justify-center">{children}</div>
  </div>
);
