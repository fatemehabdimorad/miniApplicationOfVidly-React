import React, { Component } from "react";
import Form from "./common/form";
import { getMovie, saveMovie } from "./../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";
import Joi from "joi-browser";
import movieId from "./common/useableParams";

class MovieFormNew extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
  };

  // componentDidMount() {
  //   // const { movieId } = useParams();
  //   const genres = getGenres();
  //   this.setState({ genres });
  //   // const movieId = this.props.match.params.id;
  //   if (movieId === "new") return;
  //   const movie = getMovie(movieId);
  //   if (!movie) return this.props.history.replace("/not-found");

  //   this.setState({ data: this.mapToviewModel(movie) });
  // }
  // ////after adding genreservice and movie servieces instead of fake one:
  //
  //

  // async populateGenres() {
  //   const { data: genres } = await getGenres();
  //   this.setState({ genres });
  // }
  // async populateMovie() {
  //   try {
  //     const movieId = this.props.match.params.id;
  //     if (movieId === "new") return;
  //     const { data: movie } = await getMovie(movieId);

  //     this.setState({ data: this.mapToviewModel(movie) });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404) this.props.history.replace("/not-fond");
  //   }
  // }
  // async componentDidMount() {
  //await this.populateGenres();
  // /await this.populateMovie();
  // }

  // mapToviewModel(movie) {
  //   return {
  //     _id: movie._id,
  //     title: movie.title,
  //     genreId: movie.genre._id,
  //     numberInStock: movie.numberInStock,
  //     dailyRentalRate: movie.dailyRentalRate,
  //   };
  // }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  // async doSubmit = () => {
  //   await saveMovie(this.state.data);
  //   this.props.history.push("/movies");
  // };
  render() {
    return (
      <div>
        <h1>Movie Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("movieName", "MovieName")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieFormNew;
