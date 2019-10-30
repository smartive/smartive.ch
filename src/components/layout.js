import 'flexboxgrid/dist/flexboxgrid.min.css';

import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import '../scss/main.scss';
import { Footer, Header, KubeConfig } from './organisms';

export class DefaultLayout extends React.Component {
  componentDidMount() {
    if (!document.getElementById('webfontloader')) {
      const wf = document.createElement('script');
      const s = document.scripts[0];
      wf.src = '/webfont-1.6.26.js';
      wf.async = true;
      wf.id = 'webfontloader';
      wf.onload = () => {
        WebFont.load({
          google: {
            families: ['Roboto:300,400,700,900'],
          },
        });
      };

      s.parentNode.insertBefore(wf, s);
    }
  }

  render() {
    const {
      children,
      siteTitle,
      siteDescription = 'Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden.',
    } = this.props;

    return (
      <div>
        <Helmet>
          <html lang="de" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content="#1e324b" />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <meta name="description" content={siteDescription} />
          <title>
            {siteTitle
              ? `${siteTitle} | smartive AG`
              : 'smartive AG - Zukunftsweisende Webapplikationen für anspruchsvolle Unternehmen'}
          </title>
        </Helmet>

        <Header />

        <main>{children}</main>

        <Footer />
        <KubeConfig />
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

DefaultLayout.defaultProps = {
  siteTitle: undefined,
  siteDescription: undefined,
};

export default DefaultLayout;
