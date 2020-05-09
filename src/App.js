import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgramOverview from "./pages/ProgramOverview";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

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
          <Route path="/applicationForm" component={ApplicationForm} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
