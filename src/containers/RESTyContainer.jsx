import React, { Component } from 'react';
import restyCalls from '../services/RESTy';
import Header from '../components/RESTy/Header';
import Controls from '../components/RESTy/Controls';
import Display from '../components/RESTy/Display';

export default class RESTyContainer extends Component {

  state = {
    url: '',
    method: '',
    data: '',
    display: { 'Hola': 'Rock, Paper, REST!' }
  }

  handleChange = (event) => {

  }

  handleSubmit = (event) => {
    
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
