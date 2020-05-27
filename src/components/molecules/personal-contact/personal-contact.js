/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import './personal-contact.scss';
import { LinkButton } from '../../atoms';

export const PersonalContact = ({ text, titlePrefix, img, contact: { name, phone, mail, appointmentLink } }) => (
  <div className="container">
    <div className="personal-contact-block">
      <div className="row">
        <div className="col-xs-12 col-md-5">
          <Img className="personal-contact__img" alt={`Portrait von ${name}`} fluid={img} />
        </div>
        <div className="col-xs-12 col-md-7">
          <h2>
            <small>{titlePrefix ? `${titlePrefix}: ${name}` : name}</small>
            {text}
          </h2>
          <LinkButton url={appointmentLink} text="Termin vereinbaren" isPrimary />
          <LinkButton url={`mailto:${mail}`} text={mail} isWhite />
          <LinkButton url={`tel:${phone}`} text={phone} isWhite />
        </div>
      </div>
    </div>
  </div>
);

PersonalContact.propTypes = {
  text: PropTypes.string,
  titlePrefix: PropTypes.string,
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    mail: PropTypes.string,
    appointmentLink: PropTypes.string,
  }).isRequired,
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
  titlePrefix: null,
  text:
    'Haben Sie Fragen oder ein eigenes Vorhaben? Wir ❤️ digitale Produkte und beraten Sie gerne. Unverbindlich und kostenlos, Kaffee inklusive.',
};

export default PersonalContact;
