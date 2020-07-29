import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "./store/actions/moviesAction";
import Home from "../src/components/Pages/Home";
import Movies from "../src/components/Pages/Movies";
import CurrentMovieDetails from "../src/components/Pages/CurrentMovieDetails";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Movies" component={Movies}></Route>
          <Route path="/CurrentMovieDetails" component={CurrentMovieDetails}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         {/* <Home /> */}
//         <div className="App">
//           <ul className="App-header">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/Movies">Movies</Link>
//             </li>
//             <li>
//               <Link to="/CurrentMovieDetails">CurrentMovieDetails</Link>
//             </li>
//           </ul>
//           <Switch>
//             <Route exact path="/" component={Home}></Route>
//             <Route exact path="/Movies" component={Movies}></Route>
//             <Route exact path="/CurrentMovieDetails" component={CurrentMovieDetails}></Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }
// export default App;
