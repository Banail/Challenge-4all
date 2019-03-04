import React, { Component } from "react";
import "./box.css";
import { chat, domainRegistration, shoppingBag, user } from "../../image";

class Box extends Component {
  state = {
    boxValue: ""
  };
  formatViewsQuantity = views =>
    views >= 1000 ? `${(views / 1000).toFixed(1)}K` : views;

  async componentDidMount() {
    const response = await fetch("http://dev.4all.com:3050/widgets");
    const boxValue = await response.json();
    this.setState({
      boxValue
    });
  }
  render() {
    const { boxValue } = this.state;
    return (
      <div className="container-box">
        <div className="box" id="box1">
          <div
            className="orders d-flex justify-content-center align-items-center icon-container"
            id="container-orders"
          >
            <img className="icons" src={shoppingBag} alt="shopping bag" />
          </div>
          <div className="text-box">
            <p className="quantity" id="orders">
              {boxValue.newOrders}
            </p>
            <p className="description">New Orders</p>
          </div>
        </div>
        <div className="box" id="box2">
          <div
            className="comments d-flex justify-content-center align-items-center icon-container"
            id="container-comments"
          >
            <img className="icons" src={chat} alt="comments" />
          </div>
          <div className="text-box">
            <p className="quantity" id="comments">
              {boxValue.comments}
            </p>
            <p className="description">Comments</p>
          </div>
        </div>
        <div className="box" id="box3">
          <div
            className="users d-flex justify-content-center align-items-center icon-container"
            id="container-users"
          >
            <img className="icons" src={user} alt="users" />
          </div>
          <div className="text-box">
            <p className="quantity" id="users">
              {boxValue.newUsers}
            </p>
            <p className="description">New Users</p>
          </div>
        </div>
        <div className="box" id="box4">
          <div
            className="views d-flex justify-content-center align-items-center icon-container"
            id="container-views"
          >
            <img
              className="icons"
              src={domainRegistration}
              alt="domain registration"
            />
          </div>
          <div className="text-box">
            <p className="quantity" id="views">
              {this.formatViewsQuantity(boxValue.pageViews)}
            </p>
            <p className="description">Page Views</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
