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
            <div className="modal-dialog max-w-[900px]">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="text-2xl font-semibold modal-title"
                    id="staticBackdropLabel"
                  >
                    Shopping Card
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
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Produc</th>
                        <th scope="col">Img</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Pay</th>
                        <th scope="col">Total pay</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-2 border-t-0 modal-footer">
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
