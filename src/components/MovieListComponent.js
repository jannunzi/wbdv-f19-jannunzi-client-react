import React from 'react'

export default class MovieListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: ''
        }
    }

    searchTitleChanged = event =>
        this.setState({
            searchTitle: event.target.value
        })

    render() {
        return(<div>
            <h2>Movie List ({this.props.movies.length})</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={this.searchTitleChanged}
                        value={this.state.searchTitle}
                        className="form-control"/>
                    <button
                        onClick={() => this.props.searchMovie(this.state.searchTitle)}
                        className="btn btn-primary">Search</button>
                </li>
                {
                    this.props.movies.map(movie =>
                        <li onClick={() => this.props.selectMovie(movie.imdbID)}
                            className="list-group-item"
                            key={movie.imdbID}>
                            <img height="40px" src={movie.Poster}/>
                            {movie.Title}
                        </li>
                    )
                }
            </ul>
        </div>)
    }
}
