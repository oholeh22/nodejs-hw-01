import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contact = await writeContacts(createFakeContact());
  return contact;
};

addOneContact();
