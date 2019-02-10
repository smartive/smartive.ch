import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './link-button.scss';

const mod = (modifier) => ` link-button--${modifier}`;

export const LinkButton = ({ url, text, isPrimary, isWhite, hasBorder }) => {
  const internal = /^\/(?!\/)/.test(url);
  const className = `link-button${isPrimary ? mod('primary') : ''}${isWhite ? mod('white') : ''}${
    hasBorder ? ' has-border' : ''
  }`;
  if (internal) {
    return (
      <Link to={url} className={className}>
        {text}
      </Link>
    );
  }
  return (
    <a href={url} className={className}>
      {text}
    </a>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isWhite: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

LinkButton.defaultProps = {
  isPrimary: false,
  isWhite: false,
  hasBorder: false,
};
