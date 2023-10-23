import { FC } from 'react';
import { AbraxasLogo } from './logos/abraxas';
import { BerufsbildnerLogo } from './logos/berufsbildner';
import { BundesarchivLogo } from './logos/bundesarchiv';
import { FrontifyLogo } from './logos/frontify';
import { GvgLogo } from './logos/gvg';
import { SgLogo } from './logos/kanton-sg';
import { MigrosLogo } from './logos/migros';
import { MigustoLogo } from './logos/migusto';
import { SgeLogo } from './logos/sge';
import { SubsidiaLogo } from './logos/subsidia';
import { TagiLogo } from './logos/tagi';
import { UniSgLogo } from './logos/uni-sg';

export const CustomerLogos: FC = () => (
  <div className="grid grid-cols-3 gap-8 sm:gap-12 md:grid-cols-4 md:gap-16 xl:grid-cols-6">
    <MigrosLogo />
    <AbraxasLogo />
    <SubsidiaLogo />
    <GvgLogo />
    <SgLogo />
    <SgeLogo />
    <FrontifyLogo />
    <UniSgLogo />
    <BundesarchivLogo />
    <MigustoLogo />
    <TagiLogo />
    <BerufsbildnerLogo />
  </div>
);
