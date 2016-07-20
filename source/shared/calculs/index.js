/**
 * Functional sum for Array.prototype.reduce
 * @param {Number} a
 * @param {Number} b
 * @return {Number} a + b
 */
const sum = ( a, b ) => ( Number( a ) || 0 ) + ( Number( b ) || 0 );

/**
 * Calculate what a user owes on an expense
 *
 * @param {Object} expense - A group's expense
 * @param {Array} expense.shares - The users' shares table on this expense
 * @param {Number} expense.price - The price a user paid for this expense
 * @param {String} userId - We want to calculate this user's debt
 *
 * @return {Number} - What the user owes
 */
const calculateDebt = ( { shares, price = 0 }, userId ) => {
  // Only accept an Array
  // (otherwise a String could break the function with its length property)
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
 *
 * @return {Number}
 */
const sumDebts = ( group, userId ) => {
  if ( !Array.isArray( group ) ) {
    return 0;
  }
  if ( group.length === 0 ) {
    return 0;
  }

  return group
    .map( expense => calculateDebt( expense, userId ) )
    .reduce( sum );
};

/**
 * Faire la somme des dépenses d'un utilisateur sur un groupe
 *
 * @param {Array} group - Un tableau de dépenses
 * @param {String} payerId - Identifiant de la personne dont on calcule la
 * somme des paiements sur ce groupe
 *
 * @return {Number}
 */
const sumExpenses = ( group, payerId ) => {
  if ( !Array.isArray( group ) ) {
    return 0;
  }
  if ( group.length === 0 ) {
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
  calculateDebt,
  sumDebts,
  sumExpenses
};
