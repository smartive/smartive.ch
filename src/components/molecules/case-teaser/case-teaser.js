import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Button } from '../../atoms';

import './case-teaser.scss';

export const CaseTeaser = ({ url, image, title, subline, children, allProjects, modifiers }) =>
  (<div className={modifiers.map(modifier => `case-teaser--${modifier}`).join(' ')}>
    <div className="case-teaser">
      <div className="container container--case">
        <div className="row">
          <div className="case-teaser__col--img col-xs-12 col-lg-7 last-lg">
            <div className="img-container">
              <figure>
                <Link to={url}>
                  <img className="case-image" src={image.src} alt={image.alt} />
                </Link>
              </figure>
            </div>
          </div>
          <div className="case-teaser__col--body col-xs-12 col-lg-5 first-lg">
            <div className="case-teaser__text">
              <h2>
                <small>
                  {subline}
                </small>
                {title}
              </h2>

              <div className="case-teaser__body">
                {children}
              </div>
              <div className="case-teaser__actions">
                <Button url={url} text="Case anschauen" isPrimary />
                {allProjects ? <Button url="/projekte" text="alle unsere Arbeiten" /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

CaseTeaser.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  allProjects: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

CaseTeaser.defaultProps = {
  allProjects: false,
  modifiers: [],
};

export default CaseTeaser;
