'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

const InteractiveQuiz = dynamic(() => import('./interactive-quiz').then((module) => module.InteractiveQuiz), {
  ssr: true,
});

// Workaround – see `farmer.tsx` why
export const SalaryCalculator: FC = () => <InteractiveQuiz />;
