import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./Header/Header";
import { Body } from "./Body/Body";

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export { App };
