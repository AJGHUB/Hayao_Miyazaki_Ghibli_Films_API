import React from 'react'
import { Link } from 'react-router-dom'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'


class Landing extends React.Component {
           

render() {

    return (
        <>
          <div className='landing-col'>
            <Link to='/movie'>Ghibli Movies</Link>
          </div>
          <div className='landing-col'>.</div>
          <div className='landing-col'>.</div>
        </>
    )
  }
}







export default Landing