const path = require("path");
const { expect } = require("chai");

describe("Module loading", () => {
  it("should load slipway.yml correctly", () => {
    const slipway = require(path.resolve(__dirname, "slipway.yml"));
    expect(slipway).to.be.an("object"); // Replace with more specific assertions based on slipway.yml's structure
  });

  it("should load corbitae.yml correctly", () => {
    const corbitae = require(path.resolve(__dirname, "corbitae.yml"));
    expect(corbitae).to.be.an("object"); // Replace with more specific assertions based on corbitae.yml's structure
  });
});

describe("Module exports", () => {
  const module = require("./path/to/your/module"); // Replace with the correct path to your module file

  it("should export slipway", () => {
    expect(module).to.have.property("slipway");
    expect(module.slipway).to.be.an("object"); // Replace with more specific assertions based on slipway.yml's structure
  });

  it("should export corbitae", () => {
    expect(module).to.have.property("corbitae");
    expect(module.corbitae).to.be.an("object"); // Replace with more specific assertions based on corbitae.yml's structure
  });
});
