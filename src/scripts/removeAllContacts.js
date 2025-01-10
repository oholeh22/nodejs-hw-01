import fs from 'fs/promises';
import path from 'path';

export const removeAllContacts = async () => {
  try {
    const filePath = path.resolve('src/db/db.json'); 
    const emptyArray = JSON.stringify([], null, 2);
    await fs.writeFile(filePath, emptyArray, 'utf-8');
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error.message);
    throw error;
  }
};

removeAllContacts();


