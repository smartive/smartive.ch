import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import 'flexboxgrid/dist/flexboxgrid.min.css';

import { Footer, Header } from '../components/organisms';

import '../scss/main.scss';

class Index extends React.Component {
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

  renderJobs() {
    return (
      <div>
        <Helmet>
          <html lang="de" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <meta
            name="description"
            content="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden."
          />
          <title>smartive AG - Zukunftsweisende Webapplikationen für anspruchsvolle Unternehmen</title>
        </Helmet>
        {this.props.children()}
        <Footer />
      </div>
    );
  }

  render() {
    if (this.props.location.pathname === '/jobs') {
      return this.renderJobs();
    }
    return (
      <div>
        <Helmet>
          <html lang="de" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <meta
            name="description"
            content="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden."
          />
          <title>smartive AG - Zukunftsweisende Webapplikationen für anspruchsvolle Unternehmen</title>
        </Helmet>

        <Header />

        <main>
          {this.props.children()}
        </main>

        <Footer />
      </div>
    );
  }
}
Index.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Index;

export const getSiteHeader = (siteTitle, description) =>
  (<Helmet>
    <title>{`${siteTitle} | smartive AG`}</title>
    <meta name="description" content={description} />
  </Helmet>);
