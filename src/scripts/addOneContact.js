import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

export const addOneContact = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Новий контакт додано:', newContact);
    return newContact;
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error);
  }
};

addOneContact();
