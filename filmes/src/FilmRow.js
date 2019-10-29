
import FilmPoster from './Filmposter'
import Fave from './Fave'

import React, { Component } from 'react'

export default class FilmRow extends Component {

  handleDetailsClick(film){
    console.log( " Fetching Details " +film);
        
  }
  render() {
    
      return (
        <div className="film-row" onClick={()=>this.handleDetailsClick(' filmssss')}>
          <FilmPoster filmPoster={this.props.filmPoster}/>
        
          <div className="film-summary">
            <Fave onClick={this.onFaveToggle} /> 
            <h1>{this.props.filmTitle}</h1>
            <p>{this.props.filmDate}</p>
          </div>
        </div>
      
    )
  }
}
