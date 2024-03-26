import { Dispatch, FC, SetStateAction } from 'react';
import { GltfModelType } from '../../hooks/use-gltf-model';

type Props = {
  selectedGltfModelType: GltfModelType;
  setSelectedGltfModelType: Dispatch<SetStateAction<GltfModelType>>;
};

export const Select: FC<Props> = ({ selectedGltfModelType, setSelectedGltfModelType }) => (
  <select
    className="h-12 rounded-sm border-none bg-white-100 focus:ring-0"
    onChange={(e) => setSelectedGltfModelType(e.target.value as GltfModelType)}
  >
    {Object.values(GltfModelType).map((type) => (
      <option key={type} value={type} defaultValue={selectedGltfModelType}>
        {type}
      </option>
    ))}
  </select>
);
