import React, { FC, FormEvent, useRef, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Button } from '../elements/button';
import { Label } from '../elements/label';
import { Tooltip } from '../elements/tooltip';
import { Input } from '../identity/input';

type Props = {
  className?: string;
  label?: string;
  button?: string;
};

const NewsletterSubscription: FC<Props> = ({ className = '', label = '', button = 'Jetzt abonnieren' }) => {
  const [email, setEmail] = useState('');
  const mailchimpPrevState = useRef('');
  const [notification, setNotification] = useState('');

  const handleChange = (event) => {
    setNotification('');
    setEmail(event.target.value.trim());
  };

  const handleSubmit = (event: FormEvent, subscribe: ({ EMAIL: string }) => void) => {
    event.preventDefault();
    subscribe({ EMAIL: email });
  };

  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLETTER}
      render={({ subscribe, status, message }) => {
        if (mailchimpPrevState.current !== status) {
          switch (status) {
            case 'success':
              setNotification('Danke für dein Interesse! Du solltest eine E-Mail von uns bekomment haben.');
              setEmail('');
              break;
            case 'error':
              setNotification(
                message.includes('already subscribed')
                  ? 'Du bekommst unseren Newsletter bereits!'
                  : message.includes('address is invalid')
                  ? 'Diese E-Mail-Addresse sieht leider nicht ganz richtig aus.'
                  : 'Uups, etwas ist schief gelaufen. Sorry.'
              );
              break;
            default:
              break;
          }

          mailchimpPrevState.current = status;
        }

        return (
          <div className={className}>
            <form
              className="grid grid-flow-row xl:grid-flow-col gap-2 xl:place-items-end"
              onSubmit={(event) => handleSubmit(event, subscribe)}
            >
              <Label as="label" className="grid grid-flow-row">
                {label}
                <Tooltip text={notification} isOpen={!!notification}>
                  <Input
                    id="newsletter-email"
                    disabled={status === 'sending'}
                    placeholder="E-Mail-Adresse"
                    value={email}
                    onChange={(event) => handleChange(event)}
                    type="email"
                  />
                </Tooltip>
              </Label>
              <Button type="submit" disabled={status === 'sending'} className="xl:min-w-[16rem]">
                <span className="font-sans font-bold text-sm xl:text-base">{status === 'sending' ? '...' : button}</span>
              </Button>
            </form>
          </div>
        );
      }}
    />
  );
};

export default NewsletterSubscription;
