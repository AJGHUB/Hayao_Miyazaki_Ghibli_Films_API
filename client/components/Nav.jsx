import { Link } from 'react-router-dom';
import React from 'react';

export const Navbar = () => {
  return (
    <>
      <header>
        <h1> Hayao Miyazaki </h1>{' '}
        <img className='logo' src='/Studio_Ghibli_logo.svg' />
      </header>
      <nav className='navbar'>
        {' '}
        <Link to='/'>
          <img className='home-icon' src='/images/home-icon.png' />
        </Link>
        <h1>
          <a href='index.html'>
            <i className='home'></i>
          </a>
        </h1>
        <table className='list'>
          <thead>
            <tr className='list-item'>
              <td>
                <Link to='/movie'>Movies</Link>
              </td>
              <td>
                <Link to='/download'>Wallpapers</Link>
              </td>
            </tr>
          </thead>
        </table>
      </nav>
    </>
  );
};

export default Navbar;
