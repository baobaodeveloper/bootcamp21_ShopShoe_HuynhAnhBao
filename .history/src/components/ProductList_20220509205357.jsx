import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    shopList: state.shoeReducer.shopList,
  };
};
class ProductList extends Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}

export default connect(mapStateToProps, null)(ProductList);
