import React from 'react';
import firebase from '../firebase';
import Grid from './Grid';
import Form from './Form';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentWillMount() {
    
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
