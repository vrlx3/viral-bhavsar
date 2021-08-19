import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Projects } from "./Projects/Projects";

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <Body />
        <Projects />
      </div>
    </Router>
  );
}

export { App };
