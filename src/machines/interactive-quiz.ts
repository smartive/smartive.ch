export type QuizEvent =
  | {
      type: 'SKIP' | 'BACK';
    }
  | { type: 'CONTINUE'; value: string }
  | { type: 'ADD_CONTACT'; name: string; email: string; phone: string };

export enum FormType {
  Stack = 'stack',
  Text = 'text',
}

export enum OptionType {
  Continue = 'continue',
  Skip = 'skip',
  Input = 'input',
  Textarea = 'textarea',
  InlineSkip = 'inline-skip',
}
