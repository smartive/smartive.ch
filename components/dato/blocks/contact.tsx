import { FC } from 'react';
import { ContactBlockFragment } from '../../../graphql/generated';
import { getEmployeeByName } from '../../../src/data/employees';
import { Contact } from '../../contact';

type Props = {
  block: ContactBlockFragment;
};

export const ContactBlock: FC<Props> = async ({ block: { text, smartiveEmployeeName } }) => {
  const contact = await getEmployeeByName(smartiveEmployeeName);

  return (
    <div className="my-12 lg:my-48">
      <Contact contact={contact}>{text}</Contact>
    </div>
  );
};
