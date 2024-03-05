import { FC } from 'react';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Colors } from './colors';
import { LanguageBlock } from './language-block';
import { Logos } from './logos';
import { PatternsBlobs } from './patterns-blobs';
import { Typography } from './typography';

export type BrandTypes = 'colors' | 'patterns' | 'logos' | 'typography' | 'language';

const COMPONENT_MAP = {
  colors: Colors,
  patterns: PatternsBlobs,
  logos: Logos,
  typography: Typography,
  language: LanguageBlock,
};

export const Brand: FC<{
  type: BrandTypes;
}> = ({ type }) => {
  const Component = COMPONENT_MAP[type];

  return (
    <BlockWrapper marginTop="none">
      <Component />
    </BlockWrapper>
  );
};
