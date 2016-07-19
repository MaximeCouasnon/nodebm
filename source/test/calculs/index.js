import test from 'tape';

import {
  calculDuDu,
  sommeDesDus,
  sommeDesDepenses
} from 'shared/calculs';

test( "Calculate what a given user owes for an expense", assert => {
  let expense;

  expense = {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  };
  assert.equal(
    calculDuDu( expense, "Bill" ), 20,
    "If I got 1 share out of 5 on a 100 expense: then I owe 20" );

  assert.equal(
    calculDuDu( expense, "Jimmy" ), 40,
    "If I got 2 shares out of 5 on a 100 expense: then I owe 40" );

  assert.equal(
    calculDuDu( expense, "Thomas A. Edison" ), 0,
    "If I got 0 shares: then I owe 0" );

  expense = {
    shares: [ "Bill", "Jimmy", "Tommy" ],
    price: 0
  };
  assert.equal(
    calculDuDu( expense, "Bill" ), 0,
    "If price is 0: then I owe 0" );

  expense = {
    shares: [],
    price: 6510
  };
  assert.equal(
    calculDuDu( expense ), 0,
    "Abnormal case: 'shares' is an empty array" );

  expense = {
    shares: null,
    price: 6510
  };
  assert.equal(
    calculDuDu( expense ), 0,
    "Abnormal case: 'shares' is null" );

  assert.end();
} );

test( "Calcul de la somme des dûs d'une personne sur un groupe", assert => {
  let group;

  group = [ {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  } ];
  assert.equal( sommeDesDus( group, "Bill" ), 20,
    "Une seule dépense où j'ai des parts" );

  group = [ {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  }, {
    shares: [ "Bill", "Billy", "Tom", "Jimmy", "Jimmy" ],
    price: 50
  } ];
  assert.equal( sommeDesDus( group, "Bill" ), 30,
    "Deux dépenses où j'ai des parts" );
  assert.equal( sommeDesDus( group, "Jimmy" ), 60,
    "Si j'ai deux fois deux parts" );
  assert.equal( sommeDesDus( group, "Tom" ), 10,
    "Si certaines dépenses ne me concernent pas" );

  assert.end();
} );

test( "Calcul de la somme des dépenses payées d'une personne sur un groupe",
  assert => {
    let group;

    group = [ {
      payerId: "Bill",
      price: 100
    } ];
    assert.equal( sommeDesDepenses( group, "Bill" ), 100,
      "Un seul paiement" );
    assert.equal( sommeDesDepenses( group, "John" ), 0,
      "Un seul paiement qui n'est pas de moi" );

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
    assert.equal( sommeDesDepenses( group, "Bill" ), 150,
      "Plusieurs paiements de moi" );
    assert.equal( sommeDesDepenses( group, "John" ), 100,
      "Plusieurs paiements, un seul de moi" );

    group = [];
    assert.equal( sommeDesDepenses( group, "Bill" ), 0,
      "Groupe vide" );

    assert.end();
  } );
