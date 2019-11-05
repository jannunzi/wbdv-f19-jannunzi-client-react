import React from 'react'
import MovieListComponent from "../components/MovieListComponent";
import MovieDetailsComponent from "../components/MovieDetailsComponent";

export class OmdbApiPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            movie: {
                Title: '',
                Actors: ''
            },
            review: {
                review: ''
            }
        }
    }
    componentDidMount() {
        console.log("Component Did Mount")
        this.findMovieByTitle("batman")

    }

    createReview = review =>
        fetch("http://localhost:8080/api/reviews", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(response => response.json())
            .then(review => console.log(review))

    searchMovie = searchTitleChanged =>
        this.findMovieByTitle(searchTitleChanged)

    findMovieByTitle = title =>
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
        .then(response => response.json())
        .then(response => {
            console.log(response.Search)
            this.setState({
                movies: response.Search
            })
        })

    selectMovie = imdbID =>
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(movie => {
                console.log(movie)
                this.setState({
                    movie: movie
                })

                fetch(`http://localhost:8080/api/review/${imdbID}`)
                    .then(response => response.json())
                    .then(review => {
                        console.log(review)
                        this.setState({
                            review: review
                        })
                    })

            })

    render() {
        return(
            <div>
                <h1>Omdb API Prototype</h1>

                <div className="row">
                    <div className="col-xl-6">
                        <MovieListComponent
                            selectMovie={this.selectMovie}
                            searchMovie={this.searchMovie}
                            movies={this.state.movies}/>
                    </div>
                    <div className="col-xl-6">
                        <MovieDetailsComponent
                            review={this.state.review}
                            createReview={this.createReview}
                            movie={this.state.movie}/>
                    </div>
                </div>

            </div>
        )
    }
}