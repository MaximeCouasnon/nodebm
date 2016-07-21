import test from "tape";

import {
  calculateDebt,
  sumDebts,
  sumPayments,
  resultForGroup,
  resultForTwo
} from "shared/calculation";

test( "Calculate what a given user owes for an expense", assert => {
  let expense;

  expense = {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  };
  assert.equal(
    calculateDebt( expense, "Bill" ), 20,
    "If I got 1 share out of 5 on a 100 expense: then I owe 20" );

  assert.equal(
    calculateDebt( expense, "Jimmy" ), 40,
    "If I got 2 shares out of 5 on a 100 expense: then I owe 40" );

  assert.equal(
    calculateDebt( expense, "Thomas A. Edison" ), 0,
    "If I got 0 shares: then I owe 0" );

  expense = {
    shares: [ "Bill", "Jimmy", "Tommy" ],
    price: 0
  };
  assert.equal(
    calculateDebt( expense, "Bill" ), 0,
    "If price is 0: then I owe 0" );

  expense = {
    shares: [],
    price: 6510
  };
  assert.equal(
    calculateDebt( expense ), 0,
    "Abnormal case: 'shares' is an empty array" );

  expense = {
    shares: null,
    price: 6510
  };
  assert.equal(
    calculateDebt( expense ), 0,
    "Abnormal case: 'shares' is null" );

  assert.end();
} );

test( "Calculate what a given user owes for a group", assert => {
  let group;

  group = [ {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  } ];
  assert.equal( sumDebts( group, "Bill" ), 20,
    "One expense, one share" );

  group = [ {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  }, {
    shares: [ "Bill", "Billy", "Tom", "Jimmy", "Jimmy" ],
    price: 50
  } ];
  assert.equal( sumDebts( group, "Bill" ), 30,
    "Two expenses, two times one share" );
  assert.equal( sumDebts( group, "Jimmy" ), 60,
    "Two expenses, two times two shares" );
  assert.equal( sumDebts( group, "Tom" ), 10,
    "No shares on some expenses" );

  group = [];
  assert.equal( sumDebts( group, "Bill" ), 0,
  "Abnormal case: 'group' is an empty array" );

  group = null;
  assert.equal( sumDebts( group, "Bill" ), 0,
  "Abnormal case: 'group' is null" );

  assert.end();
} );

test( "Calculate what a given user paid for a group", assert => {
  let group;

  group = [ {
    payerId: "Bill",
    price: 100
  } ];
  assert.equal( sumPayments( group, "Bill" ), 100,
    "One payment" );
  assert.equal( sumPayments( group, "John" ), 0,
    "One payment I didn't pay" );

  group = [ {
    payerId: "Bill",
    price: 100
  }, {
    payerId: "John",
    price: 100
  }, {
    payerId: "Bill",
    price: 50
  } ];
  assert.equal( sumPayments( group, "Bill" ), 150,
    "Several expenses I paid" );
  assert.equal( sumPayments( group, "John" ), 100,
    "Several expenses, I paid only one" );

  group = [];
  assert.equal( sumPayments( group, "Bill" ), 0,
    "Abnormal case: 'group' is an empty array" );

  group = null;
  assert.equal( sumPayments( group, "Bill" ), 0,
    "Abnormal case: 'group' is null" );

  assert.end();
} );

test( "Calculate a user's final result in a group", assert => {
  let group;

  group = [ {
    payerId: "Bill",
    shares: [ "Bill", "John", "Billy", "Johnny" ],
    price: 100
  } ];
  assert.equal( resultForGroup( group, "Bill" ), -75,
    "One expense I paid: my friends owe me in the end" );
  assert.equal( resultForGroup( group, "John" ), 25,
    "One expense I didn't pay: I owe my friend in the end" );

  assert.end();
} );

test( "Calculate results between two users", assert => {
  let expenses;

  expenses = [ {
    payerId: "Bill",
    shares: [ "Bill", "John" ],
    price: 100
  }, {
    payerId: "John",
    shares: [ "Bill", "John" ],
    price: 10
  } ];

  assert.equal( resultForTwo( expenses, "Bill" ), -45,
    "Result for two people: one expense each" );
  assert.equal( resultForTwo( expenses, "John" ), 45,
    "The same, the other way around" );

  assert.equal( resultForGroup( expenses, "Bill" ), -45,
    "Result for a group of two people: one expense each" );
  assert.equal( resultForGroup( expenses, "John" ), 45,
    "The same, the other way around" );

  assert.end();
} );
