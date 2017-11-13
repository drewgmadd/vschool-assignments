import React from "react";
import Component from "./Component";

function App() {
  return (
    <div>
      <Component title="First Box" subTitle="First Sub-Title"
        background="#9BFAC0" info="Text description for first green box"/>
      <Component title="Second Box" subTitle="First Sub-Title"
        background="#203332" info="A description of the next darker green"/>
      <Component title="Third Box" subTitle="First Sub-Title"
        background="#98E3CB" info="Here we go with a little lighter green"/>
      <Component title="Fourth Box" subTitle="First Sub-Title"
        background="#609B67" info="Wow this one is quite green"/>
      <Component title="Fifth Box" subTitle="First Sub-Title"
        background="#9BFAC0" info="Looks a lot like the first green"/>
      <Component title="Sixth Box" subTitle="First Sub-Title"
        background="#9EB2CC" info="Switchin it up with some purple"/>
      <Component title="Seventh Box" subTitle="First Sub-Title"
        background="#3E344C" info="A description of a deep purple"/>
      <Component title="Eighth Box" subTitle="First Sub-Title"
        background="#A0A2FF" info="A purple that is almost blue"/>
      <Component title="Ninth Box" subTitle="First Sub-Title"
        background="#5D3163" info="This is real purple"/>
      <Component title="Tenth Box" subTitle="First Sub-Title"
        background="#964065" info="Ending with a bit of a pink"/>
    </div>
  )
}

export default App;
