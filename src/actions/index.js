import axios from 'axios';

export const IS_FETCHING = "IS_FETCHING";
export const FETCH_SUCCESS = "FETCH_SECCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch( { type: IS_FETCHING } );
    
    axios.get( 'http://localhost:3333/smurfs' )
      .then( res => {
        console.log( res.data );
        dispatch( { type: FETCH_SUCCESS, payload: res.data } );
      } )
      .catch( err => {
        dispatch( { type: FETCH_FAIL, payload: err.message } );
      } );
  };
};

export const fetching = () => {
  return ( {
    type: IS_FETCHING
  } );
};

export const fetchSuccess = ( smurfs ) => {
  return ( {
    type: FETCH_SUCCESS,
    payload: smurfs
  } );
};

export const fetchFail = ( message ) => {
  return ( {
    type: FETCH_FAIL,
    payload: message
  } );
};

export const sendSmurf = ( smurf ) => {
  return dispatch => {
    
    axios.post( 'http://localhost:3333/smurfs', { ...smurf } )
      .then( res => {
        console.log( 'adding smurf success', res.data );
        dispatch( { type: ADD_SMURF, payload: smurf } );
        fetchSmurfs();
      } )
      .catch( err => {
        console.log( err.message );
      } );
  };
};

export const addSmurf = ( smurf ) => {
  return ( {
    type: ADD_SMURF,
    payload: smurf
  } );
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.