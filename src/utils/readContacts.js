import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading contacts from ${PATH_DB}:`, error);
    throw new Error('Failed to read contacts data');
  }
};
