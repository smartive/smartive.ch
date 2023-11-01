import { FC } from 'react';
import { ContactBlockFragment } from '../../../graphql/generated';
import { getEmployeeByName } from '../../../src/data/employees';
import { Contact } from '../../contact';
import { BlockWrapper } from '../../layouts/block-wrapper';

type Props = {
  block: ContactBlockFragment;
};

export const ContactBlock: FC<Props> = async ({ block: { text, smartiveEmployeeName } }) => {
  const contact = await getEmployeeByName(smartiveEmployeeName);

  return (
    <BlockWrapper>
      <Contact contact={contact}>{text}</Contact>
    </BlockWrapper>
  );
};
