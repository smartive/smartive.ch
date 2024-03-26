'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import { GltfModel } from '../hooks/use-gltf-model';
import { ActionButtons } from './action-buttons';
import { RadioGroup } from './radio-group';

type Props = {
  gltfModel: GltfModel;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
};

export const SelectList: FC<Props> = ({ gltfModel, selectedId, setSelectedId }) => (
  <div className="flex h-1/3 flex-col justify-between gap-4 bg-apricot-200 p-5 md:h-full md:w-5/12">
    <div className="overflow-y-scroll">
      <RadioGroup gltfModel={gltfModel} selectedId={selectedId} setSelectedId={setSelectedId} />
    </div>
    <ActionButtons />
  </div>
);
