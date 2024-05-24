// test/test_add.js
const add = require("../add");
const chai = require("chai");
const expect = chai.expect;

describe("Addition function", function () {
  it("should return 5 for add(2, 3)", function () {
    expect(add(2, 3)).to.equal(5);
  });

  it("should return 0 for add(-2, 2)", function () {
    expect(add(-2, 2)).to.equal(0);
  });
});
