import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Dec 25, 2017',
      newDeadLine: ''
    };
  }

  changeDeadLine() {
    this.setState({ deadline: this.state.newDeadLine });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="DeadLineControl"
            placeholder="new date"
            onChange={event =>
              this.setState({ newDeadLine: event.target.value })}
          />
          <Button onClick={() => this.changeDeadLine()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
