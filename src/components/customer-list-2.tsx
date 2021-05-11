import { FC } from 'react';
import SbEditable from 'storyblok-react';

type Props = {
  blok: any;
};

export const CustomerList2: FC<Props> = ({ blok }) => {
  if (blok.component !== 'customer-list') return null;

  return (
    <SbEditable content={blok}>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-24">
        {blok.customers.map(({ name, logo }) => (
          <img key={name} src={logo.filename} alt={name} height="60" width="170" />
        ))}
      </div>
    </SbEditable>
  );
};
