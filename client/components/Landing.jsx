import React from 'react';
import { Link } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <>
      <main className='flex-grid'>
        <div className='landing-col-1'>
          <h3>Ghibli Fan Links</h3>
          <p><a target="_blank" href="http://www.ghibli.jp/">ghibli.jp</a></p> 
          <p><a target="_blank" href="http://www.ghibli-museum.jp/en/">ghibli museum</a></p>
          <p><a target="_blank" href="https://ghibli.fandom.com/wiki/Ghibli_Wiki">Ghibli wiki</a></p>
          <p><a target="_blank" href="https://gkids.com/films/">ghibli films</a></p>
        </div>
        <div className='landing-col-2'>
          <Link to='/download'>Ghibli Wallpapers to Download</Link>
        </div>
        <div className='landing-col-3'>
          <Link to='/movie'>Click to see Ghibli Movies</Link>
          <Link to='/movie'><img src="https://media3.giphy.com/media/CRJqX2pz2RA8E/giphy.gif" width="100%" height="100%" alt="ghibli door"/></Link>
        </div>
      </main>
    </>
  );
};

export default Landing;
