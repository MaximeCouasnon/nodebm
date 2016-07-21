import {
  calculateDebt
} from "shared/calculation";

const expenseProto = {
  calculateDebt: function( userId ) {
    return calculateDebt( this, userId );
  }
};

export default ( { price, payerId, shares } ) => {
  const o = Object.create( expenseProto );

  o.price = price;
  o.payerId = payerId;
  o.shares = shares;

  return o;
};
