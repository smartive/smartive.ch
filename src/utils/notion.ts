import { Block } from '../services/notion';

export const wordCount = (blocks: Block[]) =>
  blocks.reduce((count, block) => {
    switch (block.type) {
      case 'paragraph':
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
      case 'to_do':
      case 'quote':
      case 'callout':
        return (
          count +
          block[block.type].rich_text.reduce((textCount, text) => textCount + text.plain_text.trim().split(' ').length, 0)
        );
      case 'ordered_list':
      case 'unordered_list':
        return count + wordCount(block.children);
      default:
        return count;
    }
  }, 0);

export const calculateReadingTime = (blocks: Block[]) => Math.ceil(wordCount(blocks) / 200);
