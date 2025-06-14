
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, '../data/generatedTestData.json');

export class TestDataManager {
  static generateTestData() {
    const data = {
   
      productName: 'Sleeveless',
      quantity: 4

    };
   fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    return data;
  }

  static cleanupTestData() {
    if (fs.existsSync(dataFilePath)) {
      fs.unlinkSync(dataFilePath);
    }
  }
}
