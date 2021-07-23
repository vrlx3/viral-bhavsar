import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Body(props) {
  return (
    <div id="body">
      <div id="text">
        <h3>Thank you for visiting my website</h3>
        <h5>Tech Stacks Used</h5>
        Front End{" "}
        <ul>
          <li>React</li>{" "}
        </ul>
        <p>Back End </p>
        <ul>
          <li>Express</li>
          <li>Node.js</li>
          <li>Heroku</li>
        </ul>
      </div>
      <p>
        The site is using continuous deployment and more updates are scheduled
        soon.
      </p>
      <div id="special">
        I am currently working on an App for managing projects and activites.
      </div>
      <a href="https://managemyproject.herokuapp.com/">Manage My Project</a>
    </div>
  );
}

export { Body };
