import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { getGhibliFilm } from '../apis/ghibli'
import Ghibli from './Ghibli'
import Description from './Description'


class Movie extends React.Component {
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


  render() {
    // console.log(this.state.ghibli)
    return (
        <>
            <aside className="side-col">
              <h1>Studio Ghibli Films</h1>
                <ul className="details">
                   {this.state.ghibli.map((ghibli) => {
                    return <Ghibli key={ghibli.id} data={ghibli} />
                    })}
                </ul>
            </aside>
            <section className="main-col">
                <Route path='/description/:id' render={(props) => (
                <Description {...props} data={this.state.ghibli} />)}/>
            </section>
        </>
    )
  }
}

export default Movie