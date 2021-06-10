import React from 'react';
import { connect } from "react-redux";

import Smurf from './Smurf';


const SmurfList = ( props ) => {

    if (props.appLoading || props.errorMessage) {
        return (
            <div className="listContainer" style={{textAlign: "center"}}>
                <h1>Loading...</h1>
                <p>{props.errorMessage}</p>
            </div>
        )
    }

     return ( <div className="listContainer">
         {
             props.smurfs.map( smurf => {
                 return (
                     <Smurf smurf={smurf} key={smurf.id} />
                 )
             })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        appLoading: state.appLoading,
        errorMessage: state.errorMessage
    }
}

export default connect( mapStateToProps, {} )( SmurfList );

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.