import { Heading3, Copy, Grid, LinkList } from '@smartive/guetzli';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import React, { CSSProperties } from 'react';
import { NextBisectCard } from '../../../components/bisect-card';
import { getNotionBusinessTravel } from '../../../data/sustainability/notion-business-travel';
import { Categories, getNotionCategories } from '../../../data/sustainability/notion-categories';
import { getNotionEmployees } from '../../../data/sustainability/notion-employees';
import { getNotionExpenses } from '../../../data/sustainability/notion-expenses';
import { Scopes, getNotionScopes } from '../../../data/sustainability/notion-scopes';
import { getNotionSustainabilityData } from '../../../data/sustainability/notion-sustainability-data';
import { LandingPage } from '../../../layouts/landing-page';
import {
  reduceByEnvironmentalImpact,
  numberFormat,
  ALL_YEARS,
  calculatedScopesFunction,
  getScope3,
  TIMES_OR_DIVIDE_BY_1000,
} from '../../../utils/sustainability';
import NextLink from 'next/link';
import { PageHeader } from '../../../compositions/page-header';

type Props = {
  links: { label: string; href: string }[];
  calculatedScopes: Scopes[];
  calculatedCategories: Categories[];
  maxCategorieEnvironmentalImpact: number;
  categoriesSortedByCategorieAndImpact: Categories[];
  year: number;
};

const Scope3: NextPage<Props> = ({
  links,
  calculatedScopes,
  calculatedCategories,
  maxCategorieEnvironmentalImpact,
  categoriesSortedByCategorieAndImpact,
  year,
}) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle={`${getScope3(calculatedScopes)[0].title} im Jahr ${year}`}
        pageTitle={`Nachhaltigkeit: ${getScope3(calculatedScopes)[0].title} im Jahr ${year}`}
      >
        <Copy>{getScope3(calculatedScopes)[0].description}</Copy>
        <Copy> Scope 3 besteht aus 15 Unterkategorien.</Copy>
        <LinkList linkWrapper={NextLink} links={links} />
      </PageHeader>
      <Heading3>Vergleich der Kategorien aus Scope 3</Heading3>
      <div className="max-w-[800px]">
        <table
          className="charts-css bar show-heading show-labels show-primary-axis show-data-axes show-4-secondary-axes data-spacing-6 max-w-[800px]"
          style={
            {
              // has to be defined directly in order to overrule Charts.css
              height: '400px',
              '--color': 'rgba(125, 221, 209)',
            } as CSSProperties
          }
        >
          <tbody>
            {calculatedCategories
              .filter(({ environmentalImpact }) => environmentalImpact !== 0)
              .map(({ environmentalImpact, ghgCategory, icon, title }) => {
                const totalEmissionenCalculated =
                  (environmentalImpact <= 2 ? environmentalImpact : Math.round(environmentalImpact)) /
                  maxCategorieEnvironmentalImpact;
                const totalEmissionNum =
                  environmentalImpact / TIMES_OR_DIVIDE_BY_1000 <= 1
                    ? (environmentalImpact / TIMES_OR_DIVIDE_BY_1000).toFixed(1)
                    : numberFormat.format(Math.round(environmentalImpact / TIMES_OR_DIVIDE_BY_1000));

                return (
                  <tr className="max-w-64 b-24" key={ghgCategory}>
                    <th
                      className="inline-block text-lg"
                      scope="column"
                      style={
                        {
                          display: 'block',
                        } as CSSProperties
                      }
                    >
                      {icon}
                    </th>
                    <td
                      style={
                        {
                          '--size': totalEmissionenCalculated,
                          'transform-origin': 'left',
                          animation: 'revealing-rows 8s linear infinite',
                        } as CSSProperties
                      }
                    >
                      {environmentalImpact / TIMES_OR_DIVIDE_BY_1000 >= 5 ? (
                        <span className="data">
                          {totalEmissionNum} t CO<sub>2</sub>
                        </span>
                      ) : (
                        ''
                      )}

                      <span className="tooltip">
                        ca. {totalEmissionNum} t CO<sub>2</sub> <br></br> {ghgCategory}:<br></br> {title}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>

      <Grid cols={3}>
        {categoriesSortedByCategorieAndImpact.map(({ ghgCategory, title, environmentalImpact, description, icon }) => {
          const labelHeader = environmentalImpact === 0 ? 'Keine Emissionen' : 'totale Emissionen';
          const header =
            environmentalImpact === 0 ? (
              '––'
            ) : (
              <>
                {environmentalImpact / TIMES_OR_DIVIDE_BY_1000 <= 1
                  ? (environmentalImpact / TIMES_OR_DIVIDE_BY_1000).toFixed(1)
                  : Math.round(environmentalImpact / TIMES_OR_DIVIDE_BY_1000)}
                {' t CO'}
                <sub>2</sub>
              </>
            );

          return (
            <NextBisectCard
              key={ghgCategory}
              environmentalImpact={environmentalImpact !== 0}
              interactive={false}
              background={'mint'}
              title={`${icon} ${title}`}
              labelTitle={ghgCategory}
              labelHeader={labelHeader}
              header={header}
              content={description}
            ></NextBisectCard>
          );
        })}
      </Grid>
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
  const categories = await getNotionCategories();
  const scopes = await getNotionScopes();
  const businessTravel = await getNotionBusinessTravel(year);
  const expenses = await getNotionExpenses(year);

  const links = ALL_YEARS.filter((currentYear) => year !== currentYear).map((year) => ({
    label: `Wechseln zu ${year}`,
    href: `/nachhaltigkeit/${year}/scope-3`,
  }));

  links.push({ label: 'Zurück zur Übersicht', href: `/nachhaltigkeit/${year}` });

  const calculatedCategories = categories.map((category) => ({
    ...category,
    environmentalImpact:
      category.environmentalImpact +
      businessTravel.filter((travel) => travel.category === category.ghgCategory).reduce(reduceByEnvironmentalImpact, 0) +
      sustainabilityData.filter((data) => data.category === category.ghgCategory).reduce(reduceByEnvironmentalImpact, 0) +
      employees.filter((employee) => employee.category === category.ghgCategory).reduce(reduceByEnvironmentalImpact, 0) +
      expenses.filter((expense) => expense.category === category.ghgCategory).reduce(reduceByEnvironmentalImpact, 0),
  }));
  const categoriesSortedByCategorieAndImpact = calculatedCategories.sort(
    (firstElement, secondElement) =>
      secondElement.environmentalImpact - firstElement.environmentalImpact ||
      firstElement.ghgCategoryNumber - secondElement.ghgCategoryNumber
  );
  const calculatedScopes = calculatedScopesFunction(scopes, businessTravel, sustainabilityData, employees, expenses);
  const maxCategorieEnvironmentalImpact = Math.max(
    ...calculatedCategories.map(({ environmentalImpact }) => environmentalImpact)
  );

  return {
    props: {
      year,
      links,
      calculatedScopes,
      calculatedCategories,
      maxCategorieEnvironmentalImpact,
      categoriesSortedByCategorieAndImpact,
    },
  };
};

export default Scope3;
