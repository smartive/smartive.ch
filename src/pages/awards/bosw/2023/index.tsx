import { Heading2, LinkList } from '@smartive/guetzli';
import { NextPage } from 'next';
import { PageHeader } from '../../../../compositions/page-header';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';

const Page: NextPage = () => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Einreichungen 2023"
        description="Das haben wir eingereicht"
        tags={[{ short: 'BOSW22', full: 'Eingabe Best of Swiss Web 2023' }]}
      ></PageHeader>

      <main>
        <Section>
          <Heading2>Zubi</Heading2>
          <LinkList
            links={[
              { label: 'Digital Commerce', href: '2023/zubi/digital-commerce' },
              { label: 'Swiss', href: '2023/zubi/swiss' },
              { label: 'User-Experience', href: '2023/zubi/user-experience' },
              { label: 'Technology', href: '2023/zubi/technology' },
            ]}
          />
        </Section>

        <Section>
          <Heading2>Zwei-Wealth</Heading2>
          <LinkList
            links={[
              { label: 'Business', href: '2023/zwei-wealth/business' },
              { label: 'Innovation', href: '2023/zwei-wealth/innovation' },
              { label: 'User-Experience', href: '2023/zwei-wealth/user-experience' },
              { label: 'Productivity', href: '2023/zwei-wealth/productivity' },
            ]}
          />
        </Section>
        <Section>
          <Heading2>Campaign Factory</Heading2>
          <LinkList links={[{ label: 'Productivity', href: '2023/campaign-factory/productivity' }]} />
        </Section>
      </main>
    </LandingPage>
  );
};

export default Page;
