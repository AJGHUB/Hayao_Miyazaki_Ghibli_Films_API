import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { getGhibliFilm } from '../apis/ghibli'
import Ghibli from './Ghibli'
import Description from './Description'
import MovieGif from './MovieGif'


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
         <main className='flex-grid'>
            <aside className="side-col">
              <h1 className='film-heading'>Ghibli Films</h1>
                <ul className='details'>
                   {this.state.ghibli.map((ghibli) => {
                    return <Ghibli key={ghibli.id} data={ghibli} />
                    })}
                </ul>
            </aside>
            <section className="main-col">
                <Route exact path='/movie' component={MovieGif}/>
                <Route path='/movie/description/:id' render={(props) => (
                <Description {...props} data={this.state.ghibli} />)}/>
            </section>
            </main>
        </>
    )
  }
}

export default Movie