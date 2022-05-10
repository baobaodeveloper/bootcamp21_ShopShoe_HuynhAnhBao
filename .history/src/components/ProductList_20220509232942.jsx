import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";

const mapStateToProps = (state) => {
  return {
    shoeList: state.shoeReducer.shoeList,
    shoeDetail: state.shoeReducer.shoeDetail,
  };
};
class ProductList extends Component {
  render() {
    console.log(this.props);
    const shoeList = this.props.shoeList;

    return (
      <div className="px-10 page-container">
        <div className="relative flex items-center mt-5 w-full max-w-[20px] ml-auto ">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <span className="absolute right-0 flex items-center justify-center w-8 h-8 text-xl text-white bg-red-400 rounded-full -top-4">
            3
          </span>
        </div>
        <h1 className="my-10 text-5xl font-semibold text-center text-blue-600">
          Shop shoe
        </h1>
        <div className="grid grid-cols-3 gap-10">
          {shoeList.length > 0 &&
            shoeList.map((item) => (
              <ProductItem key={item.id} item={item}></ProductItem>
            ))}
        </div>
        <ProductDetail shoeDetail={this.props.shoeDetail}></ProductDetail>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ProductList);
