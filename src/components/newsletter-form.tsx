'use client';

import { mailchimpSignup } from '@/actions/mailchimp';
import { classNames } from '@smartive/guetzli';
import { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const SubmitButton: FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="border-b-2 border-cornflower-500 text-xxs font-bold no-underline transition-colors duration-150 hover:border-black lg:border-b-4 lg:text-base"
    >
      Newsletter abonnieren
    </button>
  );
};

export const NewsletterForm: FC = () => {
  const [{ type, message }, formAction] = useFormState(mailchimpSignup, { message: undefined, type: undefined });

  return (
    <form action={formAction}>
      {type && (
        <div
          className={classNames(
            'mb-4 border-l-4 bg-opacity-10 p-4',
            {
              success: 'border-success bg-success text-success',
              info: 'border-cornflower-500 bg-cornflower-200 text-cornflower-500',
              error: 'border-error bg-error text-error',
            }[type],
          )}
        >
          {message}
        </div>
      )}
      <fieldset className="mb-8 flex flex-col space-y-2">
        <label htmlFor="email">Deine E-Mail-Adresse 👇</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-0 border-b border-black p-4 font-sans text-xs outline-none transition-colors focus:bg-cornflower-200 focus:bg-opacity-20 focus:ring-0 lg:text-base"
          required
        />
      </fieldset>
      <SubmitButton />
    </form>
  );
};
