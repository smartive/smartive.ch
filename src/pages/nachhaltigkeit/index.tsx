import { ButtonLink, ButtonVariants, Copy, Grid, Heading2, Heading3, PageSection, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React, { CSSProperties, useEffect, useState } from 'react';
import { NextBisectCard } from '../../components/bisect-card';
import { getNotionBusinessTravel } from '../../data/sustainability/notion-business-travel';
import { ComparisonTexts, getNotionComparisons } from '../../data/sustainability/notion-comparisons';
import { getNotionEmployees } from '../../data/sustainability/notion-employees';
import { getNotionExpenses } from '../../data/sustainability/notion-expenses';
import { getNotionSustainabilityData } from '../../data/sustainability/notion-sustainability-data';
import { LandingPage } from '../../layouts/landing-page';
import {
  ALL_YEARS,
  numberFormat,
  reduceByEnvironmentalImpact,
  TIMES_OR_DIVIDE_BY_1000,
  FTE,
} from '../../utils/sustainability';
import '../_app';
import Employees from '../../data/employees.json';
import { brandColor } from '../../utils/color';
import type JSConfetti from 'js-confetti';
import { PageHeader } from '../../compositions/page-header';

type Props = {
  comparisonTexts: ComparisonTexts;
  allYearsTotalEmission: { year: number; totalEmission: number }[];
  maxYear: number;
};

const COFFEE_KG_2020 = 0.66;

const Sustainabilty: NextPage<Props> = ({ comparisonTexts, allYearsTotalEmission, maxYear }) => {
  const [comparisonText, setComparisonText] = useState(comparisonTexts[0]);

  useEffect(() => {
    setComparisonText(comparisonTexts[Math.floor(Math.random() * comparisonTexts.length)]);
  }, []);

  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Nachhaltigkeit: Was unser Wirken in der Umwelt bewirkt"
        description="Wir möchten nicht nur unsere Kund*innen mit nachhaltigen digitalen Produkten beglücken, sondern auch unseren
          Ressourcenverbrauch so ausrichten, dass die Umwelt sich freut."
      >
        <Copy>
          Wir möchten nicht nur unsere Kund*innen mit nachhaltigen digitalen Produkten beglücken, sondern auch unseren
          Ressourcenverbrauch so ausrichten, dass die Umwelt sich freut. Deshalb haben wir einen Prozess angestossen, um die
          Auswirkungen unserer Tätigkeiten zu messen und zu verringern.
        </Copy>
      </PageHeader>
      <main>
        <Grid cols={3}>
          <TextBlock title="ÖV-Fritz*innen" number={100} unit="%">
            100% der {Object.values(Employees).length} Mitarbeiter*innen pendeln mit ÖV oder Fahrrad.
          </TextBlock>
          <TextBlock title="Kaffeekonsum" number={66} unit="kg">
            Im 2020 haben wir 66 kg Kaffee getrunken.
          </TextBlock>
          <TextBlock title="Kundenbesuche" number={2400} unit="km">
            Im 2020 haben wir ca. 2400 km für Kundenbesuche und Firmenausflüge zurückgelegt.
          </TextBlock>
        </Grid>
        <Heading2>Was wir tun</Heading2>
        <Copy>
          Um zu wissen, woran wir sind, berechnen wir in einem ersten Schritt unseren Treibhausgas Fussabdruck – also alle
          Treibhausgas-Emissionen, die durch unsere Tätigkeiten verursacht werden. Dies reicht von der Klimaanlage im Büro
          über geschäftliche Mobilität bis zum Kaffee, den wir trinken.
        </Copy>
        <div className="flex gap-x-8 gap-y-4 flex-wrap mb-16 lg:mb-24">
          <ButtonLink key={'ökobilanz'} href={'/nachhaltigkeit/theorie'} variant={ButtonVariants.Arrow}>
            {'Wie berechnen wir unseren Fussabdruck?'}
          </ButtonLink>
        </div>
        <PageSection>
          <Heading2>Sind wir auf dem richtigen Weg?</Heading2>
          <Heading3>Unser Ausstoss über die Jahre</Heading3>
          <div className="max-w-[800px]">
            <table
              className="charts-css bar show-heading show-labels show-primary-axis data-spacing-6 max-w-[800px]"
              style={
                {
                  // has to be defined directly in order to overrule Charts.css
                  height: '200px',
                  '--color-1': 'rgba(248, 147, 90)',
                  '--color-2': 'rgba(125, 221, 209)',
                  '--color-3': 'rgba(105, 134, 232)',
                } as CSSProperties
              }
            >
              <tbody>
                {allYearsTotalEmission.map(({ year, totalEmission }) => {
                  const totalEmissionenCalculated = totalEmission / maxYear;
                  const totalEmissionNum = Math.round(totalEmission / TIMES_OR_DIVIDE_BY_1000);
                  return (
                    <tr key={year}>
                      <td
                        style={
                          {
                            '--size': totalEmissionenCalculated,
                            'transform-origin': 'left',
                            animation: 'revealing-rows 8s linear infinite',
                          } as CSSProperties
                        }
                      >
                        <span className="data">
                          {totalEmissionNum} t CO<sub>2</sub> eq.
                        </span>
                      </td>
                      <th scope="row"> {year} </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>{' '}
          <br></br>
          <br></br>
          <Grid cols={3}>
            {allYearsTotalEmission.map(({ year, totalEmission }, idx) => (
              <NextBisectCard
                key={year}
                interactive={true}
                background={brandColor[idx % brandColor.length]}
                title={year.toString()}
                labelTitle={
                  <>
                    Pro Vollzeitmitarbeiter*in: {Math.round(totalEmission / FTE[year] / TIMES_OR_DIVIDE_BY_1000)} t CO
                    <sub>2</sub>
                  </>
                }
                header={
                  <>
                    {Math.round(totalEmission / TIMES_OR_DIVIDE_BY_1000)} t CO<sub>2</sub>
                  </>
                }
                link={{ label: 'Details anschauen', href: `/nachhaltigkeit/${year}` }}
                labelHeader="totale Emissionen"
                content={
                  <>
                    Unsere totalen CO
                    <sub>2</sub>
                    {` eq. Emissionen entsprechen ca. ${numberFormat.format(
                      Math.round(totalEmission / TIMES_OR_DIVIDE_BY_1000 / comparisonText.emissionPerUnit)
                    )} `}
                    <span
                      onMouseEnter={async () => {
                        const Confetti = await import('js-confetti');
                        const confetti = new Confetti.default() as JSConfetti;
                        confetti.addConfetti({
                          emojis: [comparisonText.emoji],
                          confettiNumber: 30,
                          confettiRadius: 2,
                        });
                      }}
                    >
                      {comparisonText.name}.
                    </span>
                  </>
                }
              ></NextBisectCard>
            ))}
            <NextBisectCard
              background={brandColor[allYearsTotalEmission.length % brandColor.length]}
              interactive={false}
              title={`Ziel für 2021`}
              header="Und jetzt?"
              labelTitle="Ziel: Netto Null?"
              content="Im 2021 möchten wir festlegen, welche Schritte wir in den kommenden Jahren unternehmen wollen."
            ></NextBisectCard>
          </Grid>
        </PageSection>
        <PageSection>
          <Heading2>Was verursacht bei uns Emissionen?</Heading2>
          <Grid cols={3}>
            <TextBlock title="Virtuelle Server" number={20} unit="% 🖥">
              Virtuelle Server für interne Projekte und verkaufte Software machen ca. 20% unseres CO<sub>2</sub> Ausstosses
              aus.
            </TextBlock>
            <TextBlock
              title="Kaffee Konsum"
              number={parseFloat(
                (
                  (COFFEE_KG_2020 /
                    (allYearsTotalEmission.find(({ year }) => year === 2020).totalEmission / TIMES_OR_DIVIDE_BY_1000)) *
                  100
                ).toFixed(1)
              )}
              unit="% ☕️"
            >
              Der Kaffeekonsum von 2020 entspricht {COFFEE_KG_2020.toFixed(1)} tonnen CO<sub>2</sub> äquivalent. Dies
              entspricht 1.3% unser totalen Emissionen.
            </TextBlock>
            <TextBlock title="Kundenbesuche" number={0.2} unit="% 🚄">
              Enstand im 2020 durch Kundenbesuche und Geschäftsreisen.
            </TextBlock>
          </Grid>
        </PageSection>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const expenses = await getNotionExpenses();
  const comparisonTexts = await getNotionComparisons();
  const businessTravel = await getNotionBusinessTravel();
  const sustainabilityData = await getNotionSustainabilityData();
  const employeesByYear = await Promise.all(
    ALL_YEARS.map(async (year) => ({ year, employees: await getNotionEmployees(year) }))
  );

  const allYearsTotalEmission = ALL_YEARS.map((year) => ({
    year,
    totalEmission:
      employeesByYear.filter((employee) => employee.year === year)[0].employees.reduce(reduceByEnvironmentalImpact, 0) +
      sustainabilityData.filter((dataSet) => dataSet.year === year).reduce(reduceByEnvironmentalImpact, 0) +
      businessTravel.filter((travel) => travel.year === year).reduce(reduceByEnvironmentalImpact, 0) +
      expenses.filter((expense) => expense.year === year).reduce(reduceByEnvironmentalImpact, 0),
  }));
  const maxYear = Math.max(...allYearsTotalEmission.map(({ totalEmission }) => totalEmission));

  return {
    props: {
      allYearsTotalEmission,
      comparisonTexts,
      maxYear,
    },
  };
};

export default Sustainabilty;
