import test from "tape";
import createExpense from "shared/expense";

test( "Calculate a user's debt on an expense", assert => {
  let expense = createExpense( {
    shares: [ "Bill", "Billy", "Jim", "Jimmy", "Jimmy" ],
    price: 100
  } );

  assert.equal( expense.calculateDebt( "Bill" ), 20,
    "Bill owes 20" );

  assert.end();
} );
