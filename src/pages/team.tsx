import { BlobVariations, Copy, Grid, LinkList, PageSection } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { Contact } from '../components/contact';
import { EmployeeCard } from '../components/employee-card';
import { Testimonial } from '../components/testimonial';
import { PageHeader } from '../compositions/page-header';
import { Employee, transformEmployee } from '../data/employees';
import Employees from '../data/employees.json';
import { Quote, transformQuote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Page } from '../layouts/page';

type Props = {
  contact: Employee;
  employees: Employee[];
  quote: Quote;
};

const Team: NextPage<Props> = ({ employees, contact, quote }) => {
  const halfEmpl = Math.round(employees.length / 2 / 6) * 6;

  return (
    <Page>
      <PageHeader
        markdownTitle="Wir konzipieren und kompostieren, entwickeln und verwickeln, beraten und bräteln, _gemeinsam_."
        description={`${employees.length} Menschen, eine Idee: Zusammen Herausforderungen stemmen und digitale Produkte schaffen, die herausragen. Und eine ungezwungene Atmosphäre: Wir pflegen die Freundschaft. Wir entscheiden zusammen. Wir geben allen das Vertrauen und die Freiheit, sich auf ihre Art einzubringen.`}
      >
        <Copy>
          {employees.length} Menschen, eine Idee: Zusammen Herausforderungen stemmen und digitale Produkte schaffen, die
          herausragen. Und eine ungezwungene Atmosphäre: Wir pflegen die Freundschaft. Wir entscheiden zusammen. Wir geben
          allen das Vertrauen und die Freiheit, sich auf ihre Art einzubringen.
        </Copy>
        <LinkList linkWrapper={NextLink} links={[{ label: 'Du vermisst dein Foto?', href: '/jobs' }]} />
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={3}>
            {employees.slice(0, halfEmpl).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
          </Grid>
          <Testimonial background="mint" blobs={BlobVariations.mint[0]} quote={quote} />
          <Grid cols={3}>
            {employees.slice(halfEmpl).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            <>
              New Work / Advice Process / Lohnformel 🤔 <br />
              Alles nur ein dicker Nebel? <br />
              {contact.firstname} ist dein Leuchtturm.
            </>
          </Contact>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const employees = await Promise.all(Object.values(Employees).map(async (employee) => await transformEmployee(employee)));

  return {
    props: {
      employees: employees.sort(({ firstname: first }, { firstname: second }) =>
        first < second ? -1 : first > second ? 1 : 0
      ),
      contact: await transformEmployee(Employees.moreno),
      quote: await transformQuote(Quotes['thilo-newwork']),
    },
  };
};

export default Team;
