import Head from 'next/head';
import React, { FC } from 'react';
import { Decoration } from '../elements/decoration';
import { Heading1 } from '../elements/heading-1';

type Props = {
  title?: string;
  decoration?: string;
};

export const PageHeader: FC<Props> = ({ title, decoration, children }) => (
  <div className="my-48">
    <Head>
      <title>{title}</title>
    </Head>
    {title && (
      <Heading1>
        {decoration && title.includes(decoration) ? (
          <>
            {title.split(decoration)[0]}
            <Decoration>{decoration}</Decoration>
            {title.split(decoration)[1]}
          </>
        ) : (
          title
        )}
      </Heading1>
    )}
    {children}
  </div>
);
