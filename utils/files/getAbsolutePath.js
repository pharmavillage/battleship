// Reusable function to get the absolute path of a file
function getAbsolutePath(filename) {
  return path.resolve(__dirname, filename);
}

module.exports = getAbsolutePath;
