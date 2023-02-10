import React, { Component } from "react";
import { withRouter } from "dva/router";

export default class Center extends Component {
  render() {
    return (
      <div>
        Center
        <WithChild />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.props);
            localStorage.removeItem('token')
            this.props.history.push('/login')
          }}
        >
          exit
        </button>
      </div>
    );
  }
}

const WithChild = withRouter(Child);