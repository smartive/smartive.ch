import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LinkList } from '../components/link-list';
import { QuoteCard } from '../components/quote-card';
import { Contact } from '../compositions/contact';
import { EmployeeCard } from '../compositions/employee-card';
import { MetaInfos, PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Lead } from '../elements/lead';
import { generateMetaImage } from '../utils/meta-image-generator';

type Props = {
  contact: Employee;
  employees: Employee[];
  quote: Quote;
  metaInfos: MetaInfos;
};

const Team: NextPage<Props> = ({ employees, contact, quote, metaInfos }) => {
  return (
    <div>
      <PageHeader title={metaInfos.title} decoration={metaInfos.decoration} metaInfos={metaInfos}>
        <Lead>
          Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </Lead>
        <LinkList links={[{ label: 'mehr über New Work', href: '#' }]} />
      </PageHeader>

      <main>
        <PageSection>
          <div className="grid grid-cols-3 grid-flow-row gap-16">
            {employees.slice(0, Math.floor(employees.length / 2)).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
            <QuoteCard className="col-start-1 col-span-3" quote={quote} />
            {employees.slice(Math.floor(employees.length / 2)).map((employee) => (
              <EmployeeCard key={employee.email} employee={employee} />
            ))}
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageTitle = { title: 'Cursus magna, vel scelerisque nisl consectetur et.', decoration: 'magna' };

  return {
    props: {
      contact: Employees.thilo,
      employees: Object.values(Employees).sort(({ firstname: first }, { firstname: second }) =>
        first < second ? -1 : first > second ? 1 : 0
      ),
      quote: Quotes['thilo-newwork'],
      metaInfos: {
        ...pageTitle,
        description:
          'Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: await generateMetaImage(pageTitle.title, pageTitle.decoration),
      },
    },
  };
};

export default Team;
