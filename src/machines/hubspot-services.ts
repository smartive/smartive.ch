const CREATE_DEAL_URL = '/api/hapi/objects/deals';
const CREATE_CONTACT_URL = '/api/hapi/objects/contacts';
const CREATE_ASSOCIATION_URL = '/api/hapi/associations/contacts/deals/batch/create';

export const createContact = async ({ firstname, lastname, email, phone, website }) => {
  const contact = await fetch(CREATE_CONTACT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      properties: {
        firstname,
        lastname,
        email,
        phone,
        website,
      },
    }),
  });

  const body = await contact.json();
  const contactID = contact.status === 409 ? body.message.replace('Contact already exists. Existing ID: ', '') : body.id;

  return contactID;
};

export const createDeal = async ({
  priority,
  name,
  amount,
  classification,
  vision,
  solution,
  challenges,
  competition,
  inspiration,
  about_you,
  target_group,
  url,
}) => {
  const deal = await fetch(CREATE_DEAL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        priority,
        dealname: name,
        pipeline: 'default',
        dealstage: 'qualifiedtobuy',
        amount,
        b2c___b2b: classification,
        description: `
      *Vision*
      ${vision}

      *Lösung*
      ${solution}

      *Herausforderungen*
      ${challenges}

      *Konkurrenz*
      ${competition}

      *Inspiration*
      ${inspiration}

      *Über mich*
      ${about_you}
      `,
        target_group: target_group,
        url_to_product: url,
      },
    }),
  });

  const { id: dealID } = await deal.json();

  return dealID;
};

export const createAssociation = async ({ contactID, dealID }) => {
  const association = await fetch(CREATE_ASSOCIATION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inputs: [
        {
          type: 'contact_to_deal',
          from: {
            id: contactID,
          },
          to: {
            id: dealID,
          },
        },
      ],
    }),
  });

  return association.json();
};
