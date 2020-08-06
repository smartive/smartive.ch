import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './stage.scss';

export const Stage = ({ title, image, children, modifiers }) => (
  <div className={modifiers.map((modifier) => `stage--${modifier}`).join(' ')}>
    <div className="stage">
      <div className="container container--stage">
        <div className="row">
          <div className="stage__col--img col-xs-12 col-lg-6">
            <div className="img-container">
              {image.fluid ? (
                <Img className="teaser-image" fluid={image.fluid} alt={image.alt} />
              ) : (
                <img className="teaser-image" src={image.src} alt={image.alt} />
              )}
            </div>
          </div>
          <div className="stage__col--body col-xs-12 col-lg-6">
            <div className="stage__text">
              {title}

              {children ? <div className="stage__description">{children}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Stage.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.element,
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Stage.defaultProps = {
  modifiers: [],
  title: null,
  children: null,
};

export default Stage;
