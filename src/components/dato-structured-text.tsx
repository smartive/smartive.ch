import { ImageBlockFragment } from '@/graphql/generated';
import { SmartiveColorsType } from '@/utils/color';
import { LinkableRecords, PageRecord, generatePathForRecord } from '@/utils/pathnames';
import { Copy, Decoration, Heading1, Heading2, Heading3, TextLink } from '@smartive/guetzli';
import {
  StructuredText as StructuredTextType,
  isBlockquote,
  isCode,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
  isThematicBreak,
} from 'datocms-structured-text-utils';
import { FC, Fragment } from 'react';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';
import { ImageBlock } from './blocks/image';
import { Blockquote, Code, CodeSnippetClient, Link, ListItem, OrderedList, ThematicBreak, UnorderedList } from './nodes';

type Props = {
  data: StructuredTextType | null | undefined;
};

export const StructuredTextRenderer: FC<Props> = ({ data }) => (
  <div className="font-sans text-xs lg:text-base">
    <StructuredText
      data={data}
      customNodeRules={[
        renderNodeRule(isList, ({ node, children, key }) =>
          node.style === 'numbered' ? (
            <OrderedList key={key}>{children}</OrderedList>
          ) : (
            <UnorderedList key={key}>{children}</UnorderedList>
          ),
        ),
        renderNodeRule(isListItem, ({ children, key }) => <ListItem key={key}>{children}</ListItem>),
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
            <TextLink key={key} href={node.url} newTab={target === '_blank'} rel={rel}>
              {children}
            </TextLink>
          );
        }),
        renderNodeRule(isParagraph, ({ children, key, ancestors }) => {
          if (ancestors[0].type === 'listItem' || ancestors[0].type === 'list') {
            // we want to get rid of paragraphs inside list items
            return <Fragment key={key}>{children}</Fragment>;
          }

          return <Copy key={key}>{children}</Copy>;
        }),
        renderNodeRule(isBlockquote, ({ key, children, node }) => (
          <Blockquote key={key} attribution={node.attribution}>
            {children}
          </Blockquote>
        )),
        renderNodeRule(isCode, ({ key, node }) => <CodeSnippetClient key={key} code={node.code} language={node.language} />),
        renderNodeRule(isThematicBreak, ({ key }) => <ThematicBreak key={key} />),
      ]}
      customMarkRules={[
        renderMarkRule('emphasis', ({ children, key }) => <Decoration key={key}>{children}</Decoration>),
        renderMarkRule('code', ({ children, key }) => <Code key={key}>{children}</Code>),
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
              <Link
                key={record.id}
                href={record.url as string}
                target={record.newTab ? '_blank' : '_self'}
                rel={record.newTab ? 'noopener noreferrer' : undefined}
                color={record.color as SmartiveColorsType}
              >
                {record.label as string}
              </Link>
            );
          default:
            return null;
        }
      }}
      renderLinkToRecord={({ record, children, transformedMeta }) => (
        <TextLink
          key={record.id}
          href={
            generatePathForRecord({
              slug: record.slug as string,
              type: record.__typename as LinkableRecords,
              parent: record.parent as PageRecord,
            }) ?? '#'
          }
          {...transformedMeta}
        >
          {children}
        </TextLink>
      )}
    />
  </div>
);
