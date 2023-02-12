import React, { Component } from "react";
import { connect } from "dva";

class Cinema extends Component {
  componentDidMount() {
    if (this.props.list.length === 0) {
      // dispatch
      this.props.dispatch({
        type: "maizuo1/getCinemaList",
      });
    } else {
      console.log("缓存");
    }
  }

  render() {
    return <div>Cinema</div>;
  }
}

export default connect((state) => {
  console.log(state);
  return {
    list: state.maizuo1.list,
  };
})(Cinema);
