import { connect } from "dva";
import React, { Component } from "react";

class Detail extends Component {
  componentDidMount() {
    console.log(this.props.match.params.myid);

    console.log(this.props);

    this.props.dispatch({
      // maizuo1 ( 命名空间 )
      type: "maizuo1/hide",
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "maizuo1/show",
    });
  }

  render() {
    return <div>Detail</div>;
  }
}

export default connect()(Detail);
