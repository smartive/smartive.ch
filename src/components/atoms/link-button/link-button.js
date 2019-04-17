import PropTypes from 'prop-types';
import React from 'react';

import './link-button.scss';
import { LinkWrapper } from '../link-wrapper';

const mod = (modifier) => ` link-button--${modifier}`;

export const LinkButton = ({ url, text, isPrimary, isWhite, hasBorder }) => {
  const className = `link-button${isPrimary ? mod('primary') : ''}${isWhite ? mod('white') : ''}${
    hasBorder ? ' has-border' : ''
  }`;
  return (
    <LinkWrapper to={url} className={className}>
      {text}
    </LinkWrapper>
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
