import React from "react";
import { renderToStaticMarkup as render } from "react-dom/server";

import test from "tape";
import dom from "cheerio";

import renderTable, { renderExpenseLine } from "shared/components/expenses";

const Table = renderTable( React );
const Tr = renderExpenseLine( React );

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
    actions: {
      deleteExpense: () => "TODO "
    },
    lang,
    expense: {
      id: 1,
      date: "2016-11-15",
      payerId: "Bill",
      price: 100,
      label: "Cool stuff"
    }
  };

  let line = render( <Tr { ...props } /> );

  let $ = dom.load( line );

  assert.equal( $( line ).data( "id" ), 1,
    "Showing the right id" );
  assert.equal( $( ".expense-date" ).html(), "2016-11-15" );
  assert.equal( $( ".expense-payerId" ).html(), "Bill" );
  assert.equal( $( ".expense-price" ).html(), "100" );
  assert.equal( $( ".expense-label" ).html(), "Cool stuff" );

  assert.end();
} );

test( "Rendering a table of expenses", assert => {
  let props = {
    actions: {
      deleteExpense: () => "TODO"
    },
    lang,
    expenses: [ {
      id: 1,
      payerId: "Bill",
      price: 100
    }, {
      id: 2,
      payerId: "Joel",
      price: 80
    } ]
  };

  let table = render( <Table { ...props } /> );
  let $ = dom.load( table );

  assert.equal( $( "caption" ).text(), "Expenses",
    "Should output the correct language" );
  assert.equal( $( ".expenses-thead-date" ).text(), "Date" );
  assert.equal( $( ".expenses-thead-payerId" ).text(), "Paid by" );
  assert.equal( $( ".expenses-thead-price" ).text(), "Price" );
  assert.equal( $( ".expenses-thead-label" ).text(), "Label" );

  assert.equal( $( "tbody tr" ).length, 2,
    "Two expenses appear in the table" );

  assert.end();
} );
