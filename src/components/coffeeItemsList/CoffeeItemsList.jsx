import { Component } from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "../coffeeCard/CoffeeCard";
import "./style.scss";

class CoffeeItemsList extends Component {
  state = {};
  render() {
    const { coffeeList, getCardId } = this.props;
    return (
      <div className="itemsList">
        <div className="container">
          {coffeeList.map((coffee) => (
            <Link
              to={`/product/${coffee.id}`}
              key={coffee.id}
              className="itemsList__link"
            >
              <CoffeeCard {...coffee} getCardId={() => getCardId(coffee.id)} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CoffeeItemsList;
