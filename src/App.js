import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kitty: [
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json(),console.log(Response))
    .then(user => this.setState({kitty:user}))    
  }
  

  render() {
  return (
    <div className="App">
    <CardList kitty={this.state.kitty}>
    </CardList>
    </div>
  );
  }
}

export default App;
