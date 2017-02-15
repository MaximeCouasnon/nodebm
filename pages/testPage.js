import React from "react";

import languagesFactory from "../source/shared/i18n";
const lang = languagesFactory( "fr-fr" );

import createExpenseRow from "../source/shared/components/expenses/ExpenseRow";
const ExpenseRow = createExpenseRow( React );

const actions = {
  deleteExpense: () => {
    alert( "lol !" );
  }
};

export default () => {
  let props = {
    actions,
    lang,
    id: 1,
    date: "2016-11-15",
    payerId: "Bill",
    price: 100,
    label: "Cool stuff"
  }

  return <table>
	<tbody>
	  <ExpenseRow { ...props } />
	</tbody>
  </table>;
};
