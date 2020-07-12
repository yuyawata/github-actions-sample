// @ts-nocheck
const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("returnsFizzBuzzwhenvalueisdivisibleby15", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });
  it("returnsFizzwhenvalueisdivisibleby3", () => {
    assert(fizzbuzz(9) === "Fizz");
  });
  it("returnsBuzzwhenvalueisdivisibleby5", () => {
    assert(fizzbuzz(10) === "Buzz");
  });
  it("returnsthevaluewhenvalueisnotdivisibleby3or5", () => {
    assert(fizzbuzz(7) === "7");
  });
});
