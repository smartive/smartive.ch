import { ButtonLink, Copy, Heading2 } from '@smartive/guetzli';
import React, { FC } from 'react';
import { machine } from '../machines/design-sprint-machine';
import { getMeta } from '../machines/get-meta';
import { InteractiveQuiz } from './interactive-quiz';

type Props = {
  title?: string;
  copy?: string;
  firstname: string;
  topic: string;
  calendarUrl: string;
};

const Result: FC<Props> = ({ title, copy, firstname, topic, calendarUrl }) => (
  <>
    <div className="mb-8" />
    <Heading2 className="max-w-prose">{title}</Heading2>
    {copy && <Copy>{copy}</Copy>}
    <Copy>
      {firstname} würde sich gerne mit dir zum Thema {topic} austauschen. Mit dem Button unten kannst du direkt einen Termin
      buchen. Und wenn nicht, wird sich {firstname} bald bei dir melden.
    </Copy>
    <ButtonLink newTab className="text-center" href={calendarUrl}>
      Jetzt Termin buchen
    </ButtonLink>
  </>
);

export const DesignSprintQuiz: FC = () => (
  <InteractiveQuiz
    machine={machine}
    render={(state, machine) => (
      <Result
        title={getMeta('title', { state, machine })}
        copy={getMeta('copy', { state, machine })}
        firstname={state.meta[machine.id].responsible.firstname}
        topic={state.meta[machine.id].topic}
        calendarUrl={state.meta[machine.id].calendar_link}
      />
    )}
  />
);
