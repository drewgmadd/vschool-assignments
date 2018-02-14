import React from "react";
import {Carousel} from "react-bootstrap";

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
          <div class="project-image image-one"></div>
          <Carousel.Caption>
              <li>Built in React</li>
              <li>3rd party API Integration</li>
              <li>Thematically Styled</li>
          </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
          <div class="project-image image-two"></div>
          <Carousel.Caption>
              <li>Built in React</li>
              <li>Database with MongoDB</li>
              <li>SPA using React Router</li>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div class="project-image image-three"></div>
          <Carousel.Caption>
              <li>Built in React</li>
              <li>Database with MongoDB</li>
              <li>Bootstrap components</li>
          </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default ProjectCarousel;
