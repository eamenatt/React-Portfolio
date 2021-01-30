import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import { StoreProvider } from "./utils/GlobalState";



function App() {
  return (
    <Router>
      <div>
          <StoreProvider>
            <Switch>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path={["/home", "/"]}>
                <Home />
              </Route>
            </Switch>
          </StoreProvider>

        </div>
    </Router>
  )
}

export default App;
