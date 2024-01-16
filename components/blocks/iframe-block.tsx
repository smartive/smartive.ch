import { FC } from 'react';
import { IframeBlockFragment } from '../../graphql/generated';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: IframeBlockFragment;
};

export const IframeBlock: FC<Props> = ({ block: { url, width, height } }) => (
  <BlockWrapper marginTop="small" marginBottom="small">
    <div className="rounded bg-cornflower-500 p-4">
      {/* We get the width as pixel value from DatoCMS, but iframe needs it without "px"*/}
      <iframe src={url} width={width.replace('px', '')} height={height.replace('px', '')} />
    </div>
  </BlockWrapper>
);
