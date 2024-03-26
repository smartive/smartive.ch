import { useGLTF } from '@react-three/drei';
import { MonkeysGltf as MonkeysGltf } from '../model-viewer/models/monkeys/model';
import { RoomGltf } from '../model-viewer/models/room/model';

export type GltfModel = MonkeysGltf | RoomGltf;

export enum GltfModelType {
  MONKEYS = 'Monkeys',
  ROOM = 'Room',
}

export const useGltfModel = (modelType: GltfModelType): GltfModel => {
  const roomGltf = useGLTF('three/sparepart-configurator-models/room.glb') as RoomGltf;
  const monkeysGltf = useGLTF('/three/sparepart-configurator-models/monkeys.glb') as MonkeysGltf;

  roomGltf.gltfModelType = GltfModelType.ROOM;
  monkeysGltf.gltfModelType = GltfModelType.MONKEYS;

  switch (modelType) {
    case GltfModelType.MONKEYS:
      return monkeysGltf;
    case GltfModelType.ROOM:
      return roomGltf;
  }
};
