import React, { Component } from "react";
import request from "../utils/request";
import "../css/Film.css";

export default class Film extends Component {
  // 1. 创建一个新状态 list空数组
  state = {
    list: [],
  };
  componentDidMount() {
    request(
      "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6513137",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16759924955895229160816641"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    ).then((res) => {
      console.log(res.data.data.films);
      // 2. 把数据赋值给状态里的空数组
      this.setState({
        list: res.data.data.films,
      });
      // this.setState = {
      //   list: res.data.data.films,
      // };
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <li
            key={item.filmId}
            onClick={() => {
              console.log(this.props);
              this.props.history.push(`/detail/${item.filmId}`);
            }}
          >
            <img
              alt={item.name}
              src={item.poster}
              style={{ width: "100vw", marginBottom: "15px" }}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </div>
    );
  }
}
