import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../components/contact';
import { EmployeeCard } from '../components/employee-card';
import { Testimonial } from '../components/testimonial';
import { Grid } from '../compositions/grid';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Copy } from '../identity/copy';
import { Page } from '../layouts/page';
import { BlobVariations } from '../utils/blob-variations';

type Props = {
  contact: Employee;
  employees: Employee[];
  quote: Quote;
};

const Team: NextPage<Props> = ({ employees, contact, quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="_Gemeinsam_ smart: Unser Team"
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
          </Grid>
          <Testimonial background="mint" blobs={BlobVariations.mint[0]} quote={quote} />
          <Grid cols={3}>
            {employees.slice(Math.floor(employees.length / 2)).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            <>
              Du vermisst dein Foto auf dieser Seite? <br />
              Nimm Kontakt mit {contact.firstname} auf.
            </>
          </Contact>
        </PageSection>
      </main>
    </Page>
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
