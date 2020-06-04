import React, { useState } from 'react';
import { Button } from '../../atoms';
import { InlineInput } from './inline-input';

import './contact-form.scss';

const DEFAULT_ERROR_MESSAGE = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.';
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
  };

  const submit = async event => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (!contact.trim() || !name.trim() || !subject.trim()) {
      setMessage({ type: 'error', text: 'Bitte mindestens Name, E-Mail Adresse und Anliegen angeben.' });
      return;
    }

    setLoading(true);

    try {
      await fetch(FORM_URL, {
        method: 'POST',
        body: JSON.stringify({ name, contact, subject, additionalInfo }),
      });
      setMessage({ type: 'success', text: THANKS_MESSAGE });
      resetForm();
    } catch (error) {
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
