'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import { GltfModel } from '../hooks/use-gltf-model';

type Props = {
  gltfModel: GltfModel;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
};

export const RadioGroup: FC<Props> = ({ gltfModel, selectedId, setSelectedId }) => (
  <ul className="mt-5 flex flex-col gap-4">
    {gltfModel.nodes &&
      Object.values(gltfModel.nodes)
        .filter((node) => node.name !== 'Scene')
        .map((node) => (
          <li key={node.uuid}>
            <input
              type="radio"
              id={node.uuid}
              className="peer hidden"
              value={node.uuid}
              checked={selectedId === node.uuid}
              onChange={(event) => setSelectedId(event.target.value)}
            />
            <label
              htmlFor={node.uuid}
              className="flex w-full cursor-pointer items-center justify-between rounded-sm border border-apricot-500 p-2 hover:border-apricot-800 peer-checked:border-apricot-800 peer-checked:bg-apricot-500"
            >
              <div className="w-full">{node.name}</div>
            </label>
          </li>
        ))}
  </ul>
);
