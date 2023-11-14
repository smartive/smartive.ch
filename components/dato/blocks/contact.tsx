import { FC } from 'react';
import { ContactBlockFragment } from '../../../graphql/generated';
import { mapDatoContactToEmployee } from '../../../utils/map-dato-employee';
import { Contact } from '../../contact';
import { BlockWrapper } from '../../layouts/block-wrapper';

type Props = {
  block: ContactBlockFragment;
};

export const ContactBlock: FC<Props> = async ({ block: { text, contact } }) => (
  <BlockWrapper>
    <Contact contact={mapDatoContactToEmployee(contact)}>{text}</Contact>
  </BlockWrapper>
);
