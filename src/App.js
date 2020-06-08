import React from "react";
import { Router } from "@reach/router";
import ProgramOverview from "./pages/ProgramOverview";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Team from "./pages/Team";
import Footer from "./components/Footer";


function App() {
  return (
    
    <div>
      <NavBar />
        
        <Router>
          <Home path="/" />
          <ProgramOverview path="/programoverview" />
          <Team path="/team"  />
          <Resources path="/resources" />
          
          <Contact path="/contact" />
        </Router>
      <Footer />
    </div>
    
  );
}

export default App;
