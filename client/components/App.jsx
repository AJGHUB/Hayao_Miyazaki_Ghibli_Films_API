import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import Movie from './Movie';
import Download from './Download';
import Nav from './Nav';
import Fan from './Fan';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Landing} />
        <Route path='/movie' component={Movie} />
        <Route path='/download' component={Download} />
        <Route path='/fan' component={Fan} />
      </Router>
    );
  }
}

export default App;

//TODO LINKS
//http://www.ghibli.jp/
//http://www.ghibli-museum.jp/en/
//https://ghibli.fandom.com/wiki/Ghibli_Wiki
//https://gkids.com/films/
