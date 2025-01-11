import fs from 'fs/promises';
import path from 'path';

export const countContacts = async () => {
  try {
    const filePath = path.resolve('src/db/db.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
    throw error;
  }
};

(async () => {
  console.log(await countContacts());
})();
