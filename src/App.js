import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kitty: [],
      searchField: ''
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
    <input type='search' placeholder='search kitty' 
    onChange={ e => 
    this.setState({searchField: e.target.value}, 
    () => console.log(this.state))
    }/>
    <CardList kitty={this.state.kitty}>
    </CardList>
    </div>
  );
  }
}

export default App;
