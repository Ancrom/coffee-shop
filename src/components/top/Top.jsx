import { Component } from "react";
import CoffeeItemsList from "../coffeeItemsList/CoffeeItemsList";
import "./../app/textStyle.scss";
import "./style.scss";

class Top extends Component {
  state = {};
  render() {
    const { coffeeList, getCardId } = this.props;
    return (
      <div className="top">
        <div className="container">
          <h2 className="subtitle">Our best</h2>
          <CoffeeItemsList coffeeList={coffeeList} getCardId={getCardId} />
        </div>
      </div>
    );
  }
}

export default Top;
