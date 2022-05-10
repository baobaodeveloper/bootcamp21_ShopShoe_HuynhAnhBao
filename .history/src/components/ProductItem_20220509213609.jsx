import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image, name } = this.props.item;

    return (
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg ">
        <div className="max-w-[400px]  w-full mb-10">
          <img className="object-cover w-full h-[300px]" src={image} alt="" />
          <h3 className="text-xl font-semibold text-center">{name}</h3>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              data-toggle="modal"
              data-target="#staticBackdrop"
              className="px-4 py-2 font-semibold text-white transition-all bg-green-400 rounded-lg outline-none hover:text-green-400 hover:bg-slate-500 hover:scale-105"
            >
              Show detail
            </button>
            <button className="px-4 py-2 font-semibold text-white transition-all bg-red-400 rounded-lg outline-none hover:text-red-400 hover:bg-slate-500 hover:scale-105">
              Add to card
            </button>
          </div>
        </div>
      </div>
    );
  }
}
