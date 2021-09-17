import {
  Button,
  ButtonLink,
  Card,
  Copy,
  Heading2,
  Input,
  Label,
  Link,
  LinkButton,
  Textarea,
  Tooltip,
} from '@smartive/guetzli';
import { useMachine } from '@xstate/react';
import { AnimatePresence, AnimateSharedLayout, domMax, LazyMotion, m as motion } from 'framer-motion';
import React, { Children, cloneElement, FC, PropsWithChildren, ReactElement, useMemo, useRef, useState } from 'react';
import { StateMachine } from 'xstate';
import type { QuizEvent } from '../machines/interactive-quiz';

const Stack: FC = ({ children }) => (
  <div className="flex flex-col">
    {Children.map(children, (child: ReactElement<PropsWithChildren<{ className?: string }>>) =>
      cloneElement(child, { className: `${child.props.className} mb-4` })
    )}
  </div>
);

type Props = {
  machine: StateMachine<unknown, unknown, QuizEvent>;
};

export const InteractiveQuiz: FC<Props> = ({ machine }) => {
  const [state, send] = useMachine(machine);
  const ref = useRef(null);

  const Options = useMemo(
    () => ({
      continue: ({ value, text }) => {
        return (
          <Button
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
          <LinkButton key={text} onClick={() => send('SKIP')} className="ml-4">
            {text}
          </LinkButton>
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
            <LinkButton className="mx-auto" onClick={() => send('SKIP')}>
              {text}
            </LinkButton>
          </div>
        );
      },
    }),
    []
  );

  const getMeta = (field: string) => state.meta[`${machine.id}.${state.value}`]?.[field];

  const title = getMeta('title');
  const copy = getMeta('copy');
  const form = getMeta('form');

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
            <Link href={`tel:${state.meta[machine.id].responsible.tel}`} className="mr-8">
              {state.meta[machine.id].responsible.tel}
            </Link>
            <Link href={`tel:${state.meta[machine.id].responsible.email}`}>{state.meta[machine.id].responsible.email}</Link>
          </Copy>
        </div>
      </Card>
    );

  return (
    <LazyMotion strict features={domMax}>
      <AnimateSharedLayout>
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
                  ) : state.matches('callback') ? (
                    <>
                      <div className="mb-8" />
                      <Heading2 className="max-w-prose">{getMeta('title')}</Heading2>
                      {getMeta('copy') && <Copy>{getMeta('copy')}</Copy>}
                      <Copy>
                        {state.meta[machine.id].responsible.firstname} würde sich gerne mit dir zum Thema{' '}
                        {state.meta[machine.id].topic} austauschen. Mit dem Button unten kannst du direkt einen Termin
                        buchen. Und wenn nicht, wird sich {state.meta[machine.id].responsible.firstname} bald bei dir melden.
                      </Copy>
                      <ButtonLink newTab className="text-center" href={state.meta[machine.id].calendar_link}>
                        Jetzt Termin buchen
                      </ButtonLink>
                    </>
                  ) : (
                    <>
                      {!state.matches('existing') && (
                        <LinkButton onClick={() => send('BACK')} className="mb-8 block mt-8">
                          Zurück
                        </LinkButton>
                      )}
                      <div className="mb-8" />
                      <Heading2 className="max-w-prose">{title}</Heading2>
                      {getMeta('copy') && <Copy>{copy}</Copy>}
                      {form?.type === 'stack' ? (
                        <Stack>{form?.options.map(({ element, ...option }) => Options[element](option))}</Stack>
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
      </AnimateSharedLayout>
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
      <Button onClick={submit}>Weiter</Button>
    </Stack>
  );
};
