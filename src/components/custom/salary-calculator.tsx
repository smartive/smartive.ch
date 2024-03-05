'use client';

import { Context, machine } from '@/machines/salary-calculator';
import { FC } from 'react';
import { State } from 'xstate';
import { InteractiveQuiz } from '../interactive-quiz';
import { Heading1, Heading3, Paragraph } from '../nodes';

const Report: FC<{ salary: number }> = ({ salary }) => (
  <>
    <Heading1>{salary * 13}</Heading1>
    <Heading3>Franken im Jahr</Heading3>
    <Paragraph>
      Anhand deiner Angaben würdest du wohl so CHF {new Intl.NumberFormat('de-CH').format(salary * 13)}.- im Jahr verdienen.
      Dazu kommen noch ein grosszügiger Bonus der abhängig davon ist, wie erfolgreich unser Jahr war. Auch Lohnerhöhungen
      verhandeln wir nicht, deshalb gibts einfach jedes Jahr CHF 175.- pro Monat dazu.
    </Paragraph>
    <Paragraph>Scroll doch noch ein bisschen. Dort siehst du, warum du bei uns richtig bist. 💯</Paragraph>
  </>
);

export const SalaryCalculator: FC = () => (
  <InteractiveQuiz machine={machine} render={(state: State<Context>) => <Report salary={state.context.salary} />} />
);
