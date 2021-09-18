import React from "react";
import "./Projects.css";

export function Projects(props) {
  return (
    <div>
      <div id="projects">
        <div id="ticketMain">
          <h3>
            <a href="https://ticketmain.herokuapp.com/">TicketMain</a>
          </h3>
          <hr></hr>
          <div id="projectDescription">
            An e-commerce app with photos, gallery, cart, user, seller and admin
            views. Enhanced with real time search function to improve user
            experience.
          </div>
          <p>Tech Stacks: Node.js, React, Express, PostgreSQL, Axios, Heroku</p>
        </div>

        <div id="Lets Go Back To Work">
          <h3>
            <a href="https://letsgobacktowork.herokuapp.com">
              Lets Go Back To Work
            </a>
          </h3>
          <hr></hr>
          <div id="projectDescription">
            I am currently working on a tool to support <u>Back to Work </u>
            <p>
              This tool is focused on giving employees a portal to login and
              self declare their symptoms daily and upload their vaccination
              status.
            </p>
            <p>
              There will option to also promote self declaration for
              miscellaneous events without requiring registration
            </p>
            <p>
              Tech Stacks: Node.js, React, Express, PostgreSQL, Axios, Heroku
            </p>
          </div>
        </div>

        <div id="manageMyProject">
          <h3>
            <a href="https://managemyproject.herokuapp.com/">
              Manage My Project
            </a>
          </h3>
          <hr></hr>
          <div id="projectDescription">
            This is in my pipeline. This will be designed to take a task and
            users can then link tasks as previous and next making a chain of
            tasks. App is expected to provide best way to complete a project. As
            my app matures, resources consumed and produced by each task will be
            added in.
            <p>
              Tech Stacks: Node.js, React, Express, PostgreSQL, Axios, Heroku
            </p>
          </div>
        </div>

        <div id="theArtCollector">
          <h3>
            <a href="https://jolly-jennings-2c1b94.netlify.app/">
              The Art Collector
            </a>
          </h3>
          <hr></hr>
          <div id="projectDescription">
            A website to showcase artifacts displayed by Harvard Art Museum API
            <p>Tech Stacks: Node.js, React, AJAX, Netlify</p>
          </div>
        </div>

        <div id="laGarage">
          <h3>
            <a href="https://lagarage.herokuapp.com/" alt="La Garage">
              La Garage
            </a>
          </h3>
          <hr></hr>
          <div id="projectDescription">
            A mobile optimized demo website for auto garage.
            <p>
              Tech Stacks: Node.js, React, Express, PostgreSQL, Axios, Heroku
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
