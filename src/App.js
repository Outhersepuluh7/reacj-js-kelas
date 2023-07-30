import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./main/Home";
import Navbar from "./main/index";
import About from './main/About';
import Contact from './main/Contact';
import Footer from './main/footer';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          <Switch>

            <Route path="*">
              <Navbar />
              <Home />
              <About />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
}

