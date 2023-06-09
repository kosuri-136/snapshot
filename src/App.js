import PhotoContextProvider from "./context/PhotoContext";
import React, { Component } from "react";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
// import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Container from "./components/Container";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
 

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/mountain">
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />

              <Route
                path="/mountain"
                render={() => <Container searchTerm="mountain" />}
              />
              <Route path="/beach" render={() => <Container searchTerm="beach" />} />
              <Route path="/birds" render={() => <Container searchTerm="bird" />} />
              <Route path="/food" render={() => <Container searchTerm="food" />} />
              <Route path="/MARVELHEROS" render={() => <Container searchTerm="MARVELHEROS" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;