import React from "react";
import {Link} from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <p className="contact-title">Contact</p>
      <div className="contact-info">
        <a className="link" href="https://github.com/drewgmadd">
          <i class="fab fa-github"></i>
        </a>
        <a className="link" href="https://www.linkedin.com/in/andrew-madden-340a18a4">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a className="link" href="mailto:andrew12madden@gmail.com" target="_top">
          <i className="fa fa-envelope-square" aria-hidden="true"></i>
        </a>
        <Link className="link" to="/resume">
          <i class="far fa-file-alt"></i>
        </Link>
      </div>
    </div>
  )
}

export default Contact;
