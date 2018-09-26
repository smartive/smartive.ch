import { Link } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';

const NotFoundPage = () => (
  <DefaultLayout siteTitle="404" siteDescription="Seite konnte nicht gefunden werden.">
    <div className="error-page error-page--404">
      <div className="error__text">
        <h1>
          Seite <span className="emphasis">nicht gefunden</span>.
        </h1>
        <p>
          Wahrscheinlich haben Sie eine alte URL erwischt, die es inzwischen nicht mehr gibt. Den gesuchten Inhalt finden Sie
          vielleicht über die <Link to="/">Startseite</Link> oder in unserem <a href="https://blog.smartive.ch">Blog</a>.
        </p>
        <p>
          Sie können auch direkt mit uns <Link to="/kontakt">Kontakt aufnehmen</Link> und wir werden Ihnen gerne persönlich
          weiter helfen.
        </p>
      </div>
    </div>
  </DefaultLayout>
);

export default NotFoundPage;
