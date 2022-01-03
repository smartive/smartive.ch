import { Meta, Story } from '@storybook/react';
import { Screenshot, ScreenshotProps, ScreenshotVariant } from '../../src/components/screenshot';

export default {
  title: 'Components/Screenshot',
  component: Screenshot,
} as Meta;

const ScreenshotTemplate: Story<ScreenshotProps> = (props) => <Screenshot {...props} />;

const sharedProps = {
  title: 'https://smartive.ch/',
};

export const Desktop = ScreenshotTemplate.bind({});
Desktop.args = {
  ...sharedProps,
  variant: ScreenshotVariant.desktop,
  image: {
    url: 'https://i.imgur.com/X43vL2L.png',
    originalWidth: 648,
    originalHeight: 409,
  },
};

export const Mobile = ScreenshotTemplate.bind({});
Mobile.args = {
  ...sharedProps,
  variant: ScreenshotVariant.mobile,
  image: {
    url: 'https://i.imgur.com/oWEDG0C.jpeg',
    originalWidth: 772,
    originalHeight: 1336,
  },
};
