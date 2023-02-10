import React, { Component } from 'react'

export default class Detail extends Component {

    componentDidMount(){
        console.log(this.props.match.params.myid);
    }

  render() {
    return (
      <div>Detail</div>
    )
  }
}
