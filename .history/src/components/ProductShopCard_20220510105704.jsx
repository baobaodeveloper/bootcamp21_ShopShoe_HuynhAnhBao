import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    inCreaQty: (item) => {
      dispatch({
        type: "QTY_INCREA_SHOP_CARD",
        item,
      });
    },
    deCreaQty: (item) => {
      dispatch({
        type: "QTY_DECREA_SHOP_CARD",
        item,
      });
    },
  };
};
class ProductShopCard extends Component {
  render() {
    const shopCard = this.props.shopCard;
    console.log(shopCard);
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
                        <th scope="col">Product</th>
                        <th scope="col">Img</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Pay</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {shopCard.length > 0 &&
                        shopCard.map((item, i) => (
                          <tr className="h-9" key={item.id}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>
                              <img
                                className="w-[50px]"
                                src={item.image}
                                alt=""
                              />
                            </td>
                            <td>
                              <div className="flex items-center gap-x-3">
                                <button
                                  onClick={() => this.props.inCreaQty(item)}
                                  className="w-8 h-8 text-lg text-white transition-all bg-blue-700 rounded-lg focus:outline-none hover:scale-105"
                                >
                                  +
                                </button>
                                <span className="px-3 py-2 font-semibold text-black rounded-lg bg-slate-400">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => this.props.deCreaQty(item)}
                                  className="w-8 h-8 text-lg text-white transition-all bg-blue-700 rounded-lg focus:outline-none hover:scale-105"
                                >
                                  -
                                </button>
                              </div>
                            </td>
                            <td>${item.price}</td>
                            <td></td>
                            <td>
                              <button className="py-2 px-3 rounded-lg text-white bg-red-500 font-semibold">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      <tr>
                        <td
                          className="text-xl font-semibold text-green-400"
                          colSpan={4}
                        >
                          Total pay
                        </td>

                        <td className="text-xl text-green-700">
                          $
                          {shopCard.length > 0 &&
                            shopCard.reduce((acc, item) => acc + item.price, 0)}
                        </td>
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

export default connect(null, mapDispatchToProps)(ProductShopCard);
