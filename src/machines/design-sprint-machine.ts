import { assign, createMachine } from 'xstate';
import Employees from '../data/employees.json';
import { createAssociation, createContact, createDeal } from './hubspot-services';
import { FormType, OptionType, QuizEvent } from './interactive-quiz';

interface Context {
  existing?: string;
  url?: string;
  b2c_b2b?: string;
  target_group?: string;
  solution?: string;
  challenges?: string;
  competition?: string;
  vision?: string;
  inspiration?: string;
  about_you?: string;
  pricing?: number;
  name?: string;
  email?: string;
  phone?: string;
}

type State = {
  value:
    | 'existing'
    | 'providing_url'
    | 'segmentation'
    | 'b2c_target_group'
    | 'b2b_target_group'
    | 'problem_solving'
    | 'challenges'
    | 'competition'
    | 'vision'
    | 'inspiration'
    | 'about_you'
    | 'pricing'
    | 'contact'
    | 'callback';
  context: Context;
};

export const machine = createMachine<Context, QuizEvent, State>({
  id: 'design-sprint-quiz',
  initial: 'existing',
  meta: {
    responsible: Employees.robert,
    topic: 'Design Sprint',
    calendar_link: 'https://smr.tv/meet-robert',
  },
  states: {
    error: {},
    existing: {
      meta: {
        title: 'Existiert dein Produkt bereits?',
        copy: 'Möchtest du dein Produkt weiterbringen? Oder existiert es als Idee die du konkret angehen möchtest?',
        form: {
          type: FormType.Stack,
          options: [
            {
              element: OptionType.Continue,
              value: 'Yes',
              text: 'Jep, ich hab schon ein Produkt',
            },
            {
              element: OptionType.Continue,
              value: 'No',
              text: 'Nein, bisher ist es “nur” eine Idee.',
            },
          ],
        },
      },
      on: {
        CONTINUE: [
          { target: 'providing_url', cond: (_, { value }) => value === 'Yes' },
          { target: 'segmentation', cond: (_, { value }) => value === 'No' },
        ],
      },
    },
    providing_url: {
      meta: {
        title: 'Wo finden wir dein Produkt?',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Input, type: 'url', placeholder: 'https://smartive.ch', label: 'Link zu deinem Produkt' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Link' },
          ],
        },
      },
      on: {
        CONTINUE: { target: 'segmentation', actions: assign({ url: (_, { value }) => value }) },
        SKIP: 'segmentation',
        BACK: 'existing',
      },
    },
    segmentation: {
      meta: {
        title: 'Welche Art von Kunden suchst du?',
        copy: 'Sprichst du direkt Konsumenten (B2C) oder Unternehmen (B2B) an?',
        form: {
          type: FormType.Stack,
          options: [
            { element: OptionType.Continue, value: 'B2C', text: 'B2C Kunden' },
            { element: OptionType.Continue, value: 'B2B', text: 'B2B Kunden' },
          ],
        },
      },
      on: {
        CONTINUE: [
          {
            target: 'b2c_target_group',
            actions: assign({ b2c_b2b: 'B2C' }),
            cond: (_, { value }) => value === 'B2C',
          },
          {
            target: 'b2b_target_group',
            actions: assign({ b2c_b2b: 'B2B' }),
            cond: (_, { value }) => value === 'B2B',
          },
        ],
        BACK: 'existing',
      },
    },
    b2c_target_group: {
      meta: {
        title: 'Beschreib doch bitte kurz deine Traumkunden.',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Textarea, label: 'Beschreibung' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: { target: 'problem_solving', actions: assign({ target_group: (_, { value }) => value }) },
        SKIP: 'problem_solving',
        BACK: 'segmentation',
      },
    },
    b2b_target_group: {
      meta: {
        title: 'Was kannst du uns über deine Zielgruppe sagen?',
        form: {
          type: FormType.Stack,
          options: [
            { element: OptionType.Continue, value: 'micro', text: 'Mikrounternehmen (1–9 Beschäftigte)' },
            { element: OptionType.Continue, value: 'small', text: 'Kleine Unternehmen (10–49 Beschäftigte)' },
            { element: OptionType.Continue, value: 'medium', text: 'Mittlere Unternehmen (50–249 Beschäftigte)' },
            { element: OptionType.Continue, value: 'corporate', text: 'Grosse Unternehmen (250 und mehr Beschäftigte)' },
            { element: OptionType.InlineSkip, text: 'Weiss ich nicht so genaaaau' },
          ],
        },
      },
      on: {
        CONTINUE: { target: 'problem_solving', actions: assign({ target_group: (_, { value }) => value }) },
        SKIP: 'problem_solving',
        BACK: 'segmentation',
      },
    },
    problem_solving: {
      meta: {
        title: 'Wunderbar. Weiter gehts mit deinem Produkt.',
        copy: 'Kannst du uns in wenigen Sätzen erklären, welches Problem das Produkt für dich als Nutzer löst?',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Textarea, label: 'Das löst mein Produkt' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: { target: 'challenges', actions: assign({ solution: (_, { value }) => value }) },
        SKIP: 'challenges',
        BACK: 'segmentation',
      },
    },
    challenges: {
      meta: {
        title: 'Herausforderungen für dein Produkt',
        copy: `Du hast sicher schon über mögliche Herausforderungen für dein Produkt nachgedacht, oder sogar schon Erfahrungen gemacht. Was siehst du als die grössten Herausforderungen?`,
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Textarea, label: 'Herausforderungen' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: { target: 'competition', actions: assign({ challenges: (_, { value }) => value }) },
        SKIP: 'competition',
        BACK: 'problem_solving',
      },
    },
    competition: {
      meta: {
        title: 'Deine Konkurrent*innen',
        copy: 'Gibt es bereits ähnliche Produkte auf dem Markt? Wen siehst du als grösste Konkurent*in?',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Textarea, label: 'Konkurrenz' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: {
          target: 'vision',
          actions: assign({ competition: (_, { value }) => value }),
        },
        SKIP: 'vision',
        BACK: 'challenges',
      },
    },
    vision: {
      meta: {
        title: 'Lass uns noch spielen...',
        copy: 'Beende bitte den folgenden Satz (natürlich im Bezug auf dein Produkt):',
        form: {
          type: FormType.Text,
          options: [
            {
              element: OptionType.Input,
              type: FormType.Text,
              placeholder: 'besiedeln wir den Mars!',
              label: 'In zwei Jahren...',
            },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: {
          target: 'inspiration',
          actions: assign({ vision: (_, { value }) => value }),
        },
        SKIP: 'inspiration',
        BACK: 'competition',
      },
    },
    inspiration: {
      meta: {
        title: 'Quelle der Inspiration',
        copy: `Gibt es andere Apps oder Unternehmen die dich inspirieren? Das muss nicht mal etwas in deiner Branche sein. Es kann eine weitverbreitete App sein bei der du findest “doch, das finde ich cool”.`,
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Textarea, label: 'Inspiration' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: {
          target: 'about_you',

          actions: assign({ inspiration: (_, { value }) => value }),
        },
        SKIP: 'about_you',
        BACK: 'vision',
      },
    },
    about_you: {
      meta: {
        title: 'So, und nun zu dir!',
        copy: 'Beschreib doch bitte dich und dein Unternehmen in 2–3 Sätzen.',
        form: {
          type: FormType.Text,
          options: [
            { element: OptionType.Textarea, label: 'Beschreibung' },
            { element: OptionType.Continue, text: 'Weiter' },
            { element: OptionType.Skip, text: 'Weiter ohne Angaben' },
          ],
        },
      },
      on: {
        CONTINUE: {
          target: 'pricing',
          actions: assign({ about_you: (_, { value }) => value }),
        },
        SKIP: 'pricing',
        BACK: 'inspiration',
      },
    },
    pricing: {
      meta: {
        title: 'Hast du ein Budget im Kopf für den Design Sprint?',
        form: {
          type: FormType.Stack,
          options: [
            { element: OptionType.Continue, value: 5000, text: `Rund CHF 5'000.–` },
            { element: OptionType.Continue, value: 20000, text: `eher so CHF 20'000.–` },
            { element: OptionType.Continue, value: 1000, text: `Was, so viel? Dachte eher so CHF 1'000.–` },
            { element: OptionType.InlineSkip, text: 'Weiss ich noch nicht' },
          ],
        },
      },
      on: {
        CONTINUE: {
          target: 'contact',
          // prefixing a string with + casts it to an integer. JS ftw.
          actions: assign({ pricing: (_, { value }) => +value }),
        },
        SKIP: 'contact',
        BACK: 'about_you',
      },
    },
    contact: {
      on: {
        ADD_CONTACT: {
          target: 'sending',
          actions: assign({
            name: (_, { name }) => name,
            email: (_, { email }) => email,
            phone: (_, { phone }) => phone,
          }),
        },
        BACK: 'about_you',
      },
    },
    sending: {
      invoke: {
        id: 'createDeal',
        src: async (context) => {
          if (process.env.VERCEL_ENV === 'production') {
            const [firstname, lastname] = context.name.split(' ');

            const contactID = await createContact({
              firstname,
              lastname,
              email: context.email,
              phone: context.phone,
              website: context.url,
            });

            const dealID = await createDeal({
              priority: context.pricing === 20000 ? 'high' : context.pricing === 5000 ? 'medium' : 'low',
              name: context.name,
              amount: context.pricing,
              classification: context.b2c_b2b,
              vision: context.vision,
              solution: context.solution,
              challenges: context.challenges,
              competition: context.competition,
              inspiration: context.inspiration,
              about_you: context.about_you,
              target_group: context.target_group,
              url: context.url,
            });

            const association = await createAssociation({ contactID, dealID });

            return association;
          }
        },
        onDone: 'callback',
        onError: 'error',
      },
    },
    callback: { meta: { title: 'Das klingt alles super interessant.' } },
  },
});
