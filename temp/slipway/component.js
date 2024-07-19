#!/usr/bin/env node

const fs = require("fs");
const yaml = require("yaml");

/**
 * Reads and parses a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @returns {Object} - The parsed YAML data.
 */
function readYamlFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.parse(fileContents);
  } catch (error) {
    throw new Error(`Failed to read or parse YAML file: ${error.message}`);
  }
}

/**
 * Writes data to a YAML file.
 * @param {string} filePath - The path to the YAML file.
 * @param {Object} data - The data to write to the file.
 */
function writeYamlFile(filePath, data) {
  try {
    const yamlContent = yaml.stringify(data);
    fs.writeFileSync(filePath, yamlContent, "utf8");
  } catch (error) {
    throw new Error(`Failed to write YAML file: ${error.message}`);
  }
}

/**
 * Appends a new component to the components section of the YAML data.
 * @param {Object} data - The YAML data.
 * @param {string} componentName - The name of the component.
 * @param {string} componentType - The type of the component.
 * @returns {Object} - The updated YAML data.
 */
function appendComponent(data, componentName, componentType) {
  if (!data.components) {
    data.components = {};
  }

  const newComponentKey = `base_${componentName}`;
  data.components[newComponentKey] = { type: componentType };

  return data;
}

/**
 * Main function to handle CLI arguments and append the component.
 */
function createComponent(props) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.error("Usage: appendComponent <filePath> <componentName> <componentType>");
    process.exit(1);
  }

  const [filePath, componentName, componentType] = args;

  try {
    let data = readYamlFile(filePath || props.filePath);
    data = appendComponent(data, componentName || props.componentName, componentType || props.componentType);
    writeYamlFile(filePath, data);
    console.log(`Successfully added base_${componentName || props.componentName} to the YAML file.`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

createComponent();

module.exports = createComponent;
