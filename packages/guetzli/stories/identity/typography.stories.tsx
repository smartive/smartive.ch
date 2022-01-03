import { Meta } from '@storybook/react';
import { Heading1 } from '../../src/identity/heading-1';
import { Heading2 } from '../../src/identity/heading-2';
import { Heading3 } from '../../src/identity/heading-3';
import { Decoration } from '../../src/identity/decoration';
import { Copy } from '../../src/identity/copy';

export default {
  title: 'Identity/Typography',
} as Meta;

export const Typography = () => (
  <div>
    <Heading1>Heading 1: T'Smarta liebts zum Guetzli esse!</Heading1>
    <Heading1>
      Heading 1 & Decoration: T'Smarta liebts zum <Decoration>Guetzli</Decoration> esse!
    </Heading1>
    <Heading2>Heading 2: T'Smarta liebts zum Guetzli esse!</Heading2>
    <Heading3>Heading 3: T'Smarta liebts zum Guetzli esse!</Heading3>
    <Copy>
      Copy: T'Smarta liebts <strong>mega</strong> zum Guetzli esse!
    </Copy>
    <Decoration>Decoration: T'Smarta liebts zum Guetzli esse!</Decoration>
  </div>
);
