import { Copy, Explainer, Grid, Heading3, LinkList, TextBlock } from '@smartive/guetzli';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { NextBisectCard } from '../../../components/bisect-card';
import { PageHeader } from '../../../compositions/page-header';
import { getNotionBusinessTravel } from '../../../data/sustainability/notion-business-travel';
import { Categories, getNotionCategories } from '../../../data/sustainability/notion-categories';
import { getNotionEmployees } from '../../../data/sustainability/notion-employees';
import { getNotionExpenses } from '../../../data/sustainability/notion-expenses';
import { getNotionScopes, Scopes } from '../../../data/sustainability/notion-scopes';
import { getNotionSustainabilityData } from '../../../data/sustainability/notion-sustainability-data';
import { LandingPage } from '../../../layouts/landing-page';
import { Section } from '../../../layouts/section';
import { brandColor } from '../../../utils/color';
import {
  ALL_YEARS,
  AVERAGE_SWISSPERSON_EMISSION,
  calculatedScopesFunction,
  getScope3,
  getScope3EnvironmentalImpact,
  reduceByEnvironmentalImpact,
  ScopeNames,
  sortScope,
  TIMES_OR_DIVIDE_BY_1000,
} from '../../../utils/sustainability';
import '../../_app';

type Props = {
  year: number;
  calculatedScopes: Scopes[];
  scope3: Scopes[];
  links: { label: string; href: string }[];
  category1: Categories;
  totalEmission: number;
  calculatedCategories: Categories[];
};

const individualComparisonOfTheYear = {
  2019: [
    {
      number: 100,
      unit: '% 🚍',
      title: 'ÖV-Fritz*innen',
      content: 'Alle Mitarbeiter*innen pendeln mit ÖV oder Fahrrad.',
    },
    {
      number: 2,
      unit: 'x 🛋',
      title: '2019 = 2 × 2020 (Möbel)',
      content:
        'Doppelt so viele Emissionen für Server, Möbel, Lebensmittel als im Jahr 2020. Warum? Das neue Office richtete sich leider nicht von selbst ein.',
    },
  ],
  2020: [
    {
      number: 0.00001,
      unit: 'x 🛫',
      title: 'Flüge ',
      content: 'Kein Kundenbesuch und keine Weiterbildung wurde mit dem Flugzeug besucht.',
    },
    {
      number: 2,
      unit: 'x 🔥',
      title: 'Doppelte Heizkosten',
      content:
        'Seit Ende 2019 sind wir in einem doppelt so grossen Büro – mit doppelt so viel Fläche, die geheizt werden muss. Wir sind auch mehr Mitarbeiter*innen und teilen unser Büro.',
    },
  ],
};

