'use client';

import dynamic from 'next/dynamic';
import { Dispatch, FC, SetStateAction } from 'react';
import { RoomGltf } from './model';

type Props = {
  gltfModel: RoomGltf;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
};

const RoomModel = dynamic(() => import('./model').then((module) => module.RoomModel), {});

// Workaround because dynamic import of client component within server component does not split code
// see issue: https://github.com/vercel/next.js/issues/61066 or https://github.com/vercel/next.js/issues/55989
export const Room: FC<Props> = ({ gltfModel, selectedId, setSelectedId }) => (
  <RoomModel gltfModel={gltfModel} selectedId={selectedId} setSelectedId={setSelectedId} />
);
