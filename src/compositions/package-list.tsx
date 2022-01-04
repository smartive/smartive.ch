import { Clock, Grid, GridSlider } from '@smartive/guetzli';
import React, { FC } from 'react';
import { NextContentCard } from '../components/content-card';
import { Package } from '../data/packages';

type Props = {
  packages: Package[];
};

export const PackageList: FC<Props> = ({ packages }) => (
  <>
    <div className="hidden md:block">
      <Grid cols={4}>
        {packages.map(({ label, ...paeckli }) => (
          <NextContentCard
            {...paeckli}
            key={paeckli.title}
            label={
              <>
                <Clock className="h-4 w-4 mr-2 inline" />
                {label}
              </>
            }
          />
        ))}
      </Grid>
    </div>
    <div className="block md:hidden">
      <GridSlider>
        {packages.map(({ label, ...paeckli }) => (
          <NextContentCard
            {...paeckli}
            key={paeckli.title}
            label={
              <>
                <Clock className="h-4 w-4 mr-2 inline" />
                {label}
              </>
            }
          />
        ))}
      </GridSlider>
    </div>
  </>
);
