import { Meta } from '@storybook/react';
import { Copy } from '../../src/identity/copy';
import * as IconComponents from '../../src/identity/icons';

export default {
  title: 'Identity/Icons',
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
