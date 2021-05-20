import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/countersGroup";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    counterValues: [
      { id: 0, value: 5 },
      { id: 1, value: -1 },
      { id: 2, value: 6 },
      { id: 3, value: 78 },
    ],
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counterValues];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counterValues: counters });
  };

  handleDelete = (counterID) => {
    console.log("Delete event handler called.", counterID);
    const counterValues = this.state.counterValues.filter(
      (c) => c.id !== counterID
    );
    this.setState({ counterValues });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counterValues];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value -= 2;
    this.setState({ counterValues: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          counterNav={
            this.state.counterValues.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counterValues={this.state.counterValues}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
