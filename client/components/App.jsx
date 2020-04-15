import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { getGhibliFilm } from '../apis/ghibli'
import Ghibli from './Ghibli'
import Description from './Description'

class App extends React.Component {
    state = {
      ghibli: []
    }
    componentDidMount() {
      this.update()
    }

    update = () => {
      getGhibliFilm()
      .then(ghibli => {
        this.setState({
          ghibli: ghibli
        })
      })
    }

  //     id: "dc2e6bd1-8156-4886-adff-b39e6043af0c"
  // title: "Spirited Away"
  // description: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?"
  // director: "Hayao Miyazaki"
  // producer: "Toshio Suzuki"
  // release_date: "2001"
  // rt_score: "97"

    // '/description/:id'


  render() {
    // console.log(this.state.ghibli)
    return (
      <Router>
      <>
      <header>
        <h1>Hayao Miyazaki</h1>
        <img src="/Studio_Ghibli_logo.svg" />
      </header>
      <main className="flex-grid">
        <aside className="side-col">
        <h1>Studio Ghibli Films</h1>
            <ul>
                {this.state.ghibli.map((ghibli) => {
                    return <Ghibli key={ghibli.id} data={ghibli} />
                })}
            </ul>
        </aside>
        <section className="main-col">
          <Route path='/description/:id' render={(props) => (
          <Description {...props} data={this.state.ghibli} />)}/>
        </section>
      </main> 
      </>
      </Router>
    )
  }
}

export default App
