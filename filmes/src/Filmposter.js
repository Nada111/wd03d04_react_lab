import React from 'react'

const Filmposter = (props) => {
    let posterPath = `https://image.tmdb.org/t/p/w500${props.filmPoster}`
    return (
        <div>
            <img src={posterPath} alt="" />
            
        </div>
    )
}

export default Filmposter