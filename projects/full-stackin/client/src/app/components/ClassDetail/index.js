import React from "react";


import TeachingTools from "./TeachingTools";
import StudentList from "./StudentList";
import "./classDetail.css";

function ClassDetail(){
    return (
      <div>
        <StudentList/>
        <TeachingTools/>
      </div>
    )
}


export default ClassDetail;
