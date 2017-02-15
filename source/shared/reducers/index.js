const languages = {
  en: {
    date: "Date",
    deleteExpense: "del.",
    expenses: "Expenses",
    label: "Label",
    payerId: "Paid by",
    price: "Price"
  },
  fr: {
    date: "Date",
    deleteExpense: "suppr.",
    expenses: "Dépenses",
    label: "Motif",
    payerId: "Payé par",
    price: "Montant"
  }
};

const lang = languages.en;

const initialState = {
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

const books = ( state = { items: initialState }, action ) => {
  switch ( action.type ) {
    case 'ADD_COUNT':
      const newItems = state.items.map( item => {
        if ( item.id === action.item.id ) {
          item.count++;
        }

        return item;
      } );

      return Object.assign( {}, state.items, {
        items: newItems,
      } );
    default:
      return state;
  }
};

export default {
  books
};
