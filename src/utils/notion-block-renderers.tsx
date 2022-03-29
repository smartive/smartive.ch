import { Copy, Decoration, Heading1, Heading2, Heading3, Label } from '@smartive/guetzli';
import Image from 'next/image';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';
import React, { FC, Fragment, ReactNode } from 'react';
import { Link } from '../elements/link';
import { Section } from '../layouts/section';
import { Block, BlockType, BlockWithChildren } from './notion';

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

const ImageBlock: FC<{ block: Block }> = ({ block }) => {
  const { type } = block;
  const value = block[type];

  const caption = value.caption ? <Text text={value.caption} /> : null;
  const alt = value.caption.reduce((acc, cur) => `${acc}${cur}`, '');

  const { width, height } = value.meta;

  return (
    <figure className="w-full min-h-fit h-auto">
      <Image
        width={width}
        height={height}
        layout="responsive"
        src={value.type === 'external' ? value.external.url : value.file.url}
        alt={alt}
      />

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export const blockRenderers: Record<AvailableRenderers, RenderFn> = {
  paragraph: (block: Block) => {
    if ('paragraph' in block) {
      const { type, id } = block;
      const value = block[type];

      return (
        <Copy key={id}>
          <Text text={value.rich_text} />
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
          <Text text={value.rich_text} decorate />
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
          <Text text={value.rich_text} />
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
          <Text text={value.rich_text} />
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
        <ol className="list-inside mb-8" key={id}>
          {(block as any as BlockWithChildren).children.map((item) => (
            <li className="list-decimal font-sans font-bold text-xs lg:text-base md:max-w-prose text-mint-500" key={item.id}>
              <Text text={item[item.type].rich_text} className="text-black font-normal" />
            </li>
          ))}
        </ol>
      );
    }
    return null;
  },

  unordered_list: (block: Block) => {
    if ('type' in block) {
      const { id } = block;
      return (
        <ul className="list-inside list-none mb-8" key={id}>
          {(block as any as BlockWithChildren).children.map((item) => (
            <li className="grid grid-cols-[auto,1fr] mb-2" key={item.id}>
              <svg
                className={`mr-4 text-apricot-500`}
                width="36"
                height="36"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10.5" y="10" width="12" height="12" rx="6" fill="currentColor" />
              </svg>

              <div className="font-sans font-normal text-base md:max-w-prose">
                <Text text={item[item.type].rich_text} />
              </div>
            </li>
          ))}
        </ul>
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
            <Text text={value.rich_text} />
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
        <details key={id} className="font-sans font-normal text-xs lg:text-base md:max-w-prose mb-8">
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {(block as any as BlockWithChildren).children?.map((child) =>
            blockRenderers[child.type] ? blockRenderers[child.type](child) : null
          )}
        </details>
      );
    }
    return null;
  },
  image: (block: Block) => {
    if ('image' in block) {
      const { id } = block;

      return <ImageBlock key={id} block={block} />;
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
          <Text text={value.rich_text} />
        </blockquote>
      );
    }
    return null;
  },
  code: (block: Block) => {
    if ('code' in block) {
      const { id, type } = block;
      const value = block[type];

      return (
        <Highlight
          key={id}
          {...defaultProps}
          code={value.rich_text[0]?.plain_text}
          language={block.code.language as Language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={[className, 'my-8 rounded p-4'].join(' ')} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      );
    }
    return null;
  },
  callout: (block: Block) => {
    if ('callout' in block) {
      const { type, id } = block;
      const value = block[type];

      const emoji = block.callout.icon.type === 'emoji' ? block.callout.icon.emoji : null;

      return (
        <div
          key={id}
          className="bg-apricot-200 font-sans font-normal text-xs lg:text-base md:max-w-prose mb-8 rounded p-8 whitespace-pre-line break-words"
        >
          {emoji && <span className="mr-4">{emoji}</span>}

          <Text text={value.rich_text} />
        </div>
      );
    }
    return null;
  },
};

type TextProps = {
  text: Extract<Block, { type: 'paragraph' }>['paragraph']['rich_text'];
  className?: string;
  decorate?: boolean;
};

const Text = ({ text, decorate = false, className = '' }: TextProps) => {
  if (!text) {
    return null;
  }

  return (
    <>
      {text.map((value, i) => {
        if ('text' in value) {
          const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text,
          } = value;

          if (!bold && !code && !italic && !strikethrough && !underline && !text.link) {
            return <Fragment key={i}>{text.content}</Fragment>;
          }

          if (italic && decorate) {
            return <Decoration>{text.content}</Decoration>;
          }

          return (
            <span
              key={i}
              className={[
                className,
                bold ? 'font-bold' : '',
                code ? 'font-mono' : '',
                italic ? 'italic' : '',
                strikethrough ? 'line-through' : '',
                underline ? 'underline' : '',
              ].join(' ')}
              style={color !== 'default' ? { color } : {}}
            >
              {text.link ? (
                <Link
                  href={
                    text.link.url.startsWith('https://smartive.ch')
                      ? text.link.url.replace('https://smartive.ch', '')
                      : text.link.url
                  }
                >
                  {text.content}
                </Link>
              ) : (
                text.content
              )}
            </span>
          );
        }

        return null;
      })}
    </>
  );
};
