import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/personAction";

class Person extends Component {
  //   state = {
  //     persons: [{ id: 1, name: "luna", age: 26 }],
  //   };
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value * 1;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    console.log(this.props);
    const {
      count: { count },
      persons,
    } = this.props;
    // const { persons } = this.state;
    return (
      <div>
        <h2>Person Component, Total Count Above: {count}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="Name"
        />
        <input ref={(c) => (this.ageNode = c)} type="text" placeholder="Age" />
        <button onClick={this.addPerson}>Submit</button>
        <ul>
          {persons.map((p) => {
            return (
              <li key={p.id}>
                {p.name}--{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    count: state.count,
    // persons: state.persons,
    persons: state.persons,
  }), // mapStateToProps
  { addPerson } //{ addPerson } // mapDispatchToProps
)(Person);
