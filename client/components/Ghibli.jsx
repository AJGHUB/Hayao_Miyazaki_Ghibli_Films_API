import React from 'react';
import { Link } from 'react-router-dom';

class Ghibli extends React.Component {
  render() {
    const ghibli = this.props.data;

    return (
      <div className='film-name'>
        <li>
          <Link to={`/movie/description/${ghibli.id}`}>{ghibli.title}</Link>
        </li>
      </div>
    );
  }
}

export default Ghibli;
