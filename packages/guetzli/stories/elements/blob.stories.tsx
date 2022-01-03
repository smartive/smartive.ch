import { Meta } from '@storybook/react';
import { Blob, PositionX, PositionY } from '../../src/elements/blob';
import { BlobVariations } from '../../src/utils/blob-variations';

export default {
  title: 'Elements/Blob',
  component: Blob,
  decorators: [
    (Story) => (
      <div className="grid place-items-center">
        <div className="relative rounded border-2 border-black w-[80%] h-[30rem] overflow-hidden">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

export const Single = () => <Blob positionX={PositionX.left} positionY={PositionY.bottom} color="apricot" />;

export const Multiple = () => (
  <>
    {BlobVariations.cornflower[0].map((blob, index) => (
      <Blob key={index} {...blob} />
    ))}
  </>
);
