'use client';

import dynamic from 'next/dynamic';
import { Dispatch, FC, SetStateAction } from 'react';
import { MonkeysGltf } from './model';

type Props = {
  gltfModel: MonkeysGltf;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
};

const MonkeysModel = dynamic(() => import('./model').then((module) => module.MonkeysModel), {});

// Workaround because dynamic import of client component within server component does not split code
// see issue: https://github.com/vercel/next.js/issues/61066 or https://github.com/vercel/next.js/issues/55989
export const Monkeys: FC<Props> = ({ gltfModel, selectedId, setSelectedId }) => (
  <MonkeysModel gltfModel={gltfModel} selectedId={selectedId} setSelectedId={setSelectedId} />
);
