import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgramOverview from "./pages/ProgramOverview";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/programoverview" component={ProgramOverview} />
          <Route path="/team" component={Team} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
