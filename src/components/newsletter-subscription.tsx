import { Button, Input, Label, Tooltip } from '@smartive/guetzli';
import React, { FC, FormEvent, useRef, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

type Props = {
  label?: string;
  button?: string;
};

export const NewsletterSubscription: FC<Props> = ({ label = '', button = 'Jetzt abonnieren' }) => {
  const [email, setEmail] = useState('');
  const mailchimpPrevState = useRef('');

  const handleChange = (event) => {
    setEmail(event.target.value.trim());
  };

  const handleSubmit = (event: FormEvent, subscribe: ({ EMAIL }: { EMAIL: string }) => void) => {
    event.preventDefault();
    subscribe({ EMAIL: email });
  };

  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLETTER}
      render={({ subscribe, status, message }) => {
        let notification = '';
        if (mailchimpPrevState.current !== status) {
          switch (status) {
            case 'success':
              notification = 'Danke für dein Interesse! Du solltest eine E-Mail von uns bekomment haben.';
              setEmail('');
              break;
            case 'error':
              notification = message.includes('already subscribed')
                ? 'Du bekommst unseren Newsletter bereits!'
                : message.includes('address is invalid')
                ? 'Echt? Sieht nicht wie eine E-Mail-Adresse aus.'
                : 'Uups, etwas ist schief gelaufen. Sorry.';
              break;
            default:
              break;
          }

          mailchimpPrevState.current = status;
        }

        return (
          <div className="text-left overflow-hidden sm:overflow-visible">
            <form
              className="grid grid-flow-row xl:grid-flow-col gap-2 xl:place-items-end"
              onSubmit={(event) => handleSubmit(event, subscribe)}
            >
              <Label as="label" className="grid grid-flow-row">
                {label}
                <Tooltip text={notification} isOpen={!!notification}>
                  <Input
                    disabled={status === 'sending'}
                    placeholder="E-Mail-Adresse"
                    value={email}
                    onChange={(event) => handleChange(event)}
                    type="email"
                  />
                </Tooltip>
              </Label>

              <Button as="button" type="submit" disabled={status === 'sending'}>
                <span className="font-sans text-sm text-center font-bold w-full">
                  {status === 'sending' ? '...' : button}
                </span>
              </Button>
            </form>
          </div>
        );
      }}
    />
  );
};
