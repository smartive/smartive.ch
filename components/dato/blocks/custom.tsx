import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { CustomBlockFragment } from '../../../graphql/generated';
import { CalendlyWidget } from '../../custom/calendly';
import { Farmer } from '../../custom/farmer-riegel';
import { LangerSamstagLogo } from '../../custom/langer-samstag/langer-samstag-logo';
import { SalaryCalculator } from '../../custom/salary-calculator';

type Props = {
  block: CustomBlockFragment;
};

export const CustomBlock: FC<Props> = ({ block: { component, content } }) => {
  switch (component) {
    case 'langerSamstagSvg':
      return <LangerSamstagLogo />;
    case 'calendly':
      return <CalendlyWidget />;
    case 'salaryCalculator':
      return <SalaryCalculator />;
    case 'farmer':
      return <Farmer content={content as StructuredTextType} />;
    default:
      console.error('Unknown custom component', component);

      return null;
  }
};
