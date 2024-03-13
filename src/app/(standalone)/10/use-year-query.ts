import { parseAsInteger, useQueryState } from 'nuqs';

export const useYearQuery = () => {
  const [year, setVisibleYear] = useQueryState('year', parseAsInteger.withDefault(0));

  return [year, setVisibleYear] as const;
};
