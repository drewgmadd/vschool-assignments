import React from "react";

function LabelImage() {
  return (
    <div className="labeled-uke">
      <div className="tuners">
        <h4>Tuners</h4>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </div>
      <div className="marker-dots">
        <h4>Marker Dots</h4>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </div>
      <div className="rosette">
        <h4>Rosette</h4>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </div>
      <img className="uke-image" src="http://thehub.musiciansfriend.com/images/ukulele/DV016_Jpg_Large_519269_R.jpg" alt="example"/>
      
    </div>

  )
}

export default LabelImage;
