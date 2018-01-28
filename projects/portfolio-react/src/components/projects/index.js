import React from "react";

function Projects() {
  return (
    <div class="portfolio">
      <p class="portfolio-title">Projects</p>
      <div class="project-block example-one">
        <div class="project-image image-one"></div>
        <ul class="project-details">
          <li>Built in React</li>
          <li>3rd party API Integration</li>
          <li>Thematically Styled</li>
        </ul>
      </div>
      <div class="project-block center">
        <div class="project-image image-two"></div>
          <ul class="project-details">
            <li>Built in React</li>
            <li>Database with MongoDB</li>
            <li>SPA using React Router</li>
          </ul>
      </div>
      <div class="project-block">
        <div class="project-image image-three"></div>
        <ul class="project-details">
          <li>Built in React</li>
          <li>Database with MongoDB</li>
          <li>Bootstrap components</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects;
