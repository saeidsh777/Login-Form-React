import "./Counter.css";
import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifi: ["counter", "button", "li"],
      value: "",
    };
  }

  keyID = 0;

  changeValue(e){
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <header>
        <ul>
          <li>
            <h1>HOME</h1>
          </li>
          {this.state.notifi.length > 0 && (
            <li className="new">
              NEW <sup>{this.state.notifi.length}</sup>
              <ul className="drop-down">
                {this.state.notifi.map((item) => (
                  <li key={(this.keyID += 1)}>{item}</li>
                ))}
              </ul>
            </li>
          )}
          <li>
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.changeValue(e)}
            />
          </li>
        </ul>
        <h3>{this.state.value}</h3>
        <select name="" id="">
          <option value="">1</option>
          <option value="2">2</option>
        </select>
      </header>
    );
  }
}
