import { Button, Card, Copy, Heading2, Input, Label, Textarea, TextLink, Tooltip } from '@smartive/guetzli';
import { useMachine } from '@xstate/react';
import { AnimatePresence, domMax, LazyMotion, m as motion } from 'framer-motion';
import React, { FC, ReactNode, useMemo, useRef, useState } from 'react';
import { State, StateMachine } from 'xstate';
import { getMeta } from '../machines/get-meta';
import type { QuizEvent } from '../machines/interactive-quiz';

const Stack: FC = ({ children }) => <div className="flex flex-col gap-4">{children}</div>;

type Props = {
  machine: StateMachine<any, any, QuizEvent>;
  render: (state: State<any>, machine: StateMachine<any, any, QuizEvent>) => ReactNode;
};

export const InteractiveQuiz: FC<Props> = ({ machine, render }) => {
  const [state, send] = useMachine(machine);
  const ref = useRef(null);

  const Options = useMemo(
    () => ({
      continue: ({ value, text, width = 'auto' }) => {
        return (
          <Button
            width={width === 'full' ? 'full' : 'auto'}
            variant="solid"
            as="button"
            key={text}
            onClick={() => {
              const input = value || ref.current?.value;
              send({ type: 'CONTINUE', value: input });
            }}
          >
            {text}
          </Button>
        );
      },
      skip: ({ text }) => {
        return (
          <span className="ml-4" key={text}>
            <TextLink as="button" key={text} onClick={() => send('SKIP')}>
              {text}
            </TextLink>
          </span>
        );
      },
      input: ({ type, label, placeholder, required = false }) => {
        return (
          <Label key={label} as="label" className="mb-4">
            {label}
            <Input ref={ref} type={type} className="w-full mb-4" placeholder={placeholder} required={required} />
          </Label>
        );
      },
      textarea: ({ label }) => {
        return (
          <Label key={label} as="label" className="mb-4">
            {label}
            <Textarea ref={ref} className="mb-4 w-full" />
          </Label>
        );
      },
      'inline-skip': ({ text }) => {
        return (
          <div key={text} className="w-full text-center">
            <span className="mx-auto">
              <TextLink as="button" onClick={() => send('SKIP')}>
                {text}
              </TextLink>
            </span>
          </div>
        );
      },
    }),
    []
  );

  const title = getMeta('title', { machine, state });
  const copy = getMeta('copy', { machine, state });
  const form = getMeta('form', { machine, state });

  if (state.matches('error'))
    return (
      <Card background="mint">
        <div className="md:w-2/3 lg:w-1/2 mx-auto md:p-16">
          <Heading2>Technologie, gäll? 🤬</Heading2>
          <Copy>
            Entweder will unser CRM gerade nicht oder wir haben Mist programmiert. Auf jeden Fall funktioniert das Formular
            im Moment nicht.
          </Copy>
          <Copy>Umso schöner wäre es, wenn du von dir aus mit uns Kontakt aufnimmst.</Copy>
          <Copy>
            <span className="mr-8">
              <TextLink href={`tel:${state.meta[machine.id].responsible.tel}`}>
                {state.meta[machine.id].responsible.tel}
              </TextLink>
            </span>

            <TextLink href={`tel:${state.meta[machine.id].responsible.email}`}>
              {state.meta[machine.id].responsible.email}
            </TextLink>
          </Copy>
        </div>
      </Card>
    );

  return (
    <LazyMotion strict features={domMax}>
      <motion.div layout transition={{ duration: 0.15 }} className="content">
        <Card background="cornflower">
          <form onSubmit={(e) => e.preventDefault()} className="md:w-2/3 lg:w-1/2 mx-auto md:p-16">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={state.value.toString()}
                initial={{ opacity: 0, x: state.event.type === 'BACK' ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
              >
                {state.matches('contact') ? (
                  <>
                    <div className="mb-8" />

                    <Heading2 className="max-w-prose">So erreichen wir dich.</Heading2>
                    <Copy>Darauf hast du wohl nur gewartet. Jetzt hätten wir natürlich gerne deine Kontaktdaten.</Copy>
                    <ContactForm
                      onContinue={({ name, email, phone }) => send({ type: 'ADD_CONTACT', name, email, phone })}
                    />
                  </>
                ) : state.done ? (
                  render(state, machine)
                ) : (
                  <>
                    {!state.matches(machine.initial) && (
                      <span className="mb-8 block mt-8">
                        <TextLink as="button" onClick={() => send('BACK')}>
                          Zurück
                        </TextLink>
                      </span>
                    )}
                    <div className="mb-8" />
                    <Heading2 className="max-w-prose">{title}</Heading2>
                    {getMeta('copy', { machine, state }) && <Copy>{copy}</Copy>}
                    {form?.type === 'stack' ? (
                      <Stack>
                        {form?.options.map(({ element, ...option }) => Options[element]({ ...option, width: 'full' }))}
                      </Stack>
                    ) : form?.type === 'text' ? (
                      form?.options.map(({ element, ...option }) => Options[element](option))
                    ) : null}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </form>
        </Card>
      </motion.div>
    </LazyMotion>
  );
};

const ContactForm: FC<{
  onContinue: (e: { name: string; email: string; phone: string }) => void;
}> = ({ onContinue }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [error, setError] = useState(false);

  const submit = () => {
    const isValid = [name, email, phone].reduce((acc, cur) => (cur === '' || !acc ? false : true), true);

    if (isValid) {
      onContinue({
        name,
        email,
        phone,
      });
    } else {
      setError(true);
    }
  };

  return (
    <Stack>
      <Label as="label">
        Name
        <Tooltip text="Bitte gib uns doch deinen Namen an." isOpen={name === '' && error}>
          <Input
            onChange={(e) => {
              setError(false);
              setName(e.currentTarget.value);
            }}
            type="string"
            placeholder="Sheldon Cooper"
            className="mb-4 w-full"
          />
        </Tooltip>
      </Label>

      <Label as="label">
        E-Mail
        <Tooltip
          text="Damit wir dich erreichen können, gib doch bitte deine E-Mail Adresse ein."
          isOpen={email === '' && error}
        >
          <Input
            onChange={(e) => {
              setError(false);
              setEmail(e.currentTarget.value);
            }}
            type="string"
            placeholder="du@smartive.ch"
            className="mb-4 w-full"
          />
        </Tooltip>
      </Label>

      <Label as="label">
        Telefon
        <Tooltip
          text="Telefon wirkt vielleicht etwas Oldschool, ist aber doch noch nützlich."
          isOpen={phone === '' && error}
        >
          <Input
            onChange={(e) => {
              setError(false);
              setPhone(e.currentTarget.value);
            }}
            type="string"
            placeholder="044 552 55 99"
            className="mb-4 w-full"
          />
        </Tooltip>
      </Label>
      <Button as="button" type="submit" onClick={submit}>
        Weiter
      </Button>
    </Stack>
  );
};
