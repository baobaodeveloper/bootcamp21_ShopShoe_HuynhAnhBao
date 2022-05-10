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
      <div>
        {shoeList.length > 0 &&
          shoeList.map((item) => <ProductItem key={item.id}></ProductItem>)}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ProductList);
