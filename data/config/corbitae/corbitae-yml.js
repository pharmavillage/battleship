const getAbsolutePath = require("m-i-file");
const corbitae = require("battleship-constants");

function getCorbitaePath() {
  return getAbsolutePath(corbitae);
}

module.exports = { getCorbitaePath };
