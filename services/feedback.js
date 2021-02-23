const fs = require('fs');
const utils = require('util');

const readFile = utils.promisify(fs.readFile);

class FeedbackService {
  /**
   * @param {*} dataFile is the path to data in the feedback.json
   */

  constructor(dataFile) {
    this.dataFile = dataFile;
  }

  async getData() {
    const data = await this.dataFile();
    if (!data) return [];
    return data;
  }

  async getList() {
    const data = await readFile(this.dataFile, 'utf8');

    return JSON.parse(data);
  }
}

module.exports = FeedbackService;
