import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import { LinkButton } from '../../atoms';
import './project.scss';

export const Project = ({ title, category, image, children, caseUrl }) => (
  <div className="project col-xs-12 col-md-6">
    {image.fluid ? (
      <Img className="project__img" fluid={image.fluid} alt={image.alt} />
    ) : (
      <img className="project__img" src={image.src} alt={image.alt} />
    )}
    <div className="project__text">
      <h2>
        <small>{category}</small> {title}
      </h2>

      {children}

      {caseUrl ? <LinkButton url={caseUrl} text="Case anschauen" isPrimary /> : null}
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
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
  children: PropTypes.element.isRequired,
  caseUrl: PropTypes.string,
};

Project.defaultProps = {
  caseUrl: null,
};

export default Project;
