import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image } = this.props.item;

    return (
      <div className="p-4">
        <div className="w-full h-[200px]">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
      </div>
    );
  }
}
