import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Home from "./Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      selected: "Not Selected",

      // items array
      items: ["Yes", "Probably Not", "I don't know"],
    };
  }

  // On hovering of the button, show the drop down items function
  handleMouseEnter = () => {
    this.setState({
      isShow: true,
    });
  };

  // On click of an option in dropdown list, close the dropdown function
  handleOnClick = (item) => {
    this.setState({
      isShow: false,
      selected: item,
    });
  };

  render() {
    return (
      <div className="app">
        <Home
          isShow={this.state.isShow}
          handleMouseEnter={this.handleMouseEnter}
        />
        {this.state.isShow ? (
          <Dropdown
            items={this.state.items}
            handleOnClick={this.handleOnClick}
          />
        ) : (
          ""
        )}
        <h3 className="ans-p">Ans. {this.state.selected}</h3>
      </div>
    );
  }
}
