'use server';

import client from '@mailchimp/mailchimp_marketing';

type MailchimpError = {
  status: number;
  response: {
    body: {
      title: string;
    };
  };
};

const isMailchimpError = (error: unknown): error is MailchimpError =>
  typeof error === 'object' && error !== null && 'status' in error && 'response' in error;

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

type State = { message?: string; type?: 'success' | 'error' | 'info' };

export const mailchimpSignup = async (_: State, formData: FormData): Promise<Required<State>> => {
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return { message: 'Bitte gib eine gültige E-Mail Adresse ein.', type: 'error' };
  }

  if (!process.env.MAILCHIMP_LIST) {
    throw new Error('Environment variable MAILCHIMP_LIST not set.');
  }

  try {
    await client.lists.addListMember(process.env.MAILCHIMP_LIST, {
      email_address: email,
      status: 'pending',
    });

    return {
      message:
        'Danke! Du solltest soeben eine E-Mail von uns erhalten haben, in welcher du deine Anmeldung definitiv bestätigen kannst. Yay!',
      type: 'success',
    };
  } catch (error) {
    if (isMailchimpError(error) && error.status === 400 && error.response.body.title === 'Member Exists') {
      return {
        message: 'Nice! Du gehörst bereits zu unseren treuen Abonnenten und bekommst den Newsletter bereits.',
        type: 'info',
      };
    }
    console.error(error);

    return { message: 'Uups, etwas ist schief gelaufen. Versuche es doch bitte später noch einmal.', type: 'error' };
  }
};
