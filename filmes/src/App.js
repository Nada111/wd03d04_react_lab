
import List from './List';
import Details from './Details';
import './App.css';
import TMDB from './TMDB'



import React, { Component } from 'react'

export default class App extends Component {
  state={
films: TMDB.films,
faves: [],
current: {}
  }
  handleFaveToggle=(film)=>{
    const faves=this.state.faves.slice();
    const filmIndex= faves.indexOf()
    if(filmIndex!=-1)
    console.log("Adding [FILM NAME] from faves...")
    else
    console.log("Removing [FILM NAME] from faves...")
  }
  render() {
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    return (
      <div className="film-library">
  
  <List db={this.state.films}/>

  <Details film={this.state.films}/>
  </div>
    )
  }
}
