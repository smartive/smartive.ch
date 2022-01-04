import { Meta } from '@storybook/react';
import * as IconComponents from '../../src/foundation/iconography/icons';
import { Copy } from '../../src/foundation/typography/copy';

export default {
  title: 'Foundation/Iconography',
} as Meta;

export const Icons = () => (
  <div className="flex flex-row flex-wrap gap-12">
    {Object.keys(IconComponents).map((icon) => (
      <div className="grid place-items-center">
        {IconComponents[icon]({ className: 'w-8 h-8' })}
        <Copy>{icon}</Copy>
      </div>
    ))}
  </div>
);
