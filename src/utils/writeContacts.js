import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, jsonData, 'utf-8');
    console.log('Contacts successfully updated in', PATH_DB);
  } catch (error) {
    console.error(`Error writing contacts to ${PATH_DB}:`, error);
    throw new Error('Failed to update contacts');
  }
};

