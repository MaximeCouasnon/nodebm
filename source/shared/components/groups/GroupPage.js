import { connect } from 'react-redux';
import createExpensesTable from './ExpensesTable';

const createExpensesPage = React => ( props ) => {
  const ExpensesTable = createExpensesTable( React );

  return (
    <div>
      <ExpensesTable { ...props } />
    </div>
  );
};

const mapStateToProps = state => {
  const {
    lang,
    expenses
  } = state;

  return {
    lang,
    expenses
  };
};

// Connect props to component
export default React => {
  const Page = createExpensesPage( React );
  return connect( mapStateToProps )( Page );
};
