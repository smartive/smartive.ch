import { Canvas } from '@react-three/fiber';
import { Dispatch, FC, SetStateAction } from 'react';
import { GltfModel, GltfModelType } from '../hooks/use-gltf-model';
import { SceneRenderer } from './scene-renderer';
import { ToolbarButtons } from './toolbar-buttons';

type Props = {
  gltfModel: GltfModel;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  selectedGltfModelType: GltfModelType;
  setSelectedGltfModelType: Dispatch<SetStateAction<GltfModelType>>;
};

export const ModelViewer: FC<Props> = ({
  gltfModel,
  selectedId,
  setSelectedId,
  selectedGltfModelType,
  setSelectedGltfModelType,
}) => (
  <div className="relative h-2/3 overflow-y-scroll bg-cornflower-200 md:h-full md:w-7/12">
    <ToolbarButtons selectedGltfModelType={selectedGltfModelType} setSelectedGltfModelType={setSelectedGltfModelType} />
    <Canvas
      camera={{
        position: [0, 0, 20],
        fov: 45,
      }}
    >
      <SceneRenderer gltfModel={gltfModel} selectedId={selectedId} setSelectedId={setSelectedId} />
    </Canvas>
  </div>
);
