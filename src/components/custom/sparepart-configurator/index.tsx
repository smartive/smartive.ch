'use client';

import { BlockWrapper } from '@/components/layouts/block-wrapper';
import { FC, useState } from 'react';
import { GltfModelType, useGltfModel } from './hooks/use-gltf-model';
import { ModelViewer } from './model-viewer';
import { SelectList } from './select-list';

export const SparepartConfigurator: FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedGlftModelType, setSelectedGlftModelType] = useState<GltfModelType>(GltfModelType.MONKEYS);
  const gltfModel = useGltfModel(selectedGlftModelType);

  return (
    <BlockWrapper>
      <div className="flex h-[70vh] max-h-[900px] min-h-[600px] flex-col overflow-hidden rounded-sm bg-white-100 md:flex-row">
        <ModelViewer
          gltfModel={gltfModel}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          selectedGltfModelType={selectedGlftModelType}
          setSelectedGltfModelType={setSelectedGlftModelType}
        />
        <SelectList gltfModel={gltfModel} selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </BlockWrapper>
  );
};
