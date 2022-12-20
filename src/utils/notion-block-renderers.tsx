import { Copy, Heading1, Heading2, Heading3, Label } from '@smartive/guetzli';
import { Language } from 'prism-react-renderer';
import { ReactNode } from 'react';
import { Accordion } from '../components/accordion';
import { Callout } from '../components/callout';
import { CodeSnippet, MermaidDiagram } from '../components/code-snippet';
import { Image } from '../components/image';
import { NotionRichText } from '../components/notion-rich-text';
import { OrderedList } from '../components/ordered-list';
import { UnorderedList } from '../components/unordered-list';
import { Link } from '../elements/link';
import { Block, BlockType } from '../services/notion';

type RenderFn<T extends Block = Block> = (block: T) => ReactNode;

const createRenderer =
  <TPart extends BlockType, TBlock extends Block<TPart>>(part: TPart, render: RenderFn<TBlock>): RenderFn<TBlock> =>
  (block) => {
    if (part in block || block.type === part) {
      return render(block);
    }

    return null;
  };

export const renderBlock = (block: Block): ReactNode => internalRenderers[block.type]?.(block) ?? null;
export const renderBlocks = (blocks: Block[]): ReactNode[] => blocks.map(renderBlock);
export const renderContent = (blocks: Block[]): ReactNode => <>{blocks.map(renderBlock)}</>;

const internalRenderers = {
  paragraph: createRenderer('paragraph', ({ id, paragraph: { rich_text } }) => (
    <Copy key={id}>
      <NotionRichText text={rich_text} />
    </Copy>
  )),
  heading_1: createRenderer('heading_1', ({ id, heading_1: { rich_text } }) => (
    <Heading1 className="mt-10 lg:mt-16" key={id}>
      <NotionRichText text={rich_text} />
    </Heading1>
  )),
  heading_2: createRenderer('heading_2', ({ id, heading_2: { rich_text } }) => (
    <Heading2 className="mt-8 lg:mt-14" key={id}>
      <NotionRichText text={rich_text} />
    </Heading2>
  )),
  heading_3: createRenderer('heading_3', ({ id, heading_3: { rich_text } }) => (
    <Heading3 className="mt-8 lg:mt-14" key={id}>
      <NotionRichText text={rich_text} />
    </Heading3>
  )),
  column_list: createRenderer('column_list', ({ id, children }) => (
    <div key={id} className="md:flex md:flex-row md:gap-4">
      {children.map(renderBlock)}
    </div>
  )),
  column: createRenderer('column', ({ id, children }) => <div key={id}>{children.map(renderBlock)}</div>),
  ordered_list: createRenderer('ordered_list', ({ id, children }) => (
    <OrderedList key={id}>{renderBlocks(children)}</OrderedList>
  )),
  numbered_list_item: createRenderer('numbered_list_item', ({ id, numbered_list_item: { rich_text } }) => (
    <NotionRichText key={id} text={rich_text} className="font-sans text-xs lg:text-base" />
  )),
  unordered_list: createRenderer('unordered_list', ({ id, children }) => (
    <UnorderedList key={id}>{renderBlocks(children)}</UnorderedList>
  )),
  bulleted_list_item: createRenderer('bulleted_list_item', ({ id, bulleted_list_item: { rich_text } }) => (
    <NotionRichText key={id} text={rich_text} className="font-sans text-xs lg:text-base" />
  )),
  to_do: createRenderer('to_do', ({ id, to_do: { checked, rich_text } }) => (
    <div key={id}>
      <Label as="label">
        <input
          className="focus:ring-cornflower-500 h-6 w-6 text-cornflower-500 border-cornflower-500 rounded-[6px] mr-4"
          type="checkbox"
          id={id}
          defaultChecked={checked}
        />
        <NotionRichText text={rich_text} />
      </Label>
    </div>
  )),
  toggle: createRenderer('toggle', ({ id, toggle: { rich_text }, children }) => (
    <Accordion key={id} summary={<NotionRichText text={rich_text} />}>
      {children.map(renderBlock)}
    </Accordion>
  )),
  image: createRenderer(
    'image',
    ({
      id,
      image: {
        meta: { height, width },
        caption,
        ...image
      },
    }) => (
      <div key={id} className="grid place-items-center text-xs lg:text-base text-center my-4">
        <Image
          width={width}
          height={height}
          alt={caption?.reduce((acc, cur) => `${acc}${cur}`, '')}
          caption={caption ? <NotionRichText text={caption} /> : null}
          src={image.type === 'external' ? image.external.url : image.file.url}
        />
      </div>
    )
  ),
  divider: createRenderer('divider', ({ id }) => <hr key={id} className="my-8 text-xs lg:text-base" />),
  quote: createRenderer('quote', ({ id, quote: { rich_text } }) => (
    <blockquote
      key={id}
      className="bg-white-100 font-sans font-normal text-xs lg:text-base mb-8 rounded p-8 whitespace-pre-line break-words"
    >
      <NotionRichText text={rich_text} />
    </blockquote>
  )),
  code: createRenderer('code', ({ id, code: { caption, language, rich_text } }) => (
    <div key={id} className="text-xs lg:text-base">
      {language === 'mermaid' ? (
        <div className="text-center">
          <MermaidDiagram
            code={rich_text.reduce((acc, cur) => `${acc}${cur.plain_text}`, '')}
            caption={caption?.reduce((acc, cur) => `${acc}${cur.plain_text}`, '')}
          />
        </div>
      ) : (
        <CodeSnippet
          code={rich_text.reduce((acc, cur) => `${acc}${cur.plain_text}`, '')}
          language={language as Language}
          caption={caption?.reduce((acc, cur) => `${acc}${cur.plain_text}`, '')}
        />
      )}
    </div>
  )),
  callout: createRenderer('callout', ({ id, callout: { rich_text, color, icon } }) => (
    <Callout key={id} background={color.replace('_background', '')}>
      {icon.type === 'emoji' && <span className="mr-4">{icon.emoji}</span>}
      <NotionRichText text={rich_text} />
    </Callout>
  )),
  bookmark: createRenderer('bookmark', ({ id, bookmark: { url } }) => (
    <Link key={id} newTab href={url}>
      {url}
    </Link>
  )),
};
