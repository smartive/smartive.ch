import React from 'react';

import './newsletter-block.scss';
import { NewsletterSignup } from '../newsletter-signup';

export const NewsletterBlock = () => (
  <div className="container">
    <div className="newsletter-block">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1    col-sm-8 col-sm-offset-2    col-lg-6 col-lg-offset-3">
          <h4>Neugierig, was bei smartive läuft?</h4>
          <p>
            Unser Newsletter erscheint in lockeren Abständen. Er enthält spannende Infos zu digitalen Trends und Insights zu
            unserem Team.
          </p>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  </div>
);

export default NewsletterBlock;
