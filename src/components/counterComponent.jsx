import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  handleIncrement = () => {
    console.log("Increment button Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "btn m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
