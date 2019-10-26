import React from 'react';
import List from './List';
import Details from './Details';
import './App.css';
import TMDB from './TMDB'


function App() {
  return (
  <div className="film-library">
  
  <List db={TMDB}/>

  <Details />
  </div>
  );
}

export default App;