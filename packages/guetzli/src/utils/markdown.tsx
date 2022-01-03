import React, { ReactNode } from 'react';
import { Decoration } from '../identity/decoration';

/**
 * Removes Markdown characters from string.
 * @param input Markdown Input
 * @param pattern RegEx Pattern of characters to be removed. Removes *, _ and ` by default.
 */
export const purify = (input: string, pattern = /[*_`]/g) => input.replace(pattern, '');

/**
 * Highlights the italic (_foo_) word in the given string with a <Decoration> component.
 * @param input Markdown Input
 */
export const highlight = (input: string): ReactNode => {
  const parts: ReactNode[] = input.split(/_(.*?)_/g);

  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = <Decoration key={parts[i]!.toString()}>{parts[i]}</Decoration>;
  }

  return parts;
};
