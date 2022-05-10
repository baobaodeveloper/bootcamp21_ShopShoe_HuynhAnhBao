import React, { Component } from "react";
import { connect } from "react-redux";
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
      <div className="p-10">
        <h1 className="my-10 text-5xl font-semibold text-center text-blue-600">
          Shop shoe
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {shoeList.length > 0 &&
            shoeList.map((item) => (
              <ProductItem key={item.id} item={item}></ProductItem>
            ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ProductList);
