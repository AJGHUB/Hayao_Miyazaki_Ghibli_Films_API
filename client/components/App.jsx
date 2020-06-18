import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Landing'
import Movie from './Movie'
import Download from './Download'

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
          <Route exact path="/" component={ Landing }/>
          <Route path="/movie" component={ Movie }/>
          <Route path="/download" component={ Download }/>
        </main> 
      </div>
      </Router>
    )
  }
}

export default App
