import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const shoeDetail = this.props.shoeDetail;
    if (shoeDetail.length <= 0) return;

    const { name, image, price, quantity, description } = shoeDetail;
    return (
      <div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="flex items-center justify-between h-full modal-dialog">
            <div className="modal-content">
              <div className="p-0 border-b-0 modal-header">
                <button
                  type="button"
                  className="p-4 opacity-100 focus:outline-none close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    className="px-3 py-2 text-xl leading-10 text-white bg-green-500 rounded-lg "
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
              </div>
              <div className="flex flex-col items-center justify-center modal-body">
                <h5
                  className="text-2xl font-semibold text-center text-black modal-title"
                  id="staticBackdropLabel"
                >
                  {name}
                </h5>
                <img className="h-[300px]" src={image} alt="" />

                <div className="flex items-center justify-center gap-x-5">
                  <span className="px-3 py-2 font-semibold text-black rounded-lg bg-slate-400">
                    Price: ${price}
                  </span>

                  <div className="flex items-center gap-x-3">
                    <button className="w-8 h-8 text-lg text-white bg-blue-700 rounded-lg focus:outline-none">
                      +
                    </button>
                    <span className="px-3 py-2 font-semibold text-black rounded-lg bg-slate-400">
                      1
                    </span>
                    <button className="w-8 h-8 text-lg text-white bg-blue-700 rounded-lg focus:outline-none">
                      -
                    </button>
                  </div>
                </div>

                <p className="mt-4 text-center ">{description}</p>
              </div>
              <div className="p-2 border-t-0 modal-footer">
                <button className="px-4 py-2 font-semibold text-white transition-all bg-red-400 rounded-lg outline-none hover:text-red-400 hover:bg-slate-500 hover:scale-105 focus:outline-none">
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
