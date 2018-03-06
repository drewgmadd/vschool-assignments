import React from "react";
import {Link} from "react-router-dom"

function Links() {
  return (
    <div>
      <div className="link">
        <Link to="/background">
          <i class="far fa-newspaper"></i>
          <p>Background</p>
        </Link>
      </div>
      <div className="link">
        <Link to="/methods">
          <i class="fas fa-calculator"></i>
          <p>Methods</p>
        </Link>
      </div>
      <div className="link">
        <Link to="/results">
          <i class="fas fa-chart-line"></i>
          <p>Results</p>
        </Link>
      </div>
      <div className="link">
        <Link to="/discussion">
          <i class="far fa-comment-alt"></i>
          <p>Discussion</p>
        </Link>
      </div>
    </div>
  )
}

export default Links;
