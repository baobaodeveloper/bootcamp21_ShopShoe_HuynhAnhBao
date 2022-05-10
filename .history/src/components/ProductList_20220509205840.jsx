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
      <div className="grid grid-cols-4 gap-5">
        {shoeList.length > 0 &&
          shoeList.map((item) => (
            <ProductItem key={item.id} item={item}></ProductItem>
          ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ProductList);
