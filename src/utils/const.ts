export type Language = 'en' | 'de';

export const LANG_STRINGS = {
  en: {
    copy: 'Copy link',
    copied: 'Copied!',
    minutes: 'minutes',
    by: 'by',
    previous: 'Previous post',
    next: 'Next post',
    back: 'Back to overview',
    writtenBy: 'Written by',
  },
  de: {
    copy: 'Link kopieren',
    copied: 'Kopiert!',
    minutes: 'Minuten',
    by: 'von',
    previous: 'Vorheriger Artikel',
    next: 'Nächster Artikel',
    back: 'Zurück zur Übersicht',
    writtenBy: 'Geschrieben von',
  },
} as const;
