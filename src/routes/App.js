import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
import { connect } from "dva";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.props.isShow && this.props.isTest && <Tabbar />}
      </div>
    );
  }
}

export default connect((state) => {
  console.log(state);

  return {
    // 可以直接传值给当前组件 (this.props.a)
    a: 1,

    // 这里代表共享状态 通过state.maizuo.isShow
    isShow: state.maizuo1.isShow,
    isTest: state.test.isTest,
  };
})(App);
