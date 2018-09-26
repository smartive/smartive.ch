import Img from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms';

import './service.scss';

export const Service = ({ title, catchline, lead, children, image, linkedCase }) => (
  <div className="service col-xs-12 col-lg-6">
    <div className="service__content">
      <div className="service__image">
        {image.fluid ? <Img fluid={image.fluid} alt={image.alt} /> : <img src={image.src} alt={image.alt} />}
      </div>
      <h2>
        <small className="service__catchline">{catchline}</small>
        {title}
      </h2>
      <p className="service__lead">{lead}</p>
      <div className="service__body">{children}</div>
      <div className="service__actions">
        {linkedCase ? <Button url={linkedCase.url} text={`Case ${linkedCase.title}`} isPrimary /> : null}
        <Button url="/projekte" text="alle Projekte" isWhite hasBorder />
      </div>
    </div>
  </div>
);

Service.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    fluid: PropTypes.shape({
      base64: PropTypes.string,
      aspectRatio: PropTypes.number,
      src: PropTypes.string,
      srcSet: PropTypes.string,
      srcSetType: PropTypes.string,
      sizes: PropTypes.string,
      originalImg: PropTypes.string,
    }),
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  catchline: PropTypes.string.isRequired,
  lead: PropTypes.string,
  children: PropTypes.element.isRequired,
  linkedCase: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
};

Service.defaultProps = {
  linkedCase: null,
  lead: '',
};

export default Service;
