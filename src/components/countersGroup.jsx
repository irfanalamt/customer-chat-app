import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counterValues: [
      { id: 0, value: 5 },
      { id: 1, value: -1 },
      { id: 2, value: 6 },
      { id: 3, value: 78 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counterValues.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
