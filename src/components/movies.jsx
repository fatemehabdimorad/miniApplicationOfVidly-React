import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox";
import MoviesTable from "./movieTable";
import { getMovies, deleteMovie } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";
import { paginate } from "../utils/paginate";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import _ from "lodash";
import MovieFormNew from "./newMovie";
// import { deleteMovie } from "../services/movieService";
// import Button from "./common/button";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    // const {data} =await getGenres();
    const genres = [{ _id: "", name: "All Movies" }, ...getGenres()];
    // const {data:movies} =await getMovies();
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    //   return this.state.movies.splice(movie.indexof(movie._id));

    try {
      deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) toast.error("This movie has already been deleted");
      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (movie) => {
    console.log("like clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      //
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) filtered = allMovies.filter((m) => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    //
    else if (selectedGenre && selectedGenre._id) filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    // const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: movies } = this.getPagedData();
    const { user } = this.props;

    if (totalCount === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <div className="row ">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              // textProperty="name" valueProperty="_id"
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <h1>HEllO MY TALENTED MINA</h1>
            {user && (
              <Link className="btn btn-primary clickable linkClass" to="/newMovie">
                New Movie
              </Link>
            )}
            <h3>{this.state.movies.length !== 0 ? `Showing ${totalCount} movies in the database` : `There is no movie in the database`}</h3>

            <SearchBox value={searchQuery} onChange={this.handleSearch} />

            <MoviesTable movies={movies} sortColumn={sortColumn} onSort={this.handleSort} onLike={this.handleLike} onDelete={this.handleDelete} />

            <Pagination pageSize={pageSize} currentPage={currentPage} itemsCount={totalCount} onPageChange={this.handlePageChange} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
