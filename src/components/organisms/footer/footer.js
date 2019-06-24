import React from 'react';

import { Logo } from '../../atoms';

import './footer.scss';

import githubImgSrc from './github.svg';
import twitterImgSrc from './twitter.svg';
import facebookImgSrc from './facebook.svg';
import smsImgSrc from './sms.svg';
import { NewsletterSignup } from '../../molecules';

const items = [
  { href: 'https://github.com/smartive', src: githubImgSrc, alt: 'smartive auf GitHub' },
  {
    href: 'https://twitter.com/smartive_ch',
    src: twitterImgSrc,
    alt: 'smartive auf Twitter',
  },
  {
    href: 'https://facebook.com/smartive.ch',
    src: facebookImgSrc,
    alt: 'smartive auf Facebook',
  },
];

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__row--logo row">
        <div className="col-xs-12">
          <Logo />
        </div>
      </div>
      <div className="footer__row--contact row center-xs start-md middle-lg">
        <div className="address col-xs-12 col-md-3 col-lg-2">
          <p>
            Pfingstweidstrasse 60
            <br />
            CH-8005 Zürich
          </p>
        </div>
        <div className="contact col-xs-12 col-md-3">
          <p>
            <a href="tel:0041445525599" className="link">
              +41 44 552 55 99
            </a>
            <br />
            <a href="mailto:hello@smartive.ch" className="link">
              hello@smartive.ch
            </a>
          </p>
        </div>
        <div className="footer__newsletter col-xs-12 col-md-4">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-offset-0 col-md-12">
              <NewsletterSignup />
            </div>
          </div>
        </div>
        <div className="footer__sms col-xs-4 col-md-2 col-lg-offset-1 col-lg-2">
          <div className="row">
            <div className="col-xs-12">
              <a className="footer__sms-logo" href="https://www.swissmadesoftware.org/companies/smartive-ag/home.html">
                <img src={smsImgSrc} alt="swiss made software" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <nav className="social">
                <ul className="row">
                  {items.map((item) => (
                    <li key={item.href} className="col-xs">
                      <a className="footer__logo" href={item.href}>
                        <img src={item.src} alt={item.alt} />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
