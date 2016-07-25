export const renderExpenseLine = React => ( {
  actions,
  lang,
  id,
  payerId = "",
  date = "",
  label = "",
  price = 0
} ) => {
  return (
    <tr key={ id }>
      <td className="expense-delete">
        <span onClick={ () => actions.deleteExpense( id ) }>
          { lang.deleteExpense }
        </span>
      </td>
      <td className="expense-payerId">{ payerId }</td>
      <td className="expense-date">{ date }</td>
      <td className="expense-label">{ label }</td>
      <td className="expense-price">{ price }</td>
    </tr>
  );
};

export default React => ( { lang, expenses } ) => {
  const Tr = renderExpenseLine( React );

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
        { expenses.map( expense => Tr( expense ) ) }
      </tbody>
    </table>
  );
};
