import React from "react";

function Contact() {
  return (
    <div class="contact">
      <p class="contact-title">Contact</p>
      <div class="contact-info">
        <a class="link" href="https://github.com/drewgmadd">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a class="link" href="https://www.linkedin.com/in/andrew-madden-340a18a4">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a class="link" href="mailto:andrew12madden@gmail.com" target="_top">
          <i class="fa fa-envelope-square" aria-hidden="true"></i>
        </a>
        <a class="link" href="./images/AndrewMaddenResume.pdf">
          <i class="fa fa-file-text" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact;
