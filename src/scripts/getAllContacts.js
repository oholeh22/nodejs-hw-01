import fs from 'fs/promises';
import path from 'path';

export const getAllContacts = async () => {
  try {
    const filePath = path.resolve('src/db/db.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    throw error;
  }
};

(async () => {
  console.log(await getAllContacts());
})();
