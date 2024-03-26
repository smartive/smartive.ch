'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import { GltfModelType } from '../../hooks/use-gltf-model';
import { Select } from './select';

type Props = {
  selectedGltfModelType: GltfModelType;
  setSelectedGltfModelType: Dispatch<SetStateAction<GltfModelType>>;
};

export const ToolbarButtons: FC<Props> = ({ selectedGltfModelType, setSelectedGltfModelType }) => (
  <>
    <div className="absolute bottom-4 right-4 z-10 flex flex-col justify-end gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white-100">
        <ToolbarButton>
          <IconPlus />
        </ToolbarButton>
      </div>
      <ToolbarButton>
        <IconMinus />
      </ToolbarButton>
    </div>
    <div className="absolute right-4 top-4 z-10 flex flex-row gap-4">
      <ToolbarButton>
        <IconExpand />
      </ToolbarButton>
    </div>
    <div className="absolute left-4 top-4 z-10 flex flex-row gap-4">
      <Select selectedGltfModelType={selectedGltfModelType} setSelectedGltfModelType={setSelectedGltfModelType} />
    </div>
  </>
);

const ToolbarButton = ({ children }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white-100 hover:bg-apricot-200">{children}</div>
);

const IconPlus = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 21L16.65 16.65M11 8V14M8 11H14M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMinus = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 21L16.65 16.65M8 11H14M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconExpand = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 14V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H14M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
