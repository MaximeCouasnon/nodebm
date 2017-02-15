import React from "react";

import test from "tape";
import { render, shallow } from "enzyme";

import languagesFactory from "shared/i18n";

import createExpensesTable from "shared/components/expenses/ExpensesTable";
import createExpenseRow from "shared/components/expenses/ExpenseRow";

const ExpensesTable = createExpensesTable( React );
const ExpenseRow = createExpenseRow( React );

let lang = languagesFactory( "en-US" );

test( "Rendering an expense as a <tr>", assert => {
  let deleted = false;

  const actions = {
    deleteExpense: () => {
      deleted = true;
    }
  };

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

  assert.equal( $tr.find( ".expense-date" ).text(), "2016-11-15" );
  assert.equal( $tr.find( ".expense-payerId" ).text(), "Bill" );
  assert.equal( $tr.find( ".expense-price" ).text(), "100" );
  assert.equal( $tr.find( ".expense-label" ).text(), "Cool stuff" );

  $tr.find( ".expense-delete span" ).simulate( "click" );

  assert.equal( deleted, true,
    "deleteExpense() should have been called on click" );

  assert.end();
} );

test( "Rendering a table of expenses", assert => {
  const actions = {
    deleteExpense: () => true
  };

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

  let $table = render( table );

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
  lang.switchTo( "fr-FR" );

  // Re-rendering
  $table = render( table );

  assert.equal( $table.find( ".expense-price" ).first().text(), "70",
    "Re-rendering shows the new price" );
  assert.equal( $table.find( "caption" ).text(), "Dépenses",
    "Re-rendering shows the new language" );
  assert.equal( $table.find( ".expenses-thead-payerId" ).text(), "Payé par" );
  assert.equal( $table.find( ".expenses-thead-price" ).text(), "Montant" );
  assert.equal( $table.find( ".expenses-thead-label" ).text(), "Motif" );

  assert.end();
} );
