import React, { Component } from "react";
import "./message.css";

class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <div
        className={
          message.displayPortraitLeft
            ? "box-message d-flex flex-row mt-4"
            : "box-message d-flex flex-row mt-4 justify-content-between"
        }
        id="box-message"
      >
        <div
          className={
            message.displayPortraitLeft ? "d-flex order-1" : "d-flex order-2"
          }
        >
          <img
            className="image-profile rounded-circle"
            src={message.portrait}
            alt="portrait"
          />
        </div>
        <div
          className={
            message.displayPortraitLeft
              ? "d-flex flex-column order-2"
              : "d-flex flex-column order-1"
          }
        >
          <div className="d-flex flex-row mb-2">
            <p className="name" id="name">
              {message.userName}
            </p>
            <p className="time" id="time">
              {message.time}
            </p>
          </div>

          <p className="text-message" id="message">
            {message.message}
          </p>
        </div>
      </div>
    );
  }
}
export default Message;
