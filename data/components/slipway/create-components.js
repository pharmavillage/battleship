const slipway = require("battleship-constants");

const createComponent = () => {
  // Example Usage
  let slipwayYMLData = readSlipwayYML(slipway);
  if (slipwayYMLData) {
    slipwayYMLData = addSlipwayKeyValue(slipwayYMLData, "test", "newValue");
    persistSlipwayYML(slipway, slipwayYMLData);
  }
};

createComponent();

module.exports = { createComponent };
