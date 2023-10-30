import {
  StructuredText as StructuredTextType,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
} from 'datocms-structured-text-utils';
import { FC, Fragment } from 'react';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';
import { ImageBlockFragment } from '../../graphql/generated';
import { Heading1, Heading2, Heading3, Link, Paragraph, Serif } from '../nodes';
import { InlineLink } from '../nodes/inline-link';
import { List } from '../nodes/list';
import { ListItem } from '../nodes/list-item';
import { ImageBlock } from './blocks/image';

type Props = {
  data: StructuredTextType;
};

export const StructuredTextRenderer: FC<Props> = ({ data }) => (
  <StructuredText
    data={data}
    customNodeRules={[
      renderNodeRule(isList, ({ children, key }) => {
        return <List key={key}>{children}</List>;
      }),
      renderNodeRule(isListItem, ({ children, key }) => {
        return <ListItem key={key}>{children}</ListItem>;
      }),
      renderNodeRule(isHeading, ({ node, children, key }) => {
        switch (node.level) {
          case 1:
            return <Heading1 key={key}>{children}</Heading1>;
          case 2:
            return <Heading2 key={key}>{children}</Heading2>;
          case 3:
            return <Heading3 key={key}>{children}</Heading3>;
          default:
            return null;
        }
      }),
      renderNodeRule(isLink, ({ node, children, key }) => {
        const target = node.meta?.find((metaItem) => metaItem.id === 'target')?.value;
        const rel = node.meta?.find((metaItem) => metaItem.id === 'rel')?.value;

        return (
          <InlineLink key={key} href={node.url} target={target} rel={rel}>
            {children}
          </InlineLink>
        );
      }),
      renderNodeRule(isParagraph, ({ children, key, ancestors }) => {
        if (ancestors[0].type === 'listItem' || ancestors[0].type === 'list') {
          // we want to get rid of paragraphs inside list items
          return <Fragment key={key}>{children}</Fragment>;
        }

        return <Paragraph key={key}>{children}</Paragraph>;
      }),
    ]}
    customMarkRules={[
      renderMarkRule('emphasis', ({ children, key }) => {
        return <Serif key={key}>{children}</Serif>;
      }),
    ]}
    renderBlock={({ record }) => {
      switch (record._modelApiKey) {
        case 'image':
          return (
            <div className="my-4 lg:my-8">
              <ImageBlock key={record.id} block={record as ImageBlockFragment} />
            </div>
          );
        case 'link':
          return (
            <Link key={record.id} href={record.url as string} target={record.newTab ? '_blank' : '_self'}>
              {record.label as string}
            </Link>
          );
        default:
          return null;
      }
    }}
  />
);
