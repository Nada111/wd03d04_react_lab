import React from 'react'
import FilmRow from './FilmRow'
const List = (props) => {
    let allFilms = props.db.films.map( (film, index) => (<FilmRow filmTitle={film.title} 
    filmId={film.id} filmDate={new Date().getFullYear(film.release_date)} filmPoster={film.poster_path}/>));
    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
     
       
            {allFilms}
        </div>
      
        
    )
}

export default List