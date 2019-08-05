import React from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'
import './App.css';
import 'bulma/css/bulma.css'

class App extends React.Component{
  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState( { results, usedSearch: true })
  }

  _renderResults () {
    return typeof this.state.results === 'undefined' 
      ? <p>Sorry!<span role="img" aria-label="Emoji sad face">😌</span>Results not found</p>
      : <MoviesList movies ={this.state.results} />
     
  }

render() {
  return (
    <div className="App">
      <Title> Search Movies</Title> 
      <div className='SearchForm-wrapper'>
        <SearchForm onResults={this._handleResults} />
      </div>
      {this.state.usedSearch
       ? this._renderResults()
       : <small>Use the form to search a movie</small>
      }
      
    </div>
  );
}
}
 

export default App;
