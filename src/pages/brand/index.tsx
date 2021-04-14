import React, { FC } from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Link } from '../../elements/link';
import { Copy } from '../../identity/copy';
import { LandingPage } from '../../layouts/landing-page';

const Brand: FC = () => (
  <LandingPage>
    <PageHeader markdownTitle="_Brand_ Guidelines" />
    <Copy>Hier beschreiben wir den Brand</Copy>
    <Copy>
      <Link href="brand/sprache"> Sprache</Link>
    </Copy>
  </LandingPage>
);

export default Brand;
