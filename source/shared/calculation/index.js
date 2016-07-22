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
 * Check if a variable is an array but not the empty array
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
 * @param {Object} expense - Some users' expense
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
        return 1;
      }
      return 0;
    } )
    .reduce( sum );

  return userShares * price / shares.length;
};

/**
 * Calculate what a user owes in a whole list of expenses
 *
 * @param {Array} expenses - An array of expenses
 * @param {String} userId - We want to calculate this user's total debt
 *
 * @return {Number}
 */
const sumDebts = ( expenses, userId ) => {
  if ( !isFilledArray( expenses ) ) {
    return 0;
  }

  return expenses
    .map( expense => calculateDebt( expense, userId ) )
    .reduce( sum );
};

/**
 * Calculate what a user paid for a whole list of expenses
 *
 * @param {Array} expenses - An array of expenses
 * @param {String} payerId - We want to sum this user's payments
 *
 * @return {Number}
 */
const sumPayments = ( expenses, payerId ) => {
  if ( !isFilledArray( expenses ) ) {
    return 0;
  }

  return expenses
    .map( expense => {
      if ( expense.payerId === payerId ) {
        return expense.price;
      }
      return 0;
    } )
    .reduce( sum );
};

/**
 * Calculate the end result for a user in a list of expenses
 *
 * @param {Array} expenses - An array of expenses
 * @param {String} userId - We want to get this user's result
 *
 * @return {Number}
 */
const resultForGroup = ( expenses, userId ) => {
  return sumDebts( expenses, userId ) - sumPayments( expenses, userId );
};

/**
 * Calculate the end result for two users
 *
 * @param {Array} expenses - An array of expenses
 * @param {String} userId - We want to get this user's result
 *
 * @return {Number}
 */
const resultForTwo = ( expenses, userId ) => {
  if ( !isFilledArray( expenses ) ) {
    return 0;
  }

  const myDebtWhereIDidntPay = expenses
    .map( expense => {
      if ( expense.payerId !== userId ) {
        return calculateDebt( expense, userId );
      }
      return 0;
    } )
    .reduce( sum );

  const myFriendsDebtWhereIDidPay = expenses
    .map( expense => {
      if ( expense.payerId === userId ) {
        return calculateDebt( expense, userId );
      }
      return 0;
    } )
    .reduce( sum );

  return myDebtWhereIDidntPay - myFriendsDebtWhereIDidPay;
};

export {
  calculateDebt,
  sumDebts,
  sumPayments,
  resultForGroup,
  resultForTwo
};
