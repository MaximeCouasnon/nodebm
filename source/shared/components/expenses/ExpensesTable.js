import createExpenseRow from "./ExpenseRow";

export default React => ( {
  lang,
  expenses
} ) => {
  const ExpenseRow = createExpenseRow( React );

  return (
    <table>
      <caption>{ lang( "Expenses" ) }</caption>
      <thead>
        <tr>
          <td></td>
          <td className="expenses-thead-payerId">{ lang( "Paid by" ) }</td>
          <td className="expenses-thead-date">{ lang( "Date" ) }</td>
          <td className="expenses-thead-label">{ lang( "Label" ) }</td>
          <td className="expenses-thead-price">{ lang( "Price" ) }</td>
        </tr>
      </thead>
      <tbody>
        { expenses.map( expense => (
          <ExpenseRow key={ expense.id } { ...expense } />
        ) ) }
      </tbody>
    </table>
  );
};
