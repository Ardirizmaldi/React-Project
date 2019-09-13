import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import {Searchbox} from './components/searchbox/searchbox.component.jsx'
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
    const { kitty, searchField } =this.state;
    const filteredKitty = kitty.filter(pussy =>
      pussy.name.toLowerCase().includes(searchField.toLowerCase())
      );

  return (
    <div className="App">
    <Searchbox
    placeholder='search kitty'
    handleChange={e => this.setState({searchField: e.target.value})}/>
    <CardList kitty={filteredKitty}/>
    </div>
  );
  }
}

export default App;
