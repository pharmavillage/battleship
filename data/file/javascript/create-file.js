const fs = require('fs')

// Function to create a file with specified content
function createFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing file ${filePath}:`, err);
    } else {
      console.log(`File ${filePath} has been created!`);
    }
  });
}

module.exports = createFile