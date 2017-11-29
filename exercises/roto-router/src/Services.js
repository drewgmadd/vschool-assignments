import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

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
          {this.state.services.map(service=><div><Link to={`/services/${service._id}`} key={service._id}>{service.name}</Link><br/></div>)}
        </div>
        <Switch>
          <Route path="/services/:serviceId" component={ServiceDetail}/>
        </Switch>
      </div>
    )
  }
}

export default Services;
