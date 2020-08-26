import React from 'react';
import firebase from 'firebase';
import logo from '../logo.svg';
import './App.css';
import data from '../data.json'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data};
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCqM7m9yCFLEP0Ha4owxO3wz4ZBRtzhDgU",
      authDomain: "crm-project-c614d.firebaseapp.com",
      databaseURL: "https://crm-project-c614d.firebaseio.com",
      projectId: "crm-project-c614d",
      storageBucket: "crm-project-c614d.appspot.com",
      messagingSenderId: "61175138172",
      appId: "1:61175138172:web:0e16e73a15e9ecdb4986f9",
      measurementId: "G-V3SXVD8EW2",
    })
  }

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  }

}

export default App;
