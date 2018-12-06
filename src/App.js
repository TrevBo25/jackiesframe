import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      picture: ''
    }
  }

  componentDidMount(){
    axios.get('/api/test')
    .then(response => {
      this.setState({
        picture: response.data
      })
    })
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.picture} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
