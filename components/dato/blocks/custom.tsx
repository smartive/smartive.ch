import { FC } from 'react';
import { CustomBlockFragment } from '../../../graphql/generated';
import { CalendlyWidget } from '../../custom/calendly';
import { LangerSamstagLogo } from '../../custom/langer-samstag/langer-samstag-logo';
import { SalaryCalculator } from '../../custom/salary-calculator';

type Props = {
  block: CustomBlockFragment;
};

export const CustomBlock: FC<Props> = async ({ block: { component } }) => {
  switch (component) {
    case 'langerSamstagSvg':
      return <LangerSamstagLogo />;
    case 'calendly':
      return <CalendlyWidget />;
    case 'salaryCalculator':
      return <SalaryCalculator />;
    default:
      console.error('Unknown custom component', component);

      return null;
  }
};
