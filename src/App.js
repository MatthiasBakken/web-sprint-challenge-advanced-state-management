import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "./actions";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  constructor( props ) {
    super( props );

    this.componentDidMount = () => {
      props.fetchSmurfs();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
        smurfs: state.smurfs,
        appLoading: state.appLoading,
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, { fetchSmurfs })( App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.