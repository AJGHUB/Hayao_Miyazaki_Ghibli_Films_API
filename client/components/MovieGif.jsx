import React from 'react';

function MovieGif() {
  return (
    <>
      <div className='image-container'>
        <img
          className='img-gif'
          width='40%'
          src='https://media0.giphy.com/media/nsi0IQvbQ9c64/giphy.gif?cid=ecf05e470e32b744433b715aec44ea7b55ef51da78864919&rid=giphy.gif'
        />
      </div>
      <div className='image-container'>
        <img
          className='img-gif'
          width='40%'
          src='https://media2.giphy.com/media/Hws7aKoFHS9gs/giphy.gif'
        />
      </div>
    </>
  );
}

export default MovieGif;
