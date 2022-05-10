import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image, name } = this.props.item;

    return (
      <div className="p-4">
        <div className="max-w-[400px] h-full w-full">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
        <h3>{name}</h3>
      </div>
    );
  }
}