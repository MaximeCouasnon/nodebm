export default React => ( {
  actions,
  lang,
  id,
  payerId = "",
  date = "",
  label = "",
  price = 0
} ) => (
  <tr>
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
