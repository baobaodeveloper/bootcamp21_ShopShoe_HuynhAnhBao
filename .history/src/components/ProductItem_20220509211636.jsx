import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image, name } = this.props.item;

    return (
      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-300">
        <div className="max-w-[400px] h-[300px] w-full mb-10">
          <img className="object-cover w-full h-full" src={image} alt="" />
          <h3 className="text-xl font-semibold text-center">{name}</h3>

          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    );
  }
}
