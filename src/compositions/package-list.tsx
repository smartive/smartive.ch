import React, { FC } from 'react';
import { Grid } from './grid';
import { GridSlider } from './grid-slider';
import { Package } from '../data/packages';
import { Clock } from '../identity/icons';
import { ContentCard } from '../components/content-card';

type Props = {
  packages: Package[];
};

export const PackageList: FC<Props> = ({ packages }) => (
  <>
    <div className="hidden md:block">
      <Grid cols={4}>
        {packages.map(({ label, ...paeckli }) => (
          <ContentCard
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
          <ContentCard
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
