import fs from 'fs/promises';
import path from 'path';

const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Last contact has been removed.');
  } catch (error) {
    console.error('Error removing last contact:', error.message);
    throw error;
  }
};

removeLastContact();

