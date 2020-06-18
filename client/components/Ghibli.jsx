import React from 'react'
import { Link } from 'react-router-dom'

class Ghibli extends React.Component {
  
  render() {
    const ghibli = this.props.data
    
    return (
      <div className="filmName">
         <li><Link to={`/movie/description/${ghibli.id}`}>{ghibli.title}</Link></li>
      </div>
    )
  }
}

// id: "dc2e6bd1-8156-4886-adff-b39e6043af0c"
// title: "Spirited Away"
// description: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?"
// director: "Hayao Miyazaki"
// producer: "Toshio Suzuki"
// release_date: "2001"
// rt_score: "97"

export default Ghibli