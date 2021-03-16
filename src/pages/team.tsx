import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { QuoteCard } from '../components/quote-card';
import { Contact } from '../compositions/contact';
import { EmployeeCard } from '../compositions/employee-card';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Copy } from '../elements/copy';
import { Grid } from '../layouts/grid';

type Props = {
  contact: Employee;
  employees: Employee[];
  quote: Quote;
};

const Team: NextPage<Props> = ({ employees, contact, quote }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Wir konzipieren und kompostieren, entwickeln und verwickeln, beraten und bräteln, _gemeinsam_."
        description={`${employees.length} Menschen, eine Idee: Zusammen Herausforderungen stemmen und digitale Produkte schaffen, die herausragen. Und eine ungezwungene Atmosphäre: Wir pflegen die Freundschaft. Wir entscheiden zusammen. Wir geben allen das Vertrauen und die Freiheit, sich auf ihre Art einzubringen.`}
      >
        <Copy>
          {employees.length} Menschen, eine Idee: Zusammen Herausforderungen stemmen und digitale Produkte schaffen, die
          herausragen. Und eine ungezwungene Atmosphäre: Wir pflegen die Freundschaft. Wir entscheiden zusammen. Wir geben
          allen das Vertrauen und die Freiheit, sich auf ihre Art einzubringen.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={3}>
            {employees.slice(0, Math.floor(employees.length / 2)).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
            <QuoteCard className="col-start-1 md:col-span-2 lg:col-span-3" quote={quote} />
            {employees.slice(Math.floor(employees.length / 2)).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const employees = Object.values(Employees).sort(({ firstname: first }, { firstname: second }) =>
    first < second ? -1 : first > second ? 1 : 0
  );

  return {
    props: {
      employees,
      contact: Employees.moreno,
      quote: Quotes['thilo-newwork'],
    },
  };
};

export default Team;
