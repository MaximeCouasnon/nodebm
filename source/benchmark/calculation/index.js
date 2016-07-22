import Benchmark from "benchmark";
import {
  resultForGroup,
  resultForTwo
} from "shared/calculation";

let expenses = [ {
  payerId: "Bill",
  shares: [ "Bill", "John" ],
  price: 100
}, {
  payerId: "John",
  shares: [ "Bill", "John" ],
  price: 10
} ];

Benchmark.Suite( "Group of two users" )
  .add( "resultForGroup", () => resultForGroup( expenses, "Bill" ) )
  .add( "resultForTwo", () => resultForTwo( expenses, "Bill" ) )
  // add listeners
  .on( "cycle", function ( event ) {
    console.log( String( event.target ) );
  } )
  .on( "complete", function () {
    console.log( "Fastest is " + this.filter( "fastest" ).map( "name" ) );
  } )
  // run async
  .run( {
    "async": true
  } );
