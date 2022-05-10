import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    shopList: state.shoeReducer.shopList,
  };
};
class ProductList extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps, null)(ProductList);
