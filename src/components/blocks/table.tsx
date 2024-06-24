import { TableBlockFragment } from '@/graphql/generated';
import { classNames } from '@smartive/guetzli';
import { FC, Fragment } from 'react';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: TableBlockFragment;
};

export const TableBlock: FC<Props> = ({ block: { table, showTableHeader } }) => {
  const { columns, data } = table as { columns: string[]; data: Record<string, string>[] };

  return (
    <BlockWrapper marginTop="small" marginBottom="small">
      <div className="sr-only sm:not-sr-only">
        <table className="divide-gray-200 min-w-full divide-y-2 divide-white-200 overflow-hidden rounded-sm">
          {showTableHeader && (
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="font-medium bg-black text-left text-xs tracking-wider text-white-100 md:px-8 md:py-5 lg:px-12 lg:py-6 lg:text-base"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-gray-200 divide-y-2 divide-white-200 bg-white-100">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className={classNames(
                      'hyphens-auto text-xs sm:px-6 md:max-w-prose md:px-8 md:py-6 lg:px-12 lg:py-8 lg:text-base',
                      column === columns[0] && 'font-bold',
                    )}
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-5 flex flex-col gap-4 sm:hidden" aria-hidden={true}>
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={classNames('overflow-hidden rounded-sm', showTableHeader ? 'grid grid-cols-[1fr,3fr]' : '')}
          >
            {columns.map((column) => (
              <Fragment key={column}>
                {showTableHeader && (
                  <div className="flex items-center bg-black p-4 text-xs font-bold text-white-100">{column}</div>
                )}
                <div
                  className={classNames(
                    'flex items-center border-b-2 border-white-200 bg-white-100 p-4 text-xs last:border-b-0',
                    column === columns[0] && 'font-bold',
                  )}
                >
                  {row[column]}
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </BlockWrapper>
  );
};
