import React from 'react'
import { Link } from 'react-router-dom'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'


export const Landing = () => {        
    return (
        <>
          <div className='landing-col-1'>   
          </div>
          <div className='landing-col-2'>
            <Link to='/download'>Ghibli Wallpapers to Download</Link>
          </div>
          <div className='landing-col-3'>
            <Link to='/movie'>Ghibli Movies</Link>
          </div>
        </>
    )
  };

export default Landing