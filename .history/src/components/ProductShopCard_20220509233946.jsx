import React, { Component } from "react";

export default class ProductShopCard extends Component {
  render() {
    return (
      <div>
        <div>
          <button type="button" className="btn btn-primary">
            Launch static backdrop modal
          </button>
          <div
            className="modal fade"
            id="staticBackdrop1"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
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
                <div className="p-0 modal-footer">
                  <button
                    type="button"
                    className="p-2 bg-blue-300 rounded-lg focus:outline-none"
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
