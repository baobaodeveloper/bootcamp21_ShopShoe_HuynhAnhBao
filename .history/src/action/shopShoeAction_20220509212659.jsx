const mapDispatchToProps = (dispatch) => {
  return {
    detail: (item) => {
      dispatch({
        type: "SHOW_DETAIL",
        item,
      });
    },
  };
};
