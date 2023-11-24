'use client';

import { FC, useState } from 'react';
import { LANG_STRINGS } from '../../utils/const';

export const CopyUrlButton: FC<{ lang: string }> = ({ lang }) => {
  const [displayMessage, setDisplayMessage] = useState(false);

  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setDisplayMessage(true);
        setTimeout(() => {
          setDisplayMessage(false);
        }, 1500);
      }}
      className="rounded border border-black px-4 py-2 text-xxs transition-colors hover:border-cornflower-500 hover:bg-cornflower-500 hover:text-white-100 lg:text-xs"
    >
      {displayMessage ? <span>{LANG_STRINGS[lang].copied}</span> : <span>{LANG_STRINGS[lang].copy}</span>}
    </button>
  );
};
