import { EmployeeDocument, EmployeeFragment } from '@/graphql/generated';
import { queryDatoCMS } from './query-dato-cms';

export const getEmployeeFromDato = async (name: string): Promise<EmployeeFragment | null> => {
  const { employee } = await queryDatoCMS({ document: EmployeeDocument, variables: { name } });

  if (!employee) {
    return null;
  }

  return employee;
};
