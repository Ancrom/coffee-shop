import { Component } from "react";
import "./../app/textStyle.scss";
import "./style.scss";

class GoodsHeader extends Component {
  state = {};
  render() {
    return (
      <div className="goodsHero">
        <div className="container">
          <h1 className="title">For your pleasure</h1>
        </div>
      </div>
    );
  }
}

export default GoodsHeader;
