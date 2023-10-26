import { FC } from 'react';
import { CustomBlockFragment } from '../../../graphql/generated';
import { LangerSamstagLogo } from '../../custom/langer-samstag/langer-samstag-logo';

type Props = {
  block: CustomBlockFragment;
};

export const CustomBlock: FC<Props> = async ({ block: { component } }) => {
  switch (component) {
    case 'langerSamstagSvg':
      return <LangerSamstagLogo />;
    default:
      console.error('Unknown custom component', component);

      return null;
  }
};
