const fs = require("fs");
const path = require("path");
const yaml = require("yaml");

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

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

// Read the YAML file
const yamlFilePath = path.join(process.cwd(), "fileContents.yaml");
const fileContents = fs.readFileSync(yamlFilePath, "utf8");
const fileInfo = yaml.parse(fileContents);

// Iterate over each file definition and create if it doesn't exist
fileInfo.files.forEach((file) => {
  const filePath = path.join(process.cwd(), file.filename);

  if (!fileExists(filePath)) {
    // Check if content is a string or needs to be serialized
    const content = typeof file.content === "string" ? file.content : JSON.stringify(file.content, null, 2);
    createFile(filePath, content);
  } else {
    console.log(`File ${filePath} already exists. Skipping.`);
  }
});
