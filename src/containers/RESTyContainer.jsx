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
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await restyCalls(
      this.state.url, 
      this.state.method, 
      this.state.display
    );
    this.setState({ display: response });
  }

  render() {
    const { display } = this.state;
    return (
      <div>
        <Header />
        <Controls 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} />
        <Display display={display} />
      </div>
    );
  }
}
