'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { CodeSnippetProps } from './code-snippet';

const CodeSnippet = dynamic(() => import('./code-snippet').then((module) => module.CodeSnippet), {
  loading: () => <div className="min-h-[563px] min-w-[28rem]" />,
});

// Workaround – see `farmer.tsx` why
export const CodeSnippetClient: FC<CodeSnippetProps> = ({ code, caption, language = '' }) => (
  <CodeSnippet code={code} caption={caption} language={language} />
);
