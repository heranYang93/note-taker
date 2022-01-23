const fs = require("fs");

class readAndWrite {
  constructor() {}

  readFrom(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      return JSON.parse(content);
    } catch (error) {
      console.log(`[ERROR]: read file - ${error.message}`);
      throw new Error(error.message);
    }
  }

  writeTo = (filePath, data) => {
    try {
      fs.writeFileSync(filePath, data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  readAndAppend = (filePath,data) => {
    try {
      const content = readFromFile(filePath);
      content.push(data);
      writeToFile(filePath, JSON.stringify(content));
    } catch (error) {
      console.log(`[ERROR]: read and append file - ${error.message}`);
    }
}
