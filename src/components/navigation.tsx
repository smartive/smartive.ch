import React, { FC } from 'react';
import { Link, LinkVariants } from '../elements/link';

export const Navigation: FC = () => (
  <nav className="grid grid-cols-3 font-sans font-bold text-xs">
    <div>
      <Link variant={LinkVariants.NoUnderline} href="/">
        smartive
      </Link>
    </div>
    <ul className="grid grid-flow-col gap-8">
      <li>
        <Link variant={LinkVariants.NoUnderline} href="/angebot">
          Angebot
        </Link>
      </li>
      <li>
        <Link variant={LinkVariants.NoUnderline} href="/projekte">
          Projekte
        </Link>
      </li>
      <li>
        <Link variant={LinkVariants.NoUnderline} href="/team">
          Team
        </Link>
      </li>
      <li>
        <Link variant={LinkVariants.NoUnderline} href="/agentur">
          Agentur
        </Link>
      </li>
      <li>
        <Link variant={LinkVariants.NoUnderline} href="https://blog.smartive.ch" newTab>
          Blog (ext)
        </Link>
      </li>
    </ul>
    <div className="text-right">
      <Link variant={LinkVariants.NoUnderline} className="mr-8" href="tel:0041445525599">
        +41 44 552 55 99
      </Link>
      <Link variant={LinkVariants.NoUnderline} href="mailto:hello@smartive.ch">
        hello@smartive.ch
      </Link>
    </div>
  </nav>
);
