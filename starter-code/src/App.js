import React, { Component } from 'react';
//import data from '../data.json'
import FilterableProductTable from './components/FilterableProductTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;