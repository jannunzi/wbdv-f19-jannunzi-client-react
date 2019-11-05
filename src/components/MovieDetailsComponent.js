import React from 'react'

export default class MovieDetailsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review : ''
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState)
        console.log(this.props.review)
        if(prevState.review != this.props.review.review) {
            this.setState({
                review: this.props.review.review
            })
        }
    }

    reviewUpdated = event =>
        this.setState({
            review: event.target.value
        })
    render() {
        return (<div>
            <h2>Movie Details</h2>
            <h3>{this.props.movie.Title}</h3>
            <div className="row">
                <div className="col-sm-6">
                    <img src={this.props.movie.Poster}/>
                </div>
                <div className="col-sm-6">
                <textarea
                    value={this.state.review}
                    onChange={this.reviewUpdated}
                    className="form-control"></textarea>
                    <button
                        onClick={() => this.props.createReview({
                            review: this.state.review,
                            imdbID: this.props.movie.imdbID
                        })}
                        className="btn btn-success btn-block">
                        Add Review
                    </button>
                </div>
            </div>
            <p>
                {this.props.movie.Plot}
            </p>
            <h3>Cast</h3>
            <ul>
                {
                    this.props.movie.Actors.split(',').map(actor =>
                        <li key={actor}>
                            {actor}
                        </li>
                    )
                }
            </ul>
        </div>)
    }
}
