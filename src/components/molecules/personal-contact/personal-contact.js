/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import './personal-contact.scss';
import { LinkButton } from '../../atoms';

export const PersonalContact = ({ text, titlePrefix, name, img, phone, mail }) => (
  <div className="container">
    <div className="personal-contact-block">
      <div className="row">
        <div className="col-xs-12 col-md-5">
          <Img className="personal-contact__img" alt={`Portrait von ${name}`} fluid={img} />
        </div>
        <div className="col-xs-12 col-md-7">
          <h2>
            <small>
              {titlePrefix}: {name}
            </small>
            {text}
          </h2>
          <LinkButton url={`mailto:${mail}`} text={mail} isWhite />
          <LinkButton url={`tel:${phone}`} text={phone} isWhite />
        </div>
      </div>
    </div>
  </div>
);

PersonalContact.propTypes = {
  name: PropTypes.string.isRequired,
  titlePrefix: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  img: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetType: PropTypes.string,
    sizes: PropTypes.string,
    originalImg: PropTypes.string,
  }).isRequired,
};

PersonalContact.defaultProps = {
  titlePrefix: 'Unser Experte',
  text:
    'Haben Sie Fragen zu diesem Projekt oder ein eigenes spannendes Vorhaben? Ich freue mich über Ihre Kontaktaufnahme und berate Sie gerne persönlich.',
  nameSuffix: null,
  url: null,
};

export default PersonalContact;
