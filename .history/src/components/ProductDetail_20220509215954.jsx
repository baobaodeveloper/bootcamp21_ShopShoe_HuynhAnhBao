import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const shoeDetail = this.props.shoeDetail;
    // if (!shoeDetail) return;
    // const { name } = shoeDetail;
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
                <h5 className="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">...</div>
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
