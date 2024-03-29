/* eslint-disable react/no-unknown-property */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 simple-3d-model.glb 
*/

import { Dispatch, FC, SetStateAction } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { GltfModelType } from '../../../hooks/use-gltf-model';
import { SelectedMesh, clickHandler } from '../utils';

export type MonkeysGltf = GLTF & {
  gltfModelType: GltfModelType;
  nodes: {
    Würfel1: THREE.Mesh;
    Würfel2: THREE.Mesh;
    Zylinder: THREE.Mesh;
    Matthias1: THREE.Mesh;
    Matthias2: THREE.Mesh;
  };
  materials: object;
};

type Props = {
  gltfModel: MonkeysGltf;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
};

export const MonkeysModel: FC<Props> = ({ gltfModel, selectedId, setSelectedId }) => {
  const { nodes } = gltfModel;

  return (
    <group dispose={null}>
      <mesh
        onClick={(event) => clickHandler(event, nodes.Würfel1.uuid, setSelectedId)}
        geometry={nodes.Würfel1.geometry}
        material={nodes.Würfel1.material}
        position={[0.8, -0.883, 3.17]}
      >
        {selectedId === nodes.Würfel1.uuid && <SelectedMesh />}
      </mesh>
      <mesh
        onClick={(event) => clickHandler(event, nodes.Würfel2.uuid, setSelectedId)}
        name={nodes.Würfel2.name}
        uuid={nodes.Würfel2.uuid}
        geometry={nodes.Würfel2.geometry}
        material={nodes.Würfel2.material}
        position={[-0.14, -0.254, -1.954]}
      >
        {selectedId === nodes.Würfel2.uuid && <SelectedMesh />}
      </mesh>
      <mesh
        onClick={(event) => clickHandler(event, nodes.Zylinder.uuid, setSelectedId)}
        name={nodes.Zylinder.name}
        uuid={nodes.Zylinder.uuid}
        geometry={nodes.Zylinder.geometry}
        material={nodes.Zylinder.material}
        position={[-0.388, 1.228, 1.195]}
      >
        {selectedId === nodes.Zylinder.uuid && <SelectedMesh />}
      </mesh>
      <mesh
        onClick={(event) => clickHandler(event, nodes.Matthias1.uuid, setSelectedId)}
        geometry={nodes.Matthias1.geometry}
        material={nodes.Matthias1.material}
        position={[0.841, -3.198, -0.646]}
      >
        {selectedId === nodes.Matthias1.uuid && <SelectedMesh />}
      </mesh>
      <mesh
        onClick={(event) => clickHandler(event, nodes.Matthias2.uuid, setSelectedId)}
        geometry={nodes.Matthias2.geometry}
        material={nodes.Matthias2.material}
        position={[-1.606, -2.153, -1.7]}
      >
        {selectedId === nodes.Matthias2.uuid && <SelectedMesh />}
      </mesh>
    </group>
  );
};
