import React from 'react';
import { Link } from 'gatsby';
import './navigation.scss';

const items = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/agentur', label: 'Agentur' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const Navigation = () => (
  <nav className="navigation">
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.href} activeClassName="is-active">
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <a className="navigation-item--medium" href="https://blog.smartive.ch" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
