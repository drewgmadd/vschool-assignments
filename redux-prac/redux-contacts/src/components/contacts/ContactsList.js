import React, {Component} from "react";
import {connect} from "react-redux";
import {getAllTodos} from "../../redux/contacts";

class ContactsList extends Component {
  componentDidMount() {
    this.props.getAllTodos();
  }
  render() {
    console.log(this.props.contacts)
    const contacts = this.props.contacts.map(
      (contact, i) => <li key={contact.name+i}>{contact.description}</li>)
    return (
      <ul>
        {contacts}

      </ul>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getAllTodos})(ContactsList)
