import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

export const Input = ({ name, type, value, placeholder, disabled, onChange }) => (
  <input
    className="input"
    value={value}
    type={type}
    name={name}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
  />
);

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  disabled: false,
  onChange: () => null,
};
