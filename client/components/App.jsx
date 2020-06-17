import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Movie from './Movie'

class App extends React.Component {
   
  render() {
    // console.log(this.state.ghibli)
    return (
      <Router>
      <header>
        <h1>Hayao Miyazaki</h1>
        <img src="/Studio_Ghibli_logo.svg" />
      </header>

      <div>
        <main className="flex-grid">
        <Route path="/movie" component={ Movie }/>
        </main> 
      </div>
      </Router>
    )
  }
}

export default App
