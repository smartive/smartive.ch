'use client';

import { FC, useEffect, useState } from 'react';
import { LANG_STRINGS } from '../utils/const';

const AVERAGE_WORDS_PER_MINUTE = 200;

export const ReadingTime: FC<{ elementId: string; lang: string }> = ({ elementId, lang }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (document) {
      const blogpost = document.getElementById(elementId);
      if (!blogpost) return;
      const innerHTML = blogpost.innerHTML;
      const words = innerHTML.trim().split(' ');
      const wordCount = words.length;
      const readingTime = Math.ceil(wordCount / AVERAGE_WORDS_PER_MINUTE);

      setTime(readingTime);
    }
  }, [elementId]);

  if (time > 0) {
    return (
      <div className="text-gray-500 text-xs">
        ~{time} {LANG_STRINGS[lang].minutes}
      </div>
    );
  }

  return null;
};
