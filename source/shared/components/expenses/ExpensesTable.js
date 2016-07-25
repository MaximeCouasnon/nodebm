import renderExpenseRow from "./ExpenseRow";

export default React => ( { lang, expenses } ) => {
  const ExpenseRow = renderExpenseRow( React );

  return (
    <table>
      <caption>{ lang.expenses }</caption>
      <thead>
        <tr>
          <td></td>
          <td className="expenses-thead-payerId">{ lang.payerId }</td>
          <td className="expenses-thead-date">{ lang.date }</td>
          <td className="expenses-thead-label">{ lang.label }</td>
          <td className="expenses-thead-price">{ lang.price }</td>
        </tr>
      </thead>
      <tbody>
        { expenses.map( expense => ExpenseRow( expense ) ) }
      </tbody>
    </table>
  );
};
