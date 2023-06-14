import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import HomeFunctional from "./routes/home/home.component";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <HomeFunctional />
      </Fragment>
    );
  }
}

export default App;