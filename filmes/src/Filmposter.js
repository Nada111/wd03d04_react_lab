


import React, { Component } from 'react'

export default class Filmposter extends Component {
    render() {
        let posterPath = `https://image.tmdb.org/t/p/w500${this.props.filmPoster}`
        return (
            <div>
            <img src={posterPath} alt="" />
            
        </div>)
    }
}
