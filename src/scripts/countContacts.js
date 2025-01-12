import fs from 'fs/promises';
import path from 'path';

const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
    throw error;
  }
};

(async () => {
  try {
    const contactCount = await countContacts();
    console.log('Total contacts:', contactCount);
  } catch (error) {
    console.error('Failed to count contacts:', error.message);
  }
})();
