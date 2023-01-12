import querystring from 'querystring';
import { BusinessTravels } from '../data/sustainability/notion-business-travel';
import { AllEmployees } from '../data/sustainability/notion-employees';
import { Expenses } from '../data/sustainability/notion-expenses';
import { Scopes } from '../data/sustainability/notion-scopes';
import { SustainabilityData } from '../data/sustainability/notion-sustainability-data';

export const WEEKS_PER_YEAR = 47;
export const AVERAGE_SWISSPERSON_EMISSION = 14;

export const TIMES_OR_DIVIDE_BY_1000 = 1000;
export const START_YEAR = 2019;
export const ALL_YEARS = [2019, 2020, 2021];

export const numberFormat = new Intl.NumberFormat('de-CH', { maximumSignificantDigits: 3 });

export const FTE = { 2019: 12.3, 2020: 14.506, 2021: 15.0 };

export enum ScopeNames {
  'Scope1' = 'Scope 1',
  'Scope2' = 'Scope 2',
  'Scope3' = 'Scope 3',
}
export const getScope3 = (calculatedScopes: Scopes[]) =>
  calculatedScopes.filter(({ ghgCategory }) => ghgCategory === ScopeNames.Scope3);
export const getScope3EnvironmentalImpact = (calculatedScopes: Scopes[]) =>
  getScope3(calculatedScopes).reduce(reduceByEnvironmentalImpact, 0);

export const calculatedScopesFunction = (
  scopes: Scopes[],
  businessTravel: BusinessTravels[],
  sustainabilityData: SustainabilityData[],
  employees: AllEmployees[],
  expenses: Expenses[]
) =>
  scopes.map((scope) => ({
    ...scope,
    environmentalImpact:
      scope.environmentalImpact +
      businessTravel.filter(filterByScope(scope.ghgCategory)).reduce(reduceByEnvironmentalImpact, 0) +
      sustainabilityData.filter(filterByScope(scope.ghgCategory)).reduce(reduceByEnvironmentalImpact, 0) +
      employees.filter(filterByScope(scope.ghgCategory)).reduce(reduceByEnvironmentalImpact, 0) +
      expenses.filter(filterByScope(scope.ghgCategory)).reduce(reduceByEnvironmentalImpact, 0),
  }));

export const sortScope = (scopes: Scopes[]) =>
  scopes.sort((firstElement, secondElement) => firstElement.ghgCategory.localeCompare(secondElement.ghgCategory));

export const getDistanceFromGoogleMaps = async (destination: string) => {
  if (!destination) return 0;
  const response = await fetch(
    `${process.env.GOOGLEMAPS_URL}?${querystring.encode({
      origins: 'Pfingstweidstrasse 60, 8004 Zurich',
      destinations: destination,
      key: process.env.GOOGLEMAPS_URL_KEY,
      mode: 'transit',
    })}`
  );
  const jsonDistance = (await response.json()) as GoogleDistance;
  return jsonDistance.rows[0].elements[0].distance.value / TIMES_OR_DIVIDE_BY_1000;
};

export interface GoogleDistance {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: {
    elements: {
      distance: {
        text: string;
        value: number;
      };
      duration: {
        text: string;
        value: number;
      };
      status: string;
    }[];
  }[];
  status: string;
}

export const reduceByEnvironmentalImpact = (prev: number, curr: { environmentalImpact: number }) =>
  prev + curr.environmentalImpact || 0;

export const filterByScope =
  (ghgCategory: string) =>
  ({ scope }) =>
    scope === ghgCategory;
