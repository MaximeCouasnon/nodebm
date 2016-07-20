/**
 * Functional sum for Array.prototype.reduce
 *
 * @param {Number} a
 * @param {Number} b
 *
 * @return {Number} a + b
 */
const sum = ( a, b ) => ( Number( a ) || 0 ) + ( Number( b ) || 0 );

/**
 * Check if a variable is an array and is not empty (like [])
 *
 * @param thing
 *
 * @return {Boolean}
 */
const isFilledArray = thing => {
  if ( !Array.isArray( thing ) ) {
    return false;
  }
  if ( thing.length === 0 ) {
    return false;
  }
  return true;
};

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
  if ( !isFilledArray( shares ) ) {
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

  return userShares * price / shares.length;
};

/**
 * Calculate what a user owes in a whole group
 *
 * @param {Array} group - An array of expenses
 * @param {String} userId - We want to calculate this user's total debt
 *
 * @return {Number}
 */
const sumDebts = ( group, userId ) => {
  if ( !isFilledArray( group ) ) {
    return 0;
  }

  return group
    .map( expense => calculateDebt( expense, userId ) )
    .reduce( sum );
};

/**
 * Calculate what a user paid for a whole group
 *
 * @param {Array} group - An array of expenses
 * @param {String} payerId - We want to sum this user's payments
 *
 * @return {Number}
 */
const sumPayments = ( group, payerId ) => {
  if ( !isFilledArray( group ) ) {
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
  sumPayments
};