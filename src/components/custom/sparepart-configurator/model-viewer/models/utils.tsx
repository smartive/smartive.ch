/* eslint-disable react/no-unknown-property */

import { ThreeEvent } from '@react-three/fiber';
import { Dispatch, SetStateAction } from 'react';

export const SelectedMesh = () => <meshStandardMaterial color="red" metalness={0.6} roughness={0.4} />;

export const clickHandler = (
  event: ThreeEvent<globalThis.MouseEvent>,
  uuid: string,
  setSelectedId: Dispatch<SetStateAction<string | null>>,
) => {
  event.stopPropagation();
  setSelectedId(uuid);
};
