/**
 * Functional sum for Array.prototype.reduce
 * @param {Number} a
 * @param {Number} b
 * @return {Number} a + b
 */
const sum = ( a, b ) => ( Number( a ) || 0 ) + ( Number( b ) || 0 );

/**
 * Calculer le dû pour une personne sur une dépense à plusieurs
 *
 * @param {Object} expense - Une ligne de dépense du groupe
 * @param {Array} expense.shares - Tableau des parts de chacun dans la dépense
 * @param {Number} expense.price - Prix total de la dépense
 * @param {String} userId - Identifiant de la personne dont on calcule le
 * dû sur cette dépense
 * @return {Number} - Le dû de la personne
 */
const calculDuDu = ( { shares, price = 0 }, userId ) => {
  // Only accept an Array
  //(otherwise a String could break the function with its length property)
  if ( !Array.isArray( shares ) ) {
    return 0;
  }

  const totalNumberOfShares = shares.length;

  // If shares is empty (which would be weird), return 0 instead of NaN
  if ( totalNumberOfShares === 0 ) {
    return 0;
  }

  const userShares = shares
    .map( id => {
      if ( id === userId ) {
        return 1
      }
      return 0;
    } )
    .reduce( sum );

  return userShares * price / totalNumberOfShares;
};

/**
 * Faire la somme des dûs d'un utilisateur sur un groupe
 *
 * @param {Array} group - Un tableau de dépenses
 * @param {String} userId - Identifiant de la personne dont on calcule la
 * somme des dûs sur ce groupe
 */
const sommeDesDus = ( group = [], userId ) => {
  return group
    .map( expense => calculDuDu( expense, userId ) )
    .reduce( sum );
};

/**
 * Faire la somme des dépenses d'un utilisateur sur un groupe
 *
 * @param {Array} group - Un tableau de dépenses
 * @param {String} payerId - Identifiant de la personne dont on calcule la
 * somme des paiements sur ce groupe
 */
const sommeDesDepenses = ( group = [], payerId ) => {
  if ( !group.length ) {
    return 0;
  }

  return group
    .map( expense => {
      if ( expense.payerId === payerId ) {
        return expense.price;
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
