import React, { Component } from "react";

//import action
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/countAction";
//import connect to connect UI component and Redux
import { connect } from "react-redux";

class Count extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    // this.setState({ count: count + 1 });
    this.props.increment();
  };
  decrement = () => {
    this.props.decrement();
  };
  incrementAsync = () => {
    this.props.incrementAsync(1000);
  };
  render() {
    // console.log(this.props);
    const { count } = this.props;
    return (
      <div>
        <h1>Count Component: {count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementAsync}>+ async</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ count: state });

export default connect(mapStateToProps, {
  increment,
  decrement,
  incrementAsync,
})(Count);
