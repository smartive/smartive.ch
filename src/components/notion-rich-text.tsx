import { Decoration } from '@smartive/guetzli';
import React, { Fragment } from 'react';
import { Link } from '../elements/link';
import { Block } from '../utils/notion';

export type NotionRichTextItems = Extract<Block, { type: 'paragraph' }>['paragraph']['rich_text'];

type Props = {
  text: NotionRichTextItems;
  className?: string;
  decorate?: boolean;
};

export const NotionRichText = ({ text, decorate = false, className = '' }: Props) => {
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
