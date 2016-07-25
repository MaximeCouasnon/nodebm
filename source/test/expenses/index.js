import React from "react";

import test from "tape";
import { shallow } from "enzyme";

import renderExpensesTable from "shared/components/expenses/ExpensesTable";
import renderExpenseRow from "shared/components/expenses/ExpenseRow";

const ExpensesTable = renderExpensesTable( React );
const ExpenseRow = renderExpenseRow( React );

const actions = {
  deleteExpense: () => "TODO "
};
const lang = {
  date: "Date",
  deleteExpense: "del.",
  expenses: "Expenses",
  label: "Label",
  payerId: "Paid by",
  price: "Price"
};

test( "Rendering an expense as a <tr>", assert => {
  let props = {
    actions,
    lang,
    id: 1,
    date: "2016-11-15",
    payerId: "Bill",
    price: 100,
    label: "Cool stuff"
  };

  let tr = <ExpenseRow { ...props } />;

  let $tr = shallow( tr );

  assert.equal( $tr.key(), "1",
    "Showing the right key" );
  assert.equal( $tr.find( ".expense-date" ).text(), "2016-11-15" );
  assert.equal( $tr.find( ".expense-payerId" ).text(), "Bill" );
  assert.equal( $tr.find( ".expense-price" ).text(), "100" );
  assert.equal( $tr.find( ".expense-label" ).text(), "Cool stuff" );

  // // Changing the label
  // props.label = "Super cool stuff";
  //
  // // Re-rendering
  // $tr = shallow( tr );
  //
  // assert.equal( $tr.find( ".expense-label" ).text(), "Super cool stuff",
  //   "Re-rendering shows the new label" );

  assert.end();
} );

test( "Rendering a table of expenses", assert => {
  let props = {
    lang,
    expenses: [ {
      actions,
      lang,
      id: 1,
      payerId: "Bill",
      price: 100
    }, {
      actions,
      lang,
      id: 2,
      payerId: "Joel",
      price: 80
    } ]
  };

  let table = <ExpensesTable { ...props } />;

  let $table = shallow( table );

  assert.equal( $table.find( "caption" ).text(), "Expenses",
    "Should output the correct language" );
  assert.equal( $table.find( ".expenses-thead-date" ).text(), "Date" );
  assert.equal( $table.find( ".expenses-thead-payerId" ).text(), "Paid by" );
  assert.equal( $table.find( ".expenses-thead-price" ).text(), "Price" );
  assert.equal( $table.find( ".expenses-thead-label" ).text(), "Label" );

  assert.equal( $table.find( "tbody tr" ).length, 2,
    "Two expenses appear in the table" );
  assert.equal( $table.find( ".expense-price" ).first().text(), "100",
    "The first expense has the correct price" );

  // Changing the first expense's price
  props.expenses[ 0 ].price = 70;

  // Changing the language
  Object.assign( lang, {
    date: "Date",
    deleteExpense: "suppr.",
    expenses: "Dépenses",
    label: "Motif",
    payerId: "Payé par",
    price: "Montant"
  } );

  // Re-rendering
  $table = shallow( table );

  assert.equal( $table.find( ".expense-price" ).first().text(), "70",
    "Re-rendering shows the new price" );
  assert.equal( $table.find( "caption" ).text(), "Dépenses",
    "Re-rendering shows the new language" );
  assert.equal( $table.find( ".expenses-thead-date" ).text(), "Date" );
  assert.equal( $table.find( ".expenses-thead-payerId" ).text(), "Payé par" );
  assert.equal( $table.find( ".expenses-thead-price" ).text(), "Montant" );
  assert.equal( $table.find( ".expenses-thead-label" ).text(), "Motif" );

  assert.end();
} );
