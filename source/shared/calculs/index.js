/**
 * Fonction pour Array.prototype.reduce : somme des valeurs d'un tableau
 */
const sum = ( a, b ) => a + b;

/**
 * Calculer le dû pour une personne sur une dépense à plusieurs
 *
 * @param {Object} depense - Une ligne de dépense du groupe
 * @param {Array} depense.parts - Tableau des parts de chacun dans la dépense
 * @param {Number} depense.prix - Prix total de la dépense
 * @param {String} idUtilisateur - Identifiant de la personne dont on calcule le
 * dû sur cette dépense
 * @return {Number} - Le dû de la personne
 */
const calculDuDu = ( { parts = [], prix = 0 }, idUtilisateur ) => {
  const nombreDeParts = parts.length;

  // Il est anormal qu'il y ait 0 parts sur une dépense
  // on retourne 0 au lieu de NaN
  if ( !nombreDeParts ) {
    return 0;
  }

  const partsUtilisateur = parts
    .map( id => {
      if ( id === idUtilisateur ) {
        return 1
      }
      return 0;
    } )
    .reduce( sum );

  return partsUtilisateur * prix / nombreDeParts;
};

/**
 * Faire la somme des dûs d'un utilisateur sur un groupe
 *
 * @param {Array} groupe - Un tableau de dépenses
 * @param {String} idUtilisateur - Identifiant de la personne dont on calcule la
 * somme des dûs sur ce groupe
 */
const sommeDesDus = ( groupe = [], idUtilisateur ) => {
  return groupe
    .map( depense => calculDuDu( depense, idUtilisateur ) )
    .reduce( sum );
};

/**
 * Faire la somme des dépenses d'un utilisateur sur un groupe
 *
 * @param {Array} groupe - Un tableau de dépenses
 * @param {String} idPayeur - Identifiant de la personne dont on calcule la
 * somme des paiements sur ce groupe
 */
const sommeDesDepenses = ( groupe = [], idPayeur ) => {
  if ( !groupe.length ) {
    return 0;
  }

  return groupe
    .map( depense => {
      if ( depense.idPayeur === idPayeur ) {
        return depense.prix;
      }
      return 0;
    } )
    .reduce( sum );
};

export {
  calculDuDu,
  sommeDesDus,
  sommeDesDepenses
};
