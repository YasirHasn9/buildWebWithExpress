// retrieve speakers data
// to get access to the file system
const fs = require('fs');
// to get help for updating our web page we need to get access
// to some functions that build on the object of utils
const utils = require('util');

// utils allows for us to deal with the async/await
const readFile = utils.promisify(fs.readFile);

// we need class to fetch data from the json file
// it takes a path to the json
class FetchingSpeakersData {
  // we need to get the path to the data file
  constructor(dataFile) {
    this.dataFile = dataFile;
  }

  async getData() {
    const data = await readFile(this.dataFile, 'utf8');

    return JSON.parse(data);
  }
}

module.exports = FetchingSpeakersData;
