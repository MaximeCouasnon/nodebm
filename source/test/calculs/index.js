import test from 'tape';
import { calculDuDu, sommeDesDus } from 'shared/calculs';

test( "Calcul du dû pour une personne sur une dépense", assert => {
  let args;

  args = {
    partsUtilisateur: 1,
    prix: 100,
    nombreDeParts: 5
  };
  assert.equal(
    calculDuDu( args ), 20,
    "Dépense de 100€ et je possède 1 part sur 5 : dû = 20€" );

  args = {
    partsUtilisateur: 0,
    prix: 100,
    nombreDeParts: 5
  };
  assert.equal(
    calculDuDu( args ), 0,
    "Si j'ai 0 parts : je paye 0€" );

  args = {
    partsUtilisateur: 1,
    prix: 0,
    nombreDeParts: 5
  };
  assert.equal(
    calculDuDu( args ), 0,
    "Prix 0€ : je paye 0€" );

  args = {
    partsUtilisateur: 0,
    prix: 0,
    nombreDeParts: 0
  };
  assert.equal(
    calculDuDu( args ), false,
    "On interdit qu'il y ait 0 parts en tout" );

  assert.end();
} );

test( "Calcul de la somme des dûs d'une personne sur un groupe", assert => {
  let tableau;

  tableau = [ {
    idPayeur: "Bill",
    partsUtilisateur: 1,
    prix: 100,
    nombreDeParts: 5
  } ];
  assert.equal( sommeDesDus( tableau, "Bill" ), 20,
    "Un seul paiement" );

  tableau = [ {
    idPayeur: "Boule",
    partsUtilisateur: 1,
    prix: 100,
    nombreDeParts: 5
  } ];
  assert.equal( sommeDesDus( tableau, "Bill" ), 0,
    "Un seul paiement qui n'est pas de moi" );

  tableau = [ {
    idPayeur: "Bill",
    partsUtilisateur: 1,
    prix: 100,
    nombreDeParts: 5
  }, {
    idPayeur: "Bill",
    partsUtilisateur: 5,
    prix: 100,
    nombreDeParts: 5
  } ];
  assert.equal( sommeDesDus( tableau, "Bill" ), 120, "" );

  assert.end();
} );
