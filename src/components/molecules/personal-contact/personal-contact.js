/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import './personal-contact.scss';
import { Button } from '../../atoms/button';

export const PersonalContact = ({ name, text, img, phone, mail }) => (
  <div className="container">
    <div className="personal-contact-block">
      <div className="row">
        <div className="col-xs-12 col-md-5">
          <Img className="personal-contact__img" alt={`Portrait von ${name}`} fluid={img} />
        </div>
        <div className="col-xs-12 col-md-7">
          <h2>
            <small>{name}</small>
            {text}
          </h2>
          <Button url={`mailto:${mail}`} text={mail} isWhite />
          <Button url={`tel:${phone}`} text={phone} isWhite />
        </div>
      </div>
    </div>
  </div>
);

PersonalContact.propTypes = {
  name: PropTypes.string.isRequired,
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
  nameSuffix: null,
  url: null,
};

export default PersonalContact;
