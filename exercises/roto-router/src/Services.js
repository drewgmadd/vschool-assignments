import React from "react";
import { Switch, Route, Link } from "react-router-dom";

class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      services: []
    }
  }
  componentDidMount() {
    this.setState({
      services: [
        {
          name: "Repairs",
          price: 75,
          _id: 123
        },
        {
          name: "Full Build",
          price: 300,
          _id: 234
        },
        {
          name: "Re-String",
          price: 20,
          _id: 345
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="services-list:">
          {this.state.services.map(service=>{
            <Link to={`/services/${service.price}`}>{service.name}</Link>
          })}
        </div>
      </div>
    )
  }
}

export default Services;
