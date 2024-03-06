import { CustomBlockFragment } from '@/graphql/generated';
import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Brand, BrandTypes } from '../custom/brand';
import { FarmerBlock } from '../custom/farmer-riegel';
import { LangerSamstagLogo } from '../custom/langer-samstag/langer-samstag-logo';
import { Podcast } from '../custom/podcast';
import { SalaryCalculator } from '../custom/salary-calculator/salary-calculator';

type Props = {
  block: CustomBlockFragment;
};

export const CustomBlock: FC<Props> = ({ block: { component, content, brandtype } }) => {
  switch (component) {
    case 'langerSamstagSvg': {
      return <LangerSamstagLogo />;
    }
    case 'salaryCalculator': {
      return <SalaryCalculator />;
    }
    case 'farmer': {
      return <FarmerBlock content={content as StructuredTextType} />;
    }
    case 'podcast': {
      return <Podcast />;
    }
    case 'brand': {
      return <Brand type={brandtype as BrandTypes} />;
    }
    default:
      console.error('Unknown custom component', component);

      return null;
  }
};
