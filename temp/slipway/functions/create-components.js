const path = require("path");
const { readYamlFile, fileExists, createFile } = require("m-i-file");

// Function to handle file creation based on parsed YAML data
function handleFileCreation(node) {
  const determineExt = (ext) => {
    switch (ext) {
      default:
        return ".jsx";
        break;
    }
  };

  const determinePath = () => {
    switch (node) {
      default:
        // for the default path, just return the root path for the folder such as ./components
        node.forEach((n) => {
          return path.join(process.cwd(), node, n);
        });
        break;
    }
  };

  const path = `${determinePath()}/${determineExt()}`;

  if (!fileExists(filePath)) {
    // Check if content is a string or needs to be serialized
    const content = typeof file.content === "string" ? file.content : JSON.stringify(file.content, null, 2);
    createFile(filePath, content);
  } else {
    console.log(`File ${filePath} already exists. Skipping.`);
  }
}

// Main function to orchestrate the file creation
function main() {
  const yamlFilePath = path.join(process.cwd(), "slipway.yml");
  const fileInfo = readYamlFile(yamlFilePath);
  fileInfo.forEach((node) => {
    switch (key) {
      case "components":
        handleFileCreation(node, node["framework"] || null);
        break;

      default:
        break;
    }
    // if the node has a framework field, create this from the switch statement
  });
}

// Execute the main function
main();
