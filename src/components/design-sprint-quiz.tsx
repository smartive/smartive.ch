import { FC } from 'react';
import { machine } from '../machines/design-sprint-machine';
import { InteractiveQuiz } from './interactive-quiz';

export const DesignSprintQuiz: FC = () => <InteractiveQuiz machine={machine} />;
