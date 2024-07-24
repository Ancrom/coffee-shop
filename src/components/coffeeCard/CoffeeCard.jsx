import { Component } from "react";
import "./../app/textStyle.scss";
import "./style.scss";

class CoffeeListItem extends Component {
  state = {};
  render() {
    const { img, name, price, getCardId } = this.props;
    return (
      <div className="coffeeCard" onClick={getCardId}>
        <img src={img} alt={name} className="coffeeCard__img" />
				<p className="text">{name}</p>
				<p className="text bold">{price}</p>
      </div>
    );
  }
}

export default CoffeeListItem;
