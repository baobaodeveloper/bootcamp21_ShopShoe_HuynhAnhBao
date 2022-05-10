const mapDispatchToProps = (dispatch) => {
  return {
    detail: (item) => {
      dispatch({
        type: "SHOW_DETAIL",
        item,
      });
    },
    shopCardItem: (item) => {
      dispatch({
        type: "ADD_SHOPPING_CARD",
        item,
      });
    },
  };
};
