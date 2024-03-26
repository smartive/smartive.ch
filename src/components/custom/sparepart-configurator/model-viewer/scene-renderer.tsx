/* eslint-disable react/no-unknown-property */
'use client';

import { CameraControls } from '@react-three/drei';
import { Dispatch, FC, SetStateAction, Suspense } from 'react';
import { GltfModel, GltfModelType } from '../hooks/use-gltf-model';
import { MonkeysGltf } from './models/monkeys/model';
import { Monkeys } from './models/monkeys/monkeys';
import { RoomGltf } from './models/room/model';
import { Room } from './models/room/room';

type Props = {
  gltfModel: GltfModel;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
};

export const SceneRenderer: FC<Props> = ({ gltfModel, selectedId, setSelectedId }) => {
  const renderGltfModel = (gltfModel: GltfModel) => {
    switch (gltfModel.gltfModelType) {
      case GltfModelType.ROOM:
        return <Room gltfModel={gltfModel as RoomGltf} selectedId={selectedId} setSelectedId={setSelectedId} />;
      case GltfModelType.MONKEYS:
        return <Monkeys gltfModel={gltfModel as MonkeysGltf} selectedId={selectedId} setSelectedId={setSelectedId} />;
    }
  };

  return (
    <>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>{renderGltfModel(gltfModel)}</Suspense>
      <CameraControls />
    </>
  );
};
