import { Clock, ContentCard, Grid, GridSlider } from '@smartive/guetzli';
import NextLink from 'next/link';
import React, { FC } from 'react';
import { Package } from '../data/packages';

type Props = {
  packages: Package[];
};

export const PackageList: FC<Props> = ({ packages }) => (
  <>
    <div className="hidden md:block">
      <Grid cols={4}>
        {packages.map(({ label, ...paeckli }) => (
          <NextLink href={paeckli.link.href} key={paeckli.title} passHref>
            <ContentCard
              {...paeckli}
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  {label}
                </>
              }
            />
          </NextLink>
        ))}
      </Grid>
    </div>
    <div className="block md:hidden">
      <GridSlider>
        {packages.map(({ label, ...paeckli }) => (
          <NextLink href={paeckli.link.href} key={paeckli.title} passHref>
            <ContentCard
              {...paeckli}
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  {label}
                </>
              }
            />
          </NextLink>
        ))}
      </GridSlider>
    </div>
  </>
);
