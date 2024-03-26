'use client';

import { FC } from 'react';

export const ActionButtons: FC = () => (
  <div className="flex justify-end gap-4">
    <button className="rounded-sm border border-apricot-500 p-4 hover:border-apricot-800">Informationen</button>
    <button className="rounded-sm border border-apricot-500 p-4 hover:border-apricot-800">Einkaufen</button>
  </div>
);
