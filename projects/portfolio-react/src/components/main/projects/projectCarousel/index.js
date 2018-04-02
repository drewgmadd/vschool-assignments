import React from "react";
import {Carousel} from "react-bootstrap";

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
          <div className="project-image image-one"></div>
          <Carousel.Caption>
              <h4>ISS Locator</h4>
              <li>Built in React</li>
              <li>Multiple 3rd party API's</li>
              <li>Thematically Styled</li>
              <li>Multi-view SPA</li>
              <a href="silly-space-things.surge.sh"><button>Go</button></a>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div className="project-image image-two"></div>
          <Carousel.Caption>
              <h4>Student Management App</h4>
              <li>Built in React</li>
              <li>Database with MongoDB</li>
              <li>SPA using React Router</li>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div className="project-image image-three"></div>
          <Carousel.Caption>
            <h4>Actor Database and Profiles</h4>
              <li>Built in React</li>
              <li>Database with MongoDB</li>
              <li>Bootstrap components</li>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProjectCarousel;
