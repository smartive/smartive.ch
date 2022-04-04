import { GetBlockResponse, GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

type AnyBlock = Extract<GetBlockResponse, { type: string }>;
export type BlockType = AnyBlock['type'] | 'unordered_list' | 'ordered_list';
export type Block<Type extends BlockType = BlockType> = Extract<AnyBlock, { type: Type }>;

export type BlockWithChildren = {
  id: string;
  type: 'ordered_list' | 'unordered_list';
  children: Block[];
};

export type BlockWithMeta = Block<'image'> & {
  image: {
    meta: {
      width: number;
      height: number;
    };
  };
};

export const getPageTitle = (page: GetPageResponse): string => {
  if (!page) {
    return '';
  }

  return 'properties' in page && page.properties.Name.type === 'title'
    ? page.properties.Name.title.reduce((acc, cur) => {
        if ('text' in cur) {
          return acc + cur.text.content;
        }

        return acc;
      }, '')
    : '';
};

export const getLexer = <T>(it: IterableIterator<T>) => {
  const iterator = it;
  let value = iterator.next().value;

  function getToken() {
    const t = value;

    switch (t?.type) {
      case 'bulleted_list_item':
        // eslint-disable-next-line no-case-declarations
        const ul = {
          type: 'unordered_list',
          id: t.id.substring(0, 6) + 'parent',
          children: [t],
        };
        next();
        while (value?.type === 'bulleted_list_item') {
          ul.children.push(value);
          next();
        }
        return ul;
      case 'numbered_list_item':
        // eslint-disable-next-line no-case-declarations
        const ol = {
          type: 'ordered_list',
          id: t.id.substring(0, 6) + 'parent',
          children: [t],
        };
        next();
        while (value?.type === 'numbered_list_item') {
          ol.children.push(value);
          next();
        }
        return ol;
      case undefined:
      default:
        next();
        return t;
    }
  }

  function next() {
    value = iterator.next().value;
  }

  function lex(): T[] {
    const parsed = [];
    let token = getToken();

    while (token) {
      parsed.push(token);
      token = getToken();
    }

    return parsed;
  }

  return {
    lex,
  };
};
