import React from 'react';

import { Logo } from '../components/atoms';

import '../scss/jobs.scss';

const Jobs = () =>
  (<div className="quick-jobs-page">
    <div className="job" itemScope itemType="http://schema.org/JobPosting">
      <header>
        <div className="content">
          <Logo isNegativ />

          <h2>Finde den Job, den du liebst!</h2>

          <h1 itemProp="title">Software Engineer</h1>
          <p className="location">
            Location:{' '}
            <span itemProp="jobLocation" itemScope itemType="http://schema.org/Place">
              <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="addressLocality">Zürich, Schweiz</span>
              </span>
            </span>
          </p>
        </div>
      </header>

      <article className="about">
        <p>
          Wir sind{' '}
          <span itemProp="hiringOrganization" itemScope itemType="http://schema.org/Organization">
            <span itemProp="name">smartive</span>
          </span>{' '}
          &mdash; eine dynamische, innovative Schweizer Webentwicklungsagentur und wir suchen eine oder einen{' '}
          <strong>Software Engineer</strong> mit starkem Interesse für Web-Technologien.
        </p>
      </article>

      <article className="information">
        <h3>Deine Aufgaben</h3>
        <ul itemProp="responsibilities">
          <li>In einem agilen Umfeld begleitest du Projekte von der Idee bis zur Umsetzung, vorzugsweise auf einem Node oder Symfony Stack.</li>
        </ul>

        <h3>Dein Profil</h3>
        <ul itemProp="skills">
          <li>Du bist im Einsatz moderner Web-Technologien versiert und Code Qualität ist für dich wichtig.</li>
          <li>Du teilst dein Wissen gerne mit anderen in einem aktiven, kollegialen Austausch.</li>
          <li>Du bist daran interessiert, unsere eigenen Prozesse weiter zu verbessern.</li>
        </ul>

        <h3>Was wir bieten</h3>
        <ul itemProp="benefits">
          <li>Mitsprache auf allen Ebenen &mdash; deine Ideen und Vorstellungen zu unserer Firma sind uns wichtig</li>
          <li>Flexible Arbeitszeiten</li>
          <li>Die Möglichkeit, von zuhause aus zu arbeiten</li>
          <li>Team-Anlässe über das ganze Jahr verteilt, von Entwickler-Konferenzen bis zu Firmenausflügen</li>
        </ul>
      </article>

      <article className="about">
        <p>
          Falls wir dein Interesse geweckt haben, freuen wir uns unter <a href="mailto:hello@smartive.ch">hello@smartive.ch</a> oder{' '}
          <a href="https://twitter.com/smartive_ch">@smartive_ch</a> von dir zu hören.
        </p>
      </article>
    </div>
  </div>);

export default Jobs;
