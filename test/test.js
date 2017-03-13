'use strict'


var myApp = require('../app/library.js');

describe("Test for proper prime listing functionality", function() {
  it("should return 'Invalid input type' for for non-numeric type", function() {
  expect(myApp.prime('string')).toEqual('Invalid input type');
  })
  it("should return [2,3,5,7] for 8.99", function() {
  expect(myApp.prime(8.99)).toEqual([2,3,5,7]);
  })
  it("should return [2,3,5,7] for 9", function() {
	expect(myApp.prime(9)).toEqual([2,3,5,7]);
  })
  it("should return [] for -1", function() {
  expect(myApp.prime(-1)).toEqual([]);
  })
  it("should return [] for -100", function() {
  expect(myApp.prime(-100)).toEqual([]);
  })
  it("should return [2,3,5,7,11,13] for 15", function() {
  expect(myApp.prime(15)).toEqual([2,3,5,7,11,13]);
  })
  it("should return [2,3,5,7,11,13] for 13", function() {
  expect(myApp.prime(13)).toEqual([2,3,5,7,11,13]);
  })
  it("should return [2,3,5,7,11,13,17] for 20", function() {
  expect(myApp.prime(20)).toEqual([2,3,5,7,11,13,17,19]);
  })
  it("should return [2,3,5,7,11,13,17,19,23] for 28", function() {
  expect(myApp.prime(28)).toEqual([2,3,5,7,11,13,17,19,23]);
  })
  it("should return [2,3,5,7,11,13,17,19,23] for 24", function() {
  expect(myApp.prime(24)).toEqual([2,3,5,7,11,13,17,19,23]);
  })
  it("should return [2,3,5,7,11,13,17] for 17", function() {
  expect(myApp.prime(17)).toEqual([2,3,5,7,11,13,17]);
  })
  it("should return [2,3,5,7,11,13,17,19,23] for 25", function() {
  expect(myApp.prime(25)).toEqual([2,3,5,7,11,13,17,19,23]);
  })
  it("should return [] for 1", function() {
  expect(myApp.prime(1)).toEqual([]);
  })
  
})

