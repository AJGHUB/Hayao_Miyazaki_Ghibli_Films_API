import React from 'react';
import { Link } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <>
      <main className='flex-grid'>
        <div className='landing-col-1'>
          <h3 className='col-font'>Ghibli Fan Links</h3>
          <p>
            <a
              className='col-font'
              href='http://www.ghibli.jp/'
              target='_blank'
            >
              The Ghibli Studio
              <img className='ghibli-totoro' src='/images/ghibli.png' />
            </a>
          </p>
          <p>
            <a
              className='col-font'
              href='http://www.openculture.com/2020/05/a-virtual-tour-inside-the-hayao-miyazakis-studio-ghibli-museum.html'
              target='_blank'
            >
              Ghibli Virtual Tour Museum
              <img className='map' src='/images/map.png' />
            </a>
          </p>
          <p>
            <a
              className='col-font'
              href='https://ghibli.fandom.com/wiki/Ghibli_Wiki'
              target='_blank'
            >
              Ghibli Wiki
              <img className='wiki' src='/images/wiki.png' />
            </a>
          </p>
          <p>
            <a target='_blank' href='https://gkids.com/films/'>
              Ghibli Films
              <img className='gkids' src='/images/gkids.png' />
            </a>
          </p>
        </div>
        <div className='landing-col-2'>
          <h3 className='heading1'> Download Ghibli Wallpapers</h3>
          <Link to='/download'>
            <img
              className='gif-movie'
              src='https://media3.giphy.com/media/CRJqX2pz2RA8E/giphy.gif'
              alt='ghibli door'
            />
          </Link>
        </div>
        <div className='landing-col-3'>
          <h3 className='heading2'>About Ghibli Films</h3>
            <iframe
              className='ghibli-movie'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/8HGjm0Sk8tk'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
        </div>
      </main>
    </>
  );
};

export default Landing;
