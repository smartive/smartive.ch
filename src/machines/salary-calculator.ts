import { assign, createMachine } from 'xstate';
import { FormType, OptionType } from './interactive-quiz';

export interface Context {
  salary: number;
}

const BASE_SALARY = 5500;
const APPRENTICESHIP_QUAL = 200;
const FAMILY_ALLOWANCE = 300;
const BACHELOR_QUAL = 750;
const MASTER_QUAL = 250;
const PROFESSIONAL_EDU_QUAL = 200;
const YEARLY_EXPERIENCE = 150;
const MAX_EXPERIENCE_YEARS = 10;
const MAX_EXPERIENCE_SALARY = YEARLY_EXPERIENCE * MAX_EXPERIENCE_YEARS;

export const machine = createMachine<any, any, any>({
  predictableActionArguments: true,
  id: 'salary-calculator',
  initial: 'apprenticeship',
  context: { salary: BASE_SALARY },
  states: {
    apprenticeship: {
      meta: {
        title: 'Hast du eine Lehre gemacht?',
        copy: 'Sofern deine Lehrausbildung relevant ist, rechnen wir dir CHF 200.- im Monat dafür an.',
        form: {
          type: FormType.Stack,
          options: [
            {
              element: OptionType.Continue,
              value: 'Yep',
              text: 'Yep',
            },
            { element: OptionType.Continue, value: 'Nope', text: 'Nope' },
          ],
        },
      },
      on: {
        CONTINUE: [
          {
            target: 'bachelor',
            cond: (_, { value }) => value === 'Yep',
            actions: assign({ salary: () => BASE_SALARY + APPRENTICESHIP_QUAL }),
          },
          {
            target: 'bachelor',
            cond: (_, { value }) => value === 'Nope',
          },
        ],
      },
    },
    bachelor: {
      meta: {
        title: 'Hast du einen Bachelor-Abschluss?',
        copy: 'Auch hier spielt natürlich die Relevanz eine Rolle. So sehr wir dein Linguistik-Studium lieben (tun wir wirklich 😍) trägt das wahrscheinlich nicht viel zu deinem Alltag als Software Engineer bei. Für einen Bachelor-Abschluss gibts monatlich CHF 750.-',
        form: {
          type: FormType.Stack,
          options: [
            {
              element: OptionType.Continue,
              value: 'Yep',
              text: 'Been there, done that',
            },
            { element: OptionType.Continue, value: 'Nope', text: 'Ja, hab einen Abschluss in Zauberei von Hogwarts 🧙' },
            { element: OptionType.Continue, value: 'Nope', text: 'Ne, Studenten kenn ich nur von Parties' },
          ],
        },
      },
      on: {
        BACK: 'apprenticeship',
        CONTINUE: [
          {
            target: 'master',
            cond: (_, { value }) => value === 'Yep',
            actions: assign({ salary: ({ salary }: Context) => salary + BACHELOR_QUAL }),
          },
          { target: 'professionalEducation', cond: (_, { value }) => value === 'Nope' },
        ],
      },
    },
    master: {
      meta: {
        title: 'Und wie siehts mit einem Master-Abschluss aus?',
        copy: 'Dein MSc in Lebensmittelwissenschaften war wahrscheinlich unglaublich spannend – falls du als UX Designer*in zu uns kommst, hilft das wahrscheinlich nicht all zu viel. Hier gibts nochmals CHF 250.- on top.',
        form: {
          type: FormType.Stack,
          options: [
            {
              element: OptionType.Continue,
              value: 'Yep',
              text: 'Ja!',
            },
            { element: OptionType.Continue, value: 'Nope', text: 'Nö, war aber schon Dungeon Master bei D&D' },
          ],
        },
      },
      on: {
        BACK: 'bachelor',
        CONTINUE: [
          {
            target: 'professionalEducation',
            cond: (_, { value }) => value === 'Yep',
            actions: assign({ salary: ({ salary }: Context) => salary + MASTER_QUAL }),
          },
          { target: 'professionalEducation', cond: (_, { value }) => value === 'Nope' },
        ],
      },
    },
    professionalEducation: {
      meta: {
        title: 'Hast du einen HF-Abschluss?',
        copy: 'Für deinen Besuch einer Höheren Fachschule gibts monatlich nochmals CHF 200.- dazu. Sofern, du erahnst es schon, ein Bezug zu deiner Arbeit bei uns besteht.',
        form: {
          type: FormType.Stack,
          options: [
            {
              element: OptionType.Continue,
              value: 'Yep',
              text: 'Mhm',
            },
            { element: OptionType.Continue, value: 'Nope', text: 'Nä-ä' },
          ],
        },
      },
      on: {
        BACK: 'master',
        CONTINUE: [
          {
            target: 'experience',
            cond: (_, { value }) => value === 'Yep',
            actions: assign({ salary: ({ salary }: Context) => salary + PROFESSIONAL_EDU_QUAL }),
          },
          { target: 'experience', cond: (_, { value }) => value === 'Nope' },
        ],
      },
    },
    experience: {
      meta: {
        title: 'Wie viele Jahre Berufserfahrung (in der Digital-Branche) hast du?',
        copy: 'Mit CHF 150.- “belohnen” wir jedes Jahr, dass du schon mit der Entwicklung von digitalen Produkten verbracht hast. Bei 10 Jahren setzen wir den Deckel.',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Input, type: 'number', placeholder: 2, label: 'Erfahrung in Jahren' },
            {
              element: OptionType.Continue,
              text: 'Uuuund weiter',
            },
          ],
        },
      },
      on: {
        BACK: 'professionalEducation',
        CONTINUE: {
          target: 'familyAllowance',
          actions: assign({
            salary: ({ salary }: Context, { value }) =>
              salary + Math.min(parseInt(value || 0, 10) * YEARLY_EXPERIENCE, MAX_EXPERIENCE_SALARY),
          }),
        },
      },
    },
    familyAllowance: {
      meta: {
        title: 'Wie viele Kinder, die jünger als 6 Jahre sind, hast du?',
        copy: 'Für jedes deiner Kinder geben wir dir pro Monat (ohne 13ter) CHF 300.- zusätzlich.',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Input, type: 'number', placeholder: 2, label: 'Anzahl Kinder' },
            {
              element: OptionType.Continue,
              text: 'Zeig mir, wie viel ich bekomme',
            },
          ],
        },
      },
      on: {
        BACK: 'experience',
        CONTINUE: {
          target: 'report',
          actions: assign({
            salary: ({ salary }: Context, { value }) => salary + parseInt(value || 0, 10) * FAMILY_ALLOWANCE,
          }),
        },
      },
    },
    report: {
      type: 'final',
    },
  },
});
