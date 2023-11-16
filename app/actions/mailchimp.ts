'use server';

import client from '@mailchimp/mailchimp_marketing';

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function mailchimpSignup(_prevState: any, formData: FormData) {
  const email = formData.get('email');

  if (!email) {
    return { message: 'Bitte gib eine gültige E-Mail Adresse ein.', type: 'error' };
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
  } catch (e) {
    if (e.status === 400 && e.response.body.title === 'Member Exists') {
      return {
        message: 'Nice! Du gehörst bereits zu unseren treuen Abonnenten und bekommst den Newsletter bereits.',
        type: 'info',
      };
    } else {
      console.error(e);

      return { message: 'Uups, etwas ist schief gelaufen. Versuche es doch bitte später noch einmal.', type: 'error' };
    }
  }
}
