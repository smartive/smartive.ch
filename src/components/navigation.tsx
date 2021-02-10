import { FC } from 'react';
import Link from 'next/link';

export const Navigation: FC = () => (
  <nav className="bg-cornflower-500">
    <Link href="/">
      <a>smartive</a>
    </Link>
    <ul className="text-mint-500">
      <li>
        <Link href="/angebot">
          <a>Angebot</a>
        </Link>
      </li>
      <li>
        <Link href="/projekte">
          <a>Projekte</a>
        </Link>
      </li>
      <li>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/agentur">
          <a>Agentur</a>
        </Link>
      </li>
      <li>
        <a href="https://blog.smartive.ch">Blog (ext)</a>
      </li>
    </ul>
  </nav>
);
