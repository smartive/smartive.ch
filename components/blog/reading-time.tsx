'use client';

import { FC, useEffect, useState } from 'react';
import { LANG_STRINGS, Language } from '../../utils/const';

const AVERAGE_WORDS_PER_MINUTE = 200;

export const ReadingTime: FC<{ elementId: string; language: Language }> = ({ elementId, language }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (document) {
      const blogpost = document.getElementById(elementId);
      if (!blogpost) {
        return;
      }
      const innerHTML = blogpost.innerHTML;
      const words = innerHTML.trim().split(' ');
      const wordCount = words.length;
      const readingTime = Math.ceil(wordCount / AVERAGE_WORDS_PER_MINUTE);

      setTime(readingTime);
    }
  }, [elementId]);

  if (time > 0) {
    return (
      <>
        ~{time} {LANG_STRINGS[language].minutes}
      </>
    );
  }

  return null;
};
