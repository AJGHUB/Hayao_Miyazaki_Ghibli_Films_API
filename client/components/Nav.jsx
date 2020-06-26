import { Link } from 'react-router-dom';
import React from 'react';

export const Navbar = () => {
  return (
    <>
      <header>
        <h1> Hayao Miyazaki </h1> <img src='/Studio_Ghibli_logo.svg' />
      </header>
      <nav className='navbar'>
        <h1>
          <a href='index.html'>
            <i className='home'></i>
          </a>
        </h1>
        <ol className='nav-list'>
          <li className='nav-words'>
            <Link to='/movie'>Movies</Link>
          </li>
          <li className='nav-words'>
            <Link to='/download'>Wallpapers</Link>
          </li>
          <li className='nav-words'>
            <Link to='/fan'>Ghibli Fans</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Navbar;
