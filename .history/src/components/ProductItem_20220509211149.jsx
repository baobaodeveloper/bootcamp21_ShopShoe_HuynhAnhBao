import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image, name } = this.props.item;

    return (
      <div className="p-4">
        <div className="max-w-[400px] h-[300px] w-full">
          <img className="object-cover w-full h-full" src={image} alt="" />
          <h3 className="text-xl font-semibold text-center">{name}</h3>
        </div>
      </div>
    );
  }
}
