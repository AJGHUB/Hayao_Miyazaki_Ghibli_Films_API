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
            <i className='fas fa-code'></i>Ghibli Magic!
          </a>
        </h1>
        <ul>
          <li>
            <Link to='/movie'>Movies</Link>
          </li>
          <li>
            <Link to='/download'>Wallpapers</Link>
          </li>
          <li>
            <Link to='/fan'>Ghibli Fans</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
