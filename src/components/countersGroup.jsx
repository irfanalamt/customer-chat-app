import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counterValues.map((c) => (
          <Counter
            key={c.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
