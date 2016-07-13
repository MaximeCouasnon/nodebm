import test from 'tape';

import {
  calculDuDu,
  sommeDesDus,
  sommeDesDepenses
} from 'shared/calculs';

test( "Calcul du dû pour une personne sur une dépense", assert => {
  let depense;

  depense = {
    parts: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    prix: 100
  };
  assert.equal(
    calculDuDu( depense, "Bill" ), 20,
    "Dépense de 100€ et je possède 1 part sur 5 : je dois 20€" );

  assert.equal(
    calculDuDu( depense, "Jimmy" ), 40,
    "Dépense de 100€ et je possède 2 parts sur 5 : je dois 40€" );

  assert.equal(
    calculDuDu( depense, "Thomas A. Edison" ), 0,
    "Si j'ai 0 parts : je dois 0€" );

  depense = {
    parts: [ "Bill", "Jimmy", "Tommy" ],
    prix: 0
  };
  assert.equal(
    calculDuDu( depense, "Bill" ), 0,
    "Prix 0€ : je dois 0€" );

  depense = {
    parts: [],
    prix: 6510
  };
  assert.equal(
    calculDuDu( depense ), 0,
    "S'il y a 0 parts en tout (anormal), je dois 0€" );

  assert.end();
} );

test( "Calcul de la somme des dûs d'une personne sur un groupe", assert => {
  let groupe;

  groupe = [ {
    parts: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    prix: 100
  } ];
  assert.equal( sommeDesDus( groupe, "Bill" ), 20,
    "Une seule dépense où j'ai des parts" );

  groupe = [ {
    parts: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    prix: 100
  }, {
    parts: [ "Bill", "Billy", "Tom", "Jimmy", "Jimmy" ],
    prix: 50
  } ];
  assert.equal( sommeDesDus( groupe, "Bill" ), 30,
    "Deux dépenses où j'ai des parts" );
  assert.equal( sommeDesDus( groupe, "Jimmy" ), 60,
    "Si j'ai deux fois deux parts" );
  assert.equal( sommeDesDus( groupe, "Tom" ), 10,
    "Si certaines dépenses ne me concernent pas" );

  assert.end();
} );

test( "Calcul de la somme des dépenses payées d'une personne sur un groupe", assert => {
  let groupe;

  groupe = [ {
    idPayeur: "Bill",
    prix: 100
  } ];
  assert.equal( sommeDesDepenses( groupe, "Bill" ), 100,
    "Un seul paiement" );

  groupe = [ {
    idPayeur: "Boule",
    prix: 100
  } ];
  assert.equal( sommeDesDepenses( groupe, "Bill" ), 0,
    "Un seul paiement qui n'est pas de moi" );

  groupe = [ {
    idPayeur: "Bill",
    prix: 100
  }, {
    idPayeur: "Boule",
    prix: 100
  }, {
    idPayeur: "Bill",
    prix: 50
  } ];
  assert.equal( sommeDesDepenses( groupe, "Bill" ), 150,
    "Plusieurs paiements de moi" );

  groupe = [];
  assert.equal( sommeDesDepenses( groupe, "Bill" ), 0,
    "Groupe vide" );

  assert.end();
} );
