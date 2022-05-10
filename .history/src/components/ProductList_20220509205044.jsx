import React, { Component } from "react";

const mapStateToProps = (state) => {
  return {
    shopList: state.shoeReducer.shopList,
  };
};
class ProductList extends Component {
  render() {
    console.log(this.props.shopList);
    return <div></div>;
  }
}

export default ProductList;
