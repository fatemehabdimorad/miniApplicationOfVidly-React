import React, { Component } from "react";

import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
// import Logout from './components/common/logout';
// import auth from "./services/authService";
// import ProtectedRoute from "./components/common/protectedRoute";
import Register from "./components/register";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import MovieFormNew from "./components/newMovie";

class App extends Component {
  state = {};
  // componentDidMount() {
  // const user=auth.getCurrentUser();
  //  this.setState({ user });
  // }
  render() {
    // const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
        // user={user}
        />
        <div className="container m-3">
          <Routes>
            <Route path="/newMovie" element={<MovieFormNew />} />
            {/* <Route
              path="/newMovie"
              render={(props) => {
                if (!user) <Redirect to="/login" />;
                return <MovieFormNew {...props} />;
              }}
            /> */}
            {/* after making ProtectedRoute component:
             <ProtectedRoute
              path="/newMovie"
            Componen={ MovieFormNew}  /> */}
            <Route path="/movies/:id" element={<MovieForm />} />
            <Route path="/movies" element={<Movies />} />
            {/* <Route path="/movies" render={(props) => <Movies {...props} user={user} />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Movies />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
