import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Map, GoogleApiWrapper } from 'google-maps-react';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
      return (
          <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
          />
      );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD0KNyQSG2n8Oo8vi9WE82KFZp9zKCEItg'
})(App);

const mapStyles = {
    width: '100%',
    height: '100%',
};

//export default withAuthenticator(App, true);
