import { ReactNode } from 'react';
import { Url } from 'url';
import { BrandColor } from '../utils/colors';

export type Package = {
  label: string | ReactNode;
  title: string;
  content: string;
  link: { label: string; href: Url | string };
  background: BrandColor;
};

export default {
  'ideation-sprint': {
    label: '2–5 Tage',
    title: 'Ideation Sprint',
    content:
      'Gewinn ein besseres Verständnis für die Bedürfnisse deiner Nutzer und zieh daraus praktikable Ideen. Erhalte einen ersten visuellen Prototypen und hol Feedback deiner Kunden ein.',
    link: {
      label: 'Wie geht das?',
      href: '/angebot/ideation-sprint',
    },
    background: 'apricot',
  },
  speedboat: {
    label: '4 Wochen',
    title: 'Speedboat',
    content:
      'Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt.',
    link: {
      label: 'Zeig mir mehr!',
      href: '/angebot/speedboat',
    },
    background: 'mint',
  },
  'scale-up': {
    label: '2–3 Monate',
    title: 'Scale Up',
    content: 'Bau dein MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts.',
    link: {
      label: 'Wie genau?',
      href: '/angebot/scale-up',
    },
    background: 'cornflower',
  },
  'solution-review': {
    label: '2–5 Tage',
    title: 'Solution Review',
    content:
      'Erhalte eine objektive Einschätzung der Chancen und Risiken deines digitalen Produkts sowie einen klaren Massnahmenplan, was du verbessern kannst.',
    link: {
      label: 'Weitere Infos',
      href: '/angebot/solution-review',
    },
    background: 'mint',
  },
  mentoring: {
    label: 'Laufend',
    title: 'Mentoring',
    content:
      'Tausch dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine Strategie aus.',
    link: {
      label: 'Mehr zum Mentoring',
      href: '/angebot/mentoring',
    },
    background: 'apricot',
  },
} as Record<string, Package>;
