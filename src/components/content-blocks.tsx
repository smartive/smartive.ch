import {
  BlogpostModelContentField,
  ImageTextBlockFragment,
  OfferModelContentField,
  PageModelContentField,
  ProjectModelContentField,
  TopicModelContentField,
} from '@/graphql/generated';
import { FC } from 'react';
import { BlogOverviewBlock } from './blocks/blog-overview';
import { ContactBlock } from './blocks/contact';
import { CustomBlock } from './blocks/custom';
import { GalleryBlock } from './blocks/gallery/block';
import { IframeBlock } from './blocks/iframe-block';
import { ImageBlock } from './blocks/image';
import { ImageGridBlock } from './blocks/image-grid';
import { ImageTextBlock } from './blocks/image-text';
import { LogoGridBlock } from './blocks/logo-grid';
import { NewsletterBlock } from './blocks/newsletter';
import { ProjectsOverviewBlock } from './blocks/projects-overview';
import { QuoteBlock } from './blocks/quote';
import { TableBlock } from './blocks/table';
import { TeamOverviewBlock } from './blocks/team-overview';
import { TeaserSelectionBlock } from './blocks/teaser-selection';
import { TextBlock } from './blocks/text';
import { ThreeColsTextBlock } from './blocks/three-cols-text';
import { TwoColsTextBlock } from './blocks/two-cols-text';
import { VideoBlock } from './blocks/video';

type Props = {
  blocks: (
    | ProjectModelContentField
    | PageModelContentField
    | OfferModelContentField
    | BlogpostModelContentField
    | TopicModelContentField
  )[];
};

export const ContentBlocks: FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case 'VideoRecord':
            return <VideoBlock key={block.id} block={block} />;
          case 'TextRecord':
            return <TextBlock key={block.id} block={block} />;
          case 'TwoColsTextRecord':
            return <TwoColsTextBlock key={block.id} block={block} />;
          case 'ThreeColsTextRecord':
            return <ThreeColsTextBlock key={block.id} block={block} />;
          case 'ImageRecord':
            return <ImageBlock key={block.id} block={block} />;
          case 'QuoteRecord':
            return <QuoteBlock key={block.id} block={block} />;
          case 'ContactRecord':
            return <ContactBlock key={block.id} block={block} />;
          case 'KeyfigureRecord':
            return (
              <ImageTextBlock
                key={block.id}
                block={
                  {
                    ...block,
                    isKeyfigure: true,
                  } as unknown as ImageTextBlockFragment // TODO: remove block completely
                }
              />
            );
          case 'ImageTextRecord':
            return <ImageTextBlock key={block.id} block={block} />;
          case 'CustomRecord':
            return <CustomBlock key={block.id} block={block} />;
          case 'ImageGridRecord':
            return <ImageGridBlock key={block.id} block={block} />;
          case 'ProjectsOverviewRecord':
            return <ProjectsOverviewBlock key={block.id} block={block} />;
          case 'LogoGridRecord':
            return <LogoGridBlock key={block.id} block={block} />;
          case 'IframeRecord':
            return <IframeBlock key={block.id} block={block} />;
          case 'TableRecord':
            return <TableBlock key={block.id} block={block} />;
          case 'TeaserSelectionRecord':
            return <TeaserSelectionBlock key={block.id} block={block} />;
          case 'TeamOverviewRecord':
            return <TeamOverviewBlock key={block.id} block={block} />;
          case 'NewsletterRecord':
            return <NewsletterBlock key={block.id} block={block} />;
          case 'BlogOverviewRecord':
            return <BlogOverviewBlock key={block.id} block={block} />;
          case 'GalleryRecord':
            return <GalleryBlock key={block.id} block={block} />;
          default:
            console.error('Unknown block type', block);

            return null;
        }
      })}
    </>
  );
};
