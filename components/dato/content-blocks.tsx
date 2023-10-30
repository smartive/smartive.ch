import { FC } from 'react';
import { ProjectModelContentField } from '../../graphql/generated';
import { ContactBlock } from './blocks/contact';
import { CustomBlock } from './blocks/custom';
import { ImageBlock } from './blocks/image';
import { ImageGridBlock } from './blocks/image-grid';
import { ImageTextBlock } from './blocks/image-text';
import { KeyfigureBlock } from './blocks/keyfigure';
import { OffersTeaserBlock } from './blocks/offers-teaser';
import { ProjectIntroBlock } from './blocks/project-intro';
import { ProjectsTeaserBlock } from './blocks/projects-teaser';
import { QuoteBlock } from './blocks/quote';
import { TextBlock } from './blocks/text';
import { ThreeColsTextBlock } from './blocks/three-cols-text';
import { TwoColsTextBlock } from './blocks/two-cols-text';
import { VideoBlock } from './blocks/video';

type Props = {
  blocks: Array<ProjectModelContentField>;
};

export const ContentBlocks: FC<Props> = ({ blocks }) => (
  <div className="my-12 lg:my-48">
    {blocks.map((block) => {
      switch (block.__typename) {
        case 'VideoRecord':
          return <VideoBlock key={block.id} block={block} />;
        case 'ProjectIntroRecord':
          return <ProjectIntroBlock key={block.id} block={block} />;
        case 'TextRecord':
          return <TextBlock key={block.id} block={block} />;
        case 'TwoColsTextRecord':
          return <TwoColsTextBlock key={block.id} block={block} />;
        case 'ThreeColsTextRecord':
          return <ThreeColsTextBlock key={block.id} block={block} />;
        case 'ImageRecord':
          return <ImageBlock key={block.id} block={block} />;
        case 'ProjectsTeaserRecord':
          return <ProjectsTeaserBlock key={block.id} block={block} />;
        case 'QuoteRecord':
          return <QuoteBlock key={block.id} block={block} />;
        case 'ContactRecord':
          return <ContactBlock key={block.id} block={block} />;
        case 'OffersTeaserRecord':
          return <OffersTeaserBlock key={block.id} block={block} />;
        case 'KeyfigureRecord':
          return <KeyfigureBlock key={block.id} block={block} />;
        case 'ImageTextRecord':
          return <ImageTextBlock key={block.id} block={block} />;
        case 'CustomRecord':
          return <CustomBlock key={block.id} block={block} />;
        case 'ImageGridRecord':
          return <ImageGridBlock key={block.id} block={block} />;
        default:
          console.error('Unknown block type', block);

          return null;
      }
    })}
  </div>
);
