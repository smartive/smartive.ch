import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import { LinkButton } from '../../atoms/link-button';
import { LinkWrapper } from '../../atoms/link-wrapper';
import './case-teaser.scss';

export const CaseTeaser = ({ url, image, title, subline, children, allProjects, modifiers, linkText }) => (
  <div className={modifiers.map((modifier) => `case-teaser--${modifier}`).join(' ')}>
    <div className="case-teaser">
      <div className="container container--case">
        <div className="row">
          <div className="case-teaser__col--img col-xs-12 col-lg-6 last-lg">
            <div className="img-container">
              <figure>
                <LinkWrapper to={url}>
                  {image.fluid ? (
                    <Img className="case-image" fluid={image.fluid} alt={image.alt} />
                  ) : (
                    <img className="case-image" src={image.src} alt={image.alt} />
                  )}
                </LinkWrapper>
              </figure>
            </div>
          </div>
          <div className="case-teaser__col--body col-xs-12 col-lg-6 first-lg">
            <div className="case-teaser__text">
              <h2>
                <small>{subline}</small>
                {title}
              </h2>

              <div className="case-teaser__body">{children}</div>
              <div className="case-teaser__actions">
                <LinkButton url={url} text={linkText} isPrimary />
                {allProjects ? <LinkButton url="/projekte" text="alle unsere Arbeiten" /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CaseTeaser.propTypes = {
  url: PropTypes.string.isRequired,
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
  subline: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  allProjects: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  linkText: PropTypes.string,
};

CaseTeaser.defaultProps = {
  allProjects: false,
  modifiers: [],
  linkText: 'Case anschauen',
};

export default CaseTeaser;
