import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";

const mapStateToProps = (state) => {
  return {
    shoeList: state.shoeReducer.shoeList,
  };
};
class ProductList extends Component {
  render() {
    const shoeList = this.props.shoeList;

    return (
      <div className="px-10 page-container">
        <h1 className="my-10 text-5xl font-semibold text-center text-blue-600">
          Shop shoe
        </h1>
        <div className="grid grid-cols-3 gap-10">
          {shoeList.length > 0 &&
            shoeList.map((item) => (
              <ProductItem key={item.id} item={item}></ProductItem>
            ))}
        </div>
        <ProductDetail></ProductDetail>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ProductList);
