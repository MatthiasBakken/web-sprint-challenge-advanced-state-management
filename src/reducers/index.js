import { IS_FETCHING, FETCH_SUCCESS, ERROR_HANDLER, ADD_SMURF } from "../actions";

export const initialState = {
  smurfs: [],
  appLoading: false,
  errorMessage: ""
}

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    
    case ( IS_FETCHING ):
      return ( {
        ...state,
        appLoading: true
      } );
    
    case ( FETCH_SUCCESS ):
      return ( {
        ...state,
        smurfs: action.payload,
        appLoading: false
      } );
    
    case ( ERROR_HANDLER ):
      return ( {
        ...state,
        errorMessage: action.payload,
        appLoading: false
      } );
    
    case ( ADD_SMURF ):
      return ( {
        ...state,
        smurfs: [ ...state.smurfs, action.payload ]
      } );
  
    default:
      return state;
  }
};

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.