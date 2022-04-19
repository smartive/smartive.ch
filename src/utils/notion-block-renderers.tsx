import { Copy, Heading1, Heading2, Heading3, Label } from '@smartive/guetzli';
import { Language } from 'prism-react-renderer';
import React, { ReactNode } from 'react';
import { Accordion } from '../components/accordion';
import { Callout } from '../components/callout';
import { CodeSnippet } from '../components/code-snippet';
import { Image } from '../components/image';
import { NotionRichText } from '../components/notion-rich-text';
import { OrderedList } from '../components/ordered-list';
import { UnorderedList } from '../components/unordered-list';
import { Section } from '../layouts/section';
import { Block, BlockType, BlockWithChildren, BlockWithMeta } from './notion';

type RenderFn = (block: Block) => ReactNode;

type AvailableRenderers = Exclude<
  BlockType,
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'template'
  | 'synced_block'
  | 'child_page'
  | 'child_database'
  | 'equation'
  | 'breadcrumb'
  | 'table_of_contents'
  | 'link_to_page'
  | 'table_row'
  | 'embed'
  | 'bookmark'
  | 'video'
  | 'table'
  | 'pdf'
  | 'file'
  | 'audio'
  | 'link_preview'
  | 'unsupported'
>;

export const blockRenderers: Record<AvailableRenderers, RenderFn> = {
  paragraph: (block: Block) => {
    if ('paragraph' in block) {
      const { type, id } = block;
      const value = block[type];

      return (
        <Copy key={id}>
          <NotionRichText text={value.rich_text} />
        </Copy>
      );
    }

    return null;
  },
  heading_1: (block: Block) => {
    if ('heading_1' in block) {
      const { type, id } = block;
      const value = block[type];

      return (
        <Heading1 key={id}>
          <NotionRichText text={value.rich_text} decorate />
        </Heading1>
      );
    }

    return null;
  },
  heading_2: (block: Block) => {
    if ('heading_2' in block) {
      const { type, id } = block;
      const value = block[type];

      return (
        <Heading2 key={id}>
          <NotionRichText text={value.rich_text} />
        </Heading2>
      );
    }

    return null;
  },
  heading_3: (block: Block) => {
    if ('heading_3' in block) {
      const { type, id } = block;
      const value = block[type];

      return (
        <Heading3 key={id}>
          <NotionRichText text={value.rich_text} />
        </Heading3>
      );
    }

    return null;
  },

  column_list: (block: Block) => {
    if ('column_list' in block) {
      const { id } = block;

      return (
        <Section key={id}>
          <div className="md:flex md:flex-row md:gap-4">
            {(block as any as BlockWithChildren).children.map((child) =>
              blockRenderers[child.type] ? blockRenderers[child.type](child) : null
            )}
          </div>
        </Section>
      );
    }

    return null;
  },
  column: (block: Block) => {
    if ('column' in block) {
      const { id } = block;

      return (
        <div key={id}>
          {(block as any as BlockWithChildren).children.map((child) =>
            blockRenderers[child.type] ? blockRenderers[child.type](child) : null
          )}
        </div>
      );
    }

    return null;
  },
  ordered_list: (block: Block) => {
    if ('type' in block) {
      const { id } = block;

      return (
        <OrderedList key={id}>
          {((block as unknown as BlockWithChildren).children as Block<'numbered_list_item'>[]).map((item) => (
            <NotionRichText key={item.id} text={item[item.type].rich_text} className="text-black font-normal" />
          ))}
        </OrderedList>
      );
    }

    return null;
  },

  unordered_list: (block: Block) => {
    if ('type' in block) {
      const { id } = block;

      return (
        <UnorderedList key={id}>
          {((block as unknown as BlockWithChildren).children as Block<'bulleted_list_item'>[]).map((item) => (
            <NotionRichText key={item.id} text={item[item.type].rich_text} className="text-black font-normal" />
          ))}
        </UnorderedList>
      );
    }
    return null;
  },
  to_do: (block: Block) => {
    if ('to_do' in block) {
      const { type, id } = block;
      const value = block[type];

      return (
        <div key={id}>
          <Label as="label">
            <input
              className="focus:ring-cornflower-500 h-6 w-6 text-cornflower-500 border-cornflower-500 rounded-[6px] mr-4"
              type="checkbox"
              id={id}
              defaultChecked={value.checked}
            />
            <NotionRichText text={value.rich_text} />
          </Label>
        </div>
      );
    }

    return null;
  },
  toggle: (block: Block) => {
    if ('toggle' in block) {
      const { id, type } = block;
      const value = block[type];

      return (
        <Accordion key={id} summary={<NotionRichText text={value.rich_text} />}>
          {(block as unknown as BlockWithChildren).children.map((item) =>
            blockRenderers[item.type] ? blockRenderers[item.type](item) : null
          )}
        </Accordion>
      );
    }
    return null;
  },
  image: (block: BlockWithMeta) => {
    if ('image' in block) {
      const { id, type } = block;

      const value = block[type];

      const caption = value.caption ? <NotionRichText text={value.caption} /> : null;
      const alt = value.caption.reduce((acc, cur) => `${acc}${cur}`, '');

      const { width, height } = value.meta;

      return (
        <Image
          key={id}
          width={width}
          height={height}
          layout="responsive"
          alt={alt}
          caption={caption}
          src={value.type === 'external' ? value.external.url : value.file.url}
        />
      );
    }

    return null;
  },

  divider: (block: Block) => {
    if ('divider' in block) {
      const { id } = block;

      return <hr key={id} className="mb-8" />;
    }
    return null;
  },
  quote: (block: Block) => {
    if ('quote' in block) {
      const { id, type } = block;
      const value = block[type];

      return (
        <blockquote
          key={id}
          className="bg-white-100 font-sans font-normal text-xs lg:text-base md:max-w-prose mb-8 rounded p-8 whitespace-pre-line break-words"
        >
          <NotionRichText text={value.rich_text} />
        </blockquote>
      );
    }
    return null;
  },
  code: (block: Block) => {
    if ('code' in block) {
      const { id, type } = block;
      const value = block[type];

      const plainText = value.rich_text.reduce((acc, cur) => `${acc}${cur.plain_text}`, '');

      return <CodeSnippet key={id} code={plainText} language={block.code.language as Language} />;
    }
    return null;
  },
  callout: (block: Block) => {
    if ('callout' in block) {
      const { type, id } = block;
      const value = block[type];

      const emoji = block.callout.icon.type === 'emoji' ? block.callout.icon.emoji : null;

      return (
        <Callout key={id} background={block.callout.color.replace('_background', '')}>
          {emoji && <span className="mr-4">{emoji}</span>}

          <NotionRichText text={value.rich_text} />
        </Callout>
      );
    }
    return null;
  },
};
