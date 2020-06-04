import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import './contact-form.scss';

export const InlineInput = ({ setValue, placeholderText }) => {
  const inputRef = useRef(null);
  const placeholderRef = useRef(null);

  return (
    <>
      <span
        className="inline-input"
        role="textbox"
        ref={inputRef}
        aria-label={placeholderText}
        contentEditable
        onInput={({ target }) => {
          setValue(target.innerHTML || '');

          if (placeholderRef.current) {
            placeholderRef.current.style.display = target.innerHTML ? 'none' : 'inline';
          }
        }}
      />
      <button
        ref={placeholderRef}
        className="inline-input-placeholder"
        type="button"
        onClick={() => {
          if (placeholderRef.current && inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        {placeholderText}
      </button>
    </>
  );
};

InlineInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default InlineInput;
