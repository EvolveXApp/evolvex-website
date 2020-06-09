import React from "react";
import { Router } from "@reach/router";
import ProgramOverview from "./pages/ProgramOverview";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Team from "./pages/Team";



function App() {
  return (
    
    <div>
      
        
        <Router>
          <Home path="/" />
          <ProgramOverview path="/programoverview" />
          <Team path="/team"  />
          <Resources path="/resources" />
          
          <Contact path="/contact" />
        </Router>
     
    </div>
    
  );
}

export default App;
