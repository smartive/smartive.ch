import React, { useState } from 'react';
import { Button } from '../../atoms';
import { InlineInput } from './inline-input';

import './contact-form.scss';

const DEFAULT_ERROR_MESSAGE = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.';
const REQUIRED_MESSAGE = 'Bitte mindestens Name, E-Mail Adresse und Anliegen angeben.';
const THANKS_MESSAGE = 'Danke für Ihre Nachricht. Wir werden uns bei Ihnen melden.';
const FORM_URL = 'https://formspree.io/xnqgjbjz';

export const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const resetForm = () => {
    setSubject('');
    setAdditionalInfo('');
    setName('');
    setContact('');

    try {
      const inputs = document.getElementsByClassName('inline-input');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < inputs.length; i++) {
        inputs.item(i).innerHTML = '';
      }

      const placeholders = document.getElementsByClassName('inline-input-placeholder');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < inputs.length; i++) {
        placeholders.item(i).style.display = 'inline';
      }
    } catch (err) {
      // in case resetting fails for some reason, success message should stay on screen
    }
  };

  const submit = async event => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (!contact.trim() || !name.trim() || !subject.trim()) {
      setMessage({ type: 'error', text: REQUIRED_MESSAGE });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({ name, contact, subject, additionalInfo }),
      });

      if (!res.ok) {
        throw new Error();
      }

      setMessage({ type: 'success', text: THANKS_MESSAGE });
      resetForm();
    } catch (err) {
      setMessage({ type: 'error', text: DEFAULT_ERROR_MESSAGE });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <p>Verraten Sie uns, worüber Sie gern mit uns sprechen möchten.</p>
      <form onSubmit={submit}>
        <p>
          Ich heisse <InlineInput setValue={setName} placeholderText="mein Name" />. Gerne würde ich mich mit Euch über{' '}
          <InlineInput setValue={setSubject} placeholderText="mein Thema" /> austauschen. Dabei geht es mir vor allem um{' '}
          <InlineInput setValue={setAdditionalInfo} placeholderText="zusätzliche Infos" />. Am besten erreicht ihr mich unter{' '}
          <InlineInput setValue={setContact} placeholderText="meine E-Mail / Tel." />.
        </p>

        <Button text={loading ? 'Sende...' : 'Senden'} disabled={loading} onClick={submit} />
        <div className={`contact-form__message ${message ? `contact-form__message--${message.type}` : ''}`}>
          {message && message.text}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