const YearOverview: NextPage<Props> = ({ year: currentYear, calculatedScopes, links, totalEmission, scope3, category1 }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle={`Emissionen im Jahr _${currentYear}_.`}
        pageTitle={`Nachhaltigkeit: Emissionen im Jahr _${currentYear}_.`}
        description={`Genaue Infos zu unseren Emissionen im ${currentYear}`}
      >
        <Copy>Du möchtest Genaueres wissen? Wo wie was? Das findest du hier.</Copy>
        <LinkList linkWrapper={NextLink} links={links} />
      </PageHeader>
      <Section>
        <Heading3>Greenhouse Gas Protocol: Scopes </Heading3>
        <Grid cols={3}>
          {sortScope(calculatedScopes)
            .filter(({ ghgCategory }) => ghgCategory === ScopeNames.Scope1 || ghgCategory === ScopeNames.Scope2)
            .map(({ title, description, environmentalImpact, ghgCategory }, idx) => (
              <NextBisectCard
                key={ghgCategory}
                background={brandColor[(idx + 2) % brandColor.length]}
                interactive={false}
                title={title}
                content={description}
                labelTitle={ghgCategory}
                labelHeader="totale Emissionen"
                header={
                  <>
                    {Math.round(environmentalImpact / TIMES_OR_DIVIDE_BY_1000)} t CO<sub>2</sub>
                  </>
                }
              ></NextBisectCard>
            ))}
          <NextBisectCard
            key={scope3[0].ghgCategory}
            background={brandColor[(ALL_YEARS.length + 2) % 3]}
            interactive={true}
            title={scope3[0].title}
            content={scope3[0].description}
            link={{ label: 'Details anschauen', href: `/nachhaltigkeit/${currentYear}/scope-3` }}
            labelTitle={scope3[0].ghgCategory}
            labelHeader="totale Emissionen"
            header={
              <>
                {Math.round(scope3[0].environmentalImpact / TIMES_OR_DIVIDE_BY_1000)} t CO<sub>2</sub>
              </>
            }
          ></NextBisectCard>
        </Grid>
      </Section>
      <Section>
        <Grid cols={2}>
          <TextBlock title="Schweizer*innen" number={Math.round(totalEmission / AVERAGE_SWISSPERSON_EMISSION)} unit="x 👨‍🌾👩‍🌾">
            {`Unser Emissionsausstoss im Jahr ${currentYear} entspricht dem Emissionsausstoss von ${Math.round(
              totalEmission / AVERAGE_SWISSPERSON_EMISSION
            )} `}
            <Explainer title="inklusive netto import-, export-Bilanz. 1Schweizer*in = 14 t CO eq. pro Jahr">
              Schweizer*innen
            </Explainer>
            .
          </TextBlock>
          <TextBlock
            title={individualComparisonOfTheYear[currentYear][1].title}
            number={individualComparisonOfTheYear[currentYear][1].number}
            unit={individualComparisonOfTheYear[currentYear][1].unit}
          >
            {individualComparisonOfTheYear[currentYear][1].content}
          </TextBlock>
          <TextBlock
            title={individualComparisonOfTheYear[currentYear][0].title}
            unit={individualComparisonOfTheYear[currentYear][0].unit}
            number={individualComparisonOfTheYear[currentYear][0].number}
          >
            {individualComparisonOfTheYear[currentYear][0].content}
          </TextBlock>
          <TextBlock
            title={category1.title}
            number={Math.round((category1.environmentalImpact / TIMES_OR_DIVIDE_BY_1000 / totalEmission) * 100)}
            unit={`% ${category1.icon}`}
          >
            {Math.round((category1.environmentalImpact / TIMES_OR_DIVIDE_BY_1000 / totalEmission) * 100)} Prozent der
            Emissionen wird für gekaufte Ware und Dienstleistungen ausgestossen.
          </TextBlock>
        </Grid>
      </Section>
    </LandingPage>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ALL_YEARS.map((y) => ({ params: { year: y.toString() } })),

    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const year = parseInt(context.params.year.toString());
  const employees = await getNotionEmployees(year);
  const sustainabilityData = await getNotionSustainabilityData(year);
  const scopes = await getNotionScopes();
  const businessTravel = await getNotionBusinessTravel(year);
  const expenses = await getNotionExpenses(year);
  const categories = await getNotionCategories();

  const calculatedScopes = calculatedScopesFunction(scopes, businessTravel, sustainabilityData, employees, expenses).sort(
    (firstElement, secondElement) => firstElement.environmentalImpact - secondElement.environmentalImpact
  );

  const calculatedCategories = categories.map((category) => ({
    ...category,
    environmentalImpact:
      category.environmentalImpact +
      sustainabilityData.filter((data) => data.category === category.ghgCategory).reduce(reduceByEnvironmentalImpact, 0) +
      expenses.filter((expense) => expense.category === category.ghgCategory).reduce(reduceByEnvironmentalImpact, 0),
  }));
  const category1 = calculatedCategories.filter(({ ghgCategory }) => ghgCategory === 'Purchased Goods and Services')[0];

  const scope1EnvironmentalImpact = calculatedScopes
    .filter(({ ghgCategory }) => ghgCategory === ScopeNames.Scope1)
    .reduce(reduceByEnvironmentalImpact, 0);

  const scope2EnvironmentalImpact = calculatedScopes
    .filter(({ ghgCategory }) => ghgCategory === ScopeNames.Scope2)
    .reduce(reduceByEnvironmentalImpact, 0);

  const scope3 = getScope3(calculatedScopes);

  const links = ALL_YEARS.filter((currentYear) => year !== currentYear).map((currentYear) => ({
    label: `Wechseln zu ${currentYear}`,
    href: `/nachhaltigkeit/${currentYear}`,
  }));

  links.push({ label: 'Zurück zur Übersicht', href: '/nachhaltigkeit' });

  return {
    props: {
      year,
      links,
      scope3,
      category1,
      calculatedScopes,
      calculatedCategories,
      totalEmission:
        (scope1EnvironmentalImpact + scope2EnvironmentalImpact + getScope3EnvironmentalImpact(calculatedScopes)) /
        TIMES_OR_DIVIDE_BY_1000,
    },
  };
};
export default YearOverview;
