import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const shoeDetail = this.props.shoeDetail;
    if (shoeDetail.length <= 0) return;

    const { name, image } = shoeDetail;
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
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    className="p-2 text-xl text-white bg-red-500"
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <h5
                  className="text-2xl font-semibold text-black modal-title"
                  id="staticBackdropLabel"
                >
                  {name}
                </h5>
                <img className="h-[400px]" src={image} alt="" />
              </div>
              <div className="modal-footer">
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
