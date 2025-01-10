import fs from 'fs/promises';
import path from 'path';

export const removeLastContact = async () => {
  try {
    const filePath = path.resolve('src/db/db.json'); 

    const data = await fs.readFile(filePath, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    contacts.pop();

    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Last contact has been removed.');
  } catch (error) {
    console.error('Error removing last contact:', error.message);
    throw error;
  }
};

removeLastContact();
