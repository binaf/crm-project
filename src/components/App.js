import React from 'react';
import firebase from 'firebase';
import data from '../data.json';
import Grid from './Grid';
import Form from './Form';

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

    <div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo  center"> Contacts Team </a>
          </div>
        </nav>
      </div>

      <div>
        <Form/>
        <Grid items = {this.state.data} />
      </div>
    </div>
  );

  }

}

export default App;
