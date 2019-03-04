import React, { Component } from "react";
import "./main.css";
import { Box, Chat, Graphic } from "../../components";

class Main extends Component {
  render() {
    return (
      <div className="main-container" id="main-container">
        <h1 className="dashboard" id="dashboard">
          Dashboard
        </h1>

        <Box />
        <Graphic />
        <Chat />
      </div>
    );
  }
}

export default Main;
