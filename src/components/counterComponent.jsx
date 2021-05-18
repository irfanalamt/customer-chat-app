import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>
              <h1>{tag}</h1>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
