import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js'; 

export const removeAllContacts = async () => {
  try {
    const emptyArray = JSON.stringify([], null, 2);
    await fs.writeFile(PATH_DB, emptyArray, 'utf-8');
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error.message);
    throw error;
  }
};

removeAllContacts();


