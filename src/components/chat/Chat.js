import React, { Component } from "react";
import "./chat.css";
import { Message } from "../message";
import { messageicon, orange } from "../../image";

class Chat extends Component {
  state = {
    message: "",
    messageList: []
  };

  handleMessage = e => this.setState({ message: e.target.value });
  sendMessage = async e => {
    e.preventDefault();
    const { message, messageList } = this.state;
    const newMessage = {
      userName: "Eu",
      portrait: orange,
      message,
      displayPortraitLeft: true,
      time: "1 min ago"
    };
    const requestInfo = {
      method: "Post",
      body: JSON.stringify({
        message: newMessage
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    await fetch("http://dev.4all.com:3050/messages", requestInfo);

    this.setState({
      messageList: messageList.concat(newMessage),
      message: ""
    });
  };

  async componentDidMount() {
    const response = await fetch("http://dev.4all.com:3050/messages");
    const messageList = await response.json();
    this.setState({
      messageList
    });
  }
  render() {
    const { messageList, message } = this.state;
    return (
      <div className="container-chat mt-4 rounded" id="container-chat">
        <div className="container-title d-flex flex-row align-items-center">
          <img
            className="icon-message mr-3 ml-3"
            src={messageicon}
            alt="icon message"
          />

          <h2 className="title mt-2">Chat</h2>
        </div>
        <div className="container-messages">
          {messageList.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <div className="container-form mt-3 mb-2">
          <form onSubmit={this.sendMessage} className="form-inline">
            <div className="d-flex flex-row align-items-center container-input form-group mb-2">
              <input
                type="text"
                value={message}
                required
                className="input-message form-control"
                id="inputSend"
                placeholder="Type your message here..."
                onChange={this.handleMessage}
              />
              <button
                type="submit"
                className="button-chat btn"
                id="button-chat"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
