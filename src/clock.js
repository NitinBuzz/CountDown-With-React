import React, { Component } from 'react';
import './App';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    console.log(this.props);
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
    console.log(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    console.log(time, days);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div>
        <div className="days">{this.leading0(this.state.days)} days</div>
        <div className="hours">{this.leading0(this.state.hours)} hours</div>
        <div className="minutes">
          {this.leading0(this.state.minutes)} minutes
        </div>
        <div className="seconds">
          {this.leading0(this.state.seconds)} seconds
        </div>
      </div>
    );
  }
}

export default Clock;
