import { FC } from 'react';
import { AllEmployeesDocument, TeamOverviewBlockFragment } from '../../../graphql/generated';
import { queryDatoCMS } from '../../../utils/query-dato-cms';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Grid } from '../../layouts/grid';
import { EmployeeCard } from './components/employee-card';
import { SingleTestimonial } from './components/single-testimonial';

type Props = {
  block: TeamOverviewBlockFragment;
};

export const TeamOverviewBlock: FC<Props> = async ({ block: { selectedTestimonial } }) => {
  const { employees } = await queryDatoCMS(AllEmployeesDocument);
  const halfEmpl = Math.round(employees.length / 12) * 6;

  return (
    <BlockWrapper>
      <Grid cols={3}>
        {employees.slice(0, halfEmpl).map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </Grid>
      {selectedTestimonial && (
        <SingleTestimonial
          quote={selectedTestimonial.quote}
          image={selectedTestimonial.authorImage?.responsiveImage}
          authorName={selectedTestimonial.authorName ?? undefined}
          authorDesc={selectedTestimonial.authorDesc ?? undefined}
          hasMargin={false}
        />
      )}
      <Grid cols={3}>
        {employees.slice(halfEmpl).map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </Grid>
    </BlockWrapper>
  );
};
