import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image, name } = this.props.item;

    return (
      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-300">
        <div className="max-w-[400px]  w-full mb-10">
          <img className="object-cover w-full h-[300px]" src={image} alt="" />
          <h3 className="text-xl font-semibold text-center">{name}</h3>

          <div>
            <button className="px-4 py-2 font-semibold text-white bg-green-400 rounded-lg outline-none">
              Show detail
            </button>
            <button></button>
          </div>
        </div>
      </div>
    );
  }
}
