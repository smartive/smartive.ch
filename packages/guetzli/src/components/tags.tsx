import React, { FC } from 'react';

export type Tag = {
  short: string;
  full: string;
};

export type TagsProps = {
  tags: Tag[];
  vertical?: boolean;
  size?: 'S' | 'L';
  className?: string;
};

const TagColors = ['bg-apricot-500', 'bg-mint-500', 'bg-cornflower-500'] as const;

export const Tags: FC<TagsProps> = ({ tags, vertical = false, className = '', size = 'L' }) => {
  const fontSize = size === 'L' ? 'text-xs lg:text-sm' : 'text-xxs';
  const positioning = vertical ? 'rounded-t-sm transform origin-center rotate-180 writing-vertical' : 'rounded-sm';
  const textStyles = `font-sans font-normal text-white-100 ${fontSize}`;
  const gap = size === 'L' ? 'gap-2 lg:gap-6' : 'gap-1 lg:gap-2';
  const padding = vertical ? 'py-2 px-2 lg:py-4 lg:px-2' : 'py-2 px-2 lg:py-2 lg:px-4';

  return (
    <div className={`grid grid-flow-col ${gap} justify-start ${className}`}>
      {tags.map((tag, index) => (
        <span key={index} className={`${TagColors[index % 3]} ${padding} ${textStyles} ${positioning}`}>
          {size === 'L' ? tag.full : tag.short}
        </span>
      ))}
    </div>
  );
};
