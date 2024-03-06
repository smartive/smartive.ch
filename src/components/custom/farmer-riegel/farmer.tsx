'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

const FarmerModel = dynamic(() => import('./model').then((module) => module.FarmerModel), {
  loading: () => <div className="min-h-[563px] min-w-[28rem]" />,
});

// Workaround because dynamic import of client component within server component does not split code
// see issue: https://github.com/vercel/next.js/issues/61066 or https://github.com/vercel/next.js/issues/55989
export const Farmer: FC = () => <FarmerModel />;
